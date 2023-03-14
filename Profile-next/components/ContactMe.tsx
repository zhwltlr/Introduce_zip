import React from "react";
import {
  MapIcon,
  EnvelopeIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

const ContactMe = () => {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-16 uppercase tracking-[20px] text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          더 궁금하신 사항이 있으시면{" "}
          <span className="decoration-[#f7ab0a]/50 underline">연락 주세요</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <BriefcaseIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <Link
              href="https://github.com/zhwltlr"
              target="_blank"
              className="text-2xl"
            >
              https://github.com/zhwltlr
            </Link>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">vyoyngv7340@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            {/* <MapIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" /> */}
            <p className="text-2xl text-[#eee]">감사합니다</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
