var express = require('express');
const path = require('path');
const app = express();
const cors = require('cors')


//
        // const { google } = require('googleapis')
        // const OAuth2Data = require('./cridentials.json')
        // var title, description
        // var tag = []
        // const fs = require('fs')
        // const multer = require('multer')
        // app.set("view engine", "ejs")
        // var name,pic
        // const clientSecret = OAuth2Data.web.client_secret;
        // const clientId = OAuth2Data.web.client_id;
        // const redirectUrl = OAuth2Data.web.redirect_uris[0];
        // const oauth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUrl);
//set up multer//de storage

// var Storage = multer.diskStorage({
//     destination: function (req, file, callback) {
//         callback(null, "./videos");
//     },
//     filename: function (req, file, callback) {
//         callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname)
//     },
// })
// var upload = multer({
//     storage: Storage,
// }).single("file")
// var authed = false



const scopes = ['https://www.googleapis.com/auth/youtube.upload', 'https://www.googleapis.com/auth/userinfo.profile'];




//





const whitelist = ['https://localhost:3000', 'https://localhost:5000', 'https://thongle.herokuapp.com']
const corsOptions = {
    origin: function (origin, callback) {
        console.log("** Origin of request " + origin)
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            console.log("Origin acceptable")
            callback(null, true)
        } else {
            console.log("Origin rejected")
            callback(new Error('Not allowed by CORS'))
        }
    }
}

// --> Add this
app.use(cors(corsOptions))
app.get('/api', (req, res) => {
    var customer = [{
        id: 1, name: 'John', age: '153'
    },
    {
        id: 2, name: 'John', age: '123'
    },
    {
        id: 3, name: 'John', age: '143'
    }];
    res.json(customer);
})
if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server is running on port ${port}'));

// const

// app.get("/video", function (req, res) {
//     if (!authed) {
//         //handl=e generate a auth url
//         var url = oauth2Client.generateAuthUrl({
//             access_type: "offline",
//             scope: scopes

//         })
//         res.render("trangchu", { url: url })
//     }
//     else {
//         //user is authenticated 
//         var oauth2 = google.oauth2({
//             version: 'v2',
//             auth: oauth2Client
//         })
//         console.log("haha")
//         oauth2.userinfo.get(function (err, response) {
//             if (err) throw err
//             console.log(response.data)
//              name = response.data.name
//              pic = response.data.picture
//             res.render("index", { name: name, pic: pic, success: false })
//         })
//     }
//     console.log(url)
// })

// app.get('/google/callback', (req, res) => {
//     //excane code with access token
//     const code = req.query.code
//     if (code) {
//         oauth2Client.getToken(code, function (err, tokens) {
//             if (err) throw err
//             console.log("sucessffulle authenticated", tokens)
//             oauth2Client.setCredentials(tokens)
//             authed = true
//             res.redirect('/video')
//         })
//     }
// })
// app.post("/upload", (req, res) => {
//     upload(req, res, function (err) {
//         if (err) throw err
//         console.log(req.file.path)
//         title = req.body.title
//         description = req.body.description
//         tags = req.body.tags
//         console.log(tags, title, description)
//         const youtube = google.youtube({
//             version: 'v3',
//             auth: oauth2Client
//         })
//         //call youtube appi
//         youtube.videos.insert({
//             resource: {
//                 snippet: {
//                     title: title,
//                     discription: description,
//                     tags: tags,

//                 },
//                 status: {
//                     privacyStatus: "private",

//                 },
//             },
//             part: 'snippet,status',
//             media: {
//                 body: fs.createReadStream(req.file.path)

//             }
//         }, (err, response) => {

//             // return new Promise((resolve, reject) => {
//             //     console.log("Uploading video done")
//             // }).then(() => {
//             //     console.log("path", req.file.path)
//             //     fs.unlinkSync(req.file.path)
//             //     res.render("success", { name: name, pic: pic, success: true })
//             //     //delete video from video folder

//             // })
//             //     .catch(err => {
//             //         throw err
//             //     })
//             if (err) {
//                 console.log('The API returned an error: ' + err);
//                throw err
//               }
//             console.log({data:response});
//                 console.log(req.file.path)
//             console.log("path", req.file.path)
//                      fs.unlinkSync(req.file.path)
//                     res.render("success", { name: name, pic: pic, success: true })
//         }
//         )
//     })
// })
// //make the layout route 
// app.get('/logout', (req, res) => {
//     authed = false
//     res.redirect('/')
// })
// //