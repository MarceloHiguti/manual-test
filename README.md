# Manual.co landing page

### Author: Marcelo Higuti

This web application is using Next.js as a React framework, Typescript and SASS. It displays a landing page with a quiz for the user known better Manual.co services.

## Installation

This app requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and start the app.

```sh
cd manual-test
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

The quiz is using data from this API

```sh
https://manual-case-study.herokuapp.com/questionnaires/972423.json
```

Feel free to modify the questions on the quiz and see it dynamically changing. (Please just keep the structure of the JSON)

## Summary

- Server side rendering was used to improve SEO for users find Manual.co services easier by searching on the internet.
- This application is responsive for web and mobile, resize the page and check the result.
- The quiz has a modification including a stepper component with buttons to go back or to next step, making it easier for the user navigate, change the responses and see the helper message depending on the answers.
