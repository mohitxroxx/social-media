import React from 'react'
import { useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "./TextInput";
import Loading from "./Loading";
import CustomButton from "./CustomButton";
import { UpdateProfile } from "../redux/userSlice";


const EditProfile = () => {
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [errMsg, setErrMsg] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [picture, setPicture] = useState(null);


    const {register, handleSubmit, formState: { errors }, } = useForm({ mode: "onChange",defaultValues: { ...user }, });
     const onSubmit = async (data) => {};
    
      const handleClose = () => { dispatch(UpdateProfile(false)); };
      const handleSelect = (e) => {
        setPicture(e.target.files[0]);
      };
    
  return (
    <>
    <div
    className='fixed z-30 inset-0 overflow-y-auto'>
        <div className='flex items-center justify-center min-h-screen
        pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
 <div className='fixed inset-0 transition-opacity'>
            <div className='absolute inset-0 bg-[#000] opacity-70'>
          </div>
          </div>


        </div>
      
    </div>
    </>
  )
}

export default EditProfile
