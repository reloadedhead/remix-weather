import { Link, useLocation } from "remix";
import cn from "classnames";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon, SunIcon } from "@heroicons/react/outline";
import { NavbarLink } from "./types";
import { VFC } from "react";

interface Props {
  links: NavbarLink[];
}

const Navbar: VFC<Props> = ({ links }) => {
  const { pathname } = useLocation();
  return (
    <div className="min-h-full">
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <SunIcon className="h-8 w-8 fill-white stroke-white" />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {links.map((item) => (
                        <Link
                          key={item.name}
                          to={item.url}
                          className={cn(
                            item.url === pathname
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={
                            item.url === pathname ? "page" : undefined
                          }
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {links.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.url}
                    className={cn(
                      item.url === pathname
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.url === pathname ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Navbar;
