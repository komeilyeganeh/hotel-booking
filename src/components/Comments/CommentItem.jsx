import { ImQuotesLeft } from "react-icons/im";
import StarComment from "./StarComment";
import { Fragment } from "react";

const CommentItem = ({ comment }) => {
  return (
    <Fragment>
      <ImQuotesLeft className="absolute top-3 left-4 text-gray-200 text-6xl" />
      <img src={comment.src} alt="user" className="rounded-full w-1/4" />
      <div className="flex flex-col gap-y-1">
        <h3 className="text-base">{comment.name}</h3>
        <p className="text-gray-500 italic">{comment.city}</p>
      </div>
      <StarComment />
      <p className="text-gray-600 text-sm text-justify leading-7">
        {comment.text}
      </p>
    </Fragment>
  );
};

export default CommentItem;
