import React from "react";
import { Stack } from "@mui/system";
import { Avatar } from "@mui/material";
import avatar from "../static/profile.jpg";
import Typography from "@mui/material/Typography";

const Profile = (props) => (
	<Stack
		justifyContent="center"
		alignItems="center"
		spacing={2}
		paddingTop={5}
		paddingBottom={5}
	>
		<Avatar sx={{ width: 100, height: 100 }} alt="Stefani Moore" src={avatar} />
		<Typography>Stefani Moore</Typography>
	</Stack>
);

export default Profile;
