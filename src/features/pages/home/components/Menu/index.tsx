import { avatarPixel } from "@/assets/images";
import { Text } from "@/components";
import { Avatar } from "@/components/retroui/Avatar";
import { Button } from "@/components/retroui/Button";
import RetroUIContainer from "@/components/RetroUIContainer";
import ThemeToggle from "@/components/ThemeToggle";
import { MENUS } from "@/constants/home";
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
    <RetroUIContainer className="mt-10 w-full">
      <div className="flex items-center gap-4 sm:justify-evenly">
        <div className="flex flex-1 flex-col items-center gap-5 sm:flex-row">
          <Avatar className="h-[150px] w-[150px]">
            <Avatar.Image alt="avatar" src={avatarPixel.src} />
          </Avatar>
          <div className="text-center">
            <Text className="text-base sm:text-4xl">Luc Vu</Text>
            <Text className="text-xs sm:text-2xl">Software Engineer</Text>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 text-sm sm:items-center sm:text-base lg:flex-row">
          {Object.values(MENUS).map((menu) => {
            return (
              <Button
                key={menu.value}
                onClick={() => onChangeSelectedMenu(menu.value)}
                variant={selectedMenu === menu.value ? "secondary" : "default"}
              >
                {menu.label}
              </Button>
            );
          })}
          <ThemeToggle />
        </div>
      </div>
      <audio controls preload="auto" hidden id="beep">
        <source src="sound/arcade-fx-288597.mp3"></source>
        Your browser is not invited for super fun audio time.
      </audio>
    </RetroUIContainer>
  );
};

export default Menu;
