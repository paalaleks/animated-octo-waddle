import Articles from "../../components/articles";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import { useRouter } from "next/router";

const Category = ({ category, categories, homepage }) => {
  const router = useRouter();

  console.log(homepage);

  return (
    <Layout
      categories={categories.data}
      // img={homepage.attributes.sideImg.data.attributes.url}
    >
      <div className="topbar">
        <i className="fa-solid fa-xmark" onClick={() => router.back()}></i>
      </div>
      <div className="section">
        <div className="container">
          <h1>{category.attributes.name}</h1>
          <Articles articles={category.attributes.articles.data} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const categoriesRes = await fetchAPI("/categories", { fields: ["slug"] });

  return {
    paths: categoriesRes.data.map((category) => ({
      params: {
        slug: category.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const matchingCategories = await fetchAPI("/categories", {
    filters: { slug: params.slug },
    populate: {
      articles: {
        populate: "*",
      },
    },
  });
  const allCategories = await fetchAPI("/categories");

  return {
    props: {
      category: matchingCategories.data[0],
      categories: allCategories,
    },
    revalidate: 1,
  };
}

export default Category;
