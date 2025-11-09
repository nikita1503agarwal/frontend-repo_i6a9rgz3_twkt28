import { Leaf, History } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-md bg-green-600 text-white grid place-items-center">
            <Leaf className="h-5 w-5" />
          </div>
          <div>
            <p className="font-bold text-gray-900 leading-none">STEMIFY</p>
            <p className="text-xs text-gray-500 leading-none mt-0.5">Intelligent Stem Diagnosis</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
          <a href="#workflow" className="text-gray-600 hover:text-gray-900">Workflow</a>
          <a href="#demo" className="text-gray-600 hover:text-gray-900">Demo</a>
        </nav>
        <a href="#history" className="inline-flex items-center gap-2 text-sm font-medium text-green-700 hover:text-green-800">
          <History className="h-4 w-4" /> History
        </a>
      </div>
    </header>
  );
}
