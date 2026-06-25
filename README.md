
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

This project is a modern analytics dashboard built using React.js, Tailwind CSS, Axios, and ApexCharts. The application provides a responsive interface for visualizing business-related data such as projects, clients, team members, and platform statistics.

The dashboard integrates public REST APIs to fetch and display dynamic data in real time, demonstrating practical API consumption, state management with React Hooks, and component-based architecture.

---

<h2><a class="anchor" id="tools--technologies"></a>Tools & Technologies</h2>

- React.js → Component-based UI development
- Tailwind CSS → Utility-first styling for fast and responsive design
- ApexCharts → Interactive and customizable charts
- React Router → Page navigation and layout structure
- Axios → HTTP client for API requests
- REST APIs → Dynamic data integration
- GitHub

---
<h2><a class="anchor" id="project-structure"></a>Project Structure</h2>

```
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
```

---

<h2><a class="anchor" id="dashboard"></a>Dashboard</h2>

The dashboard includes multiple sections:
- 📊 Project Statistics → Area charts using ApexCharts
- 🌐 Platforms → Device/user distribution
- 🌐 API Integration → Dynamic data fetched from public APIs
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

- Connect dashboard to a custom backend
- Implement authentication (JWT)
- Add filtering and search functionality
- Add dark/light mode toggle
- Implement Redux Toolkit or Context API
- Add real-time updates using WebSockets

---
<h2><a class="anchor" id="author--contact"></a>Author & Contact</h2>

**Amrapali Bala**  
📧 Email: amrapalibala51@gmail.com
🔗 [LinkedIn](https://www.linkedin.com/in/amrapali-bala-546b78252/)  
🔗 [Portfolio](https://portfolio-react-tailwind-css-umber.vercel.app/)