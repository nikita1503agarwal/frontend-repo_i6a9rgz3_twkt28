import { Brain, Camera, Flame, Database } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: "AI Disease Detection",
      desc: "ResNet-50 powered classifier for healthy, bacterial wilt, stem rot, powdery mildew, and more.",
    },
    {
      icon: Camera,
      title: "Explainable Vision",
      desc: "Grad-CAM heatmaps highlight infected regions for transparent decisions.",
    },
    {
      icon: Flame,
      title: "Severity & Advice",
      desc: "Color analysis estimates damage level and shares treatment recommendations.",
    },
    {
      icon: Database,
      title: "History & Feedback",
      desc: "Save predictions, export CSV, and collect hard examples for fine-tuning.",
    },
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-gray-900">Core capabilities</h2>
        <p className="mt-2 text-gray-600">Fast, accurate and explainable plant stem diagnostics.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 p-5 bg-gray-50/60 hover:bg-gray-50 transition">
              <div className="h-9 w-9 rounded-md bg-emerald-600 text-white grid place-items-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
