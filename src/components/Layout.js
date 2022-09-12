import React from "react";
import { Divider, Drawer, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import Profile from "./Profile";
import { useState } from "react";
import DrawerOptions from "./DrawerOptions";
import { drawerOptions, profileInfo, workExperience } from "../data/Data";
import Header from "./Header";
import WorkExperienceContainer from "./WorkExperienceContainer";

const drawerWidth = 260;

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
				drawerWidth={drawerWidth}
				handleDrawerToggle={handleDrawerToggle}
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
			<Box
				sx={{ paddingTop: 10, display: "flex", ml: { sm: `${drawerWidth}px` } }}
			>
				<WorkExperienceContainer
					data={workExperience}
				></WorkExperienceContainer>
			</Box>
		</Box>
	);
};

export default Layout;
