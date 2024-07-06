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
            setIsSideBarOpen(true)
            window.removeEventListener("click", (e) => { handleSideBar(e) })
            return
        }
        if (window.innerWidth < 1440) {
            setIsDesktopView(false)
            setIsProfileBarOpen(false)
            setIsSideBarOpen(false)
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
            setIsSideBarOpen(true)
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
        <main className={`flex h-[100%] w-full flex-col overflow-y-auto overflow-x-hidden  bg-[#F7F8FA] relative`}>
            <Nav isDesktopView={isDesktopView} openProfileBarRef={openProfileBarRef} openLeftSideBarRef={openLeftSideBarRef} handleSideBar={handleSideBar} />
            <ProfileBar isDesktopView={isDesktopView} isProfileBarOpen={isProfileBarOpen} />
            <SideBar isDesktopView={isDesktopView} isSideBarOpen={isSideBarOpen} />

            <div className={`grow bg-[#F7F8FA] mt-[100px] desktop:ml-[80px] desktop:flex pb-[20px] overflow-auto`}>
                <div className="borde desktop:h-fit">
                    {children}
                </div>
            </div>
        </main>
    );
}
