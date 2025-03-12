import { hash } from 'bcryptjs';
import pool from '@/lib/db';

export async function POST(req) {
  try {
    const { username, email, password } = await req.json();

    // Kiểm tra nếu email đã tồn tại
    const checkUser = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (checkUser.rows.length > 0) {
      return Response.json({ error: 'Email đã tồn tại' }, { status: 400 });
    }

    // Mã hóa mật khẩu
    const hashedPassword = await hash(password, 10);

    // Lưu vào PostgreSQL
    await pool.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)',
      [username, email, hashedPassword]
    );

    return Response.json({ message: 'Đăng ký thành công' }, { status: 201 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Lỗi server' }, { status: 500 });
  }
}
