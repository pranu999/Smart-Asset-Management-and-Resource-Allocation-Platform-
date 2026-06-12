CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('ADMIN', 'USER') NOT NULL DEFAULT 'USER',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE asset_categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT
);
CREATE TABLE assets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    asset_name VARCHAR(200) NOT NULL,
    category_id INT NOT NULL,
    description TEXT,
    
    total_quantity INT NOT NULL DEFAULT 0,
    available_quantity INT NOT NULL DEFAULT 0,

    asset_status ENUM(
        'AVAILABLE',
        'UNAVAILABLE',
        'MAINTENANCE'
    ) DEFAULT 'AVAILABLE',

    asset_condition ENUM(
        'EXCELLENT',
        'GOOD',
        'DAMAGED'
    ) DEFAULT 'GOOD',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (category_id)
    REFERENCES asset_categories(id)
);