export function FooterComponent() {
  return (
    <header className="flex items-center justify-between px-5 py-7 sm:px-12 sm:py-9">
      <div className="flex items-center gap-4">
        <img
          src="https://imgs.search.brave.com/mt-HWrWKQUMDnGn3ZJDvkHsaf8Zck5jaFn5kGZ6Ycts/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLm5h/dGdlb2ZlLmNvbS9u/LzMzM2QyYjYxLWEz/MDktNDc4My05YTRj/LWY2ZGQ1M2U4YjBk/ZS8xMDkwLmpwZw"
          alt="Galaxy Store logo"
          className="h-12 w-12 object-cover"
        />

        <span className="text-lg font-semibold text-gray-900">
          Galaxy Store
        </span>
      </div>

      <nav className="flex items-center gap-6">
        <a className="text-xs font-medium text-gray-500 transition hover:text-gray-900">
          About
        </a>

        <a
          href="#"
          className="text-xs font-medium text-gray-500 transition hover:text-gray-900"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
