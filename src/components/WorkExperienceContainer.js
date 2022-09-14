import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Box } from "@mui/system";
import { Grid, Typography, Avatar } from "@mui/material";
import WorkExperienceDescription from "./WorkExperienceDescription";
import WorkExperienceHeader from "./WorkExperienceHeader";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";

const WorkExperienceContainer = ({ data }) => {
	const theme = useTheme();
	const matchesMediumSizeScreen = useMediaQuery(theme.breakpoints.up("md"));

	return (
		<Box>
			<Grid container sx={{ position: "relative", top: "-100px" }}>
				<Grid item id="workExperience">
					<Typography
						variant="h4"
						sx={{ marginLeft: 10, position: "relative", top: "100px" }}
					>
						Work Experience
					</Typography>
				</Grid>
			</Grid>
			<Timeline
				align="left"
				sx={{ width: "100%", marginLeft: matchesMediumSizeScreen ? -15 : 0 }}
			>
				{data.map((item, index) => (
					<TimelineItem key={index}>
						<TimelineOppositeContent style={{ flex: 0.3 }}>
							{item.duration}
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot sx={{ padding: item.logo ? 0 : 2 }}>
								{item.logo && (
									<Avatar
										sx={{ width: 30, height: 30 }}
										alt="time line company icon"
										src={item.logo}
									/>
								)}
							</TimelineDot>
							{index !== data.length - 1 && <TimelineConnector />}
						</TimelineSeparator>
						<TimelineContent>
							<Grid container spacing={1} style={{ width: "100%" }}>
								<WorkExperienceHeader
									{...item}
									matchesMediumSizeScreen={matchesMediumSizeScreen}
								/>
								<WorkExperienceDescription data={item.description} />
							</Grid>
						</TimelineContent>
					</TimelineItem>
				))}
			</Timeline>
		</Box>
	);
};

export default WorkExperienceContainer;
