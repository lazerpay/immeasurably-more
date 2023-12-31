import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export default function HeroSection({ section }) {
    return (
        <div className="w-full h-[415px] relative overflow-hidden md:h-[459px]" style={{
            background: section.background.hex
        }}>
            <Image
                src={section.heroImage.url}
                alt="Hero Image"
                fill={true}
                layout={'fill'}
                className="hidden md:block"
            />
            <Image
                src={section.heroImageSmall.url}
                alt="Hero Image"
                fill={true}
                layout={'fill'}
                className="block md:hidden"
            />
            <Image
                src={section.smallHeroText.url}
                alt="immeasurably more"
                width={section.smallHeroText.width}
                height={section.smallHeroText.height}
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    zIndex: "100",
                    transform: "translate(-50%, -50%)"
                }}
                className="block lg:hidden"
            />
            <Image
                src={section.largeHeroText.url}
                alt="immeasurably more"
                width={section.largeHeroText.width}
                height={section.largeHeroText.height}
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    zIndex: "100",
                    transform: "translate(-50%, -50%)"
                }}
                className="hidden lg:block"
            />
            <button className="btn-primary absolute z-100 top-6 right-6 gap-2 px-6 py-2">
                <p className="text-white font-mulish font-bold">{section.buttonText}</p>
                <FontAwesomeIcon icon={faArrowRightFromBracket} className="text-white" />
            </button>
        </div>
    )
}