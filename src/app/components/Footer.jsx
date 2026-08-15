

function Footer() {
  return (
    <footer className="w-full flex justify-center">
      <div style={{ width: "1000px" }} className="flex flex-col w-screen px-5 py-10 border-t border-fun-pink-darker z-5 bg-bg">
        <div className="w-full max-w-4xl m-auto flex justify-between items-start">

          <div className="text-left mb-5 sm:mb-0">
            <h4 className="uppercase text-fun-gray text-sm font-bold">
              Pages
            </h4>
            <div>
              <div className="my-4 flex flex-col gap-3">
                <span className="cursor-pointer text-white text-base font-medium w-fit">Home</span>
                <span className="cursor-pointer text-white text-base font-medium w-fit">Projects</span>
                <span className="cursor-pointer text-white text-base font-medium w-fit">Skills</span>
              </div>
            </div>
          </div>

          <div className="text-left mb-5 sm:mb-0">
            <h4 className="uppercase text-fun-gray text-sm font-bold">
              Social
            </h4>
            <div>
              <div className="my-4 flex flex-col gap-3">
                <a
                  href="https://github.com/Rayane76"
                  target="_blank"
                  className="items-center flex text-white font-medium w-fit"
                >
                  <span className="pr-2 -mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7B89A8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </span>

                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/rayane-hiouani-1794512a4/"
                  target="_blank"
                  className="items-center flex text-white font-medium w-fit"
                >
                  <span className="pr-2 mb-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z" stroke="#7B89A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6 9H2V21H6V9Z" stroke="#7B89A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#7B89A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>

                  Linkedin
                </a>

                <a
                  href="mailto:rayanehiouani.rh@gmail.com"
                  target="_blank"
                  className="items-center flex text-white font-medium w-fit"
                >
                  <span className="pr-2">

                    <svg width="20px" height="20px" viewBox="0 -2.5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">

                      <g id="Page-1" stroke="#7B89A8" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -922.000000)" fill="gray">
                          <g id="icons" transform="translate(56.000000, 160.000000)">
                            <path d="M262,764.291 L254,771.318 L246,764.281 L246,764 L262,764 L262,764.291 Z M246,775 L246,766.945 L254,773.98 L262,766.953 L262,775 L246,775 Z M244,777 L264,777 L264,762 L244,762 L244,777 Z" id="email-[#1573]">

                            </path>
                          </g>
                        </g>
                      </g>
                    </svg>

                  </span>

                  Email
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;