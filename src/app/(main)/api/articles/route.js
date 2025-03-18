import { NextResponse } from "next/server";
import pool from "@/lib/db"; // Import kết nối PostgreSQL

// API POST: Thêm bài viết mới
export async function POST(req) {
  try {
    const body = await req.json();
    const { service_id, title, short_description, content, image_url, author, status } = body;

    // Kiểm tra dữ liệu đầu vào
    if (!service_id || !title || !content) {
      return NextResponse.json({ message: "Thiếu thông tin bài viết" }, { status: 400 });
    }

    // Kết nối và thực thi truy vấn
    const client = await pool.connect();
    const result = await client.query(
      "INSERT INTO articles (service_id, title, short_description, content, image_url, author, status) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [service_id, title, short_description, content, image_url, author, status || "draft"]
    );
    client.release();

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error("Lỗi khi thêm bài viết:", error);
    return NextResponse.json({ message: "Lỗi server", error: error.message }, { status: 500 });
  }
}
