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
CREATE TABLE booking_requests (
    id INT AUTO_INCREMENT PRIMARY KEY,

    user_id INT NOT NULL,
    asset_id INT NOT NULL,

    requested_quantity INT NOT NULL,

    start_date DATE NOT NULL,
    end_date DATE NOT NULL,

    purpose TEXT,

    status ENUM(
        'PENDING',
        'APPROVED',
        'REJECTED',
        'ISSUED',
        'RETURNED'
    ) DEFAULT 'PENDING',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id)
    REFERENCES users(id),

    FOREIGN KEY (asset_id)
    REFERENCES assets(id)
);
CREATE TABLE asset_issues (
    id INT AUTO_INCREMENT PRIMARY KEY,

    booking_id INT NOT NULL,

    issue_date DATETIME,

    due_date DATETIME,

    return_date DATETIME,

    issue_status ENUM(
        'ISSUED',
        'RETURNED',
        'OVERDUE'
    ) DEFAULT 'ISSUED',

    FOREIGN KEY (booking_id)
    REFERENCES booking_requests(id)
);
CREATE TABLE notifications (
    id INT AUTO_INCREMENT PRIMARY KEY,

    user_id INT NOT NULL,

    title VARCHAR(255),

    message TEXT,

    is_read BOOLEAN DEFAULT FALSE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id)
    REFERENCES users(id)
);
CREATE TABLE audit_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,

    user_id INT,

    action VARCHAR(255) NOT NULL,

    details TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id)
    REFERENCES users(id)
);
CREATE TABLE maintenance_records (
    id INT AUTO_INCREMENT PRIMARY KEY,

    asset_id INT NOT NULL,

    maintenance_date DATE,

    remarks TEXT,

    status ENUM(
        'COMPLETED',
        'PENDING'
    ) DEFAULT 'COMPLETED',

    FOREIGN KEY (asset_id)
    REFERENCES assets(id)
);
