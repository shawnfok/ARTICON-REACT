[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/hjlogique/ARTICON-REACT?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/hjlogique/ARTICON-REACT?style=flat&logo=appveyor)
  
# ARTICON-REACT (Group Project 3)

  ## Description 

   Articon is a React-based app which helps support the unsupported artists. It enables artists to create their own accounts and upload their artworks to a showroom, allowing them to join several different art contests. The app then lets art supporters to vote for the best artworks they think the best.
   
   Some of the features of the app like updating the content of the showroom, announcing the winner of the hour and email generation to the winner of the contest are still in progress, and placeholders are included in the app. 

   Our special thanks go to [Shama Hoque](https://github.com/shamahoque). This app is created based on her [merin-social](https://github.com/shamahoque/mern-socialcreated) app.
  

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Questions](#questions)
  * [License](#license)
  

  ## Installation

  To run this app, first make sure `MongoDB` is running on your system, and it is connected to your `Localhost`. Now you need to install all the dependencies by running the `npm install` command in your integrated terminal at the root directory of the project. Once all the dependencies are installed, run the `npm run development` command to start the application, and open it at [localhost:3000](http://localhost:3000/) in the browser. To build this `MERN` application, `ReactJS`, `JavaScript`, `NodeJS`, `Express`, `Webpack`and `MongoDB` are used. The main dependencies are as follows:

  * `Express.js`
  * `Babel`
  * `File-loader`
  * `Nodemon`
  * `Webpack`
  * `Repack-hot-loader`
  * `Material-UI`
  * `Compression`
  * `Body-Parser`
  * `Cookie-Parser`
  * `Cors`
  * `Formidable`
  * `Helmet`
  * `Jsonwebtoken`
  * `Lodash`
  * `Mongoose`
  * `React-router`
  * `React-router-dom`


  ## Usage 
   
   Once the app is up and running, on the main page, users can sign up as a new member or sign in as an existing one to the app. After signing in, they land on the `Home` page where they can post comments, upload their artworks, view other artist's comments, artworks and vote for them. Here the current `winner of the contest` is also announced. 
   
   On the `My Profile` page users can edit their profiles, like changing their names, and uploading their pictures and artworks. They can also view their posted comments and artwork, the artists they voted for and the artists who voted for them. Here they can also delete the atists they voted for. 
   
   Next is the `Showroom` page, where a gallery of all submitted artworks to the `Cloudinary` server is presented. All artworks are labeled with the names of their artists. To upload artworks to the `Cloudinary` server, another React app is used. It created and stored secure URLs for all uploaded images on the `Cloudinary` server, which was used to display artworks in the `Showroom` page of this app.  

   And finally users have the option to sign out.

   This app is deployed to `Heroku` and all user information is stored in `MongoDB` under the `users` collection. All uploaded images are stored in the `binary` format in the `Posts` collection.
   
   [Click here to go to the app on Heroku.](https://afternoon-shelf-11522.herokuapp.com) Depending on the network speed, it might take a couple of seconds for the app to load.
   
   The following images display the `main`, `Home`,  `My Profile` and `Showroom` pages:
   
  ![image 1](/screenshots/img1.png)

  ![image 2](/screenshots/img2.png)

  ![image 3](/screenshots/img3.png)

  ![image 4](/screenshots/img4.png)


  ## Contributions

  The members of the team are as follows:

  Front-end:
  * `Aditya Seshadri: Data Seed, Content, Web Design`
  * `Mohammed Arafat: Mockup, Presentation, Web Design, Concept of the App`
  * `Shawn Fok: Content, Task List, Graphic Design, Web Design, Logo`
  
  Back-end:
  * `Henry Logique: Web Development, Heroku Deployment, API, Database, Repository`
  

  ## Questions
  
  [Link to my GitHub profile](https://github.com/hjlogique)

  If you have any questions, please contact me via email:
  
  Email: hjlogique@yahoo.com
  

  ## License
  
  MIT License
