import DesktopSideBar from "./DesktopSideBar";
import MobileSideBar from "./MobileSideBar";
async function Sidebar ({children} : {
    children: React.ReactNode;
}) {
    return (
        <div className="h-full">
            <DesktopSideBar />
            <MobileSideBar />
            <main className="lg:pl-20 h-full">
                {children}
            </main>
                
        </div>
    )
}

export default Sidebar