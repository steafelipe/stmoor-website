import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Button, Link } from "@mui/material";

const Header = ({ drawerWidth, handleDrawerToggle }) => (
	<AppBar
		component="nav"
		sx={{
			width: { sm: `calc(100% - ${drawerWidth}px)` },
			ml: { sm: `${drawerWidth}px` },
		}}
		position="fixed"
	>
		<Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
			<IconButton
				color="inherit"
				aria-label="open drawer"
				edge="start"
				onClick={handleDrawerToggle}
				sx={{ mr: 2, display: { sm: "none" } }}
			>
				<MenuIcon />
			</IconButton>
			<Typography variant="h6" noWrap component="div">
				Stefani Moore's Portfolio
			</Typography>
			<Button
				color="inherit"
				aria-label="download resume"
				href="../../public/Stefani_Moore_Resume.pdf"
				float="left"
				component={Link}
				download="Stefani_Moore_Resume.pdf"
				startIcon={<FileDownloadIcon />}
			>
				Resume
			</Button>
		</Toolbar>
	</AppBar>
);

export default Header;
