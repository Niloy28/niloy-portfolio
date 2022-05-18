import { ReactElement, useEffect, useState } from "react";
import { createStyles, Group, Button, Container, Paper } from "@mantine/core";
import SkillDisplay from "./SkillDisplay";

const useStyles = createStyles((theme) => ({
	paper: {
		marginBottom: theme.spacing.md,
	},
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
	title: {
		marginTop: theme.spacing.md,
		marginBottom: theme.spacing.lg,
		textAlign: "left",
		fontWeight: "bold",
		color: theme.colors.teal,
	},
	buttonGroup: {
		display: "grid",
		gridTemplateColumns: "1fr 1fr",
		justifyContent: "space-around",
	},
	button: {
		backgroundColor: theme.colors.orange,
		"&:hover": {
			backgroundColor: theme.colors.red,
		},
		marginBottom: "20px",
	},
}));

interface Skill {
	skillType: string;
	skillCategoryIcon: ReactElement;
	skillNames: string[];
	skillLevels: string[];
	skillIcons: string[];
}

interface SkillPropType {
	skills: Skill[];
}

export default function SkillSet(props: SkillPropType) {
	const { classes } = useStyles();
	const [displayedSkill, setDisplayedSkill] = useState(
		props.skills[0].skillType
	);

	const skillCategories = props.skills.map((skill) => {
		const skillType = skill.skillType;
		return (
			<Button
				leftIcon={skill.skillCategoryIcon}
				className={classes.button}
				onClick={() => {
					setDisplayedSkill(skillType);
					console.log(displayedSkill);
				}}
			>
				{skillType}
			</Button>
		);
	});

	function displayRender() {
		switch (displayedSkill) {
			case "Programming Languages":
				return (
					<SkillDisplay
						skillNames={props.skills[0].skillNames}
						skillLevels={props.skills[0].skillLevels}
						skillIcons={props.skills[0].skillIcons}
					/>
				);

			case "Web Tech":
				return (
					<SkillDisplay
						skillNames={props.skills[1].skillNames}
						skillLevels={props.skills[1].skillLevels}
						skillIcons={props.skills[1].skillIcons}
					/>
				);

			case "Database":
				return (
					<SkillDisplay
						skillNames={props.skills[2].skillNames}
						skillLevels={props.skills[2].skillLevels}
						skillIcons={props.skills[2].skillIcons}
					/>
				);

			case "Others":
				return (
					<SkillDisplay
						skillNames={props.skills[3].skillNames}
						skillLevels={props.skills[3].skillLevels}
						skillIcons={props.skills[3].skillIcons}
					/>
				);

			default:
				break;
		}
	}

	let skillDisplay = displayRender();
	useEffect(() => {
		skillDisplay = displayRender();
	}, [displayedSkill]);

	return (
		<Paper className={classes.paper} shadow="lg" radius="md">
			<Container size={1000} className={classes.wrapper}>
				<h1 className={classes.title}>Skill Set</h1>
				<Group className={classes.buttonGroup}>{skillCategories}</Group>
				{skillDisplay}
			</Container>
		</Paper>
	);
}
