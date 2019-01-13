import React from 'react';
import {connect } from 'react-redux';
import {fetchStreams} from '../../actions';
import {Link} from 'react-router-dom';
 class StreamList extends React.Component{
     componentDidMount()
     {
         this.props.fetchStreams();
     }
     showEditandDelete=(List)=>
     {
         if(List.userId===this.props.currentUserId)
          {
              return (
                        <div className="ui buttons right floated">
                            <Link  to={`/stream/delete/${List.id}`} className="ui button red">Delete</Link>
                            <div className="or"></div>
                            <Link to={`/stream/edit/${List.id}`} className="ui  button  green">Edit</Link>
                        </div>
                     )
          }
          return null;
     }
     renderList()
     {
         return this.props.Lists.map( (List)=>
            {
                console.log(List.id);
                if(List.id){
                return (
                      
                      <div key={List.id} className="item">
                        <div className='ui segment'>
                          {this.showEditandDelete(List)}
                           <Link to={`stream/${List.id}`}className="content">
                              <div className="header">
                              <i className="ui camera icon"></i>
                                {List.Title}
                              </div>
                              {List.Description}
                           </Link>    
                        </div>
                     </div>
                );
                }
                return null;
            });
     }
     //create new button option
     newCreteOption=()=>
     {
         if(this.props.isSignedIn)
          {
              return(
                     <div style={{textAlign:'right'}} >
                      <Link className='ui button primary' to='/stream/new'>Create Stream</Link>
                     </div>
              );
          }

     }
     render()
     { 
         return(
            <div> 
               <div>
                {}
                </div>
               <div className=" ui container ui celled list"> 
                <div className='ui horizontal'>
                <h1>Streams</h1>
                {this.newCreteOption()}
                </div>
               {this.renderList()}
               </div>
            </div>
         );
     }
 }
 const mapStateToProps=(state)=>
 {
       return{
           Lists:Object.values(state.streams),
           currentUserId:state.auth.userId,
           isSignedIn:state.auth.isSignedIn
       }
 }
 export default connect(mapStateToProps,{fetchStreams})(StreamList);