'use strict'

const User = require('../models/user.model')
const httpStatus = require('http-status')

exports.send = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id).exec();
        if(!user.transaction){
            user.transaction = []  
        }
        user.transaction.push(req.body)
        await user.save()
        res.status(httpStatus.CREATED)
        res.send(user)
    } catch (error) {
        return next(error)
    }
}

exports.fetch = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).exec();
    return res.json(user.transaction)
  } catch (error) {
    next(error)
  }
}
