import { Response } from "express";
import { AuthRequest } from "../middleware/authMiddleware";
import Conversation from "../models/Conversation";
import Message from "../models/Message";
import User from "../models/User";

// Get all conversations for the logged-in user
export const getConversations = async (req: AuthRequest, res: Response) => {
  try {
    const conversations = await Conversation.find({
      participants: req.userId,
    }).populate("participants", "name email");

    res.status(200).json(conversations);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Start or get existing conversation with another user
export const startConversation = async (req: AuthRequest, res: Response) => {
  try {
    const { otherUserId } = req.body;

    let conversation = await Conversation.findOne({
      participants: { $all: [req.userId, otherUserId], $size: 2 },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [req.userId, otherUserId],
      });
    }

    res.status(200).json(conversation);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get messages for a conversation
export const getMessages = async (req: AuthRequest, res: Response) => {
  try {
    const { conversationId } = req.params;

    const messages = await Message.find({ conversationId }).sort({ createdAt: 1 });

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Send a message
export const sendMessage = async (req: AuthRequest, res: Response) => {
  try {
    const { conversationId, text } = req.body;

    const message = await Message.create({
      conversationId,
      sender: req.userId,
      text,
    });

    await Conversation.findByIdAndUpdate(conversationId, { lastMessage: text });

    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get all users (to start new chats with)
export const getAllUsers = async (req: AuthRequest, res: Response) => {
  try {
    const users = await User.find({ _id: { $ne: req.userId } }).select("name email");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
