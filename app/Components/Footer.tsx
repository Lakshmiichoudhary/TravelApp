import Link from 'next/link'
import React from 'react'
import { FOOTER_LINKS } from '../Constants/Index'

const Footer = () => {
  return (
    <section className='lg:mx-13 bg-black'>
      <div className='w-full flex flex-col lg:p-13 gap-14'>
        <div className='flex flex-col item-start justify-center gap-10 text-white'>
        <div className='flex flex-wrap gap-10 justify-center mt-3 md:flex-1'>
            {FOOTER_LINKS.map((columns,id) => (
              <h1 key={id} title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30 lg:mt-5 mt-3 lg:mx-20">
                  {columns.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </h1>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
