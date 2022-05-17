import { useEffect, useState } from "react";
import { createStyles, Group, Button, Container } from "@mantine/core";
import SkillDisplay from "./SkillDisplay";

const useStyles = createStyles((theme) => ({
	buttonGroup: {
		display: "flex",
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
	skillNames: string[];
	skillLevels: string[];
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
					/>
				);

			case "Web Tech":
				return (
					<SkillDisplay
						skillNames={props.skills[1].skillNames}
						skillLevels={props.skills[1].skillLevels}
					/>
				);

			case "Database":
				return (
					<SkillDisplay
						skillNames={props.skills[2].skillNames}
						skillLevels={props.skills[2].skillLevels}
					/>
				);

			case "Others":
				return (
					<SkillDisplay
						skillNames={props.skills[3].skillNames}
						skillLevels={props.skills[3].skillLevels}
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
		<Container size={700}>
			<Group className={classes.buttonGroup}>{skillCategories}</Group>
			{skillDisplay}
		</Container>
	);
}
