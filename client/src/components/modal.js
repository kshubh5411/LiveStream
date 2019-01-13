import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

const Modal =(props)=>
{
    
    return  ReactDOM.createPortal(
        <div onClick={()=>history.push('/')} className='ui dimmer modals visible active'>
            <div onClick={(e)=>e.stopPropagation()} className="ui mini standard modal visible active">
                    <i onClick={()=>history.push('/')} className="close icon"></i>
                    <div className="header">
                        {props.header}
                    </div>
                <div className="content">
                 <div className="description">
                    <p>{props.content}</p>
                 </div>
                </div>
                <div className="actions">
                  {props.action}
                </div>
             </div>
         </div>,
     document.querySelector('#modal')
    )
}
export default Modal;