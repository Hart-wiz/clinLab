const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
});

// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "clinlab",
//   password: "wiseman",
//   port: 5432,
// });

// Test connection
pool
  .connect()
  .then((client) => {
    console.log("✅ Connected to PostgreSQL database");
    client.release(); // Always release the client after checking
  })
  .catch((err) => {
    console.error("❌ Database connection error:", err.stack);
  });

module.exports = pool;
