import React from 'react'

const ContactFooter = () => {
  return (
    <section class="text-gray-600 body-font  bg-[#f8f5f4]">
    <div class="container px-5 py-24 mx-auto">
      <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
        
        <p class="leading-relaxed text-xl">2ND FLOOR ANJUMAN MARKET FAYEZ AHMED ROAD KUMARPARA GUWAHATI (ASSAM) 781009</p>
        <p className='text-xl uppercase'>Office Number</p>
        <p className='text-xl'>+91 93949 40081</p>
        <h2 class="text-gray-900 font-medium title-font tracking-wider text-lg mt-2">NIYAZ GOURI</h2>
        <p class="text-gray-500">Chief Executive Officer (CEO)</p>
        <br/>
        <p className='text-xl'>Direct: +91 9678686712 | 7976249374</p>
        <div className='flex flex-col mt-2'>
            <a href="mailto:alzamzamexpco@gmail.com" className='text-xl'>Email : <span className='text-green-500'>alzamzamexpco@gmail.com</span></a>
            <a href="mailto:niyazgouri2017@icloud.com" className='text-xl'>Email : <span className='text-green-500'>niyazgouri2017@icloud.com</span></a>
            </div>
        
        <br/>
        
      </div>
    </div>
  </section>
  )
}

export default ContactFooter