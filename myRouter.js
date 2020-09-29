"use strict";

const express = require("express");
const db = require("./db");

const router = express.Router();
const userApi = express.Router();

userApi.get("/getall", async (req, res) => {
  let objs = await db.find();
  res.json(objs);
  res.end();
});

userApi.get("/getone/:id", async (req, res) => {
  let obj = await db.findOne(req.params.id);
  res.json(obj);
  res.end();
});

userApi.post("/insertone", async (req, res) => {
  //
  // Look at here, db.insert insert the object into database
  // let obj = { id: 1, name: "b", age: 10, sex: "female" };
  let obj = req.body;
  try {
    obj = await db.insert(obj);
    res.json(obj);
  } catch (error) {
  } finally {
    res.end()
  }
});

userApi.delete("/deleteone/:id", async (req, res) => {
  try {
    const err = await db.deleteOne(req.params.id);
    console.log(err);
    res.json(err);
  } catch (error) {
  } finally {
    res.end();
  }
});

userApi.put("/update/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let target = req.body;
    let obj = await db.update(id, target);
    res.json(obj);
  } catch (err) {
    console.error(err);
  } finally {
    res.end();
  }
})

router.use(express.static("static"));
router.use("/api/users", userApi);

module.exports = router;
