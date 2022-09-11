import React from "react";
import { Stack } from "@mui/system";
import {
	Avatar,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import avatar from "../static/profile.jpg";
import Typography from "@mui/material/Typography";

const Profile = ({ name, title, contact }) => (
	<Stack
		justifyContent="center"
		alignItems="center"
		spacing={2}
		paddingTop={5}
		paddingBottom={0}
	>
		<Avatar sx={{ width: 100, height: 100 }} alt={name} src={avatar} />
		<Typography>{name}</Typography>
		<Typography>{title}</Typography>
		<List>
			{Object.values(contact).map((item, index) => (
				<ListItem key={index}>
					<ListItemButton href={item.href} target="_blank">
						<ListItemIcon>
							<item.icon />
						</ListItemIcon>
						<ListItemText primary={item.text}></ListItemText>
					</ListItemButton>
				</ListItem>
			))}
		</List>
	</Stack>
);

export default Profile;
