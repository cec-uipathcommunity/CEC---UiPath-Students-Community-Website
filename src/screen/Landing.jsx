// Landing.jsx
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "../index.css";
import uiPathLogo from "../image/UiPath Student Developer_rgb_medium.png";

const navigation = [
  { name: "Quiz", href: "/quizquest" },
  { name: "Features", href: "/features" },
  { name: "Marketplace", href: "/marketplace" },
  { name: "Company", href: "/company" },
];

export default function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">CEC - UiPath Students Community </span>
              <img className="h-12 w-auto" src={uiPathLogo} alt="" />
            </a>
          </div>
          {/* ... Other sections of the navigation bar */}
        </nav>

        {/* Mobile Menu */}
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          {/* ... Mobile menu content */}
        </Dialog>
      </header>

      {/* Main Content */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-500" />
        {/* ... Other background elements and styling */}

        {/* Main Content Text */}
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Welcome to UiPath Community</h1>
          <p className="mt-4 text-lg">Empowering developers with automation</p>
        </div>

        {/* Features Section */}
        <section className="mt-12 px-6 lg:px-20">
          <h2 className="text-3xl font-bold">Features</h2>
          {/* ... Features content */}
        </section>

        {/* Call to Action */}
        <section className="mt-12 px-6 lg:px-20">
          <h2 className="text-3xl font-bold">Get Started</h2>
          <p className="mt-4">Join our community and explore the possibilities.</p>
          <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">Join Now</button>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 py-8">
          <p>&copy; 2024 UiPath Community. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export { navigation }; // Exporting the navigation array for external use
