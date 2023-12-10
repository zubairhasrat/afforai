import styles from './user.module.css';

export const User = () => {
  return (
    <div className={`flex flex-col justify-center items-center ${styles['wrraper']}`}>
      <div className='text-center rgb-82-82-82 text-base'>
        Loved by
        <span>20,000+</span>
        users around the world
      </div>
      <img src="https://afforai.com/img/graphics/laptop-landing-2.png" height='48' width='33%' alt="users" />
    </div>
  )
}