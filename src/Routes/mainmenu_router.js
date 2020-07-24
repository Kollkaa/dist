"use strict";const e=require("express"),t=require("../Controllers/mainmenu_controller"),n=e.Router();n.get("/mainmenu",t.getMainMenu),n.get("/main",t.getMainPage),n.route("/mainmenu/edit/:idmenu").get(t.getEditMainMenuItem).post(t.postEditedMainMenuItem),n.route("/mainmenu/add").get(t.getAddMainMenuItem).post(t.postAddedMainMenuItem),n.post("/mainmenu/delete/:idmenu",t.deleteMainMenuItem),module.exports=n;