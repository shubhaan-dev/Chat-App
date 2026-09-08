import express from "express";
import { protect } from "../middleware/authMiddleware";
import {
  getConversations,
  startConversation,
  getMessages,
  sendMessage,
  getAllUsers,
} from "../controllers/chatController";

const router = express.Router();

router.use(protect);

router.get("/users", getAllUsers);
router.get("/conversations", getConversations);
router.post("/conversations", startConversation);
router.get("/messages/:conversationId", getMessages);
router.post("/messages", sendMessage);

export default router;
