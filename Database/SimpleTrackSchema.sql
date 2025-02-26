-- Users table to handle admin, employee, maintenance 

CREATE TABLE users (
    id INT PRIMARY KEY,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    role ENUM('admin', 'employee', 'maintenance'),
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE equipment (
id CHAR(8) PRIMARY KEY,
name ENUM('Upright Bike', 'Treadmill','Elliptical','Recumbent Bike','Adaptive Motion Trainer','Stair Climber'),
location ENUM('Cardio 1', 'Cardio 2','Cardio 3'),
serial_number INT NOT NULL,
equipment_condition ENUM('excellent','good','fair','poor')
);

 CREATE TABLE work_orders (
    id INT PRIMARY KEY,
    admin_id INT DEFAULT NULL,
    equipment_id CHAR(8),
    status ENUM('requested', 'approved', 'in progress', 'completed', 'rejected'),
    date_requested DATE DEFAULT NULL,
    cost DECIMAL(10,2) DEFAULT 0.00,
    description TEXT,
    FOREIGN KEY (admin_id) REFERENCES users(id),
    FOREIGN KEY (equipment_id) REFERENCES equipment(id)
);

CREATE TABLE maintenance_history (
    id INT PRIMARY KEY,
    work_order_id INT,
    equipment_id CHAR(8),
    maintenance_id INT,
    date_completed DATE,
    details TEXT,
    FOREIGN KEY (work_order_id) REFERENCES work_orders(id),
    FOREIGN KEY (equipment_id) REFERENCES equipment(id),
    FOREIGN KEY (maintenance_id) REFERENCES users(id)
);