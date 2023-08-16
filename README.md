# Ghuddy App

This is a simple React.js single-page application that displays property cards fetched from an API based on the property type filter.

## Task Description

The data for the property cards is retrieved from an API that takes the `propertyType` as a request parameter. The application implements the following behavior:

- **Case 1**: By default, no button is selected, and the API is called without the `propertyType` field.
- **Case 2**: Clicking the Hotel button changes its background, calls the API with `propertyType=Hotel`, and reloads the cards.
- **Case 3**: Clicking the Hotel button again deselects it, removes `propertyType` from the API request, and refreshes the cards.
- **Case 4**: Clicking the Holiday Home button deselects Hotel, selects Holiday Home, adds `propertyType=Holiday%20Home` to the API request, and reloads the cards.

### Bonus
- **Case 5**: User can easily select `darkMode` field. Then all text and background become user friendly to dark theme. Not implemented in localStorage for that if you reload the page may occurs an issue.
- **Case 6**: On Hotels one can select if you love the hotel. This features implement in `localStorage` so if you reload your selected hotel will remain as red before, also an animation added

## Technology Stack

- React.js(Vite)
- Tailwind CSS
- Swiper.js (Carousel)
- GitHub (Code Hosting)
- Netlify (Hosting)

## Getting Started

1. Clone the repository: `git clone https://github.com/imoncoc/task_ghuddy.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open your browser and navigate to: `http://localhost:3000`

## Deployment

The application is deployed using Netlify and can be accessed [here](https://ghuddy-im.netlify.app/).

## Usage

1. Click property type buttons to filter cards.
2. Follow the behavior described in the task.

## About

This project was created for the Ghuddy assignment.
