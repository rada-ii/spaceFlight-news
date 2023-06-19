function Card({ article }) {
  return (
    <div className="card">
      <img src={article.imageUrl} alt={article.title} />
      <h2>{article.title}</h2>
      <p>{article.newsSite}</p>
    </div>
  );
}

export default Card;
