import SectionTitle from "../../SectionTitle";
import SvgSkills from "./SvgSkills";

export default function Skills() {

    const skills= [
        {
          title: "HTML",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          title: "CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          title: "Javascript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          title: "Bootstrap",
          icon: "/skills/bootstrap-original.svg",
        },
        {
          title: "TailwindCSS",
          icon: "/skills/tailwindcss-original.svg",
        },
        {
          title: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          title: "NextJS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
          style: { filter: "invert(1)" },
        },
        {
          title: "ExpressJs",
          icon: "/skills/express-original.svg",
        },
        {
          title: "NodeJS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          title: "Php",
          icon: "/skills/php-original.svg",
        },
        {
            title: "Laravel",
            icon: "/skills/laravel-original.svg",
        },
        {
            title: "Mongodb",
            icon: "/skills/mongodb-original.svg",
        },
        {
            title: "MySQL",
            icon: "/skills/mysql-original.svg",
        },
        {
            title: "Git",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
            title: "Docker",
            icon: "/skills/docker-original.svg",
        },
      ];
  return (
    <div className="w-full flex justify-center">
    <div style={{width:"1200px",maxWidth:"1200px"}} className="mt-10">
    <div className="w-full justify-center flex mb-10">
    <SectionTitle title="Skills. " />
    </div>
    <div className="skillsDiv flex justify-center flex-col-reverse md:flex-row items-center w-full gap-8">
      <div className="max-w-sm md:max-w-md md:min-h-[448px] md:min-w-[448px]">
        <div className="lf-player-container">
          <div
            style={{background: "transparent" , margin: "0px auto" , outline: "none" , overflow: "hidden"}}
          >
           <SvgSkills />
          </div>
        </div>
      </div>
      <div className="relative max-w-lg w-full mx-auto md:mx-none grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-3 sm:grid-cols-6 items-center place-content-center">
        {skills.map((item, index) => {
          return (
            <div
              title={item.title}
              key={index}
              className="w-10 mx-auto flex items-center flex-col justify-center"
            >
              <img src={item.icon} style={item.style} />
              <p className="text-xs text-fun-gray font-bold mt-3 opacity-80">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
    </div>
    </div>
  );
}
