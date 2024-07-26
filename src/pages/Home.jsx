import { Link } from 'wouter'

/* eslint-disable react/no-unescaped-entities */
export function Home() {
  return (
    <main className='bg-white dark:bg-gray-900 h-screen'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl text-center h-full my-auto lg:py-16 lg:px-12'>
        <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
          Map-Guess
        </h1>
        <h2 className='mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>
          Este juego fue creado para desafiar tu sentido de ubicación y testear tu <br /> "GPS
          mental 🗺 📍"
        </h2>
        <article className='sm:max-w-screen-sm mx-auto'>
          <ul className='space-y-4 text-left text-gray-500 list-disc list-inside dark:text-gray-400'>
            <li className='text-xl'>
              <strong>Instrucciones</strong>
              <ol className='ps-5 mt-2 text-base space-y-3 list-decimal list-inside'>
                <li>
                  Elegir zona ( barrio / localidad ) donde quieras testear tus habilidades. Ej:
                  <strong> Belgrano</strong>.
                </li>
                <li>
                  Se te dará una dirección dentro de la zona seleccionada.{' '}
                  <strong> Ej: Av Cabildo 2450</strong>.
                </li>
                <li>
                  Debes seleccionar las 2 calles entre las que se encuentra la dirección previamente
                  dada. <br />
                  <strong>Ej: Av. Monroe y Blanco encalada </strong>
                  (respetando la dirección del punto anterior).
                </li>
              </ol>
            </li>
          </ul>
        </article>
        <div className='flex flex-col mt-10 mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4'>
          <Link
            href='/game'
            className='inline-flex justify-center items-center py-3 px-5 text-2xl font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900'>
            Continuar
          </Link>
        </div>
      </div>
    </main>
  )
}
