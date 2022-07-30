import React from "react";
import Link from "next/link";
import Image from "next/image";
// import NextImage from "./image"

const Card = ({ article }) => {
  // console.log(homepage)
  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <a className="article-href">
        <div
          className="bg-img"
          style={{
            backgroundImage: `url(${article.attributes.image.data.attributes.url})`,
          }}
        ></div>
        <header>
          <h2>{article.attributes.title}</h2>
          <div>
            {console.log(article)}
            {article.attributes.categories.data.map((cat, i) => {
              return (
                <span className="mini-badge" key={i}>
                  {cat.attributes.name}
                </span>
              );
            })}
          </div>
          <p>{article.attributes.description}</p>
        </header>
      </a>
    </Link>
  );
};

export default Card;
