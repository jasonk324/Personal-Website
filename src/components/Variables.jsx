import C from "../assets/Skills/C.png"
import CpLus from "../assets/Skills/C++.png"
import Python from "../assets/Skills/Python.png"
import Java from "../assets/Skills/Java.png"
import JavaScript from "../assets/Skills/JavaScript.png"
import Django from "../assets/Skills/Django.png"
import React from "../assets/Skills/React.png"
import Flask from "../assets/Skills/Flask.png"
import Tailwindcss from "../assets/Skills/Tailwindcss.png"
import Node from "../assets/Skills/Node.png"
import Ads from "../assets/Skills/Ads.png"
import Multisim from "../assets/Skills/Multisim.png"
import Hfss from "../assets/Skills/Hfss.png"
import Linux from "../assets/Skills/Linux.png"
import Bash from "../assets/Skills/Bash.png"
import Aws from "../assets/Skills/Aws.png"
import Firebase from "../assets/Skills/Firebase.png"
import Postman from "../assets/Skills/Postman.png"
import Pandas from "../assets/Skills/Pandas.png"
import Numpy from "../assets/Skills/Numpy.png"
import Sklearn from "../assets/Skills/SkLearn.png"
import Sql from "../assets/Skills/Sql.png"
import Plotly from "../assets/Skills/Plotly.png"

import PathMaker from "../assets/PathMaker.png"
import ToyStory from "../assets/ToyStory.png"
import MediaCenter from "../assets/MediaCenter.png"
import Capstone from "../assets/Capstone.png"
import MetHacksPortal from "../assets/MetHacksPortal.png"
import HearMe from "../assets/HearMe.png"
import PersonalWebsite from "../assets/PersonalWebsite.png"
import TcpNetworks from "../assets/TcpNetworks.png"

import MainMenu from "../assets/MediaCenter/MainMenu.png"
import Difficulty from "../assets/MediaCenter/DifficultySelection.png"
import Snake1 from "../assets/MediaCenter/Snake1.png"
import Snake2 from "../assets/MediaCenter/Snake2.png"
import GameOver from "../assets/MediaCenter/GameOver.png"
import AudioCenter from "../assets/MediaCenter/AudioCenter.png"
import Charizard from "../assets/MediaCenter/Charizard.png"
import Charmeleon from "../assets/MediaCenter/Charmeleon.png"
import Charmander from "../assets/MediaCenter/Charmander.png"
import Transition from "../assets/MediaCenter/Transition.png"

import AboutIcon from "../assets/AboutIcon.png"
import EducationIcon from "../assets/EducationIcon.png"
import SkillsIcon from "../assets/SkillsIcon.png"
import ExperienceIcon from "../assets/ExperienceIcon.png"
import ProjectsIcon from "../assets/ProjectsIcon.png"

export const SkillsArray = [
    {
			Title: "Programming",
			SubIcons: [
				{
					Image: C,
					Title: "C",
				},
				{
					Image: CpLus,
					Title: "C++"
				},
				{
					Image: Python,
					Title: "Python"
				},
				{
					Image: Java,
					Title: "Java"
				},
				{
					Image: JavaScript,
					Title: "JavaScript"
				}
			]
		},
    {
			Title: "Web Developement",
			SubIcons: [
				{
					Image: React,
					Title: "React"
				},
				{
					Image: Node,
					Title: "Node"
				},
				{
					Image: Tailwindcss,
					Title: "Tailwind"
				},
				{
					Image: Django,
					Title: "Django"
				},
				{
					Image: Flask,
					Title: "Flask"
				},
			]
		},
    {
			Title: "DevOps",
			SubIcons: [
				{
					Image: Linux,
					Title: "Linux",
				},
				{
					Image: Bash,
					Title: "Bash"
				},
				{
					Image: Aws,
					Title: "AWS"
				},
				{
					Image: Firebase,
					Title: "Firebase"
				},
				{
					Image: Postman,
					Title: "Postman"
				}
			]
		},
    {
			Title: "Data Analytics",
			SubIcons: [
				{
					Image: Pandas,
					Title: "Pandas"
				},
				{
					Image: Numpy,
					Title: "NumPy"
				},
				{
					Image: Sklearn,
					Title: "SkLearn"
				},
				{
					Image: Plotly,
					Title: "Plotly"
				},
				{
					Image: Sql,
					Title: "SQL"
				},
			]
		},    {
			Title: "Electrical Design",
			SubIcons: [
				{
					Image: Multisim,
					Title: "Multisim",
				},
				{
					Image: Ads,
					Title: "ADS"
				},
				{
					Image: Hfss,
					Title: "HFSS"
				}
			]
		}
]

