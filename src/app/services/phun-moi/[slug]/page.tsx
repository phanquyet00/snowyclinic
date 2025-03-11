import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ArticlePage() {
    const router = useRouter();
    const { slug } = router.query;
    const [article, setArticle] = useState(null);

    useEffect(() => {
        if (!slug) return;

        fetch(`/api/phun-moi/${slug}`)
            .then(res => res.json())
            .then(data => setArticle(data));
    }, [slug]);

    if (!article) return <p>Loading...</p>;

    return (
        <div>
            <h1>{article.title}</h1>
            <img src={article.image_url} alt={article.title} />
            <p>{article.content}</p>
        </div>
    );
}
