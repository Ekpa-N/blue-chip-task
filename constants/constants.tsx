import { FaUserLarge } from "react-icons/fa6";
import { TiDocumentText } from "react-icons/ti";
import { IoMdLock } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";

const cardData = [
    {
        card: "Master Card",
        balance: "4560",
        currency: "$",
        img: "../images/credit-card.svg"
    },
    {
        card: "Master Card",
        balance: "4560",
        currency: "$",
        img: "../images/master-card-one.jpg"
    },
    {
        card: "Master Card",
        balance: "4560",
        currency: "$",
        img: "../images/master-card-two.webp"
    },
]

const settingsData = [
    {
        info: "Personal Information",
        icon: FaUserLarge
    },
    {
        info: "Documents and References",
        icon: TiDocumentText
    },
    {
        info: "Security & Codes",
        icon: IoMdLock
    },
    {
        info: "Account settings",
        icon: IoMdSettings
    },
]


const chartData = [
    {
        sign: "$",
        amount: 154,
        bg:"#FFBE00",
        gradientFrom:"#fec11d80", //#ffc72100
        gradientTo:"#ffc72100",
        index:"z-10",
        width:"110px",
        height: "184px",
        bubbleHeight: "140px",
        bubbleWidth: "140px",
        bubbleTop: "25px",
        title: "Fast Food",
        left: "0px"
    },
    {
        sign: "$",
        amount: 154,
        bg:"#e64683",
        gradientFrom:"#e64683",
        gradientTo:"#e646831a",
        index:"z-20",
        width:"179px",
        height: "140px",
        bubbleHeight: "180px",
        bubbleWidth: "180px",
        bubbleTop: "55px",
        title: "Markets",
        left: "0px"
    },
    {
        sign: "$",
        amount: 154,
        bg:"#A55FFE",
        gradientFrom:"#a55ffe4d", //rgba(165, 95, 254, 0.1)
        gradientTo:"#e646831a",
        index:"z-30",
        width:"53px",
        height: "189px",
        bubbleHeight: "130px",
        bubbleWidth: "130px",
        bubbleTop: "25px",
        title: "Pharmacies",
        left: "-30px"
    },
    {
        sign: "$",
        amount: 154,
        bg:"#37C9F6",
        gradientFrom:"#37c9f64d",
        gradientTo:"#37c9f61a",
        index:"z-30",
        width:"130px",
        height: "126px",
        bubbleHeight: "130px",
        bubbleWidth: "130px",
        bubbleTop: "85px",
        title: "Fuel",
        left: "0px"
    },
    {
        sign: "$",
        amount: 154,
        bg:"#33dc4799",
        gradientFrom:"#33dc4733",
        gradientTo:"#33dc471a",
        index:"z-20",
        width:"58px",
        height: "189px",
        bubbleHeight: "120px",
        bubbleWidth: "120px",
        bubbleTop: "55px",
        title: "Markets",
        left: "-30px"
    },
    {
        sign: "$",
        amount: 154,
        bg:"#FF7900",
        gradientFrom:"#ff79004d",
        gradientTo:"#ff79001a",
        index:"z-20",
        width:"100px",
        height: "120px",
        bubbleHeight: "100px",
        bubbleWidth: "100px",
        bubbleTop: "115px",
        title: "Food",
        left: "0px"
    },
]

const menu = [
    {
        title:"Dashboard"
    },
    {
        title:"About Us"
    },
    {
        title:"News"
    },
    {
        title:"User Policy"
    },
    {
        title:"Contacts"
    },
]


export {cardData, settingsData, chartData, menu}