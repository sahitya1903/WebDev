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
(2,20,'eve','xyz@gmail.com',456,900),
(3,18,'adam2','abcd@gmail.com',600,456),
(4,20,'eve2','wxyz@gmail.com',900,898),
(5,19,'adam3','bcd@gmail.com',400,500),
(6,21,'eve3','wxy@gmail.com',700,800);

insert into posts
(id,content,user_id)
values
(1,'hi',7),
(2,'hello',6),
(3,'code',2);

select id,age from user;

select distinct age from user;

select * from user;

SELECT * FROM user WHERE (followers>=200);


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

SELECT name,age,followers FROM user
ORDER BY followers ASC;

SELECT MAX(followers) FROM user;

SELECT SUM(followers) FROM user;

SELECT COUNT(age) FROM user
WHERE age=18;

SELECT age,MAX(followers) FROM user
GROUP BY age;

SELECT age,MAX(followers) FROM user
GROUP BY age HAVING (MAX(followers)>600);

SELECT age,MAX(followers) 
FROM user
WHERE id>2
GROUP BY age 
HAVING (MAX(followers)>400)
ORDER BY age
ASC;

SET SQL_SAFE_UPDATES=0;

UPDATE user
SET name='bob' WHERE id=3;

DELETE FROM user
WHERE id=6;

ALTER TABLE user
ADD COLUMN city VARCHAR(25) DEFAULT "Delhi";

SELECT * FROM user;

ALTER TABLE user
DROP COLUMN city;

SELECT * FROM user;

ALTER TABLE user
RENAME TO instaUser;

SELECT * FROM instaUser;

ALTER TABLE instaUser
RENAME TO user;

ALTER TABLE user
CHANGE COLUMN followers subs INT DEFAULT 0;

SELECT * FROM user;

ALTER TABLE user
MODIFY subs INT DEFAULT 5;

SELECT * FROM user;

ALTER TABLE user
ADD CONSTRAINT chk_age CHECK(age>=13);

ALTER TABLE user
DROP CONSTRAINT user_chk_1; 

insert into user 
(id,age,name,email,subs,following)
values
(6,14,'ram','mno@gmail.com',700,500),
(7,15,'shyam','pqr@gmail.com',800,600),
(8,16,'gita','tuv@gmail.com',900,700),
(9,17,'sita','jkl@gmail.com',1000,800);

insert into user 
(id,age,name,email,following)
values
(10,21,'adi','fgh@gmail.com',500);

UPDATE user
SET name='mali' WHERE name='adam3';

UPDATE user
SET name='anu' WHERE name='eve2';

SELECT * FROM user;

SELECT * FROM posts;

TRUNCATE TABLE posts;
SELECT * FROM posts;

DROP TABLE posts;
SELECT * FROM posts;

