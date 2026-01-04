const Case = require('../models/Case');

// Get cases with filters
exports.getCases = async (req, res) => {
  try {
    const { village, name, theftType } = req.query;
    let filter = {};

    if (village && village != 'All') filter.village = village;
    if (name) filter.name = { $regex: name, $options: 'i' };
    if (theftType && theftType != 'All') filter.theftType = theftType;

    const cases = await Case.find(filter);
    res.status(200).json(cases);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// Add a new case
// exports.addCase = async (req, res) => {
//   try {
//     const newCase = new Case(req.body);
//     await newCase.save();
//     res.status(201).json(newCase);
//   } catch (err) {
//     res.status(500).json({ error: 'Server Error',err });
//   }
// };

// Edit a case (Admin only)
// exports.editCase = async (req, res) => {
//   if (req.user.role !== 'admin') {
//     return res.status(403).json({ error: 'Unauthorized' });
//   }
//   try {
//     const updatedCase = await Case.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.status(200).json(updatedCase);
//   } catch (err) {
//     res.status(500).json({ error: 'Server Error' });
//   }
// };

// Delete a case (Admin only)
exports.deleteCase = async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Unauthorized' });
  }
  try {
    await Case.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Case deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};



// Add Case (with Image Upload)
exports.addCase = async (req, res) => {
  try {
    const { name, division, village, crimeType, subType, section, description, date, address, aadhar, mobile } = req.body;

    const photoPath = req.file ? `/uploads/${req.file.filename}` : null; // Store file path

    const newCase = new Case({
      name,
      division,
      village,
      crimeType,
      subType,
      section,
      description,
      date,
      address,
      aadhar, 
      mobile,
      photo: photoPath
    });

    await newCase.save();
    res.status(201).json(newCase);
  } catch (err) {
    res.status(500).json({ error: "Server Error", err });
  }
};

// Edit Case (with Image Upload)
exports.editCase = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ error: "Unauthorized" });
    }

    const { name, division, village, crimeType, subType, section, description, date, address } = req.body;

    const updatedData = {
      name,
      division,
      village,
      crimeType,
      subType,
      section,
      description,
      date,
      address
    };

    if (req.file) {
      updatedData.photo = `/uploads/${req.file.filename}`;
    }

    const updatedCase = await Case.findByIdAndUpdate(req.params.id, updatedData, { new: true });

    res.status(200).json(updatedCase);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};