export default function TabSection({ section }) {
    return (
        <>
            <div className="w-full flex flex-row items-center" style={{
                borderBottom: `1px solid ${section.borderColor.hex}`
            }}>
                <p className="w-[50%] py-5 text-center font-mulish text-lg font-bold border-b-2 border-black">{section.tabLabel1}</p>
                <p className={`w-[50%] py-5 text-center font-mulish text-lg font-bold`} style={{
                    color: `${section.grey.hex}`
                }}>{section.tabLabel2}</p>
            </div>
            <p className="px-4 my-12 text-center font-mulish text-lg font-normal leading-7">{section.description}</p>
        </>
    )
}