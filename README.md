# Tube-Keyword-Tracker  Tool

This is a simple web application built using React that allows users to check the search volume of keywords on YouTube. It uses the YouTube Data API to fetch search results and display the number of videos related to the entered keyword.

## Features

- Enter a keyword to see the search volume on YouTube.
- Choose a specific region to refine the search results.

## Demo

You can view a live demo of the application [here](https://tube-keyword-tracker-4jxxfhmqi-vijaydorugade20-gmailcom.vercel.app/).

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/viju-dev/Tube-Keyword-Tracker.git`
2. Navigate to the project directory: `cd your-repo-name`
3. Install dependencies: `npm install`
4. Rename `.env.example` to `.env` and add your YouTube Data API key.
5. Start the development server: `npm start`

The application will be accessible at `http://localhost:3000`.

## Configuration

You'll need a YouTube Data API key to fetch data from YouTube. You can obtain an API key by following the instructions [here](https://developers.google.com/youtube/registering_an_application).

In the `.env` file, set your API key like this:
```dotenv
REACT_APP_YOUTUBE_API_KEY=your-api-key
