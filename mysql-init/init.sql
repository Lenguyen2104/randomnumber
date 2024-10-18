-- Create `lottery_db` database if  it doesn't exist
CREATE DATABASE IF NOT EXISTS lottery_db;

-- Use the newly created `lottery_db` database
USE lottery_db;

-- Create 'sessions' table if it doesn't exist
CREATE TABLE IF NOT EXISTS sessions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    status INT DEFAULT 1,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create 'numbers' table if it doesn't exist
CREATE TABLE IF NOT EXISTS numbers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    value INT NOT NULL,
    status INT DEFAULT 1,
    session_id INT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (session_id) REFERENCES sessions(id) ON DELETE CASCADE
);


-- Insert seed data into the 'sessions' table
INSERT INTO sessions (status) 
VALUES 
    (3),  -- COMPLETED
    (3),  -- COMPLETED
    (3),  -- COMPLETED
    (3),  -- COMPLETED
    (1);  -- SCHEDULED

-- Insert seed data into the 'numbers' table for session_id 1
INSERT INTO numbers (value, status, session_id) 
VALUES
    (12345, 3, 1),
    (67890, 3, 1),
    (23456, 3, 1),
    (34567, 3, 1),
    (45678, 3, 1),
    (56789, 3, 1),
    (67891, 3, 1),
    (78901, 3, 1),
    (89012, 3, 1),
    (1234, 3, 1),
    (5678, 3, 1),
    (9101, 3, 1),
    (2345, 3, 1),
    (6789, 3, 1),
    (6456, 3, 1),
    (7891, 3, 1),
    (1876, 3, 1),
    (4525, 3, 1),
    (7112, 3, 1),
    (123, 3, 1),
    (456, 3, 1),
    (789, 3, 1),
    (12, 3, 1),
    (34, 3, 1),
    (56, 3, 1),
    (78, 3, 1),
    (76098, 3, 1);

-- Insert seed data into the 'numbers' table for session_id 2
INSERT INTO numbers (value, status, session_id) 
VALUES
    (22345, 3, 2),
    (77897, 3, 2),
    (33456, 3, 2),
    (44567, 3, 2),
    (55678, 3, 2),
    (66789, 3, 2),
    (77891, 3, 2),
    (88901, 3, 2),
    (90122, 3, 2),
    (2234, 3, 2),
    (6789, 3, 2),
    (8214, 3, 2),
    (3455, 3, 2),
    (7899, 3, 2),
    (4567, 3, 2),
    (8901, 3, 2),
    (2876, 3, 2),
    (7525, 3, 2),
    (8212, 3, 2),
    (223, 3, 2),
    (567, 3, 2),
    (893, 3, 2),
    (22, 3, 2),
    (45, 3, 2),
    (67, 3, 2),
    (89, 3, 2),
    (86098, 3, 2);

-- Insert seed data into the 'numbers' table for session_id 3
INSERT INTO numbers (value, status, session_id) 
VALUES
    (32345, 3, 3),
    (87894, 3, 3),
    (43456, 3, 3),
    (54567, 3, 3),
    (65678, 3, 3),
    (76789, 3, 3),
    (87891, 3, 3),
    (98901, 3, 3),
    (51223, 3, 3),
    (3234, 3, 3),
    (7891, 3, 3),
    (9321, 3, 3),
    (4566, 3, 3),
    (8902, 3, 3),
    (5678, 3, 3),
    (9012, 3, 3),
    (3876, 3, 3),
    (8525, 3, 3),
    (9312, 3, 3),
    (323, 3, 3),
    (678, 3, 3),
    (901, 3, 3),
    (32, 3, 3),
    (56, 3, 3),
    (78, 3, 3),
    (99, 3, 3),
    (96098, 3, 3);

-- Insert seed data into the 'numbers' table for session_id 4
INSERT INTO numbers (value, status, session_id) 
VALUES
    (42345, 3, 4),
    (97892, 3, 4),
    (53456, 3, 4),
    (64567, 3, 4),
    (75678, 3, 4),
    (86789, 3, 4),
    (97891, 3, 4),
    (18901, 3, 4),
    (12334, 3, 4),
    (4234, 3, 4),
    (8901, 3, 4),
    (3432, 3, 4),
    (5679, 3, 4),
    (9012, 3, 4),
    (4678, 3, 4),
    (9123, 3, 4),
    (4876, 3, 4),
    (9525, 3, 4),
    (9412, 3, 4),
    (423, 3, 4),
    (789, 3, 4),
    (812, 3, 4),
    (43, 3, 4),
    (67, 3, 4),
    (89, 3, 4),
    (62, 3, 4),
    (77098, 3, 4);


-- Insert seed data into the 'numbers' table for session_id 5 with status 3
INSERT INTO numbers (value, status, session_id) 
VALUES
    (52345, 1, 5),
    (97896, 1, 5),
    (63456, 1, 5),
    (74567, 1, 5),
    (85678, 1, 5),
    (96789, 1, 5),
    (27891, 1, 5),
    (18901, 1, 5),
    (23445, 1, 5),
    (5234, 1, 5),
    (9012, 1, 5),
    (1543, 1, 5),
    (6784, 1, 5),
    (1234, 1, 5),
    (5789, 1, 5),
    (5976, 1, 5),
    (6535, 1, 5),
    (1556, 1, 5),
    (8432, 1, 5),
    (523, 1, 5),
    (678, 1, 5),
    (912, 1, 5),
    (56, 1, 5),
    (78, 1, 5),
    (89, 1, 5),
    (65, 1, 5),
    (16098, 1, 5);
