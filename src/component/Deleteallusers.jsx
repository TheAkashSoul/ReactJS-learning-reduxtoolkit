import React from 'react'
import { DeleteUsers } from '../store/slices/Userslice'
import { useDispatch } from 'react-redux'

const Deleteallusers = () => {
  const dispatch = useDispatch()

  const deletealldata = () => {
    dispatch(DeleteUsers())
  }
  return (
    <div>
      <button onClick={() => deletealldata()}>Delete All</button>
    </div>
  )
}

export default Deleteallusers