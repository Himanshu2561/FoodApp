const Footer = () => {
  return (
    <div className='mt-[65px] p-[90px_104px] flex items-center justify-between h-[362px] max-h-[362px] bg-[#F8F8F8] sm:h-[608px] sm:max-h-[608px] sm:mt-[57px] sm:p-[50px_40px] sm:justify-evenly sm:flex-col'>
      <div className='sm:w-[58px] sm:h-[75px]'>
        <img src='/logo.png' alt='' />
      </div>
      <div className='max-h-[186px] h-[186px] max-w-[232px] flex flex-col justify-between sm:max-w-[294px] sm:mt-[42px] sm:max-h-[116px] sm:h-[116px]'>
        <p className='font-semibold text-theme-blue text-[18.84px] leading-[27.22px] tracking-wide sm:text-[15px] sm:leading-[34px]'>
          Contact Us
        </p>
        <p className='mt-[15px] text-theme-text text-[14px] leading-[23px] sm:text-[10px] sm:mt-0'>
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
          XYZ-343434
        </p>
        <p className='mt-[15px] text-theme-text text-[14px] leading-[23px] sm:text-[10px] sm:mt-0'>
          example2020@gmail.com
        </p>
        <p className='mt-[15px] text-theme-text text-[14px] leading-[23px] sm:text-[10px] sm:mt-0'>
          (904) 443-0343
        </p>
      </div>
      <div className='max-h-[186px] h-[186px] max-w-[438px] w-[438px] flex justify-between sm:flex-col sm:justify-evenly sm:mt-[29px] sm:w-full'>
        <div className='flex flex-col justify-between max-w-[153px] sm:max-w-[87px] sm:justify-evenly'>
          <p className='font-semibold text-theme-blue text-[18.84px] leading-[27.22px] tracking-wide sm:text-[15px] sm:leading-[34px]'>
            More
          </p>
          <p className='mt-[14px] text-theme-text text-[14px] leading-[23px] sm:text-[8.76px] sm:mt-0'>
            About Us
          </p>
          <p className='mt-[14px] text-theme-text text-[14px] leading-[23px] sm:text-[8.76px] sm:mt-0'>
            Products
          </p>
          <p className='mt-[14px] text-theme-text text-[14px] leading-[23px] sm:text-[8.76px] sm:mt-0'>
            Career
          </p>
          <p className='mt-[14px] text-theme-text text-[14px] leading-[23px] sm:text-[8.76px] sm:mt-0'>
            Contact Us
          </p>
        </div>
        <div className='flex flex-col justify-between items-end max-w-[197px] sm:flex-col-reverse sm:mt-[30px] sm:items-center sm:mx-auto'>
          <div className='max-w-[129px] w-[129px]'>
            <p className='font-semibold text-theme-blue text-[18.84px] leading-[27.22px] tracking-wide sm:hidden'>
              Social Links
            </p>
            <div className='flex justify-between mt-[11px]'>
              <img src='/Path 3.svg' alt='' />
              <img src='/Path 2.svg' alt='' />
              <img src='/Path 1.svg' alt='' />
            </div>
          </div>
          <div className=''>
            <p className='text-theme-text text-[14px] leading-[23px]'>
              © 2022 Food Truck Example
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
