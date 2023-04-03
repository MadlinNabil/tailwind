import React from 'react'

 const Imagecard = ({image}) => {
    const tags=image.tags.split(",")
  return (
    <div>
        <div className='max-w-sm overflow-hidden shadow-lg rounded'>
            <img src={image.webformatURL} className='w-full' alt="123" />
            <div className='px-4 py-6'>
                <div className='font-bold text-xl text-purple-500'>
                    photo By {image.user}
                </div>
                <ul>
                    <li>
                        <strong>Views: </strong>
                        {image.views}
                    </li>
                    <li>
                        <strong>Downloads: </strong>
                        {image.downloads}
                    </li>
                    <li>
                        <strong>Likes: </strong>
                        {image.likes}
                    </li>
                </ul>
            </div>
        </div>
{tags.map((tag,index) => (
            <span className='inline-block text-grey-700 bg-grey-200 text-sm mr-2 mb-3 py-2 px-4 rounded-full font-bold'>#{tag}</span>

))}       
    </div>
  )
}
export default Imagecard;