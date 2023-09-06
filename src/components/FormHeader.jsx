import React from 'react'
import {IoMdFolderOpen} from 'react-icons/io'
import { FiStar,FiSettings } from 'react-icons/fi'
import {AiOutlineEye} from 'react-icons/ai'
import { Avatar, Button, IconButton } from '@mui/material'
import { ColorLens, MoreVert } from '@mui/icons-material'
import './formheader.css'



function FormHeader() {
  return (
    <div className='form_header'>
        <div className='form_header_left'>
            <img src="" alt="" style={{height:"45px",width:"40px"}} />
            <input type='text' placeholder='Untitled form' className='form_name' value=''></input>
            <IoMdFolderOpen className='form_header_icon' style={{marginLeft:"10px"}}></IoMdFolderOpen>
            <FiStar className='form_header_icon' style={{marginLeft:"10px"}}></FiStar>
            <span style={{fontSize:"12px",fontWeight:"600px"}}>All changes saved in drive</span>

        </div>
        <div className='form_header_right'>
            <IconButton>
                <ColorLens size="small" className='form_header_icon' />
            </IconButton>
            <IconButton>
                <AiOutlineEye  className='form_header_icon' />
            </IconButton>
            <IconButton>
                <FiSettings className='form_header_icon' />
            </IconButton>
             
             <Button variant='contained' color='primary' href='#contained-buttons'>Send</Button>
                          
            <IconButton>
                <MoreVert className='form_header_icon' />
            </IconButton>
            <IconButton>
                <Avatar style={{height:"30px",width:"30px"}}  />
            </IconButton>
        </div>

    </div>
  )
}

export default FormHeader