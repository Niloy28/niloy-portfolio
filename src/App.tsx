import { useState } from "react";
import {
	MantineProvider,
	ColorSchemeProvider,
	ColorScheme,
} from "@mantine/core";
import { HeaderMiddle } from "./components/HeaderMiddle";
import { useColorScheme } from "@mantine/hooks";
import { HeroWithImage } from "./components/HeroWithImage";

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
				<HeroWithImage />
			</MantineProvider>
		</ColorSchemeProvider>
	);
}

export default App;
