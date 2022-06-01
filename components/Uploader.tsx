import RUG from 'react-upload-gallery';
import 'react-upload-gallery/dist/style.css';
import { memo } from 'react';

const Uploader = ({ images, setImages }) => {
  return (
    <>
      <style>{`
       .rug-card-refresh {
          display: none;
        }
        .rug-card.__error {
          border: none;
        }
        .rug .rug-items.__card {
          min-height: 0;
        }
      `}</style>
      <RUG
        action='/upload'
        initialState={images}
        source={(response) => `${response.source}`}
        // onError={setError}
        onChange={(images) => {
          setImages(images);
        }}
      />
    </>
  );
};

export default memo(Uploader);
