export default function QuestionSection({ section }) {
    return (
        <div className="w-full px-4 py-12" style={{
            background: `${section.background.hex}`
        }}>
            <p className="font-mulish text-2xl font-extrabold mx-auto text-center">{section.title}</p>
            <p className="font-mulish text-lg font-normal text-center">
                {section.description} <span style={{
                    color: `${section.linkColor.hex}`
                }}>{section.link}</span>
            </p>
        </div>
    )
}