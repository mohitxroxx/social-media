import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { NoProfile } from '../assets';
import moment from 'moment';
import { BiSolidLike ,BiLike , BiComment } from 'react-icons/bi';
import {MdOutlineDeleteOutline} from 'react-icons/md'
import Loading from './Loading';
import CustomButton from "./CustomButton";
import TextInput from "./TextInput";
import { postComments } from "../assets/data";
import { useForm } from "react-hook-form";


    {/* reply krne ke liye*/}
    const ReplyCard =({reply ,user ,handleLike}) => {
        return (
            <div className='w-full py-3'>
            <div className='flex gap-3 items-center mb-1'>

                {/* image/profile ke liye */}
             <Link to={"/profile/" + reply?.userId?._id}>
             <img src={reply?.userId?.profileUrl ?? NoProfile} alt={reply?.userId?.firstName}
                  className='w-10 h-10 rounded-full object-cover'
                />
              </Link>
      
              <div>
                <Link to={"/profile/" + reply?.userId?._id}>
                  <p className='font-medium text-base text-ascent-1'>
                    {reply?.userId?.firstName} {reply?.userId?.lastName}
                  </p>
                </Link>
                <span className='text-ascent-2 text-sm'>
                  {moment(reply?.createdAt).fromNow()}
                </span>
              </div>
            </div>
      
            <div className='ml-12'>
              <p className='text-ascent-2 '>{reply?.comment}</p>
              <div className='mt-2 flex gap-6'>
                <p
                  className='flex gap-2 items-center text-base text-ascent-2 cursor-pointer'
                  onClick={handleLike}
                >
                  {reply?.likes?.includes(user?._id) ? (
                    <BiSolidLike size={20} color='blue' />
                  ) : ( <BiLike size={20} /> )
                  }
                  {reply?.likes?.length} Likes
                </p>
              </div>
            </div>
          </div>


        )
    }


     {/* yeh comment ke liye form*/}
