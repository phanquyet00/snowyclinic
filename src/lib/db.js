import { Pool } from 'pg';

// Cấu hình kết nối PostgreSQL
const pool = new Pool({
  user: 'postgres',         // Tên user PostgreSQL
  host: 'localhost',        // Nếu dùng Docker, có thể là 'db'
  database: 'snowyclinic',  // Tên database bạn đã tạo
  password: '342345', // Thay bằng mật khẩu của bạn
  port: 5432,               // Cổng mặc định PostgreSQL
});

export default pool;
