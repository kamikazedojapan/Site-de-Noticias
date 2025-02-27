import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router";
import { searchPosts } from "../../services/postsServices";
import { ContainerResults, SearchPosts, TextResults } from "./SearchStyled";
import { Card } from "../../components/Cards/Card";

export function Search() {
  const { title } = useParams();
  const [posts, setPosts] = useState([]);

  const search = useCallback(async () => {
    try {
      const postsAPI = await searchPosts(title);
      setPosts(postsAPI.data.results);
    } catch (error) {
      console.log(error);
      setPosts([]);
    }
  }, [title]); // search só muda quando title mudar

  useEffect(() => {
    search();
  }, [search]); // Agora podemos adicionar search como dependência

  return (
    <ContainerResults>
      <TextResults>
        <span>
          {posts.length !== 0
            ? `Encontramos ${posts.length} ${posts.length > 1 ? "resultados" : "resultado"
            } para:`
            : "Não encontramos resultados para:"}
        </span>
        <h3>{title}</h3>
      </TextResults>

      <SearchPosts>
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
      </SearchPosts>
    </ContainerResults>
  );
}
