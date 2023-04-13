const About = () => {
  return (
    <div className='mt-[150px] sm:mt-[64px] flex items-center justify-evenly bg-gradient-to-b from-[#f6f6f9] to-[#f7f8fb]'>
      <img className='h-fit sm:hidden' src='/spoon.jpg' alt='' />
      <div className='w-[447px] h-[254px] sm:w-[375px] sm:h-[518px] leading-[27px] sm:flex sm:flex-col sm:items-center sm:justify-center'>
        <p className='font-semibold text-[45px] text-theme-blue sm:text-[26px]'>About Us</p>
        <p className='text-theme-text text-[15px] mt-[27.41px] sm:text-[11px] sm:w-[275px] sm:text-center sm:leading-[21px]'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. t has survived not only
          five centuries.
        </p>
        <button className='w-[132px] h-[42px] sm:w-[96px] sm:h-[25px] rounded-[34px] sm:rounded-[27px] flex items-center bg-theme-red p-[3px_26px] sm:p-[4px_20px] mt-[21.59px]'>
          <p className='text-white font-semibold text-[16px] sm:text-[11px] leading-9 align-top'>
            Read More
          </p>
        </button>
      </div>
    </div>
  )
}

export default About
