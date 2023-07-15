import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export default function ListenSection({ section }) {
    return (
        <div className="w-full py-9 md:flex md:flex-row md:items-center md:justify-center md:py-4" style={{
            background: `${section.background.hex}`
        }}>
            <Image
                src={section.imageSmall.url}
                alt="Pastor Image"
                width={section.imageSmall.width}
                height={section.imageSmall.height}
                className="block mx-auto md:hidden"
            />
            <div className="md:max-w-[360px]">
                <p className="mx-auto text-center font-mulish text-lg font-extrabold px-12 md:mx-0 md:text-left md:px-0 md:text-[32px]">{section.description}</p>
                <button className="btn-primary mx-auto mt-4 px-6 py-2 gap-1 md:mx-0 md:mt-6 md:w-[216px] md:py-3">
                    <FontAwesomeIcon icon={faPlay} className="text-white" />
                    <p className="text-white font-mulish text-base font-bold ml-1">{section.buttonText}</p>
                </button>
            </div>
            <Image
                src={section.imageLarge.url}
                alt="Pastor Image"
                width={section.imageLarge.width}
                height={section.imageLarge.height}
                className="hidden md:block"
            />
        </div>
    )
}