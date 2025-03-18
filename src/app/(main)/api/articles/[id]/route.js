import { NextResponse } from "next/server";
import pool from "@/lib/db"; // Import kết nối PostgreSQL

export async function GET() {
  try {
    const serviceId = 1; // Chỉ lấy bài viết của dịch vụ Phun Môi

    const client = await pool.connect();
    const result = await client.query(
      "SELECT * FROM articles WHERE service_id = $1",
      [serviceId]
    );
    client.release();

    return NextResponse.json(result.rows, { status: 200 });
  } catch (error) {
    console.error("Lỗi khi lấy bài viết:", error);
    return NextResponse.json({ message: "Lỗi server", error: error.message }, { status: 500 });
  }
}
