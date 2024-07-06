"use client";
import { useState , useEffect } from "react";
import "../styles/navbar.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { usePathname } from "next/navigation";





export default function Navbar() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const pathname = usePathname();

  let lastScrollTop = 0;
  if (typeof window !== "undefined") {
window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;

    const navbar = document.getElementById("header");

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.classList.remove("hide");
        navbar.classList.add("show")
    } else {
        // Scrolling up or at the top
        navbar.classList.remove("show");
        navbar.classList.add("hide");
    }

    lastScrollTop = scrollTop;
});
  }

  
  return (
    <header id="header" className="w-full flex justify-center sticky z-40 top-0">
      <div
        style={{ maxWidth: "1200px" }}
        className="w-full h-24 bg-bgColor mb-1 text-white flex justify-between"
      >
        <div className="flex items-center ms-5 md:ms-0">
          <h1 className="font-bold">Rayane Hiouani</h1>
        </div>

        <div className="hidden md:flex justify-center gap-5 items-center">
          <a href="/" 
          className="cursor-pointer font-medium text-white"
          // className={`cursor-pointer font-medium hover:text-white ${(pathname === "/") ? "text-white" :  "text-white/50"}`}
          >
            Home
          </a>
          <span 
           onClick={()=>{var myElement = document.getElementById('projects');myElement.scrollIntoView() }}
           className="cursor-pointer font-medium text-white"
          // className={`cursor-pointer font-medium hover:text-white ${(pathname.includes("/about")) ? "text-white" :  "text-white/50"}`}
          >
            Projects
          </span>
          <span
          onClick={()=>{var myElement = document.getElementById('skills');myElement.scrollIntoView() }}
           className="cursor-pointer font-medium text-white"
          //  className={`cursor-pointer font-medium hover:text-white ${(pathname.includes("/projects")) ? "text-white" :  "text-white/50"}`}
           >
            Skills
          </span>
        </div>
        <div
          id="hamburger"
          className="flex md:hidden justify-center items-center me-5 cursor-pointer"
          onClick={() => setShow(true)}
        >
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      

      <Offcanvas className="bg-bgColor" style={{width:"100%"}} show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton closeVariant="white" style={{marginTop:"20px"}}>
          <Offcanvas.Title className="text-white font-bold">Rayane Hiouani</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{overflow:"hidden"}}>
        <div 
      className="w-full h-screen mt-3"
      >

           <a href="/"><h1 className="text-white text-sm	w-11/12 pt-4 pb-3 border-b border-slate-600 font-semibold">Home</h1></a>
           <span onClick={()=>{var myElement = document.getElementById('projects');setShow(false);myElement.scrollIntoView() }}><h1 className="text-white text-sm	w-11/12 pt-4 pb-3 border-b border-slate-600 font-semibold cursor-pointer">Projects</h1></span>
           <span onClick={()=>{var myElement = document.getElementById('skills');setShow(false);myElement.scrollIntoView() }}><h1 className="text-white text-sm	w-11/12 pt-4 pb-3 border-b border-slate-600 font-semibold cursor-pointer">Skills</h1></span>

      </div>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
}
