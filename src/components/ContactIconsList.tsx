import React from "react";
import { createStyles, ThemeIcon, Text, Group, Box } from "@mantine/core";
import { Sun, Phone, MapPin, At } from "tabler-icons-react";

type ContactIconVariant = "white" | "gradient";

interface ContactIconStyles {
	variant: ContactIconVariant;
}

const useStyles = createStyles((theme, { variant }: ContactIconStyles) => ({
	wrapper: {
		display: "flex",
		alignItems: "center",
		color: theme.white,
	},

	icon: {
		marginRight: theme.spacing.md,
		backgroundImage:
			variant === "gradient"
				? `linear-gradient(135deg, #eb772a 0%, #ed5e11 100%)`
				: "none",
		backgroundColor: "transparent",
	},

	title: {
		color:
			variant === "gradient"
				? theme.colors.gray[6]
				: theme.colors[theme.primaryColor][0],
	},

	description: {
		color: theme.colorScheme === "dark" ? theme.white : theme.black,
	},
}));

interface ContactIconProps
	extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
	icon: React.FC<any>;
	title: React.ReactNode;
	description: React.ReactNode;
	variant?: ContactIconVariant;
}

function ContactIcon({
	icon: Icon,
	title,
	description,
	variant = "gradient",
	className,
	...others
}: ContactIconProps) {
	const { classes, cx } = useStyles({ variant });
	return (
		<div className={cx(classes.wrapper, className)} {...others}>
			{variant === "gradient" ? (
				<ThemeIcon size={40} radius="md" className={classes.icon}>
					<Icon size={24} />
				</ThemeIcon>
			) : (
				<Box mr="md">
					<Icon size={24} />
				</Box>
			)}

			<div>
				<Text size="xs" className={classes.title}>
					{title}
				</Text>
				<Text className={classes.description}>{description}</Text>
			</div>
		</div>
	);
}

interface ContactIconsListProps {
	data?: ContactIconProps[];
	variant?: ContactIconVariant;
}

const DATA = [
	{ title: "Email", description: "niloy28@live.com", icon: At },
	{ title: "Phone", description: "+8801536-181234", icon: Phone },
	{ title: "Address", description: "Dhaka, Bangladesh", icon: MapPin },
	{ title: "Working hours", description: "9 a.m. – 8 p.m.", icon: Sun },
];

export default function ContactIconsList({
	data = DATA,
	variant,
}: ContactIconsListProps) {
	const items = data.map((item, index) => (
		<ContactIcon key={index} variant={variant} {...item} />
	));
	return <Group direction="column">{items}</Group>;
}
