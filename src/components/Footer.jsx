import { BsGithub, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";

function Footer() {

    const newDate = new Date();
    const year = newDate.getFullYear();

    return (

        <footer className="relative left-0 bottom-0 sm:h-[10vh] w-full py-5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:px-20 text-white bg-gray-800">
            <section className="xs:text-lg text-md">
                Copyright © {year} | All right reserved
            </section>

            <section className="flex items-center justify-center gap-5 text-2xl text-white">
                <a href="https://github.com/Deepak-GitHub1474" target="_blank" className="hover:scale-125 transition-all ease-in-out duration-300">
                    <BsGithub />
                </a>
                <a href="https://www.instagram.com/deepak__chaudhary/" target="_blank" className="hover:scale-125 transition-all ease-in-out duration-300">
                    <BsInstagram />
                </a>
                <a href="https://www.linkedin.com/in/deepak-chaudhary1474/" target="_blank" className="hover:scale-125 transition-all ease-in-out duration-300">
                    <BsLinkedin />
                </a>
                <a href="https://twitter.com/Deepak_Divs" target="_blank" className="hover:scale-125 transition-all ease-in-out duration-300">
                    <BsTwitter />
                </a>
                <a href="https://youtu.be/v0tFeMgDItE" target="_blank" className="hover:scale-125 transition-all ease-in-out duration-300">
                    <BsYoutube />
                </a>
            </section>
        </footer>

    );
}

export default Footer;