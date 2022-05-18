import {
	createStyles,
	Paper,
	Container,
	Title,
	Text,
	Grid,
	Image,
} from "@mantine/core";
import ProfileImage from "../images/profile.jpeg";

const useStyles = createStyles((theme) => ({
	root: {
		backgroundSize: "cover",
		backgroundPosition: "top",
		paddingTop: theme.spacing.xl * 3,
		paddingBottom: theme.spacing.xl * 3,
	},

	paper: {
		marginTop: theme.spacing.md,
		marginBottom: theme.spacing.md,
	},

	inner: {
		display: "flex",
		justifyContent: "space-between",

		[theme.fn.smallerThan("md")]: {
			flexDirection: "column",
		},
	},

	image: {
		[theme.fn.smallerThan("md")]: {
			display: "none",
		},
	},

	content: {
		paddingTop: theme.spacing.xl * 2,
		paddingBottom: theme.spacing.xl * 2,
		marginRight: theme.spacing.xl * 3,

		[theme.fn.smallerThan("md")]: {
			marginRight: 0,
		},
	},

	profileImage: {
		paddingTop: theme.spacing.xl * 2,
	},

	title: {
		color: theme.colorScheme === "dark" ? theme.white : theme.black,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontWeight: 900,
		lineHeight: 1.05,
		maxWidth: 500,
		fontSize: 48,

		[theme.fn.smallerThan("md")]: {
			maxWidth: "100%",
			fontSize: 28,
			lineHeight: 1.15,
		},
	},

	description: {
		color: theme.colorScheme === "dark" ? theme.white : theme.black,
		opacity: 0.75,
		maxWidth: 500,
		fontSize: 20,

		[theme.fn.smallerThan("md")]: {
			maxWidth: "100%",
			fontSize: 28,
		},
	},

	control: {
		paddingLeft: 20,
		paddingRight: 20,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: 22,
		width: "70%",

		[theme.fn.smallerThan("md")]: {
			marginTop: 0,
			width: "100%",
		},
	},
}));

export function HeroWithImage() {
	const { classes } = useStyles();
	return (
		<Paper shadow="md" radius="lg" className={classes.paper}>
			<div className={classes.root}>
				<Container size="lg">
					<div className={classes.inner}>
						<Grid>
							<Grid.Col span={8}>
								<div className={classes.content}>
									<Title className={classes.title}>
										Hey there! I'm{" "}
										<Text
											component="span"
											inherit
											variant="gradient"
											gradient={{ from: "pink", to: "yellow" }}
										>
											Farhan Ishrak Islam
										</Text>{" "}
										but you can call me{" "}
										<Text
											component="span"
											inherit
											variant="gradient"
											gradient={{ from: "pink", to: "yellow" }}
										>
											Niloy
										</Text>
									</Title>
									<Text className={classes.description} mt={30}>
										I make whatever fits my fancy on the day: either{" "}
										<Text
											component="span"
											inherit
											variant="gradient"
											gradient={{
												from: "rgba(27,190,217,1)",
												to: "rgba(21,212,17,1)",
											}}
										>
											games
										</Text>{" "}
										or{" "}
										<Text
											component="span"
											inherit
											variant="gradient"
											gradient={{
												from: "rgba(27,190,217,1)",
												to: "rgba(21,212,17,1)",
											}}
										>
											web
										</Text>{" "}
										apps!
									</Text>
								</div>
							</Grid.Col>
							<Grid.Col span={4} className={classes.profileImage}>
								<Image fit="contain" src={ProfileImage} />
							</Grid.Col>
						</Grid>
					</div>
				</Container>
			</div>
		</Paper>
	);
}
