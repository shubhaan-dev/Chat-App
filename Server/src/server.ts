import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";
import chatRoutes from "./routes/chatRoutes";

dotenv.config();

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" },
});

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);

app.get("/", (req, res) => {
  res.send("API running");
});

const onlineUsers = new Map<string, string>();

const broadcastOnlineUsers = () => {
  io.emit("getOnlineUsers", Array.from(onlineUsers.keys()));
};

io.on("connection", (socket) => {
  console.log("Socket connected:", socket.id);

  socket.on("addUser", (userId: string) => {
    onlineUsers.set(userId, socket.id);
    broadcastOnlineUsers();
  });

  socket.on("sendMessage", ({ conversationId, senderId, receiverId, text, messageId }) => {
    const receiverSocketId = onlineUsers.get(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("receiveMessage", {
        conversationId,
        senderId,
        text,
        _id: messageId,
      });
    }
  });

  socket.on("disconnect", () => {
    for (const [userId, socketId] of onlineUsers.entries()) {
      if (socketId === socket.id) {
        onlineUsers.delete(userId);
        break;
      }
    }
    broadcastOnlineUsers();
    console.log("Socket disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 5050;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
