import React, { useState, useEffect } from 'react';
import AddCommentModal from '../AddComentModal/AddCommentModal';


const DisplayComments = (props) => {
    const [modal, setModal] = useState(false);
    return ( 

        <div>
            <AddCommentModal modal={modal} onClose={() =>setModal(false)} />
            <h6>Comments:</h6>
            <button className='reply-button' onClick={() => setModal(true)}>Reply</button>
        </div>
     );
}
 
export default DisplayComments;