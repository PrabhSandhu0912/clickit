import { Fragment, useEffect, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { navigation } from "../../../config/navigationMenu";
import AuthModal from "../Auth/AuthModal";
import { useDispatch, useSelector } from "react-redux";
import { deepPurple } from "@mui/material/colors";
import { getUser, logout } from "../../../Redux/Auth/Action";
import { getCart } from "../../../Redux/Customers/Cart/Action";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth, cart } = useSelector((store) => store);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openUserMenu = Boolean(anchorEl);
  const jwt = localStorage.getItem("jwt");
  const location = useLocation();

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
      dispatch(getCart(jwt));
    }
  }, [jwt]);

  const handleUserClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseUserMenu = (event) => {
    setAnchorEl(null);
  };

  const handleOpen = () => {
    setOpenAuthModal(true);
  };
  const handleClose = () => {
    setOpenAuthModal(false);
  };

  const handleCategoryClick = (category, section, item, close) => {
    navigate(`/${category.id}/${section.id}/${item.id}`);
    close();
  };

  const handleCategoryClickMobile = (category, section, item) => {
    navigate(`/${category.id}/${section.id}/${item.id}`);
  };

  useEffect(() => {
    if (auth.user) {
      handleClose();
    }
    if (
      auth.user?.role !== "ADMIN" &&
      (location.pathname === "/login" || location.pathname === "/register")
    ) {
      navigate(-1);
    }
  }, [auth.user]);

  const handleLogout = () => {
    handleCloseUserMenu();
    dispatch(logout());
  };
  const handleMyOrderClick = () => {
    handleCloseUserMenu();
    navigate("/account/order");
  };

  return (
    <div className="bg-white pb-10">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-indigo-600 text-indigo-600"
                                : "border-transparent text-gray-900",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium border-none"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-10 px-4 pb-8 pt-10"
                      >
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className="group relative text-sm"
                            >
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
                                />
                              </div>
                              <a
                                href={item.href}
                                className="mt-6 block font-medium text-gray-900"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="font-medium text-gray-900"
                            >
                              {section.name}
                            </p>
                            {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <p
                                    onClick={() =>
                                      handleCategoryClickMobile(
                                        category,
                                        section,
                                        item
                                      )
                                    }
                                    className="cursor-pointer hover:text-gray-800"
                                  >
                                    {item.name}
                                  </p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on all orders
        </p>

        <nav aria-label="Top" className="mx-auto">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center px-30">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to="/">
                  <span className="sr-only">Gokarn</span>
                  <img
                    src="data:image/webp;base64,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"
                    alt="gokarnshopping"
                    className="h-8 w-8 mr-2"
                  />
                </Link>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch z-10">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open, close }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-indigo-600 text-indigo-600"
                                  : "border-transparent text-gray-700 hover:text-gray-800",
                                "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm"
                                        >
                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a
                                            href={item.href}
                                            className="mt-6 block font-medium text-gray-900"
                                          >
                                            <span
                                              className="absolute inset-0 z-10"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </a>
                                          <p
                                            aria-hidden="true"
                                            className="mt-1"
                                          >
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className="font-medium text-gray-900"
                                          >
                                            {section.name}
                                          </p>
                                          {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                <p
                                                  onClick={() =>
                                                    handleCategoryClick(
                                                      category,
                                                      section,
                                                      item,
                                                      close
                                                    )
                                                  }
                                                  className="cursor-pointer hover:text-gray-800"
                                                >
                                                  {item.name}
                                                </p>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {auth.user ? (
                    <div>
                      <Avatar
                        className="text-white"
                        onClick={handleUserClick}
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        // onClick={handleUserClick}
                        sx={{
                          bgcolor: deepPurple[500],
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        {auth.user?.firstName[0].toUpperCase()}
                      </Avatar>
                      {/* <Button
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleUserClick}
                      >
                        Dashboard
                      </Button> */}
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openUserMenu}
                        onClose={handleCloseUserMenu}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem onClick={handleMyOrderClick}>
                          My Orders
                        </MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                      </Menu>
                    </div>
                  ) : (
                    <Button
                      onClick={handleOpen}
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      Signin
                    </Button>
                  )}
                </div>

                {/* Search */}

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Button
                    onClick={() => navigate("/cart")}
                    className="group -m-2 flex items-center p-2"
                  >
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      {cart.cart?.totalItem}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <AuthModal handleClose={handleClose} open={openAuthModal} />
    </div>
  );
}
