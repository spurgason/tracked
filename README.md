<div align="center" style="background-color: white; height: 150px; width: 75%;">
  <img src="client/src/assets/images/Logo-Name.svg" width="400"/>
</div>

# Tracked

Tracked is an easy to use application that allows busy students keep track of assignments and their due dates.

## Demo

![Demo](/client/src/assets/docs/Animation.gif)

Link to [application](https://assignmenttracked.herokuapp.com/login)

## Features

- User authentication
- CRUD Operations
- State management
- Responsive design

## Run Locally

1. Clone the project

```bash
  git clone https://github.com/spurgason/tracked.git
```

2. Go to the project directory

```bash
  cd tracked
```

3. Install dependencies for the backend in the root directory as well as dependencies for the frontend in the client directory

```bash
  npm install
```

4. Set up environment variables to connect to MongoDB as well as the JWT secret. Environment
   variables can be found here.

5. Start the server

```bash
  npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URI`

`JWT_SECRET`

## API Reference

### Users

#### Gets current user data

```http
  GET /api/users/user
```

#### Registers user

```http
  POST /api/users
```

#### Login user

```http
  POST /api/users/login
```

### Assignments

#### Gets assignments

```http
  GET /api/assignments
```

#### Creates assignment

```http
  POST /api/assignments
```

#### Updates assignment

```http
  PUT /api/assignments/:id
```

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `id`      | `string` | **Required**. Id of item to update |

#### Deletes assignment

```http
  DEL /api/assignments/:id
```

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `id`      | `string` | **Required**. Id of item to delete |

## Roadmap

- [ ] Allow users to update assignments
- [ ] Format dates to en-US format
- [ ] Improve styling
- [ ] Add calendar view
- [ ] Integrate dark mode into the application
- [ ] PWA application or native phone application

## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express, MongoDB, JWT

## Authors

- [@spurgason](https://github.com/spurgason)
