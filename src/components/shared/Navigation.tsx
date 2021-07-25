import React, { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  MenuIcon,
  XIcon,
  CogIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import logo from "../../img/ICON/logo2.png";

const navigation = [
  { name: "Home", href: "#!", current: true },
  { name: "Dashboard", href: "#!", current: false },
];

const classNames = (...classes: any) => {
  return classes.filter(Boolean).join(" ");
};
const Navigation = () => {
  return (
    <Disclosure as="nav" className="bg-gray-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <a href="#!" className="font-bold text-2xl">
                    <img src={logo} width={100} height={100} alt="logo" />
                  </a>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "text-gray-900 hover:text-red-500"
                            : "text-gray-900 hover:text-red-500",
                          "px-2 py-2 rounded-md text-sm font-bold"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <button className="text-gray-900 hover:text-red-500 px-3 p-1 focus:outline-none">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  {({ open }) => (
                    <>
                      <div>
                        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://i.ibb.co/Wfx4Tk4/alamgir-edit-2nd.png"
                            width={30}
                            height={30}
                            alt="logo"
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          static
                          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        >
                          <div className="flex justify-center py-5">
                            <img
                              className="h-12 w-12 rounded-full"
                              src="https://i.ibb.co/Wfx4Tk4/alamgir-edit-2nd.png"
                              height={50}
                              width={50}
                              alt="logo"
                            />
                          </div>

                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#!"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 flex justify-center"
                                    : "flex justify-centerr",
                                  "flex justify-center px-4 py-2 text-md text-gray-900 font-medium"
                                )}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#!"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "flex px-4 py-2 text-md text-gray-900 font-medium"
                                )}
                              >
                                <CogIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />{" "}
                                <span className="px-2">Settings</span>
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#!"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "flex px-4 py-2 text-md text-gray-900 font-medium"
                                )}
                              >
                                <LogoutIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />{" "}
                                <span className="px-2">Login</span>
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-gray-900 hover:text-red-500 px-2 py-2"
                      : "text-gray-900 hover:text-red-500 px-2 py-2",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navigation;
