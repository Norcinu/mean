var router = require('express').Router()

router.get('/', function (req, res) {
	res.sendFile('/Users/steven/Documents/code/mean/book/posts.html')
})

module.exports = router
