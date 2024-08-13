Creating a responsive and visually appealing portfolio webpage involves a series of steps. In this tutorial, we'll walk through how to build the portfolio webpage you provided, focusing on the HTML structure, CSS styling, and best practices for responsive design.

### Step 1: Setting Up the HTML Structure

The first step in creating a portfolio webpage is to write the HTML structure. This defines the content and layout of the page.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    <link rel="stylesheet" href="styles.css"> <!-- Link to the external CSS file -->
</head>
<body>
    <!-- Header Section -->
    <header>
        <div class="header-content">
            <h1>PROTOFILO.</h1> <!-- Website Logo or Name -->
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Works</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Intro Section -->
    <section class="intro">
        <div class="container">
            <div class="intro-content">
                <h2>My Name is <span>Abdulrahman</span></h2>
                <p>I'm a UI Developer</p>
                <button>Hire Me</button>
            </div>
            <div class="intro-image">
                <img src="images/dev.jpeg" alt="Abdulrahman"> <!-- Replace with your image -->
            </div>
        </div>
    </section>
</body>
</html>
```

### Key HTML Elements:
- **Header Section**: Contains the website's name and a navigation bar with links to different sections.
- **Intro Section**: Introduces yourself, including your name, profession, and an image.

### Step 2: Styling with CSS

Now that we have the HTML structure, we can style it with CSS to make it visually appealing and responsive.

```css
/* General Body Styling */
body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #070707; /* Dark background color */
    color: #333; /* Default text color */
    width: 100vw;
    overflow-x: hidden; /* Prevents horizontal scrolling */
}

/* Header Styling */
header {
    background-color: #222; /* Darker background for the header */
    padding: 20px 40px; /* Adds space inside the header */
    box-sizing: border-box; /* Ensures padding is included in the element's total width */
    width: 100%;
    margin-bottom: 20px;
}

.header-content {
    display: flex;
    justify-content: space-between; /* Spreads out the header items */
    align-items: center; /* Aligns items vertically */
    color: #fff; /* White text color */
    max-width: 1200px; /* Limits the width of the content */
    margin: 0 auto; /* Centers the header content */
}

header h1 {
    font-size: 24px; /* Size of the website's name */
    margin: 0;
}

/* Navigation Bar Styling */
nav ul {
    list-style-type: none; /* Removes default list styling */
    margin: 0;
    padding: 0;
    display: flex;
}

nav ul li {
    margin-left: 20px; /* Adds space between menu items */
}

nav ul li a {
    color: #fff;
    text-decoration: none;
}

nav ul li a:hover {
    color: #fff;
    text-decoration: underline; /* Adds underline on hover */
}

/* Intro Section Styling */
.intro {
    background-color: #070707; /* Matches the body background */
    padding: 20px;
    min-height: 100vh; /* Fills the entire viewport height */
    box-sizing: border-box;
}

/* Container Styling for Flexbox Layout */
.container {
    display: flex;
    justify-content: space-between; /* Distributes content evenly */
    align-items: center;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
}

/* Styling for the Intro Text Content */
.intro-content {
    max-width: 50%; /* Limits the width of the text area */
    color: #fff;
}

.intro-content h2 {
    font-size: 36px;
    margin: 0;
}

.intro-content h2 span {
    color: #fbc531; /* Highlighted text color */
    margin: 0;
    padding-top: 0;
}

.intro-content p {
    font-size: 24px;
    margin: 10px 0;
}

.intro-content button {
    padding: 10px 20px; /* Button padding */
    background-color: #fbc531; /* Button background color */
    border: none;
    color: #222; /* Button text color */
    cursor: pointer;
    font-size: 18px;
}

/* Styling for the Intro Image */
.intro-image img {
    max-width: 100%; /* Ensures image does not exceed its container */
    height: auto; /* Maintains aspect ratio */
}

/* Ensures no unwanted margins or padding */
body, .intro {
    margin: 0;
    padding: 0;
}
```

### Key CSS Concepts:
- **Flexbox Layout**: Used to align items horizontally and vertically within their containers.
- **Responsive Design**: CSS is used to make sure the layout adjusts smoothly across different screen sizes, with the `min-height: 100vh;` ensuring the intro section always fills the viewport.

### Step 3: Linking CSS to HTML

Ensure your CSS file is correctly linked to your HTML:

```html
<link rel="stylesheet" href="styles.css">
```

This line goes inside the `<head>` section of your HTML file, telling the browser to use the styles defined in `styles.css`.

### Step 4: Testing and Debugging

Once you’ve added your HTML and CSS, it's time to test the page in different browsers and devices. Make sure the layout looks good on various screen sizes.

### Final Thoughts:

By following the above steps, you should have a well-structured and styled portfolio page that introduces yourself as a UI Developer. This basic setup can be expanded by adding more sections, such as a portfolio of your works, a blog, and a contact form. Keep experimenting with CSS to further refine your design and achieve the look you want!