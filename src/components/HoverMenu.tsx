import {
	createStyles,
	Group,
	ActionIcon,
	Image,
	useMantineColorScheme,
	Space,
	Divider,
	Button,
} from "@mantine/core";
import { BrandGithub, BrandBitbucket, BrandGitlab } from "tabler-icons-react";
import { ItchBlack, ItchWhite } from "../images/icons";
import ThemeToggle from "./ThemeToggle";

const useStyles = createStyles((theme) => ({
	hoverMenu: {
		position: "fixed",
		borderRadius: "5px",
		border: "1px solid",
		top: "70%",
		left: "95%",
		zIndex: 5,

		backgroundColor:
			theme.colorScheme === "dark"
				? theme.colors.dark[6]
				: theme.colors.gray[2],
		borderColor:
			theme.colorScheme === "dark"
				? theme.colors.gray[0]
				: theme.colors.dark[6],

		[theme.fn.smallerThan("sm")]: {
			top: "90%",
			left: "25%",
		},
	},
	hoverItems: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		height: "100%",

		[theme.fn.smallerThan("sm")]: {
			width: "auto",
			marginLeft: "auto",
			flexDirection: "row",
		},
	},
	hoverItem: {
		"&:hover": {
			zoom: 1.5,
			scale: 1.5,
		},
	},
}));

export default function HoverMenu() {
	const { classes } = useStyles();
	const { colorScheme } = useMantineColorScheme();

	return (
		<div className={classes.hoverMenu}>
			<Group spacing={2} className={classes.hoverItems} position="right" noWrap>
				<ActionIcon
					size="xl"
					component="a"
					href="https://github.com/Niloy28"
					target="_blank"
				>
					<BrandGithub size={18} />
				</ActionIcon>
				<ActionIcon
					size="xl"
					component="a"
					href="https://bitbucket.org/Niloy28/"
					target="_blank"
				>
					<BrandBitbucket size={18} />
				</ActionIcon>
				<ActionIcon
					size="xl"
					component="a"
					href="https://gitlab.com/Niloy28"
					target="_blank"
				>
					<BrandGitlab size={18} />
				</ActionIcon>
				<ActionIcon
					size="xl"
					component="a"
					href="https://niloy28.itch.io/"
					target="_blank"
				>
					<Image
						height={18}
						width={18}
						src={colorScheme === "dark" ? ItchWhite : ItchBlack}
					></Image>
				</ActionIcon>
				<Divider
					my="sm"
					size="md"
					color={colorScheme === "dark" ? "grey" : "dark"}
				/>
				<ThemeToggle />
				<Space h="sm" w="sm" />
			</Group>
		</div>
	);
}
