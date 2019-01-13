import React from 'react';
import Modal from '../modal';
import {connect} from 'react-redux';
import {deleteStream} from '../../actions';
import {fetchStream}  from '../../actions';
import {Link} from 'react-router-dom';


 class  StreamDelete extends React.Component
 {
  componentDidMount()
  {
    this.props.fetchStream(this.props.match.params.id);
  }
   actions=()=>
   {
     const id=this.props.match.params.id;
     return(
    <React.Fragment>
      <Link  to='/' className="ui negative right labeled icon  button">
      No
      <i className="close icon"></i>
    </Link>
    <div onClick={()=>this.props.deleteStream(id)}className="ui positive right labeled icon button">
          Yes
      <i className="checkmark icon"></i>
    </div>
   </React.Fragment>)
   }
    render(){
    return(
           <div>
              <Modal
              header='Delete'
              content='Do You want to delete Photo?'
              action={this.actions()}
              />
           </div>
         );
    }
 }
 export default connect(null,{deleteStream,fetchStream})(StreamDelete);