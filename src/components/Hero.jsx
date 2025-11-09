import { Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-white" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Diagnose plant stem diseases with AI precision
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Upload a photo or use your webcam to detect, explain, and track stem diseases. Get severity estimates, Grad-CAM heatmaps, and actionable recommendations in seconds.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#demo" className="inline-flex items-center gap-2 rounded-md bg-green-600 text-white px-4 py-2 font-medium hover:bg-green-700">
              <Rocket className="h-4 w-4" /> Try the demo
            </a>
            <a href="#features" className="inline-flex rounded-md border border-gray-300 px-4 py-2 font-medium text-gray-700 hover:bg-gray-50">
              Learn more
            </a>
          </div>
          <ul className="mt-6 text-sm text-gray-600 grid grid-cols-2 gap-x-6 gap-y-2">
            <li>• ResNet-50 classification</li>
            <li>• Grad-CAM explainability</li>
            <li>• Severity estimation</li>
            <li>• History and export</li>
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-xl border border-gray-200 bg-white shadow-sm p-3">
            <div className="h-full w-full rounded-lg bg-gradient-to-br from-green-100 via-white to-emerald-50 grid place-items-center text-center">
              <div>
                <p className="text-sm uppercase tracking-widest text-emerald-600 font-semibold">Live Computer Vision</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">Webcam + Upload Ready</p>
                <p className="mt-2 text-gray-600">Streamlined UI for image capture and instant insights.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
