import axios from "axios";

import { createContext, useContext, useState } from "react";

const CommentContext = createContext();
const useCommentContext = () => useContext(CommentContext);

export default useCommentContext;

export function CommentProvider({ children }) {
  const [comment, setComment] = useState([]);

  async function getAllComments(leadId) {
    try {
      const response = await axios.get(
        `https://lead-flow-by-anvaya-backend.vercel.app/leads/${leadId}/comments`
      );

      if (response) {
        setComment(response.data);
      }
    } catch (error) {
      console.log("Error while fetching comments:", error);
    }
  }

  async function addComment(commentData, leadId) {
    try {
      const response = await axios.post(
        `https://lead-flow-by-anvaya-backend.vercel.app/leads/${leadId}/comments`,
        commentData
      );

      if (response) {
        setComment((prevComments) => [...prevComments, response.data]);
      }
    } catch (error) {
      console.log("Error while posting comment:", error);
    }
  }

  return (
    <CommentContext.Provider value={{ comment, getAllComments, addComment }}>
      {children}
    </CommentContext.Provider>
  );
}
