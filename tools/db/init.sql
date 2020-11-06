CREATE DATABASE IF NOT EXISTS test_db;
GRANT ALL PRIVILEGES on root.*
TO 'root'@'%'
WITH GRANT OPTION;

use test_db

CREATE TABLE users(
    id INT(11) NOT NULL,
    name VARCHAR(255),
    email VARCHAR(255),
    department VARCHAR(255),
    city VARCHAR(255)
);   

ALTER TABLE users
  ADD PRIMARY KEY (id);

ALTER TABLE users
  MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;


INSERT INTO users (
    id,
    name,
    email,
    department,
    city
)
    VALUES
        (1,"santiago","santiagovj0422@gmail.com", "Antioquia", "Medellin")

