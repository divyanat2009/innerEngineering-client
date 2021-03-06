# Inner Engineering App
This app can be best viewed at : https://inner-engineering-client.divyanat2009.vercel.app/

## API
innerEngineering-server
Deployed at : https://evening-hamlet-53264.herokuapp.com/

## Summary
Inspired by my mother and sister, this repo contains the files for an app created to motivate and inspire users to take care for themselves and keep a track of daily activities.
Users can create a user and login to view all daily selfcare and gratitude, set goals for themselves, and celebrate their progress.

## API Documentation
#### Users
*GET '/api/users to view all users<br/>
*GET '/api/users/:id retrieves user by id<br/>
*POST '/api/users creates a new user account<br/>
#### Selfcares
*GET '/api/selfcares/:id to view all selfcare entries<br/>
*POST '/api/selfcares/:id create a new selfcare entry<br/>
#### Gratitudes
*GET '/api/gratitudes/:id to view all gratitude entries<br/>
*POST '/api/gratitudes/:id to post a new gratitude entry<br/>
#### Moods
*GET '/api/moods/:id to view all mood entries<br/>
*POST '/api/moods/:id to post a new mood entry<br/>
#### Goals
*GET '/api/goals/:id to view all goal entries<br/>
*POST '/api/goals/:id to post a new goal entry<br/>
#### Quotes
*GET '/api/quotes to  view all quotes<br/>
#### Authentication
*POST '/api/auth/login matches given credentials and provides a JWT token

## Demo
### Demo Credentials:
username: jondoe1; password: Passw0rd!

### Landing Page
![LandingPage](https://user-images.githubusercontent.com/69719463/107443259-1dda1100-6afe-11eb-8a99-c741c3a176e1.png)
### User SignUp
![Screenshot (877)](https://user-images.githubusercontent.com/69719463/108766187-7061f700-751a-11eb-81b8-c30a7a7675c4.png)
### USer SignIn
![Screenshot (878)](https://user-images.githubusercontent.com/69719463/108766183-6f30ca00-751a-11eb-9e2c-dbfba6e12800.png)

### Dashboard
![DashboardIE](https://user-images.githubusercontent.com/69719463/107443257-1d417a80-6afe-11eb-9005-485abc3fff7b.png)

### Daily Form
![DailyForm](https://user-images.githubusercontent.com/69719463/107443261-1e72a780-6afe-11eb-85f8-567b637725de.png)

### Goal Form
![GoalForm](https://user-images.githubusercontent.com/69719463/107443251-1c104d80-6afe-11eb-9e36-e1b693ec6d40.png)

### Display List
![WellbeingEntries jpg](https://user-images.githubusercontent.com/69719463/107443256-1ca8e400-6afe-11eb-9303-19686c8ad540.png)

## `npm test`
Launches the test runner in the interactive watch mode.\
npm run test
![Screenshot (924)](https://user-images.githubusercontent.com/69719463/109839851-25786b80-7c0d-11eb-87da-069ee68f61ab.png)

## Built with
React, HTML, CSS, Javascript


