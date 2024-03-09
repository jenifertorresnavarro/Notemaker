const router = require('express').Router();
const path = require('path');

// responds with the index.html 
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});
//__dirname will ensure the directory path is correct

// responds with a notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

module.exports = router;