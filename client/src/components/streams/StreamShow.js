import React from 'react';
 import {connect} from 'react-redux';
 import {fetchStream} from '../../actions';
 import flv from 'flv.js';

 class StreamShow extends React.Component{

  constructor(props)
  {
     super(props);
     this.videoRef=React.createRef();
  }
  componentDidMount(){
    const id=this.props.match.params.id;
    this.props.fetchStream(id);
    this.buildPlayer();
  }
  
  componentDidUpdate()
  {
    this.buildPlayer();
  }

  //build player if stream fetched
  buildPlayer()
  {
    const id=this.props.match.params.id;

    if(this.flvplayer||!this.props.stream)
     return;

    this.flvplayer=flv.createPlayer(
      {
        type:'flv',
        url:`http://localhost:8000/live/${id}.flv`
      });
    this.flvplayer.attachMediaElement(this.videoRef.current);
    this.flvplayer.load();
  }
  
  // Clear All the stuff==
  componentWillUnmount()
  {
    this.flvplayer.destroy();
  }
  render()
  {
    if(this.props.stream){
    return(
        <div className="ui container">
          <video ref={this.videoRef} style={{width:'100%'}} controls={true}/>
           <div className='ui header'>
              {this.props.stream.Title}
           </div>
           <h4> {this.props.stream.Description}</h4>
        </div>
    );}
    return <div>Loading.....</div>
  }

 }
 const mapStateToProps=(state,ownProps)=>
 {
   return{
     stream:state.streams[ownProps.match.params.id]
   }

 }
 export default connect(mapStateToProps,{fetchStream})(StreamShow);