import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import { logo } from "./assets"
import { HomePage, CreatePostPage } from "./pages";
const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-[#1e0424] sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <Link to="/">
          <div className='flex justify-center items-center flex-row'>
            <img src='https://stablediffusionapi.com//storage/themes/October2022/Kh4QdnAqdueh6PeJpCQD.png' alt="logo" className='w-16 object-contain'></img>
            <h2 className='ml-3 font-inter font-bold text-xl text-white'>Imagen</h2>
          </div>
        </Link>

        <Link to="/CreatePost" className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'>
          Create
        </Link>
      </header>

      <main className='sm:px-8 px-4 py-4 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>

        <Routes>
          <Route path='/' element = {<HomePage />} />
          <Route path='/CreatePost' element = {<CreatePostPage />} />
        </Routes>

      </main>
      
    </BrowserRouter>
  )
}

export default App