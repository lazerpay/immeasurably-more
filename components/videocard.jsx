import Image from "next/image";

export default function VideoCard({ content }) {
    return (
        <div className="w-full rounded-2xl pb-8">
            <Image
                src={content.image.url}
                alt="Video Card Poster"
                width={content.image.width}
                height={content.image.height}
            />
            {content.weekText ? 
            <p className="mx-auto text-center font-mulish text-xl font-bold leading-[30px]">{content.weekText}</p>
            : <p className="h-[30px]"></p>
            }
            <Image
                src={content.textImage.url}
                alt="Immeasurably More"
                width={content.textImage.width}
                height={content.textImage.height}
                style={{
                    display: "block",
                    margin: "8px auto 0 auto"
                }}
            />
            <p className="mx-auto text-center mt-4 font-ppeditorial italic font-extralight text-[56px]" style={{
                color: `${content.videoTitleColor.hex}`
            }}>{content.videoTitle}</p>
        </div>
    )
}