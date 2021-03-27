const express = require('express');

const aboutController = require('../controllers/about');
const contactController = require('../controllers/contact');
const homeController = require('../controllers/home');
const planController = require('../controllers/plan');
const podianController = require('../controllers/podian');
const serviceController = require('../controllers/service');
const urlsController = require('../controllers/urls');
const whypodController = require('../controllers/whypod');
const socialController = require('../controllers/social');
const userController = require('../controllers/user');

const router = express.Router();

const authenticateToken = (req, res, next) => {
    // const authHeader = req.headers['authorization']
    // const token = authHeader && authHeader.split(' ')[1]
    // if (token == null) return res.sendStatus(401)
    // jwt.verify(token, secret, (err, user) => {
    //   console.log(err)
    //   if (err) return res.sendStatus(403)
    //   req.user = user
    //   next()
    // })
    next()
  }

// For Home Content
router.get("/home", homeController.getHome );
router.post("/home",authenticateToken, homeController.postHome);
router.put("/home", authenticateToken,homeController.putHome);
router.delete("/home", authenticateToken,homeController.deleteHome);
 
// For About Content
router.get("/about", aboutController.getAbout );
router.post("/about",authenticateToken, aboutController.postAbout);
router.put("/about",authenticateToken, aboutController.putAbout);
router.delete("/about", authenticateToken,aboutController.deleteAbout); 

// // For contact Content
router.get("/contact",  authenticateToken, contactController.getContact );
router.post("/contact", contactController.postContact);
router.put("/contact", authenticateToken,contactController.putContact);
router.delete("/contact", authenticateToken,contactController.deleteContact);

// // For plan Content
router.get("/plan", planController.getPlan );
router.post("/plan", authenticateToken,planController.postPlan);
router.put("/plan", authenticateToken,planController.putPlan);
router.delete("/plan", authenticateToken,planController.deletePlan);

// // For podian Content
router.get("/podian", podianController.getPodian );
router.post("/podian", authenticateToken,podianController.postPodian);
router.put("/podian", authenticateToken,podianController.putPodian);
router.delete("/podian", authenticateToken,podianController.deletePodian);

// // For service Content
router.get("/service", serviceController.getService );
router.post("/service", authenticateToken,serviceController.postService);
router.put("/service", authenticateToken,serviceController.putService);
router.delete("/service", authenticateToken,serviceController.deleteService);

// // For urls Content
router.get("/urls", urlsController.getUrls );
router.post("/urls", authenticateToken, urlsController.postUrls);
router.put("/urls", authenticateToken,urlsController.putUrls);
router.delete("/urls", authenticateToken,urlsController.deleteUrls);

// // For whypod Content
router.get("/whypod", whypodController.getWhypod );
router.post("/whypod",authenticateToken, whypodController.postWhypod);
router.put("/whypod", authenticateToken, whypodController.putWhypod);
router.delete("/whypod", authenticateToken, whypodController.deleteWhypod);


// // For social media integration
router.get("/social", socialController.getSocial );
router.post("/social",authenticateToken, socialController.postSocial);
router.put("/social", authenticateToken, socialController.putSocial);
router.delete("/social", authenticateToken, socialController.deleteSocial);


// // For social media integration
router.get("/user", userController.getAllUser);
router.post("/user",authenticateToken, userController.postUser);
router.put("/user", authenticateToken, userController.putUser);
router.delete("/user", authenticateToken, userController.deleteUser);

// Login

router.post("/user/login",authenticateToken, userController.login);

module.exports = router;