export const ProjectArray = [
	{
		Title: "Path Maker",
		Lang: "Python & JavaScript",
		Tech: "React, MaterialUI & Django",
		Link: "https://github.com/jasonk324/Path-Maker",
		Type: 1,
		Image: PathMaker
	},
	{
		Title: "Toy Story Comparison",
		Lang: "Python",
		Tech: "BeauitfulSoup, Pandas & Sklearn",
		Link: "https://github.com/jasonk324/PixarMovieComparing",
		Type: 1,
		Image: ToyStory
	},
	{
		Title: "Cat Capstone",
		Lang: "C++, Python & JavaScript",
		Tech: "React, Tailwind & Firebase",
		Link: "https://github.com/jasonk324/RobotCat-Capstone",
		Type: 1,
		Image: Capstone
	},
	{
		Title: "MetHacks Hacker Portal",
		Lang: "JavaScript",
		Tech: "React, Tailwind & Firebase",
		Link: "https://methacks.com/",
		Type: 1,
		Image: MetHacksPortal
	},
	{
		Title: "Transit Notification App",
		Lang: "Python & JavaScript",
		Tech: "React Native & Firebase",
		Link: "https://github.com/jasonk324/hear-me",
		Type: 1,
		Image: HearMe
	},
	{
		Title: "Personal Website",
		Lang: "JavaScript",
		Tech: "React & Tailwind",
		Link: "https://github.com/jasonk324/Personal-Website",
		Type: 1,
		Image: PersonalWebsite
	},
	{
		Title: "Peer to Peer Network",
		Lang: "C",
		Tech: "Socket Programming",
		Link: "https://github.com/jasonk324/COE768-MajorProject",
		Type: 2,
		Image: TcpNetworks
	},
	{
		Title: "Media Center Project",
		Lang: "C",
		Tech: "Arm Embedded Development",
		Link: "https://github.com/jasonk324/COE718-Media-Center",
		Type: 3,
		Image: MediaCenter
	}
]

export const MediaCenterLCD = [
	{
		Caption: "Main Menu",
		Image: MainMenu
	},
	{
		Caption: "Game Difficulty Selection",
		Image: Difficulty
	},
	{
		Caption: "Snake Length 1",
		Image: Snake1
	},
	{
		Caption: "Snake Length 14",
		Image: Snake2
	},
	{
		Caption: "Game Over",
		Image: GameOver
	},
	{
		Caption: "Audio Center",
		Image: AudioCenter
	},
	{
		Caption: "Charmander",
		Image: Charmander
	},
	{
		Caption: "Charmeleon",
		Image: Charmeleon
	},
	{
		Caption: "Charmander",
		Image: Charmander
	},
	{
		Caption: "Smoke Transition Image",
		Image: Transition
	}
]

export const NavLinks = [
	{
		id: "About",
		icon: AboutIcon,
		title: "About",
	},
	{
		id: "Education",
		icon: EducationIcon,
		title: "Education",
	},
	{
		id: "Skills",
		icon: SkillsIcon,
		title: "Skills"
	},
	{
		id: "Experience",
		icon: ExperienceIcon,
		title: "Experience",
	},
	{
		id: "Projects",
		icon: ProjectsIcon,
		title: "Projects",
	}
  ];