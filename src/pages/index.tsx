import Head from "next/head";
import Image from "next/image";
import Search from "@/components/search/Search";
import useFetch from "@/components/hooks/useFetch";
import { UserType } from "./users";
import { PostProps } from "./posts";
import { ProductProps } from "./products";

interface HeroProps {
  products: ProductProps[];
  users: UserType[];
  posts: PostProps[];
}

export default function Home(props: HeroProps) {
  const { posts, products, users } = props;
  const { keyword, setKeyWord, productsResults, postsResults, usersResults } =
    useFetch({ products, users, posts });
  console.log(postsResults);
  console.log(usersResults);
  console.log(productsResults);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Search keyword={keyword} setKeyWord={setKeyWord} />

      <div className="grid w-4/5 mx-auto ">
        <div>Products</div>
        <div className="grid lg:grid-cols-4 gap-4 py-4">
          {productsResults.map((item) => (
            <div
              key={item.id}
              className="border flex flex-col p-2 rounded-md gap-4 "
            >
              <div className="grid self-center h-[70px] text-ellipsis max-w-max text-blue-800 bold text-2xl font-bold">
                {item.title}
              </div>
              <p className="h-[70px] text-ellipsis overflow-hidden ">
                {item.description}
              </p>
              <button className="min-w-[80px] grid self-center bg-slate-500 rounded-md p-2 max-w-max text-white">
                {item.price} $
              </button>
            </div>
          ))}
        </div>

        <div>Users</div>
        <div className="grid gap-4 lg:grid-cols-4 w-4/5 mx-auto">
          {usersResults.map((user) => (
            <div
              key={user.id}
              className="grid w-full justify-center border-2 mx-auto rounded-md"
            >
              <div className="flex  w-[40px] mx-auto text-white my-4">
                <Image
                  src={user.image}
                  alt=""
                  width={50}
                  height={50}
                  className="aspect-square rounded-full
              object-cover bg-slate-400
           "
                />
              </div>
              <div className="text-2xl text-black font-bold py-2">
                {user.firstName} {user.lastName}
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-blue-800">{user.email}</div>
                <div>SSN: {user.ssn}</div>
                <div className="py-2">
                  <span>D.O.B: {user.birthDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>Posts</div>
        <div className="grid gap-4 p-2 lg:grid-cols-3">
          {postsResults.map((item) => (
            <div key={item.id} className="border-2  p-4 rounded-md">
              <div className="flex flex-col gap-2">
                <h3 className="text-center py-2 text-2xl font-bold">
                  {item.title}
                </h3>
                <p>{item.body}</p>
                <div className="flex gap-4">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const product_res = await fetch(
    "https://dummyjson.com/products?limit=4&skip=4&select=title,price,description"
  );
  const { products } = await product_res.json();

  const posts_res = await fetch(
    "https://dummyjson.com/posts?limit=4&skip=4&select=title,body,reactions,userId,tags"
  );
  const { posts } = await posts_res.json();

  const user_res = await fetch(
    "https://dummyjson.com/users?limit=4&skip=4&select=firstName,age,lastName,image,email,ssn,birthDate"
  );
  const { users } = await user_res.json();
  console.log(posts.tags);
  return {
    props: {
      products,
      posts,
      users,
    },
  };
}