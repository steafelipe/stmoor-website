import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Box } from "@mui/system";
import { Divider, Grid, List, ListItem, Typography } from "@mui/material";

const WorkExperienceContainer = ({ data }) => (
	<Timeline align="left" sx={{ width: "100%" }}>
		{data.map((item, index) => (
			<TimelineItem>
				<TimelineOppositeContent sx={{ width: 50 }} style={{ flex: 0.3 }}>
					{item.duration}
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent sx={{ width: 1200 }}>
					<Grid container spacing={1}>
						<Grid item xs={2.5}>
							<Typography>{item.company}</Typography>
						</Grid>
						<Divider orientation="vertical" variant="middle" flexItem />
						<Grid item xs={5.5}>
							<Typography>{item.title}</Typography>
						</Grid>
						<Divider orientation="vertical" variant="middle" flexItem />
						<Grid item xs={2}>
							<Typography>{item.location}</Typography>
						</Grid>
					</Grid>
				</TimelineContent>
			</TimelineItem>
		))}
	</Timeline>
);

export default WorkExperienceContainer;
