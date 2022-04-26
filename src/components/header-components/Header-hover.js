import React from 'react'

const Headerhover = ({ removeHover }) => {

    // function removeHover(e) {
    //     setHover(false)
    // }
      
  return (
    <>
    <div className='absolute top-24 z-50 w-full bg-white h-3/6 flex gap-40 md:pl-12 md:mt-10' onMouseLeave={removeHover}>
        <div>
            <h1 className='font-semibold md:pb-2'>Basliq</h1>
            <p><a href="#">Alt Başlıq</a></p>
            <p><a href="#">Alt Başlıq</a></p>
            <p><a href="#">Alt Başlıq</a></p>
            <p><a href="#">Alt Başlıq</a></p>
            <p><a href="#">Alt Başlıq</a></p>
        </div>
        <div>
            <h1 className='font-semibold md:pb-2'>Basliq</h1>
            <p><a href="#">Alt Başlıq</a></p>
            <p><a href="#">Alt Başlıq</a></p>
            <p><a href="#">Alt Başlıq</a></p>
        </div>
        <div>
            <h1 className='font-semibold md:pb-2'>Basliq</h1>
            <p><a href="#">Alt Başlıq</a></p>
            <p><a href="#">Alt Başlıq</a></p>
            <p><a href="#">Alt Başlıq</a></p>
            <p><a href="#">Alt Başlıq</a></p>
        </div>
    </div>
    </>
  )
}

export default Headerhover