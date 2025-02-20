import { Card } from "../../components/Cards/Card.jsx";
import { Navbar } from "../../components/Navbar/Navbar.jsx"
import { news } from "../../Datas.js"
import { HomeBody } from "./HomeStyled.jsx";
 
export default function Home() {
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