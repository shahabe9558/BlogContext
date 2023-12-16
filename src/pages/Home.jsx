import BLogs from "../components/Blogs";
import Header from "../components/Header";
import Pagination from "../components/Pagination";

const Home = () => {
    return(
        <div>
            <Header/>
            <BLogs/>
            <Pagination/>
        </div>
    )
}
export default Home;