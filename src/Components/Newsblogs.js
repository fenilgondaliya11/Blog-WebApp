import React from 'react'
import Search from './Search'
import Pagination from './Pagination'
import Storys from './Storys'
import '../Style/News.css'




const Newsblogs = () => {
  return (
    <>
      <div className='mincontainerr'>
        <Search />
        <Pagination />
        <Storys />
      </div>
    </>
  )
}

export default Newsblogs
