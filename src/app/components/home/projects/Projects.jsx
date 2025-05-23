import SectionTitle from "../../SectionTitle";
import Card from "../Card";

function Projects() {
  return (
    <div id="projects" className="flex justify-center w-full">
      <div
        style={{ maxWidth: "1200px", width: "1200px" }}
        className="flex flex-col text-left justify-between pt-8 relative"
      >
        <div>
          <SectionTitle title="Real-World Projects." />
        </div>
        <div className="grid grid-cols-1 gap-12 md:gap-5 md:grid-cols-3 items-start mt-5">
          <Card
            image="ekrili.png"
            title="Ekrili"
            desc="Rental website for homes and villas: Find, book, and stay."
            techs={["NextJs", "ExpressJs", "Material UI", "MongoDB"]}
            link="https://ekrili.dz"
            github=""
          />

          <Card
            image="aposto.png"
            title="Aposto store"
            desc="E-commerce website for Aposto : Clothes brand."
            techs={["NextJs", "Typescript", "Bootstrap", "Prisma"]}
            link="https://www.aposto.store"
            github="https://github.com/Rayane76/aposto"
          />

          <Card
            image="candy.png"
            title="Candy lokum"
            desc="E-commerce website for candies."
            techs={["NextJs", "Bootstrap", "Mongodb", "Docker"]}
            link="http://candy-lokum.ai2dz.com/"
            github=""
          />

          <Card
            image="ghack.png"
            title="Ghack"
            desc="Google Developers Group of Algiers hackathon website."
            techs={["NextJs", "TailwindCss"]}
            link="https://ghack24.gdgalgiers.com/"
            github=""
          />

          {/* <Card 
            image="takwim.png"
            title="Takwim"
            desc="Website for islamic scholar Mshmsdin." 
            techs={["NextJs" , "TailwindCss" , "Django" , "MySQL"]}
            link="#"  
            github=""
            /> */}
        </div>
        {/* <div className="relative w-full mt-2">
        <a href="/projects">
          <div className="mt-8 max-w-sm md:max-w-2xl border border-fun-pink mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white transition-colors cursor-pointer">
            View All
          </div>
        </a>
      </div> */}
      </div>
    </div>
  );
}

export default Projects;
