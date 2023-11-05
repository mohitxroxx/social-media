import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { NoProfile } from '../assets';
import moment from 'moment';
import { BiSolidLike ,BiLike } from 'react-icons/bi';


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
<Link to={"/profile/" + post?.userId?._id}>
            <p className='font-medium text-base text-ascent-1'>
              {post?.userId?.firstName} {post?.userId?.lastName}
            </p>
          </Link>
          <span className='text-ascent-2 text-sm'>
            {post?.userId?.location}
          </span>
</div>
  
<span className='text-ascent-2 text-sm'>
            {moment(post?.createdAt).fromNow()}
          </span>
</div>
 </div>

 <div className='ml-12'>
        <p className='text-ascent-2 '>
            
            
            {showAll === post?._id ? post?.description : post?.description.slice(0,300)}</p>
              { post?.description?.length>301 && (
                showAll === post?._id ? <span>Show Less</span> :(<span>Show More</span>
              ))}     
      </div>

</div>
  )
}

export default PostCard
