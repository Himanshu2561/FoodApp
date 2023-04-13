import ArticleSlider from './ArticleSlider'

const Articles = () => {
  return (
    <div className='mt-[116px] mx-[108px] sm:mt-[132px] sm:mx-auto sm:text-center'>
      <p className='my-[41px] text-theme-blue font-bold text-[56px] sm:text-center sm:text-[28px] sm:font-semibold'>
        Latest Articles
      </p>
      <ArticleSlider />
    </div>
  )
}

export default Articles
