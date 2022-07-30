import Layout from "../components/layout";
import { fetchAPI } from "../lib/api";
import Articles from "../components/articles";
import Link from "next/link";

const Home = ({ articles, categories }) => {
  return (
    <Layout>
      <div className="section">
        <div className="container intro">
          <div className="intro-container">
            <div
              className="logo"
              style={{
                backgroundImage: `url(${"/paal.svg"})`,
              }}
            ></div>
            <div
              className="logo_2"
              style={{
                backgroundImage: `url(${"/paal_2.svg"})`,
              }}
            ></div>
            <p>
              Farmer boy and railroadworker from Telemark looking for a job in
              tech. Check out{" "}
              <a
                className="classic-link"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/paalaleks"
              >
                Github
              </a>{" "}
              to see some of my code. I also want to show you my{" "}
              <a
                className="classic-link"
                href="http://www.fullstakk.as/article/artwork"
              >
                artwork
              </a>
              .Get in touch by{" "}
              <a
                className="classic-link"
                href="mailto:paalaleks@hotmail.com?subject=Message%20via%20fullstakk.as"
              >
                email
              </a>{" "}
              or message me through{" "}
              <a
                className="classic-link"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/fullstakk/"
              >
                LinkedIn
              </a>
              . Looking forward to hear from you! This is my tech stack so far:
            </p>
          </div>
          <div className="skills">
            <p className="code">
              {categories.map((skill, i) => {
                // console.log(skill.attributes.articles.data.length > 0)

                if (
                  skill.attributes.type === "code" &&
                  skill.attributes.articles.data.length > 0
                ) {
                  return (
                    <Link
                      href={`/category/${skill.attributes.slug}`}
                      key={skill.id}
                    >
                      <a className="badge-active">{skill.attributes.name}</a>
                    </Link>
                  );
                } else if (skill.attributes.type === "code") {
                  return (
                    <a key={skill.id} className="badge">
                      {skill.attributes.name}
                    </a>
                  );
                }
              })}
            </p>
            <p className="design">
              {categories.map((skill, i) => {
                if (
                  skill.attributes.type === "design" &&
                  skill.attributes.articles.data.length > 0
                ) {
                  return (
                    <Link
                      href={`/category/${skill.attributes.slug}`}
                      key={skill.id}
                    >
                      <a className="badge-active">{skill.attributes.name}</a>
                    </Link>
                  );
                } else if (skill.attributes.type === "design") {
                  return (
                    <a key={skill.id} className="badge">
                      {skill.attributes.name}
                    </a>
                  );
                }
              })}
            </p>
            <p className="trait">
              {categories.map((skill, i) => {
                if (
                  skill.attributes.type === "trait" &&
                  skill.attributes.articles.data.length > 0
                ) {
                  return (
                    <Link
                      href={`/category/${skill.attributes.slug}`}
                      key={skill.id}
                    >
                      <a className="badge-active">{skill.attributes.name}</a>
                    </Link>
                  );
                } else if (skill.attributes.type === "trait") {
                  return (
                    <a key={skill.id} className="badge">
                      {skill.attributes.name}
                    </a>
                  );
                }
              })}
            </p>
          </div>
          <div className="second-section">
            <div
              className="page-break"
              style={{
                backgroundImage: `url(${"/page-break.png"})`,
              }}
            ></div>
            <Articles articles={articles} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes] = await Promise.all([
    fetchAPI("/articles", { populate: "*" }),
    fetchAPI("/categories", { populate: "*" }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
    },
    revalidate: 1,
  };
}

export default Home;
