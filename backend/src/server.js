
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const verifyToken = require("./middleware/authMiddleware");

const adminOnly = require("./middleware/adminMiddleware");

const assetRoutes = require("./routes/assetRoutes");

const bookingRoutes =
require("./routes/bookingRoutes");

const issueRoutes =
require("./routes/issueRoutes");

const dashboardRoutes =
require("./routes/dashboardRoutes");

const auditRoutes =
require("./routes/auditRoutes");

const notificationRoutes =
require("./routes/notificationRoutes");

const maintenanceRoutes =
require("./routes/maintenanceRoutes");

const path =
require("path");

const db = require("./config/db");

console.log("Loading auth routes...");

const authRoutes =
  require("./routes/authroutes")

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/assets", assetRoutes);

app.use(
  "/api/bookings",
  bookingRoutes
);

app.use(
"/api/issues",
issueRoutes
);

app.use(
"/api/dashboard",
dashboardRoutes
);

app.use(
"/api/audit",
auditRoutes
);

app.use(
"/api/notifications",
notificationRoutes
);

app.use(
"/api/maintenance",
maintenanceRoutes
);

app.use(
"/uploads",
express.static(
path.join(
__dirname,
"uploads"
)
)
);

app.get("/", (req, res) => {
  res.send("PRANATHI_BACKEND_999");
});

const PORT =
  process.env.PORT || 5001

app.get(
  "/api/admin-test",
  verifyToken,
  adminOnly,
  (req, res) => {
    res.json({
      message: "Welcome Admin"
    });
  }
);

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});

app.get(
  "/api/protected",
  verifyToken,
  (req, res) => {
    res.json({
      message: "Protected Route Accessed",
      user: req.user,
    });
  }
);

