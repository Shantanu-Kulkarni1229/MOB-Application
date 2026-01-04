require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Basic route for testing
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use('/api/auth', require('./routes/auth'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/police', require('./routes/police'));
app.use('/api/cases', require('./routes/caseRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/dashboard', require('./routes/dashboardRoutes'));
app.use('/api/divisions', require('./routes/divisionRoutes'));
app.use('/api/villages', require('./routes/villageRoutes'));
app.use('/api/crime-types', require('./routes/crimeTypeRoutes'));
app.use('/api/sub-crime-types', require('./routes/subCrimeTypeRoutes'));
app.use('/api/logs', require('./routes/logRoutes'));
app.use("/uploads", express.static("uploads"));


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});