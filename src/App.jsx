
import { Outlet } from 'react-router-dom';
import './App.css'
import Navbar from './components/navbar/Navbar';
import Hotels from './components/Hotels/Hotels';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className="bg-neutral-200 dark:bg-slate-900 dark:text-white">
        <Outlet></Outlet>
        <Hotels></Hotels>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App
