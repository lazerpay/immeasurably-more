import DownloadRow from "./downloadrow"

export default function DownloadSection({ section }) {
    return (
        <div className="w-full pb-16 px-4 lg:pb-[100px]">
            <p className="font-mulish text-2xl mx-auto font-extrabold text-center">{section.titleFront} <span className="italic">{section.titleItalic} {section.titleRear}</span></p>
            <p className="mx-auto text-center mt-2 font-mulish font-normal text-lg md:max-w-[822px]">{section.description}</p>
            <button className="block mx-auto w-full mt-6 rounded-2xl py-4 font-mulish text-base font-bold text-white max-w-[395px]" style={{
                background: `${section.primaryButtonBackground.hex}`
            }}>
                {section.primaryButtonText}
            </button>
            <div className="w-full mt-6 lg:mt-8">
                {section.downloadRows.map((row, index) => {
                    return <DownloadRow content={row} key={index} />
                })}
            </div>
        </div>
    )
}