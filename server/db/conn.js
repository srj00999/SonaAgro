const mongoose = require("mongoose");

const DB = process.env.DATABASE;


mongoose.connect("mongodb+srv://srj00999:PTevoDKTeaGLX3J7@users.hjgncvi.mongodb.net/FishFarm?retryWrites=true&w=majority").then(() => {
    console.log("DB connection successful");
  })
  .catch((err) => {
    console.log(`Error not connected DB ${err} `);
  });
