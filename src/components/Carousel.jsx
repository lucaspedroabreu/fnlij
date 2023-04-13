import Image from 'next/image'
import React from 'react'

import fnlij40anos from '../assets/40anos-fnlij.jpg'
import fnlij50anos from '../assets/50anos-fnlij.png'
import reginaYolanda from '../assets/regina-yolanda.jpg'
import vozesAncestrais from '../assets/vozes-ancestrais-premio2017.jpg'
import ziraldo from '../assets/salao-fnlij-2014-eliardo-franca-primeiro-vencedor-premio-fnlij-1975-ziraldo.jpg'

import { useTranslation } from 'next-i18next'

function Carousel() {
  const { t } = useTranslation('carousel')

  return (
    <div id="carousel-square" className="carousel slide relative" data-bs-ride="carousel">
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target="#carousel-square"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="açaí"
        ></button>
        <button type="button" data-bs-target="#carousel-square" data-bs-slide-to="1" aria-label="arara"></button>
        <button type="button" data-bs-target="#carousel-square" data-bs-slide-to="2" aria-label="onça"></button>
        <button type="button" data-bs-target="#carousel-square" data-bs-slide-to="3" aria-label="indio"></button>
        <button type="button" data-bs-target="#carousel-square" data-bs-slide-to="4" aria-label="ziraldo"></button>
      </div>
      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item active relative float-left w-full">
          <Image src={fnlij40anos} className="block object-cover" alt="Açaí da amazônia" />
          <div className="carousel-caption hidden md:block absolute text-center">
            <h5 className="text-2xl font-bold">{t('amazon_img_header')}</h5>
            <p>{t('amazon_img_text')}</p>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <Image src={fnlij50anos} className="block object-cover" alt="Fazenda de geração solar" />
          <div className="carousel-caption hidden md:block absolute text-center">
            <h5 className="text-2xl font-bold">{t('solarenergy_img_header')}</h5>
            <p>{t('solarenergy_img_text')}</p>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <Image src={reginaYolanda} className="block object-cover" alt="Onça nativa do Pará" />
          <div className="carousel-caption hidden md:block absolute text-center">
            <h5 className="text-2xl font-bold">{t('jaguar_img_header')}</h5>
            <p>{t('jaguar_img_text')}</p>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <Image src={vozesAncestrais} className="block object-cover" alt="Onça nativa do Pará" />
          <div className="carousel-caption hidden md:block absolute text-center">
            <h5 className="text-2xl font-bold">{t('jaguar_img_header')}</h5>
            <p>{t('jaguar_img_text')}</p>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <Image src={ziraldo} className="block object-cover" alt="Onça nativa do Pará" />
          <div className="carousel-caption hidden md:block absolute text-center">
            <h5 className="text-2xl font-bold">{t('jaguar_img_header')}</h5>
            <p>{t('jaguar_img_text')}</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline !focus:ring-0 !focus:border-none focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carousel-square"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline !focus:ring-0 !focus:border-none focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carousel-square"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carousel
