import  streamapi from '../apis/streamapi';
import history from '../history';
export const signIn=(userId)=>
{
    return{
        type:'SIGN_IN',
        payload:userId
    };
};
//SignOut
export const signOut=(userId)=>
{
    return{
        type:'SIGN_OUT',
        payload:userId
    };
};
//Create Stream
export const createStream=(formValue,userId)=>
{
    // we can also take user id from getState function===
    
    return  async (dispatch,getState)=>
    {
        //const userId=getState.auth.userId;
       const response= await streamapi.post('/streams',{...formValue,userId});
       dispatch({type:'CREATE_STREAM',payload:response.data});
       // After form Submission and and stream created then we navigate by history 
       history.push('/');

    }
}
//Fetch Entire List 
export const fetchStreams=()=>
{
    return async (dispatch)=>
    {
        const response=await streamapi.get('/streams');
        dispatch({type:'FETCH_STREAMS',payload:response.data});
    }
}
//Fetch One Particular List
export const fetchStream =(id)=>
{
    return async (dispatch)=>
    {
        const response= await streamapi.get(`/streams/${id}`);
        dispatch({type:'FETCH_STREAM',payload:response.data});
    }
}
//Edit stream
export const editStream = (id,formValue)=>
{
    //Patch is used to update specific element in object while put replace with brand new object
    return async (dispatch)=>
    {
        const response=await streamapi.patch(`/streams/${id}`,formValue);
        dispatch({type:'EDIT_STREAM',payload:response.data});
        history.push('/');
    }
}
//Delete Stream
export const deleteStream =(id)=>
{
    return async (dispatch)=>
    {
        await streamapi.delete(`streams/${id}`);
        dispatch({type:'DELETE_STREAM',payload:id});
        history.push('/');
    }
    
}