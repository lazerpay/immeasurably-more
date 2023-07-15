export default function QuestionSection({ section }) {
    return (
        <div className="w-full px-4 py-12 lg:py-[100px]" style={{
            background: `${section.background.hex}`
        }}>
            <p className="font-mulish text-2xl font-extrabold mx-auto text-center">{section.title}</p>
            <p className="font-mulish text-lg font-normal text-center max-w-[470px] mx-auto">
                {section.description} <span style={{
                    color: `${section.linkColor.hex}`
                }}>{section.link}</span>
            </p>
        </div>
    )
}