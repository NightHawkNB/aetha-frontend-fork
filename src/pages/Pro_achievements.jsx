import React from "react";
import { useNavigate } from 'react-router-dom';
import { FaRegComments, FaUserEdit, FaRegUserCircle, FaPen, FaTrophy, FaBook, FaEye, FaStar, FaFileAlt, FaThList } from "react-icons/fa";
import { MdOutlineHistory } from "react-icons/md";
import profilepic from '../../public/images/profilepic.jpg'; 
import "../components/Profile.css";
import Sidebar from "../components/Sidebar/Sidebar.jsx"; 
import { BiSolidCertification } from "react-icons/bi";

function Pro_achievements() {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate('/profile/edit');
  };

  const handleCommentsClick = () => {
    navigate('/profile/edit/inbox');
  };

  const menus = [
        { name: "Overview", link: "/profile", icon: FaRegUserCircle },
        { name: "Fictions", link: "/author", icon: FaBook },
        { name: "Reviews", link: "/profile/reviews", icon: FaEye },
        { name: "Favorites", link: "/profile/favorites", icon: FaStar },
        //{ name: "Threads", link: "/profile/threads", icon: FaFileAlt},
        { name: "Posts", link: "/profile/posts", icon: FaThList },
        { name: "Achievements", link: "/profile/achievements", icon: FaTrophy },
       // { name: "Reputation", link: "/profile/reputation", icon: BiSolidCertification },
    ];

  return (
    <>
      <div className="justify-evenly h-auto w-screen py-2 border-r-5 bg-blue-400">
        <div className="main-detail">
          <div className="profile-info">
            <h3>Follows</h3>
            <h3>12</h3>
          </div>
          <div className="profile-info">
            <h3>Reviews</h3>
            <h3>10</h3>
          </div>
          <img className="picture" src={profilepic} alt="profile-pic" />
          <div className="profile-info">
            <h3>Favorites</h3>
            <h3>10</h3>
          </div>
          <div className="profile-info">
            <h3>Saved</h3>
            <h3>10</h3>
          </div>
        </div>
        <div className="flex p-1 bg-white">
          <h2 className="font-semibold flex-grow text-black text-center">HANSI</h2>
          <button onClick={handleCommentsClick}>
            <FaRegComments className="ml-auto mr-2 text-black" />
          </button>
          <button onClick={handleEditClick}>
            <FaUserEdit className="ml-auto text-black mr-5" />
          </button>
        </div>
      </div>
        <div className="dashboard flex">
        <Sidebar menus={menus} />
          <div className="flex-wrap mx-16 justify-items-start p-0">
          <div className='p-1 h-40 border-1 border-t-white border-x-white flex items-center '>
          <div className='w-1/6 justify-center'>
          <div className='h-20 w-20 border-2  border-blue-800 rounded-full overflow-hidden'><img className='w-full h-full object-cover' src='../../public/images/profilepic.jpg'></img></div>
          </div>
          <div className='w-4/5'>
          <label className='ml-2'><div className='w-auto align-middle p-2 bg-gray-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo iure quasi voluptate. Eveniet, accusamus veritatis ab vero iusto unde voluptates natus accusantium, explicabo, est pariatur? Ratione aliquid dolorum porro dolore.</div></label>
          </div>
          </div>
          <div className='p-1 h-40 border-1 border-t-white border-x-white flex items-center '>
          <div className='w-1/6'>
          <div className='h-20 w-20 border-2  border-blue-800 rounded-full overflow-hidden'><img className='w-full h-full object-cover' src='../../public/images/profilepic.jpg'></img></div>
          </div>
          <div className='w-4/5'>
          <label className='ml-2'><div className='w-auto align-middle p-2 bg-gray-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo iure quasi voluptate. Eveniet, accusamus veritatis ab vero iusto unde voluptates natus accusantium, explicabo, est pariatur? Ratione aliquid dolorum porro dolore.</div></label>
          </div>
          </div>
          <div className='p-1 h-40 border-1 border-t-white border-x-white flex items-center '>
          <div className='w-1/6'>
          <div className='h-20 w-20 border-2  border-blue-800 rounded-full overflow-hidden'><img className='w-full h-full object-cover' src='../../public/images/profilepic.jpg'></img></div>
          </div>
          <div className='w-4/5'>
          <label className='ml-2'><div className='w-auto align-middle p-2 bg-gray-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo iure quasi voluptate. Eveniet, accusamus veritatis ab vero iusto unde voluptates natus accusantium, explicabo, est pariatur? Ratione aliquid dolorum porro dolore.</div></label>
          </div>
          </div>
  </div>
        </div>
      
    </>
  );
}

export default Pro_achievements;