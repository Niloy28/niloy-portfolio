import { useState } from "react";
import { Link } from "react-scroll";
import {
	createStyles,
	Header,
	Group,
	Container,
	Burger,
	Text,
	Menu,
} from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
	inner: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		height: "100%",

		[theme.fn.smallerThan("sm")]: {
			justifyContent: "flex-start",
		},
	},

	links: {
		width: 260,

		[theme.fn.smallerThan("sm")]: {
			display: "none",
		},
	},

	social: {
		width: 260,

		[theme.fn.smallerThan("sm")]: {
			width: "auto",
			marginLeft: "auto",
		},
	},

	burger: {
		marginRight: theme.spacing.md,

		[theme.fn.largerThan("sm")]: {
			display: "none",
		},
	},

	link: {
		display: "block",
		lineHeight: 1,
		padding: "8px 12px",
		borderRadius: theme.radius.sm,
		textDecoration: "none",
		color:
			theme.colorScheme === "dark"
				? theme.colors.dark[0]
				: theme.colors.gray[7],
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,

		"&:hover": {
			backgroundColor:
				theme.colorScheme === "dark"
					? theme.colors.dark[6]
					: theme.colors.gray[0],
		},
	},

	linkActive: {
		"&, &:hover": {
			backgroundColor:
				theme.colorScheme === "dark"
					? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
					: theme.colors[theme.primaryColor][0],
			color:
				theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 3 : 7],
		},
	},
}));

interface HeaderMiddleProps {
	links: { link: string; label: string }[];
}

export function HeaderMiddle({ links }: HeaderMiddleProps) {
	const [opened, toggleOpened] = useBooleanToggle(false);
	const [active, setActive] = useState(links[0].link);
	const { classes, cx } = useStyles();

	const items = links.map((link) => (
		<Link
			to={link.link}
			offset={-70}
			smooth
			key={link.label}
			className={cx(classes.link, {
				[classes.linkActive]: active === link.link,
			})}
			onClick={() => {
				setActive(link.link);
			}}
		>
			{link.label}
		</Link>
	));

	return (
		<Header height={56 * 2} mb={120} fixed>
			<Container className={classes.inner}>
				<Menu
					className={classes.burger}
					opened={opened}
					control={
						<Burger
							opened={opened}
							onClick={() => toggleOpened()}
							size="sm"
							className={classes.burger}
						/>
					}
				>
					{items.map((item) => {
						return <Menu.Item key={item.key}>{item}</Menu.Item>;
					})}
				</Menu>

				<Group className={classes.links} spacing={5}>
					{items}
				</Group>

				<Text
					variant="gradient"
					gradient={{ from: "red", to: "green", deg: 30 }}
					weight="bold"
					size="xl"
				>
					Farhan's Portfolio
				</Text>
			</Container>
		</Header>
	);
}
