import { useEffect, useState, useRef } from "react"


interface CircularButtonProps {
    icon: React.ComponentType<{ className?: string }>;
    dimensions?: {w: string, h: string};
    color?: string
}

export default function CircularButton({ icon: Icon, dimensions = {w:"w-[50px]", h:"h-[50px]"}, color="text-[#C3CAD9]" }: CircularButtonProps) {
    return (
        <button className={`flex flex-col ${dimensions.h} ${dimensions.w} bg-[white] border border-[#F5F6F7] items-center justify-center rounded-[50%] shadow`}>
            <Icon className={`${color} w-[20px] h-[20px]`} />
        </button>
    );
}