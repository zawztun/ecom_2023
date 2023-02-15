import React from "react";
import { ProductProps } from "@/pages/products";

interface HeroProps {
  results: ProductProps[];
}

const ProductLists = ({ results }: HeroProps) => {
  console.log({ results });
  return (
    <div className="grid w-3/4 mx-auto ">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4 py-4">
        {results.map((item) => (
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
    </div>
  );
};
export default ProductLists;
