import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
declare module 'react';


type FormData = {
    name: string;
  };


const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    message: yup.string().required()
  });




export default function Emergency() {

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
      });

    const onSubmit = (data: any) => {
        console.log(data);
    }

    return (
      <>
        <form onSubmit = {handleSubmit(onSubmit)}>
            <h2>Have An Emergency Message?</h2>
            <input  placeholder='First Name' {...register("firstName", { required: true, maxLength: 20 })} />
            
            <input  placeholder='Last Name' {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
            
            <input  placeholder='Email'  {...register('email', { required: true })}/>
            
            <input  placeholder='Subject'  {...register('subject', { required: true })}/>
            
            <input  type= 'message' placeholder='Your Message' {...register('message', { required: true })}/>

             
            <p> {errors.firstName && "First name is required"}</p>
            <p> {errors.lastName && "Last name is required"}</p>
            <p>{errors.email && "email is required"}</p>
            <p>{errors.subject && "Please type in your subject"}</p>
            <p>{errors.message && "Please enter a valid message"}</p>
          

            <input className="submit"  type= 'submit'/>
            
        </form>
        <div className="addressBar">
          <div className="location">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <p>A green house roof with outside
                  shed behind kidsauthority 
                  international academy New
                  Kasho Layout,Makurdi, Benue State</p>
                  </div>
          <div className="mobile"> 
          <FontAwesomeIcon icon={faPhone} /><p className="padleft">+234 703 515 4992</p>
          </div>
          <div className="email"> 
          <FontAwesomeIcon icon={faEnvelope} /><p className="padleft">Livestars20@gmail.com</p>
          </div>
        </div>

        </>
    )
}


