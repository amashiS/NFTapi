const router = require("express").Router();
let Detail = require("../Model/Detail");



// create new detail
router.route("/").post((req, res) => {
    
  const img = req.body.img;
  const txt = req.body.txt;
  const txt1 = req.body.txt1;
  const img1 = req.body.img1;
  const vol = req.body.vol;
  const floor = req.body.floor;
  const best = req.body.best;
  const bid = req.body.bid;
  const end = req.body.end;
  const cat = req.body.cat;
  const availability = req.body.availability;


 
  const newDetail = new Detail({
    img,
    txt,
    txt1,
    img1,
    vol,
    floor,
    best,
    bid,
    end,
    cat,
    availability
  });

  newDetail
    .save()
    .then(() => {
      res.json("Detail added");
    })
    .catch((err) => {
      console.log(err);
    });
});

// get all data
router.route("/").get((req, res) => {
    Detail.find()
    .then((details) => {
      res.json(details);
    })
    .catch((err) => {
      console.log(err);
    });
});



// get exersice by id

router.get("/:id", (req, res) => {
  const detailId = req.params.id;

  User.findById(detailId)
    .then((detail) => {
      if (!detail) {
        return res.status(404).send("Detail not found");
      }
      res.send(detail);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.delete("/:id", (req, res) => {
  const detailId = req.params.id;

  User.findByIdAndDelete(detailId)
    .then((detail) => {
      if (!detail) {
        return res.status(404).send("detail not found");
      }
      res.send("detail deleted successfully");
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.put("/:id", (req, res) => {
  const detailId = req.params.id;
  
  // Assuming your Exercise model is imported correctly
  Detail.findByIdAndUpdate(detailId, req.body, { new: true })
    .then((updatedDetail) => {
      if (!updatedDetail) {
        return res.status(404).send("Detail not found");
      }
      res.json(updatedDetail);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});



module.exports = router;
