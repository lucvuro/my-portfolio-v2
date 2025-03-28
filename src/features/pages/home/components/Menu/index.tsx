import { avatarPixel } from "@/assets/images";
import { NesContainer, Radio, Text } from "@/components";
import { MENUS } from "@/constants/home";
import Image from "next/image";
import type React from "react";
import { useEffect } from "react";

export type TMenuProps = {
  selectedMenu: string;
  onChangeSelectedMenu: (newMenu: string) => void;
};

const Menu: React.FC<TMenuProps> = ({ selectedMenu, onChangeSelectedMenu }) => {
  useEffect(() => {
    document.querySelectorAll(".menu-item").forEach((anchor, i) => {
      const beep = document.getElementById("beep");
      if (!beep) return;

      if (i !== 0) {
        const clonedBeep = beep.cloneNode(true) as HTMLAudioElement;
        clonedBeep.id = `beep-${i}`;
        anchor.parentElement?.appendChild(clonedBeep);
      }

      (anchor as HTMLElement).dataset.beeper = i.toString();

      anchor.addEventListener("mouseenter", () => {
        const beepId = `beep-${(anchor as HTMLElement).dataset.beeper}`;
        const audio = document.getElementById(beepId) as HTMLAudioElement;
        console.log(beepId);
        audio?.play();
      });
    }, []);

    const beepZero = document.getElementById("beep");
    if (beepZero) beepZero.id = "beep-0";
  }, []);
  return (
    <NesContainer withTitle title="Menu">
      <div className="flex items-center gap-4 sm:justify-evenly">
        <div className="flex flex-1 flex-col items-center gap-5 sm:flex-row">
          <Image width={150} height={150} alt="avatar" src={avatarPixel} />
          <div className="text-center">
            <Text className="text-base sm:text-4xl">Luc Vu</Text>
            <Text className="text-xs sm:text-base">Software Engineer</Text>
            <div className="flex flex-col">
              <div>
                <i className="nes-icon heart"></i>
                <i className="nes-icon heart"></i>
                <i className="nes-icon heart is-half"></i>
                <i className="nes-icon heart is-transparent"></i>
                <i className="nes-icon heart is-transparent"></i>
              </div>
              <div>
                <i className="nes-icon coin"></i>
                <i className="nes-icon"></i>
                <i className="nes-icon"></i>
                <i className="nes-icon"></i>
                <i className="nes-icon"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 text-sm sm:items-center sm:text-base lg:flex-row">
          {Object.values(MENUS).map((menu) => {
            return (
              <Radio
                key={menu.value}
                title={menu.label}
                name="section"
                checked={selectedMenu === menu.value}
                onClick={() => onChangeSelectedMenu(menu.value)}
                containerClassName="menu-item"
              />
            );
          })}
        </div>
      </div>
      <audio controls preload="auto" hidden id="beep">
        <source src="sound/arcade-fx-288597.mp3"></source>
        Your browser is not invited for super fun audio time.
      </audio>
    </NesContainer>
  );
};

export default Menu;
