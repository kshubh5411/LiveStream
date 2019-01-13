import React from 'react'
import { Field , reduxForm } from 'redux-form';

 class StreamForm extends React.Component
 {
     renderError=({touched,error})=>
     {
         if(touched && error){
            
          return(<div className='ui error message'>
                 <div className='ui header'>{error}</div> 
                 </div>);}
     }
     renderInput=({input,label,meta})=>
     {
         const cs=`field ${meta.error&&meta.touched?'error':''}`;
         return(
             <div className={cs} >
               <label>{label}</label>
               <input  {...input} />
                {this.renderError(meta)}
             </div>
         );
     }
      onSubmit=(formValue)=>
      {
         this.props.onSubmit(formValue);
      }

     render(){
        return(
            <div className= 'ui container' >
             <form  className='ui form error'onSubmit={this.props.handleSubmit(this.onSubmit)} autoComplete='off'>
               <Field name='Title' component={this.renderInput} label='Enter Title'/>
               <Field name='Description' component={this.renderInput} label='Enter Description'/>
               <button className='ui button primary'>Submit</button>
             </form>
            </div>
        );
     } 
 }
 const validate =(formValue)=>
     {
        const error={};
        if(!formValue.Title)
          error.Title='Title must be Filled';
        if(!formValue.Description)
          error.Description='Description must not be Empty';
       return error;
    }
 
export default reduxForm({
   form: 'streamForm',
   validate
 })(StreamForm);