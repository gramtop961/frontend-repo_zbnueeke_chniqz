function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50" />
      <div className="relative mx-auto max-w-5xl px-6 py-20">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur border border-gray-200 px-3 py-1 text-xs text-gray-600 shadow-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          Live
        </div>
        <h2 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
          Hello, World!
        </h2>
        <p className="mt-4 max-w-2xl text-gray-600 text-lg">
          A minimal, polished starter built with React and Tailwind. Use this as a
          springboard for your next idea.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-white font-medium shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Get Started
          </a>
          <a
            href="#learn-more"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-gray-900 font-medium shadow border border-gray-200 hover:bg-gray-50"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
