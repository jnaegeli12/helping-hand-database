DROP DATABASE IF EXISTS services_db;
CREATE DATABASE services_db;

USE services_db;

CREATE TABLE organizations (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    city VARCHAR(30) NOT NULL,
    state VARCHAR(2) NOT NULL,
    zip INT(5) NOT NULL,
    phone_number VARCHAR(15) NULL,
    website VARCHAR(100) NULL,
    served_meal BOOLEAN DEFAULT false,
    food_bank BOOLEAN DEFAULT false,
    immediate_shelter BOOLEAN DEFAULT false,
    longterm_shelter BOOLEAN DEFAULT false,
    urgent_care BOOLEAN DEFAULT false,
    dental BOOLEAN DEFAULT false,
    mental BOOLEAN DEFAULT false,
    daily BOOLEAN DEFAULT false,
    description VARCHAR(1000) NOT NULL,
    age_min INT(2) DEFAULT 0,
    age_max INT(3) DEFAULT 100,
    male BOOLEAN DEFAULT false,
    female BOOLEAN DEFAULT false,
    family_youth BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);