# CS Student Blog

Welcome to the CS Student Blog! This project is designed to showcase the journey and insights of a computer science student through a personal blog. The blog features various components that allow for easy navigation, viewing of blog posts, and sharing of knowledge.

## Project Structure

The project is divided into two main parts: the frontend and the backend.

### Frontend

The frontend is built using React and includes the following key components:

- **Header**: Displays the navigation and title of the blog.
- **Footer**: Contains footer content.
- **BlogPost**: Renders individual blog post content.
- **CodeBlock**: Formats and displays code snippets.
- **Pages**:
  - **Home**: The homepage of the blog.
  - **About**: Information about the blog and the author.
  - **BlogList**: Displays a list of all blog posts.
  - **BlogDetail**: Shows the details of a selected blog post.

The frontend also includes a main CSS file for styling and a utility for syntax highlighting code blocks.

### Backend

The backend is built using Node.js and Express, providing a RESTful API for the blog. Key components include:

- **Controllers**: Handle blog-related requests (create, retrieve, update, delete).
- **Models**: Define the structure of blog posts in the database.
- **Routes**: Set up API routes linking to the appropriate controller functions.
- **Database Configuration**: Manages the connection to the database.
- **Utilities**: Includes functions for converting markdown text to HTML.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the frontend and backend directories and install the dependencies:
   ```
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. Set up the environment variables in the backend by copying `.env.example` to `.env` and filling in the required values.

4. Start the backend server:
   ```
   cd backend
   node src/server.js
   ```

5. Start the frontend application:
   ```
   cd frontend
   npm start
   ```

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

Happy blogging!