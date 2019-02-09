'use strict'
const express = require('express')
const router = express.Router()
const authRouter = require('./auth.route')
const sendRouter = require('./send.route')

router.get('/status', (req, res) => { res.send({status: 'OK'}) }) // api status

router.use('/auth', authRouter)
router.use('/send', sendRouter)

module.exports = router
