# 🎵 Spotify Web Player Clone

A responsive, pixel-perfect frontend clone of the **Spotify Web Player** built using semantic HTML5 and vanilla CSS3. This project focuses on replicating Spotify's sleek user interface, layout, and visual components, complete with hover transitions, interactive states, and fully responsive layouts.

---

## 🚀 Live Demo & Preview

To run the project locally:
1. Clone this repository or download the source files.
2. Open [index.html](file:///d:/OneDrive%20-%20NATIONAL%20INSTITUTE%20OF%20TECHNOLOGY%20ANDHRA%20PRADESH/Code%20Files/spotify-clone/index.html) directly in any modern web browser, or use a development server like VS Code's **Live Server** extension for the best experience.

---

## ✨ Key Features

- **🏠 Dynamic Sidebar & Navigation**: Replicates Spotify’s navigation system with styled navigation items (Home, Search), interactive menus, and transitions.
- **📚 Interactive Library Section**: Includes prompt cards for creating playlists and browsing podcasts, styled with clean badges and modern cards.
- **🧭 Sticky Top Navigation Bar**: Features backward/forward navigation controls, action buttons ("Explore Premium", "Install App"), and user profile dropdown container.
- **🎶 Custom Card Grids**: Curated grids for categories like *"Recently Played"*, *"Trending now near you"*, and *"Featured Charts"*, utilizing Spotify's hover Zoom-on-image and card layouts.
- **🎛️ Bottom Music Player Controls**:
  - **Album Panel**: Displays current song artwork, title (*"Daylight" by David Kushner*), and action icons (like/save toggle).
  - **Player Controls**: Replicates playback buttons (Shuffle, Previous, Play/Pause, Next, Repeat).
  - **Playback Tracker**: Fully styled custom range slider input with interactive track coloring.
  - **Control & Volume Panel**: Includes auxiliary tools (lyrics, queue, connect to device, volume adjustment slider).
- **📱 Fully Responsive Design**: Seamless layout adaptations for tablets and smaller viewports using CSS media queries (e.g., hiding supplementary controls/badges at widths below `1000px`).

---

## 🛠️ Technology Stack

- **HTML5**: Structured with semantic tags (`<div class="sidebar">`, `<div class="main-content">`, `<div class="music-player">`, etc.) to match Spotify's layout hierarchy.
- **CSS3 (Vanilla)**:
  - Custom styling for input ranges (`-webkit-slider-thumb` / `-webkit-slider-runnable-track`).
  - Flexbox and CSS positions (sticky navigation, fixed footer controls).
  - Clean scale transformations, transitions (`0.15s ease`), and color transitions on hover.
  - Media queries for responsive grid-collapsing and component visibility adjustments.
- **Google Fonts**: Uses the [Montserrat](https://fonts.google.com/specimen/Montserrat) font family for matching the clean typography.
- **FontAwesome Icons**: Integrates the FontAwesome library for vector icons (House, Search, Plus, Arrow, Volume, etc.).

---

## 📂 Project Structure

```bash
spotify-clone/
│
├── index.html       # Main HTML markup containing structure & layout
├── style.css        # Clean vanilla stylesheet styling all elements, components, and layouts
├── LICENSE          # Standard open-source license details
├── README.md        # Project documentation
│
└── assets/          # Project visual resources (covers, icons, and player assets)
    ├── logo.png
    ├── library_icon.png
    ├── card1img.jpeg
    ├── card2img.jpeg
    ├── ... (other album & navigation icons)
```

---

## 💻 How to Customize

- **Add More Music Cards**: In [index.html](file:///d:/OneDrive%20-%20NATIONAL%20INSTITUTE%20OF%20TECHNOLOGY%20ANDHRA%20PRADESH/Code%20Files/spotify-clone/index.html), add more `.card` div blocks inside the `.cards-container` to automatically extend the flex grid layout.
- **Connect Audio Playback**: Integrate a JavaScript file (e.g., `app.js`) to listen to click events on control icons, toggle play states, and play audio using the HTML5 `Audio` API.
- **Add Dark/Light Mode toggle**: Change variables or swap class names to customize backgrounds (`#121212` to `#ffffff`).

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](file:///d:/OneDrive%20-%20NATIONAL%20INSTITUTE%20OF%20TECHNOLOGY%20ANDHRA%20PRADESH/Code%20Files/spotify-clone/LICENSE) file for more details.