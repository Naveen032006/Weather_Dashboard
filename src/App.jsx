import React, { Suspense, useEffect } from "react";

import "./App.css";
import {Layout} from './layout'


function App() {
  useEffect(() => {
    document.title = "Weather Dashboard";
  }, []);
  return (
    <Layout/>
  );
}

export default App;
