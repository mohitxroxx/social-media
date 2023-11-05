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
    <div>
      
    </div>
  )
}

export default EditProfile
