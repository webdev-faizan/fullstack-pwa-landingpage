import express from "express";
import connectDB from "./connectinDB.js";
import Contactus_Modal from "./modals/Contectuse.Sechma.js";
import SendMail from "./Sendmail.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT | 3000;
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(function (req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "https://example.com");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   next();
// });



app.use(express.static("../frontend"));
app.get("/", (req, resp) => {
  resp.status(200).sendfile("../frontend/index.html");
});

app.post("/contactus", async (req, resp) => {
  const { FristName, LastName, Phone, Email, Location } = req.body;
  const FullName = FristName + " " + LastName;

  const Mail = await new Contactus_Modal({
    FullName: FullName,
    Phone,
    Email,
    Location,
  });
  await Mail.save();
  SendMail(FristName, LastName, Phone, Email, Location);

  resp.status(200).json({
    message: "successfully send",
  });
});

app.listen(PORT, () => {
  console.log("Server started on port 3000");
});
