import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Contact from "./pages/contact/contact";
import LoginForm from "./pages/login/loginForm";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Projects from "./pages/projects/Projects";
import News from "./pages/news/news";
import CreativeParticipants from "./pages/creativeParticipants/creativeParticipants";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [user, setUser] = useState({});
  const currentUser = user?.email === "tigran_sargsyan@mail.ru";
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  return (
    <>
      <Router>
        <Topbar currentUser={currentUser} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/post/:id"
            element={<Single currentUser={currentUser} />}
          />
          <Route
            path="/creativeParticipants"
            element={<CreativeParticipants />}
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/news" element={<News />} />
          <Route
            path="/write"
            element={currentUser ? <Write /> : <Homepage />}
          />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<LoginForm setUser={setUser} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
