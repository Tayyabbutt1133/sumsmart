import React from 'react'
import { useState, useEffect } from 'react'
import {copy, linkIcon, loader, tick} from '../assets'

const Demo = () => {
  return (
      <section className='mt-16 w-full max-w-xl'>
          {/* search */}
          <div className='flex flex-col w-full gap-2'>
              <form className='flex relative justify-center items-center'
              onSubmit={()=>{}}>
                  <img src={linkIcon} alt='link_icon' className='absolute left-0 my-2 ml-3 w-5' />
                  <input type='url' placeholder='Enter a URL'
                      value=""
                      onChange={() => { }}
                      required
                      className='url_input peer' />
                  <button type='submit'
                  className='submit_btn transition duration-300 ease-in-out'>
                      <p>↵</p>
                  </button>
              </form>
          </div>
   </section>
  )
}

export default Demo