import { useState, useEffect } from 'react';
import axios from 'axios';
import useUser from './../hooks/useUser';

const AddCommentForm = ({articleName, onArticleUpdated}) => {
  const [name, setName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [commentDate, setCommentDate] = useState('');

//UseEffect to load the date and time when the comment is posted
    useEffect(() => {
      const loadDate = () => {
        const date = new Date();
        const dateAndTime = date.toLocaleString();
        setCommentDate(dateAndTime);
      }
      loadDate();
    }, [name, commentText, commentDate]);

  const { user } = useUser();

  const addComment = async () => {
    // if form input is empty, the comment is not added to the database
    if (commentText === '') {
      return;
    // if form input is not empty, the comment is added to the database  
    } else {
      const token = user && await user.getIdToken();
      const headers = token ? {authtoken: token} : {};
      const response = await axios.post(`/api/articles/${articleName}/comments`, {
        postedBy: name,
        text: commentText,
        date: commentDate
      }, {headers});
      
      const updatedArticle = response.data;
      onArticleUpdated(updatedArticle);
      setName('');
      setCommentText('');
      setCommentDate('');
    }
  };

  return (
    <>
      <div className="row add-comment-form">
        <div className="col-6">
          <form>
            {user && <h6>If you leave a comment for this article, you are posting as <span className='comment-section'>{user.email}</span></h6>}
            <label>
              <h6>Comment:</h6>
              <textarea
                value={commentText}
                onChange={(event) => setCommentText(event.target.value)}
                rows="4"
                cols="33"
                required
              />
            </label><br></br>
            {/* <input
              type="hidden"
              value={commentDate}
              onChange={(event) => setCommentDate(event.target.value)}
            /> */}
            <button onClick={addComment} className='btn btn-outline-primary'>Add comment</button>
          </form>
        </div>
      </div>
    </>
  );
};

//onClick event to fire two functions at the same time
//  onClick={(event) => {addComment(); getDate();}}


export default AddCommentForm;
