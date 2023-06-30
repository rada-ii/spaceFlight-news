import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.spaceflightnewsapi.net/v3/articles"
        );
        const data = await response.json();
        console.log(data);
        setArticles(data.slice(1, 10));
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Spaceflight News Articles</h1>
      <h2>(click on the card for details)</h2>
      <div className="article-grid">
        {articles.map((article) => (
          <Link to={`/${article.id}`} key={article.id} className="grid-cell">
            <Card article={article} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default Home;
