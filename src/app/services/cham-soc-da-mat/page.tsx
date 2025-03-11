"use client";
import { useEffect, useState } from "react";

export default function ChamSocDaMat() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("/api/cham-soc-da-mat")
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Chăm Sóc Da Mặt</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
        {articles.map((article) => (
          <div key={article.id} className="p-3 border rounded shadow">
            <img src={article.image_url} alt={article.title} className="w-full h-40 object-cover rounded" />
            <h2 className="text-lg font-semibold mt-2">{article.title}</h2>
            <p className="text-sm text-gray-600">{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
