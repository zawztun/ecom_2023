import Nav from "@/components/Nav";
import React from "react";
const Container = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default Container;
