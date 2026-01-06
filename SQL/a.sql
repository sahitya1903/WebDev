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

show tables;

show databases;


create database if not exists instagram;

use instagram;

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
