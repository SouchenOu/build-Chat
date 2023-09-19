import Header from "@/app/header/Header";
import About from "@/app/about/About";
import Team from "@/app/team/Team";
import Footer from "@/app/footer/Footer";

const Home = () => {
	return (
		<main className="font-['Whitney_BlackSC'] text-white">
			<Header />
			<About />
			<Team />
			<Footer />
		</main>
	);
};

export default Home;














// "use client"

// import Image from 'next/image';
// import {useEffect, useState} from 'react'
// import {io} from 'socket.io-client'

// const Home = () => {
// 	const [socket, setSocket] = useState(undefined)
// 	const [inbox, setInbox] = useState<any>(["hello", "nice"])

// 	useEffect(()=>{
// 		const socket = io("http://localhost:3000")
// 	})
// 	return (
// 		<main className="font-['Whitney_BlackSC'] text-white">
// 			<div>
// 				<div>
// 					<div>
				
// 					</div>
// 				</div>
// 			</div>
// 		</main>
// 	);
// };

// export default Home;
