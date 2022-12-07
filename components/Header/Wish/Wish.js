import { HeartIcon } from "@heroicons/react/24/solid";

const Wish = () => {
  return (
    <button
      type="button"
      className="rounded-full p-1 text-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
    >
      <HeartIcon width={20} />
    </button>
  );
};

export default Wish;
