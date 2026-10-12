# Travlr Getaways: Full Stack MEAN Application (CS-465)

> **This is the original version, built for CS-465 Full Stack Development I at Southern New Hampshire University (March to April 2026).**
> I later enhanced this project for my CS-499 capstone, adding an Angular route guard, stronger form and database validation, safer error handling, a corrected JWT check and Delete Trip support.
> See the enhanced version in my **[Capstone ePortfolio](https://emilagui01.github.io/capstone/)**.

Travlr Getaways is a travel booking web application. Customers browse trips on a public website, and staff sign in to an Angular admin app to add and edit trips. Both sides read from the same REST API and MongoDB database.

## Tech stack

| Layer | Technology |
|---|---|
| Customer site | Express with Handlebars templates (server-rendered) |
| Admin app | Angular 21 single-page application, TypeScript |
| API | Node.js and Express REST API |
| Database | MongoDB with Mongoose |
| Security | Passport (local strategy), JSON Web Tokens, hashed passwords |
| Testing | Postman for API endpoints |

## Project structure

| Folder | Purpose |
|---|---|
| `app_server/` | Customer-facing Express site: routes, controllers and Handlebars views |
| `app_api/` | REST API: routes, controllers, Mongoose models, Passport config, seed script |
| `app_admin/` | Angular admin app: trip listing, trip card, add and edit trip, login, JWT interceptor |
| `public/` | Static HTML, CSS and images |
| `data/trips.json` | Seed data for the trips collection |

## How the project was built, module by module

Each branch is a snapshot of the project at the end of that week's module, so you can see how it grew.

| Branch | What was added |
|---|---|
| `module1` | Static Express website |
| `module2` | Handlebars templates, routes and controllers |
| `module3` | Trip data loaded from a JSON file |
| `module4` | MongoDB database, Mongoose model and seed script |
| `module5` | REST API (`app_api`), with the customer site reading trips from it |
| `module6` | Angular admin app: trip listing, trip cards, add and edit trip |
| `module7` | Admin login, navbar, authentication service and JWT interceptor |
| `module8` | Backend authentication: user model, Passport, JWT-protected routes |

## API endpoints

| Method | Endpoint | Protected | Purpose |
|---|---|---|---|
| POST | `/api/register` | No | Create a user account |
| POST | `/api/login` | No | Sign in and receive a JWT |
| GET | `/api/trips` | No | List all trips |
| POST | `/api/trips` | Yes | Add a trip |
| GET | `/api/trips/:tripCode` | No | Get one trip by code |
| PUT | `/api/trips/:tripCode` | Yes | Update a trip |

## Running it locally

You need Node.js, the Angular CLI and a local MongoDB server.

1. Create a `.env` file in the project root with a secret for signing tokens:
   ```
   JWT_SECRET=your-secret-here
   ```
2. Install backend dependencies and seed the database:
   ```
   npm install
   node app_api/models/seed.js
   ```
3. Start the backend (customer site and API on http://localhost:3000):
   ```
   npm start
   ```
4. In a second terminal, start the admin app (http://localhost:4200):
   ```
   cd app_admin
   npm install
   ng serve
   ```

## Known limitations (fixed in the capstone)

This is the course version and is kept as it was submitted. These issues were found and fixed in the [enhanced capstone version](https://emilagui01.github.io/capstone/):

* The JWT check sends a 401 for an invalid token but still lets the request continue.
* Trip controllers have no try/catch, so invalid data can crash the server.
* Single-trip lookup uses `find()` and returns a list instead of one trip.
* There is no Delete Trip route.
* Admin pages are hidden from logged-out users but not route-protected.

## Course reflection

## Architecture
### Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA). Why did the backend use a NoSQL MongoDB database?
In this project, I worked with multiple types of frontend development including Express HTML, JavaScript, and an Angular single-page application (SPA). Express HTML uses server-side rendering, meaning each time a user requests a page, the server builds and returns a full HTML page. This approach is simpler but less efficient because the entire page reloads every time. In contrast, the Angular SPA handles the user interface on the client side, allowing only parts of the page to update dynamically without a full reload. This results in a faster and more responsive user experience.

JavaScript plays a key role in both approaches. In Express, it is mainly used on the server for routing and handling requests, while in Angular it is used on the client to manage components, routing, and dynamic updates.

The backend uses MongoDB, a NoSQL database, because it is flexible and works well with JSON-like data structures. Since the application deals with trip data that may vary in structure, MongoDB allows for easier storage and scalability compared to a relational database. It also integrates well with Mongoose and the REST API design used in this project.

## Functionality
### How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces? Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
JSON differs from JavaScript in that JSON is strictly a data format, while JavaScript is a programming language. JSON is used to store and transfer data between the frontend and backend. In this project, JSON acts as the bridge between Angular and the Express API. For example, when retrieving trips, the backend sends JSON data, and the Angular frontend reads and displays that data in the UI.

During development, I refactored parts of the application to improve functionality and efficiency. One example was moving repeated API calls into a service (trip-data.service.ts) instead of handling them directly in components. This made the code cleaner and easier to maintain. Another improvement was implementing an HTTP interceptor to automatically attach JWT tokens to secure requests instead of manually adding headers each time.

Reusable UI components were a major benefit in Angular. The TripCard component allowed me to display trip information consistently across the application without rewriting code. This improves maintainability, reduces duplication, and makes future updates easier since changes only need to be made in one place.

## Testing
### Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
Testing in this project involved verifying API endpoints, request methods, and security features. I used Postman to test the backend API by sending GET, POST, PUT, and DELETE requests. This helped confirm that endpoints such as /api/trips, /api/login, and /api/register were working correctly.

Each HTTP method serves a different purpose. GET retrieves data, POST creates new data, PUT updates existing data, and DELETE removes data. Understanding these methods was important for ensuring correct communication between the frontend and backend.

Security added another layer of complexity. After implementing JWT authentication, protected routes required a valid token. Initially, I encountered errors such as “Auth Header Required but NOT PRESENT,” which meant the token was not being sent. This was resolved by creating an Angular HTTP interceptor that automatically attaches the token to outgoing requests. Testing confirmed that unauthorized requests were blocked and authorized requests succeeded.

## Reflection
### How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
This course helped me better understand how full stack applications are built and how the frontend and backend work together. I gained experience using Angular for building a single-page application and learned how it differs from traditional server-rendered applications. I also improved my understanding of REST APIs, routing, and database integration using MongoDB.

One of the most valuable skills I developed was debugging across multiple layers of an application. I learned how to identify issues in the frontend, backend, and API communication, and how to fix them step by step. Implementing authentication with JWT also gave me practical experience with security concepts that are important in real-world applications.

Overall, this project helped me become more confident in building full stack applications and prepared me for future roles in software development and cybersecurity. The experience of working with the MEAN stack, handling authentication, and managing data flow will be valuable as I continue developing my technical skills and working toward my career goals.
