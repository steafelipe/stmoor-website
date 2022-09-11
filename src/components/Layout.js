import React from "react";
import { Divider, Drawer } from "@mui/material";
import Box from "@mui/material/Box";
import Profile from "./Profile";
import { useState } from "react";
import DrawerOptions from "./DrawerOptions";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import DvrIcon from "@mui/icons-material/Dvr";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Header from "./Header";

const drawerWidth = 260;

const drawerOptions = {
	experience: {
		text: "Work Experience",
		icon: HomeWorkIcon,
	},
	technologies: {
		text: "Technologies & Skills",
		icon: DvrIcon,
	},
	education: {
		text: "Education",
		icon: SchoolIcon,
	},
};

const profileInfo = {
	name: "Stefani Moore",
	title: "Full Stack Software Engineer",
	contact: {
		email: {
			text: "ste.afelipe@gmail.com",
			icon: EmailIcon,
			href: "mailto:ste.afelipe@gmail.com",
		},
		linkedIn: {
			text: "LinkedIn",
			icon: LinkedInIcon,
			href: "https://www.linkedin.com/in/moorestefani/",
		},
	},
};

const Layout = (props) => {
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<Profile {...profileInfo} />
			<Divider />
			<DrawerOptions options={drawerOptions} />
		</div>
	);

	return (
		<Box sx={{ display: "flex" }}>
			<Header
				handleDrawerToggle={handleDrawerToggle}
				drawerWidth={drawerWidth}
			/>
			<Drawer
				sx={{
					xs: "block",
					sm: "none",
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						boxSizing: "border-box",
					},
				}}
				variant="temporary"
				open={mobileOpen}
				onClose={handleDrawerToggle}
				ModalProps={{
					keepMounted: true, // Better open performance on mobile.
				}}
			>
				{drawer}
			</Drawer>
			<Drawer
				variant="permanent"
				sx={{
					display: { xs: "none", sm: "block" },
					"& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
				}}
				open
			>
				{drawer}
			</Drawer>
		</Box>
	);
};

export default Layout;
