
type BubbleProps = {
    width: string;
    height: string;
    index: string;
    bubbleWidth: string;
    bubbleHeight: string;
    bubbleTop: string;
    bubbleBg: string;
    gradientFrom: string;
    gradientTo: string; 
    left?: string; 
    title?: string;  
}


export default function Bubble({width, height, index, bubbleWidth, bubbleHeight, bubbleTop, bubbleBg, gradientFrom, gradientTo, left = "0", title=""}:BubbleProps) {
    return (
        <div style={{width:`${width}`}} className={`relative flex flex-col h-[280px] justify-end items-center`}>
            <div style={{width:`${bubbleWidth}`, height:`${bubbleHeight}`, backgroundColor:`${bubbleBg}`, top:`${bubbleTop}`, left: `${left}`}} className={`absolute ${index} rounded-[50%] bubble`}></div>
            <div style={{height:`${height}`, backgroundImage:`linear-gradient(to bottom, ${gradientFrom}, ${gradientTo})`}} className={`w-full`}></div>
            <div style={{backgroundColor:`${bubbleBg}`}} className={`absolute bottom-0 w-[32px] h-[2px]`}></div>
            <h2 className="absolute text-[#7D8FB3] font-[700] bottom-[-25px] text-[12px] leading-[20px]">{title}</h2>
        </div>
    )
}