import React from 'react';
import './App.css';
import Imagecard from './Components/Imagecard';
import Navs from './Components/Navs';
import Searchbox from './Components/Searchbox';
import { useEffect, useState } from 'react';

export default function App() {
  const [images, setImages] = useState([]); //array from Images
  const [isLoading, setIsLoading] = useState(true);
  const [searchWord, setSearchword]= useState('');
  useEffect(() => {
    fetch(
      "https://pixabay.com/api/?key=33304552-0a7f92f83533cd388f384948e&q=${searchWord}&image_type=photo&pretty=true&per_page=9")
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err))
  } , [searchWord]); // this array will put in it result of search
  return (
    <div>
      <Navs />
      <Searchbox searchText={(text) => setSearchword(text)} />
       {isLoading ? (
       <h1 className='text-black text-2xl'>Loading</h1>
       ) : (
       <div className='grid grid-cols-3 gap-4'>
        {images.map((image) => (
        <Imagecard key={image.id} image={image} /> 
        ))}
        
      </div> )}
    </div>
  )
}
