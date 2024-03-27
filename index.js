const express = require("express");
const axios = require("axios");

const app = express();

app.get("/getdata", async (req, res) => {
  try {
    const { category } = req.query;

    let api = 'https://api.publicapis.org/entries';

    if (category) {
        api += `?Category=${category}`;
      }

      const response = await axios.get(api);
      const data = response.data.entries;
      res.json(data);

  } catch (error) {
    console.log({ message: error });
    res.send({ error: error });
  }
});

app.listen(9090, () => {
  try {
    console.log("server running at port 9090");
  } catch (error) {
    console.log(error);
  }
});
