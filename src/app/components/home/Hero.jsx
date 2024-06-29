import "../../styles/hero.css"


export default function Hero(){
    return(
        <>
        <div
          className="text-white relative heroElem w-full pt-10 md:pt-20 pb-40 m-auto flex justify-center text-center flex-col items-center z-1"
          style={{ maxWidth: "1200px" }}
        >
          <p className="text-xl mb-5">Hey, I'm Rayane.</p>
          <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg">
            I enjoy building <span style={{color:"rgb(0,199,255)"}} className="text-fun-pink">innovative</span> and{" "}
            <span style={{color:"rgb(0,199,255)"}} className="text-fun-pink">interactive</span> web applications.
            <img
              className="sqD squiggle-hero-html w-16 top-[-90px] right-[5%] sm:top-[-90px] sm:right-[170px]"
              style={{ animationDelay: "0.1s" }}
              src="/hero/html.svg"
            />
            <img
              className="sqD hidden squiggle-hero-nextjs top-[75px] right-0 w-11"
              style={{ animationDelay: "0.2s" }}
              src="/hero/nextjs.svg"
            />
            <img
              className="sqD bottom-[-380px] -right-[50px] sm:right-[-20%] lg:bottom-[-300px] lg:right-[-120px] w-[400px]"
              style={{ animationDelay: "0.3s" }}
              src="/hero/coder.svg"
            />
            <img
              className="sqD hidden sm:block bottom-[-300px] left-[-180px]"
              style={{ animationDelay: "0.4s" }}
              src="/hero/coder.svg"
            />
            <img
              className="sqD hidden sm:block left-[100px] lg:left-[160px] bottom-[-100px]"
              style={{ animationDelay: "0.5s" }}
              src="/hero/js.svg"
            />
            <img
              className="sqD bottom-[-300px] md:bottom-[-230px] right-[75%] sm:right-[45%]"
              style={{ animationDelay: "0.6s" }}
              src="/hero/nextjs-svgrepo-com.svg"
            />
            <img
              className="sqD right-[60px] sm:right-0 bottom-[-80px] md:bottom-[-50px] lg:[5%]"
              style={{ animationDelay: "0.7s" }}
              src="/hero/css-svgrepo-com.svg"
            />
            <img
              className="sqD squiggle-hero-pop1 hidden sm:block sm:top-[-130px] sm:left-[15%] lg:top-[-130px] lg:left-[120px]"
              src="/hero/pop1.svg"
            />
            <img
              className="sqD left-[-35px] bottom-[-85px] sm:bottom-[-100px] sm:left-5 opacity-40"
              style={{ animationDelay: "0.9s" }}
              src="/hero/code.svg"
            />
          </h1>

          <div className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl rounded-full border-fun-white bg-bgColor hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors">
            Preview CV
          </div>

          </div>
          </>
    )
}