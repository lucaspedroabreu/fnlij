import Head from 'next/head'
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const Business = () => {

  return (
    <>
      <Head>
        <title>FNLIJ - Sobre nós</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-theme-gray">
        <p className="text-base font-semibold leading-7 text-theme-green">O que fazemos</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-theme-green sm:text-4xl">A FNLIJ  atua na área de literatura</h1>
        <p className="mt-6 text-xl leading-8">
          A FNLIJ  tem especialização comprovada por cursos, feiras de livros, bienais, concursos literários e como o representante do IBBY Brasil oferecendo oportunidades para:
        </p>
        <div className="mt-10 max-w-2xl">
          <ul role="list" className="mt-8 max-w-xl space-y-8">
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-theme-green" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-theme-gray">Incrementar</strong> a produção do livro infantil e juvenil.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-theme-green" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-theme-gray">Promover</strong> estudos e pesquisas sobre todos os aspectos do livro infantil e juvenil.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-theme-green" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-theme-gray">Estimular</strong> o autor, o ilustrador e/ou o editor, mediante instituição de prêmios, bolsas  de estudo e cursos de especialização
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-theme-green" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-theme-gray">Estimular</strong> a ampliação de rede de bibliotecas infantis e juvenis
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-theme-green" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-theme-gray">Colaborar</strong> na execução de programas bibliotécnicos
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-theme-green" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-theme-gray">Estimular</strong>, formar e reciclar recursos humanos para desenvolvimento da educação,  cultura e gosto pela leitura
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-theme-green" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-theme-gray">Introduzir </strong>serviço de catalogação de livros criando um acervo nacional.
              </span>
            </li>
          </ul>
          {/* <p className="mt-8">
            Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
            fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
            adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-theme-gray">Seção 2</h2>
          <p className="mt-6">
            Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
            Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus
            mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
            ipsum eu a sed convallis diam.
          </p> */}
          <figure className="mt-10 border-l-4 border-theme-green pl-9">
            <blockquote className="font-semibold text-theme-green">
              <p>
                “As crianças e os adolescentes têm todos os direitos humanos, não porque são &quot;o futuro&quot;, mas porque são seres humanos. Hoje.”
              </p>
            </blockquote>
            <figcaption className="mt-6 flex gap-x-4">
              
              <div className="text-sm leading-6">
                <strong className="font-semibold text-blue-900">UNICEF</strong> –  United Nations Children&apos;s Fund
              </div>
            </figcaption>
          </figure>
          {/* <p className="mt-10">
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
          </p> */}
        </div>
        <figure className="mt-16">
          <Image
            height="100%"
            width="100%"
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src="/vozes-ancestrais-premio2017.jpg"
            alt="Índio - Vozes Ancestrais - Dez contos indígenas de Daniel Munduruku"
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon className="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
            Livro vozes ancestrais - Dez contos indígenas por Daniel Munduruku.
          </figcaption>
        </figure>
      </div>
    </div>
    </>
  )
}

export default Business
