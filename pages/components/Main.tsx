import React from "react";
import Card1 from "./Card";
import { Card2, Card3 } from "./Card";

export default function Main() {
	return (
		<section>
			<div className="dark:text-white">
				<h3 className="text-3xl font-semibold py-1 dark:text-purple-600 lg:text-4xl">
					About me
				</h3>
				<p className="text-md py-2 leading-6 text-gray-800 md:text-lg lg:text-xl dark:text-gray-200">
					I`m Matheus Padilha, born in 2002 and native from Brazil. <br></br>
					An extrovert person that likes innovation, has a good team work and
					loves to learn new things! Along all that, I also study{" "}
					<span className="text-purple-500">
						<strong>Software Engineering</strong>
					</span>{" "}
					and am in 4º year. Taking everyday to get better, both personally and
					professionally.
				</p>
				<p className="text-md py-2 leading-6 text-gray-800 md:text-lg lg:text-xl dark:text-gray-200">
					Currently I`m focused on Frontend with tools such as React.Js,
					Typescript and others (Styled Components, Tailwind, Vite...).{" "}
					<br></br>I have some knowledge apart with database such as PostgreSQL.
					I want to work as{" "}
					<span className="text-purple-500">
						<strong>Frontend Developer</strong>
					</span>
					, because I really like creating new stuff other people can see |
					watch | debate | discuss inside a website or web application. I`ve
					been studying English (Advanced) and German(Basic) and own experience
					with International teams and Data management.
				</p>
			</div>
			<div className=" md:text-xl dark:text-white">
				<h3 className="text-3xl font-semibold pt-4 pb-2 dark:text-purple-600  lg:text-4xl">
					Portfolio
				</h3>
				<p>Here is some of my projects. There is more to come so stay tuned!</p>
				<div className=" pb-4 lg:flex gap-10">
					<Card1 />
					<Card2 />
					<Card3 />
				</div>
			</div>
		</section>
	);
}
