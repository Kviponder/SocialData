# Mongoose API Sample

This is a simple Mongoose API demo showcasing how to build and interact with a MongoDB database using Mongoose. The API allows you to perform CRUD operations on two main resources: `users` and `thoughts`. The API is designed to manage user data and their associated thoughts and reactions.

## Table of Contents

- [Links](#links)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Models](#models)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Links

    https://github.com/Kviponder/SocialData
    https://drive.google.com/file/d/1qn9S2_d_vzgJrcosrp_VDyhb6DpBMuZs/view

## Installation

1. Clone the repository to your local machine using the following command:

   ```
   git clone https://github.com/your-username/mongoose-api-demo.git
   ```

2. Navigate to the project folder:

   ```
   cd project-directory ie: SocialData
   ```

3. Install the required dependencies:

   ```
   npm install
   ```

## Usage

To start the API server, run the following command:

```
npm start
```

The API server will run on `http://localhost:3000` by default.

## Endpoints

### Users

- `GET /api/users`: Get all users.
- `GET /api/users/:id`: Get a single user by their ID.
- `POST /api/users`: Create a new user.
- `PUT /api/users/:id`: Update a user by their ID.
- `DELETE /api/users/:id`: Delete a user by their ID.
- `POST /api/users/:userId/friends/:friendId`: Add a friend to a user's friend list.
- `DELETE /api/users/:userId/friends/:friendId`: Remove a friend from a user's friend list.

### Thoughts

- `GET /api/thoughts`: Get all thoughts.
- `GET /api/thoughts/:thoughtId`: Get a single thought by its ID.
- `POST /api/thoughts`: Create a new thought.
- `PUT /api/thoughts/:thoughtId`: Update a thought by its ID.
- `DELETE /api/thoughts/:thoughtId`: Delete a thought by its ID.
- `POST /api/thoughts/:thoughtId/reactions`: Add a reaction to a thought.
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId`: Remove a reaction from a thought.

## Models

### User Model

The User model represents a user in the database. It has the following properties:

- `username`: The username of the user.
- `email`: The email address of the user.
- `friends`: An array containing the IDs of the user's friends.
- `thoughts`: An array containing the IDs of the user's thoughts.

### Thought Model

The Thought model represents a thought in the database. It has the following properties:

- `thoughtText`: The text content of the thought.
- `createdAt`: The timestamp of when the thought was created.
- `username`: The username of the user who posted the thought.
- `reactions`: An array containing the reactions to the thought.

## Dependencies

The project uses the following major dependencies:

- [Express](https://expressjs.com): A fast, minimalist web framework for Node.js.
- [Mongoose](https://mongoosejs.com): A MongoDB object modeling tool designed to work in an asynchronous environment.

## Contributing

Contributions to this project are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or create a pull request.

## License

This project is licensed under the MIT License. You can find the full license text in the [LICENSE](./LICENSE) file.
