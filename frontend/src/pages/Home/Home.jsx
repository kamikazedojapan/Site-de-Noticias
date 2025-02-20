import { Card } from "../../components/Cards/Card.jsx";
import { Navbar } from "../../components/Navbar/Navbar.jsx"
import { news } from "../../Datas.js"
import { getAllPosts } from "../../services/postsServices.js";
import { HomeBody } from "./HomeStyled.jsx";
 
export default function Home() {
    async function findAllPosts() {
        const response = await getAllPosts();
        console.log(response.data.results);
    }
    findAllPosts()
    return(
        <>
        <Navbar/>
        <HomeBody>
            {news.map((item, index) => (
                <Card key={index} news={item} />
            ))}
        </HomeBody>
        </>
    );
}