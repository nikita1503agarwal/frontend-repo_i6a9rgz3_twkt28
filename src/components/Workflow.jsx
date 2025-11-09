import { ArrowRight, Settings2, ScanSearch, Database, FlaskConical } from "lucide-react";

export default function Workflow() {
  const steps = [
    { icon: ScanSearch, title: "Acquire", desc: "Upload or capture stem image via webcam." },
    { icon: Settings2, title: "Process", desc: "Resize to 224×224 and normalize for ResNet-50." },
    { icon: FlaskConical, title: "Infer", desc: "Predict class probabilities and severity." },
    { icon: Database, title: "Log", desc: "Store results and feedback for fine-tuning." },
  ];

  return (
    <section id="workflow" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-gray-900">Workflow</h2>
        <p className="mt-2 text-gray-600">From image to insights in seconds.</p>

        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }, idx) => (
            <div key={title} className="relative rounded-xl border border-gray-200 p-5 bg-gray-50/60">
              <div className="h-9 w-9 rounded-md bg-emerald-600 text-white grid place-items-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">{desc}</p>
              {idx < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
