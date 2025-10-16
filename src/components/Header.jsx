import { Rocket } from "lucide-react";

function Header() {
  return (
    <header className="w-full sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-200/70">
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white shadow-lg">
            <Rocket size={20} />
          </span>
          <div>
            <h1 className="text-lg font-semibold tracking-tight">Hello World</h1>
            <p className="text-xs text-gray-500">A tiny app to say hi</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-sm text-gray-600">
          <span className="px-3 py-1 rounded-full bg-gray-100">Vite + React</span>
          <span className="px-3 py-1 rounded-full bg-gray-100">Tailwind CSS</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
