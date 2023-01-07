export default function Navbar() {
  return (
    <>
    <div className="header">
      <div className="container navigation">
        <a href="#">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU"
            alt=""
          />
        </a>
        <div className="nav-menu">
          <div className="menu-bar">
            <a href="#" className="underline">
              Home
            </a>
            <div className="menu-2">
              <a href="#full-2" className="underline" id="my-service">
                Services{" "}
                <i className="fa-sharp fa-solid fa-caret-down my-serices" />
              </a>
              <div id="services" >services</div>
            </div>

            <div className="pages">
              <a href="#pages" className="underline" id="my-pages">
                Pages <i className="fa-sharp fa-solid fa-caret-down" />
              </a>
              <div id="pages" >pages</div>
            </div>
            <div className="case-study">
              <a href="#case-study" className="underline">
                Case Study <i className="fa-sharp fa-solid fa-caret-down" />
              </a>
              <div id="case-study" >case study</div>
            </div>
            <div className="blog">
              <a href="#" id="my-blog" className="underline">
                Blog <i className="fa-sharp fa-solid fa-caret-down" />
              </a>
              <div id="blog" >blog</div>
            </div>
            <a href="#" className="underline">
              Contacts
            </a>
          </div>
        </div>
        {/* <!-- hamburger --> */}
        <div className="hamburger">
          <input type="checkbox" id="navi-toggle" className="checkbox" />
          <label className="button">
            <span className="icon">&nbsp;</span>
          </label>
          <div className="background">background</div>
        </div>
        <div className="nav-icon">
          <a href="#">
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
    <div className="test"></div>
    </>
  );
}
