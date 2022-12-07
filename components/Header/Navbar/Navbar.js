import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

import Link from "next/link";
import {
  ArrowPathIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  PlayIcon,
  PhoneIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: Squares2X2Icon,
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];

const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
export default function Navbar() {
  return (
    <Popover.Group as="nav" className="hidden md:flex items-center gap-10">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(
                open ? "text-gray-900" : "text-black",
                "group inline-flex items-center gap-2 text-base font-normal hover:text-gray-900 outline-none"
              )}
            >
              <span>Categories</span>
              <ChevronDownIcon
                className={classNames(
                  open ? "text-gray-600" : "text-black",
                  "h-3 w-3 group-hover:text-gray-500"
                )}
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-start rounded-lg p-3 hover:bg-blue-50"
                      >
                        <item.icon
                          className="h-6 w-6 flex-shrink-0 text-black"
                          aria-hidden="true"
                        />
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            {item.name}
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                    {callsToAction.map((item) => (
                      <div key={item.name} className="flow-root">
                        <a
                          href={item.href}
                          className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-blue-50"
                        >
                          <item.icon
                            className="h-6 w-6 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="ml-3">{item.name}</span>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
      <Link
        href="#"
        className="text-base font-normal text-black hover:text-gray-900"
      >
        Promotions
      </Link>
      <Link
        href="#"
        className="text-base font-normal text-black hover:text-gray-900"
      >
        Providers
      </Link>
      <Link
        href="#"
        className="text-base font-normal text-black hover:text-gray-900"
      >
        Sucursals
      </Link>
    </Popover.Group>
  );
}
