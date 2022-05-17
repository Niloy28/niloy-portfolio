import { useState } from "react";
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
import ContactForm from "./components/ContactForm";
import SkillSet from "./components/SkillSet";

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
							link: "",
							label: "Skills",
						},
						{
							link: "",
							label: "Projects",
						},
					]}
				/>
				<Container>
					<HeroWithImage />
				</Container>
				<br />
				<SkillSet
					skill={[
						{
							skillNames: ["C#", "TypeScript", "JavaScript", "C++"],
							skillType: "Programming Languages",
							skillLevels: ["90%"],
						},
						{
							skillNames: ["HTML", "CSS", "React", "Next.js"],
							skillType: "Web Tech",
							skillLevels: ["90%"],
						},
						{
							skillNames: ["Firebase Firestore"],
							skillType: "Database",
							skillLevels: ["60%"],
						},
						{
							skillNames: ["Unity Game Engine", "Git"],
							skillType: "Others",
							skillLevels: ["90%"],
						},
					]}
				/>
				<ContactForm />
				<Footer
					links={[
						{
							link: "",
							label: "Skills",
						},
						{
							link: "",
							label: "Projects",
						},
					]}
				/>
			</MantineProvider>
		</ColorSchemeProvider>
	);
}

export default App;
