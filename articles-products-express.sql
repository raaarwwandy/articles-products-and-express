\c randysalazar 

DROP USER "articles_products_user";
CREATE USER "articles_products_user";
DROP DATABASE IF EXISTS "articles_products";
CREATE DATABASE "articles_products" OWNER "articles_products_user";

\c articles_products

