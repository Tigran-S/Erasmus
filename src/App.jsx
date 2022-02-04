import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import About from "./pages/about/About";
import Contact from "./pages/contact/contact";
import LoginForm from "./pages/login/loginForm";
import Projects from "./pages/projects/Projects";
import News from "./pages/news/news";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreativeParticipants from "./pages/creativeParticipants/creativeParticipants";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { usersCollectionRef } from "./pages/write/newPost";
import { getDocs } from "firebase/firestore";

import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer/footer";

function App() {
  const [user, setUser] = useState({});
  const currentUser = user?.email === "tigran_sargsyan@mail.ru";
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(usersCollectionRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  return (
    <>
      <Router>
        <Topbar currentUser={currentUser} />
        <Routes>
          <Route path="/" element={<Homepage posts={posts} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/post/:id"
            element={<Single currentUser={currentUser} posts={posts} />}
          />
          <Route
            path="/creativeParticipants"
            element={<CreativeParticipants posts={posts} />}
          />
          <Route path="/projects" element={<Projects posts={posts} />} />
          <Route path="/news" element={<News posts={posts} />} />
          <Route
            path="/write"
            element={currentUser ? <Write /> : <Homepage />}
          />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<LoginForm setUser={setUser} />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
