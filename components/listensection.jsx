import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export default function ListenSection({ section }) {
    return (
        <div className="w-full py-9" style={{
            background: `${section.background.hex}`
        }}>
            <Image
                src={section.imageSmall.url}
                alt="Pastor Image"
                width={section.imageSmall.width}
                height={section.imageSmall.height}
                className="block mx-auto"
            />
            <p className="mx-auto text-center font-mulish text-lg font-extrabold px-12">{section.description}</p>
            <button className="btn-primary mx-auto mt-4 px-6 py-2 gap-1">
                <FontAwesomeIcon icon={faPlay} className="text-white" />
                <p className="text-white font-mulish text-base font-bold ml-1">{section.buttonText}</p>
            </button>
        </div>
    )
}