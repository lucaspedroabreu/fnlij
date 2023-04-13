import Image from 'next/image'
import React from 'react'

import VerraLogo from '../../public/verra-logo-nobg.png'

function OurPartners() {
  return (
    <>
      <section id="partners" className="bg-slate-100 flex flex-col gap-10 justify-center items-center md:pb-20">
        <h2 className="font-body tracking-tight text-theme-gray text-4xl sm:tracking-tight md:text-5xl md:tracking-tight">
          Our Partner
        </h2>
        <div>
          <Image alt="Verra's Logo" src={VerraLogo} />
        </div>
      </section>
    </>
  )
}

export default OurPartners
