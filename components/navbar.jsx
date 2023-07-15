import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import LogoShort from '@/public/assets/Logo Short.png';
import Image from 'next/image';

export default function Navbar() {
    return (
        <div className="flex flex-row items-center justify-between py-4 px-6 text-xl relative">
            <FontAwesomeIcon icon={faBars} className="text-black" />
            <Image
                src={LogoShort}
                alt="Elevation Church" 
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
            />
            <div className="flex flex-row gap-6 items-center">
                <div className="flex flex-row items-center">
                    <p className='font-mulish text-[13px] font-bold'>En</p>
                    <FontAwesomeIcon icon={faAngleDown} className='text-sm' />
                </div>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
        </div>
    )
}