# Lottery Application

This project is a lottery management system developed using Node.js, React, and MySQL. It includes backend and frontend components with WebSocket support for real-time updates.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Docker Setup](#docker-setup)
- [WebSocket Integration](#websocket-integration)
- [Data Seeding](#data-seeding)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Backend**: Node.js with Express, Sequelize ORM, and MySQL database.
- **Frontend**: React application served with Nginx.
- **Real-time Updates**: WebSocket integration for live notifications.
- **Docker**: Containerized setup for easy deployment and management.

## Technologies Used

- **Backend**: Node.js, Express, Sequelize, MySQL
- **Frontend**: React, Nginx
- **WebSocket**: Socket.IO for real-time communication
- **Docker**: For containerization

## Setup Instructions

### Prerequisites

- Docker
- Docker Compose

### Local Development

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Lenguyen2104/randomnumber.git
    cd lottery
    ```

2. **Build and run the application:**

    ```bash
    docker-compose up --build
    ```

    This command will build the Docker images and start the services defined in the `docker-compose.yml` file.

## Docker Setup

- **Backend**: The backend service runs on port `3000`.
- **Frontend**: The frontend service runs on port `8081` (mapped to port `80` in the container).
- **MySQL**: The MySQL service runs on port `3308`, with the database accessible via `mysql:3306`.

## WebSocket Integration

The backend uses Socket.IO for real-time updates. The WebSocket server is configured to listen for connections and broadcast messages to all connected clients.

### Client-Side WebSocket

In the React frontend, WebSocket communication is established as follows:

```javascript
const socket = io('http://localhost:3000');

// On message received
socket.on('message', (data) => {
    console.log('Message received:', data);
});

// On error
socket.on('error', (error) => {
    console.error('WebSocket error:', error);
});
```

## Data Seeding

To seed initial data into the database if it’s the first time setting up, follow these steps:

1. **Enter the backend container:**

    ```bash
    docker-compose exec backend sh
    ```

    This command will open a shell in the backend container.

2. **Run the Seeder:**

    Navigate to the directory containing the seeder file (if necessary) and run the seeder with the following command:

    ```bash
    node seeders/seed.js
    ```

    **Expected Result after successful seeding:**
    ```
    Sessions seeded: 5
    Numbers seeded: 135
    ```

3. **If data already exists:**
   
   The seeder will skip adding existing sessions and numbers, and you will see the following messages:
    ```
    Sessions already exist. Skipping seeding sessions.
    Numbers already exist. Skipping seeding numbers.
    ```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue if you have suggestions or find bugs.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.