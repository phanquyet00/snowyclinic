"use client";

import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await fetch("/api/articles");
      const data = await res.json();
      setArticles(data);
    };

    fetchArticles();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}
