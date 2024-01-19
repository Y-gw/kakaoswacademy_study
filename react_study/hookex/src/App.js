import logo from './logo.svg';
import './App.css';
import FavoriteColor from './FavoriteColor';
import Car from './Car';
import Counter from './Counter';
import UseRefPrev from './UseRefPrev';
import TodosApp from './TodosApp';
import UseCallbackApp from './UseCallbackApp';
import Calculator from './Calculator';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";


function App() {
  return (
    <div textAlign ="center">
      <Calculator/>
    </div>
  );
}

export default App;
