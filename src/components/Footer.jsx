function Footer() {
  return (
    <footer className="mx-auto max-w-5xl px-6 py-10 text-sm text-gray-500">
      <div className="flex items-center justify-between border-t border-gray-200 pt-6">
        <p>© {new Date().getFullYear()} Hello World. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-700">Privacy</a>
          <a href="#" className="hover:text-gray-700">Terms</a>
          <a href="#" className="hover:text-gray-700">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
