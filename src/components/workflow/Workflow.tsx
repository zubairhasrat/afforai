import styles from './workflow.module.css';

export const Workflow = () => {
  return (
    <div className="container">
      <div className='mb-20'>
        <div className="flex flex-col content-center col-auto">
          <div className="container flex flex-col items-center gap-6">
            <div className={`inline-flex content-center items-center ${styles['prodcutivity-badge']}`}>10x your productivity</div>
            <div className={`text-center ${styles['title']}`}>Save yourself from stress & streamline your workflow</div>
            <div className={`text-center ${styles['sub-text']}`}>
            The average worker spends 9 hours per week looking through & gathering information from thick stacks of documents. With Afforai, you can save yourself 8 hours per week (plus a lot of headaches).
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles['img-container']}>
          <img src="https://afforai.com/img/graphics/laptop-landing-5.png" alt="bg image" />
        </div>
      </div>
    </div>
  )
}