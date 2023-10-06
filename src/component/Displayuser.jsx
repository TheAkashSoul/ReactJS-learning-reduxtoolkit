import React from 'react'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux' 
import { removeUser } from '../store/slices/Userslice'


const Displayuser = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => {
        return state.users
    })

    console.log(data)

    const clearuser = (id) => {
        dispatch(removeUser(id))

    }


  return (
    <>
    {
        data.map((user, id) => {
            return <li key = {id}>
                {user}

                <button onClick={() => clearuser(id)}>Delete</button>
            </li>
        })
    }
    
    </>
  )
}

export default Displayuser