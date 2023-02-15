import { useState, useEffect } from "react";
import { ProductProps } from "@/pages/products";
import { PostProps } from "@/pages/posts";
import { UserType } from "@/pages/users";

interface HookProps {
  products: ProductProps[];
  posts: PostProps[];
  users: UserType[];
}

const useFetch = ({ products, posts, users }: HookProps) => {
  const [keyword, setKeyWord] = useState("");
  const [postsResults, setpostsResults] = useState(posts);
  const [usersResults, setUsersResults] = useState(users);

  const [productsResults, setProductResults] = useState(products);

  useEffect(() => {
    if (keyword.length > 3) {
      fetch(`https://dummyjson.com/products/search?q=${keyword}`)
        .then((res) => res.json())
        .then((res) => setProductResults(res.products));
    } else {
      setProductResults(products);
    }
    if (keyword.length > 3) {
      fetch(`https://dummyjson.com/posts/search?q=${keyword}`)
        .then((res) => res.json())
        .then((res) => setpostsResults(res.posts));
    } else {
      setpostsResults(posts);
    }
    if (keyword.length > 3) {
      fetch(`https://dummyjson.com/users/search?q=${keyword}`)
        .then((res) => res.json())
        .then((res) => setUsersResults(res.users));
    } else {
      setUsersResults(users);
    }
  }, [keyword]);

  return { keyword, setKeyWord, productsResults, postsResults, usersResults };
};
export default useFetch;
