create extension if not exists "uuid-ossp";

create table cars (
	id uuid primary key default uuid_generate_v4(),
	brand text,
	model text,
	engine text,
	description text,
	price integer
);

create table stock (
	car_id uuid,
	qty integer,
	foreign key ("car_id") references "cars" ("id")
);

insert into cars (id, brand, model, engine, description, price) values
('7567ec4b-b10c-48c5-9345-fc73c48a80aa', 'Porsche', '911', '3.6 v6', 'The best car', 50000),
('7567ec4b-b10c-48c5-9345-fc73c48a80a0', 'Porsche', '944', '3.0 straight-four', 'Everyday car', 20000),
('7567ec4b-b10c-48c5-9345-fc73c48a80a2', 'BMW', 'Z4', '3.0 turbocharged straight-six', 'The best roadster', 15000),
('7567ec4b-b10c-48c5-9345-fc73c48a80a1', 'Audi', 'TT', '1.8 straight-five', 'Coupe', 10000),
('7567ec4b-b10c-48c5-9345-fc73c48a80a3', 'BMW', 'M2', '3.0 turbocharged straight-six', 'Drift car', 25000),
('7567ec4b-b10c-48c5-9345-fc73348a80a1', 'Mercedes', 'SLK', '2.0 straight-four', 'Cabriolet', 15000),
('7567ec4b-b10c-48c5-9445-fc73c48a80a2', 'Mini', 'Cooper JCW', '2.0 turbocharged straight-four', 'The best hatch', 10000),
('7567ec4b-b10c-45c5-9345-fc73c48a80a1', 'Porsche', 'Cayman', '2.5 turbocharged straight-four', 'The best track car', 30000);

insert into stock (car_id, qty) values
('7567ec4b-b10c-48c5-9345-fc73c48a80aa', 10),
('7567ec4b-b10c-48c5-9345-fc73c48a80a0', 5),
('7567ec4b-b10c-48c5-9345-fc73c48a80a2', 15),
('7567ec4b-b10c-48c5-9345-fc73c48a80a1', 30),
('7567ec4b-b10c-48c5-9345-fc73c48a80a3', 40),
('7567ec4b-b10c-48c5-9345-fc73348a80a1', 25),
('7567ec4b-b10c-48c5-9445-fc73c48a80a2', 20),
('7567ec4b-b10c-45c5-9345-fc73c48a80a1', 25);
