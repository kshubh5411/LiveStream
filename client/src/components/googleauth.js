import React from 'react';
import {connect} from 'react-redux';
import {signIn,signOut} from '../actions';

class GoogleApi extends React.Component
{
    componentDidMount()
    {
        window.gapi.load('client:auth2',()=>{
             
            window.gapi.client.init({
                clientId:'517174827805-ikn8e8e2k31ekfa74rm9eucg6hqv1gg2.apps.googleusercontent.com',
                scope:'email'
            }).then( ()=>
                {  
                    this.auth=window.gapi.auth2.getAuthInstance();
                    const currentUserId=this.auth.currentUser.get().getBasicProfile().getId();
                   // console.log(this.auth.currentUser.get().getBasicProfile().getId());
                    this.onAuthChanged(this.auth.isSignedIn.get(),currentUserId);
                      //console.log(this.auth.isSignedIn.get());
                    this.auth.isSignedIn.listen(this.onAuthChanged);
                });
         });
    }
    onAuthChanged=(isSignedIn,userId)=>
    {
        if(isSignedIn)
           {this.props.signIn(userId)}
        else
           {this.props.signOut(userId)}
    }
    signInonClick=()=>
    {
        this.auth.signIn();
    }
    signOutonClick=()=>
    {
        this.auth.signOut();
    }
    renderAuthButton()
    {   //console.log(this.props.isSignedIn)
        if(this.props.isSignedIn)
          return (<div>
                  <button onClick={this.signOutonClick}className="ui button red">
                   <i className="ui google icon"></i>SignOut
                  </button>
               </div>
            );
        else{
          return (<div>
                 <button onClick={this.signInonClick} className="ui button green">
                  <i className="ui google icon"></i>SignIn
                 </button>
              </div>);}
    }
    render()
    {
        return(
             <div>{this.renderAuthButton()}</div>
        );
    }
}
const mapStateToProps=(state)=>
{
    //console.log(state);
    //console.log(state.auth.isSignedIn);
    return{
   isSignedIn:state.auth.isSignedIn}
   
}
export default connect(mapStateToProps,{signIn,signOut})(GoogleApi);