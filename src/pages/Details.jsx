import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

function Details() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(
          `https://api.spaceflightnewsapi.net/v3/articles/${id}`
        );
        const data = await response.json();
        console.log(data);
        setArticle(data);
      } catch (error) {
        console.log("Error fetching article:", error);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <Loader />;
  }

  return (
    <div className="details-container">
      <img src={article.imageUrl} alt={article.title} className="img" />
      <h2>{article.title}</h2>
      <p>{article.summary}</p>
    </div>
  );
}

export default Details;
