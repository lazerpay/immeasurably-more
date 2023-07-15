import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import LogoShort from '@/public/assets/Logo Short.png';
import LogoBig from '@/public/assets/Logo Big.png';
import Image from 'next/image';

export default function Navbar() {
    return (
        <div className="flex flex-row items-center justify-between py-4 px-6 text-xl relative">
            <FontAwesomeIcon icon={faBars} className="text-black xl:hidden" />
            <Image
                src={LogoShort}
                alt="Elevation Church" 
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
                className='block xl:hidden'
            />
            <Image
                src={LogoBig}
                alt="Elevation Church"
                className='hidden xl:block'
            />
            <div className='hidden xl:flex xl:flex-row xl:items-center xl:gap-6 xl:absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
                <a className='navbar-link'>Sermons</a>
                <a className='navbar-link'>Locations</a>
                <a className='navbar-link'>About</a>
                <a className='navbar-link'>Get Involved</a>
                <a className='navbar-link'>Store</a>
                <a className='navbar-link'>Online</a>
                <a className='navbar-link-active'>Giving</a>
            </div>

            <div className="flex flex-row gap-6 items-center">
                <div className="flex flex-row items-center">
                    <p className='font-mulish text-[13px] font-bold xl:hidden'>En</p>
                    <p className='hidden xl:font-mulish xl:text-[13px] xl:font-bold xl:block'>English</p>
                    <FontAwesomeIcon icon={faAngleDown} className='text-sm' />
                </div>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='block xl:hidden' />
                <FontAwesomeIcon icon={faBars} className="hidden xl:block text-black" />
            </div>
        </div>
    )
}