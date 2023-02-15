import React from "react";
import { useState, useEffect } from "react";
import { ProductProps } from "@/pages/products";

type HookProps = {
  products: ProductProps[];
};

const useProductsFetch = ({ products }: HookProps) => {
  const [keyword, setKeyWord] = useState("");
  const [results, setResults] = useState(products);

  useEffect(() => {
    const res = products.filter((product) =>
      product.title.toLowerCase().includes(keyword)
    );
    if (keyword.length < 3) {
      setResults(products);
    } else {
      setResults(res);
    }
  }, [keyword]);

  return { keyword, results, setKeyWord };
};
export default useProductsFetch;
