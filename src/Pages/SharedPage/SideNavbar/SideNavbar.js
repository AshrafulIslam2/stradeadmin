import React, { useState } from "react";
//import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { RiProductHuntLine } from "react-icons/ri";
import { SiBrandfolder, SiMarketo, SiOpenaccess } from "react-icons/si";
import { GiTreeBranch } from "react-icons/gi";
import { TbFileInvoice } from "react-icons/tb";
import { FcAbout } from "react-icons/fc";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  AiFillAppstore,
  AiFillControl,
  AiFillShop,
  AiOutlineShoppingCart,
  AiOutlineSetting,
  AiFillVideoCamera,
  AiOutlineBoxPlot,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const SideNavbar = () => {
  const [sidebaropen, setSidebarOpen] = useState(true);
  const [submanues, setSubmenues] = useState({ id: "0", toggle: false });
  const Menus = [
    {
      id: "01",
      title: "overview",
      mainroutingtitle: "",
      SubmenuesList: [
        { title: "Dashboard", routingtitle: "overview/dashboard" },
      ],
      image: <AiFillAppstore />,
    },
    {
      id: "02",
      title: "Product Management",
      image: <RiProductHuntLine />,
      mainroutingtitle: "productmanagement",
      SubmenuesList: [
        // { title: "Dashboard", routingtitle: "productmanagement/dashboard" },
        {
          title: "All Products",
          routingtitle: "productmanagement/allproducts",
        },
        {
          title: "Add Products",
          routingtitle: "productmanagement/addproducts",
        },
      ],
    },
    {
      id: "03",
      title: "Order Management",
      image: <AiOutlineShoppingCart />,
      mainroutingtitle: "overview",
      SubmenuesList: [
        // { title: "Dashboard", routingtitle: "ordermanagement/dashboard" },
        {
          title: "All Order",
          routingtitle: "ordermanagement/allproducts",
        },
      ],
      gap: true,
    },

    {
      id: "04",
      title: "Categories",
      image: <AiOutlineBoxPlot />,
      mainroutingtitle: "overview",
      SubmenuesList: [
        { title: "Add Categories", routingtitle: "categories/addcategories" },
      ],
    },
    {
      id: "05",
      title: "Brand Management",
      mainroutingtitle: "overview",
      image: <SiBrandfolder />,
      SubmenuesList: [{ title: "Add Brand", routingtitle: "brand/addbrand" }],
    },
    {
      id: "06",
      title: "UI/UX",
      image: <GiTreeBranch />,
      mainroutingtitle: "overview",
      SubmenuesList: [
        { title: "Add Design", routingtitle: "design/adddesign" },
      ],
    },
    {
      id: "07",
      title: "Marketing",
      image: <SiMarketo />,
      mainroutingtitle: "overview",
      SubmenuesList: [
        { title: "Add Campaign", routingtitle: "marketing/addcampain" },
      ],
    },
    {
      id: "08",
      title: "Vendor Management",
      mainroutingtitle: "overview",
      image: <AiFillShop />,
      SubmenuesList: [
        { title: "Dashboard", routingtitle: "vendor/dashboard" },
        {
          title: "All Vendor",
          routingtitle: "vendor/allvendor",
        },
        {
          title: "Verify Vendor",
          routingtitle: "vendor/verfiyvendor",
        },
      ],
    },
    {
      id: "09",
      title: "Access Control",
      mainroutingtitle: "overview",
      image: <SiOpenaccess />,
      SubmenuesList: [
        { title: "Access Setting", routingtitle: "Access/setting" },
      ],
      gap: true,
    },

    {
      id: "10",
      title: "Tutorial",
      image: <AiFillVideoCamera />,
      mainroutingtitle: "overview",
      SubmenuesList: [
        { title: "Add tutorial", routingtitle: "turorial/addtutorial" },
      ],
    },
    {
      id: "11",
      title: "Invoice",
      image: <TbFileInvoice />,
      mainroutingtitle: "overview",
      SubmenuesList: [{ title: "Edit Invoice", routingtitle: "invoice/edit" }],
      gap: true,
    },
    {
      id: "12",
      title: "Setting",
      image: <AiFillControl />,
      SubmenuesList: [{ title: "Main Setting", routingtitle: "main/setting" }],
    },
    {
      id: "13",
      title: "SMTP Setting",
      image: <AiOutlineSetting />,
      mainroutingtitle: "overview",
      SubmenuesList: [{ title: "Add SMTP", routingtitle: "SMTP/setting" }],
    },
    {
      id: "14",
      title: "About",
      image: <FcAbout />,
      mainroutingtitle: "overview",
      SubmenuesList: [{ title: "Edit About", routingtitle: "about/edit" }],
    },
  ];
  return (
    <div
      className={` ${
        sidebaropen
          ? "w-72 transition-all px-4 duration-500 ease-in-out"
          : "w-20 transition-all px-0 duration-500 ease-in-out"
      } h-[100%] bg-blue-500  pt-8 lg:72`}
    >
      <div className=" relative mt-10 mb-10">
        {
          <HiOutlineBars3
            className=" absolute  -right-0 -top-8  text-3xl text-white  cursor-pointer transition-all duration-500 hover:-right-0"
            onClick={() => setSidebarOpen(!sidebaropen)}
          />
        }
      </div>
      <div>
        {/* Logo Div Start  */}
        <div className="flex gap-x-2 items-center justify-center w-full">
          <img
            className={`${
              !sidebaropen && "w-32"
            } w-32 cursor-pointer duration-300`}
            src="https://i.ibb.co/f8cv2gc/shikkha-Logo.jpg"
            alt=""
            srcSet=""
          />
        </div>
        {/* Logo Div End  */}
      </div>
      {/* Menues Div Start From Here */}
      <div className="mt-6">
        <ul>
          {Menus?.map((menu, index) => (
            <>
              <li
                className={`flex  items-center text-white  gap-x-2 rounded-t-md p-2 cursor-pointer hover:bg-white hover:text-black text-sm hover:font-medium ${
                  menu.gap ? "mt-4" : "mt-2"
                } `}
              >
                <span
                  className={` ${!sidebaropen && "text-3xl   ml-3"}`}
                  onClick={() => setSidebarOpen(!sidebaropen)}
                >
                  {menu.image}
                </span>
                {/* Menus Title */}
                <span
                  className={`flex-1  ${
                    sidebaropen ? "visible " : "invisible"
                  }`}
                >
                  <Link to={`${menu.mainroutingtitle}`}> {menu.title}</Link>
                </span>
                {/* Let create Submenus */}
                {menu.SubmenuesList && (
                  <IoIosArrowDown
                    onClick={() =>
                      setSubmenues({ id: menu.id, toggle: !submanues.toggle })
                    }
                  />
                )}
              </li>
              {/* Here we Start Our Sub menu show case */}
              {menu.SubmenuesList &&
                sidebaropen &&
                menu.id === submanues.id &&
                submanues.toggle === true && (
                  <ul className="text-black bg-white rounded-b-md">
                    {menu.SubmenuesList.map((sb) => (
                      <>
                        <li className="text-left pl-10 pb-4 text-sm cursor-pointer hover:text-blue-500 hover:font-medium">
                          <Link to={sb.routingtitle}>{sb.title}</Link>
                        </li>
                      </>
                    ))}
                  </ul>
                )}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNavbar;
