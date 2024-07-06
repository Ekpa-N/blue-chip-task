import { useEffect, useState, useRef } from "react"
import { FaCompass } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { FaFacebookMessenger } from "react-icons/fa6";
import { GrLineChart } from "react-icons/gr";
import { FaGlobeAmericas } from "react-icons/fa";
import { IoAppsSharp } from "react-icons/io5";
import CircularButton from "./CircularButton";

type SideBarProps = {
    isSideBarOpen: boolean;
    isDesktopView: boolean;
}

export default function SideBar({isSideBarOpen, isDesktopView}:SideBarProps) {
    return (
        <nav className={`absolute ${isDesktopView ? "z-[5]" : "z-[10]"} bg-white w-[91px] desktop:w-[75px] h-screen border ${isSideBarOpen ? "left-0" : "-left-[92px]"} flex flex-col items-center transition-all ease-linear duration-200`}>
            <div className="items-center justify-center h-[99.5px] w-full flex flex-col border-b-[1px] border-[#F5F6F7]">
                <button className="flex flex-col h-[50px] bg-[white] border border-[#F5F6F7] w-[50px] items-center justify-center rounded-[50%] shadow-sm">
                    <div className="flex flex-col w-[18px] h-[12px] items-center relative">
                        <div className="bg-[#C3CAD9] h-[2px] absolute rounded-[10px] w-full origin-center rotate-45 top-[50%]"></div>
                        <div className="bg-[#C3CAD9] h-[2px] absolute rounded-[10px] w-full origin-center -rotate-45 top-[50%]"></div>
                    </div>
                </button>
            </div>

            <div className="flex flex-col mt-[40px] gap-[15px] w-full items-center">
                <CircularButton icon={FaCompass} />
                <CircularButton icon={IoIosStar} />
                <CircularButton icon={FaFacebookMessenger} />
                <CircularButton icon={GrLineChart} />
                <CircularButton icon={FaGlobeAmericas} />
                <CircularButton icon={IoAppsSharp} />
            </div>

        </nav>
    )
}