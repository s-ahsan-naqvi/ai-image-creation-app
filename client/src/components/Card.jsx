import React from 'react'
import { saveAs } from 'file-saver';
import cors from 'cors';
import { AiOutlinePlayCircle } from 'react-icons/ai'

import { download } from '../assets';
import { downloadImg } from '../utils';

cors();

const getBase64FromUrl = async (url) => {
  const data = await fetch(url);
  const blob = await data.blob();
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob); 
    reader.onloadend = () => {
      const base64data = reader.result;   
      resolve(base64data);
    }
  });
}

// async function downloadImg(photo) {
//   console.log(photo);
//   await saveAs(photo, 'download.png')
// }

const Card = ({ _id, name, prompt, photo}) => {
  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
      <img 
        className='w-full h-auto object-cover rounded-xl'
        src={photo}
        alt={prompt}
      />
      <div className='group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md'>
        <p className='text-white text-sm overflow-y-auto prompt'>
          {prompt}
        </p>
        <div className='mt-5 flex justify-between items-center gap-2'>
          <div className='flex items-center gap-2'>
            <div className='rounded-full w-7 h-7 bg-green-700 object-cover text-white text-xs font-bold flex justify-center items-center '>
              {name[0]}
            </div>
            <p className='text-white text-sm'>
              {name}
            </p>
          </div>
          <button
            type='button'
            onClick={
               () =>  downloadImg(_id, photo)
            }
            className='outline-none bg-transparent border-none'
          >
            <AiOutlinePlayCircle className='w-7 h-7 object-contain invert' />
          </button>
        </div>
      </div>

    </div>
  )
}

export default Card