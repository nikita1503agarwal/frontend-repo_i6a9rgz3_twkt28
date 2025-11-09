import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Workflow from "./components/Workflow";
import Demo from "./components/Demo";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <Workflow />
        <Demo />
      </main>
      <footer className="border-t border-gray-200 py-8">
        <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} STEMIFY. All rights reserved.</p>
          <p className="text-sm text-gray-500">Built with PyTorch, OpenCV, and explainable AI.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
