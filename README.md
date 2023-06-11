# King Makers

![king-makers](./king-makers.png)

## Installation

Clone the app:
```
git clone git@github.com:salis010/king-makers.git
```
Install packages:
```
npm i
```
Start
```
npm run start
```
Go to `localhost:4000` in a browser.

## Tech Stack
- React
- TypeScript
- Redux(toolkit)
- Tailwind
- Express
- Webpack

## Features

### AddCampaigns

To test the `AddCampaigns` function from the browser's console, please use the `testCampaigns` array available at 'src/App.tsx' or a similar array.

### Number of Campaigns

Campaigns are generated randomly (and asynchronously). The number of campaigns generated can be altered by editing the below ('src/constants.ts'):
```
export const NUMBER_OF_CAMPAIGNS = 100
```

## Suggested Improvements

- pagination
- responsiveness: the app should cater for smaller screens too
- unit testing and integration testing
