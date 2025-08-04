import MyContainer from "@/components/ui/core/MyContainer/MyContainer";
import Link from "next/link";
import React from "react";
import { BiMobile } from "react-icons/bi";

const TopBar = () => {
  return (
    <div className="bg-black text-white w-full py-2">
      <MyContainer>
        <div className="flex items-center gap-3 justify-between">
          <p>Since 2018</p>
          <div className="flex-1 flex justify-end gap-3">
            <p className="flex items-center gap-1">
              <span className="sm:flex hidden">
                <BiMobile />
              </span>{" "}
              Hotline: 01900000000
            </p>
            <Link href="/contact" className="underline hidden sm:block">
              Contact-us
            </Link>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default TopBar;
