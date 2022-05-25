import React from "react";
import { useQuery } from "react-query";
import ToolCard from "./ToolCard";

const Tools = () => {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery("products", () =>
    fetch("https://wood-store.herokuapp.com/products").then((res) => res.json())
  );
  return (
    <>
      <h2 className="text-center py-12 text-4xl">Our Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4 md:px-8 lg:px-32 ">
        {products?.map((product) => (
          <ToolCard key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Tools;
