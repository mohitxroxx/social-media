import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Link } from 'react-router-dom';
import { NoProfile } from '../assets';

const ProfileCard = (user) => {
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
   <p className='text-lg font-medium '></p>

  </div>

</Link>

</div>
      </div>
    </div>
  )
}

export default ProfileCard
