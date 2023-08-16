import { useState } from "react";
import Container from "../../shared/Container";
import './Navbar.css'


const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("bg-gray-900"); // Change this to your preferred dark background color
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("bg-gray-900");
    }
  };




  return (
    <div className="fixed w-full bg-white z-10 shadow-sm dark:bg-teal-600 dark:text-white">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between">
            <img
              className="w-20"
              src="https://i.ibb.co/10Dvygq/ghuddy.jpg"
              alt=""
            />
            {/* Dark Mode Start*/}
            <div>
              <div className="relative inline-block w-10 mr-2  align-middle select-none transition duration-200 ease-in">
                <input
                  type="checkbox"
                  name="toggle"
                  id="toggle"
                  checked={darkMode}
                  onChange={handleDarkModeToggle}
                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                />
                <label
                  htmlFor="toggle"
                  className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                ></label>
              </div>
              <label
                htmlFor="toggle"
                className="text-xs text-gray-700 dark:text-white"
              >
                Toggle Dark Mode
              </label>
            </div>
            {/* Dark Mode End*/}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Navbar