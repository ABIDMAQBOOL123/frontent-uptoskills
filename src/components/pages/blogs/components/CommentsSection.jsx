import React, { useState } from "react";
import styles from "./CommentsSection.module.css";

const CommentsSection = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, newComment]);
    setNewComment("");
  };

  return (
    <div className={styles.commentsSection}>
      <h3>Comments</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div className={styles.commentsList}>
        {comments.map((comment, index) => (
          <div key={index} className={styles.comment}>
            {comment}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;
