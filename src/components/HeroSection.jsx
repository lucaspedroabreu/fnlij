import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'
export default function Hero() {
  const { locale, locales, push } = useRouter()
  const { t } = useTranslation('heroSection')

  return (
    <div className="relative bg-hero-pattern bg-cover overflow-hidden">
      <div className="relative pb-16 sm:pb-24 ">
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 flex items-center justify-center min-h-[500px]">
          <div className="text-center md:pt-24 px-6 max-w-[720px] translate-y-10">
            <h1 className="text-4xl font-body font-bold tracking-tight text-slate-100 sm:text-5xl sm:tracking-tight md:text-5xl md:tracking-tight drop-shadow-3xl md:w-[25ch]">
              Um livro que se abre para novas oportunidades
            </h1>
            {/* <h2 className="text-2xl text-slate-300">{locale}</h2> */}
            <div className="mt-5 max-w-md mx-12 md:mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link href="/#about" passHref>
                  <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-theme-green hover:bg-theme-green/80 md:py-4 md:text-lg md:px-10">
                    Saiba mais
                  </a>
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 group">
                <Link href="/contact" passHref>
                  <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-theme-green bg-white hover:bg-gray-100/90 md:py-4 md:text-lg md:px-10">
                    Entre em contato{' '}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
