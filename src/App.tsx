import { useState } from "react";
import { Element } from "react-scroll";
import {
	MantineProvider,
	ColorSchemeProvider,
	ColorScheme,
	Container,
} from "@mantine/core";
import { HeaderMiddle } from "./components/HeaderMiddle";
import { useColorScheme } from "@mantine/hooks";
import { HeroWithImage } from "./components/HeroWithImage";
import Footer from "./components/Footer";
import ContactForm from "./components/contact/ContactForm";
import SkillSet from "./components/skills/SkillSet";
import {
	CSharp,
	Cplusplus,
	JS,
	TS,
	HTML,
	CSS,
	React,
	NextJS,
	Firebase,
	Unity,
	Git,
} from "./images/icons";
import { Database, Globe, Icons, Tools } from "tabler-icons-react";
import ProjectCategory from "./components/projects/ProjectCategory";

function App() {
	const preferredColorScheme = useColorScheme("dark");
	const [colorScheme, setColorScheme] =
		useState<ColorScheme>(preferredColorScheme);
	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

	return (
		<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={toggleColorScheme}
		>
			<MantineProvider
				theme={{ colorScheme }}
				withGlobalStyles
				withNormalizeCSS
			>
				<HeaderMiddle
					links={[
						{
							link: "skillset",
							label: "Skills",
						},
						{
							link: "projects",
							label: "Projects",
						},
						{
							link: "contact",
							label: "Contact",
						},
					]}
				/>
				<Container>
					<HeroWithImage />
				</Container>

				<Container>
					<Element name="skillset">
						<SkillSet
							skills={[
								{
									skillNames: ["C#", "TypeScript", "JavaScript", "C++"],
									skillType: "Programming Languages",
									skillLevels: ["90", "70", "70", "65"],
									skillIcons: [CSharp, TS, JS, Cplusplus],
									skillCategoryIcon: <Tools />,
								},
								{
									skillNames: ["HTML", "CSS", "React", "Next.js"],
									skillType: "Web Tech",
									skillLevels: ["80", "65", "75", "65"],
									skillIcons: [HTML, CSS, React, NextJS],
									skillCategoryIcon: <Globe />,
								},
								{
									skillNames: ["Firebase Firestore"],
									skillType: "Database",
									skillLevels: ["60"],
									skillIcons: [Firebase],
									skillCategoryIcon: <Database />,
								},
								{
									skillNames: ["Unity Game Engine", "Git"],
									skillType: "Others",
									skillLevels: ["90", "70"],
									skillIcons: [Unity, Git],
									skillCategoryIcon: <Icons />,
								},
							]}
						/>
					</Element>
				</Container>

				<Container>
					<Element name="projects">
						<ProjectCategory />
					</Element>
				</Container>

				<Container>
					<Element name="contact">
						<ContactForm />
					</Element>
				</Container>

				<Footer
					links={[
						{
							link: "skillset",
							label: "Skills",
						},
						{
							link: "projects",
							label: "Projects",
						},
					]}
				/>
			</MantineProvider>
		</ColorSchemeProvider>
	);
}

export default App;
