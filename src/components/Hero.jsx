const Hero = () => {
  return (
    <div className='flex h-[100vh] sm:flex-col-reverse sm:h-auto'>
      <div className='left w-1/2 mt-[33px] ml-[100px] sm:w-full sm:m-0 sm:mt-[60px]'>
        <img className='w-[107px] h-[83px] sm:hidden' src='/logo.png' alt='' />
        <div className='mt-[111px] w-[365px] sm:w-full sm:mt-[50px] sm:text-center sm:flex sm:flex-col sm:items-center sm:justify-center'>
          <p className='w-full align-top text-theme-blue font-bold text-[62px] leading-[69px] text-left sm:w-[255px] sm:text-[38px] sm:leading-[46px] sm:text-center'>
            Discover the <span className='text-theme-red'>Best</span> Food and
            Drinks
          </p>
          <p className='text-theme-text mt-[26px] sm:w-[249px] sm:text-[11px] leading-[18px]'>
            Naturally made Healthcare Products for the better care & support of
            your body.
          </p>
          <button className='mt-[41px] flex items-center rounded-[34px] bg-theme-red p-[14px_34px] w-[190px] h-[63px] sm:w-[120px] sm:h-[40px] sm:p-[4px_18px]'>
            <p className='text-white font-bold text-[18px] leading-9 align-top sm:text-[12px] sm:leading-[31px]'>
              Explore Now!
            </p>
          </button>
        </div>
      </div>
      <div className='right relative w-1/2 sm:w-full'>
        <img
          className='absolute top-0 right-0 z-0 sm:left-0 sm:relative'
          src='/pizza1.png'
          alt=''
        />
        <img
          className='absolute top-0 right-0 z-10 sm:left-0'
          src='/redCorner.png'
          alt=''
        />
        <button
          className='absolute top-[30px] right-[52.5px] text-white font-semibold p-[10px_20px] rounded-full border-white border-[2px] text-[16px] z-20 sm:top-[20px]
        sm:right-[25px] sm:text-[11px]'
        >
          Get in Touch
        </button>
      </div>
    </div>
  )
}

export default Hero
