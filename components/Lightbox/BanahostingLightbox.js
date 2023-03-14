import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

function BanahostingLightbox() {
  // if toggler is updated when lightbox is closed it will open it
  // if toggler is updated when lightbox is opened it will close it
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <div className="text-center">
        <button
          type="button"
          className="btn btn-primary col-md-4 text-center"
          onClick={() => setToggler(!toggler)}
        >
          Ver pasos en imágenes
        </button>
      </div>
      <br/>
      <FsLightbox
        toggler={toggler}
        sources={[
          "/images/lightbox/banahosting/1.png",
          "/images/lightbox/banahosting/2.png",
          "/images/lightbox/banahosting/3.png",
          "/images/lightbox/banahosting/4.png",
          "/images/lightbox/banahosting/5.png",
          "/images/lightbox/banahosting/6.png",
          "/images/lightbox/banahosting/7.png",
        ]}
      />
    </>
  );
}

export default BanahostingLightbox;
