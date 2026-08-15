


import Link from "next/link";

export default function Card({ image, title, desc, techs, href, link }) {
  const cardHref = href ?? link ?? "/";

  return (
    <div className="max-w-sm mx-auto flex flex-col md:projects-start md:justify-center">
      <Link
        href={cardHref}
        className="w-full relative rounded-xl border-fun-gray border p-2 transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink"
      >
        <img
          style={{ width: "355px", height: "263px" }}
          className="w-full rounded-md card"
          src={image}
          alt={title}
        />
      </Link>
      <div className="w-full mt-4">
        <div className="flex justify-between">
          <Link href={cardHref}>
            <h3 className="text-lg font-bold text-white">{title}</h3>
          </Link>
        </div>
        <p className="text-fun-gray text-left text-sm">{desc}</p>
        <ul className="flex flex-wrap items-center mt-2 -ml-2 list-none">
          {techs.map((tech, index) => {
            return (
              <li key={index}>
                <div className="m-1 rounded-lg text-sm bg-fun-pink-dark py-1 px-2 cursor-pointer hover:opacity-75 text-white">
                  {tech}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}