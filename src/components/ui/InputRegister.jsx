import React, {useState} from 'react'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'

const InputRegister = ({type, modifierFunction, text}) => {
  const [isShow, setIsShow] = useState(false)

   if (type == "password") {
      return (
      <div className={`flex relative items-center max-lg:items-start max-sm:items-center border-b-[1.7px] border-[#fff]`}>
         <input type={'password'} placeholder=' ' autoComplete='on' className={`sm:text-[24px] peer duration-300 text-[2.3vh] focus:ring-0 border-none outline-none w-full sm:w-[94%] pb-2 px-1 pt-2 bg-transparent text-[#fff]`} onChange={(e)=>{modifierFunction(e.target.value)}}/>
         <div onClick={(e)=>{setIsShow(!isShow);(isShow ? e.currentTarget.previousSibling.setAttribute("type", "password") : e.currentTarget.previousSibling.setAttribute("type", "text"))}}>
            {isShow ? <BsEyeSlashFill className='text-2xl md:text-[25px] text-[#fff] cursor-pointer' /> : <BsEyeFill  className='text-2xl md:text-[25px] text-[#fff] cursor-pointer'/>}
         </div>
         <label className={`absolute max-lg:top-[25%] top-[17.2%] duration-300 px-1 pointer-events-none text-[12px] translate-y-[-83%] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-[19px] peer-focus:translate-y-[-83%] peer-focus:text-[12px]`}>{text}</label>
      </div>
     )
   } else {
      return (
      <div className={`flex relative items-center border-b-[1.7px] pt-2 pr-1 border-[#fff]`}> 
         <input type={type} placeholder=' ' autoComplete='on' className={`[&:focus_+_label]:!translate-y-[-83%] text-[2.3vh] peer duration-300 [&:focus_+_label]:!text-[12px] focus:ring-0 border-none outline-none w-full px-3 pb-2 pt-2 bg-transparent text-[#fff] `} onChange={(e)=>{modifierFunction(e.target.value)}}/>
         <label className={`absolute max-lg:top-[25%] top-[17.2%] duration-300 px-1 pointer-events-none text-[12px] translate-y-[-83%] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-[19px] after:absolute after:text-[11px] after:font-bold after:bottom-0.5 after:duration-100 after:opacity-0 peer-invalid:after:opacity-90 after:text-red-600 after:whitespace-nowrap peer-invalid:after:content-["(Email_yang_anda_masukkan_tidak_valid!)"] `}>{text} &#0; &#0; </label>
      </div>
      ) 
   }
}

export default InputRegister