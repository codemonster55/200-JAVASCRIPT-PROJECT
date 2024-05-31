# Weather Dashboard

## Description

The Weather Dashboard project is a web application that provides users with real-time weather information for different locations. Users can search for a city and view current weather conditions, including temperature, humidity, wind speed, and a brief description of the weather. This project utilizes a weather API to fetch and display accurate weather data.

## Features

- **Search for City**: Allow users to input the name of a city to retrieve weather information.
- **Current Weather**: Display current weather conditions such as temperature, humidity, wind speed, and weather description.
- **Weather Icons**: Show appropriate weather icons based on the current weather conditions.

## Technologies Used

- **JavaScript**: For fetching weather data from an external API, handling user interactions, and updating the interface dynamically.
- **HTML**: For structuring the Weather Dashboard interface, including the search input, weather display area, and any other necessary elements.
- **CSS**: For styling the application and enhancing the user experience with visually appealing designs and layouts.

## Setup

To set up and run the Weather Dashboard project:

1. **Clone the Repository**: Clone the project repository to your local machine using the following command:

   ```bash
   git clone <repository_url>
   ```

2. **Navigate to the Project Directory**: Open your terminal or command prompt and navigate to the directory where you cloned the project.

3. **Obtain API Key**: Sign up for an API key from a weather service provider (e.g., OpenWeatherMap).

4. **Configure API Key**: Open the JavaScript file where the API call is made (e.g., `script.js`) and replace the placeholder with your actual API key. For example:
   ```javascript
   const apiKey = 'YOUR_API_KEY';
   ```

5. **Open Index.html**: Open the `index.html` file in your preferred web browser to view the Weather Dashboard.

6. **Search for Weather**: Enter the name of a city in the search input and click the search button to fetch and display the current weather information.

---