const WebSocket = require("ws");
const { v4: uuidv4 } = require("uuid");
const { logInfo } = require("../utils/logger");

let wss;

let userClients = [];
let adminClients = [];
const initWebSocket = (server) => {
  wss = new WebSocket.Server({ server });

  wss.on("connection", (ws, req) => {
    // Gán UUID cho mỗi kết nối
    const userUUID = uuidv4();
    ws.uuid = userUUID;

    const pathname = new URL(req.url, `ws://quaythuxsmb.net//socket:${server}`)
      .pathname;

    logInfo(`Client connected with UUID: ${userUUID}`);

    if (pathname === "/admin") {
      adminClients.push(ws);
      console.log("Admin client connected");
    } else if (pathname === "/user") {
      userClients.push(ws);
      console.log("User client connected");
    }

    ws.on("close", () => {
      logInfo(`Client disconnected with UUID: ${userUUID}`);
    });

    ws.on("message", (message) => {
      if (messageString === "admin") {
        console.log("Admin client connected");
        adminClients.push(ws);
      } else {
        userClients.push(ws);
      }

      logInfo(`Received message from UUID ${userUUID}: ${message}`);
    });

    ws.on("error", () => {
      logInfo(`error message from UUID ${userUUID}`);
    });
  });

  logInfo("WebSocket server initialized");
};

const broadcast = async (message, senderUUID) => {
  if (!wss) {
    logInfo("WebSocket server is not initialized");
    return;
  }

  const messageWithUUID = {
    ...message,
    senderUUID,
  };

  logInfo(`Broadcasting message: ${JSON.stringify(messageWithUUID)}`);
  await (wss.clients.length ? wss.clients : wsClients).forEach(
    async (client) => {
      if (client.readyState === WebSocket.OPEN) {
        await client.send(JSON.stringify(messageWithUUID));
      }
    }
  );
};

const broadcastLotteryDataToUsers = (message, senderUUID) => {
  const messageWithUUID = {
    ...message,
    senderUUID,
  };

  userClients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(messageWithUUID));
    }
  });
};

const broadcastLotteryDataToAdmins = (message, senderUUID) => {
  const messageWithUUID = {
    ...message,
    senderUUID,
  };

  adminClients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(messageWithUUID));
    }
  });
};

module.exports = {
  initWebSocket,
  broadcast,
  broadcastLotteryDataToAdmins,
  broadcastLotteryDataToUsers,
};
