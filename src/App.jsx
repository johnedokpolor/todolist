import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style.css";
import ScrollToTop from "./ScrollToTop";
import { useSelector } from "react-redux";
import { SignUp, SignIn, Dashboard } from "./pages/pages";

function App() {
  document.title = "TodoList";

  const dark = useSelector((state) => state.darkmode.dark);
  console.log(dark);
  return (
    <Router>
      <ScrollToTop />

      <div className={dark ? "dark" : "light"}>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
