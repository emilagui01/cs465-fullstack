# CS-465 Full Stack Development with MEAN

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
