
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "admin" BOOLEAN default false
);

-- add groceries table
CREATE TABLE "groceries" (
    "id" SERIAL PRIMARY KEY,
    "user_id" int NOT NULL,
    "item" VARCHAR (1000) NOT NULL,
    "quantity" int,
    "shopped" BOOLEAN default false
);