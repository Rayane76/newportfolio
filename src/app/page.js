import Footer from "./components/Footer";
import Hero from "./components/home/Hero";
import PersonalProjects from "./components/home/personalProjects/PersonalProjects";
import Projects from "./components/home/projects/Projects";
import Skills from "./components/home/skills/Skills";
import Work from "./components/home/work/Work";
// import { Resend } from 'resend';
// import { headers } from 'next/headers'
// import EmailTemplate from "./components/EmailTemplate";


// const resend = new Resend(process.env.RESEND_API_KEY);



export default async function Home() {
  
  // const header = headers()
  // const ip = (header.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]


  // try {
  //   const { data, error } = await resend.emails.send({
  //     from: 'Rayane Portfolio <info@rayanehiouani.me>',
  //     to: ['rayanehiouani.rh@gmail.com'],
  //     subject: 'New Visitor !',
  //     react: EmailTemplate({ ip }),
  //   });

  //   if (error) {
  //     console.log(error);
  //   }

  //   console.log(data);
  // } catch (error) {
  //   console.log(error);
  // }

  return (
    <>
         <Hero />
         <Projects />
         <PersonalProjects />
         <Skills />
         <Work />
         <Footer />
    </>
  );
}
