import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EditPage from "./pages/EditPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FileContext } from "./contexts/fileContext";

const App = () => {

  const { fileURL } = useContext(FileContext);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={HomePage} exact />
        {fileURL ? <Route path="/edit" component={EditPage} exact /> : <Redirect push to="/" path="/"/>}
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
