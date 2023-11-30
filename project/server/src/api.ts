import express from "express";
const router = express.Router();

router.use(`/users`, require(`./routes/users.ts`));

module.exports = router;
