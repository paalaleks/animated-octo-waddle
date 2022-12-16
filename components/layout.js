import Footer from "./footer";
import Head from "next/head";

const Layout = ({ children, pageTitle, pageName, pageContent }) => (
  <>
    <Head>
      <title>{pageTitle}</title>
      <meta name={pageName} content={pageContent} />
    </Head>

    <div className="page-container">
      <div
        className="roses"
        style={{
          backgroundImage: `url(${"/roses.png"})`,
        }}
      ></div>
      {children}
    </div>
    <Footer />
  </>
);

export default Layout;
