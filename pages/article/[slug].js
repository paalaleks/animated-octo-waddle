import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import NextImage from "../../components/image";
import { getStrapiMedia } from "../../lib/media";
import { useRouter } from "next/router";
import Image from "next/image";

const Article = ({ article, categories, homepage }) => {
  const imageUrl = getStrapiMedia(article.attributes.image);
  console.log(article);

  const router = useRouter();

  return (
    <Layout categories={categories.data}>
      <div className="topbar">
        <i className="fa-solid fa-xmark" onClick={() => router.back()}></i>
      </div>
      <div className="section">
        <div className="container article-container">
          <header>
            <div
              className="article-image"
              style={{
                backgroundImage: `url(${imageUrl})`,
              }}
            >
              <h1>{article.attributes.title}</h1>
            </div>
          </header>
          <ReactMarkdown>{article.attributes.content}</ReactMarkdown>
          <div>
            {article.attributes.author.data.attributes.picture && (
              <Image
                src={getStrapiMedia(
                  article.attributes.author.data.attributes.picture
                )}
                alt={
                  article.attributes.author.data.attributes.picture.data
                    .attributes.alternativeText
                }
                style={{
                  position: "static",
                  borderRadius: "20%",
                  height: 60,
                }}
              />
            )}
            <p className="">
              By {article.attributes.author.data.attributes.name}
            </p>
            <p className="">
              <Moment format="MMM Do YYYY">
                {article.attributes.published_at}
              </Moment>
            </p>
          </div>

          <main className="content">
            <ReactMarkdown>{article.attributes.content}</ReactMarkdown>
          </main>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/articles", { fields: ["slug"] });

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articlesRes = await fetchAPI("/articles", {
    filters: {
      slug: params.slug,
    },
    populate: ["image", "category", "author.picture"],
  });
  const categoriesRes = await fetchAPI("/categories");

  return {
    props: {
      article: articlesRes.data[0],
      categories: categoriesRes,
    },
    revalidate: 1,
  };
}

export default Article;

// export async function getStaticProps({ params }) {
//   const articlesRes = await fetchAPI("/articles", {
//     filters: {
//       slug: params.slug,
//     },
//     populate: ["image", "category", "author.picture"],
//   });
//   const categoriesRes = await fetchAPI("/categories");

//   return {
//     props: { article: articlesRes.data[0], categories: categoriesRes },
//     revalidate: 1,
//   };
// }
