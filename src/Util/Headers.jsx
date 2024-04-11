// import React from 'react'
// import { Link } from 'react-router-dom'
// import FashionLogo from '../../images/fashion-logo.png';
// import Profile from '../../images/profile.svg';
// import Store from '../../images/Store.svg';
// import ArrowDown from '../../images/angle-down.svg';
// import Order from '../../images/orders.svg';
// import Wishlist from '../../images/wishlist.svg';
// //"rafce"  and enter for this template code

// const Headers = () => {
//   return (
//     <nav className='flex justify-between items-center py-2 px-4 bg-white text-blue-700'>
//       <Link to="/images" className='inline-block'>
//         <img src={FashionLogo} alt="fashion Logo" />
//       </Link>
//       <div class="search-wrapper w-[600px] relative">
//         <Link to="/search" className='inline-block absolute top-0 left-0 p-2'>
//           <svg width="24" height="24" class="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Search Icon</title><path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 16L21 21" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
//         </Link>
//         <input type="text" placeholder='Search for products, brands and more ' className='w-[100%] py-2 px-10 rounded-sm' />
//       </div>
//       <ul className="login-wrapper flex items-center">
//         <li className='relative'>
//           <button onClick={toggleDropdown} className='flex items-center text-blue-700 hover:bg-blue-700 hover:text-white'>
//             <span className='pe-1'><img src={Profile} alt="Profile" />
//             </span>Login
//           </button>

//           {dropdownOpen && (
//             <ul className='absolute top-14 left-0 bg-orange-700 px-4 py-2 dropdown-menu'>
//               <li>
//                 <Link to="/" className='block py-2 px-4 text-white hover:bg-blue-700'>
//                   <span>New customer?</span>
//                   <span>Sign Up</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/" className='block py-2 px-4 text-white hover:bg-blue-700'>
//                   <span className='ps-1'>
//                     <img src={Profile} alt="Profile"/>
//                   </span>My profile</Link>
//               </li>
//               <li>
//                 <Link to="/" className='block py-2 px-4 text-white hover:bg-blue-700'>
//                   <span className='ps-1'>
//                     <img src={Order} alt="Order"/>
//                   </span>Order</Link>
//               </li>
//               <li>
//                 <Link to="./Private/Wishist" className='block py-2 px-4 text-white hover:bg-blue-700'>
//                   <span className='ps-1'><img src={Wishlist} alt="Wishist"/>
//                   </span>Wishlist</Link>
//               </li>
//             </ul>
//           )}
//         </li>
//       </ul>
//       <Link to="/search" className='flex items-center'>
//         <span className='pe-1'>
//           <img src={Store} alt="Store" /> 
//         </span> Become a Seller
//       </Link>
//       <div className="setting">
//         <div className="setting-bar">
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Headers

//   return (
//     <nav className='flex justify-between items-center py-2 px-4 bg-blue-600'>
//       <Link to="/images" className='inline-block'>
//         <img src={FashionLogo} alt="fashion Logo" />
//       </Link>
//       <div class="search-wrapper w-[600px] relative">
//         <Link to="/search" className='inline-block absolute top-0 left-0 p-2'>
//           <svg width="24" height="24" class="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Search Icon</title><path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 16L21 21" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
//         </Link>
//         <input type="text" placeholder='Search for products, brands and more ' className='w-[100%] py-2 px-10 rounded-sm' />
//       </div>
//       <ul className="login-wrapper flex items-center">
//         <li className='relative'>
//           <Link to="/search" className='flex items-center'>
//             <span className='pe-1'><img src={Profile} alt="Profile" />
//             </span>Login
//           </Link>

//           <img src={ArrowDown} alt="Arrow" className='ps-1'></img>
//           <ul className='absolute top-14 left-0 bg-orange-700 px-4 py-2'>

//             <li>
//               <Link to="/">
//                 <span>New customer?</span>
//                 <span>Sign Up</span>
//                 </Link>
//             </li>

//             <li>
//               <Link to="/" className='flex items-center'>
//               <span className='ps-1'>
//               <img src={Profile} alt="Profile"/>
//               </span>My profile</Link>
//             </li>

//             <li>
//               <Link to="/" className='flex items-center'>
//                 <span className='ps-1'>
//                   <img src={Order} alt="Order"/>
//                   </span>Order</Link>
//             </li>

//             <li>
//               <Link to="./Private/Wishist" className='flex items-center'>
//                 <span className='ps-1'><img src={Wishlist} alt="Wishist"/>
//                 </span>Wishlist</Link>
//             </li>

//           </ul>
//         </li>
//       </ul>
//       <Link to="/search" className='flex items-center'>
//         <span className='pe-1'>
//           <img src={Store} alt="Store" /> 
//         </span> Become a Seller
//       </Link>
//       <div className="setting">
//         <div className="setting-bar">
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Headers


import React from 'react';
import { Link } from 'react-router-dom';
import FashionLogo from '../../images/fashion-logo.png';
import Profile from '../../images/profile.svg';
import Order from '../../images/orders.svg';
import { BsCart3 } from "react-icons/bs";
import { LiaStoreSolid } from "react-icons/lia";
import { FaRegUserCircle } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";

const Headers = () => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className='flex justify-between items-center py-2 px-4 bg-white text-blue-700'>
      <Link to="/images" className='inline-block'>
        <img src={FashionLogo} alt="fashion Logo" />
      </Link>
      <div class="search-wrapper w-[600px] relative">
        <Link to="/search" className='inline-block absolute top-0 left-0 p-2'>
          <svg width="24" height="24" class="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <title>Search Icon</title>
            <path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M16 16L21 21" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </Link>
        <input type="text" placeholder='Search for products, brands and more ' 
       className='w-[100%] py-2 px-10 rounded-sm bg-emerald-200' />

      </div>
      
         <ul className="login-wrapper flex items-center">
            <li className='relative'>
            <button onClick={toggleDropdown}
            className="flex items-center text-blue-700 hover:bg-blue-500 hover:text-white"
            style={{transition: "background-color 0.3s ease"}}>
            <span className='pe-1'><FaRegUserCircle />
            </span>Login
            </button>
       
          {dropdownOpen && (
            <ul className='absolute top-14 left-0 bg-orange-700 px-4 py-2 dropdown-menu'>
              <li>
                <Link to="/" className='block py-2 px-4 text-white hover:bg-blue-700'>
                  <span className='ps-1'>New customer? Sign Up</span>
                </Link>
              </li>
              <li>
                <Link to="/Private/Profile" className='block py-2 px-4 text-white hover:bg-blue-700'>
                  <span className='ps-1'>
                  <FaRegUserCircle />My profile
                  </span></Link>
              </li>
              <li>
                <Link to="/" className='block py-2 px-4 text-white hover:bg-blue-700'>
                  <span className='ps-1'>
                    <img src={Order} alt="Order"/>Order
                  </span></Link>
              </li>
              <li>
                <Link to="./Private/Customer/Wishlist" className='block py-4px-4 text-white hover:bg-blue-700'>
                  <span className='ps-1'>
                  <BsHeart />Wishlist
                  </span></Link>
              </li>
            </ul>
          )}
        </li>
      </ul>

      <Link to="./Private/Seller/SellerDashboard" className='flex items-center'>
        <span className='pe-1'>
        <LiaStoreSolid />
        </span> Become a Seller
      </Link>
      <div className="setting">
        <div className="setting-bar">
        </div>
      </div>
    </nav>
  );
};

export default Headers;