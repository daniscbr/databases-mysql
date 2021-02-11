CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  /* Describe your table here.*/
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL

);


CREATE TABLE rooms (
  /* Describe your table here.*/
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL
);


CREATE TABLE messages (
  /* Describe your table here.*/
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  users_id INT NOT NULL,
  rooms_id INT NOT NULL,
  text VARCHAR(255) NOT NULL,
  CONSTRAINT
    FOREIGN KEY (users_id)
    REFERENCES users(id),
  CONSTRAINT
    FOREIGN KEY (rooms_id)
    REFERENCES rooms(id)
);
/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

