import React from "react";
import Card from "./card";

const Articles = ({ articles }) => {
  return (
    <>
      <div className="blog-excerpt">
        {articles.map((article, i) => {
          return <Card article={article} key={`${article.attributes.slug}`} />;
        })}
      </div>
    </>
  );
};

export default Articles;
