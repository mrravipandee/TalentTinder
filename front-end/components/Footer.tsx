import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "./data/index";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
    return (
        <footer className="w-full pt-20 pb-10 relative" id="contact">
            {/* background grid */}
            <div className="w-full absolute left-0 -bottom-72 min-h-96">
                <img
                    src="/footer-grid.svg"
                    alt="grid background"
                    className="w-full h-full object-cover opacity-50"
                />
            </div>

            <div className="flex flex-col items-center">
                <h3 className="heading lg:max-w-[50vw] text-center text-5xl font-semibold ">
                    Ready to <span className="text-[#436ef5]">discover your perfect</span> career opportunity?
                </h3>
                <p className="text-white md:mt-10 my-5 text-center lg:max-w-[60vw]">
                    Get in touch today, and let&apos;s explore how we can assist you in finding your ideal job and achieving your career aspirations.
                </p>
                <a href="mailto:imravipanday@gmail.com">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>

            <div className="flex mt-16 md:flex-row flex-col justify-between items-center px-4 md:px-16">
                <p className="md:text-base text-sm md:font-normal font-light text-center md:text-left">
                    Copyright © 2025 Ravi Pandey
                </p>

                <div className="flex items-center md:gap-3 gap-6 mt-4 md:mt-0">
                    {socialMedia.map((info) => (
                        <a
                            key={info.id}
                            href={info.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                        >
                            <img src={info.img} width={20} height={20} />
                        </a>
                    ))}
                </div>

            </div>
        </footer>
    );
};

export default Footer;
