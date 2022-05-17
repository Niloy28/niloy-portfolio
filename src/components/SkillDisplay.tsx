import { Container, createStyles, SimpleGrid, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
	categoryItems: {
		justifyContent: "center",
		justifyItems: "center",
	},
	skill: {
		display: "flex",
		width: "100%",
		justifyContent: "space-between",
	},
}));

interface SkillDisplayProps {
	skillNames: string[];
	skillLevels: string[];
}

export default function SkillDisplay(props: SkillDisplayProps) {
	const { classes } = useStyles();
	const zippedSkillData = props.skillNames.map(function (e, i) {
		return [e, props.skillLevels[i]];
	});

	return (
		<Container
			sx={{
				marginTop: "20px",
				marginBottom: "20px",
			}}
		>
			<SimpleGrid cols={2} className={classes.categoryItems}>
				{zippedSkillData.map((skillData) => (
					<div className={classes.skill}>
						<Text>{skillData[0]}</Text>
						<Text>{skillData[1]}</Text>
					</div>
				))}
			</SimpleGrid>
		</Container>
	);
}
