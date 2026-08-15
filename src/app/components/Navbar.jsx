"use client";
import { useState } from "react";
import "../styles/navbar.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { usePathname } from "next/navigation";
import Link from "next/link";





export default function Navbar() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const pathname = usePathname();


  return (
    <header id="header" className="w-full flex justify-center">
      <div
        style={{ maxWidth: "1200px" }}
        className="w-full h-24 bg-bgColor mb-1 text-white flex justify-between"
      >
        <div className="flex items-center ms-3 md:ms-0">
          <Link href="/">
            <h1 className="font-bold">Rayane Hiouani</h1>
          </Link>
        </div>

        <div className="hidden md:flex justify-center gap-5 items-center">
          <Link
            href="/"
            className="cursor-pointer font-medium text-white"
          >
            Home
          </Link>
          <Link
            href="/#projects"
            className="cursor-pointer font-medium text-white"
          >
            Projects
          </Link>
          <Link
            href="/#skills"
            className="cursor-pointer font-medium text-white"
          >
            Skills
          </Link>
        </div>
        <div
          id="hamburger"
          className="flex md:hidden justify-center items-center me-3 cursor-pointer"
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



      <Offcanvas className="bg-bgColor" style={{ width: "100%" }} show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton closeVariant="white" style={{ marginTop: "20px" }}>
          <Offcanvas.Title className="text-white font-bold">Rayane Hiouani</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ overflow: "hidden" }}>
          <div
            className="w-full h-screen mt-3"
          >

            <Link href="/" onClick={handleClose} className="block text-white text-sm w-11/12 pt-4 pb-3 border-b border-slate-600 font-semibold">Home</Link>
            <Link href="/#projects" onClick={handleClose} className="block text-white text-sm w-11/12 pt-4 pb-3 border-b border-slate-600 font-semibold">Projects</Link>
            <Link href="/#skills" onClick={handleClose} className="block text-white text-sm w-11/12 pt-4 pb-3 border-b border-slate-600 font-semibold">Skills</Link>

          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
}
