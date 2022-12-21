const CommentsList = ({ comments }) => {
  if(comments.length === 0) {
    return (
      <h3>No comments yet</h3>
    );
  } else {
    return (
      <>
      <h3>Comments:</h3>
      {comments.map(comment => (
          <div className="comment" key={comment.postedBy + ': ' + comment.date}>
              <p className="mb-0">On {comment.date}</p>
              <p>{comment.postedBy} said:</p>
              <p>{comment.text}</p>
              <hr />
          </div>
      ))}
      </>
    );
      };
    };

export default CommentsList;