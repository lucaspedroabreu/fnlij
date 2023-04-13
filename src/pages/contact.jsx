import React from 'react'
import contactFormImg from '../assets/contact-form.avif'
import Image from 'next/image'
import Logo from '../components/Logo'


function Contact() {
  
  return (
    <div className="bg-theme-green">
      <div className="relative bg-theme-green">
        <div className="absolute inset-0">
          <div className="w-full h-full object-cover relative">
            <Image src={contactFormImg} layout="fill" objectFit="cover" className="w-full object-cover" alt="..." />
          </div>
          <div className="absolute inset-0 bg-theme-green mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[60vh] flex flex-col items-start justify-end">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl sm:tracking-tight lg:text-6xl lg:tracking-tight">
            Entre em contato
          </h1>
          <h2 className="font-title text-3xl text-white">Deseja falar conosco?</h2>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl mb-6">Se tiver interesse em conhecer melhor os projetos desenvolvidos pela FNLIJ por favor entre em contato conosco!.</p>
        </div>
      </div>
      <div className="my-8 py-8">
        <div className="relative bg-theme-green">
          <div className="absolute inset-0">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-theme-green" />
          </div>
          <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
            <div className="bg-gray-50 lg:rounded-tl-xl lg:rounded-bl-xl py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12 md:mb-20">
              <div className="max-w-lg mx-auto flex flex-col">
                <div className='w-[220px] self-center justify-self-center'>
                <Logo />
                </div>

                <p className="hidden invisible md:flex md:visible mt-3 px-6 text-lg leading-6 text-gray-500">
                Se tiver interesse em conhecer melhor os projetos desenvolvidos pela FNLIJ por favor entre em contato conosco!
                </p>
                {/* <p className="visible md:hidden md:invisible mt-3 px-6 text-lg leading-6 text-gray-500">
                  Para oportunidades de negócio e quaisquer outras dúvidas, favor entre em contato conosco usando o
                  formulário abaixo.
                </p> */}
                <dl className="mt-8 text-base text-gray-500 flex flex-col items-center lg:items-start ml-5">
                  <div>
                    <dt className="sr-only">Endereço</dt>
                    <dd>
                      <p>Rua Pereira da Silva, 86, Laranjeiras</p>
                      <p>Rio de Janeiro / RJ – CEP 22221-140</p>
                    </dd>
                  </div>
                  <div className="mt-6">
                    <dt className="sr-only">Telefone 1</dt>
                    <dd className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="flex-shrink-0 h-6 w-6 text-gray-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>

                      <span className="ml-3">+55 (21) 3734-1582</span>
                    </dd>
                  </div>
                  <div className="mt-6">
                    <dt className="sr-only">Telefone 2</dt>
                    <dd className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="flex-shrink-0 h-6 w-6 text-gray-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>

                      <span className="ml-3">+55 (21) 3734-1570</span>
                    </dd>
                  </div>
                  <div className="mt-3">
                    <dt className="sr-only">Email</dt>
                    <dd className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="flex-shrink-0 h-6 w-6 text-gray-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>

                      <span className="ml-3">fnlij@fnlij.org.br</span>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="bg-white lg:rounded-tr-xl lg:rounded-br-xl py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12 mb-20">
              <div className="max-w-lg mx-auto lg:max-w-none">
                <Image src="/livros-fnlij.png" width={500} height={300} alt="Floresta"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
