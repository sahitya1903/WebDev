CREATE DATABASE COLLEGE;

USE college;

CREATE TABLE student(
 rollno int,
 name varchar(30),
 age int
);

INSERT INTO student VALUES
(101,'adam',12),
(102,'bob',14);

SELECT * FROM student;

create database if not exists instagram;

use instagram;

show tables;

show databases;

create table user(
	id int ,
    age INT,
    name varchar(50) not null,
    email varchar(50) UNIQUE, 
    followers int DEFAULT 0,
    following int DEFAULT 0,
    CONSTRAINT CHECK(age>=18),
    primary key(id)
);

create table posts(
	id int,
    content varchar(100),
    user_id int,
    FOREIGN KEY(user_id) references user(id)
);


insert into user 
(id,age,name,email,followers,following)
values
(1,18,'adam','abc@gmail.com',123,145),
(2,20,'eve','xyz@gmail.com',456,900);

select id,age from user;

select distinct age from user;

select * from user;

SELECT * FROM user WHERE (followers>=200);

insert into user 
(id,age,name,email,followers,following)
values
(3,18,'adam2','abcd@gmail.com',600,456),
(4,20,'eve2','wxyz@gmail.com',900,898);

insert into user 
(id,age,name,email,followers,following)
values
(5,19,'adam3','bcd@gmail.com',400,500),
(6,21,'eve3','wxy@gmail.com',700,800);

SELECT name,age,followers FROM user
WHERE (age>18 AND followers>500);

SELECT name,age,followers FROM user
WHERE age BETWEEN 19 AND 21;

SELECT name,age,followers FROM user
WHERE email IN ('bcd@gmail.com','wxy@gmail.com');

SELECT name,age,followers FROM user
WHERE email NOT IN ('bcd@gmail.com','wxy@gmail.com');

select * from user
LIMIT 2;