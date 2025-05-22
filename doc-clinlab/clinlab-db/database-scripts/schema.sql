
--  User table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password TEXT NOT NULL,
  role VARCHAR(50) NOT NULL CHECK (role IN ('admin', 'lab_tech', 'clinician')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 
-- reference_ranges
CREATE TABLE reference_ranges (
  id SERIAL PRIMARY KEY,
  test_name TEXT UNIQUE,
  min_value NUMERIC,
  max_value NUMERIC,
  unit TEXT
);

