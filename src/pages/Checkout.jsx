import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import mainContext from "../ContextandProvider/MainContext";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Checkout = () => {
    const {cart, dispatch} = useContext(mainContext)
    const navigate = useNavigate()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [country, setCountry] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [notes, setNotes] = useState('')

    const [loading, setLoading] = useState(false)


    useEffect(()=>{
        if(cart?.length < 1){
            navigate('/')
        }
    }, [cart])

    const handlePlaceOrder = async ()=>{

        const client ={
          'firstName':firstName, 
          'lastName':lastName,
          'companyName':companyName, 
          'country':country, 
          'address1':address1, 
          'address2':address2, 
          'city':city, 
          'state':state, 
          'zipcode':zipcode, 
          'phone':phone, 
          'email':email, 
          'notes':notes,
        }
        setLoading(true)
        try {
          const response = await axios.post('https://nehat.pythonanywhere.com/api/sendmail/', {cart:cart , client:client}, {
            headers:{
              'content-type': 'application/json'
            }
          })
          if(response.request.status === 200){
            setFirstName('');
            setLastName('');
            setCompanyName('');
            setCountry('');
            setAddress1('');
            setAddress2();
            setCity('');
            setState('');
            setZipcode('');
            setPhone('');
            setEmail('');
            setNotes('')
            dispatch({
              type:"CLEAR_CART"
            })
            setLoading(false)
            toast.success('order Placed Successfully')
            navigate('/order_success')
          }
          
          

        } catch (error) {
          toast.error('something went wrong')
          setLoading(false)
        }


    }


  return (
    <section className="p-10 bg-gray-100 w-full">
      <h1 className="text-center text-2xl font-bold uppercase text-zamzam_bg">
        Quaotation Details
      </h1>
    <div className="w-full flex sm:flex-row flex-col">
      <div className="w-full flex flex-col gap-4  max-w-md mt-4">
        <div className="flex gap-2 justify-center">
          <input
            type="text"
            placeholder="First Name"
            className="input w-full max-w-md"
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input w-full max-w-md "
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)}
          />
        </div>

        <div className="flex gap-2 justify-center">
          <input
            type="text"
            placeholder="Company Name"
            className="input w-full  max-w-md "
            value={companyName}
            onChange={(e)=>setCompanyName(e.target.value)}
          />
        </div>

        <div className="flex gap-2 justify-center">
          <input
            type="text"
            placeholder="Country/Region"
            className="input w-full  max-w-md "
            value={country}
            onChange={(e)=>setCountry(e.target.value)}
            required
          />
        </div>

        <div className="flex gap-2 justify-center">
          <input
            type="text"
            placeholder="Street Address"
            className="input w-full  max-w-md "
            value={address1}
            onChange={(e)=>setAddress1(e.target.value)}
          />
        </div>

        <div className="flex gap-2 justify-center">
          <input
            type="text"
            placeholder="Street Address 2"
            className="input w-full  max-w-md "
            value={address2}
            onChange={(e)=>setAddress2(e.target.value)}
          />
        </div>

        <div className="flex gap-2 justify-center">
          <input
            type="text"
            placeholder="Town/City"
            className="input w-full  max-w-md "
            value={city}
            onChange={(e)=>setCity(e.target.value)}
          />
          <input
            type="text"
            placeholder="State"
            className="input w-full  max-w-md "
            value={state}
            onChange={(e)=>setState(e.target.value)}
          />
        </div>

        <div className="flex gap-2 justify-center">
          <input
            type="text"
            placeholder="Zipcode"
            className="input w-full  max-w-md "
            value={zipcode}
            onChange={(e)=>setZipcode(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone"
            className="input w-full  max-w-md "
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}

          />
        </div>

        <div className="flex gap-2 justify-center">
          <input
            type="email"
            placeholder="Email Address"
            className="input w-full  max-w-md "
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
        </div>
        <h2 className="font-bold text-lg">Additional Details</h2>

        <div className="flex gap-2 justify-center">
          <textarea
            className="textarea  w-full  max-w-md "
            placeholder="Notes about your quoatation, eg.special notes for delivery"
            value={notes}
            onChange={(e)=>setNotes(e.target.value)}
          />
        </div>

        {loading ? (<span className="loading loading-dots loading-lg"></span>) : (
          <button onClick={handlePlaceOrder} class="inline-flex text-white bg-secondary border-0 py-2 px-6 focus:outline-none text-center self-center hover:bg-zamzam_bg_hover rounded text-lg mt-4">
              Place Quoatation
          </button>
        )}
      </div>
        </div>
    </section>
  );
};

export default Checkout;
