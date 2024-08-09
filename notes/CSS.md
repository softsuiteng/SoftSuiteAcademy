

### 1. **CSS Selectors**
   - **Element Selector:** Targets HTML elements directly.
     ```css
     p {
       color: blue;
     }
     ```
   - **Class Selector:** Targets elements with a specific class.
     ```css
     .example {
       font-size: 16px;
     }
     ```
   - **ID Selector:** Targets an element with a specific ID.
     ```css
     #unique {
       background-color: yellow;
     }
     ```
   - **Attribute Selector:** Targets elements with a specific attribute.
     ```css
     [type="text"] {
       border: 1px solid black;
     }
     ```
   - **Pseudo-classes:** Target elements in specific states.
     ```css
     a:hover {
       color: red;
     }
     ```
   - **Pseudo-elements:** Target parts of elements.
     ```css
     p::first-line {
       font-weight: bold;
     }
     ```

### 2. **CSS Box Model**
   - **Content:** The actual content of the box.
   - **Padding:** Space between content and border.
   - **Border:** Surrounds padding.
   - **Margin:** Space outside the border.

   **Example:**
   ```css
   .box {
     width: 100px;
     padding: 10px;
     border: 5px solid black;
     margin: 20px;
   }
   ```

### 3. **CSS Positioning**
   - **Static:** Default positioning; follows normal document flow.
   - **Relative:** Positioned relative to its normal position.
     ```css
     .relative {
       position: relative;
       top: 10px;
     }
     ```
   - **Absolute:** Positioned relative to the nearest positioned ancestor.
     ```css
     .absolute {
       position: absolute;
       top: 20px;
       left: 30px;
     }
     ```
   - **Fixed:** Positioned relative to the viewport.
     ```css
     .fixed {
       position: fixed;
       bottom: 10px;
       right: 10px;
     }
     ```
   - **Sticky:** Switches between relative and fixed based on scroll position.
     ```css
     .sticky {
       position: sticky;
       top: 0;
     }
     ```

### 4. **Flexbox**
   - **Container:** Defines a flex container.
     ```css
     .container {
       display: flex;
     }
     ```
   - **Items:** Flex items adjust to container.
     ```css
     .item {
       flex: 1;
     }
     ```
   - **Properties:** Control alignment, direction, and distribution.
     ```css
     .container {
       justify-content: center;
       align-items: center;
       flex-direction: row;
     }
     ```

### 5. **CSS Grid**
   - **Container:** Defines a grid container.
     ```css
     .grid-container {
       display: grid;
       grid-template-columns: repeat(3, 1fr);
       grid-gap: 10px;
     }
     ```
   - **Items:** Positioned within the grid.
     ```css
     .grid-item {
       grid-column: span 2;
     }
     ```
   - **Properties:** Control rows, columns, and areas.
     ```css
     .grid-container {
       grid-template-rows: 100px auto 100px;
       grid-template-areas: 
         "header"
         "main"
         "footer";
     }
     ```

### 6. **Typography**
   - **Font Family:** Specifies the typeface.
     ```css
     body {
       font-family: Arial, sans-serif;
     }
     ```
   - **Font Size:** Specifies the size.
     ```css
     p {
       font-size: 14px;
     }
     ```
   - **Font Weight:** Specifies thickness.
     ```css
     h1 {
       font-weight: bold;
     }
     ```
   - **Line Height:** Controls space between lines.
     ```css
     p {
       line-height: 1.5;
     }
     ```

### 7. **Colors and Backgrounds**
   - **Color:** Sets text color.
     ```css
     p {
       color: red;
     }
     ```
   - **Background Color:** Sets background color.
     ```css
     .container {
       background-color: lightgray;
     }
     ```
   - **Background Image:** Sets an image as background.
     ```css
     .banner {
       background-image: url('banner.jpg');
     }
     ```

### 8. **Transitions and Animations**
   - **Transitions:** Smoothly animate property changes.
     ```css
     .box {
       transition: background-color 0.5s ease;
     }
     .box:hover {
       background-color: blue;
     }
     ```
   - **Animations:** Define keyframes and sequences.
     ```css
     @keyframes slide {
       from { transform: translateX(-100%); }
       to { transform: translateX(0); }
     }
     .slide-in {
       animation: slide 1s ease-out;
     }
     ```

### 9. **Responsive Design**
   - **Media Queries:** Apply styles based on device characteristics.
     ```css
     @media (max-width: 600px) {
       .container {
         flex-direction: column;
       }
     }
     ```

### Summary
CSS controls the visual presentation of HTML elements. By mastering these core concepts, you can create well-styled, responsive web pages and lay the groundwork for more advanced styling techniques.