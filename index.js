import "dotenv/config";
import express from "express";

import OnvifController from "./app/controllers/OnvifController";


const app = express();

app.use(express.json());

app.post("/show_camera/:id", OnvifController.showCamera);



app.listen(3339, () => {
  console.log("Server running on localhost:3339");
});