const CommentForm = ({user ,id , replyAt ,getComments}) =>
{
    const[loading ,setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm({
        mode: "onChange",
      });
      const onSubmit = async (data) => {};

    return (
        <form
        onSubmit={handleSubmit(onSubmit)}

        className='w-full border-b border-[#66666645]'
      >
        <div className='w-full flex items-center gap-2 py-4'>
          <img
            src={user?.profileUrl ?? NoProfile}
            alt='User Image'
            className='w-10 h-10 rounded-full object-cover'
          />
  
          <TextInput
            name='comment'
            styles='w-full rounded-full py-3'
            placeholder={replyAt ? `Reply @${replyAt}` : "Comment this post"}
            register={register("comment", {
              required: "Comment can not be empty",
            })}
            error={errors.comment ? errors.comment.message : ""}
          />
        </div>
        {errMsg?.message && (
          <span
            role='alert'
            className={`text-sm ${
              errMsg?.status === "failed"? "text-[#f64949fe]" : "text-[#2ba150fe]" } mt-0.5`}
          >
            {errMsg?.message}
          </span>
        )}
  
        <div className='flex items-end justify-end pb-2'>
          {loading ? (
            <Loading />
          ) : (
            <CustomButton
              title='Submit'
              type='submit'
              containerStyles='bg-[#0444a4] text-white py-1 px-3 rounded-full font-semibold text-sm'
            />
          )}
        </div>
      </form>
    )
};



const PostCard = ({post ,user ,deletePost ,likePost}) => {

 const[showAll ,setShowAll] = useState(0);
 const[showReply ,setShowReply] = useState(0);
 const[comments ,setComments] = useState([]);
 const[loading ,setLoading] = useState(false);
 const[replyComments ,setReplyComments] = useState(0);
 const[showComments ,setShowComments] = useState(0);



const getComments =async () => {
    setReplyComments(0);

    setComments(postComments);
    setLoading(false);
};
   const handleLike =async () =>
   {

   };

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
            
            
            {showAll === post?._id ? post?.description : post?.description.slice(0,300)}
              { post?.description?.length>301 && (
                showAll === post?._id ? <span className='text-blue ml-2 font-medium cursor-pointer'
                onClick={() =>setShowAll(0)} 
                >
                      Show Less</span
                      
                      
                      > :(<span
                      className='text-blue ml-2 font-medium cursor-pointer'
                      onClick={()=> setShowAll(post?._id)}
                      >Show More</span>
              ))}   </p>  

              {
                post?.image && 
                (
             <img src={post?.image}
             alt='post' image
               className='w-full mt-2 rounded-lg  '            />

                ) }
      </div>
                
             <div className='mt-4 justify-between items-center px-3 py-2 text-ascent-2
                text-base border-t border-[#66666645] '>

                    {/* likes check krne ke liye */}
 <p className='flex gap-2 items-center text-base cursor-pointer'>
          {post?.likes?.includes(user?._id) ? (
            <BiSolidLike size={20} color='blue' />
          ) : (
            <BiLike size={20} />
          )}
          {post?.likes?.length} Likes
        </p>
         

         {/* comments ke liye icon and delete krne ke liye*/}
         <p
          className='flex gap-2 items-center text-base cursor-pointer'
          onClick={() => { 
            setShowComments(showComments === post._id ? null : post._id);
            getComments(post?._id);
          }}
        >

          <BiComment size={20} />
          {post?.comments?.length} Comments
        </p>
        {/* delete karne ki functionality agr user ki hai id to */}
            {
                user?._id === post?.userId?._id &&
               (
                <div className='flex gap-1 items-center text-base text-ascent-1 cursor-pointer '
                
                onClick={()=> deletePost(post?._id)} 
                >  
                    
                    <MdOutlineDeleteOutline size={20} />
            <span>Delete</span>
                    
                        </div>
               )
            }
          </div>


             {/*  comments add krne ke liye*/}
           { showComments === post?._id && (
                  <div className='w-full mt-4 border-t border-[#66666645] pt-4 '>
          <CommentForm
            user={user}
            id={post?._id}
            getComments={() => getComments(post?._id)}
          />
              {/* kitne logo ne comments kiya aur kya kiya */}
           {loading ? (
            <Loading />
          ) : comments?.length > 0 ? (
            comments?.map((comment) => (
                <div className='w-full py-2' key={comment?._id}>
                    <div className='flex gap-3 items-center mb-1 '>
                        
                    <Link to={"/profile/" + comment?.userId?._id}>
                    <img
                      src={comment?.userId?.profileUrl ?? NoProfile}
                      alt={comment?.userId?.firstName}
                      className='w-10 h-10 rounded-full object-cover'
                    />
                  </Link>
                    {/*   name ke liye   */}
                 <div>
                 <Link to={"/profile/" + comment?.userId?._id}>
                      <p className='font-medium text-base text-ascent-1'>
                        {comment?.userId?.firstName} {comment?.userId?.lastName}
                      </p>
                    </Link>
                    <span className='text-ascent-2 text-sm'>
                      {moment(comment?.createdAt ?? "2023-05-25").fromNow()}
                    </span>
                    
                     </div>
                    </div>

               <div className='ml-12 '> 
               <p className='text-ascent-2'>{comment?.comment}</p>

                     <div className='mt-2 flex gap-6 '>
                     <p className='flex gap-2 items-center text-base text-ascent-2 cursor-pointer'>
                      {comment?.likes?.includes(user?._id) ? (
                        <BiSolidLike size={20} color='blue' />
                      ) : (
                        <BiLike size={20} />
                      )}
                      {comment?.likes?.length} Likes
                    </p>
                    <span
                      className='text-blue cursor-pointer'
                      onClick={() => setReplyComments(comment?._id)}
                    >
                      Reply
                    </span>
                        </div>

            
                        {replyComments === comment?._id && (
                    <CommentForm
                      user={user}
                      id={comment?._id}
                      replyAt={comment?.from}
                      getComments={() => getComments(post?._id)}
                    />
                  )}

                   </div>

                        {/* reply krne ke liye */}

             <div className='flex text-sm py-4 text-ascent-2 text-center'>
             {comment?.replies?.length > 0 && (
                    <p
                      className='text-base text-ascent-1 cursor-pointer'
                      onClick={() =>
                        setShowReply(
                          showReply === comment?.replies?._id
                            ? 0
                            : comment?.replies?._id
                        )  }
                    >  Show Replies ({comment?.replies?.length})
                    </p>
                  )}
                
                {showReply === comment?.replies?._id &&
                    comment?.replies?.map((reply) => (
                      <ReplyCard  reply={reply} user={user} key={reply?._id} 
                      
                      handleLike={() => handleLike(
                            "/posts/like-comment/" +
                              comment?._id +"/" + reply?._id )  }  />
                    ))}

                 </div>

                     </div>

            ))
          ) : ( <span className='flex text-sm py-4 text-ascent-2 text-center'>
            No Comments, be first to commit
          </span>

          )}
           
       </div>
      )}

</div>
  )
}

export default PostCard
