import React from "react";

import { Divider, Grid, Typography } from "@mui/material";

const WorkExperienceHeader = ({
	title,
	company,
	location,
	matchesMediumSizeScreen,
}) => {
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
