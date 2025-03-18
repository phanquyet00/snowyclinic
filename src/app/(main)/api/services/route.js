import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM services");
    client.release();

    return NextResponse.json(result.rows, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Lỗi server", error: error.message }, { status: 500 });
  }
}
