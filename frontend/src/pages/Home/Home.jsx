import { Card } from "../../components/Cards/Card.jsx";
import { Navbar } from "../../components/Navbar/Navbar.jsx";
// import { news } from "../../Datas.js"
import { getAllPosts } from "../../services/postsServices.js";
import { HomeBody } from "./HomeStyled.jsx";
import { useState } from "react";

export default function Home() {
  const [news, setNews] = useState([]);

  async function findAllPosts() {
    const response = await getAllPosts();
    setNews(response.data.results);
  }
  findAllPosts();
  return (
    <>
      <Navbar />
      <HomeBody>
        {news.map((item) => (
          <Card 
            key={item.id} 
            title={item.title}
            text={item.text}
            banner={item.banner}
            likes={item.likes.length}
            comments={item.comments.length}
          />
        ))}
      </HomeBody>
    </>
  );
}
