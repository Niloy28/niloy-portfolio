import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { Sun, MoonStars } from "tabler-icons-react";

export default function ThemeToggle() {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const isDark = colorScheme === "dark";

	return (
		<ActionIcon
			variant="outline"
			color={isDark ? "yellow" : "blue"}
			onClick={() => toggleColorScheme()}
			title="Toggle Page Theme"
		>
			{isDark ? <Sun size={18} /> : <MoonStars size={18} />}
		</ActionIcon>
	);
}
