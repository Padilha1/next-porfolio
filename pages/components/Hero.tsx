import { useState } from "react";
import {
	AiFillInstagram,
	AiFillLinkedin,
	AiFillGithub,
} from "react-icons/ai";
import Image from "next/image";
import logo from "../../public/business-3d.png";

export default function Hero() {
	const [darkMode, setDarkMode] = useState(false);
	return (
		<section className="min-h-screen ">
			{/* Hero */}
			<div className="text-center p-10 dark:text-white">
				<h2 className="bg-gradient-to-tl from-[#0B327A] to-[#EB1212] bg-clip-text text-transparent text-5xl py-2 font-semibold md:text-6xl">
					Matheus Padilha
				</h2>
				<h3 className="text-2xl py-2 md:text-3xl">
					Software Engineer and Web Developer
				</h3>
				<p className="text-md py-5 leading-6 mx-auto text-gray-800 md:text-xl max-w-xl dark:text-gray-200">
					Looking forward to enhance people`s live by developing softwares. Get
					to know me and my projects better here!
				</p>
			</div>
			{/* Icons */}
			<div className="text-5xl flex justify-center gap-16 py-3 text-purple-900 hover:drop-shadow-5xl">
				<a
					href="https://github.com/Padilha1"
					className="rounded"
					rel="noopener noreferrer"
					target={"_blank"}
				>
					<AiFillGithub
						className="duration-500
          hover:text-[#EB1212] shadow-lg hover:shadow-[#EB1212]/60"
					/>
				</a>
				<a
					href="https://www.linkedin.com/in/padilha--matheus/"
					rel="noopener noreferrer"
					target="_blank"
				>
					<AiFillLinkedin
						className=" duration-500
          hover:text-[#EB1212] shadow-lg  hover:shadow-[#EB1212]/60"
					/>
				</a>
				<a
					href="https://www.instagram.com/matheus.padilha/"
					rel="noopener noreferrer"
					target="_blank"
				>
					<AiFillInstagram
						className=" duration-500
          hover:text-[#EB1212] shadow-lg hover:shadow-[#EB1212]/60"
					/>
				</a>
			</div>

			<div
				className="relative mx-auto bg-gradient-to-b from-purple-900 rounded-full w-60 h-60 mt-20 overflow-hidden md:h-96 md:w-96
      "
			>
				<Image src={logo} layout="responsive" objectFit="fill" alt="" />
			</div>
		</section>
	);
}
