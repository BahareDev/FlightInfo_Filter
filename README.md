✈️ Flight Info Filter
=====================

A simple React application to filter and display flight information.Built with [Vite](https://vitejs.dev/), styled for a clean user experience, and linted with [ESLint](https://eslint.org/) for code quality.

📚 Table of Contents
--------------------

*   [About the Project](#about-the-project)
    
*   [Features](#features)

*   [Usage](#usage)

*   [Challenges and Improvements](#challenges-and-improvements)
    
*   [Getting Started](#getting-started)
    
*   [Contributing](#contributing)
    
*   [License](#license)
    
*   [Acknowledgements](#acknowledgements)
    

 ## 📖About the Project

**Flight Info Filter** allows users to browse and filter a list of flight data easily. It aims to provide a smooth UX with fast load times and a clean interface.This project is a foundation for learning and experimenting with React, component architecture, and data filtering techniques.

 ## ✨Features

*   View and filter flight data based on available fields (airline, price, stops )
    
*   Responsive design (planned)
    
*   Modern development setup with Vite
    
*   Code linting with ESLint for better code consistency
    
*   Easy-to-extend structure for future improvements
  
## Usage

Once you run the project:

*   You will see a list of flights (static or mocked data for now).
    
*   You can apply basic filtering (currently under development or to be improved).
    
*   New filters and features can be added easily

## 🎯Challenges and Improvements

Here’s a list of planned improvements and optional challenges:

### Challenges

### Challenge 1: Managing Multiple Dynamic Filters

**Problem:**  
Initially, handling multiple filters (airline, price, stops) was complicated because different states needed to be synchronized and applied to the dataset correctly.

**Solution:**  
We created a `filters` object that gathers all the current filter states and sends them once to the data fetching function.  
This made the filtering flexible and scalable for adding new filters. We ensured each filter change triggers a controlled, debounced fetch via `useEffect`, maintaining clean separation between UI state and fetched data state.

```javascript
const filters = {};
if (airline && airline !== "all") filters.airline = airline;
if (stops) filters.stops = true;
if (price && price !== "all") filters.price = price;
onChange(filters);
```
We created a **data fetching function** and all conditions we need to `filter.js` because we can easily handle them and improve them later.
For example, one of the conditions for the price is: 

```javascript
  if (typeof options?.price === "string" && options.price !== "all") {
    const [min, max] = options.price.split("-").map(Number);

    filteredFlights = filteredFlights.filter((flight) => {
      return flight.price >= min && flight.price <= max;
    });
  }
```

### Challenge 2: Ensuring Reusability and Scalability of Filter Components

**Problem:**
Initial hardcoded select inputs (<select>) would limit reusability when new filters (e.g., "duration" or "baggage") were added.

**Solution:**
We built a reusable `FilterDropDown component` that dynamically accepts options, value, and event handlers.
No matter how many filters are added later, we can plug and play using the same component.

Future-proof architecture for scaling up the application without rewriting code.

```javascript
<FilterDropDown
  options={priceOptions}
  value={price}
  onChange={(e) => setPrice(e.target.value)}
  title="Prices"
/>
```

### Future Improvements

*   Integrate real-time flight data using an open API
  
*   Add pagination for results
    
*   Add filter options for other things like departure/arrival time, destination, etc.
    
*   Implement a fully responsive design for mobile and tablet views and UI animations.
  
*   Improve price filter by using a slider instead of a drop-down menu. 
    
*   Add a menu in the sidebar for more ux and responsiveness
    
*   Introduce **Redux Toolkit** or **Zustand** for scalable state management.
    
*   Allow user authentication for personalized flight data.
    
*   Add **Dark Mode** support.
    
 ## Getting Started

Follow these steps to run the project locally:

### Prerequisites

Make sure you have **Node.js** and **npm** installed.

    node -v  npm -v

### Installation

Clone the repository:

    git clone https://github.com/BahareDev/FlightInfo_Filter.git   

Navigate to the project directory:

    cd FlightInfo_Filter

Install dependencies:

    npm install

Start the development server:
   
    npm run dev 

The app will be running at [http://localhost:5173](http://localhost:5173).    

## 🤝Contributing
 
Contributions are welcome! If you have suggestions for improvements or find a bug, feel free to open an [issue](https://github.com/BahareDev/FlightInfo_Filter/issues) or submit a pull request.

Steps:

1.  Fork the repository
    
2.  Create your feature branch (git checkout -b feature/AmazingFeature)
    
3.  Commit your changes (git commit -m 'Add some AmazingFeature')
    
4.  Push to the branch (git push origin feature/AmazingFeature)
    
5.  Open a Pull Request
    

## 📄License

This project is licensed under the MIT License.

## 🙏Acknowledgement

*   [React](https://react.dev/)
    
*   [Vite](https://vitejs.dev/)
    
*   [ESLint](https://eslint.org/)
