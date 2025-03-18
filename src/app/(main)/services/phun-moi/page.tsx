import Link from "next/link";

async function getArticles() {
  const res = await fetch("http://localhost:3000/api/articles/1", { cache: "no-store" });
  if (!res.ok) throw new Error("Lỗi khi lấy dữ liệu bài viết");
  return res.json();
}

export default async function PhunMoiPage() {
  const articles = await getArticles();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Danh sách bài viết Phun Môi</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Tiêu đề</th>
            <th className="border p-2">Tóm tắt</th>
            <th className="border p-2">Xem chi tiết</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article: any) => (
            <tr key={article.id} className="hover:bg-gray-200">
              <td className="border p-2">{article.title}</td>
              <td className="border p-2">{article.short_description}</td>
              <td className="border p-2">
                <Link href={`/phun-moi/${article.id}`} className="text-blue-500 hover:underline">
                  Xem chi tiết
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
