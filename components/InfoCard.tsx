

type InfoCardProps = {
    src: string;
}

export default function InfoCard({src}:InfoCardProps) {
    return (
        <div style={{backgroundImage: `url(${src})`}} className=" w-[150px] mid:w-[47%] h-[270px] bg-cover bg-center rounded-[10px]"></div>
    )
}