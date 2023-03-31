# Admin Dashboard

## Table of Contents

- [Description](#description)
    - [Client](#client)
    - [Server](#server)
- [Tech Stack](#tech-stack)
- [Features](#features-wait-until-gifs-load)
- [Open AI DALL·E 2 API](#open-ai-dall-e-2-api)
- [Database Structure](#database-structure)
    - [MongoDB](#mongodb)
    - [Cloudinary](#cloudinary)
- [Format Configuration](#format-configuration)
- [Folder Structure](#folder-structure)
- [Environment Variables](#environment-variables)

## Description

A React Admin application, where summary off the sales, transcation, diagrams and many more are shown, through each section. The application contains two folder
, one is the client for running the application and the server is made using expressJS.

## Tech Stack

- [React](https://reactjs.org/)
- [Create React App](https://create-react-app.dev/)
- [MongoDB](https://www.mongodb.com/)
- [Prettier](https://prettier.io/)
- [Nivo](https://nivo.rocks/)
- [ExpressJS](https://expressjs.com/)
- [Material UI](https://mui.com/)
- [Vercel](https://vercel.com/docs)

## Features (wait until GIFs load)

- View list of images



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
);
      
```

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
);
      
```

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
);
      
```

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
);
      
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
);
      
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
|   |-- index.html        
|   |-- package-lock.json 
|   |-- package.json      
|   |-- postcss.config.cjs
|   |-- public
|   |   `-- vite.svg      
|   |-- src
|   |   |-- App.css
|   |   |-- App.tsx
|   |   |-- assets
|   |   |   |-- download.png
|   |   |   |-- index.js
|   |   |   |-- logo.svg
|   |   |   `-- preview.png
|   |   |-- components
|   |   |   |-- Card.tsx
|   |   |   |-- FormField.tsx
|   |   |   |-- Loader.tsx
|   |   |   `-- index.ts
|   |   |-- constants
|   |   |   `-- index.ts
|   |   |-- index.css
|   |   |-- main.tsx
|   |   |-- pages
|   |   |   |-- CreatePost.tsx
|   |   |   |-- Home.tsx
|   |   |   `-- index.js
|   |   `-- utils
|   |       `-- index.ts
|   |-- tailwind.config.cjs
|   `-- vite.config.js
`-- server
    |-- index.js
    |-- mongodb
    |   |-- connect.js
    |   `-- models
    |       `-- post.js
    |-- package-lock.json
    |-- package.json
    `-- routes
        |-- dalleRoutes.js
        `-- postRoutes.js

```

## Environment Variables

- Generate a key from Open AI.
```
OPENAI_API_KEY=
```

- Generate using your DB cluster connect option.
```
MONGODB_URL=
```

- Generated on the dashboard of Cloudinary under the section "Product Environment Credentials".
```
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```





