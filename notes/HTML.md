HTML (HyperText Markup Language) is the standard language for creating and designing documents on the World Wide Web. It structures the content on a webpage and tells the browser how to display text, images, and other multimedia elements. Here are the core concepts of HTML:

### 1. **HTML Elements**
   - **Tags**: HTML elements are represented by tags, which usually come in pairs: an opening tag `<tagname>` and a closing tag `</tagname>`. Some elements are self-closing and don't require a closing tag (e.g., `<img />`).
   - **Attributes**: Tags can have attributes that provide additional information about an element, usually in the form of key-value pairs (e.g., `<a href="https://example.com">Link</a>`).

   **Example**:
   ```html
   <p>This is a paragraph.</p>
   ```

### 2. **HTML Document Structure**
   A basic HTML document has a defined structure, which includes the following elements:
   - **`<!DOCTYPE html>`**: Declares the document type and version of HTML.
   - **`<html>`**: The root element that contains all the content on the page.
   - **`<head>`**: Contains meta-information about the document, such as the title, links to stylesheets, and metadata.
   - **`<title>`**: Sets the title of the document, which appears in the browser's title bar or tab.
   - **`<body>`**: Contains the visible content of the webpage, such as text, images, links, etc.

   **Example**:
   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <title>My Webpage</title>
   </head>
   <body>
       <h1>Welcome to My Webpage</h1>
       <p>This is a simple HTML document.</p>
   </body>
   </html>
   ```

### 3. **Text Elements**
   - **Headings**: Represent different levels of section headings (`<h1>` to `<h6>`), where `<h1>` is the highest level, and `<h6>` is the lowest.
   - **Paragraphs**: Defined using the `<p>` tag, used for blocks of text.
   - **Lists**: Ordered (`<ol>`) and unordered (`<ul>`) lists, with list items inside (`<li>`).
   - **Links**: Created using the `<a>` tag, which allows users to navigate from one page to another.

   **Example**:
   ```html
   <h1>Main Heading</h1>
   <p>This is a paragraph of text.</p>
   <ul>
       <li>First item</li>
       <li>Second item</li>
       <li>Third item</li>
   </ul>
   ```

### 4. **Images and Multimedia**
   - **Images**: The `<img>` tag is used to embed images into an HTML page. It uses attributes like `src` for the image source and `alt` for alternative text.
   - **Audio and Video**: HTML5 introduced `<audio>` and `<video>` elements to embed audio and video files.

   **Example**:
   ```html
   <img src="image.jpg" alt="Description of the image">
   <video controls>
       <source src="video.mp4" type="video/mp4">
       Your browser does not support the video tag.
   </video>
   ```

### 5. **Forms**
   - Forms are used to collect user input and are defined using the `<form>` tag. Input fields, buttons, checkboxes, and radio buttons are common form elements.
   - **Attributes** like `action` and `method` define how and where the form data will be sent.

   **Example**:
   ```html
   <form action="/submit" method="POST">
       <label for="name">Name:</label>
       <input type="text" id="name" name="name">
       <input type="submit" value="Submit">
   </form>
   ```

### 6. **Tables**
   - Tables are used to display tabular data and are defined using the `<table>` tag. Inside tables, you can use `<tr>` for rows, `<td>` for cells, and `<th>` for header cells.

   **Example**:
   ```html
   <table>
       <tr>
           <th>Name</th>
           <th>Age</th>
       </tr>
       <tr>
           <td>John</td>
           <td>30</td>
       </tr>
       <tr>
           <td>Jane</td>
           <td>25</td>
       </tr>
   </table>
   ```

### 7. **Semantic Elements**
   - Semantic HTML elements clearly describe their meaning in a human- and machine-readable way. For example:
     - `<header>`: Defines a header for a document or section.
     - `<nav>`: Contains navigation links.
     - `<section>`: Defines a section in a document.
     - `<article>`: Represents an independent piece of content.
     - `<footer>`: Defines a footer for a document or section.

   **Example**:
   ```html
   <header>
       <h1>Welcome to My Blog</h1>
   </header>
   <section>
       <article>
           <h2>Article Title</h2>
           <p>This is an article about HTML.</p>
       </article>
   </section>
   <footer>
       <p>&copy; 2024 My Blog</p>
   </footer>
   ```

### 8. **Comments**
   - HTML comments are notes in the source code that are not displayed in the browser. They are useful for explaining code or leaving notes for future developers.

   **Example**:
   ```html
   <!-- This is a comment -->
   <p>This paragraph is visible.</p>
   ```

### 9. **DOCTYPE Declaration**
   - The `<!DOCTYPE html>` declaration defines the document type and version of HTML. In modern web development, the declaration is simply `<!DOCTYPE html>`, which refers to HTML5.

   **Example**:
   ```html
   <!DOCTYPE html>
   ```

### 10. **HTML5 and New Features**
   - HTML5 introduced several new elements and APIs, including:
     - **New semantic elements** like `<header>`, `<footer>`, `<section>`, and `<article>`.
     - **Multimedia elements** like `<audio>` and `<video>`.
     - **Form enhancements** like new input types (e.g., `<input type="email">`, `<input type="date">`).
     - **Canvas**: `<canvas>` element for drawing graphics via scripting (e.g., JavaScript).

### Summary
HTML is the foundation of web pages, defining the structure and content. By understanding the core concepts, you can build static web pages and form the base for learning more advanced web technologies like CSS, JavaScript, and server-side languages.