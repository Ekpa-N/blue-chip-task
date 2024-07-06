"use client"
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { cardData, chartData } from "@/constants/constants";
import CircularButton from "@/components/CircularButton";
import { MdOutlineInsertChart } from "react-icons/md"
import Bubble from "@/components/Bubble";
import { FaArrowRight } from "react-icons/fa6";
import InfoCard from "@/components/InfoCard";

export default function Home() {
  const [currentCard, setCurrentCard] = useState<number>(0)
  const [currentCost, setCurrentCost] = useState<string>("Recent")
  const [activeChartTab, setActiveChartTab] = useState<string>("Expenses")

  function selectActiveCard(card: number): void {
    setCurrentCard(card)
  }
  function selectActiveCost(cost: string): void {
    setCurrentCost(cost)
  }
  function selectActiveChartTab(tab: string): void {
    setActiveChartTab(tab)
  }
  useEffect(() => {
  }, [])

  return (
    <>
      <div className="flex flex-col z-5 items-center tablet:hidden">
        <div style={{ backgroundImage: `url(${cardData[currentCard].img})` }} className="h-[210px] w-[330px] mid:w-full mid:h-[290px] flex justify-center bg-cover bg-center rounded-[10px] relative">
          <div className=" absolute bottom-[-35px] flex justify-center gap-[5px]">
            {cardData.map((card: any, idx: number) => {
              return (
                <div className="flex flex-col items-center gap-[5px]">
                  <button onClick={() => { selectActiveCard(idx) }} style={{ backgroundImage: `url(${card.img})` }} className="w-[65px] h-[40px] bg-cover bg-center rounded-[5px]"></button>
                  <div className={`w-[40px] h-[2px] ${currentCard == idx ? "bg-[#FF6633]" : ""}`}></div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="w-[330px] mid:w-[95%] h-[390px] flex flex-col bg-white mt-[80px] rounded-[15px]  overflow-x-auto">
          <div className="h-[66px] flex justify-between sticky left-0 items-center px-[15px] border-b-[2px] border-[#F5F6F7]">
            <CircularButton icon={MdOutlineInsertChart} dimensions={{ h: "h-[40px]", w: "w-[40px]" }} color="text-[#8833FF]" />
            <ul className=" flex gap-[20px] h-[105%]">
              <li onClick={() => { selectActiveChartTab("Expenses") }} className={`h-full border-b-[2px]  ${activeChartTab == "Expenses" ? "border-[#8833FF] text-[#8833FF]" : "text-[#7D8FB3] border-[#F5F6F7]"} font-[700] text-[12px] leading-[20px] flex items-center`}>
                <h2>Expenses</h2>
              </li>
              <li onClick={() => { selectActiveChartTab("Receipts") }} className={`h-full border-b-[2px]  ${activeChartTab == "Receipts" ? "border-[#8833FF] text-[#8833FF]" : "text-[#7D8FB3] border-[#F5F6F7]"} font-[700] text-[12px] leading-[20px] flex items-center`}>
                <h2>Receipts</h2>
              </li>
            </ul>
            <button className="flex border justify-center items-center w-[40px] h-[40px] rounded-[50%] shadow gap-[2px]">
              <div className="bg-[#C3CAD9] rounded-[50%] h-[5px] w-[5px]"></div>
              <div className="bg-[#C3CAD9] rounded-[50%] h-[5px] w-[5px]"></div>
              <div className="bg-[#C3CAD9] rounded-[50%] h-[5px] w-[5px]"></div>
            </button>
          </div>
          <div className="h-[310px] flex justify-cente borde">
            <div className="h-full w-fit flex borde">
              {chartData.map((item, idx) => {
                return (
                  <Bubble title={item.title} left={item.left} gradientFrom={item.gradientFrom} index={item.index} gradientTo={item.gradientTo} width={item.width} height={item.height} bubbleBg={item.bg} bubbleHeight={item.bubbleHeight} bubbleWidth={item.bubbleWidth} bubbleTop={item.bubbleTop} />
                )
              })}
            </div>
          </div>
        </div>
        <div className="w-[330px] mid:w-[95%] min-h-[390px] flex flex-col bg-white mt-[40px] rounded-[15px]">
          <div className="h-[66px] flex items-center px-[15px] border-b-[2px] border-[#F5F6F7]">
            <ul className=" flex justify-between w-full h-[105%]">
              <li onClick={() => { selectActiveCost("Recent") }} className={`h-full border-b-[2px]  ${currentCost == "Recent" ? "border-[#8833FF] text-[#8833FF]" : "text-[#7D8FB3] border-[#F5F6F7]"} font-[700] text-[12px] leading-[20px] flex items-center`}>
                <h2>Recent Operations</h2>
              </li>
              <li onClick={() => { selectActiveCost("Income") }} className={`h-full border-b-[2px]  ${currentCost == "Income" ? "border-[#8833FF] text-[#8833FF]" : "text-[#7D8FB3] border-[#F5F6F7]"} font-[700] text-[12px] leading-[20px] flex items-center`}>
                <h2>Income</h2>
              </li>
              <li onClick={() => { selectActiveCost("Costs") }} className={`h-full border-b-[2px]  ${currentCost == "Costs" ? "border-[#8833FF] text-[#8833FF]" : "text-[#7D8FB3] border-[#F5F6F7]"} font-[700] text-[12px] leading-[20px] flex items-center`}>
                <h2>Costs</h2>
              </li>
            </ul>
          </div>
          <div className="flex flex-col mt-[30px]">
            {cardData.map((card, idx) => {
              return (
                <div className="flex border-b h-[80px] px-[15px] items-center">
                  <div style={{ backgroundImage: `url(${card.img})` }} className="w-[50px] h-[50px] bg-cover bg-center rounded-[50%] border"></div>
                  <div className="flex flex-col ml-[20px]">
                    <h2 className="text-[#7D8FB3] font-[700] text-[12px] leading-[20px]">{card.card}</h2>
                    <h2 className="text-[#6B7A99] text-[12px] font-[900] leading-[20px]">{card.balance}</h2>
                  </div>
                  <div className={`borde w-[50px] h-[30px] flex justify-center  ml-auto items-center bg-[#F7F8FA] rounded-[20px]`}>
                    <h2 className="text-[#6B7A99] text-[12px] font-[900] leading-[20px]">40</h2>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="borde mid:w-[95%] mt-[30px] w-[330px] flex justify-between">
          <InfoCard src="../images/poster-one.jpg"/>
          <InfoCard src="../images/poster-two.jpg"/>
        </div>
        <div style={{backgroundImage:`url(../images/poster-three.png)`}} className=" bg-center bg-cover mid:w-[95%] mt-[30px] h-[270px] rounded-[10px] w-[330px] flex justify-between"></div>
        <div className="borde mid:w-[95%] mt-[30px] w-[330px] flex justify-between">
          <InfoCard src="../images/poster-one.jpg"/>
          <InfoCard src="../images/poster-two.jpg"/>
        </div>
      </div>

      <div className="hidden tablet:flex flex-col z-5 items-center laptop:hidden">
        <div className="w-[330px] mid:w-[95%] h-[390px] flex flex-col bg-white mt-[20px] rounded-[15px] items-center  overflow-x-auto">
          <div className="h-[66px] flex justify-between w-full sticky left-0 items-center px-[15px] border-b-[2px] border-[#F5F6F7]">
            <CircularButton icon={MdOutlineInsertChart} dimensions={{ h: "h-[40px]", w: "w-[40px]" }} color="text-[#8833FF]" />
            <ul className=" flex gap-[20px] h-[105%]">
              <li onClick={() => { selectActiveChartTab("Expenses") }} className={`h-full border-b-[2px]  ${activeChartTab == "Expenses" ? "border-[#8833FF] text-[#8833FF]" : "text-[#7D8FB3] border-[#F5F6F7]"} font-[700] text-[12px] leading-[20px] flex items-center`}>
                <h2>Expenses</h2>
              </li>
              <li onClick={() => { selectActiveChartTab("Receipts") }} className={`h-full border-b-[2px]  ${activeChartTab == "Receipts" ? "border-[#8833FF] text-[#8833FF]" : "text-[#7D8FB3] border-[#F5F6F7]"} font-[700] text-[12px] leading-[20px] flex items-center`}>
                <h2>Receipts</h2>
              </li>
            </ul>
            <button className="flex border justify-center items-center w-[40px] h-[40px] rounded-[50%] shadow gap-[2px]">
              <div className="bg-[#C3CAD9] rounded-[50%] h-[5px] w-[5px]"></div>
              <div className="bg-[#C3CAD9] rounded-[50%] h-[5px] w-[5px]"></div>
              <div className="bg-[#C3CAD9] rounded-[50%] h-[5px] w-[5px]"></div>
            </button>
          </div>
          <div className="h-[310px] flex justify-cente borde">
            <div className="h-full w-fit flex borde">
              {chartData.map((item, idx) => {
                return (
                  <Bubble title={item.title} left={item.left} gradientFrom={item.gradientFrom} index={item.index} gradientTo={item.gradientTo} width={item.width} height={item.height} bubbleBg={item.bg} bubbleHeight={item.bubbleHeight} bubbleWidth={item.bubbleWidth} bubbleTop={item.bubbleTop} />
                )
              })}
            </div>
          </div>
        </div>

        <div className="flex w-full border justify-between px-[15px] border-black">
          <div className="w-[48%] flex flex-col">
            <div style={{ backgroundImage: `url(${cardData[currentCard].img})` }} className=" mt-[20px] w-full h-[245px] flex justify-center bg-cover bg-center rounded-[10px] relative">

              <div className=" absolute bottom-[-35px] flex justify-center gap-[5px]">
                {cardData.map((card: any, idx: number) => {
                  return (
                    <div className="flex flex-col items-center gap-[5px]">
                      <button onClick={() => { selectActiveCard(idx) }} style={{ backgroundImage: `url(${card.img})` }} className="w-[65px] h-[40px] bg-cover bg-center rounded-[5px]"></button>
                      <div className={`w-[40px] h-[2px] ${currentCard == idx ? "bg-[#FF6633]" : ""}`}></div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="w-full mt-[50px]  min-h-[390px] flex flex-col bg-white rounded-[15px]">
              <div className="h-[66px] flex items-center px-[15px] border-b-[2px] border-[#F5F6F7]">
                <ul className=" flex justify-between w-full h-[105%]">
                  <li onClick={() => { selectActiveCost("Recent") }} className={`h-full border-b-[2px]  ${currentCost == "Recent" ? "border-[#8833FF] text-[#8833FF]" : "text-[#7D8FB3] border-[#F5F6F7]"} font-[700] text-[12px] leading-[20px] flex items-center`}>
                    <h2>Recent Operations</h2>
                  </li>
                  <li onClick={() => { selectActiveCost("Income") }} className={`h-full border-b-[2px]  ${currentCost == "Income" ? "border-[#8833FF] text-[#8833FF]" : "text-[#7D8FB3] border-[#F5F6F7]"} font-[700] text-[12px] leading-[20px] flex items-center`}>
                    <h2>Income</h2>
                  </li>
                  <li onClick={() => { selectActiveCost("Costs") }} className={`h-full border-b-[2px]  ${currentCost == "Costs" ? "border-[#8833FF] text-[#8833FF]" : "text-[#7D8FB3] border-[#F5F6F7]"} font-[700] text-[12px] leading-[20px] flex items-center`}>
                    <h2>Costs</h2>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col mt-[30px]">
                {cardData.map((card, idx) => {
                  return (
                    <div className="flex border-b h-[80px] px-[15px] items-center">
                      <div style={{ backgroundImage: `url(${card.img})` }} className="w-[50px] h-[50px] bg-cover bg-center rounded-[50%] border"></div>
                      <div className="flex flex-col ml-[20px]">
                        <h2 className="text-[#7D8FB3] font-[700] text-[12px] leading-[20px]">{card.card}</h2>
                        <h2 className="text-[#6B7A99] text-[12px] font-[900] leading-[20px]">{card.balance}</h2>
                      </div>
                      <div className={`borde w-[50px] h-[30px] flex justify-center  ml-auto items-center bg-[#F7F8FA] rounded-[20px]`}>
                        <h2 className="text-[#6B7A99] text-[12px] font-[900] leading-[20px]">40</h2>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="w-[48%]">
            <div className="borde mt-[20px] w-full flex justify-between">
              <InfoCard src="../images/poster-one.jpg"/>
              <InfoCard src="../images/poster-two.jpg"/>
            </div>
            <div style={{backgroundImage:`url(../images/poster-three.png)`}} className="borde bg-center bg-cover w-full mt-[30px] h-[270px] rounded-[10px] flex justify-between"></div>
            <div className="borde w-full mt-[30px] flex justify-between">
              <InfoCard src="../images/poster-one.jpg"/>
              <InfoCard src="../images/poster-two.jpg"/>
            </div>
          </div>
        </div>


      </div>

      <div className="hidden laptop:flex z-5  gap-[25px] px-[15px]">
        <div className="w-[350px] flex flex-col">
          <div style={{ backgroundImage: `url(${cardData[currentCard].img})` }} className=" mt-[20px] w-full h-[245px] flex justify-center bg-cover bg-center rounded-[10px] relative">

            <div className=" absolute bottom-[-35px] flex justify-center gap-[5px]">
              {cardData.map((card: any, idx: number) => {
                return (
                  <div className="flex flex-col items-center gap-[5px]">
                    <button onClick={() => { selectActiveCard(idx) }} style={{ backgroundImage: `url(${card.img})` }} className="w-[65px] h-[40px] bg-cover bg-center rounded-[5px]"></button>
                    <div className={`w-[40px] h-[2px] ${currentCard == idx ? "bg-[#FF6633]" : ""}`}></div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="w-full mt-[50px]  min-h-[390px] flex flex-col bg-white rounded-[15px]">
            <div className="h-[66px] flex items-center px-[15px] border-b-[2px] border-[#F5F6F7]">
              <ul className=" flex justify-between w-full h-[105%]">
                <li onClick={() => { selectActiveCost("Recent") }} className={`h-full border-b-[2px]  ${currentCost == "Recent" ? "border-[#8833FF] text-[#8833FF]" : "text-[#7D8FB3] border-[#F5F6F7]"} font-[700] text-[12px] leading-[20px] flex items-center`}>
                  <h2>Recent Operations</h2>
                </li>
                <li onClick={() => { selectActiveCost("Income") }} className={`h-full border-b-[2px]  ${currentCost == "Income" ? "border-[#8833FF] text-[#8833FF]" : "text-[#7D8FB3] border-[#F5F6F7]"} font-[700] text-[12px] leading-[20px] flex items-center`}>
                  <h2>Income</h2>
                </li>
                <li onClick={() => { selectActiveCost("Costs") }} className={`h-full border-b-[2px]  ${currentCost == "Costs" ? "border-[#8833FF] text-[#8833FF]" : "text-[#7D8FB3] border-[#F5F6F7]"} font-[700] text-[12px] leading-[20px] flex items-center`}>
                  <h2>Costs</h2>
                </li>
              </ul>
            </div>
            <div className="flex flex-col mt-[30px]">
              {cardData.map((card, idx) => {
                return (
                  <div className="flex border-b h-[80px] px-[15px] items-center">
                    <div style={{ backgroundImage: `url(${card.img})` }} className="w-[50px] h-[50px] bg-cover bg-center rounded-[50%] border"></div>
                    <div className="flex flex-col ml-[20px]">
                      <h2 className="text-[#7D8FB3] font-[700] text-[12px] leading-[20px]">{card.card}</h2>
                      <h2 className="text-[#6B7A99] text-[12px] font-[900] leading-[20px]">{card.balance}</h2>
                    </div>
                    <div className={`borde w-[50px] h-[30px] flex justify-center  ml-auto items-center bg-[#F7F8FA] rounded-[20px]`}>
                      <h2 className="text-[#6B7A99] text-[12px] font-[900] leading-[20px]">40</h2>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="grow flex flex-col gap-[20px] ">
          <div className=" w-full h-[390px] flex flex-col bg-white rounded-[15px] items-center  overflow-x-auto">
            <div className="h-[66px] flex justify-between w-full sticky left-0 items-center px-[15px] border-b-[2px] border-[#F5F6F7]">
              <CircularButton icon={MdOutlineInsertChart} dimensions={{ h: "h-[40px]", w: "w-[40px]" }} color="text-[#8833FF]" />
              <ul className=" flex gap-[20px] h-[105%]">
                <li onClick={() => { selectActiveChartTab("Expenses") }} className={`h-full border-b-[2px]  ${activeChartTab == "Expenses" ? "border-[#8833FF] text-[#8833FF]" : "text-[#7D8FB3] border-[#F5F6F7]"} font-[700] text-[12px] leading-[20px] flex items-center`}>
                  <h2>Expenses</h2>
                </li>
                <li onClick={() => { selectActiveChartTab("Receipts") }} className={`h-full border-b-[2px]  ${activeChartTab == "Receipts" ? "border-[#8833FF] text-[#8833FF]" : "text-[#7D8FB3] border-[#F5F6F7]"} font-[700] text-[12px] leading-[20px] flex items-center`}>
                  <h2>Receipts</h2>
                </li>
              </ul>
              <button className="flex border justify-center items-center w-[40px] h-[40px] rounded-[50%] shadow gap-[2px]">
                <div className="bg-[#C3CAD9] rounded-[50%] h-[5px] w-[5px]"></div>
                <div className="bg-[#C3CAD9] rounded-[50%] h-[5px] w-[5px]"></div>
                <div className="bg-[#C3CAD9] rounded-[50%] h-[5px] w-[5px]"></div>
              </button>
            </div>
            <div className="h-[310px] flex justify-cente borde">
              <div className="h-full w-fit flex borde">
                {chartData.map((item, idx) => {
                  return (
                    <Bubble title={item.title} left={item.left} gradientFrom={item.gradientFrom} index={item.index} gradientTo={item.gradientTo} width={item.width} height={item.height} bubbleBg={item.bg} bubbleHeight={item.bubbleHeight} bubbleWidth={item.bubbleWidth} bubbleTop={item.bubbleTop} />
                  )
                })}
              </div>
            </div>
          </div>
          <div className="flex gap-[20px]">
            <InfoCard src="../images/poster-one.jpg" />
            <InfoCard src="../images/poster-two.jpg"/>
            <div style={{backgroundImage:`url(../images/poster-two.jpg)`}} className="borde bg-center bg-cover w-full h-[270px] rounded-[10px] flex justify-between"></div>
          </div>
          <div className="flex flex-row-reverse gap-[20px]">
            <InfoCard src="../images/poster-one.jpg" />
            <InfoCard src="../images/poster-two.jpg"/>
            <div style={{backgroundImage:`url(../images/poster-three.png)`}} className=" w-full h-[270px] rounded-[10px] flex justify-between"></div>
          </div>
        </div>
      </div>
    </>
  );
}

