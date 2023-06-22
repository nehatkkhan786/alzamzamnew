import React from 'react'

const ContactFooter = () => {
  return (
    <section class="text-gray-600 body-font  bg-[#f8f5f4]">
    <div class="container px-5 py-24 mx-auto">
      <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
        
        <p class="leading-relaxed text-xl">2ND FLOOR ANJUMAN MARKET FAYEZ AHMED ROAD KUMARPARA GUWAHATI (ASSAM) 781009</p>
        <p className='text-xl uppercase'>Office Number</p>
        <p className='text-xl text-[#8c560c]'>+91 93949 40081</p>
        <h2 class=" title-font tracking-wider text-2xl font-semibold mt-2 text-[#8c560c]">NIYAZ GOURI</h2>
        <p class="text-gray-500">Chief Executive Officer (CEO)</p>
        <br/>
        <p className='text-xl '>Direct: <span className='text-[#8c560c]'>+91 9678686712 | 7976249374</span> </p>
        <div className='flex flex-col mt-2'>
            <a href="mailto:alzamzamexpco@gmail.com" className='text-xl'>Email : <span className='text-[#8c560c]'>alzamzamexpco@gmail.com</span></a>
            <a href="mailto:niyazgouri2017@icloud.com" className='text-xl'><span className='text-[#8c560c]'>niyazgouri2017@icloud.com</span></a>
            </div>  
        <br/>
      </div>
      <img src='/images/alzamzamlogo.jpg' className='h-62 md:h-44 w-auto mx-auto'/>
    </div>
  </section>
  )
}

export default ContactFooter