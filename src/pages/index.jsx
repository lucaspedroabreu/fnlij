import Head from 'next/head'
import Link from 'next/link'
import Carousel from '../components/Carousel'
import HeroSection from '../components/HeroSection'
import OurPartners from '../components/OurPartners'

const Home = (props) => {
  const FNLIJ = 'FNLIJ'
  return (
    <>
      <Head>
        <title>FNLIJ</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <HeroSection />
      <section id="about" className="bg-slate-100 flex-col md:flex-row flex justify-center items-center">
        <div className="container flex flex-col bg-theme-green md:h-[640px] md:w-[640px] md:my-24 relative md:-right-2 p-12 justify-center gap-10  py-20 pr-20 pl-12 drop-shadow-2xl">
          <h2 className="text-gray-100 text-5xl">
              Conheça a <span className="text-slate-100 font-logo font-semibold text-6xl">{ FNLIJ }</span>
          </h2>
          <p className="text-slate-100 text-justify first-letter:font-black first-letter:leading-10 first-line:tracking-widest first-letter:text-7xl first-letter:text-slate-300 first-letter:mr-2 first-letter:float-left">
            <span className="uppercase font-bold">A</span>
            {String.fromCharCode(160)}
            <span className='font-bold'>Fundação Nacional do Livro Infantil e Juvenil – FNLIJ</span> foi criada em 23 de maio de 1968. A sua sede está localizada na Casa da Leitura da Fundação da Biblioteca Nacional, no bairro das Laranjeiras, no Rio de Janeiro.
          </p>
          <p className="text-slate-100 text-justify break-words indent-10">É uma organização sem fins lucrativos, em fase de renovação de sua  utilidade pública federal e estadual, que atua prioritariamente na  promoção da leitura, do livro e da literatura infantil e juvenil.</p>
          <p className="text-slate-100 text-justify break-words indent-10">É a seção brasileira do International Board on Books for Young People (IBBY Brasil).</p>
          <div className="rounded-md shadow sm:mt-0 sm:ml-3 self-end">
            <Link href="/contact" passHref>
              <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-theme-green bg-white hover:bg-white/80 hover:text-theme-green/90 md:py-4 md:text-lg md:px-10">
                Saiba mais
              </a>
            </Link>
          </div>
        </div>

        <div className="container flex items-center justify-center overflow-hidden h-[300px] bg-transparent md:h-[540px] md:w-[540px] relative md:right-8 drop-shadow-2xl">
          <Carousel />
        </div>
      </section>
      {/* <OurPartners /> */}
    </>
  )
}

export default Home
