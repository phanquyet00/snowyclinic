import { notFound } from "next/navigation";

async function getArticle(id: string) {
  const res = await fetch(`http://localhost:3000/api/articles/${id}`, { cache: "no-store" });
  if (!res.ok) return null;
  return res.json();
}

export default async function ArticleDetail({ params }: { params: { id: string } }) {
  const article = await getArticle(params.id);
  if (!article) return notFound();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <img src={article.image_url} alt={article.title} className="w-full h-auto mb-4" />
      <p className="text-gray-600 italic">{article.author} - {new Date(article.created_at).toLocaleDateString()}</p>
      <div className="mt-4">{article.content}</div>
    </div>
  );
}
