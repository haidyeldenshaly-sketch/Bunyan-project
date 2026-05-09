
import{Routes, Route}from "react-router-dom"
import Navbar from "../../components/Dashboard/Navbar/Navbar"
import Footer from "../../components/Dashboard/Footer/Footer"
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar"
import HomeDashboard from "./HomeDashboard"
import Users from "./User"
import Projects from "./Projects"
function Dashboard(){
return (
    <>
<Navbar adminName="mohamed"></Navbar>
<div className="d-flex">
<Sidebar></Sidebar>
<main className="flex-grow-1 p-4">
    <Routes>
        <Route path="/" element={<HomeDashboard/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/projects" element={<Projects/>} />

      
    </Routes>
</main>
</div>
<Footer></Footer>
</>
)
}

export default Dashboard