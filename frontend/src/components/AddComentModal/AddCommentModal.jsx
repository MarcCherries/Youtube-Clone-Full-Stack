import React, { useState, useEffect } from 'react';
import './AddCommentModal.css'

const AddCommentModal = (props) => {


 if(!props.modal){
     return null
 }
return ( 


<div className='modal'>
    <div className='modal-window'>
        <form>
  
        <span className="close" onClick={props.onClose}>&times;</span>
      
        </form>
    </div>
    
</div>
     );
}
 
export default AddCommentModal;