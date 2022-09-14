import {
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import React from "react";

const DrawerOptions = ({ options }) => (
	<List>
		{Object.values(options).map((options, index) => (
			<ListItem key={index} disablePadding>
				<ListItemButton href={options.href}>
					<ListItemIcon>
						<options.icon />
					</ListItemIcon>
					<ListItemText primary={options.text} />
				</ListItemButton>
			</ListItem>
		))}
	</List>
);

export default DrawerOptions;
