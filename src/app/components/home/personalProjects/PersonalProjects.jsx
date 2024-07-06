import SectionTitle from "../../SectionTitle";
import Card from "../Card";



export default function PersonalProjects(){
    return(
        <div className="flex justify-center w-full">
    <div style={{maxWidth:"1200px",width:"1200px"}} className="flex flex-col text-left justify-between pt-8 relative">
      <div>
        <SectionTitle title="Personal Projects." />
      </div>

      <div className="grid grid-cols-1 gap-12 md:gap-5 md:grid-cols-3 items-start mt-5">

      <Card 
            image="portfolio.png"
            title="Old portfolio"
            desc="Old portfolio built to learn animations with GSAP." 
            techs={["NextJs" , "Bootstrap" , "GSAP"]}
            link="https://rayanehiouani.vercel.app/"  
            github="https://github.com/Rayane76/Portfolio"
            />

<Card 
            image="gip.png"
            title="E-commerce website"
            desc="E-commerce website built while learning NextJs" 
            techs={["NextJs" , "Bootstrap" , "Mongodb"]}
            link="https://gip-lemon.vercel.app/"  
            github="https://github.com/Rayane76/gip"
            />

<Card 
            image="pfe.png"
            title="Medica"
            desc="Final year project for a bachelor's degree." 
            techs={["NextJs" , "Bootstrap" , "Mongodb"]}
            link="#"  
            github="https://github.com/Rayane76/pfe"
            />

<Card 
            image="gdgHack.png"
            title="Event Management"
            desc="Event management build during GDGhack Hackathon" 
            techs={["NextJs" , "TailwindCss" , "Prisma"]}
            link="#"  
            github="https://github.com/Rayane76/gdghack"
            />


            </div>


      <div className="relative w-full mt-2">
        <a href="/projects">
          <div className="mt-8 max-w-sm md:max-w-2xl border border-fun-pink mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white transition-colors cursor-pointer">
            View All
          </div>
        </a>
      </div>
    </div>
    </div>
    )
}