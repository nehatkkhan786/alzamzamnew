import React from "react";
import AboutImageSlider from "../components/about_us/AboutImageSlider";
import AboutSats from "../components/about_us/AboutSats";

const AboutUs = () => {
  return (
    <>
      <section class="text-gray-600 body-font mt-4 bg-[#f8f5f4]">
        <div class="container px-5 py-24 mx-auto relative">
          <h1 className="text-center text-zamzam_bg text-4xl font-bold uppercase">
            About Us
          </h1>
          <img
            src="/images/leaf3.png"
            className="absolute -bottom-16 left-1/3 sm:left-1/2  "
          />
        </div>
      </section>

      {/* WHO WE ARE */}

      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-20 mx-auto">
          <div class=" flex flex-wrap items-center justify-between gap-4">
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                Unveiling Our Unmatched Export Expertise
              </h1>
              <p className="leading-relaxed text-lg  text-ellipsis">
                Established in 2020, AL-ZAM ZAM EXPORT COMPANY is a
                distinguished export and import firm located in Guwahati, Assam.
                With a fresh perspective and a renewed commitment to excellence,
                we have embarked on a transformative journey to cater to the
                diverse needs of our esteemed international clientele.
              </p>
              <p className="leading-relaxed text-lg  text-ellipsis">
                At AL-ZAM ZAM EXPORT COMPANY, our unwavering focus lies in
                delivering unparalleled quality and exceptional value across a
                wide range of general merchandise. With an astute understanding
                of the global market dynamics, we specialize in sourcing and
                supplying the finest food products that meet the highest
                standards of quality, while remaining affordable for customers
                worldwide.
              </p>
            </div>
            <img
              alt="ecommerce"
              class="lg:w-1/3 w-full lg:h-auto  object-cover object-center rounded"
              src="/images/about2.jpeg"
            />
          </div>
        </div>
      </section>
      {/* END WHO WE ARE */}

      {/* Our Vision */}

      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-4 py-18 mx-auto">
          <div class=" flex flex-wrap items-center justify-between gap-4">
            <img
              alt="ecommerce"
              class="lg:w-1/3 w-full lg:h-auto  object-cover object-center rounded"
              src="/images/about3.jpeg"
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                Embarking on a Global Export Journey
              </h1>
              <p className="leading-relaxed text-lg text-left">
                In line with our ambitious vision for the future, AL-ZAM ZAM
                EXPORT COMPANY is committed to expanding its reach by
                establishing regional dealerships in multiple countries,
                featuring our own branded products. This strategic initiative
                will allow us to offer a diverse range of goods under our
                trusted brand, further strengthening our presence in the global
                market.
              </p>
              <p className="leading-relaxed text-lg text-left">
                To achieve this goal, our dedicated team of experienced
                professionals remains focused on meeting the unique needs and
                requirements of customers from around the world. We understand
                the importance of sourcing products in a clean, green, safe, and
                natural environment, and we prioritize working with suppliers
                who share our commitment to sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*  Our Vision End Her */}

      {/* Stats */}
        <AboutSats/>
      {/* Stats End Here */}

      {/* About Image SLider */}  
            <AboutImageSlider/>
      {/* About Image Slider End */}

     
    </>
  );
};

export default AboutUs;
