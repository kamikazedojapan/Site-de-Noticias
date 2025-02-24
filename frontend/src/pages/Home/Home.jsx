import { Card } from "../../components/Cards/Card.jsx";
import { getAllPosts, getTopPost } from "../../services/postsServices.js";
import { HomeBody, HomeHeader } from "./HomeStyled.jsx";
import { useState, useEffect } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [topPosts, setTopPosts] = useState({});

  async function findPost() {
    const postResponse = await getAllPosts();
    setPosts(postResponse.data.results);

    const topPostResponse = await getTopPost()
    setTopPosts(topPostResponse.data.news)
  } 

  useEffect(() => {
    findPost();
  }, []);

  // findAllPosts();
  return (
    <>
      <HomeHeader>
        <Card 
            top={true}
            title={topPosts.title}
            text={topPosts.text}
            banner={topPosts.banner}
            likes={topPosts.likes}
            comments={topPosts.comments}
          />
      </HomeHeader>
      <HomeBody>
        {posts.map((item) => (
          <Card 
            key={item.id} 
            title={item.title}
            text={item.text}
            banner={item.banner}
            likes={item.likes}
            comments={item.comments}
          />
        ))}
      </HomeBody>
    </>
  );
}
