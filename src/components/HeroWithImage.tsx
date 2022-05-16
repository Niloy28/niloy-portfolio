import {
	createStyles,
	Container,
	Title,
	Text,
	Button,
	Grid,
	Image,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
	root: {
		backgroundSize: "cover",
		backgroundPosition: "top",
		paddingTop: theme.spacing.xl * 3,
		paddingBottom: theme.spacing.xl * 3,
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

	title: {
		color: theme.white,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontWeight: 900,
		lineHeight: 1.05,
		maxWidth: 500,
		fontSize: 48,

		[theme.fn.smallerThan("md")]: {
			maxWidth: "100%",
			fontSize: 34,
			lineHeight: 1.15,
		},
	},

	description: {
		color: theme.white,
		opacity: 0.75,
		maxWidth: 500,

		[theme.fn.smallerThan("md")]: {
			maxWidth: "100%",
		},
	},

	control: {
		paddingLeft: 50,
		paddingRight: 50,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: 22,

		[theme.fn.smallerThan("md")]: {
			width: "100%",
		},
	},
}));

export function HeroWithImage() {
	const { classes } = useStyles();
	return (
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
									but you can call me Niloy
								</Title>

								<Text className={classes.description} mt={30}>
									Put shit here
								</Text>

								<Button
									variant="gradient"
									gradient={{ from: "pink", to: "yellow" }}
									size="xl"
									className={classes.control}
									mt={40}
								>
									Get started
								</Button>
							</div>
						</Grid.Col>
						<Grid.Col span={4}>
							<Image
								fit="contain"
								src="https://ca.slack-edge.com/T037MC0PLTT-U038YFQAKM2-673fe71b64b0-512"
							/>
						</Grid.Col>
					</Grid>
				</div>
			</Container>
		</div>
	);
}
