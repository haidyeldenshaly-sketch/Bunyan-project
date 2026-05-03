import Navbar from "../../components/Dashboard/Navbar/Navbar"
import Footer from "../../components/Dashboard/Footer/Footer"
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar"

function Dashboard(){
return (
    <>
<Navbar adminName="mohamed"></Navbar>
<div className="d-flex">
<Sidebar></Sidebar>
<main className="flex-grow-1 p-4">test main component</main>
</div>
<Footer></Footer>
</>
)
}

export default Dashboard