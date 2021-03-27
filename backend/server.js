const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const sequelize = require('./utils/database');
const contentRoutes = require('./routes/content');
const {google} = require('googleapis');
const axios = require('axios');
const app = express()
const port = process.env.PORT || 3000;
const fb_graph_REACT_APP_API_URL = process.env.FB_GRAPH_REACT_APP_API_URL || "https://graph.facebook.com/v10.0/";


const auth = new google.auth.GoogleAuth({
  keyFile: 'keyfile.json',
  scopes: ['https://www.googleapis.com/auth/androidpublisher'],
});

const reviewer = google.androidpublisher({ 
  version: 'v3',
  auth: auth
})

const fbPageId = async(access_token)=> {
  const response = await axios.get(fb_graph_REACT_APP_API_URL+"me/accounts?access_token="+access_token);
  if (response.data){
    return response.data['data'][0]['id'];
  } else {
    return false;
  }
}

const instaId = async (access_token, fbId) => {
  const response = await axios(fb_graph_REACT_APP_API_URL+ fbId + "?fields=instagram_business_account&access_token=" + access_token);
  if (response.data){
    return response.data['instagram_business_account']['id'];
  } else {
    return false;
  }
}

const allMedia = async (access_token, id) => {
  const response = await axios(fb_graph_REACT_APP_API_URL+ id + "/media?access_token=" + access_token);
  if (response.data){
    return response.data['data'];
  } else {
    return false;
  }
}

const oneMedia = async (access_token, id) => {
  const response = await axios(fb_graph_REACT_APP_API_URL+ id + "/?fields=media_url&access_token=" + access_token);
  if (response.data){
    return response.data['media_url'];
  } else {
    return false;
  }
}

const hashSearch = async (access_token, id, hash) => {
  const response = await axios(fb_graph_REACT_APP_API_URL + "ig_hashtag_search?user_id=" + id + "&q=" + hash + "&access_token=" + access_token);
  if (response.data){
    return response.data['media_url'];
  } else {
    return false;
  }
}

app.use(cors());
app.use(express.json({limit: '50mb'}));

app.use('/api/content', contentRoutes);

app.use("/",express.static(path.join(__dirname, '../pod_admin_panel/build')));
app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../pod_admin_panel/build/index.html'));
});

// app.use("/", express.static(path.join(__dirname, '../pod_website/build')));
// app.get('/', (req,res) => {
//   res.sendFile(path.join(__dirname, '../pod_website/build/index.html'));
// });

// app.use('/', async (req, res, next)=>{
  // const access_token= "EAAPoYEO0TC0BAGJaZBbVGMli0m8FE6h1D3JbyvsH2Th0ajJsdlmHuCi7uXbh0tUgoc4kBZCCKIu7UQTPJV8NjTnw7bMpqrk03hL2hC9JZCLEvZAZCVsvWMtwrUWajWTgf1hBKpScquRYWFU3HoJTZBimdZAmM0bmd9JHcxOEMPRkNyHYEXUUhBzPBd9kKQ1mzYZCD9ERxebki3SLkbAiuXymuGjgQyPqUGUZD";
  // const pageId = await fbPageId(access_token);
  // const id = await instaId(access_token, pageId);
  // const reviewList = await reviewer.reviews.list({packageName: "com.seawindsolution.pod", maxResults: 10});
// })

sequelize.sync().then((res)=>{
  app.listen(port,'0.0.0.0', () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });
}).catch((err)=>{
  console.log(err)
})
