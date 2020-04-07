# Node API 2 Guided Project Starter Code

Guided project starter code for **Node API 2** module.

In this project we will learn how to create a very simple Web API using `Node.js` and `Express`, and cover how to use `Express Routers` to break up the application to make it more maintainable.

## Prerequisites

- a REST client like [insomnia](https://insomnia.rest/download/) or [Postman](https://www.getpostman.com/downloads/) installed.

## Project Setup

- [ ] fork and clone this repository.
- [ ] **CD into the folder** where you cloned **your fork**.
- [ ] type `npm i` to download dependencies.

Please follow along as the instructor builds the API step by step.

## Public Endpoints

- Hubs Resource: /api/hubs
- Clients: /api/clients
- Products: /api/products

Create a Product => /add_product (NO!); the RESTful way is POST /api/products
Update a Product => /update_product (NO!); the RESTful way is PATCH/PUT /api/products/:id

## Private Endpoints

- Clients: /admin/clients
- Products: /admin/products

Break API into sub-API components similar to how a React app is structured
This is done with server side routing
Routers can be nested inside other routers (App wrapps all routers)

Router for public endpoints and a separate router for private endpoints
