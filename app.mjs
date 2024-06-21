import express from "express";

const app = express();
const port = 4000;

app.get("/profiles", (request, response) => {
  return response.json({
    data: {
      name: "john",
      age: 20,
    },
  });
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
