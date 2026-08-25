"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import MobileMenuButton from "./MobileMenuButton";
import MobileNavigation from "./MobileNavigation";
import Logo from "./Logo";

export default function MobileDrawer() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <MobileMenuButton />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay
          className="
            fixed
            inset-0
            z-50
            bg-black/40
            backdrop-blur-sm
          "
        />

        <Dialog.Content
          className="
    fixed
    inset-0
    z-[9999]
    bg-white
    p-8
  "
        >
          <div className="flex items-center justify-between">
            <Logo />
            <Dialog.Close asChild>
              <button
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  hover:bg-[var(--background-secondary)]
                "
              >
                <X size={20} />
              </button>
            </Dialog.Close>
          </div>

          <MobileNavigation />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
