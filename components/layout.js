import Footer from "./footer";

const Layout = ({ children }) => (
  <>
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
