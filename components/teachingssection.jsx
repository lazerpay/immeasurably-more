import VideoCard from "./videocard"

export default function TeachingsSection({ section }) {
    return (
        <div className="w-full py-16 flex flex-col items-center lg:py-[100px]">
            <p className="font-mulish font-extrabold text-[38px]">{section.title}</p>
            <p className="font-mulish font-normal text-lg text-center mt-4 px-4 leading-7 md:max-w-[812px]">{section.description}</p>
            <div className="w-full px-4 mt-8 flex flex-col items-center gap-4 lg:hidden">
                {section.videoCards.map((card, index) => {
                    return <VideoCard content={card} key={index} />
                })}
            </div>
            <div className="hidden lg:block lg:mt-[62px] lg:w-max">
                <VideoCard content={section.videoCards[0]} />
            </div>
            <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-6 lg:mt-6">
                {section.videoCards.map((card, index) => {
                    if(index > 0) {
                        return <VideoCard content={card} key={index} />
                    }
                })}
            </div>
        </div>
    )
}