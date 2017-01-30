\c randysalazar 

DROP DATABASE IF EXISTS "articles_products_express";
DROP USER IF EXISTS "articles_products_user";
CREATE USER "articles_products_user" WITH ENCRYPTED PASSWORD 'postgres';
CREATE DATABASE "articles_products_express" OWNER "articles_products_user";

\c articles_products_express

CREATE TABLE "products" (
  id SERIAL PRIMARY KEY, 
  name TEXT NOT NULL, 
  price INTEGER NOT NULL,
  inventory INTEGER NOT NULL 
);

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO articles_products_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO articles_products_user;
