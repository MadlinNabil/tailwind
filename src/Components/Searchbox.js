import React, { useState } from 'react'

 const Searchbox = ({searchText}) => {
    const [text,setText] = useState("");
    const onSubmit =(e) =>{
        e.preventDefault();
        searchText(text);
    };
  return (
    <div>
        {""}
        <form onsubmit={onSubmit} className='bg-gray-100 flex justify-center items-center'>
            <div className='bg-white rounded w-96 p-6'>
                <div className='mt-3 mb-3 pt-2 rounded-md flex border-2 py-1 px-3 justify-between'>
                    <input onChange={(e) =>setText(e.target.value)} 
                    type="text" placeholder='Search' className='outline-none text-grey-300 focus:text-blue-500 flex-grow'/>
                    <button type="submit" className='flex-grow outline-none text-grey-300 focus:text-blue-500'>Search</button>
                </div>
            </div>
        </form>
    </div>
  )
}
export default Searchbox;