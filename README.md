# Pet Listing Website
Introduction
This project is a Pet Listing website built using React.js. It incorporates error handling, state management, and best coding practices. The website fetches data from an API and displays a list of pets with the ability to search and paginate through the results.

## Features
* List of Pets
* Pet Details
* Search Functionality
* Pagination
* Error Handling
* Responsive Design
* Animations for better UX
## Setup Instructions
### Prerequisites
* Node.js (v14 or later)
* npm (v6 or later) or yarn (v1.22 or later)

## How to run application
* npm run dev

## Project Structure
* pet-listing-website/

* * public/
 * * * index.html

* * src/
* * * components/
* * * * Pagination.jsx
* * * * PetDetails.jsx
 * * * * PetList.jsx
 * * * * SearchForm.jsx

* * * pages/
* * * * Home.jsx

* * * services/
 * * * * api.js

* * * App.jsx
* * * AppContext.js
* * * index.css
* * * index.js
* * .env
* * .eslintignore
* * .eslintrc.js
* * .gitignore
* * package.json
* * README.md
* * tailwind.config.js
## Design Decisions
* React.js: Chosen for its component-based architecture and efficient state management with hooks.
* Tailwind CSS: Utilized for responsive and utility-first CSS styling.
* Axios: Used for making HTTP requests to the API.
* React Router: Implemented for navigation between different pages.
* Pagination: Custom pagination component created to handle large datasets by dividing them into pages of 9 items each.
* Error Handling: Implemented using an ErrorBoundary component to catch and display errors gracefully.

## API Endpoints
* List of Pets: http://pets-v2.dev-apis.com/pets
* Pets by ID: http://pets-v2.dev-apis.com/pets?id=${id}
* Breed by Animal Type: http://pets-v2.dev-apis.com/breeds?animal=${animal}
* Search API: http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}
## How to Use
* Search for Pets: Use the search form to filter pets by animal type, location, and breed.
* View Pet Details: Click on a pet from the list to view detailed information.
* Pagination: Navigate through pages using the pagination controls.
