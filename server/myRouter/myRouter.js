const express = require("express");
const myRouter = express.Router();
const connection = require("../db/connection");
myRouter.get("/students", (req, resp) => {
  connection.query("select * from student", (err, data, Field) => {
    if (!err) {
      console.log(data);

      resp.status(200).send(data);
    } else {
      resp.status(500).send(JSON.stringify(err));
    }
  });
});
myRouter.post("/students/:id", (req, resp) => {
  connection.query(
    "insert into student values(?,?,?,?,?,?)",
    [
      req.body.sid,
      req.body.sname,
      req.body.email,
      req.body.password,
      req.body.marks,
      req.body.course,
    ],
    (err, data, Field) => {
      if (!err) {
        resp.status(200).send("added successfully");
      } else {
        resp.status(500).send(JSON.stringify(err));
      }
    }
  );
});
myRouter.put("/students/:id", (req, resp) => {
  connection.query(
    "update student set sname=?, email=?, password=?, marks=?, course=? where sid = ?",
    [
      req.body.sname,
      req.body.email,
      req.body.password,
      req.body.marks,
      req.body.course,
      req.body.sid,
    ],
    (err, data, Field) => {
      if (!err) {
        resp.status(200).send("updated successfully");
      } else {
        resp.status(500).send(JSON.stringify(err));
      }
    }
  );
});
myRouter.delete("/students/:id", (req, resp) => {
  connection.query(
    "delete from student where sid =?",
    [req.params.id],
    (err, data, Field) => {
      if (!err) {
        resp.status(200).send("deleted successfully");
      } else {
        resp.status(500).send(JSON.stringify(err));
      }
    }
  );
});
module.exports = myRouter;
