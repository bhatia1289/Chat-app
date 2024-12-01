const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "neha",
    to: "priya",
    msg: "send me your exam sheets",
    created_at: new Date(),
  },
  {
    from: "Abhishek",
    to: "varsha",
    msg: "lets meet!!",
    created_at: new Date(),
  },
  {
    from: "krish",
    to: "priya",
    msg: "bring some fruits",
    created_at: new Date(),
  },
];
Chat.insertMany(allChats);
