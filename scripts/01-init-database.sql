-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  full_name VARCHAR(255),
  business_name VARCHAR(255),
  phone VARCHAR(20),
  county VARCHAR(100),
  business_type VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create grants table
CREATE TABLE IF NOT EXISTS grants (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  funding_amount_min INTEGER,
  funding_amount_max INTEGER,
  deadline DATE,
  eligibility_criteria TEXT,
  application_url VARCHAR(500),
  contact_info VARCHAR(255),
  industry_tags VARCHAR(500),
  business_size_tags VARCHAR(500),
  source VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create compliance resources table
CREATE TABLE IF NOT EXISTS compliance_resources (
  id SERIAL PRIMARY KEY,
  category VARCHAR(100),
  title VARCHAR(255) NOT NULL,
  content TEXT,
  guidance_type VARCHAR(50),
  requires_legal_review BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create compliance queries table
CREATE TABLE IF NOT EXISTS compliance_queries (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  question TEXT NOT NULL,
  category VARCHAR(100),
  ai_response TEXT,
  legal_flag BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create talent profiles table
CREATE TABLE IF NOT EXISTS talent_profiles (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  skills VARCHAR(500),
  expertise_description TEXT,
  service_type VARCHAR(100),
  is_available BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create talent connections table (for introductions/networking)
CREATE TABLE IF NOT EXISTS talent_connections (
  id SERIAL PRIMARY KEY,
  business_owner_id INTEGER REFERENCES users(id),
  talent_provider_id INTEGER REFERENCES users(id),
  connection_type VARCHAR(100),
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create saved grants table
CREATE TABLE IF NOT EXISTS saved_grants (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  grant_id INTEGER REFERENCES grants(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, grant_id)
);
