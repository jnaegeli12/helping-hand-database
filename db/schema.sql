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
    phone_number INTEGER(11) NULL,
    website VARCHAR(30) NULL,
    food_org BOOLEAN DEFAULT false,
    shelter_org BOOLEAN DEFAULT false,
    health_org BOOLEAN DEFAULT false,
    daily_org BOOLEAN DEFAULT false,
    type VARCHAR(30) NOT NULL,
    description VARCHAR(300) NOT NULL,
    age_min INT(2) NULL,
    age_max INT(2) NULL,
    male BOOLEAN DEFAULT false,
    female BOOLEAN DEAFULT false,
    family_youth BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);
