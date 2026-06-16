# Simon Says Game 🎮

A classic memory sequence game built using vanilla HTML, CSS, and JavaScript. Challenge your memory by replicating an ever-growing random sequence of colors!

---

## 🚀 How to Play

1. **Start the Game**: Press any key on your keyboard to start the game.
2. **Observe the Pattern**: The game will flash a button (Red, Yellow, Green, or Purple) indicating the first step in the sequence.
3. **Repeat the Pattern**: Click the corresponding button.
4. **Advance Levels**: If you correctly repeat the pattern, the level increases, and the game appends another random color to the sequence.
5. **Game Over**: If you click the wrong button in the sequence, the screen flashes red, and the game ends.
6. **High Score**: Your score (the level reached) is displayed along with your highest high score. Press any key to start a new game and try to beat your record!

---

## 🛠️ Project Structure

The project consists of three core files:

*   **[index.html](file:///d:/OneDrive%20-%20NATIONAL%20INSTITUTE%20OF%20TECHNOLOGY%20ANDHRA%20PRADESH/Code%20Files/simon-says/index.html)**: Defines the layout, title, score text container, and the grid of four colored buttons (Red, Yellow, Green, Purple).
*   **[style.css](file:///d:/OneDrive%20-%20NATIONAL%20INSTITUTE%20OF%20TECHNOLOGY%20ANDHRA%20PRADESH/Code%20Files/simon-says/style.css)**: Contains styling for the game layout, buttons, and animations (such as the button flash effect and user press effect).
*   **[app.js](file:///d:/OneDrive%20-%20NATIONAL%20INSTITUTE%20OF%20TECHNOLOGY%20ANDHRA%20PRADESH/Code%20Files/simon-says/app.js)**: Implements the game logic, sequence generation, level tracking, score persistence (high score), and user input verification.

---

## 💻 Tech Stack

*   **HTML5**: Semantic elements for page layout.
*   **CSS3**: Flexbox centering, button styling, and transitional effects.
*   **JavaScript (ES6)**: Event listeners, random sequence generator, game state management, and timeout-based animation control.

---

## 🔮 Future Improvements

Here are a few features that could be added to enhance the game:
*   **Audio Effects**: Add unique audio tones for each color flash and a buzzer for game over to create a multi-sensory experience.
*   **Color Pattern Correction**: Currently, the random index selector uses `Math.floor(Math.random() * 3)` which limits the flash sequence to the first 3 colors (Yellow, Red, Purple). Modifying this to `Math.floor(Math.random() * 4)` will fully incorporate the Green button into the sequence.
*   **Responsive Grid Layout**: Adjust button sizing and spacing using CSS Grid or media queries for a better mobile gaming experience.
*   **Difficulty Modes**: Introduce speed variations (e.g., faster color flashes as levels increase) to test reflexes.
