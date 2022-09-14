import React from "react";
import { Grid, List, ListItem } from "@mui/material";

const WorkExperienceDescription = ({ data }) => (
	<Grid item xs={12} style={{ marginLeft: 30 }}>
		<List sx={{ listStyleType: "disc" }}>
			{data.map((text, i) => (
				<ListItem key={i} sx={{ display: "list-item" }}>
					{text}
				</ListItem>
			))}
		</List>
	</Grid>
);

export default WorkExperienceDescription;
