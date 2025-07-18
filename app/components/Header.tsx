"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu } from "@headlessui/react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import PrimaryLink from "./PrimaryLink";
import { SearchIcon } from "@/public/icons";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const services = [
    ["WebsiteDevelopment", "Website Development"],
    ["ppc", "PPC Advertising"],
    ["Branding&Design", "Branding & Design"],
    ["SoftwareDevelopment", "Software Development"],
    ["SeoOptimization", "SEO Optimization"],
    ["socailmediamarketing", "Social Media Marketing"],
    ["AIAutomation", "AI Automation"],
  ];

  return (
    <nav className="absolute lg:bg-transparent bg-body-bg left-0 3xl:top-12 lg:top-6 top-0 w-full 3xl:py-5 lg:py-2.5 py-px">
      <div className="mx-auto 3xl:max-w-[1760px] max-w-[1262px] w-full px-5">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute left-0 flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(prev => !prev)}
              className="group relative inline-flex items-center justify-center text-white"
            >
              <span className="sr-only">Toggle menu</span>
              {isMobileMenuOpen ? (
                <XMarkIcon className="size-8" />
              ) : (
                <Bars3Icon className="size-8" />
              )}
            </button>
          </div>

          {/* Logo and nav */}
          <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
            <div className="flex shrink-0 items-center">
              <Link href="/">
                <img
                  alt="Your Company"
                  src="../images/logo.svg"
                  className="3xl:h-auto lg:h-[60px] h-[43px]"
                />
              </Link>
            </div>
            <div className="hidden 3xl:ml-[70px] xl:ml-12 ml-8 lg:flex items-center">
              <ul className="flex items-center 3xl:gap-[35px] gap-6">
                <li className="relative">
                    <Menu as="div" className="relative">
                      <Menu.Button className="cursor-pointer !outline-0 hover:text-primary relative flex items-center 3xl:text-size-30 text-xl text-white font-normal gap-1.5">
                        Services
                        <img
                          src="../images/down-arrow.svg"
                          className="3xl:h-auto h-1.7 mt-1"
                          alt="arrow"
                        />
                      </Menu.Button>

                      <Menu.Items className="absolute right-0 z-10 mt-2 w-max origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                        {services.map(([href, label]) => (
                          <Menu.Item key={href}>
                            {({ active }) => (
                              <Link
                                href={`/${href}`}
                                className={`block px-4 py-2 text-sm ${
                                  active ? "bg-gray-100 text-gray-700" : "text-gray-700"
                                }`}
                              >
                                {label}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Menu>
                  </li>
                <li>
                  <Link href="/" className="hover:text-primary text-xl text-white font-normal">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-primary text-xl text-white font-normal">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary text-xl text-white font-normal">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Desktop right actions */}
          <div className="absolute inset-y-0 right-0 lg:flex hidden items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
            <form>
              <div className="flex items-center gap-10">
                <PrimaryLink href="/" className="bg-primary hover:bg-primary/[70%] xl:px-[45px] px-8">
                  Let’s Talk
                </PrimaryLink>
                <div className="relative">
                  <input type="text" className="border border-solid border-white rounded-5xl h-[46px] w-0 invisible opacity-0" />
                  <Link href="/" className="flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2">
                    <SearchIcon className="text-white" />
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-body-bg relative z-50">
          <div className="py-[70px] px-2">
            <div className="max-w-[220px] w-full mx-auto">
              <ul>
                <li className="mb-10">
                  <div>
                    <button
                      onClick={() => setIsServicesDropdownOpen(prev => !prev)}
                      className="flex items-center text-base text-white font-bold gap-1.5"
                    >
                      Services
                      <img src="../images/down-arrow.svg" className="h-1.5" alt="arrow" />
                    </button>
                    {isServicesDropdownOpen && (
                      <div className="mt-2">
                        {services.map(([href, label]) => (
                          <Link
                            key={href}
                            href={`/${href}`}
                            className="block text-base text-white mb-4"
                          >
                            {label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
                <li className="mb-10">
                  <Link href="/" className="text-base text-white font-bold">
                    Case Studies
                  </Link>
                </li>
                <li className="mb-10">
                  <Link href="/about" className="text-base text-white font-bold">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-base text-white font-bold">
                    Contact
                  </Link>
                </li>
              </ul>

              <div className="mt-14">
                <form>
                  <PrimaryLink
                    href="/"
                    className="bg-primary mb-5 !text-sm px-8 justify-center items-center flex h-[30px] w-full"
                  >
                    Let’s Talk
                  </PrimaryLink>
                  <div className="relative">
                    <input
                      type="text"
                      className="text-white pl-4 placeholder:text-white/[0.3] text-[10px] font-medium border border-white rounded-5xl h-[30px] w-full"
                      placeholder="Search"
                    />
                    <Link href="/" className="absolute right-4 top-1/2 -translate-y-1/2">
                      <SearchIcon className="text-white h-4" />
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
