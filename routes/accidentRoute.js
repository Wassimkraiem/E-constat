const express = require("express");
const authController = require("../controllers/authController");
const accidentController = require("../controllers/accidentController");

const router = express.Router();

router.use(authController.protect);
router
  .route("/")
  .get(accidentController.getAllAccident)
  .post(authController.restrictTo("admin"), accidentController.createAccident);

router
  .route("/:id")
  .get(accidentController.getaccident)
  .patch(authController.restrictTo("admin"), accidentController.updateAccident)
  .delete(
    authController.restrictTo("admin"),
    accidentController.deleteAccident
  );

module.exports = router;
