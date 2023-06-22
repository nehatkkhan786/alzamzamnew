import React from "react";

const Maps = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4899.993461275766!2d91.7344308641903!3d26.1708146101934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5b40b498e17d%3A0xa50538fc5612496a!2sKumarpara%20Panchali!5e0!3m2!1sen!2sin!4v1687450454949!5m2!1sen!2sin"
        style={{width:'100%', height:300}}
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Maps;
