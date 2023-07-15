import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import YouTube from '@/public/assets/YouTube.png';
import Facebook from '@/public/assets/Facebook.png';
import Instagram from '@/public/assets/Instagram.png';
import Twitter from '@/public/assets/Twitter.png';
import Image from 'next/image';

export default function Footer() {
    return (
        <div className="w-full py-4">
            <div className='px-8 flex flex-row gap-4'>
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

            <div className='py-4 px-12 border-b border-[#dddfe3]'>
                <p className='text-center font-mulish text-[#18181c] text-base font-normal'>
                    11416 E. Independence Blvd Suite N, Matthews, NC, 28105
                </p>
                <p className='text-center font-mulish text-[#ff671f] text-base font-normal'>(704) 246-0800</p>
            </div>
        </div>
    )
}