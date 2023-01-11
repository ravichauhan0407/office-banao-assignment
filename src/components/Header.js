import React from 'react'
import {LeftOutlined}  from '@ant-design/icons'
import {Button} from 'antd'
export const Header = (props) => {
  
  
  return (
    <div className='header'>
         <div className='title'>
         <div className='icon'><LeftOutlined  /></div>
         <div style={{fontSize:'20px',fontWeight:'bold'}}>Create Workorder</div>
         </div>
         <Button  style={{width:'120px',fontWeight:'bold'}} type="primary" onClick={()=>{props.handleShowOverlay()}} >Save</Button>
    </div>
  )
}
