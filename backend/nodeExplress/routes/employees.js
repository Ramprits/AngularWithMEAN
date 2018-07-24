var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  const employees = [
    {
      name: "Ramprit Sahani",
      email: "Rampritsahani@gmail.com",
      contact: "9867405720",
      address: "Mumbai"
    },
    {
      name: "Anita Sahani",
      email: "Anitasahani@gmail.com",
      contact: "9867405720",
      address: "Mumbai"
    }
  ];
  res.status(200).json({
    message: "Employee retrived sucessfully",
    employees: employees
  });
});

/* POST users listing. */
router.post("/", function(req, res, next) {
  const employee = req.body;
  res.status(201).json({
    message: "Post saved sucessfully !"
  });
  console.log(employee);
});

module.exports = router;
