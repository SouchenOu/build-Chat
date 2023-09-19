"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronDown,
	faBell,
	faRobot,
	faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { MenuButton } from "../components/Buttons";
import InviteField from "../components/InviteField";
import PlayerCard from "../components/PlayerCard";
import SideBar from "../components/SideBar";
import TopRightBar from "../components/TopRightBar";

const DashBoard = () => {
	const [change, setChange] = useState<{sideBar: boolean;
		chatBox: boolean;
		menu: boolean;}>({
		sideBar: false,
		chatBox: false,
		menu: false,
	});

	return (
		<section className="relative h-[100vh] min-h-[850px] py-4 text-white">
			<SideBar
				sideBar={change.sideBar}
				onClick={() =>
					setChange({
						...change,
						sideBar: !change.sideBar,
						chatBox: false,
						menu: false,
					})
				}
			/>

			{/* Top Right Menu */}
			<TopRightBar
				menu={change.menu}
				onClick={() =>
					setChange({
						...change,
						sideBar: false,
						chatBox: false,
						menu: !change.menu,
					})
				}
			/>

			
		</section>
	);
};

export default DashBoard;
