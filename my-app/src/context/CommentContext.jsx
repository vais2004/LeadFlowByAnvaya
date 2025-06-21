import axios from "axios";
import { createContext, useContext, useState } from "react";

const CommentContext = createContext();
const useCommentContext = () => useContext(CommentContext);

export default useCommentContext;

export function CommentProvider({ children }) {
  const [comments, setComments] = useState([]);

  async function getAllComments(leadId) {
    try {
      const response = await axios.get(
        `https://lead-flow-by-anvaya-backend.vercel.app/leads/${leadId}/comments`
      );

      if (response) {
        setComments(response.data);
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
        setComments((prevComments) => [...prevComments, response.data]);
      }
    } catch (error) {
      console.log("Error while posting comment:", error);
    }
  }

  return (
    <CommentContext.Provider value={{ comments, getAllComments, addComment }}>
      {children}
    </CommentContext.Provider>
  );
}
