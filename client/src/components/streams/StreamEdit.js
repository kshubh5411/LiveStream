import React from 'react';
import {connect} from 'react-redux';
import {fetchStream} from '../../actions';
import StreamForm from './StreamForm';
import {editStream} from '../../actions';
import _ from 'lodash';

 class  StreamEdit extends React.Component 
 {
     
    componentDidMount()
    {
      this.props.fetchStream(this.props.match.params.id)
    }
    onSubmit=(formValues)=>
    {
      //console.log(formValues);
      this.props.editStream(this.props.match.params.id,formValues);
    }
    render(){
      if(!this.props.stream)
        return(<div>Loading....</div>)         
    return(   
           <div>
             <div className='header'>
             <h2>Edit a Stream</h2>
             </div>
             <StreamForm initialValues={_.pick(this.props.stream,'Title','Description')} onSubmit={this.onSubmit}/>
           </div>
         );
    }
 }
 const mapStateToProps=(state,ownProps)=>
 {
   
   return {
     stream:state.streams[ownProps.match.params.id]
   }
 }
 export default connect (mapStateToProps,{fetchStream,editStream})(StreamEdit);