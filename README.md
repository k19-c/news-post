# News Platform

This project is a simple news publishing and listing platform built with ReactJS. It allows users to add and list news articles.

## Features

- List news articles
- Add a new news article
- Basic form validation
- Simple and clean UI

## Project Structure

- `src/components`: Contains React components
  - `AddNews.js`: Component for adding news articles
  - `NewsList.js`: Component for listing news articles
  - `NewsItem.js`: Component for displaying a single news item
- `src/App.js`: Main application component
- `src/api.js` contains application table data


## How to Run

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies: `npm install`.
4. Start the development server: `npm start`.

The application will be available at `http://localhost:3000`.

## Thought Process

- Used React functional components and hooks for state management.
- Utilized React Router for navigation between the list and add news screens.
- Implemented basic form validation using HTML5 validation attributes.
- Mocked backend API with local storage for simplicity.

## Improvements

- Add more fields and validation rules to the news form.
- Implement edit and delete functionality.
- Improve the UI with more advanced styling and components.
- Integrate a real backend service for data persistence.



src/
├── components/
│   ├── AddNews.js
│   ├── NewsList.js
│   └── NewsItem.js
├── api.js  
├── App.js
├── index.js
└── index.css


