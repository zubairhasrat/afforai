import { LeftArrow } from 'src/components/widgets/svgs/LeftArrow';
import { Check } from 'src/components/widgets/svgs/Check';
import { Button } from 'src/components/widgets/button';

import styles from './home.module.css';

export const Home = () => {
  return (
    <div className='container my-6 relative mt-32'>
      <div className='flex flex-col relative overflow-hidden gap-24'>
        <div className='flex flex-col items-center gap-8 z-2'>
          <div className={`inline-flex items-center ${styles['appsumo-container']}`}>
            <img src="https://afforai.com/img/icons/appsumo.png" alt="AppSumo" width={26} height={20} />
            <span>Now on AppSumo</span>
            <a href="https://appsumo.8odi.net/3eR3xn" className='flex' target='_blank'>
              <span>Get Lifetime Deal</span>
              <div className={styles['left-arrow']}>
                <LeftArrow />
              </div>
            </a>
          </div>
          <div className={`text-center font-semibold text-5xl ${styles['title']}`}>
            Your second brain for maximizing productivity
          </div>
          <div className={`text-gray-700 text-center font-normal text-base ${styles['text-wrraper']}`}>
            Afforai is an AI chatbot that searches, summarizes, and translates info from multiple sources to
            produce trustworthy research. Feed lengthy research documents to stacks of dry compliance requirements
            and extract the key findings you need.
          </div>
          <div className='flex justify-between text-sm rgb-34-34-3' style={{ width: '816px'}}>
            <div className='flex items-center py-1 px-2 gap-1 rounded border border-solid border-gray-300'>
              <Check />
              Summarize Key Findings
            </div>
            <div className='flex items-center py-1 px-2 gap-1 rounded border border-solid border-gray-300'>
              <Check />
              Compare Between Documents
            </div>
            <div className='flex items-center py-1 px-2 gap-1 rounded border border-solid border-gray-300'>
              <Check />
              Search For Answers
            </div>
            <div className='flex items-center py-1 px-2 gap-1 rounded border border-solid border-gray-300'>
              <Check />
              Ask in Any Language
            </div>
          </div>
          <div className='flex flex-shrink align-center flex-row gap-4'>
            <Button
              classes='primary-btn'
            >
              Try for free 
            </Button>
            <Button
              classes='secondary-btn'
            >
              View pricing 
            </Button>
          </div>
        </div>
        <div className='py-0 px-16 z-20'>
          <img src="https://afforai.com/img/graphics/laptop-landing-1.png" className='h-auto' width='100%' alt="landing" />
        </div>
        <div className={styles['bg-landing']}>
          <img src="https://afforai.com/img/graphics/laptop-landing-3.png" alt="landing bg" className='h-auto' width='100%' />
        </div>
      </div>
    </div>
  )
}
