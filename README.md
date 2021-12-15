# Sportsee
Project 12 of Open Classrooms "Front-end Developer programme"

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

## Develop a Dashboard for Analytics with React


Create the consumer-facing dashboard of a sports analytics platform, SportSee. The objectives of the project are to build charts with React and use an API to fetch data. 

Here I used the chart library [Recharts](https://recharts.org/en-US/) to generate the graphs.

# Prerequisites
- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/) for the API
- [NPM](https://www.npmjs.com/) for the app itself
- Backend API accessible on [P12-backendAPI](https://github.com/Priscille-LR/P12-backendAPI)

# Installation
- First, follow the instructions to install and run the backend API on [P12-backendAPI](https://github.com/Priscille-LR/P12-backendAPI)

- Clone this repository on your computer then open the folder
- Install the dependencies with `npm install`
- Run the app with `npm start`

# Configuration 
- To use the API, go to `src/Service/Dependencies` and change `new MockedData()` to `DataFromAPI()`
- To switch between the two user profiles available (12 or 18), go to `package.json` and modify the environment variable - it's set to 12 by default.

# Documents

Find the app mock-up on [Figma](https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?node-id=1%3A2)

The Kanban board with the User Stories for the project is accessible on [Notion](https://www.notion.so/Tableau-de-bord-SportSee-6686aa4b5f44417881a4884c9af5669e)


