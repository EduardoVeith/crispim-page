"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { SlSocialInstagram } from "react-icons/sl";
import { RiTiktokFill } from "react-icons/ri";

import { GridContainer } from "./grid";

import IconFile from "/public/icon-file.svg";
import IconHand from "/public/icon-hand.svg";
import IconHand02 from "/public/icon-hand-02.svg";
import IconMockup from "/public/mockup.svg";

function copyText(entryText: string) {
  navigator.clipboard.writeText(entryText);
}

export function SectionHero() {
  const textHeroRef = useRef(null);
  const mockupLeftRef = useRef(null);
  const mockupRightRef = useRef(null);

  useEffect(() => {
    const textHero = textHeroRef.current;
    const mLeft = mockupLeftRef.current;
    const mRight = mockupRightRef.current;

    gsap.fromTo(
      textHero,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        ease: "elastic.out(1,0.3)",
      }
    );

    gsap.fromTo(
      mLeft,
      {
        rotate: 0,
      },
      {
        rotate: -10,
        duration: 1,
      }
    );

    gsap.fromTo(
      mRight,
      {
        rotate: 0,
      },
      {
        rotate: 10,
        duration: 1,
      }
    );
  }, []);

  return (
    <section
      className="relative w-full h-section-hero bg-no-repeat bg-top bg-green-primary border-t 
        border-t-blue-royal pt-6 overflow-hidden"
    >
      <GridContainer className="flex flex-col items-center">
        <div
          className="w-full max-w-text-hero text-center opacity-0"
          ref={textHeroRef}
        >
          <h3 className="px-2 md:text-xl font-medium text-black-title mb-4 ">
            Cupom de 10% de desconto para entregas em casa ou retirada na loja{" "}
          </h3>
          <h4 className="text-xs md:text-base font-medium text-black-title mb-4">
            não exige valor mínimo de compra
          </h4>
          <h1 className="text-blue-royal text-4xl/normal md:text-7xl/normal font-semibold mb-2">
            CRISPIM10
          </h1>
          <div className="flex items-center justify-center md:gap-10">
            <button
              onClick={() => {
                copyText("CRISPIM10");
              }}
              className="flex items-center gap-2 text-xs md:text-base"
            >
              <Image src={IconFile} alt="Icon File" className="ml-2" />
              <span className="text-black-title font-medium">
                Clique para copiar o cupom
              </span>
            </button>
            <a href="https://www.petz.com.br/">
              <button
                className="flex items-center gap-2 text-xs md:text-base py-2 px-3 md:py-4 md:px-5 bg-green-btn rounded-full 
                        text-black-title font-bold"
              >
                Site da Petz
              </button>
            </a>
            <div
              id="section-social"
              className="flex items-center gap-2 text-xs md:text-base"
            >
              <span className="text-black-title">Redes Sociais</span>
              <a
                href="https://www.instagram.com/crispim.real"
                className="text-xl pl-2"
              >
                <SlSocialInstagram />
              </a>
              <a
                href="https://www.tiktok.com/eduardoveith"
                className="pl-3 text-2xl mr-2"
              >
                <RiTiktokFill />
              </a>
            </div>
          </div>
        </div>
        <div className="relative w-full max-w-area-icons mt-4 h-28">
          <Image
            src={IconHand}
            alt="Icon hand"
            className="md:absolute left-0 bottom-0"
          />
          <Image
            src={IconHand02}
            alt="Icon hand 02"
            className="absolute mt-6 top-0 right-0"
          />
        </div>
        <div className="flex absolute -bottom-40 w-full max-w-area-mockups md:justify-between justify-center">
          <Image
            src={IconMockup}
            alt="Mockup"
            className="relative top-[1.1rem] left-[3.3rem] md:w-80 w-60 h-52"
            ref={mockupLeftRef}
          />
          <Image
            src={IconMockup}
            alt="Mockup"
            className="relative top-[1.1rem] right-[3.3rem] md:w-80 w-60 h-52"
            ref={mockupRightRef}
          />
        </div>
      </GridContainer>
    </section>
  );
}
