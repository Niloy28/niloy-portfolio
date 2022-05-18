import {
	Badge,
	Container,
	createStyles,
	Image,
	Progress,
	SimpleGrid,
} from "@mantine/core";
import { nanoid } from "nanoid";

const useStyles = createStyles((theme) => ({
	categoryItems: {
		justifyContent: "center",
		justifyItems: "center",
		alignContent: "center",
		alignItems: "center",
	},
	skill: {
		display: "flex",
		width: "100%",
		justifyContent: "space-between",
	},
	skillLevel: {
		width: "100%",
	},
}));

interface SkillDisplayProps {
	skillNames: string[];
	skillLevels: string[];
	skillIcons: string[];
}

export default function SkillDisplay(props: SkillDisplayProps) {
	const { classes } = useStyles();
	const zippedSkillData = props.skillNames.map(function (e, i) {
		return [e, props.skillLevels[i], props.skillIcons[i]];
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
					<>
						<Badge
							color="lime"
							key={nanoid()}
							fullWidth
							variant="gradient"
							gradient={{ from: "teal", to: "lime", deg: 105 }}
							size="xl"
							leftSection={
								<Image
									src={skillData[2]}
									height={20}
									width={20}
									fit="contain"
								></Image>
							}
						>
							{skillData[0] as string}
						</Badge>

						<Progress
							size="lg"
							value={parseInt(skillData[1])}
							color="teal"
							className={classes.skillLevel}
						></Progress>
					</>
				))}
			</SimpleGrid>
		</Container>
	);
}
