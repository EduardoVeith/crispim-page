import { SlSocialInstagram } from "react-icons/sl";
import { RiTiktokFill } from "react-icons/ri";
import { FaRegCopyright } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="w-full flex md:max-w-grid md:mx-auto md:px-3">
      <div id="section-footer" className="flex md:ml-80">
        <span className="text-xs pr-2 pl-2">Redes Sociais</span>
        <a
          href="https://www.instagram.com/crispim.real"
          className="pr-2 text-xs"
        >
          <SlSocialInstagram />
        </a>
        <a href="https://www.tiktok.com/eduardoveith" className="pr-2 text-">
          <RiTiktokFill />
        </a>
        <span className="text-xs pr-1 pl-16">Copyright 2024</span>
        <a className="text-xs">
          <FaRegCopyright />
        </a>
        <span className="text-xs italic pl-16">cupom não cumulativo</span>
      </div>
    </footer>
  );
}
