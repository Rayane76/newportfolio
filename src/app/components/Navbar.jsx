"use client";
import { useState } from "react";
import "../styles/navbar.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';




export default function Navbar() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  
  return (
    <header id="header" className="w-full flex justify-center">
      <div
        style={{ maxWidth: "1200px" }}
        className="w-full h-24 bg-bgColor mb-1 text-white flex justify-between"
      >
        <div className="flex items-center ms-5 md:ms-0">
          <h1 className="font-bold">Rayane Hiouani</h1>
        </div>

        <div className="hidden md:flex justify-center gap-5 items-center">
          <a href="/" className="cursor-pointer font-medium">
            Home
          </a>
          <a href="/about" className="cursor-pointer font-medium">
            About
          </a>
          <a href="/projects" className="cursor-pointer font-medium">
            Projects
          </a>
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
           <a href="/about"><h1 className="text-white text-sm	w-11/12 pt-4 pb-3 border-b border-slate-600 font-semibold">About</h1></a>
           <a href="/projects"><h1 className="text-white text-sm	w-11/12 pt-4 pb-3 border-b border-slate-600 font-semibold">Projects</h1></a>

      </div>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
}
