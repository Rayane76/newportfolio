


export default function Card({ image , title , desc , techs , link , github }){
    return(
        <div
        className="max-w-sm mx-auto flex flex-col md:projects-start md:justify-center"
      >
        <a
          href={link}
          style={link === "#" ? {pointerEvents:"none"} : {}}
          target="_blank"
          className="w-full relative rounded-xl border-fun-gray border p-2 transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink"
        >
          <img
            style={{width:"355px",height:"263px"}}
            className="w-full rounded-md card"
            src={"/projects/" + image}
          />
        </a>
        <div className="w-full mt-4">
          <div className="flex justify-between">
            <a href={link} style={link === "#" ? {pointerEvents:"none"} : {}} target="_blank">
              <h3 className="text-lg font-bold text-white">{title}</h3>
            </a>
            <div className="flex space-x-2">
               {
                link != "#" && 
                 <a href={link} target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00c7ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
               }

              { 
                github != "" &&
                 <a href={github} target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00c7ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
              }
            </div>
          </div>
          <p className="text-fun-gray text-left text-sm">{desc}</p>
          <ul className="flex flex-wrap items-center mt-2 -ml-2 list-none">
                  {techs.map((tech,index)=>{
                    return(
                      <li key={index}>
                    <div className="m-1 rounded-lg text-sm bg-fun-pink-dark py-1 px-2 cursor-pointer hover:opacity-75 text-white">
                      {tech}
                    </div>
                </li>    
                    )
                  })}
              
          </ul>
        </div>
      </div>
    )
}