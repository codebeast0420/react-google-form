import React from 'react'
import './header.css'
import { IconButton } from '@mui/material'
import formImg from '../images/form.png'
import SearchIcon from '@mui/icons-material/Search'
import AppsIcon from '@mui/icons-material/Apps'
import Avatar from '@mui/material/Avatar'
import TempDrawer from './TempDrawer'
function Header() {
  return (
    <div className='header'>
        <div className='header_info'>
          <TempDrawer />
          <img src={formImg} style={{height:"40px"}} className='form image' alt='noImage'/>
          <div className='info'>

          Forms
          </div>
        </div>
        <div className='header_search'>
          <IconButton>
        <SearchIcon/>
          </IconButton>
        <input type='text' name='search' placeholder='search'  />
        </div>
        <div className='header_right'>
         <IconButton>
          <AppsIcon/>
         </IconButton>
         <IconButton>
          <Avatar src="" />
         </IconButton>

        </div>
    </div>
  )
}

export default Header