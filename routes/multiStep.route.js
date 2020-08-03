const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const MultiStep = require("../models/multiStepForm.model");

// route        GET /career
// description  Register to career
// access       Public
router.get("/", (req, res) => {
  MultiStep.find((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  MultiStep.findById(id, (err, multistep) => {
    res.json(multistep);
  });
});

// route        POST /career
// description  Register to career
// access       Public

//another way of code for insert
// router.post('/', (req, res) => {
//     const career = new Career(req.body);
//     career.save((err, data) => {
//         if (err) {
//             res.send(err);
//         }
//         else {
//             res.send({ data: "Form Added Successfully" });
//         }
//     });

// });

router.post("/add", (req, res) => {
  const multistep = new MultiStep(req.body);
  multistep
    .save()
    .then((multistep) => {
      res.status(200).json({ multistep: "Form Added Successfully" });
    })
    .catch((err) => {
      res.status(400).send("Form added failed");
    });
});

router.post("/update/:id", (req, res) => {
  MultiStep.findById(req.params.id, (err, multistep) => {
    if (!multistep) {
      res.status(404).send("Data not found");
    } else {
      multistep.firstName = req.body.firstName;
      multistep.lastName = req.body.lastName;
      multistep.email = req.body.email;
      multistep.occupation = req.body.occupation;
      multistep.city = req.body.city;
      multistep.bio = req.body.bio;

      multistep
        .save()
        .then((multistep) => {
          res.json("Career updated Successfully");
        })
        .catch((err) => {
          res.status(400).send("Update not possible");
        });
    }
  });
});

// route        DELETE /career
// description  Delete a career
// access       Public
//another way of code for delete
// router.post('/', (req, res) => {
//     Career.remove({_id: req.body.id}, (err) => {
//         if(err){
//             res.send(err);
//         }
//         else {
//             res.send({data:"Career deleted Successfully"});
//         }
//     });
// });

router.delete("/delete/:id", (req, res, next) => {
  MultiStep.deleteOne({ _id: req.params.id })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: "Form Deleted Successfully",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
