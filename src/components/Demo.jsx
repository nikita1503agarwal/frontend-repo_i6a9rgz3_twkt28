import { useRef, useState } from "react";
import { Upload, Webcam, Loader2, Image as ImageIcon, CheckCircle2 } from "lucide-react";

export default function Demo() {
  const inputRef = useRef(null);
  const videoRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [isScanning, setIsScanning] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  const openFilePicker = () => inputRef.current?.click();

  const startWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
    } catch (err) {
      console.error(err);
      alert("Webcam access was blocked. Please allow camera permissions.");
    }
  };

  const simulateScan = async () => {
    setIsScanning(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsScanning(false);
  };

  return (
    <section id="demo" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Try the demo</h2>
            <p className="mt-2 text-gray-600">Upload a stem image or use your webcam to preview the STEMIFY experience.</p>
          </div>
        </div>

        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <div className="flex flex-wrap items-center gap-3">
              <button onClick={openFilePicker} className="inline-flex items-center gap-2 rounded-md bg-emerald-600 text-white px-4 py-2 font-medium hover:bg-emerald-700">
                <Upload className="h-4 w-4" /> Upload image
              </button>
              <button onClick={startWebcam} className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 font-medium text-gray-700 hover:bg-gray-50">
                <Webcam className="h-4 w-4" /> Use webcam
              </button>
              <input ref={inputRef} onChange={handleFileChange} type="file" accept="image/*" className="hidden" />
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4">
              {preview ? (
                <img src={preview} alt="preview" className="w-full h-72 object-cover rounded-lg border" />
              ) : (
                <div className="h-72 rounded-lg border border-dashed grid place-items-center text-gray-500">
                  <div className="flex items-center gap-2 text-sm">
                    <ImageIcon className="h-4 w-4" /> No image selected yet
                  </div>
                </div>
              )}

              <video ref={videoRef} className="w-full h-72 rounded-lg border bg-black" muted playsInline />
            </div>

            <div className="mt-4">
              <button onClick={simulateScan} className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-4 py-2 font-medium hover:bg-black">
                {isScanning ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Analyzing...
                  </>
                ) : (
                  <>Run analysis</>
                )}
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <h3 className="font-semibold text-gray-900">Sample output</h3>
            <div className="mt-4 grid gap-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-800">Prediction</p>
                  <span className="text-xs rounded-full bg-emerald-50 text-emerald-700 px-2 py-0.5">ResNet-50</span>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  <p>Class: <span className="font-semibold text-gray-900">powdery_mildew</span></p>
                  <p>Confidence: <span className="font-semibold text-gray-900">0.92</span></p>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <p className="font-medium text-gray-800">Severity estimation</p>
                <div className="mt-2 h-2 w-full bg-gray-100 rounded-full">
                  <div className="h-2 bg-amber-500 rounded-full" style={{ width: "64%" }} />
                </div>
                <p className="mt-2 text-sm text-amber-700">Moderate damage (0.64)</p>
              </div>

              <div className="rounded-lg border p-4">
                <p className="font-medium text-gray-800">Grad-CAM heatmap</p>
                <div className="mt-2 h-40 rounded-md bg-[conic-gradient(at_50%_50%,_#fef3c7,_#fef08a,_#fde68a,_#fca5a5,_#fef3c7)] border" />
                <p className="mt-2 text-xs text-gray-500">Heatmap highlights suspected lesion regions.</p>
              </div>

              <div className="rounded-lg border p-4">
                <p className="font-medium text-gray-800">Recommendations</p>
                <ul className="mt-2 text-sm text-gray-600 list-disc pl-5 space-y-1">
                  <li>Prune affected stems and dispose safely.</li>
                  <li>Apply sulfur-based fungicide per label guidance.</li>
                  <li>Improve airflow; avoid overhead watering.</li>
                </ul>
                <p className="mt-3 inline-flex items-center gap-1 text-emerald-700 text-sm">
                  <CheckCircle2 className="h-4 w-4" /> Save results and track over time
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
