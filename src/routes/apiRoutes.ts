import express from "express";
import personController from "../controller/personController";

const router = express.Router();

router.post("/", personController.createPerson);
router.get("/:param", personController.getPerson);
router.put("/:userId", personController.updatePerson);
router.delete("/:userId", personController.deletePerson);

export default router;
