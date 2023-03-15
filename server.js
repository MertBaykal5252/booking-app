const express = require("express");
const axios = require("axios");
var bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Configuration = {
  api: "https://v2-api.obilet.com/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Basic REd3cEIia3spV295VVc3G2FtVjNZbWx1",
  },
};

const Urls = {
  getSession: Configuration.api + "/client/getsession",
  getBusLocations: Configuration.api + "/location/getbuslocations",
  getJourneys: Configuration.api + "/journey/getbusjourneys",
};

app.post("/client/getsession", async (req, res) => {
  console.log("*******************************");
  console.log(req);
  console.log("*******************************");
  res.setHeader("Content-Type", "application/json");
  try {
    const response = await axios.post(
      Urls.getSession,
      {
        ...req.body,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic JEcYcEMyantZV095WVc3G2JtVjNZbWx1",
        },
      }
    );
    const e = await response.data;
    res.json({ results: e });
  } catch (error) {
    console.log("Hata oluştu");
    res.json({ error, results: [] });
  }
});

app.listen(3000);
