import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Fragment } from "react";
const person = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const Profile = ({ user, logout }) => {
  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button className="flex gap-3 w-full items-center justify-between rounded-full text-sm focus:outline-none">
          <div className="flex gap-3 font-medium">
            <img
              className="h-8 w-8 rounded-full"
              src={person.imageUrl}
              alt=""
            />
            <p className="text-normal">
              {user.name}
              <span className="text-gray-500 text-left text-sm font-normal block">
                {user.username}
              </span>
            </p>
          </div>
          <ChevronDownIcon
            className="h-3 w-3 text-gray-500"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg">
          <Menu.Item>
            <Link
              href="/profile"
              className="block px-4 py-2 text-sm text-gray-700"
            >
              Profile
            </Link>
          </Menu.Item>
          <Menu.Item>
            <button
              onClick={logout}
              className="block px-4 py-2 text-sm text-gray-700"
            >
              Log out
            </button>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Profile;
