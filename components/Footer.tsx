import React from 'react'
import { getFullYear } from '@/lib/utils';

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t-2 border-t-amber-600">
      <div className="flex flex-col py-5">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-bold text-[18px] opacity-60">
            <span className='primary'> Deal<span className='text-primary'>Tracker</span></span>
          </h4>
          <p className="font-normal text-[14px] text-grey-500 opacity-50">
            Copyright © {getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
