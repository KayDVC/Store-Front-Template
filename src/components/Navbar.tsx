/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import { SearchIcon, MenuIcon, UserIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline'


const Navbar = () => {

  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const handleMenuClick = () => {
    if(search){
      setSearch(false);
    }
    setMenu(!menu);}
  const handleSearchClick = () => {
    if (menu){
      setMenu(false);
    }

    setSearch(!search);
  }
  


  return (
      <div>
        <div className='w-screen h-24 grid grid-cols-6 grid-rows-1 grid-flow-col mb-2 md:h-28'>
          <div className='flex justify-center items-center col-span-1'>
              <div onClick={handleMenuClick}>
                {/* When menu is clicked, transform into x icon */}
              {!menu ?<MenuIcon className='h-6 lg:hidden' />
                : <XIcon className='h-6' />
              }
              </div>
            
            <div onClick={handleSearchClick} className='hidden lg:block'>
              {!search ? <SearchIcon className='h-6' />
                : <XIcon className='h-6' />}
            </div>
          
          </div>

          <div className='flex justify-center items-center col-span-3 md:col-span-4 '>
            <div className='hidden lg:block'>
              <ul className='flex text-lg'>
                <a href='#'>Link 1</a>
                <a href='#'>Link 2</a>
                <a href='#'>Link 3</a>
              </ul>

            </div>
          </div>

          <div className='flex justify-between items-center mx-4 col-span-2 md:flex-row md:justify-end md:px-2'>
            <UserIcon className='h-6 md:px-4' />
            <ShoppingBagIcon className='h-6 md:px-4' />
            <div onClick={handleSearchClick} className='lg:hidden'>
              {!search ? <SearchIcon className='h-6' />
                : <XIcon className='h-6' />}
            </div>
          </div>
              
        </div >
        {/* Display Menu for smaller screens */}
        <div className={!menu ? 'hidden' : 'transition absolute w-screen h-1/5 bg-zinc-50'} >
          {/* If screen is lg(>1024 px w), menu icon should be changed to search icon. Hide menu when this happens */}
              <ul className='flex flex-col items-center lg:hidden '>
                <a className='border rounded-3xl border-solid px-10 text-lg hover:bg-white hover:drop-shadow-md' href='#'>Link 1</a>
                <a className='border rounded-3xl border-solid px-10 text-lg hover:bg-white hover:drop-shadow-md ' href='#'>Link 2</a>
                <a className='border rounded-3xl border-solid px-10 text-lg hover:bg-white hover:drop-shadow-md' href='#'>Link 3</a>
          </ul>
        </div>

        <div className={!search ? 'hidden' : 'transition absolute w-screen h-1/5 bg-zinc-50'}>
          <div className='w-full h-full'>
            <div className = 'flex w-full h-full justify-center items-center border-solid border-white rounded '>
              <input type="text" className = 'placeholder:italic placeholder:text-zinc-300 placeholder:text-center border-zinc-100 border-8 rounded-3xl h-[44px] w-1/2 p-3' placeholder= 'Start Typing...'/>
            </div>
          </div>
        </div>

      </div>

  )
}




export default Navbar