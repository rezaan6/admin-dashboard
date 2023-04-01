# Admin Dashboard

## Table of Contents

- [Description](#description)
- [Tech Stack](#tech-stack)
- [Features](#features-wait-until-gifs-load)
- [Database Structure](#database-structure)
- [Format Configuration](#format-configuration)
- [Folder Structure](#folder-structure)
- [Environment Variables](#environment-variables)

## Description

A React dashboard application built with Create React App that uses MongoDB for database storage and ExpressJS for server-side logic. The application also utilizes Mongoose for database modeling, React Date Picker for handling dates, and Redux Toolkit for state management.

The dashboard provides insights into three main **categories** of information:

- `Client-facing` - This category includes data related to products, customers, transactions, and geographic information. This section of the dashboard is intended to provide a view into how your company is performing from the perspective of your clients.

- `Sales` - This category includes an overview of sales, as well as breakdowns of daily and monthly sales. These views help provide insight into how your business is performing over time and can help identify trends and areas for improvement.

- `Management` - This category includes an admin view, as well as performance metrics. This section of the dashboard is intended for managers to have a high-level view of company performance and manage key aspects of the business.

The React dashboard application utilizes several chart libraries from Nivo to create visualizations for the data. Specifically, it uses the following Nivo chart libraries:

- @nivo/geo for creating geographical maps and charts
- @nivo/line for creating line charts
- @nivo/pie for creating pie charts

These chart libraries provide a variety of customizable chart components and utilities, making it easy to create professional-looking visualizations for the data in the dashboard.

## Tech Stack

- [React](https://reactjs.org/)
- [Create React App](https://create-react-app.dev/)
- [MongoDB](https://www.mongodb.com/)
- [Prettier](https://prettier.io/)
- [Nivo](https://nivo.rocks/)
- [ExpressJS](https://expressjs.com/)
- [Material UI](https://mui.com/)
- [Vercel](https://vercel.com/docs)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [React Date Picker](https://github.com/Hacker0x01/react-datepicker)

## Features (wait until GIFs load)

- Dark and Light Mode
![Light and Dark](https://user-images.githubusercontent.com/72515147/229294523-6a8363d3-63fd-4b39-9278-7122afda9465.gif)

- Download Report
![Download Report](https://user-images.githubusercontent.com/72515147/229294537-0371cfe7-8c0d-4041-afa5-fcf6ed4ca0fb.gif)

- View Summary 
![Dashboard](https://user-images.githubusercontent.com/72515147/229294550-7bd6412f-0651-43a0-836f-e3f19d85823d.gif)

- Minimize side menu
![SideMenu Collapse](https://user-images.githubusercontent.com/72515147/229294557-8a47da23-2f77-4c33-b34a-3484fe420387.gif)

- MUI Data Grid Table, including search, filter, export, pagination, server side rendering and row density options.
![Table](https://user-images.githubusercontent.com/72515147/229295566-f43e9d62-b59b-4b46-9606-93f2ea5ac4fe.gif)

- Nivo Geo Chart
![Geo Chart](https://user-images.githubusercontent.com/72515147/229295202-c489a36c-82fe-4642-8b65-3f6bf4f2eedb.gif)

- Nivo Line Chart
![Line Chart](https://user-images.githubusercontent.com/72515147/229295215-260b9f25-40e2-4482-b9b1-6d4815b56425.gif)

- Nivo Pie Chart
![Pie Chart](https://user-images.githubusercontent.com/72515147/229295253-ff98ce4f-f41b-481f-9dff-c5b83f70803c.gif)

## Database Structure

### MongoDB

- `AffiliateStat.js`

```
    {
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
    affiliateSales: {
      type: [mongoose.Types.ObjectId],
      ref: "Transaction",
    },
  },
  { timestamps: true }

      
```

- `OverallStat.js`

```
    {
    totalCustomers: Number,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [
      {
        month: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
    dailyData: [
      {
        date: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
    salesByCategory: {
      type: Map,
      of: Number,
    },
  },
  { timestamps: true }
      
```

- `Product.js`

```
    {
    name: String,
    price: Number,
    description: String,
    category: String,
    rating: Number,
    supply: Number,
  },
  { timestamps: true }

      
```

- `ProductStat.js`

```
    {
    productId: String,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [
      {
        month: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
    dailyData: [
      {
        date: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
  },
  { timestamps: true }
      
```

- `Transaction.js`

```
 {
    userId: String,
    cost: String,
    products: {
      type: [mongoose.Types.ObjectId],
      of: Number,
    },
  },
  { timestamps: true }
      
```

- `User.js`

```
   {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    city: String,
    state: String,
    country: String,
    occupation: String,
    phoneNumber: String,
    transactions: Array,
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "admin",
    },
  },
  { timestamps: true }
      
```

## Format Configuration
```

{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "bracketSpacing": true
}

```

## Folder Structure
```
.
|-- client
|   |-- jsconfig.json
|   |-- package-lock.json
|   |-- package.json
|   |-- public
|   |   |-- favicon.ico
|   |   |-- index.html
|   |   |-- logo192.png
|   |   |-- logo512.png
|   |   |-- manifest.json
|   |   `-- robots.txt
|   `-- src
|       |-- App.js
|       |-- assets
|       |   |-- Report.xlsx
|       |   `-- profile.jpeg
|       |-- components
|       |   |-- BreakdownChart.jsx
|       |   |-- DataGridCustomColumnMenu.jsx
|       |   |-- DataGridCustomToolbar.jsx
|       |   |-- FlexBetween.jsx
|       |   |-- Header.jsx
|       |   |-- Navbar.jsx
|       |   |-- OverviewChart.jsx
|       |   |-- Sidebar.jsx
|       |   `-- StatBox.jsx
|       |-- index.css
|       |-- index.js
|       |-- scenes
|       |   |-- admin
|       |   |   `-- index.jsx
|       |   |-- breakdown
|       |   |   `-- index.jsx
|       |   |-- customers
|       |   |   `-- index.jsx
|       |   |-- daily
|       |   |   `-- index.jsx
|       |   |-- dashboard
|       |   |   `-- index.jsx
|       |   |-- geography
|       |   |   `-- index.jsx
|       |   |-- layout
|       |   |   `-- index.jsx
|       |   |-- monthly
|       |   |   `-- index.jsx
|       |   |-- overview
|       |   |   `-- index.jsx
|       |   |-- performance
|       |   |   `-- index.jsx
|       |   |-- products
|       |   |   `-- index.jsx
|       |   `-- transactions
|       |       `-- index.jsx
|       |-- state
|       |   |-- api.js
|       |   |-- geoData.js
|       |   `-- index.js
|       `-- theme.js
`-- server
    |-- controllers
    |   |-- client.js
    |   |-- general.js
    |   |-- management.js
    |   `-- sales.js
    |-- data
    |   `-- index.js
    |-- index.js
    |-- models
    |   |-- AffiliateStat.js
    |   |-- OverallStat.js
    |   |-- Product.js
    |   |-- ProductStat.js
    |   |-- Transaction.js
    |   `-- User.js
    |-- package-lock.json
    |-- package.json
    |-- routes
    |   |-- client.js
    |   |-- general.js
    |   |-- management.js
    |   `-- sales.js
    `-- vercel.json

```

## Environment Variables

- For `client` folder to connect to the server
```
REACT_APP_BASE_URL=
```

- Generate using your DB cluster connect option.
```
MONGODB_URL=
PORT=5001
```
