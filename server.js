const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://picsum.photos/64?random=1",
      name: "이혜인",
      birthday: "980820",
      gender: "여자",
      job: "직장인",
    },
    {
      id: 2,
      image: "https://picsum.photos/64?random=2",
      name: "이혜원",
      birthday: "020509",
      gender: "여자",
      job: "대학생",
    },
    {
      id: 3,
      image: "https://picsum.photos/64?random=3",
      name: "이해찬",
      birthday: "100613",
      gender: "남자",
      job: "중학생",
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
