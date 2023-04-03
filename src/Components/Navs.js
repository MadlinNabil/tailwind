import React from 'react'

const Navs = () => {
  return (
    <div>
        <ul className='mr-6 p-6 flex bg-blue-100'>
            <li className='mr-6'>
                <a href='#' className='text-blue-500 hover:text-blue-800 '>
                    {""} Home
                </a>
            </li>
            <li className='mr-6'>
                <a href='#' className='text-blue-500 hover:text-blue-800'>
                    {""} About
                </a>
            </li>
            <li className='mr-6'>
                <a href='#' className='text-blue-500 hover:text-blue-800'>
                    {""} Contact Us
                </a>
            </li>
            <li className='mr-6'>
                <a href="#" className='cursor-not-allowed text-grey-500 hover:text-grey-800'>
                    {""} Disable
                </a>
            </li>
        </ul>
    </div>
  )
}
export default Navs;