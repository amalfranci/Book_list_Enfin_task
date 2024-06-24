# Book Mini Application

  Create and List Books.

## Table of Contents

-   [Features](#features)
-   [Installation](#installation)
-   [Backend Setup](#backend-setup)
-   [Frontend Setup](#frontend-setup)
-   [Environment Variables](#environment-variables)
-   [Running the Application](#running-the-application)
-   [API Endpoints](#api-endpoints)

## Features

-   Create Books, List Books, RESTful API, Search and pagination 

## Installation

### Prerequisites

Make sure you have the following installed on your machine:

-   Node.js
-   npm (Node Package Manager) or yarn

### Backend Setup

1. Clone the repository:

    ```sh
    git clone https://github.com/amalfranci/Book_list_Enfin_task.git

    ```

2. Navigate to the backend directory:

    ```sh
    cd backend
    ```

3. Install backend dependencies:

    ```sh
    npm install
    ```

4. Create a `.env` file in the `backend` directory and add the following environment variables:

    ```plaintext
   MONGO_URI=your_mongodb_connection_string
    ```

5. Start the backend server:

    ```sh
     npm run dev
    ```

### Frontend Setup

1. Navigate to the frontend directory:

    ```sh
    cd ./book-app-frontend
    ```

2. Install frontend dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file in the `frontend` directory and add the following environment variable:

    ```plaintext
   API_URL = 'http://localhost:4000/api/books'
    ```

4. Start the frontend development server:

    ```sh
    npm start
    ```

## Running the Application

To run the application locally, follow these steps:

1. Start the backend server:

    ```sh
    cd backend
    npm run dev
    ```

2. Start the frontend development server:

    ```sh
    cd book-app-frontend
    npm start
    ```



## API Endpoints

### Books

-   `POST /api/books` - Create a new book.
-   `GET /api/books` - Get all books.

## working video

check - https://drive.google.com/file/d/1saA-4GVAyMnkg0TsLfFgYQksT29sxIX2/view?usp=sharing
