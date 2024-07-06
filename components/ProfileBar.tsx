import { useEffect, useState, useRef } from "react"
import { TfiSearch } from "react-icons/tfi"
import { MdNotifications } from "react-icons/md"
import { RiCloseCircleFill } from "react-icons/ri"
import { FaUserLarge } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import CircularButton from "./CircularButton";
import { cardData, settingsData } from "@/constants/constants";
import { TiPlus } from "react-icons/ti";

type ProfileBarProps = {
    isProfileBarOpen: boolean;
    isDesktopView: boolean;
}

export default function ProfileBar({ isProfileBarOpen, isDesktopView }: ProfileBarProps) {
    return (
        <div className={`absolute ${isDesktopView ? "z-[5]" : "z-[10]"} bg-white overflow-auto w-[330px] h-screen border ${isProfileBarOpen ? "right-0" : "right-[-330px]"} flex flex-col items-center transition-all ease-linear duration-200`}>
            <div className="w-full relative border flex flex-col items-center pb-[20px]">
                <div className="sticky top-0 bg-white z-[10] items-center gap-[10px] justify-start pl-[70px] h-[99.5px] w-full flex border-b-[1px] border-[#F5F6F7]">
                    <CircularButton icon={TfiSearch} />
                    <CircularButton icon={MdNotifications} />
                    <CircularButton icon={RiCloseCircleFill} />
                    <button className="flex flex-col h-[50px] bg-[white] border border-[#F5F6F7] w-[50px] items-center justify-center rounded-[50%] shadow-sm">
                        <div className="flex flex-col w-[18px] h-[12px] items-center relative">
                            <div className="bg-[#C3CAD9] h-[2px] absolute rounded-[10px] w-full origin-center rotate-45 top-[50%]"></div>
                            <div className="bg-[#C3CAD9] h-[2px] absolute rounded-[10px] w-full origin-center -rotate-45 top-[50%]"></div>
                        </div>
                    </button>
                </div>

                <div className="flex flex-col justify-between h-[190px] borde items-center">
                    <div className="mt-[20px] borde w-full gap-[220px] flex items-center pl-[30px]">
                        <FaUserLarge className="text-[#C3CAD9]" />
                        <button className="flex gap-[2px]">
                            <div className="bg-[#C3CAD9] rounded-[50%] h-[5px] w-[5px]"></div>
                            <div className="bg-[#C3CAD9] rounded-[50%] h-[5px] w-[5px]"></div>
                            <div className="bg-[#C3CAD9] rounded-[50%] h-[5px] w-[5px]"></div>
                        </button>
                    </div>
                    <h2 className="text-[#6B7A99] font-[700] leading-[30px] text-[16px]">Profile Name</h2>
                </div>

                <div className="wrapper">
                    <div className="arc arc_end"></div>
                    <div style={{backgroundImage:`url(../images/poster-two.jpg)`}} className="avatar"></div>
                    <div className="arc arc_start"></div>
                    <div className="plus flex items-center justify-center">
                        <div className="w-[50%] h-[50%] rounded-[50%] bg-white flex items-center justify-center">
                            <TiPlus className="text-[#FF6633]" />
                        </div>
                    </div>
                </div>

                <div className="borde mt-[20px] border-black w-full flex flex-col">
                    <div className="borde w-full justify-between flex items-center pl-[45px] pr-[20px] ">
                        <h2 className="text-[#C3CAD9] borde w-fit">Accounts and Cards</h2>
                        <button className="flex borde gap-[2px]">
                            <div className="bg-[#C3CAD9] rounded-[50%] h-[5px] w-[5px]"></div>
                            <div className="bg-[#C3CAD9] rounded-[50%] h-[5px] w-[5px]"></div>
                            <div className="bg-[#C3CAD9] rounded-[50%] h-[5px] w-[5px]"></div>
                        </button>
                    </div>

                    <div className="flex flex-col mt-[40px] gap-[20px] pl-[45px] pr-[20px]">
                        {cardData.map((card, idx) => {
                            return (
                                <div className="flex borde justify-between items-center">
                                    <div style={{backgroundImage:`url(${card.img})`}} className="w-[65px] h-[40px] bg-cover bg-center rounded-[3px] border"></div>
                                    <div className="flex flex-col">
                                        <h2 className="text-[#7D8FB3] font-[700] text-[12px] leading-[20px]">{card.card}</h2>
                                        <h2 className="text-[#6B7A99] text-[12px] font-[900] leading-[20px]">{card.balance}</h2>
                                    </div>
                                    <CircularButton icon={FaArrowRight} dimensions={{ h: "h-[40px]", w: "w-[40px]" }} />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="borde pb-[10px] mt-[20px] border-black w-full flex flex-col">
                    <div className="borde w-full justify-between flex items-center pl-[45px] pr-[20px] ">
                        <h2 className="text-[#C3CAD9] borde w-fit">Settings</h2>
                        <button className="flex borde gap-[2px]">
                            <div className="bg-[#C3CAD9] rounded-[50%] h-[5px] w-[5px]"></div>
                            <div className="bg-[#C3CAD9] rounded-[50%] h-[5px] w-[5px]"></div>
                            <div className="bg-[#C3CAD9] rounded-[50%] h-[5px] w-[5px]"></div>
                        </button>
                    </div>



                    <div className="flex flex-col mt-[40px] gap-[20px] pl-[45px] pr-[20px]">
                        {settingsData.map((setting, idx) => {
                            return (
                                <div key={idx} className="flex borde gap-[20px] items-center">
                                    <CircularButton icon={setting.icon} dimensions={{ h: "h-[40px]", w: "w-[40px]" }} />
                                    <div className="flex flex-col">
                                        <h2 className="text-[#7D8FB3] font-[700] text-[12px] leading-[20px]">{setting.info}</h2>
                                    </div>
                                </div>
                            )
                        })}
                    </div>


                </div>
                    <div className="w-[270px] h-[200px] mt-[20px] rounded-[10px] bg-[#FEB35F] flex flex-col items-center justify-center gap-[10px]">
                        <div className="w-[70px] h-[60px] border border-black"></div>
                        <h2 className="text-[#FF6633] font-[700] text-[12px] leading-[20px]">Do you need help?</h2>
                        <h2 className="text-[#8833FF] font-[900] text-[12px] leading-[20px]">Do you need help?</h2>
                    </div>
            </div>
        </div>
    )
}