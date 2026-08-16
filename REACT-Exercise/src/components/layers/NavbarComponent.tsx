export function NavbarComponent() {
  return (
    <nav className="mx-2 mt-4 flex h-16 items-center justify-between rounded-[22px] bg-[#f3f1e6] px-6 sm:px-8">
      <div className="flex items-center gap-4">
        <img
          src="https://imgs.search.brave.com/mt-HWrWKQUMDnGn3ZJDvkHsaf8Zck5jaFn5kGZ6Ycts/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLm5h/dGdlb2ZlLmNvbS9u/LzMzM2QyYjYxLWEz/MDktNDc4My05YTRj/LWY2ZGQ1M2U4YjBk/ZS8xMDkwLmpwZw"
          alt="Can Craze"
          className="h-10 w-10 object-contain"
        />

        <span className="text-xl font-semibold text-gray-950">Galaxy Store</span>
      </div>

      <div className="flex items-center gap-8">
        <a
         
          className="text-sm font-medium text-gray-800 transition-colors hover:text-blue-600"
        >
          Home
        </a>

        <a
          
          className="flex items-center gap-1 text-sm font-medium hover:text-blue-600"
        >
          Products
        </a>

        <a className="text-sm font-medium text-gray-800 transition-colors hover:text-blue-600">
          About Us
        </a>

        <a className="text-sm font-medium text-gray-800 transition-colors hover:text-blue-600">
          Contact
        </a>
      </div>
    </nav>
  );
}
