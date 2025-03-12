import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import pool from "@/lib/db"; // Đảm bảo đường dẫn đúng

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    // Kiểm tra xem user có tồn tại trong database không
    const result = await pool.query("SELECT * FROM users WHERE username = $1", [username]);

    if (result.rows.length === 0) {
      return NextResponse.json({ message: "Sai tài khoản hoặc mật khẩu!" }, { status: 401 });
    }

    const user = result.rows[0];

    // So sánh mật khẩu đã mã hóa
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json({ message: "Sai tài khoản hoặc mật khẩu!" }, { status: 401 });
    }

    return NextResponse.json({ message: "Đăng nhập thành công!", username: user.username });
  } catch (error) {
    console.error("Lỗi đăng nhập:", error);
    return NextResponse.json({ message: "Lỗi server!" }, { status: 500 });
  }
}
