import React, { useRef, useEffect, Children } from 'react';
export default function Navbar() {
  const headerRef = useRef(null);
  useEffect(() => {
   const button = document.getElementsByClassName("button")[0];
    button.addEventListener("click",()=>{
    document.getElementById("background").classList.toggle("slip");
    button.classList.toggle("active");
    console.log(button);
    
    });
  }, [headerRef])
  return (
    <>
      <div className="header" ref={headerRef}>
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
            <input type="checkbox" id="navi-toggle" className="checkbox"/>
            <label className="button">
              {/* <span className="icon" id="icon">&nbsp;</span> */}
              <span></span>
              <span></span>
              <span></span>
            </label>
            <div className="background" id='background'>background</div>
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