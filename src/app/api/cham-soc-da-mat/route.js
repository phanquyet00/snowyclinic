import { NextResponse } from "next/server";
import pool from "@/lib/db"; // Kết nối với PostgreSQL

export async function GET() {
  try {
    const result = await pool.query("SELECT * FROM articles WHERE category = 'cham-soc-da-mat'");
    return NextResponse.json(result.rows, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Lỗi khi lấy dữ liệu" }, { status: 500 });
  }
}
