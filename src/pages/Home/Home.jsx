import React from 'react'

import info from "../img/info.png"
import hero from "../img/hero.png"
import nefr from "../img/nefr.png"
import Profil from "../img/Profil.png"
import Icon from "../img/Icon.png"
import pul from "../img/pul.png"
import mass from "../img/mass.png"
import stak from "../img/stak.png"
import alls from "../img/alls.png"
import Star from "../img/Star.png"



import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import { t } from 'i18next'

const Home = () => {
  return (
    <div>
        <div className=' bg-[#1E1E1E] dark:bg-white dark:text-[black]'>
          <div className='flex flex-wrap justify-around items-center pt-[100px]'>
          <div className='  dark:text-[black]'>
            <h1 className='text-[50px] font-[600] text-white w-[380px]  dark:bg-white dark:text-[black]'>{t("abc")}</h1>
            </div>
       <div className='w-[380px] text-[white] text-[20px]  dark:bg-white dark:text-[black]'>
       <p>{t("abc1")}</p> <br />
       <button className='w-[200px] h-[50px] bg-[#FF3C78] text-[white] rounded-3xl'>Get Started --></button>
       </div>
          </div>

          <div >
        <img src={info} className='absolute left-[1000px] top-[600px] xl:hidden' alt="" />
        <img src={hero} className='m-auto pb-[50px] pt-[50px]' alt="" />
          </div>
        </div>

        <div className=' bg-[#F9F5F2] flex flex-wrap justify-around items-center  dark:bg-slate-900 dark:text-[white]'>

                <div>
                    <img src={nefr} alt="" />
                </div>

                <div className='xl:w-[400px] w-[600px]'>
                    <h1 className='text-[40px] font-[700]'>{t("abc2")}</h1><br />
                    <h2 className='font-[500] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt finibus tortor. Donec lobortis augue sed ante molestie, vitae maximus nunc semper.</h2> <br /> 
                    <button className='w-[200px] h-[50px] bg-[#2241CF] rounded-3xl text-[20px] text-[white]'>Explore Section</button><br /><br />
                    <h2 className='font-[600]'>Add some additional details about your product</h2><br />
                        
                    <div className='flex flex-wrap  items-center gap-4 w-[300px]'>
                    <img src={Profil} alt=""  />
                        <p className='font-[600]'>Motiur Leeman</p>
                    </div>
                </div>

        </div>

        <div className=' dark:bg-slate-900 dark:text-[white] flex flex-wrap justify-around items-center pt-[50px] pb-[50px]'>
           <div className='xl:w-[400px] w-[700px]'>
           <h1 className='text-[40px] font-[600]'>{t("abs")}</h1>
            <h1 className='text-[20px] font-[500]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium consectetur egestas mauris adipiscing dui. Cursus facilisis diam turpis leo netus consequat phasellus. Netus ipsum sed faucibus enim. </h1> <br />
            <button className='w-[200px] h-[50px] bg-[#2241CF] rounded-3xl text-[20px] text-[white]'>Explore Section</button>
           </div>

           <div className='bg-[#F9F5F2]  flex flex-wrap justify-around items-center h-[600px] rounded-3xl w-[500px]'>
                <div className='w-[200px] h-[230px] text-center p-[10px] rounded-3xl bg-white mb-[50px]'>
                    <img src={Icon} alt="" className=' flex-wrap justify-center items-center inline pb-[10px]' /><br />
                    <h1 className='font-[600] text-[20px] pb-[10px]'>{t("abs1")}</h1>
                    <h2 className='text-[grey] text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
                </div> 

                <div className='w-[200px] h-[230px] text-center rounded-3xl p-[10px] bg-white mb-[50px]'>
                    <img src={Icon} alt="" className=' flex-wrap justify-center items-center inline pb-[10px]' /><br />
                    <h1 className='font-[600] text-[20px] pb-[10px]'>{t("abs1")}</h1>
                    <h2 className='text-[grey] text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
                </div> 

                <div className='w-[200px] h-[230px] text-center rounded-3xl p-[10px] bg-white'>
                    <img src={Icon} alt="" className=' flex-wrap justify-center items-center inline pb-[10px]' /><br />
                    <h1 className='font-[600] text-[20px] pb-[10px]'>{t("abs1")}</h1>
                    <h2 className='text-[grey] text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
                </div> 

                <div className='w-[200px] h-[230px] text-center rounded-3xl p-[10px] bg-white'>
                    <img src={Icon} alt="" className=' flex-wrap justify-center items-center inline pb-[10px]' /><br />
                    <h1 className='font-[600] text-[20px] pb-[10px]'>{t("abs1")}</h1>
                    <h2 className='text-[grey] text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
                </div>
           </div>

        </div>

        <div className=' dark:bg-slate-900 dark:text-[white] flex flex-wrap justify-around items-center bg-[#F9F5F2] pb-[50px]'>
            <div><img src={pul} alt="" /></div>

            <div className='w-[600px] '>
                <h1 className='text-[40px] font-[600]'>{t("abs2")}</h1><br />
                <h1 className='text-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium consectetur egestas mauris adipiscing dui. </h1> <br />
                <div className='flex flex-wrap justify-start gap-5 items-center'><button className='w-[200px] h-[50px] bg-[#2241CF] rounded-3xl text-[20px] text-[white]'>Explore Section</button>
                <button className='w-[200px] h-[50px] bg-[#FF3C78] text-[white] rounded-3xl'>Get Started > </button>

            </div><br /><br />

            <div className=' flex flex-wrap justify-start gap-5 items-center'>
                    <div className='w-[250px] flex gap-5 justify-around items-center '>
                        <img src={mass} alt="" />
                        <p className='font-[600]'>{t("abs3")}</p>
                    </div>

                    <div className='w-[250px] flex gap-5 justify-around items-center '>
                        <img src={stak} alt="" />
                        <p className='font-[600]'>{t("abs3")}</p>
                    </div>
            </div>
            </div>

        </div>

        <div className=' dark:bg-slate-900 dark:text-[white] flex flex-wrap justify-around items-center pt-[50px] pb-[50px]'>
           <div className='xl:w-[400px] w-[700px]'>
           <h1 className='text-[40px] font-[600]'>Discover the power of creative freedom with Nisa.</h1><br /> 
            <h1 className='text-[20px] font-[500]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium consectetur egestas mauris adipiscing dui. </h1> <br />
            <button className='w-[200px] h-[50px] bg-[#2241CF] rounded-3xl text-[20px] text-[white]'>Explore Section</button>
           </div>

            <div><img src={alls} alt="" /></div>

        </div>

      <div className=' dark:bg-slate-900 dark:text-[black] bg-[#F9F5F2] pb-[50px] pt[50px] '>
        <h1 className='text-[40px] font-[600] text-center  dark:bg-slate-900 dark:text-[white]'>Customers love the ease and simplicity</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
      
      
   
        <SwiperSlide>
            <div className='w-[350px]  h-[300px] pr-[50px] rounded-3xl bg-white p-[10px]'>
            <div className='w-[250px] flex gap-5 justify-around items-center '>
                        <img src={Profil} alt="" />
                        <p className='font-[600]'>Built to be customise with complete ease.</p>
                    </div><br /> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus venenatis mi aliquet cras interdum. Lectus cons ectetur fermentum lorem aliquam.</p><br /> <br />
                    <img src={Star} alt="" />
          </div>
        </SwiperSlide>
       

        
        <SwiperSlide>
            <div className='w-[350px]  h-[300px] pr-[50px] rounded-3xl bg-white p-[10px]'>
            <div className='w-[250px] flex gap-5 justify-around items-center '>
                        <img src={Profil} alt="" />
                        <p className='font-[600]'>Built to be customise with complete ease.</p>
                    </div><br /> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus venenatis mi aliquet cras interdum. Lectus cons ectetur fermentum lorem aliquam.</p><br /> <br />
                    <img src={Star} alt="" />
            </div>
        </SwiperSlide>
       

    
        <SwiperSlide>
            <div className='w-[350px]  h-[300px] pr-[50px] rounded-3xl bg-white p-[10px]'>
            <div className='w-[250px] flex gap-5 justify-around items-center '>
                        <img src={Profil} alt="" />
                        <p className='font-[600]'>Built to be customise with complete ease.</p>
                    </div><br /> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus venenatis mi aliquet cras interdum. Lectus cons ectetur fermentum lorem aliquam.</p><br /> <br />
                    <img src={Star} alt="" />
            </div>
        </SwiperSlide>
       

     
        <SwiperSlide>
            <div className='w-[350px]  h-[300px] pr-[50px] rounded-3xl bg-white p-[10px]'>
            <div className='w-[250px] flex gap-5 justify-around items-center '>
                        <img src={Profil} alt="" />
                        <p className='font-[600]'>Built to be customise with complete ease.</p>
                    </div><br /> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus venenatis mi aliquet cras interdum. Lectus cons ectetur fermentum lorem aliquam.</p><br /> <br />
                    <img src={Star} alt="" />
            </div>
        </SwiperSlide>
        


     
        <SwiperSlide>
            <div className='w-[350px]  h-[300px] pr-[50px] rounded-3xl bg-white p-[10px]'>
            <div className='w-[250px] flex gap-5 justify-around items-center '>
                        <img src={Profil} alt="" />
                        <p className='font-[600]'>Built to be customise with complete ease.</p>
                    </div><br /> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus venenatis mi aliquet cras interdum. Lectus cons ectetur fermentum lorem aliquam.</p><br /> <br />
                    <img src={Star} alt="" />
            </div>
        </SwiperSlide>
     

      
        <SwiperSlide>
            <div className='w-[350px]  h-[300px] pr-[50px] rounded-3xl bg-white p-[10px]'>
            <div className='w-[250px] flex gap-5 justify-around items-center '>
                        <img src={Profil} alt="" />
                        <p className='font-[600]'>Built to be customise with complete ease.</p>
                    </div><br /> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus venenatis mi aliquet cras interdum. Lectus cons ectetur fermentum lorem aliquam.</p><br /> <br />
                    <img src={Star} alt="" />
            </div>
        </SwiperSlide>
      

     
        <SwiperSlide>
            <div className='w-[350px]  h-[300px] pr-[50px] rounded-3xl bg-white p-[10px]'>
            <div className='w-[250px] flex gap-5 justify-around items-center '>
                        <img src={Profil} alt="" />
                        <p className='font-[600]'>Built to be customise with complete ease.</p>
                    </div><br /> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus venenatis mi aliquet cras interdum. Lectus cons ectetur fermentum lorem aliquam.</p><br /> <br />
                    <img src={Star} alt="" />
            </div>
        </SwiperSlide>
        

      

      </Swiper>

      </div>

      <div className='flex flex-wrap justify-center items-center pb-[100px] pt-[50px]  dark:bg-slate-900 dark:text-[white]'>
        <div className='w-[80%] bg-[#1E1E1E] rounded-3xl h-[250px] p-[20px] flex flex-wrap justify-around'>
            <div className='w-[500px] xl:w-[400px]'>
                <h1 className='text-[30px] text-[white] font-[600]'>Discover the power of creative freedom with Align.</h1> <br />
                <p className='text-[20px] text-[white]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium consectetur egestas mauris adipiscing dui. </p>
            </div>
            <div className='flex flex-wrap flex-col justify-center items-center'>
                <input type="text" placeholder='Your Name' className=' p-[10px] w-[400px] h-[50px] rounded-3xl bg-transparent border-white border-[1px]' /> <br />
                <input type="text" placeholder='Email Address' className='p-[10px]  w-[400px] h-[50px] rounded-3xl bg-transparent border-white border-[1px]' /> <br />
                <button className='w-[150px] h-[50px] bg-[#FF3C78] rounded-3xl text-[white]'>Submit</button>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Home