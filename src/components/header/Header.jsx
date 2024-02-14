import React from 'react'
import '../header/header.css'
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
    <>
      <form>
      <div className='search-header'>
   <h2 style={{cursor:"pointer"}}><IoIosSearch/></h2>   <input type="text" name="search" placeholder="Search.." />
      </div>
      </form>
    </>
  )
}

export default Header