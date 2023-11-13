export function Button({ onClick, children }) {
  return (
    <button
    class="inline-block content-center concursor-pointer rounded-md bg-red-500 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
