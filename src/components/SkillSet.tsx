import { createStyles, Group, Button, Container } from "@mantine/core";
import SkillCategory from "./SkillCategory";

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

interface SkillData {
	skillType: string;
	skillNames: string[];
	skillLevels: string[];
}

interface SkillPropType {
	skill: SkillData[];
}

export default function SkillSet(props: SkillPropType) {
	const { classes } = useStyles();
	const skillCategories = props.skill.map((prop) => (
		<Button className={classes.button}>{prop.skillType}</Button>
	));

	return (
		<Container size={700}>
			<Group className={classes.buttonGroup}>{skillCategories}</Group>
			<SkillCategory />
		</Container>
	);
}
