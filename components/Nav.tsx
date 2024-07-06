import { useEffect, useState, useRef } from "react"
import { FaCircleUser } from "react-icons/fa6";
import CircularButton from "./CircularButton";
import { TfiSearch } from "react-icons/tfi";
import { RiCloseCircleFill } from "react-icons/ri";
import { MdNotifications } from "react-icons/md";
import { menu } from "@/constants/constants";


type NavProps = {
    handleSideBar: (e: any, state: boolean) => void;
    openLeftSideBarRef: any;
    openProfileBarRef: any;
    isDesktopView: boolean;
}

export default function Nav({ handleSideBar, openLeftSideBarRef, openProfileBarRef, isDesktopView }: NavProps) {
    return (
        <nav className="flex absolute z-[10] top-0 h-[100px] bg-white px-[30px] items-center w-full border-b-[1px] border-[#C3CAD9] justify-between">
            <div className="flex gap-[20px] items-center">
                <button disabled={isDesktopView} ref={openLeftSideBarRef} onClick={(e) => { handleSideBar(e, true) }} className="flex flex-col h-[50px] bg-[white] w-[50px] items-center justify-center rounded-[50%] shadow-sm">
                    <div className="flex flex-col w-[18px] h-[12px] justify-between">
                        <div className="bg-[#C3CAD9] h-[2px] rounded-[10px] w-full"></div>
                        <div className="bg-[#C3CAD9] h-[2px] rounded-[10px] w-full"></div>
                        <div className="bg-[#C3CAD9] h-[2px] rounded-[10px] w-full"></div>
                    </div>
                </button>
                <h2 className="text-[#4D5E80] font-[700] text-[18px] leading-[30px]">Constructor</h2>
            </div>
            <ul className="hidden laptop:flex gap-[25px]">
                {menu.map((item, idx) => {
                    return (
                        <button className="text-[#7D8FB3] font-[700] text-[12px] leading-[20px]">{item.title}</button>
                    )
                })}
            </ul>
            <div className="flex gap-[25px] items-center">
                <button disabled={isDesktopView} ref={openProfileBarRef} className={`flex flex-col h-[50px] w-[50px] bg-[white] border border-[#F5F6F7] items-center justify-center rounded-[50%] shadow-sm`}>
                    <FaCircleUser className="text-[#C3CAD9] w-[20px] h-[20px]" />
                </button>
                <h2 className="text-[#7D8FB3] hidden tablet:block font-[700] bottom-[-25px] text-[12px] leading-[20px]">Clayton Santos</h2>
                <div className="hidden items-center tablet:flex gap-[10px] borde">
                    <CircularButton icon={TfiSearch} />
                    <CircularButton icon={MdNotifications} />
                    <CircularButton icon={RiCloseCircleFill} />
                </div>
            </div>
        </nav>
    )
}

// ref={openProfileBarRef}