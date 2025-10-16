import { Star, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Star,
    title: "Beautiful defaults",
    description:
      "Clean typography, spacious layout, and tasteful colors out of the box.",
  },
  {
    icon: Shield,
    title: "Secure foundation",
    description: "Production-ready tooling configured and ready to ship.",
  },
  {
    icon: Zap,
    title: "Fast iteration",
    description: "Hot reload and instant feedback while you build.",
  },
];

function Features() {
  return (
    <section id="learn-more" className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid sm:grid-cols-3 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <f.icon size={20} />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              {f.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
