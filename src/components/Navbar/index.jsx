import React from "react";
import { Link } from "react-router-dom";
import { useSnapshot } from "valtio";
import { states } from "../../states";
import Avatar from "../Avatar";

const links = [
  { title: "Accueil", link: "/" },
  { title: "A propos", link: "/about" },
  { title: "Resume", link: "/resume" },
  { title: "Portfolio", link: "/portfolio" },
  { title: "Blog", link: "/blog" },
  { title: "Evenement", link: "/event" },
  { title: "Contact", link: "/contact" },
];

const moreLinks = [
  { title: "Musique", link: "/music" },
  { title: "Cuisine", link: "/cooking" },
  { title: "Education", link: "/education" },
];

const Navbar = (props) => {
  const { selectedLink } = useSnapshot(states);
  return (
    <nav className="p-8">
      <Avatar className="" size="lg" />
      <h1 className="text-[#343342] font-bold text-2xl">Fanomezantsoa Kezia</h1>
      <h2 className="text-[#e9c5b9]">UX/UI Designer</h2>
      <div className="mt-8 leading-10">
        <h3 className="text-[#343342] font-bold">Menu</h3>
        <ul className="">
          {links.map((link) => (
            <li
              key={link.title}
              className={`flex items-center ${
                selectedLink === link.title.toLowerCase() &&
                "font-bold text-[#363040]"
              }`}
            >
              <p className="w-4 h-4 bg-[#826e65] mr-4 rounded-sm"></p>
              <Link to={link.link}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 leading-10">
        <h3 className="text-[#343342] font-bold">Autre</h3>
        <ul className="">
          {moreLinks.map((link) => (
            <li
              key={link.title}
              className={`flex items-center ${
                selectedLink === link.title.toLowerCase() &&
                "font-bold text-[#363040]"
              } `}
            >
              <p className="w-4 h-4 rounded-full border-2 border-[#fbe2cf] mr-4"></p>
              <Link to={link.link}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
