import React from "react";
import { PostProps } from "@/pages/posts";

type Props = {
  results: PostProps[];
};

const PostsList = ({ results }: Props) => {
  return (
    <div>
      <div className="grid gap-4 p-2 lg:grid-cols-3">
        {results.map((item) => (
          <div key={item.id} className="border-2  p-4 rounded-md">
            <div className="flex flex-col gap-2">
              <h3 className="text-center py-2 text-2xl font-bold">
                {item.title}
              </h3>
              <p>{item.body}</p>
              <div className="flex gap-2">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsList;
