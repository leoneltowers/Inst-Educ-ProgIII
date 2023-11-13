export function Label({ htmlFor, children }) {
  return (
    <label class="flex cursor-pointer items-center justify-between p-1 text-slate-400">
      Accept terms of use
      <div class="relative inline-block">
        <input class="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-gary-400 checked:border-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2" type="checkbox" />
        <span class="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-slate-600 transition-all duration-200 peer-checked:left-7 peer-checked:bg-green-300"></span>
      </div>

    </label>
  );
}
