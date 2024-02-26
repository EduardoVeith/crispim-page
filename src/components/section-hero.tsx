"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { SlSocialInstagram } from "react-icons/sl";
import { RiTiktokFill } from "react-icons/ri";

import { GridContainer } from "./grid";
import ConfirmationModal from "./ConfirmationModal";

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
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);

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

  useEffect(() => {
    // Function to open the modal when the coupon is copied
    const handleCopy = () => {
      setConfirmationModalOpen(true);
    };

    // Add event listener for copy event
    document.addEventListener("copy", handleCopy);

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener("copy", handleCopy);
    };
  }, []);

  return (
    <section
      className="relative w-full h-section-hero bg-no-repeat bg-top bg-green-primary border-t 
        border-t-blue-royal pt-16 overflow-hidden"
    >
      <GridContainer className="flex flex-col items-center">
        <div
          className="w-full max-w-text-hero text-center opacity-0"
          ref={textHeroRef}
        >
          <h3 className="text-xl font-medium text-black-title mb-4">
            Cupom de 10% para entregas em casa ou retirada na loja{" "}
            <span className="italic">com ainda mais desconto</span>
          </h3>
          <h4 className="text-base font-medium text-black-title mb-4">
            não exige valor mínimo de compra
          </h4>
          <h1 className="text-blue-royal text-7xl/normal font-semibold mb-2">
            CRISPIM10
          </h1>
          <div className="flex items-center justify-center gap-10">
            <button
              onClick={() => {
                copyText("CRISPIM10");
                setConfirmationModalOpen(true);
              }}
              className="flex items-center gap-2"
            >
              <Image src={IconFile} alt="Icon File" />
              <span className="text-black-title font-medium">
                Clique para copiar o cupom
              </span>
            </button>
            <a href="https://www.petz.com.br/">
              <button
                className="py-4 px-5 bg-green-btn rounded-full 
                        text-black-title font-bold"
              >
                Site da Petz
              </button>
            </a>
            <div id="section-social" className="flex">
              <span className="text-black-title pb-5">Redes Sociais</span>
              <a
                href="https://www.instagram.com/crispim.real"
                className="text-xl pl-6"
              >
                <SlSocialInstagram />
              </a>
              <a
                href="https://www.tiktok.com/eduardoveith"
                className="pl-6 text-2xl"
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
            className="absolute left-0 bottom-0"
          />
          <Image
            src={IconHand02}
            alt="Icon hand 02"
            className="absolute top-0 right-0"
          />
        </div>
        <div className="absolute -bottom-40 w-full max-w-area-mockups flex justify-between">
          <Image
            src={IconMockup}
            alt="Mockup"
            className="relative top-[1.1rem] left-[3.3rem]"
            ref={mockupLeftRef}
          />
          <Image
            src={IconMockup}
            alt="Mockup"
            className="relative top-[1.1rem] right-[3.3rem]"
            ref={mockupRightRef}
          />
          {confirmationModalOpen && (
            <ConfirmationModal
              isOpen={confirmationModalOpen}
              handleClose={() =>
                setConfirmationModalOpen(!confirmationModalOpen)
              }
            >
              <div className="flex flex-col items-center">
                <div className="mb-4 pt-4 px-4 text-center">
                  <span>Seu cupom foi copiado com sucesso!</span>
                </div>
                <div className="mt-4 pb-2">
                  <button
                    className="px-4 py-2 bg-green-btn text-black-title rounded-md hover:bg-gray-700"
                    type="button"
                    onClick={() =>
                      setConfirmationModalOpen(!confirmationModalOpen)
                    }
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </ConfirmationModal>
          )}
        </div>
      </GridContainer>
    </section>
  );
}
