# Frontend Personal Blog

This is the frontend part of the CS Student Blog project, built using React. The blog serves as a platform for sharing knowledge, experiences, and insights related to computer science.

## Project Structure

The frontend project is organized as follows:

```
frontend/
├── public/
│   ├── index.html        # Main HTML file for the application
│   └── favicon.svg       # Favicon for the blog
├── src/
│   ├── components/       # Reusable components
│   │   ├── Header.jsx    # Navigation and title component
│   │   ├── Footer.jsx    # Footer component
│   │   ├── BlogPost.jsx   # Component for displaying individual blog posts
│   │   └── CodeBlock.jsx  # Component for displaying code snippets
│   ├── pages/            # Page components
│   │   ├── Home.jsx      # Homepage component
│   │   ├── About.jsx     # About page component
│   │   ├── BlogList.jsx  # Component for listing all blog posts
│   │   └── BlogDetail.jsx # Component for displaying details of a selected blog post
│   ├── styles/           # CSS styles
│   │   └── main.css      # Main stylesheet
│   ├── utils/            # Utility functions
│   │   └── codeHighlighter.js # Function for syntax highlighting
│   ├── App.jsx           # Main application component
│   └── index.js          # Entry point for the React application
├── package.json          # NPM configuration file
└── README.md             # Documentation for the frontend project
```

## Getting Started

To get started with the frontend project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd cs-student-blog/frontend
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Features

- Responsive design for optimal viewing on various devices.
- Dynamic routing for seamless navigation between pages.
- Syntax highlighting for code snippets in blog posts.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.