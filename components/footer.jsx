import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import YouTube from '@/public/assets/YouTube.png';
import Facebook from '@/public/assets/Facebook.png';
import Instagram from '@/public/assets/Instagram.png';
import Twitter from '@/public/assets/Twitter.png';
import Globe from '@/public/assets/globe.png';
import Image from 'next/image';

export default function Footer() {
    return (
        <div className="w-full py-4 xl:py-0 xl:pb-4">
            <div className='px-8 flex flex-row gap-4 md:px-12 xl:hidden'>
                <div className='column'>
                    <div className="footer-links-wrapper">
                        <p className="footer-header">About</p>
                        <a className="footer-link">Beliefs</a>
                        <a className="footer-link">Values</a>
                        <a className="footer-link">Leadership</a>
                    </div>

                    <div className="footer-links-wrapper">
                        <p className="footer-header">Get Involved</p>
                        <a className="footer-link">eGroups</a>
                        <a className="footer-link">eTeams</a>
                        <a className="footer-link">eKidz</a>
                        <a className="footer-link">Youth</a>
                        <div className="footer-link-group">
                            <a>Outreach <FontAwesomeIcon icon={faArrowRight} className='arrow' /></a>
                        </div>
                    </div>

                    <div className="footer-links-wrapper">
                        <p className="footer-header">Join Us</p>
                        <a className="footer-link">Find a Location</a>
                        <a className="footer-link">Watch Parties</a>
                        <a className="footer-link">Events</a>
                    </div>
                </div>

                <div className='column'>
                    <div className="footer-links-wrapper">
                        <p className="footer-header">Media</p>
                        <a className="footer-link">Watch Online</a>
                        <a className="footer-link">Elevation Store</a>
                        <a className="footer-link">Leadership</a>
                        <div className="footer-link-group">
                            <a>Worship <FontAwesomeIcon icon={faArrowRight} className='arrow' /></a>
                        </div>
                    </div>

                    <div className="footer-links-wrapper">
                        <p className="footer-header">Opportunities</p>
                        <a className="footer-link">Jobs</a>
                        <a className="footer-link">Internships</a>
                    </div>

                    <div className="footer-links-wrapper">
                        <p className="footer-header">Finance</p>
                        <a className="footer-link">Giving</a>
                        <a className="footer-link">Annual Report</a>
                    </div>

                    <div className="footer-links-wrapper">
                        <p className="footer-header">Personal</p>
                        <div className="footer-link-group">
                            <a>My Elevation <FontAwesomeIcon icon={faArrowRight} className='arrow' /></a>
                        </div>
                        <a className="footer-link">Contact Us</a>
                    </div>
                </div>
            </div>

            <div className='hidden xl:grid xl:mx-auto xl:mt-[62px] xl:grid-cols-6 gap-x-[72px] xl:w-max'>
                <div className="footer-links-wrapper">
                    <p className="footer-header">About</p>
                    <a className="footer-link">Beliefs</a>
                    <a className="footer-link">Values</a>
                    <a className="footer-link">Leadership</a>
                </div>

                <div className="footer-links-wrapper">
                    <p className="footer-header">Media</p>
                    <a className="footer-link">Watch Online</a>
                    <a className="footer-link">Elevation Store</a>
                    <a className="footer-link">Leadership</a>
                    <div className="footer-link-group">
                        <a>Worship <FontAwesomeIcon icon={faArrowRight} className='arrow' /></a>
                    </div>
                </div>

                <div className="footer-links-wrapper">
                    <p className="footer-header">Get Involved</p>
                    <a className="footer-link">eGroups</a>
                    <a className="footer-link">eTeams</a>
                    <a className="footer-link">eKidz</a>
                    <a className="footer-link">Youth</a>
                    <div className="footer-link-group">
                        <a>Outreach <FontAwesomeIcon icon={faArrowRight} className='arrow' /></a>
                    </div>
                </div>

                <div className="footer-links-wrapper">
                    <p className="footer-header">Opportunities</p>
                    <a className="footer-link">Jobs</a>
                    <a className="footer-link">Internships</a>
                </div>

                <div className="footer-links-wrapper">
                    <p className="footer-header">Join Us</p>
                    <a className="footer-link">Find a Location</a>
                    <a className="footer-link">Watch Parties</a>
                    <a className="footer-link">Events</a>
                </div>

                <div className='flex flex-col gap-8'>
                    <div className="footer-links-wrapper">
                        <p className="footer-header">Finance</p>
                        <a className="footer-link">Giving</a>
                        <a className="footer-link">Annual Report</a>
                    </div>

                    <div className="footer-links-wrapper">
                        <p className="footer-header">Personal</p>
                        <div className="footer-link-group">
                            <a>My Elevation <FontAwesomeIcon icon={faArrowRight} className='arrow' /></a>
                        </div>
                        <a className="footer-link">Contact Us</a>
                    </div>
                </div>
            </div>

            <div className='xl:mt-6 xl:py-6 xl:px-8 xl:flex xl:flex-row-reverse xl:items-center xl:justify-between xl:border-b xl:border-[#dddfe3]'>
                <div className='flex flex-row items-center justify-center gap-6 mt-4 py-4 border-b border-[#dddfe3]'>
                    <Image
                        src={YouTube}
                        alt="YouTube"
                    />
                    <Image
                        src={Facebook}
                        alt="Facebook"
                    />
                    <Image
                        src={Instagram}
                        alt="Instagram"
                    />
                    <Image
                        src={Twitter}
                        alt="Twitter"
                    />
                </div>

                <div className='py-4 px-12 border-b border-[#dddfe3] xl:border-none xl:flex xl:flex-row xl:gap-2 xl:px-0'>
                    <p className='text-center font-mulish text-[#18181c] text-base font-normal'>
                        11416 E. Independence Blvd Suite N, Matthews, NC, 28105
                    </p>
                    <p className='hidden xl:block text-[#18181c] font-normal text-base'>|</p>
                    <p className='text-center font-mulish text-[#ff671f] text-base font-normal'>(704) 246-0800</p>
                </div>
            </div>

            <div className='hidden xl:flex xl:py-6 xl:px-8 xl:flex-row xl:items-center xl:justify-between'>
                <div className='flex flex-row items-center'>
                    <p className='font-mulish text-base font-normal text-[#777c88]'>© 2022 Elevation Church.  All Rights Reserved </p>
                    <a className='font-mulish text-sm ml-4 font-bold text-[#777c88]'>Terms of Use</a>
                    <p className='font-mulish text-sm ml-2 font-bold text-[#777c88]'>|</p>
                    <a className='font-mulish text-sm ml-2 font-bold text-[#777c88]'>Privacy Policy</a>
                </div>

                <div className='flex flex-row items-center gap-2'>
                    <Image
                        src={Globe}
                        alt="English"
                    />
                    <p className='font-mulish text-sm font-extrabold'>English</p>
                </div>
            </div>
        </div>
    )
}