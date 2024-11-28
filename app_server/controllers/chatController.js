// app_server/controllers/chatController.js
exports.chatPage = (req, res) => {
    res.render('chat/index', { title: 'Chat Room' });
  };
  