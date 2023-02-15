import React from "react";
import Link from "next/link";

type Props = {};
const lists = [
  { name: "home", url: "/" },
  { name: "Products", url: "products" },
  { name: "users", url: "users" },
  { name: "Posts", url: "posts" },
];
const Nav = (props: Props) => {
  return (
    <div className=" bg-blue-400 sticky top-0 left-0">
      <div className="flex p-4 gap-4 justify-around text-white w-4/5 mx-auto uppercase">
        {lists.map((item) => (
          <Link href={`/${item.url}`} key={item.name}>
            <div className="border-b-4 border-transparent hover:border-red-900">
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Nav;
