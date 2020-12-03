const router = require("express").Router();
const authRoutes = require("./routes/auth");

const userRoutes = require("./routes/user");
const transferRoutes = require("./routes/transfer");
const topupRoutes = require("./routes/topup");
const acceptedRoutes = require("./routes/accepted");

router
  .use("/auth", authRoutes)
  .use("/users", userRoutes)
  .use("/transfer", transferRoutes)
  .use("/topup", topupRoutes)
  .use("/accepted", acceptedRoutes);
module.exports = router;
