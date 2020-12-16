const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chat');
const messageController = require('../controllers/message');


router.get('/', async (req, res) => {

    const data = await chatController.list(req, res);
    res.render('chat/ver', {
        data,
    });
});

router.get('/:id_user', async (req, res) => {
   

    console.log("routes user message")
    await chatController.findChat(req, res);   
});

router.post('/:id_user', async (req, res) => {
    
    console.log("routes chat add")
    await messageController.add(req, res);   
});


module.exports = router;