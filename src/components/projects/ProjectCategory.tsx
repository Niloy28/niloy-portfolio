import { Container, createStyles, Paper } from "@mantine/core";

const useStyles = createStyles((theme) => ({
	wrapper: {
		padding: "2em",
		backgroundColor:
			theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
		borderRadius: theme.radius.lg,
		border: `1px solid ${
			theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[2]
		}`,
		marginBottom: theme.spacing.lg,
	},
}));

export default function ProjectCategory() {
	const { classes } = useStyles();

	return (
		<Paper shadow="md">
			<Container size={1500} className={classes.wrapper}>
				<h1>Projects</h1>
			</Container>
		</Paper>
	);
}
