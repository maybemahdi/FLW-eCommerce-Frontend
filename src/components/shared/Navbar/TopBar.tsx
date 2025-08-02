import MyContainer from "@/components/ui/core/MyContainer/MyContainer";
import Link from "next/link";
import React from "react";
import { BiMobile } from "react-icons/bi";

const TopBar = () => {
  return (
    <div className="bg-black text-white w-full py-2">
      <MyContainer>
        <div className="flex items-center gap-3 justify-end">
          <p className="flex items-center gap-1"><span><BiMobile /></span> Hotline: +880-1900000000</p>
          <Link href="/contact">Contact-us</Link>
        </div>
      </MyContainer>
    </div>
  );
};

export default TopBar;
