# :dancer: Dance-With-Me HYF Graduation Project

>This repository is created for the final project of **[Hack Your Future Belgium](https://hackyourfuture.be/)** **Frontend Development Program** and build by *HTML5, CSS3, Bootstrap, MongoDB, Express, NodeJS and ReactJS (**MERN Stack***).
One of the main outcomes of this project is figuring out how to create, explore and run a web application in a development environment, then deploying it to the production environment in accordance with **Test-Driven-Development(TDD)** approach. 

> **Dance-With-Me** application matches the users in accordance with their preferences (location, gender, age, weight and height) and show the events in which they can enjoy together.

>Our main goal was not to deliver fully-featured web application, but instead to create a minimum viable product in 4 weeks. We had to work in an environment where Covid-19 measures were in place. That means, we had to work remotely, but that shouldn't hamper our development process. In order to overcome the side-effects of remote working, we set-up daily working sessions between team members and used the benefit of collaborative coding.  

> At the very beginning, our biggest challenge was setting-up the environment for **Continuous Integration and Continuous Deployment (CI/CD)**. Once this was in place, we managed to progress smoothly. Of course, as every developer we stucked a lot ;) We spent hours in exploring documentations, StackOverFlow and so on which only improved our soft skills!  

>You may find the details of our project in the following lines. We are aware of the fact that there is so much room to be improved in this project, like establishing connections between the matched users (similar in Instagram, Facebook), uploading pictures of the users, setting-up email authentication and so on. You are more than welcomed to contribute in this project by opening an issue or sending a pull request. **We are stronger together!** 

---
## Index
* [Learning Objectives and Supported Skills](#learning-objectives-and-supported-skills)
* [Setup Environment](#setup-environment)
	* [Installation](#installation)
	* [Running Application](#running-application)
  	* [Usage](#Usage)
* [Technology-Tool-Stack](#technology-tool-stack)
* [Contributing](#contributing)
* [License](#credits)

---

## Learning Objectives and Supported Skills
* Creating a user friendly React Application (using Functional/Class Bases Components and Hooks)
* Building wireframes, mocks and prototype of pages
* Setting up a professional folder structure
* Understanding Test-Driven-Development(TDD)
* Implementing Continuous Integration and Continuous Deployment (CI/CD)
* Using GitHub Project Board as project management tool
* Setting up NodeJS and database connection
* Setting up cloud database environment
* Setting up API endpoints
* Setting up user authentication in NodeJS
* Debugging React code in IDE
* Exploring and understanding DOM
* Understanding code which is written by your team mate

---
## Setup Environment

### installation:
- Clone Develoment Master Branch of this repo
- Install all Backend dependencies in **/DanceWithMe** folder --> run **npm install** in the terminal
- Install all Frontend dependencies in **/DanceWithMe/client** folder --> run **npm install** in the terminal
- Create a folder named **config** under **/API** folder
- Create a file named **.env** under **config** folder
- Add environment variables (**MONGODB_PSWD, JWT_SECRET and SENDGRID_API_KEY**) in this file

### running-application
  In the root folder **/DanceWithMe**,
  - To run both backend and frontend --> run **npm run dev** in the terminal
  - To run only backend --> run **npm run dev-api** in the terminal
  - To run only frontend -->run **npm run dev-client** in the terminal
  
### usage
**Landing Page**
![](https://github.com/Mert1980/DanceWithMe/blob/Development_Master/client/public/images/landing.png?raw=true)

**Sign Up**
![](https://github.com/Mert1980/DanceWithMe/blob/Development_Master/client/public/images/signup.png?raw=true)

**Sign In**
![](https://github.com/Mert1980/DanceWithMe/blob/Development_Master/client/public/images/signin.png?raw=true)

**Profile Page**
![](https://github.com/Mert1980/DanceWithMe/blob/Development_Master/client/public/images/profilePage.png?raw=true)

## Technology-Tool-Stack
- **NodeJS** : Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm,[6] unifying web-application development around a single programming language, rather than different languages for server- and client-side scripts.
- **MongoDB Atlas** : Cloud-hosted MongoDB service on AWS, Azure and Google Cloud. With MongoDB Atlas, your self-healing clusters are made up of geographically distributed database instances to ensure no single point of failure. MongoDB Atlas makes it easy to control access to your database. Your database instances are deployed in a unique Virtual Private Cloud (VPC) to ensure network isolation.
- **MongoDB Compass**: The GUI for MongoDB. Visualize, understand, and work with your data through an intuitive GUI. Modify your data with a powerful visual editing tool. Understand performance issues with visual explain plans, view utilization and manage your indices.
- **Mongoose** : Provides a straight-forward, schema-based solution to model our application data. It includes built-in type casting, validation, query building.
- **ExpressJS** : Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.[3] It has been called the de facto standard server framework for Node.js.
- **JWT** : JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.
- **Bcrypt** : Bcrypt is a password hashing function designed by Niels Provos and David Mazières, based on the Blowfish cipher, and presented at USENIX in 1999. The bcrypt function is the default password hash algorithm for OpenBSD[2] and other systems including some Linux distributions such as SUSE Linux.
- **React** : React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.
- **Axios** : Axios is a Javascript library used to make HTTP requests from node.js or XMLHttpRequests from the browser that also supports the ES6 Promise API. 
- **Bootstrap** : Bootstrap is a potent front-end framework used to create modern websites and web apps. It's open-source and free to use, yet features numerous HTML and CSS templates for UI interface elements such as buttons and forms. Bootstrap also supports JavaScript extensions.

---

## Contributing
   - You are more than welcomed to contribute in this project by opening an issue or sending a pull request.
---

## License
   - HackYourFuture-Belgium


