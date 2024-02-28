"use client";

import { GridContainer } from "./grid";

import { useState } from "react";

type MenuItem = {
  name: string;
  target: string;
};

const arrayMenu: MenuItem[] = [
  { name: "Cupom", target: "#section-hero" },
  { name: "Redes sociais", target: "#section-footer" },
];

export function Header(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeStyled: string = "bg-green-btn text-opacity-100 rounded-full";

  const handleItemClick = (index: number, target: string): void => {
    setActiveIndex(index);
    window.location.href = target;
  };

  return (
    <header className="relative w-full flex items-center text-center">
      <GridContainer className="flex items-center">
        <div className="m-auto">
          <nav className="flex gap-12 items-center">
            {arrayMenu.map((item: MenuItem, index: number) => (
              <button
                key={index}
                onClick={() => handleItemClick(index, item.target)}
                className={`px-5 py-1.5 text-black-title 
                text-opacity-75 hover:text-opacity-100 transition-all ${
                  index === activeIndex ? activeStyled : ""
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-6"></div>
        </div>
      </GridContainer>
    </header>
  );
}
