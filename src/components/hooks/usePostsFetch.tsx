import { useState, useEffect } from "react";
import { PostProps } from "@/pages/posts";

interface PostsHookProps {
  posts: PostProps[];
}
const usePostsFetch = ({ posts }: PostsHookProps) => {
  const [keyword, setKeyWord] = useState(" ");
  const [postsResults, setPostsResults] = useState(posts);

  useEffect(() => {
    const res = posts.filter((post) =>
      post.title.toLowerCase().includes(keyword)
    );
    if (keyword.length < 3) {
      setPostsResults(posts);
    } else {
      setPostsResults(res);
    }
  }, [keyword]);

  return { postsResults, setKeyWord, keyword };
};

export default usePostsFetch;
