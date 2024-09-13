import React from 'react'
import list from '../../public/list.json'
import Carts from '../components/Carts'
function Book() {
  return (
    <>
    
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
          list.map((item)=>(
            <Carts key={item.id} item={item} />
          )
          )
        }
      </div>
    
    </>
  )
}
export default Book