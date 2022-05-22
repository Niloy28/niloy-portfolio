import {
	Container,
	createStyles,
	Image,
	RingProgress,
	SimpleGrid,
	Center,
} from "@mantine/core";

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
						<RingProgress
							size={120}
							thickness={10}
							sections={[{ value: parseInt(skillData[1]), color: "teal" }]}
							label={
								<Center>
									<Image
										src={skillData[2]}
										height={30}
										width={30}
										fit="contain"
									></Image>
								</Center>
							}
						></RingProgress>
					</>
				))}
			</SimpleGrid>
		</Container>
	);
}
