"use strict";const e=require("../Models/ChildSub"),r=require("../Models/Submenu");module.exports.getAll=async r=>{const t=await e.find().where({parent_sub:r}||{parent_childSub:r});return JSON.parse(JSON.stringify(t))},module.exports.getAllSubForMain=async e=>{const t=await r.find().where({parent_main:e});return JSON.parse(JSON.stringify(t))};