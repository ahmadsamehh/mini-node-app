# 🌊 Mini Node App (BFGF Edition)

A sleek, containerized Node.js web application featuring a modern glassmorphic UI, Express routing, and a pre-configured Caddy reverse proxy.

## ✨ Features

- **🎨 Modern UI**: Beautiful glassmorphism design with responsiveness and smooth animations.
- **🛣️ Express Routing**: Cleanly structured routes including health checks and time endpoints.
- **🐳 Docker Ready**: Includes `Dockerfile` (optimized multi-stage) and `docker-compose` for orchestration.
- **🛡️ Caddy Reverse Proxy**: Integrated reverse proxy with automated TLS and path handling.
- **⚙️ Environment Driven**: Easy configuration via `.env` files.

## 🛠️ Tech Stack

- **Runtime**: Node.js (v22-alpine)
- **Framework**: Express.js
- **Reverse Proxy**: Caddy
- **Containerization**: Docker & Docker Compose

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [Docker](https://www.docker.com/) & Docker Compose (optional, for containerized setup)

### Local Development

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd mini-node-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment**:
   Create a `.env` file (or copy the existing one):
   ```bash
   PORT=6800
   ```

4. **Start the server**:
   ```bash
   npm start
   ```
   The app will be available at [http://localhost:6800](http://localhost:6800).

---

### 🐳 Running with Docker

You can spin up the entire stack using Docker Compose. This starts the Node.js app, a Caddy reverse proxy, and an echo service.

```bash
docker-compose up -d --build
```

- **App Home**: [https://localhost](https://localhost)
- **API Access**: [https://localhost/api/](https://localhost/api/)
- **Echo Service**: [https://localhost/echo/](https://localhost/echo/)

> [!NOTE]
> Caddy is configured with `tls internal` for local development. You may need to accept the self-signed certificate in your browser.

## 📡 API Reference

| Endpoint | Description | Reverse Proxy Path |
| :--- | :--- | :--- |
| `GET /` | Home page | `/` or `/api/` |
| `GET /Boyfriend` | Boyfriend's personal page | `/Boyfriend` or `/api/Boyfriend` |
| `GET /Girlfriend` | Special tribute page | `/Girlfriend` or `/api/Girlfriend` |
| `GET /health` | Service health status | `/api/health` |
| `GET /time` | Get current ISO time | `/api/time` |
| `GET /echo` | Hashicorp Echo service | `/echo/` |

## 🏗️ Project Structure

```text
.
├── Caddyfile              # Reverse proxy configuration
├── Dockerfile             # Basic Docker production build
├── Dockerfile-multistage  # Optimized multi-stage build
├── docker-compose.yml     # Service orchestration (bfgf-container)
├── server.js              # Express application logic
└── package.json           # Node.js dependencies
```

## 📜 License

This project is licensed under the ISC License.
