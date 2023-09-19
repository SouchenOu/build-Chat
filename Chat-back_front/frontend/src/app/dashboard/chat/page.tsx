"use client"

import SideBar from "../../components/SideBar"
import { deflate } from "zlib";
import EmptyState from "../../components/EmptyState/page"
import styles from "./page.module.css"



const chat = () =>
{
	
    
	return (
		<div className={styles.main}>
			{/* <SideBar
				sideBar={change.sideBar}
				onClick={() =>
					setChange({
						...change,
						sideBar: !change.sideBar,
						chatBox: false,
						menu: false,
					})
				}
			/> */}

			<EmptyState/>
			
		</div>

	)

}
export default chat