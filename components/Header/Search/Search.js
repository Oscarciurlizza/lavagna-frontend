import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
export default function Search() {
  return (
    <div className="flex items-center justify-end gap-3 w-full">
      <input type="text" className="w-full text-sm bg-gray-100 p-2" placeholder="what are yo looking for?" />
      <MagnifyingGlassIcon width={20} />
    </div>
  );
}
