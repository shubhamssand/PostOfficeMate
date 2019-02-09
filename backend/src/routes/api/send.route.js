'use strict'

const express = require('express')
const router = express.Router()
const auth = require('../../middlewares/authorization')
const sendController = require('../../controllers/send.controller')
// router.get('/', auth(['client']), applicationController.fetchAppliedCount)

router.post('/', auth(), sendController.send)
router.get('/', auth(), sendController.fetch)

module.exports = router
