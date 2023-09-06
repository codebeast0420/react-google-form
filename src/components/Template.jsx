import React from 'react'
import { MoreVert, UnfoldMore } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import './template.css'
import uuid from 'react-uuid'
import { useNavigate } from 'react-router-dom'


function Template() {
    const navigate = useNavigate()
    const createForm = ()=>{
        const id =uuid()
        navigate('/form/'+id)
    }
  return (
    <div className='template_section'>
        <div className='template_top'>
        <div className='template_left'>
            <span style = {{fontSize:"16px",color:"#202124"}}>Start New Form</span>
        </div>
            <div className='template_right'>
                <div className='gallery_button'>
                    Template gallery 
                    <UnfoldMore fontSize='small' />
                </div>
                <IconButton>
                <MoreVert fontSize='small' />
                </IconButton>
            </div>
        </div>
        <div className='template_body'>
        <div className='card' onClick={createForm}>
            <img src='' alt='' className='card_image'/>
            <p className='card_title'>Blank</p>
        </div>
        <div className='card' >
            <img src='' alt='' className='card_image'/>
            <p className='card_title'>Party Invite</p>
        </div>
        <div className='card'>
            <img src='' alt='' className='card_image'/>
            <p className='card_title'>Contact Information</p>
        </div>
        </div>

    </div>
  )
}

export default Template