import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Box } from "@mui/system";
import { Grid, List, ListItem, Typography } from "@mui/material";

const WorkExperienceContainer = ({ data }) => (
	<Timeline position="alternate">
		{data.map((item, index) => (
			<TimelineItem>
				<TimelineOppositeContent>{item.duration}</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
					<Grid container spacing={2}>
						<Grid item xs={4}>
							<Typography></Typography>
						</Grid>
					</Grid>
				</TimelineContent>
			</TimelineItem>
		))}
	</Timeline>
);

export default WorkExperienceContainer;
