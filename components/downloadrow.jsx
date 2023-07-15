import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function DownloadRow({ content }) {
    return (
        <div className="w-full px-6 py-5 flex flex-row justify-between items-center max-w-[395px] mx-auto" style={{
            background: `rgba(221, 223, 227, 0.2)`,
            borderBottom: `1px solid ${content.borderColor.hex}`
        }}>
            <p className="font-mulish text-base font-bold">{content.title}</p>
            <button className="btn-outline py-4 px-6 w-36 flex flex-row items-center justify-center">
                <p className="font-mulish text-base font-bold">{content.buttonText}</p>
                <FontAwesomeIcon icon={faArrowDown} />
            </button>
        </div>
    )
}