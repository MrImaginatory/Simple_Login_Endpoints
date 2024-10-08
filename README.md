# Simple Login Endpoints

This project provides a simple implementation of login and signup endpoints using Express.js and MongoDB. It includes user authentication with password hashing using bcrypt, cookie management, and basic error handling.

## Features

- User Registration (Signup)
- User Login
- Password Hashing with bcrypt
- HTTP-only Cookies for session management
- Simple error handling

## Technologies Used

- **Node.js**: JavaScript runtime for server-side programming
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database for storing user data
- **Mongoose**: ODM for MongoDB and Node.js
- **bcrypt**: Library for hashing passwords
- **cookie-parser**: Middleware for parsing cookies
- **cors**: Middleware for enabling CORS

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MongoDB (local or cloud instance)
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MrImaginatory/Simple_Login_Endpoints.git
   cd Simple_Login_Endpoints
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your MongoDB connection string and the port number. For example:

   ```plaintext
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/yourDatabaseName
   ```

4. Start the server:

   ```bash
   npm start
   ```

   The server should now be running at `http://localhost:3000`.

## API Endpoints

### Signup

- **Endpoint**: `POST /credentials/register`
- **Request Body**:
  ```json
  {
      "email": "user@example.com",
      "password": "yourpassword"
  }
  ```
- **Response**:
  - `201 Created`: User created successfully.
  - `400 Bad Request`: User already exists.
  - `500 Internal Server Error`: Database error.

### Login

- **Endpoint**: `POST /credentials/login`
- **Request Body**:
  ```json
  {
      "email": "user@example.com",
      "password": "yourpassword"
  }
  ```
- **Response**:
  - `200 OK`: Login successful.
  - `404 Not Found`: Email or password is incorrect.
  - `500 Internal Server Error`: Database error.

## Contributing

Contributions are welcome! If you have suggestions for improvements or find a bug, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Express.js](https://expressjs.com/) for the web framework.
- [Mongoose](https://mongoosejs.com/) for MongoDB object modeling.
- [bcrypt](https://www.npmjs.com/package/bcryptjs) for password hashing.
- [cookie-parser](https://www.npmjs.com/package/cookie-parser) for cookie management.
