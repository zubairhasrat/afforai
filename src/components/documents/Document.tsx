import styles from './document.module.css';

export const Document = () => {
  return (
    <div className={`container ${styles['wrraper']}`}>
      <div className='flex flex-row justify-between'>
        <div className='md:px-5 flex flex-col justify-center md:col-span-5 md:offset-1'>
          <div className='px-3 md:px-5 mx-auto container'>
            <div className='rgb-34-34-34 mb-4 text-4xl font-semibold'>Say goodbye to long, tiresome documents</div>
          </div>
          <div className='mb-6 mr-4 md:mr-12 text-base font-normal'>
            Afforai seamlessly translates documents, files, spreadsheets & websites, 
            filtering out what you don’t need & answering your specific questions within seconds.
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col items-center font-medium green-500'>
              <img src="https://afforai.com/img/icons/check-circle.svg" alt="checkmark" className='mr-4' height='24' />
              <span className='text-base'>A whip smart research assistant</span>
            </div>
            <div className='flex flex-col items-center font-medium green-500'>
              <img src="https://afforai.com/img/icons/check-circle.svg" alt="checkmark" className='mr-4' height='24' />
              <span className='text-base'>We speak every language</span>
            </div>
            <div className='flex flex-col items-center font-medium green-500'>
              <img src="https://afforai.com/img/icons/check-circle.svg" alt="checkmark" className='mr-4' height='24' />
              <span className='text-base'>Reliable data citation for answers</span>
            </div>
            <div className='flex flex-col items-center font-medium green-500'>
              <img src="https://afforai.com/img/icons/check-circle.svg" alt="checkmark" className='mr-4' height='24' />
              <span className='text-base'>Fort-Knox level data security</span>
            </div>
          </div>
        </div>
        <div className='md:col-span-5 mt-12 md:mt-0'>
          <img src="https://afforai.com/img/graphics/laptop-landing-4.png" alt="Afforai masters the documents you upload" width='100%' />
        </div>
      </div>
    </div>
  )
}