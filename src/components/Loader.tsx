import { Comment } from "react-loader-spinner";

export function Loader() {
  return (
    <Comment
      visible={true}
      height="80"
      width="80"
      ariaLabel="comment-loading"
      wrapperStyle={{}}
      wrapperClass="comment-wrapper"
      color="#dfdfdfff"
      backgroundColor="#ab9794ff"
    />
  );
}
