import React from "react";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Divider, Grid, Typography } from "@mui/material";

const WorkExperienceHeader = ({ title, company, location }) => {
	const theme = useTheme();
	const matchesMediumSizeScreen = useMediaQuery(theme.breakpoints.up("md"));

	return (
		<>
			<Grid item xs={matchesMediumSizeScreen ? 5.5 : 12}>
				<Typography align="left">{title}</Typography>
			</Grid>
			<Divider orientation="vertical" variant="middle" flexItem />
			<Grid item xs={matchesMediumSizeScreen ? 2.5 : 12}>
				<Typography align={matchesMediumSizeScreen ? "center" : "left"}>
					{company}
				</Typography>
			</Grid>
			<Divider orientation="vertical" variant="middle" flexItem />
			<Grid item xs={matchesMediumSizeScreen ? 2 : 12}>
				<Typography align={matchesMediumSizeScreen ? "center" : "left"}>
					{location}
				</Typography>
			</Grid>
		</>
	);
};

export default WorkExperienceHeader;
