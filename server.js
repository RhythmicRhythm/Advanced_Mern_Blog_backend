import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

const server = express();
let PORT = 3000;

mongoose.connect(process.env.DB_LOCATION, {
  autoIndex: true,
});

server.post("/signup", (req, res) => {
  let { fullname, email, password } = req.body;

    //validating frontend data
    if (fullname.length < 3) {
        return res
          .status(403)
          .json({ error: "Fullname must be at least 3 letters long" });
      }
      if (email.length < 3) {
        return res
          .status(403)
          .json({ error: "Fullname must be at least 3 letters long" });
      }



  return res.status(405).json({"error": "Enter Email"})
});

server.listen(PORT, () => {
  console.log("server running on port --> " + PORT);
});
