import { Container, createStyles, SimpleGrid } from "@mantine/core";

const useStyles = createStyles((theme) => ({
	categoryItems: {
		justifyContent: "center",
		justifyItems: "center",
	},
}));

export default function SkillCategory() {
	const { classes } = useStyles();
	return (
		<Container>
			<SimpleGrid cols={2} className={classes.categoryItems}>
				<div>C#</div>
				<div>C#</div>
				<div>C#</div>
				<div>C#</div>
				<div>C#</div>
			</SimpleGrid>
		</Container>
	);
}
