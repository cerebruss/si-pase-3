const express = require('express');
const router = express.Router();
const postController = require('../controllers/post');


router.get('/', async (req, res) => {
    const data = await postController.list(req);
    res.render('post/ver', {
        "post": data.post,
        "comment": data.comment,
        "user": data.user
    });
});



router.post('/add', async (req, res) => {
    console.log("routes post add")
    await postController.add(req, res);   
});



module.exports = router;