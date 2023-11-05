import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Link } from 'react-router-dom';
import { NoProfile } from '../assets';
import { UpdateProfile } from '../redux/userSlice';
import {LiaEditSolid} from 'react-icons/lia'
import {BsBriefcase, BsPersonFillAdd} from 'react-icons/bs'
import {CiLocationOn} from 'react-icons/ci'
import moment from 'moment'
import { BsFacebook ,BsInstagram } from 'react-icons/bs';
import {FaTwitterSquare} from 'react-icons/fa'

const ProfileCard = ({user}) => {
 const{user: data, edit } = useSelector((state) => state.user);
 const dispatch = useDispatch();

    return (
    <div>
      <div className='w-full bg-primary flex flex-col items-centre shadow-sm rounded-xl
      px-6 py-4 '>
       <div className='w-full flex item-center justify-between border-b pb-5
        border-[#66666645]'>
   <Link to={"/profile"+user?._id}
       className='flex gap-2'>
 <img src={user?.profileUrl ?? NoProfile} alt={user?.email}
 className='w-14 h-14 object-cover rounded-full'></img>
  <div className='flex flex-col justify-center'>
   <p className='text-lg font-medium text-ascent-1'>

  {user?.firstName} {user?.lastName}

   </p> 
   <span className='text-ascent-2'>{user?.profession ?? "No Profession"}</span>

  </div>

</Link>

   <div className=''>
   {/* agar profile khud ki hai to edit kar paaye brna nhi */}
         {user?._id === data?._id ? (   <LiaEditSolid
            size={22}
            className='text-blue cursor-pointer'
             onClick={() => dispatch(UpdateProfile(true))}
           />): (
       <button className='bg-[#0444a430] text-sm text-white p-1 rounded'
       onClick={() => {}}
       >
      <BsPersonFillAdd  size={20} className='text-[#0f52b6]'/>


       </button>


           )}

 </div>

</div>
   {/* location ke liye and profession ke liye  */}
   <div className='w-full flex flex-col gap-2 py-4 border-b border-[#66666645]'>
      <div className='flex gap-2 items-center text-ascent-2'>
           <CiLocationOn className='text-xl text-ascent-1' />
           <span>{user?.location ?? "Add Location"}</span>
      </div>
    
    <div className='flex gap-2 items-center text-ascent-2 '>
          <BsBriefcase className='text-lg text-ascent-1' />
          <span>{user?.profession ?? "Add Professon"} </span>
    </div>
    </div>
{/* friend ke liye */}
        <div className='w-full flex flex-col gap-2 py-4 border-b border-[#66666645]'>

        <p className='text-xl text-ascent-1 font-semibold'>
            {user?.friends?.length} Friends
        </p>

        <div className='flex items-center justify-between'>
               <span className='text-ascent-2'>
                Who viewed your profile </span>
                <span className='text-ascent-1 text-lg'>{user?.views?.length}</span>
              
        </div>
  {/* account verified hai y nhi */}
            <span className='text-base text-blue'>{user?.verified ? "Verified Account" : "Not Verifeid"  }</span> 

             <div className='flex items-center justify-between'>
            <span className=' text-ascent-2 '>Joined</span>
            <span className='text-ascent-1 text-base  text-red' >{moment(user?.createdAt).fromNow()}</span>
                  
             </div>
        </div>

        {/* sociasl media accounts ko jod rahe hai */}
            <div className='w-full  flec flec-col gap-4 py-4 pb-6'>
       <p className='text-ascent-1 text-lg font-semibold'>Social Profile</p>
           
       <div className='flex gap-2 items-center text-ascent-2'>
            <BsInstagram className=' text-xl text-ascent-1' />
            <span>Instagram</span>
          </div>
          <div className='flex gap-2 items-center text-ascent-2'>
            <FaTwitterSquare className=' text-xl text-ascent-1' />
            <span>Twitter</span>
          </div>
          <div className='flex gap-2 items-center text-ascent-2'>
            <BsFacebook className=' text-xl text-ascent-1' />
            <span>Facebook</span>

           
            </div>

      </div>

      </div>
    </div>
  );
};

export default ProfileCard
