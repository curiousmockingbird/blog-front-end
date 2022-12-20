import { useState } from 'react';
import axios from 'axios';

const AddCommentForm = ({articleName, onArticleUpdated}) => {
  const [name, setName] = useState('');
  const [commentText, setCommentText] = useState('');
  
  const addComment = async () => {
    // if form input is empty, the comment is not added to the database
    if (name === '' || commentText === '') {
      return;
    // if form input is not empty, the comment is added to the database  
    } else {
      const response = await axios.post(`/api/articles/${articleName}/comments`, {
        postedBy: name,
        text: commentText
      });
      const updatedArticle = response.data;
      onArticleUpdated(updatedArticle);
      setName('');
      setCommentText('');
    }
  };

  return (
    <>
      <div className="row add-comment-form">
        <div className="col-6">
          <form>
            <h3>Add a comment</h3>
            <label>
              <h6> Name:</h6>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                type="text"
                required
              />
            </label>
            <br></br>
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
            <button onClick={addComment} className='btn btn-outline-primary'>Add comment</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCommentForm;
