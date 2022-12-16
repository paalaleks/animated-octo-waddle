import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import Card from "../../components/card";

const Category = ({ category, categories, homepage }) => {
  const router = useRouter();

  return (
    <Layout
      pageContent="Here you can check all my work in one category"
      pageTitle={`here you can check all my ${category.attributes.name} work`}
      pageName={`Fullstakk AS – ${category.attributes.name}`}
      categories={categories.data}
    >
      <div className="topbar">
        <i className="fa-solid fa-xmark" onClick={() => router.back()}></i>
      </div>
      <div className="section">
        <div className="category-container">
          <h1>{category.attributes.name}</h1>
          {category.attributes.articles.data.map((article, i) => {
            return (
              <Card article={article} key={`${article.attributes.slug}`} />
            );
          })}
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
