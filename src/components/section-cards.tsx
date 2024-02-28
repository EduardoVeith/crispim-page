"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Mockup from "/public/mockup-main.png";
import Card01 from "/public/image-01.png";
import Card02 from "/public/image-02.png";
import Card03 from "/public/image-03.png";
import Card04 from "/public/image-04.png";
import Card05 from "/public/image-05.png";
import Card06 from "/public/image-06.png";

gsap.registerPlugin(ScrollTrigger);

export function SectionCards() {
  const mockupRef = useRef(null);
  const titleRef = useRef(null);
  const sectionRef = useRef(null);

  const section = sectionRef.current;

  const card01Ref = useRef(null);
  const card02Ref = useRef(null);
  const card03Ref = useRef(null);
  const card04Ref = useRef(null);
  const card05Ref = useRef(null);
  const card06Ref = useRef(null);

  function animateCards(images: null[], position: number) {
    gsap.fromTo(
      images,
      {
        opacity: 0,
        x: position,
      },
      {
        opacity: 1,
        stagger: 0.25,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "center center",
        },
      }
    );
  }

  useEffect(() => {
    const mockupPhone = mockupRef.current;
    const title = titleRef.current;

    gsap.fromTo(
      mockupPhone,
      {
        opacity: 0.3,
        scale: 0.5,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power4.out",
      }
    );

    gsap.fromTo(
      title,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: section,
          start: "63% center",
        },
      }
    );

    const img01 = card01Ref.current;
    const img02 = card02Ref.current;
    const img03 = card03Ref.current;
    const img04 = card04Ref.current;
    const img05 = card05Ref.current;
    const img06 = card06Ref.current;

    const leftImages = [img01, img02, img03];
    const rightImages = [img04, img05, img06];

    animateCards(leftImages, 50);
    animateCards(rightImages, -50);
  }, []);

  return (
    <>
      <section className="w-full pb-20" ref={sectionRef}>
        <Image
          src={Mockup}
          alt="Mockup main"
          className="sticky z-10 opacity-0 top-80 md:top-56 mx-auto -mt-[32rem] mb-16 w-60 h-80 md:w-1/6"
          ref={mockupRef}
        />

        <h2
          className="md:mb-56 text-center text-2xl md:text-7xl font-semibold text-black opacity-0"
          ref={titleRef}
        >
          Use <span className="text-blue-royal">agora</span> o cupom{" "}
          <span className="text-blue-royal">CRISPIM10</span>
        </h2>

        <div className="relative w-full max-w-area-cards mx-auto h-area-cards">
          <Image
            src={Card01}
            className="absolute w-20 md:w-44 md:h-56 md:left-20 left-8 opacity-0"
            alt="Card 01"
            ref={card01Ref}
          />
          <Image
            src={Card02}
            className="absolute bottom-32 w-20 md:w-64 md:h-44 left-0 opacity-0"
            alt="Card 02"
            ref={card02Ref}
          />
          <Image
            src={Card03}
            className="absolute bottom-0 md:w-64 md:h-44 left-80 w-20 opacity-0"
            alt="Card 03"
            ref={card03Ref}
          />
          <Image
            src={Card04}
            className="absolute top-0 right-8 md:right-20 w-20 md:w-44 md:h-56 opacity-0"
            alt="Card 04"
            ref={card04Ref}
          />
          <Image
            src={Card05}
            className="absolute bottom-28 md:w-64 md:h-44 right-0 w-20 opacity-0"
            alt="Card 05"
            ref={card05Ref}
          />
          <Image
            src={Card06}
            className="absolute bottom-0 md:w-64 md:h-44 right-80 w-20 opacity-0"
            alt="Card 06"
            ref={card06Ref}
          />
        </div>
      </section>
    </>
  );
}
