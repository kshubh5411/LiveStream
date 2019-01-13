import React from 'react'
import {connect} from 'react-redux';
import {createStream} from '../../actions';
import StreamForm from './StreamForm';
 class StreamCreate extends React.Component
 {
      onSubmit=(formValue)=>
      {
         this.props.createStream(formValue,this.props.userId);
      }

     render(){
        return(
            <div className="header">
              Create Stream
              <StreamForm onSubmit={this.onSubmit}/>
            </div>
        );
     } 
 }
 const mapStateToProps=(state)=>
 {
    return {
        userId:state.auth.userId
    }
 }
 export default connect(mapStateToProps,{createStream})(StreamCreate);