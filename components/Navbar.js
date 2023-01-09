import img5 from '../image/webiplay-high-resolution-logo-color-on-transparent-background.png'

export default function Navbar() {
  return (
    <>
    <div className="header">
      <div className="container navigation">
        <a href="https://www.google.com/">
          <img
            src={img5}
            alt="logo"
          />
        </a>
        <div className="nav-menu">
          <div className="menu-bar">
            <a href="https://www.google.com/" className="underline">
              Home
            </a>
            <div className="menu-2">
              <a href="https://www.google.com/full-2" className="underline" id="my-service">
                Services{" "}
                <i className="fa-sharp fa-solid fa-caret-down my-serices" />
              </a>
              <div id="services" >services</div>
            </div>

            <div className="pages">
              <a href="https://www.google.com/pages" className="underline" id="my-pages">
                Pages <i className="fa-sharp fa-solid fa-caret-down" />
              </a>
              <div id="pages" >pages</div>
            </div>
            <div className="case-study">
              <a href="https://www.google.com/case-study" className="underline">
                Case Study <i className="fa-sharp fa-solid fa-caret-down" />
              </a>
              <div id="case-study" >case study</div>
            </div>
            <div className="blog">
              <a href="https://www.google.com/" id="my-blog" className="underline">
                Blog <i className="fa-sharp fa-solid fa-caret-down" />
              </a>
              <div id="blog" >blog</div>
            </div>
            <a href="https://www.google.com/" className="underline">
              Contacts
            </a>
          </div>
        </div>
        {/* <!-- hamburger --> */}
        <div>
          <input id="checkbox" type="checkbox" className="checkbox" />
          <label htmlFor="checkbox" className="button">
            <span className="icon">&nbsp;</span>
          </label>
          <div className="background">background</div>
        </div>
        {/* header  */}
        <div className="nav-icon">
          <a href="https://www.google.com/">
            <span id="iconup" className=" material-symbols-outlined">
              shopping_bag
            </span>
          </a>
          <div className="search-box">
            <button className="btn-search">
              <i id="iconsearch" className="fa-solid fa-magnifying-glass" />
            </button>
            <input
              type="text"
              className="input-search"
              placeholder="Search here..."
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
