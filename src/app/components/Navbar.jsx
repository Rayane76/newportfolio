



export default function Navbar(){
    return(
       <header className="w-full flex justify-center">
        <div style={{maxWidth:"1200px"}} className="w-full h-24 bg-bgColor mb-1 text-white flex justify-between">
            <div className="flex items-center ms-5 md:ms-0">
               <h1 className="font-bold">Rayane Hiouani</h1>
            </div>

            
            <div className="hidden md:flex justify-center gap-5 items-center">
                <a href="/" className="cursor-pointer font-medium">Home</a>
                <a href="/about" className="cursor-pointer font-medium">About</a>
                <a href="/projects" className="cursor-pointer font-medium">Projects</a>
            </div>
            <div className="flex md:hidden justify-center items-center me-5 cursor-pointer">
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6H20M4 12H20M4 18H20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
            </div>
        </div>
        </header> 
    )
}