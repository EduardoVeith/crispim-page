import { SlSocialInstagram } from "react-icons/sl";
import { RiTiktokFill } from "react-icons/ri";
import { FaRegCopyright } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="relative w=full h-24 flex items-center">
      <div id="section-footer" className="flex pl-36 items-center w-full">
        <span className="text-black-title pr-2">Redes Sociais</span>
        <a
          href="https://www.instagram.com/crispim.real"
          className="text-xl pl-6"
        >
          <SlSocialInstagram />
        </a>
        <a href="https://www.tiktok.com/eduardoveith" className="pl-6 text-2xl">
          <RiTiktokFill />
        </a>
        <span className="relative pl-60 ml-60 flex">Copyright 2024</span>
        <a className="text-xs pl-2 ">
          <FaRegCopyright />
        </a>
        <span className="text-xs pl-96 italic">
          cupom não cumulativo com outras promoções
        </span>
      </div>
    </footer>
  );
}
