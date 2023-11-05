import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { NoProfile } from '../assets';




const PostCard = ({post ,user ,deletePost ,likePost}) => {

 const[showAll ,setShowAll] = useState(0);
 const[showReply ,setShowReply] = useState(0);
 const[comments ,setComments] = useState([]);
 const[loading ,setLoading] = useState(false);
 const[replyComments ,setReplyComments] = useState(0);
 const[showComments ,setShowComments] = useState(0);
   

  return (
    <div className='mb-2 bg-primary p-4 rounded-xl '>
      
    <div className='flex gap-3 items-center mb-2'>

<Link to={"/profile/" + post?.userId?._id}>  
<img src={post?.userId?.profileUrl ?? NoProfile}
            alt={post?.userId?.firstName}
            className='w-10 h-10 rounded-full object-cover'
          />
  </Link>
 
<div className='w-full flex justify-between'>

<div className=''>
       <Link></Link>
    
</div>


</div>



        </div>

    </div>
  )
}

export default PostCard
