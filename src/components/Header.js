import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import HideOnScroll from "./HideOnScroll";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Button } from "@mui/material";

const handleDownload = () => {
	const link = document.createElement("a");
	link.download = `Stefani_Moore_Resume.pdf`;
	link.href = "../../public/Stefani_Moore_Resume.pdf";
	link.click();
};

const Header = ({ drawerWidth, handleDrawerToggle }) => (
	<HideOnScroll>
		<AppBar
			position="fixed"
			sx={{
				width: { sm: `calc(100% - ${drawerWidth}px)` },
				ml: { sm: `${drawerWidth}px` },
			}}
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
					onClick={handleDownload}
					float="left"
					startIcon={<FileDownloadIcon />}
				>
					Download Resume
				</Button>
			</Toolbar>
		</AppBar>
	</HideOnScroll>
);

export default Header;
