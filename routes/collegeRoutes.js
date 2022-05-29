const express = require("express");
const router = express.Router();

const authenticateToken = require("../middlewares/authenticateToken");
const {validateSignupRequest, validateSigninRequest, isRequestValidated} = require("../middlewares/validator");

const collegeSignup = require("../controllers/collegeSignup");
const collegeLogin = require("../controllers/collegeLogin");
const getCollegeProfile = require("../controllers/getCollegeProfile");
const upload = require("../utils/multer");
const updateCollegeProfile = require("../controllers/updateCollegeProfile");

const addPlacement = require("../controllers/addPlacement");
const deletePlacement = require("../controllers/deletePlacement");
const getAllCompany = require("../controllers/getAllCompany");
const getAllCompanyJobs = require("../controllers/getAllCompanyJobs");
const searchCompany = require("../controllers/searchCompany");
const { applyforCompany, appliedJobs } = require("../controllers/applyforCompany");


router.post('/register', validateSignupRequest, isRequestValidated, collegeSignup);

router.post('/login', validateSigninRequest, isRequestValidated, collegeLogin);

router.get('/profile', authenticateToken, getCollegeProfile);

router.patch('/update/profile', authenticateToken, upload.single("profileImg"), updateCollegeProfile);

router.post('/addPlacement', authenticateToken, upload.single("studentImage"), addPlacement);

router.delete('/deletePlacement/:id', authenticateToken, deletePlacement);

router.get('/getAllCompany', authenticateToken, getAllCompany);

router.get('/getAllCompany/jobs/:id', authenticateToken, getAllCompanyJobs);

router.get('/searchCompany', authenticateToken, searchCompany);

router.post('/applyforCompany/:jobid', authenticateToken, applyforCompany);

router.get('/appliedJobs', authenticateToken, appliedJobs);

module.exports = router;