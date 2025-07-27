


function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const coffeeCups = Math.ceil(minutes / 5);
  const coffee = "☕".repeat(coffeeCups);
  return (
    <article className="article-item">
      <h2 className="article-title">{title}</h2>
      <div className="article-meta">
        {date} &nbsp;·&nbsp; {coffee} {minutes} min read
      </div>
      <div className="article-summary">{preview}</div>
    </article>
  );
}

export default Article;
