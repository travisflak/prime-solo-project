-- add user table
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