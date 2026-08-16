export function FooterComponent() {
  return (
    <div className="min-h-screen px-4 py-3">
      <div className="mx-auto max-w-[11000px] rounded-lg border border-gray-200 bg-white shadow-sm">
        <header className="flex items-center justify-between px-12 py-9">
          <div className="flex items-center gap-4">
            <div className="flex h-7 w-7 items-center justify-center">
              <span className="text-[10px] font-bold leading-[9px] text-gray-700">
                CAN
                <br />
                CRAZE
              </span>
            </div>

            <span className="text-lg font-semibold text-gray-900">
              Can Craze
            </span>
          </div>

          <nav className="flex items-center gap-6">
            <a className="text-xs font-medium text-gray-500 transition hover:text-gray-900">
              About
            </a>

            <a className="text-xs font-medium text-gray-500 transition hover:text-gray-900">
              Contact
            </a>
          </nav>
        </header>

        <div className="mx-12 border-t border-gray-200"></div>

        <footer className="px-12 py-7 text-center">
          <p className="text-xs text-gray-500">
            © 2025 Can Craze™. All Rights Reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
