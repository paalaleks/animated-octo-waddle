import React from "react";
import Link from "next/link";

const Card = ({ article }) => {
  const MAX_LENGTH = 200;

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
            {article.attributes.categories.data.map((cat, i) => {
              return (
                <span className="mini-badge" key={i}>
                  {cat.attributes.name}
                </span>
              );
            })}
          </div>

          <p>{article.attributes.content.substring(0, MAX_LENGTH) + "..."}</p>
        </header>
      </a>
    </Link>
  );
};

export default Card;
