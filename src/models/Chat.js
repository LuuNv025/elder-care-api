const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
  participants: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  }],
  messages: [{
    sender: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User' 
    },
    content: String,
    type: {
      type: String,
      enum: ['text', 'image', 'file']
    },
    timestamp: { type: Date, default: Date.now }
  }],
  lastMessageAt: Date
});

module.exports = mongoose.model('Chat', ChatSchema);