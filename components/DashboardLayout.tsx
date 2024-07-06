"use client"
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Nav from "@/components/Nav";
import SideBar from "@/components/SideBar";
import ProfileBar from "@/components/ProfileBar";

type DashboardProps = {
    children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardProps) {
    const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false)
    const [isProfileBarOpen, setIsProfileBarOpen] = useState<boolean>(false)
    const [isDesktopView, setIsDesktopView] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const openLeftSideBarRef = useRef<HTMLButtonElement>(null)
    const openProfileBarRef = useRef<HTMLButtonElement>(null)

    function checkMobileDevice() {
        const userAgent = navigator.userAgent || navigator.vendor;
        return /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
    };

    function handleSideBar(event: any, state?: boolean) {
        if (openLeftSideBarRef.current && openLeftSideBarRef.current.contains(event.target as Node)) {
            setIsSideBarOpen(true)
            setIsProfileBarOpen(false)
            return
        }
        if (openProfileBarRef.current && openProfileBarRef.current.contains(event.target as Node)) {
            setIsSideBarOpen(false)
            setIsProfileBarOpen(true)
            return
        }
        if ((openLeftSideBarRef.current && !openLeftSideBarRef.current.contains(event.target as Node)) && (openProfileBarRef.current && !openProfileBarRef.current.contains(event.target as Node))) {
            setIsSideBarOpen(false)
            setIsProfileBarOpen(false)
            return
        }
    }

    function handleResize() {
        if (window.innerWidth >= 1440) {
            setIsDesktopView(true)
            setIsProfileBarOpen(true)
            window.removeEventListener("click", (e) => { handleSideBar(e) })
            return
        }
        if (window.innerWidth < 1440) {
            setIsDesktopView(false)
            setIsProfileBarOpen(false)
            window.addEventListener("click", (e) => { handleSideBar(e) })
            return
        }

    }

    useEffect(() => {
        const isMobileDevice = checkMobileDevice()

        if (isMobileDevice) {
            setIsProfileBarOpen(false)
            setIsSideBarOpen(false)
            setIsLoading(false)
            window.addEventListener("click", (e) => { handleSideBar(e) })
            return () => {
                window.removeEventListener("click", (e) => { handleSideBar(e) })
            }
        }

        if (!isMobileDevice && (window.innerWidth < 1440)) {
            window.addEventListener("resize", () => { handleResize() })
            window.addEventListener("click", (e) => { handleSideBar(e) })
            setIsLoading(false)
            return () => {
                window.removeEventListener("click", (e) => { handleSideBar(e) })
                window.removeEventListener("resize", (e) => { handleResize() })
            }
        }
        if (!isMobileDevice && (window.innerWidth >= 1440)) {
            setIsDesktopView(true)
            setIsProfileBarOpen(true)
            window.addEventListener("resize", () => { handleResize() })
            window.removeEventListener("click", (e) => { handleSideBar(e) })
            setIsLoading(false)
            return () => {
                window.removeEventListener("click", (e) => { handleSideBar(e) })
                window.removeEventListener("resize", (e) => { handleResize() })
            }
        }

    }, [])

    useEffect(()=>{},[])

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <main className="flex h-[100%] w-full flex-col overflow-y-auto overflow-x-hidden  bg-[#F7F8FA] relative">
            <Nav isDesktopView={isDesktopView} openProfileBarRef={openProfileBarRef} openLeftSideBarRef={openLeftSideBarRef} handleSideBar={handleSideBar} />
            <ProfileBar isDesktopView={isDesktopView} isProfileBarOpen={isProfileBarOpen} />
            <SideBar isSideBarOpen={isSideBarOpen} />

            <div className="grow bg-[#F7F8FA] mt-[100px] desktop:flex pb-[20px] overflow-auto">
                <nav className={`sticky top-0 bg-white w-[70px] h-full border hidden desktop:flex flex-col items-center`}>
                    <div className="items-center justify-center h-[99.5px] w-full flex flex-col border-b-[1px] border-[#F5F6F7]">
                        <button className="flex flex-col h-[50px] bg-[white] border border-[#F5F6F7] w-[50px] items-center justify-center rounded-[50%] shadow-sm">
                            <div className="flex flex-col w-[18px] h-[12px] items-center relative">
                                <div className="bg-[#C3CAD9] h-[2px] absolute rounded-[10px] w-full origin-center rotate-45 top-[50%]"></div>
                                <div className="bg-[#C3CAD9] h-[2px] absolute rounded-[10px] w-full origin-center -rotate-45 top-[50%]"></div>
                            </div>
                        </button>
                    </div>

                </nav>
                <div className="borde desktop:h-fit">
                    {children}
                </div>
            </div>
        </main>
    );
}
