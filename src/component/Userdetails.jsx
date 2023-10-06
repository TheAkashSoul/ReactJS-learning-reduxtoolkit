import React from 'react'
import Deleteallusers from './Deleteallusers'
import { fakeuserdata } from '../api';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/slices/Userslice';
import Displayuser from './Displayuser';

const Userdetails = () => {
    const dispatch = useDispatch();

    const addNewuser = (payload) => {
        dispatch(addUser(payload))
    };


  return (
    <>
    <div className='content'>
        <div  className='admine-table'>
            <div>List of content</div>
            <button onClick={() => addNewuser(fakeuserdata())}>Add new user</button>
        </div>
        <div>
            <ul>
                <Displayuser />
            </ul>
            <hr />
            <Deleteallusers />
        </div>
    </div>
    </>
  )
}

export default Userdetails