import HomeWorkIcon from "@mui/icons-material/HomeWork";
import DvrIcon from "@mui/icons-material/Dvr";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const drawerOptions = {
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

export const profileInfo = {
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

export const workExperience = [
	{
		duration: "02/2022-Present",
		company: "Microsoft",
		title: "Software Engineer II - Developer Division",
		location: "Redmond, WA",
		description: [
			"Design and implement new features to support.NET Multi-platform App UI extension in Visual Studio and Visual Studio for Mac using WPF, .NET, C#",
			"UX/UI design",
			"Utilize a data driven approach to drive improvements to the product",
			"Improve user experience by delivering fixes to bugs and customer feedback tickets",
		],
	},
	{
		duration: "07/2018-02/2022",
		company: "Microsoft",
		title: "Software Engineer II - Microsoft Security Response Center",
		location: "Redmond, WA",
		description: [
			"Create micro-services that integrate with CRM system using Azure services such as Azure Functions and App Services, API Management, Kubernetes, Logic Apps, and Blob Storage",
			"Design, implement, maintain .NET REST APIs",
			"Write automation scripts by creating and publishing PowerShell Modules",
			"Provide full stack support to CRM system used in the MSRC vulnerability management lifecycle using C# custom plugins",
			"Engage with product users to identify areas for improvement",
			"Mentor and manage three interns by training them on company tools and DevOps to deliver a mobile app",
		],
	},
	{
		duration: "08/2016-05/2018",
		company: "University of Maryland",
		title: "Computer Science Teaching Assistant & Tutor",
		location: "College Park, MD",
		description: [
			"Lecture five discussion sections of 30+ students each for the Introduction to Computer Systems and Object-Oriented Programming classes by following provided weekly slide content by the professors",
			"Answer student questions and provide help with class projects",
			"Hold weekly office hours",
			"Tutor students attending Objected-Oriented Programming I and II through the Maryland Center for Women in Computing",
		],
	},
	{
		duration: "08/2015-12/2015",
		company: "United Solutions LLC",
		title: "Software Development Intern",
		location: "Bethesda, MD",
		description: [
			"Designed and developed websites in HTML5 and CSS using SCRUM methodology",
			"Lead product development team to create an online networking platform prototype",
			"Met directly with the customer to demo website designs",
		],
	},
];
