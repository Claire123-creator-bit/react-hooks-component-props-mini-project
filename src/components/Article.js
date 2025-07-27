function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const coffeeCups = Math.ceil(minutes / 5);
  const coffee = "☕".repeat(coffeeCups);

  return (
    <article className="article-item">
      <h3 className="article-title">{title}</h3>
      <small className="article-meta">
        {date} · {coffee} {minutes} min read
      </small>
      <p className="article-summary">{preview}</p>
    </article>
  );
}

export default Article;
