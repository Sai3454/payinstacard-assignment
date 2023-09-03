import './App.css';
import { FaPlus, FaMinus } from 'react-icons/fa'
import {MdClose, MdMenu} from 'react-icons/md'
import profile from './images/profile.png'
import avatar from './images/avatar.png'
import avatar1 from './images/avatar1.png'
import avatar2 from './images/avatar2.png'
import avatar3 from './images/avatar3.png'
import testimonial1 from './images/testimonial1.png'
import Carousel from './Components/Couresel';
import { useState } from 'react';

export default function App() {

  const [menuHide, setmenuHide] = useState(true)

  return (
    <div className='p-15'>
      {/* header */}

      <div className="flex justify-between items-center p-5">
        <div className='basis-2/6 md:basis-4/6 flex justify-between md:justify-around'>
          <div className='md:invisible'>
            {
              menuHide ? (<div className='' onClick={() => setmenuHide(false)}>
              <MdMenu />
            </div>) : (<div className='text-left' onClick={() => setmenuHide(true)}>
              <MdClose />
            </div>)
            }
          </div>
          <div className='w-[50px] md:w-[400px] flex justify-around invisible md:visible'>
            <p className='text-sm md:text-md font-inter'>Home</p>
            <p className='text-sm md:text-md font-inter'>About</p>
            <p className='text-sm md:text-md font-inter'>Schedules</p>
            <p className='text-sm md:text-md font-inter'>Membership</p>
            <p className='text-sm md:text-md font-inter'>Pricing</p>
          </div>
          
        </div>
        <div className='basis-4/6 md:basis-2/6 flex justify-around'>
          <div className='w-[200px] flex justify-around'>
          <p className='text-md font-inter text-[#7D7D7D]'>Offers</p>
          <button className="pt-2 pb-2 pr-4 pl-4 text-[12px] text-white bg-orange-400 rounded-xl">COURSES</button>
          </div>
        </div>
      </div>
      
      {
        !menuHide && (
          <div className='h-[300px] md:w-[400px] flex flex-col justify-around items-center z-40  bg-slate-100 backdrop-opacity-10'>
            <p className='text-sm md:text-md font-inter'>Home</p>
            <p className='text-sm md:text-md font-inter'>About</p>
            <p className='text-sm md:text-md font-inter'>Schedules</p>
            <p className='text-sm md:text-md font-inter'>Membership</p>
            <p className='text-sm md:text-md font-inter'>Pricing</p>
          </div>
        )
      }

      {/* section-1 */}
      <div className="grid md:grid-rows-1 grid-rows-2 grid-flow-col content-center justify-items-center gap-2 p-10 bg-[#F8F1D340] h-screen-3/4">
        <div className='card flex flex-col justify-center items-center p-4 order-2 md:order-1'>
          <div className='flex flex-col justify-around h-60'>
            <h1 className="text-black text-md mb-1">Discover the beauty of the tropics</h1>
            <h1 className="text-black text-4xl font-bold font-poppins mb-3">Tropical Destinations<br /><span className='font-semibold font-poppins'> For Students</span></h1>
            <h1 className="text-black text-xs font-inter md:w-[400px] mb-4">Lorem ipum dolor sit amet consectetur. Sit mattis donec mi bibendum integer rutrum nisi. A nec nisl vitae </h1>
            <div className='flex justify-start'>
              <button className=" pt-2 pb-2 pr-4 pl-4 text-sm text-white bg-orange-400 rounded-xl">SIGN UP</button>
            </div>
          </div>
        </div>
        <div className='card flex justify-center items-center p-4 order-1 md:order-2'>
          <img src={profile} alt="profile" className='h-100 w-60'/>
        </div>
      </div>
      {/* Section-2 */}
      <div className='grid grid-rows-2 grid-flow-col md:grid-rows-1 content-center justify-items-center gap-6 md:gap-10 p-10 md:p-24 h-screen-3/4'>
        <div className='flex flex-col justify-around h-[400px]'>
          <div className='flex justify-around bg-slate-50 rounded-lg p-2'>
            <div className='basis-1/4'>
              <img className='h-12 w-12' src={avatar} alt= "avatar" />
            </div>
            <div className='basis-3/4 flex flex-col  font-roboto'>
              <h1 className='text-lg'>Jenny Wilson</h1>
              <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
            </div>
          </div>
          <div className='flex justify-around bg-slate-50 rounded-lg p-2'>
            <div className='basis-1/4'>
              <img className='h-12 w-12' src={avatar2} alt= "avatar" />
            </div>
            <div className='basis-3/4 flex flex-col  font-roboto'>
              <h1 className='text-lg'>Jenny Wilson</h1>
              <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
            </div>
          </div>
          <div className='flex justify-around bg-slate-50 rounded-lg p-2'>
            <div className='basis-1/4'>
              <img className='h-12 w-12' src={avatar3} alt= "avatar" />
            </div>
            <div className='basis-3/4 flex flex-col  font-roboto'>
              <h1 className='text-lg'>Jenny Wilson</h1>
              <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className='flex flex-col justify-around h-60'>
            <h1 className="text-black text-xl md:text-3xl font-bold font-poppins mb-3">Tropical Destinations<br /><span className='font-semibold font-poppins'> For Students</span></h1>
            <h1 className="text-black text-sm mb-3">Student Tropical Vacation: Relax and Recharge</h1>
            <ul className="text-black text-xs list-disc pl-4 mb-3">
              <li className='pb-1'>Lorem ipsum dolor sit amet Massa quis</li>
              <li className='pb-1'>natoque sit quam Eros non</li>
              <li className='pb-1'>pellentesque elit tortor id euismod</li>
              <li className='pb-1'>habitant Sed suspendisse id in ultrices</li>
            </ul>
            <div className='flex justify-start mt-3'>
              <button className=" pt-2 pb-2 pr-4 pl-4 text-xs text-white bg-orange-400 rounded-xl">EXPLORE MORE</button>
            </div>
          </div>
        </div>
      </div>
      {/* section-3 */}
      <Carousel />

      {/* section-4 */}
      <div className="grid md:grid-rows-1 grid-rows-2 grid-flow-col content-center justify-items-center gap-2 md:p-10 p-10">
        <div className="flex flex-col items-center justify-center order-2 md:order-1">
        <div className='flex flex-col justify-around h-60'>
            <p className='text-[12px]'>Get 20% off for student</p>
            <h1 className="text-black text-3xl font-bold font-poppins mb-3">Student discounts available.<br /><span className='font-normal font-poppins text-xl'>Get ready for some fun in the sun!</span></h1>
            <ul className="text-black text-xs list-disc pl-4 mb-3 font-poppins">
              <li className='pb-1'>Lorem ipsum dolor sit amet Massa quis</li>
              <li className='pb-1'>natoque sit quam Eros non</li>
              <li className='pb-1'>pellentesque elit tortor id euismod</li>
              <li className='pb-1'>habitant Sed suspendisse id in ultrices</li>
            </ul>
            <div className='flex justify-start mt-3'>
              <button className=" pt-2 pb-2 pr-4 pl-4 text-xs text-white bg-orange-400 rounded-xl">EXPLORE MORE</button>
            </div>
          </div>
          </div>
        <div className='card flex justify-center items-center md:p-4 order-1 md:order-2'>
          <img src={avatar1} alt="profile" className='h-100 w-60'/>
        </div>
      </div>

      {/* section-5 */}
      <div className="grid md:grid-rows-1 grid-rows-2 grid-flow-col content-center justify-items-center gap-2 md:p-20">
        <div className='card flex justify-center items-center p-4'>
          <img src={avatar2} alt="profile" className='md:h-[400px] md:w-[250px] w-[150px] h-[250px] shrink'/>
        </div>
        <div className="flex flex-col justify-around p-6 bg-slate-50 rounded-lg font-roboto">
          <h1 className='text-xl mb-1 font-bold'>Book now</h1>
          <p className='text-sm mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <div className="grid grid-rows-3  gap-2 mt-2 mb-2">
            <div className='flex flex-col col-span-4 mb-2'>
              <p className='text-xs'>CITY</p>
              <input type='text' placeholder='Placeholder' className='text-sm text-black bg-[#F3F3F3] p-2' />
            </div>
            <div className='flex flex-col col-span-2 mb-2'>
              <p className='text-xs mb-1'>ARRIVAL</p>
              <input type='text' placeholder='10 October' className='text-sm text-black bg-[#F3F3F3] p-2' />
            </div>
            <div className='flex flex-col col-span-2 mb-2'>
              <p className='text-xs mb-1'>STAR</p>
              <div className='flex justify-center text-black p-2 bg-[#F3F3F3]'>
                <div className='basis-3/12'><FaPlus /></div> 
                <div className='basis-6/12'><p className='text-xs text-center'>4</p></div> 
                <div className='basis-3/12'><FaMinus /></div> 
              </div>
            </div>
            <div className='flex flex-col col-span-2 mb-2'>
              <p className='text-xs mb-1'>DEPARTURE</p>
              <input type='text' placeholder='11 October' className='text-sm text-black bg-[#F3F3F3] p-2' />
            </div>
            <div className='flex flex-col col-span-2 mb-2'>
              <p className='text-xs mb-1'>ROOM</p>
              <div className='flex justify-center text-black p-2 bg-[#F3F3F3]'>
                <div className='basis-3/12'><FaPlus /></div> 
                <div className='basis-6/12'><p className='text-xs text-center'>1</p></div> 
                <div className='basis-3/12'><FaMinus /></div> 
              </div>
            </div>
          </div>
          <div className='flex justify-start mt-4'>
            <button className=" pt-2 pb-2 pr-4 pl-4 text-xs text-white bg-black rounded-sm">BOOK NOW</button>
          </div>
        </div>
      </div>

      {/* section-6 */}

      <div className="grid grid-rows-4 grid-flow-col gap-4 mb-10 md:p-10 content-center justify-items-center md:h-96">
        <div className="md:row-span-1 md:col-span-6 flex items-center">
          <h1 className='text-2xl font-bold'>Testimonials</h1>
        </div>
        <div className='md:row-span-3 md:col-span-2 bg-gray-50  md:p-5 flex flex-col items-center justify-around rounded-lg md:w-auto w-1/2 pl-4 pr-4 pt-6 pb-6'>
          <img src={testimonial1} alt="testimonial" className='h-10 w-10 pb-1'/>
          <p className='text-md divide-y-4 pb-2'>Sai Krishna</p>
          <p className='text-xs text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        </div>
        <div className='md:row-span-3 md:col-span-2 bg-gray-50 md:p-5 flex flex-col items-center justify-around rounded-lg md:w-auto w-1/2 pl-3 pr-3 pt-6 pb-6'>
          <img src={testimonial1} alt="testimonial" className='h-10 w-10 pb-1'/>
          <p className='text-md divide-y-4 pb-2'>Sai Krishna</p>
          <p className='text-xs text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        </div>
        <div className='md:row-span-3 md:col-span-2 bg-gray-50 md:p-5 flex flex-col items-center justify-around rounded-lg md:w-auto w-1/2 pl-3 pr-3 pt-6 pb-6'>
          <img src={testimonial1} alt="testimonial" className='h-10 w-10 pb-1'/>
          <p className='text-md divide-y-4 pb-2'>Sai Krishna</p>
          <p className='text-xs text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        </div>
      </div>
      {/* section-7 */}
      <div className='flex flex-col p-5 justify-around items-center text-center'>
        <h1 className='text:lg md:text-3xl p-3 w-[250px] md:w-[650px]'>Student Special: Discounted rates on tropical getaways!</h1>
        <p className='text-sm md:text-lg p-3 w-[200px] md:w-[450px]'>Let’s embody your beautiful ideas together, simplify the way you visualize your next big things.</p>
        <div className="grid grid-rows-3 grid-flow-col gap-1 p-5 md:grid-rows-1 content-center justify-items-center">
          <p className='text-xs p-2'>Privacy Policy</p>
          <p className='text-xs p-2'>Terms of Use</p>
          <p className='text-xs p-2'>Sales and Refunds</p>
          <p className='text-xs p-2'>Legal</p>
          <p className='text-xs p-2'>About</p>
          <p className='text-xs p-2'>Schedules</p>
          <p className='text-xs p-2'>Pricing</p>
          <p className='text-xs p-2'>Membership</p>
          <p className='text-xs p-2'>Joins</p>
        </div>
      </div>
    </div>
  )
}
