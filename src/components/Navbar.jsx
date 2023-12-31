import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },
  { name: "Shop", href: "/shop", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Disclosure as="nav" className="transparent">
      {({ open, close }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-[100px] items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <img
                      className="block h-44 w-auto lg:hidden"
                      src="/images/zam_trans2.png"
                      alt="Your Company"
                    />
                  </Link>
                  <Link to="/">
                    <img
                      className="hidden h-44 w-auto lg:block"
                      src="/images/zam_trans2.png"
                      alt="Your Company"
                    />
                  </Link>
                </div>
              </div>

              {/* Right Side */}
              <div className="absolute inset-y-0 right-10 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-[#8c560c]  hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                {/* Links  */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.href === location.pathname
                            ? "bg-[#8c560c] text-white"
                            : "text-[#8c560c] hover:bg-[#8c560c] hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => navigate("/cart")}
                  type="button"
                  className="rounded-full bg-zamzam_bg p-1 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 hidden md:flex ml-4"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure
                  key={item.name}
                  as="nav"
                  href={item.href}
                  className={classNames(
                    item.href === location.pathname
                      ? "bg-[#8c560c] text-white"
                      : "text-[8c560c]",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  <Link to={item.href} onClick={() => close()}>
                    {item.name}
                  </Link>
                </Disclosure>
              ))}
              <Link
              onClick={() => close()}
                to="/cart"
                className={classNames(
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                Cart
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
export default Navbar;
