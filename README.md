
# 🧾 Dashboard website

_Simple dashboard website using ReactJs, Tailwind CSS._

---

## 📌 Table of Contents
- <a href="#overview">Overview</a>
- <a href="#tools--technologies">Tools & Technologies</a>
- <a href="#project-structure">Project Structure</a>
- <a href="#dashboard">Dashboard</a>
- <a href="#how-to-run-this-project">How to Run This Project</a>
- <a href="#final-recommendations">Final Recommendations</a>
- <a href="#author--contact">Author & Contact</a>

---
<h2><a class="anchor" id="overview"></a>Overview</h2>

This project is a modern admin dashboard built using React.js, Tailwind CSS, and ApexCharts.
It provides a clean and responsive interface to visualize business data such as project progress, platform usage, client information, and team distribution.

The goal of this dashboard is to simulate a real-world analytics panel with a dark theme UI and modular component-based architecture.

---

<h2><a class="anchor" id="tools--technologies"></a>Tools & Technologies</h2>

- React.js → Component-based UI development
- Tailwind CSS → Utility-first styling for fast and responsive design
- ApexCharts → Interactive and customizable charts
- React Router → Page navigation and layout structure
- GitHub

---
<h2><a class="anchor" id="project-structure"></a>Project Structure</h2>

dashboard_updated/
│
├── node_modules/              # Installed dependencies
│
├── public/                    # Static assets
│   ├── Dashboard_screen.png
│   ├── dashboard.png
│   ├── fruit8.jpg
│
├── src/                       # Main source code
│   │
│   ├── assets/                # (Optional assets folder)
│   │
│   ├── components/            # Reusable UI components
│   │   ├── ClientCard.jsx
│   │   ├── Header.jsx
│   │   ├── Layout.jsx
│   │   ├── MemberCard.jsx
│   │   ├── Platforms.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectStatistics.jsx
│   │   └── Sidebar.jsx
│   │
│   ├── pages/                 # Page-level components
│   │   ├── Home.jsx
│   │   └── Members.jsx
│   │
│   ├── App.jsx                # Routing setup
│   ├── main.jsx               # Entry point (React DOM render)
│   ├── index.css              # Global styles (Tailwind)
│
├── .gitignore                 # Git ignored files
├── eslint.config.js          # ESLint configuration
├── index.html                # Root HTML file
├── package.json              # Project dependencies & scripts
├── package-lock.json         # Dependency lock file
├── vite.config.js            # Vite configuration
├── README.md                 # Project documentation

---

<h2><a class="anchor" id="dashboard"></a>Dashboard</h2>

The dashboard includes multiple sections:
- 📊 Growth Statistics → Area charts using ApexCharts
- 🌐 Platforms → Device/user distribution
- 📁 Current Projects → Progress tracking with files & members
- 🧑‍💼 Clients → Client information cards
- 👥 Members → Team distribution

---
<h2><a class="anchor" id="how-to-run-this-project"></a>How to Run This Project</h2>

- Clone the repository:
- Navigate to project folder:
- Install dependencies:
- Run the development server:
- Open in browser

---
<h2><a class="anchor" id="final-recommendations"></a>Final Recommendations</h2>

- Add API integration (real backend data)
- Implement authentication (login system)
- Add dark/light mode toggle
- Improve charts with real-time updates
- Use state management (Redux / Context API) for scaling

---
<h2><a class="anchor" id="author--contact"></a>Author & Contact</h2>

**Amrapali Bala**  
📧 Email: amrapalibala51@gmail.com
🔗 [LinkedIn](https://www.linkedin.com/in/amrapali-bala-546b78252/)  
🔗 [Portfolio](https://portfolio-react-tailwind-css-umber.vercel.app/)