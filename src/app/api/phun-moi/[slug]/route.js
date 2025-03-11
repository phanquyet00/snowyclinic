import { NextResponse } from 'next/server';
import db from '@/lib/db'; // Kiểm tra đường dẫn đến kết nối database

export async function GET(req, { params }) {
    try {
        const { slug } = params;

        // Truy vấn bài viết từ database theo slug
        const article = await db.articles.findFirst({
            where: { slug: slug }
        });

        if (!article) {
            return NextResponse.json({ error: 'Không tìm thấy bài viết' }, { status: 404 });
        }

        return NextResponse.json(article);
    } catch (error) {
        console.error('Lỗi API:', error);
        return NextResponse.json({ error: 'Lỗi server' }, { status: 500 });
    }
}
