<div align="center">

# Alibi Esports ![Alibi Esports](https://img.shields.io/badge/Alibi%20Esports-white?style=for-the-badge)

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

[Features](#features) •
[Screenshots](#screenshots) •
[Tech Stack](#tech-stack) •
[Packages](#packages)

</div>

## Features

This website serves as a medium for the esports organization, Alibi Esports, and their player base. The organization reaches out to communities and provides them with a competitive outlet for trending games. 

- An all-in-one platform for the organization and players to exchange information
- There is a scrollable landing page that explains what the company is about and what they strive to achieve through this organization
- Players can sign up for tournaments via the Register button, where they can input all of their team information including up to five players, a coach, a manager, and two subs.
- Players are also able to browser previous and upcoming tournaments on the tournaments page where the participating teams and final placements are displayed

## Landing Demo

<p align="center">
    <img src="/images/landing-gif.gif" width="738" />
</p>


## Screenshots

<h3 align="center">Landing Page<h3>

<p align="center">
    <img src="./images/alibiesports_landing.PNG" alt="alibi esports landing page" width="738">
</p>

<h3 align="center">Team Registration Page<h3>

<p align="center">
    <img src="./images/alibiesports_forms.PNG" alt="alibi esports form page" width="738">
</p>


## Tech Stack

| Tech Name  | Home Page               |
| ---------- | ----------------------- |
| Node.js    | <https://nodejs.org/en/>   |
| React      | <https://reactjs.org/>  |
| Express.js | <https://expressjs.com/>  |
| PostgreSQL | <https://www.postgresql.org/> |
| Sequelize  | <https://sequelize.org/> |


## Packages

| Package Name      | Home Page                        |
| ----------------- | -------------------------------- |
| Axios             | <https://axios-http.com/docs/intro/>    |
| Aos               | <http://michalsnik.github.io/aos/>            |
| Letterize.js      | <https://github.com/WojciechKrakowiak/letterize/>         |

## Lessons Learned
<p>
One of the first things one might ask when checking out this repo is, "Why is the frontend and backend split?"
Now there are two main reasons for that.
1. I had no idea how to combine the two into one deployment (I do now)
2. That conveniently let me avoid the spin down time on Render's deployment for web services on initial load. So, loading up the page doesn't take 30+ seconds, but a request (like a team registration) will require the backend to spin back up. More on this in my learn more section!
</p>
<p>
As my first website put into production and the sole developer of this project, there were a lot of obstacles I had to overcome to get this site to work. One of the biggest difficulties I'd like to talk about is developing with responsive web design in mind. I was still getting the hang of the front end technology (HTML & CSS) and found myself having trouble accounting for smaller screen sizes. 
</p>
<p>
Another quick lesson I learned, was that there are many great deployment websites that I can use for free fullstack project deployments. I had a bit of an issue with Render, because any web services will spin down after 15 minutes of inactivity. Once a request comes in, the web service has to do what's called a "cold start" and spin back up which can take upwards of 30 seconds. Sites like Netlify, Vercel, and Cyclic are all options I will consider in the future as I continue to develop websites. 
</p>
<p>
Through a lot of Googling and looking at a ton of Stack Overflow posts, I was able to learn an insane amount in the short timespan of this project. This website was created for an organization and the deadline was in less than a week's time. While the timespan was short, this project logged me upwards of 80+ hours where I learned how to handle obstacles like, CSS animations, React useState hell (form handling for 7+ people and 4-6 fields each in a single form is no joke!), Express custom middleware (loggers and error handlers), and overall mainly improving my front end development skills.
</p>
<p>
Is this the best I can do? Absolutely not. I already feel like I could immensely improve countless things, but as my first step into professional web development, I will definitely look back on this fondly as I continue to improve my skills.
</p>
