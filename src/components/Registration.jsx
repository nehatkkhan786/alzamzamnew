import React from 'react'

const Registration = () => {
  return (
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-14 mx-auto mt-2">
    <div class="flex flex-col text-center w-full mb-10">
      <h1 class="sm:text-4xl text-3xl font-medium title-font text-gray-900 uppercase">Our Registration</h1>
    </div>
    <img src='/images/leaf2.png' className="mx-auto mb-10"/>
    <div class="flex flex-wrap -m-4 items-center justify-center">

      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <img src='/images/FSSAI_logo.png'/>       
        </div>
      </div>

      <div class="p-4 md:w-1/3">
        <div class=" bg-gray-100">
         <img src='/images/apeda2.jpeg'/>
        </div>
      </div>

      <div class="p-4 md:w-1/3">
        <div class=" bg-gray-100">
         <img src='/images/msme.png'/>
        </div>
      </div>

      <div class="p-4 md:w-1/3">
        <div class=" bg-gray-100">
         <img src='/images/msme_ud.jpeg'/>
        </div>
      </div>

      <div class="p-4 md:w-1/3">
        <div class=" bg-gray-100">
         <img src='/images/MOFPI.png'/>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Registration