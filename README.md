> # Getting Started with Create React App

This project is is related to show the random user generator

> ## Available Scripts

In the project directory, you can run:

### `npm run dev`

Run the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

> # Storybook Installation

## Add Storybook:

Use the Storybook CLI to install it in a single command. Run this inside your existing project’s root directory:

### `npx storybook init`

> # Run Storybook:

### `npm run storybook`

It will start Storybook locally and output the address. Depending on your system configuration, it will automatically open the address in a new browser tab, and you'll be greeted by a welcome screen.

> # Install Testing Library

## Next.js with Jest and React Testing Library

### `yarn add -D @testing-library/jest-dom @testing-library/react babel-jest jest`

The project consists of three pages which will displayed in one screen

> ## `Flat SLot`

- Go to the project > src > components > FlatSlot > index.jsx
- in this component i added functionality that is if any one can type flat details with numeric and click enter the data will show in the upper box

> ## `FlatSlotInfo`

- The box which is displayed above the input box that is the flatSlotInfo component where the details show after entered

> ## `Parking SLot`

- Go to the project > src > components > ParkingSLot > index.jsx
- in this component i added functionality that is if any one can type parking details with numeric and click enter the data will show in the upper box

> ## `ParkingSlotDetails`

- The box which is displayed above the input box that is the flatSlotInfo component where the details show with a default text after entered

> ## `Modal`

- Go to the project > src > components > Modal
- In the modals components it has two other components inside it. The first one is locallistingModal and the second is saveallocationModal. Modal basically show the message when try to do something wrong with screen.

> ## `locklistingModal`-

- Go to the project > src > components > Modal >
- locklistingModal
- When the flat and parking anyone of the data has been empty and you can try to lock that field then it show you the message/alert .

> ## `saveallocationModal`-

- Go to the project > src > components > Modal >
  saveallocation
- When you have no data to save and you are try to save it then a message is displayed in that condition which has come with the help of saveallocation modal.

> ## `ResetListing`

- Go to the project > src > components > ResetListing
- when you are think about clear delete try the reset button to clear all data.

> ## `AlotSlot`

- If the data is present in both the flat and parking slot table then you can easily press the alot slot button and then the data will be displayed on the allotted page.

> ## Working:

```diff

+  Enter an flat data in flat slot
+  Enter an parking data in parking slot
+  click on the lock listing to disable input field
+ click on alot slot button data should be display in alotted section
+ Click on saveAllocation to save the data
+ Reset button use to reset all data


```
