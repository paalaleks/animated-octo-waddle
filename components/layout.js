const Layout = ({ children, img, categories, seo }) => (
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
    <footer>
      <div className="footer-container">
        <a className="classic-link" href="">
          About
        </a>
        <a className="classic-link" href="">
          Artwork
        </a>
        <a href="mailto:paalaleks@hotmail.com?subject=Message%20via%20fullstakk.as">
          <i className="fa-solid fa-envelope"></i>Email
        </a>
        <a href="https://www.linkedin.com/in/fullstakk/">
          <i className="fa-brands fa-linkedin"></i>LinkedIn
        </a>
        <a href="https://github.com/paalaleks">
          <i className="fa-brands fa-github-square"></i>Github
        </a>
        <span>©2022 Fullstakk AS</span>
      </div>
    </footer>
  </>
);

export default Layout;
