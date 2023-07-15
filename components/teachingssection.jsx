import VideoCard from "./videocard"

export default function TeachingsSection({ section }) {
    return (
        <div className="w-full py-16 flex flex-col items-center">
            <p className="font-mulish font-extrabold text-[38px]">{section.title}</p>
            <p className="font-mulish font-normal text-lg text-center mt-4 px-4 leading-7">{section.description}</p>
            <div className="w-full px-4 mt-8 flex flex-col items-center gap-4 md:hidden">
                {section.videoCards.map((card, index) => {
                    return <VideoCard content={card} key={index} />
                })}
            </div>
        </div>
    )
}