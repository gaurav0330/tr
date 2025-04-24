export default function Pagination({ selectedPage, setSelectedPage, pages = [1, 2, 3] }) {
  return (
    <div className="mt-10 flex justify-center space-x-3">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setSelectedPage(page)}
          className={`px-4 py-2 rounded-full font-semibold transition 
            ${selectedPage === page
              ? "bg-primary text-white shadow-lg"
              : "bg-white text-black dark:bg-darkInput dark:text-white shadow-sm hover:shadow-md"}`}
          aria-label={`Go to page ${page}`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
