const router = require("express").Router();
let Transaction = require("../Model/Transaction");



// create new Transaction
router.route("/").post((req, res) => {
    
  const img = req.body.img;
  const coin = req.body.coin;
  const dollar = req.body.dollar;
  const percentage = req.body.percentage;
  const number = req.body.number;
  const type = req.body.type;



 
  const newTransaction = new Transaction({
    img,
    coin,
    dollar,
    percentage,
    number,
    type
    
  });

  newTransaction
    .save()
    .then(() => {
      res.json("Transaction added");
    })
    .catch((err) => {
      console.log(err);
    });
});

// get all data
router.route("/").get((req, res) => {
    Transaction.find()
    .then((transactions) => {
      res.json(transactions);
    })
    .catch((err) => {
      console.log(err);
    });
});



// get Transaction by id

router.get("/:id", (req, res) => {
  const transactionId = req.params.id;

  Transaction.findById(transactionId)
    .then((transaction) => {
      if (!transaction) {
        return res.status(404).send("Transaction not found");
      }
      res.send(transaction);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.delete("/:id", (req, res) => {
  const transactionId = req.params.id;

  Transaction.findByIdAndDelete(transactionId)
    .then((transaction) => {
      if (!transaction) {
        return res.status(404).send("Transaction not found");
      }
      res.send("transaction deleted successfully");
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.put("/:id", (req, res) => {
  const transactionId = req.params.id;
  
  // Assuming your Exercise model is imported correctly
  Transaction.findByIdAndUpdate(transactionId, req.body, { new: true })
    .then((updatedTransaction) => {
      if (!updatedTransaction) {
        return res.status(404).send("Transaction not found");
      }
      res.json(updatedTransaction);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});



module.exports = router;
