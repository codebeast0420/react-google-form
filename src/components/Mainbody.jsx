import React from "react";
import { ArrowDropDown, FolderOpen, MoreVert, Storage } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import './mainbody.css'

function Mainbody() {
  return (
    <div className="mainbody">
      <div className="mainbody_top">
        <div className="mainbody_top_left" style={{fontSize:"16px",fontWeight:"500"}}>
         Recent Forms
        </div>
        <div className="mainbody_top_right">
            <div className="mainbody_top_center" style={{fontSize:"14px", marginLeft:"12px"}}>Owned by anyone<ArrowDropDown/></div>
            <IconButton>
                <Storage style={{fontSize:"16px",color:"black"}} />
            </IconButton>
            <IconButton>
                <FolderOpen style={{fontSize:"16px",color:"black"}} />
            </IconButton>
        </div>
      </div>
      <div className="mainbody_docs">
        <div className="doc_card">
         <img src="" alt="" className="doc_image" />
         <div className="doc_card_content">
            <div className="doc_content" style={{fontSize:"12px",color:"grey"}}>
            <div className="content_left">
                <Storage style={{color:"white",fontSize:"12px",backgroundColor:"#6E2594",padding:"3px",marginRight:"3px",borderRadius:"2px"}}/>Opened 6 Jan 2021
                </div>
                <MoreVert style={{fontSize:"16px",color:"grey"}} />
            </div>
         </div>
        </div>
      </div>
    </div>
  );
}

export default Mainbody;
