
# Simple CRUD App with Node.js and Express

This is a simple CRUD (Create, Read, Update, Delete) application built using Node.js and Express. The purpose of this application is to demonstrate basic CRUD functionality and to provide a structured example of building an API with Node.js and Express.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This CRUD application allows users to perform CRUD operations on products. It provides a set of API endpoints to manage products stored in a MongoDB database.

## Features

- **CRUD Operations**: The application supports basic CRUD operations for managing products.
- **API Endpoints**:
  - `GET /api/products`: Retrieve all products.
  - `GET /api/products/:id`: Retrieve a specific product by ID.
  - `POST /api/products`: Create a new product.
  - `PUT /api/products/:id`: Update an existing product.
  - `DELETE /api/products/:id`: Delete a product.

## Getting Started

### Prerequisites

Before running the application, you need to have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Aysha-Mohamed/simple-crud-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd simple-crud-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Running the App

1. Set up MongoDB:
   - Ensure that you have MongoDB installed and running locally.
   - Provide the appropriate MongoDB connection URI in `index.js`.

2. Run the application:

   ```bash
   node index.js
   or
   npm run serve
   ```
   To keep the server running,
    ```bash
   npm run dev
   ```

## Project Structure

- **index.js**: Main entry point of the application where Express server is configured.
- **routes/product.route.js**: Defines the routes for handling product-related API requests.
- **controllers/product.controller.js**: Contains controller functions for handling CRUD operations on products.
- **models/product.model.js**: Defines the schema for the product model using Mongoose.

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)

## Contributing

Contributions to enhance the functionality or improve the code structure are welcome. Feel free to fork the repository, make changes, and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
```

You can copy and paste this content into your README.md file. Let me know if you need further assistance!
