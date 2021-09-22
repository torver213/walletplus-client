# About this project
This is the client side implementation of a wallet aplication where users can be able to fund their wallet accounts and also earn points per each transaction from $5000 and above. This project is implemented with typescript and nodejs. This app uses react hooks and context api for state management.

# How points are earned

 1. Transactions from **$5,000 - $10,000** earn *1%*
 2. Transactions from **$10,001 - $25,000** earn *2.5%*
 3. Transactions from **$25,0001 above** earn *5%*
 Note: The maximum amount allowed per account is **$1,000,0000**

 ## Features of this wallet app include;

 1. Users can create accounts
 2. Users can sign in
 3. Users can fund their wallets
 4. Users can withdraw
 5. Users can transfer
 6. Users can send money from user to user
 7. Users can change their wallet pin
 8. Users can view their transaction records
 9. Users can view their profiles
 10. Admin users can view all users and all transaction records
 11. Sending of mail after account creation

## Performance

To improve the performance of our app and limit the number of database calls, a ***cache mechanism*** has been implemented on the server side using `cache-manager` library to cache all the get endpoints which readily increased the performance of our app by more than ***99%***.

## Security features include on the server-side;

 1. Use of `helmet` to set the correct headers for security purposes
 2. Use of `compression` to compress the size of resources returned
 3. Use of `cors` to limit api access restricted domains
 4. Use of `express-validator` to validate all inputs sent to the server
 5. Use of `express-rate-limit` to limit the number of requests through some public endpoints
 6. Use of `cookie-parser` parse all the cookies sent to the server
 7. Some route are restricted based on user's role

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Want To See This Project In Action?

This is project is hosted live on heroku. *A demo is worth a thousand words*. Visit [Demo](https://walletplus.supatechie.ga)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
