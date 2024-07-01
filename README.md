# pf-api-template
pf-api-template


## Description
This is a template for creating a new API project. 
 - It includes a basic structure for the project
 - docker-compose file for running the Postgres server
 - Basic nifty scripts for running the project

## Setup

1. Clone the repository
2. Run `pnpm install` to install the dependencies ( don't have `pnpm`? install it with `npm install -g pnpm` )
3. Run ` cat .env.example > .env` to create a new .env file
4. Run `docker-compose up -d` to start the Postgres server
5. Connect to the Postgres server and create a new database `pf_template`
6. Run `pnpm exec prisma generate` to generate the Prisma client
7. Run `pnpm exec prisma migrate dev` to run the migrations
8. Run `pnpm dev` to start the server