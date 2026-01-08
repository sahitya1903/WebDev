CREATE DATABASE IF NOT EXISTS college;
USE college;
CREATE TABLE Teacher(
    id INT PRIMARY KEY,
    name VARCHAR(30),
    subject VARCHAR(30),
    salary FLOAT
);
INSERT INTO Teacher (id,name,subject,salary)
VALUES
(23,'ajay','math',50000),
(47,'bharat','english',60000),
(18,'chetan','chemistry',45000),
(9,'divya','physics',75000);
SELECT * FROM teacher;

SELECT * FROM teacher
WHERE salary>55000;

ALTER TABLE teacher
CHANGE COLUMN salary ctc INT;
SELECT * FROM teacher;

UPDATE teacher
SET ctc=ctc*1.25;
SELECT * FROM teacher;

ALTER TABLE teacher
ADD COLUMN city VARCHAR(50) DEFAULT 'Gurgaon';
SELECT * FROM teacher;

ALTER TABLE teacher
DROP COLUMN ctc;
SELECT * FROM teacher;

CREATE TABLE student(
roll_no int PRIMARY KEY,
name VARCHAR(50),
city VARCHAR(50),
marks INT
);

INSERT INTO student(roll_no,name,city,marks) VALUES
(110,'adam','Delhi',76),
(108,'bob','Mumbai',65),
(124,'casey','Pune',94),
(112,'duke','Pune',80);
SELECT * FROM student;

SELECT * FROM student
WHERE marks>75;

SELECT DISTINCT city FROM student;

SELECT city FROM student
GROUP BY city;

SELECT city,MAX(marks) FROM student
GROUP BY city;

SELECT AVG(marks) from student;

ALTER TABLE student
ADD COLUMN grade VARCHAR(2);

UPDATE student
SET grade='O' WHERE marks>=80;

UPDATE student
SET grade='A' WHERE marks BETWEEN 70 AND 79 ;

UPDATE student
SET grade='B' WHERE marks BETWEEN 60 AND 69;

SELECT * FROM student;