import Axios from 'axios';
import {useEffect} from 'react';
export default function App(){
  const apiCall = () => {
    Axios.get('http://localhost:4001/user/').then((data) => {
      //this console.log will be in our frontend console
      console.log(data.data) 
    })
  } 
  let insertApi = async () => {
    try {
      let obj = {
        'Action': 'silent',
        'Permission': 'Grant'
      };
  
      const response = await Axios.post('http://localhost:4001/user/add', obj, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  let updateApi = async () => {
    try {
      let obj = {
        'Action': 'hustel'
      }; 
  
      const response = await Axios.put('http://localhost:4001/user/update/silent', obj, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  return(
    <>
      <div>
        <h1> getting data </h1>
        <button onClick={apiCall}> push </button>
        <button onClick={insertApi}> insert </button>
        <button onClick={updateApi}> update </button>
      </div>
    </>
  )
}