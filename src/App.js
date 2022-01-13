import { intro, menu, profile, exp, projects } from './texts'; // Relative path to your File
import { SocialIcon } from 'react-social-icons';import React from 'react';
import Navbar from './componants/navBar';
import profile_img from './images/profile.jpg';
import pin_loc from './images/placeholder.png';

function App() {
  const calculate_age = (dob1) => {
    console.log(dob1)
    var today = new Date();
    // var birthDate = new Date(dob1); 
    var dt1 = parseInt(dob1.substring(0, 2));
    var mon1 = parseInt(dob1.substring(3, 5));
    var yr1 = parseInt(dob1.substring(6, 10));
    var birthDate = new Date(yr1, mon1 - 1, dt1);
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    console.log(age_now);
    return age_now;
  }

  const Format_ab = (item) => {
    const filled_star = <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>;
    const empty_star = <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>;

    const num_stars = parseInt(item.score);
    switch (num_stars) {
      case 1: return (
        <div className=' transform grid grid-cols-2 mt-3 transition duration-500 hover:scale-105'>
          <span className='ml-16 opacity-80 '>{item.name}</span>
          <ul class="ml-24 flex justify-center ">
            <li >
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-main_green mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                {filled_star}
              </svg>
            </li>
            <li>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-main_green mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                {empty_star}
              </svg>
            </li>
            <li>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-main_green mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                {empty_star}
              </svg>
            </li>
            <li>
              <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-main_green mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                {empty_star}
              </svg>
            </li>
            <li>
              <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-main_green" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                {empty_star}
              </svg>
            </li>
          </ul>
        </div>
      );
      case 2:
        return (
          <div className=' transform grid grid-cols-2 mt-3 transition duration-500 hover:scale-105'>
            <span className='ml-16 opacity-80 '>{item.name}</span>
            <ul class="ml-24 flex justify-center">
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-main_green mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  {filled_star}
                </svg>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-main_green mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  {filled_star}
                </svg>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-main_green mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  {empty_star}
                </svg>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-main_green mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  {empty_star}
                </svg>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-main_green" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  {empty_star}
                </svg>
              </li>
            </ul>
          </div>
        );
      case 3:
        return (
          <div className=' transform grid grid-cols-2 mt-3 transition duration-500 hover:scale-105'>
            <span className='ml-16 opacity-80 '>{item.name}</span>
            <ul class="ml-24 flex justify-center ">
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-main_green mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  {filled_star}
                </svg>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-main_green mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  {filled_star}
                </svg>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-main_green mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  {filled_star}
                </svg>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-main_green mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  {empty_star}
                </svg>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-main_green" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  {empty_star}
                </svg>
              </li>
            </ul>
          </div>
        );
      case 4:
        return (
          <div className=' transform grid grid-cols-2 mt-3 transition duration-500 hover:scale-105'>
            <span className='ml-16 opacity-80 '>{item.name}</span>
            <ul class="ml-24 flex justify-center">
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-main_green mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  {filled_star}
                </svg>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-main_green mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  {filled_star}
                </svg>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-main_green mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  {filled_star}
                </svg>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-main_green mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  {filled_star}
                </svg>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-main_green" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  {empty_star}
                </svg>
              </li>
            </ul>
          </div>
        );
      case 5:
        return (
          <div className=' transform grid grid-cols-2 mt-3 transition duration-500 hover:scale-105'>
            <span className='ml-16 opacity-80  '>{item.name}</span>
            <ul class="ml-24 flex justify-center">
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-main_green mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  {filled_star}
                </svg>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-main_green mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  {filled_star}
                </svg>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-main_green mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  {filled_star}
                </svg>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-main_green mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  {filled_star}
                </svg>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-main_green" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  {filled_star}
                </svg>
              </li>
            </ul>
          </div>
        );
    }
  }

  const FormatEducation_Job = (item) => {
    return (
      <div className="grid grid-cols-2 gap-2 mt-16 ">
        <div >
          <h3 className=' font-semibold mb-5'> {item.inst_name} </h3>
          <span className=' opacity-80'>{item.starting_date} - {item.finish_date} </span>
        </div>
        <div className=' '>
          <h3 className=' font-bold mb-5'> {item.job_class_name} </h3>
          <p className='opacity-80'> {item.description} </p>
          <div className='flex flex-col lg:flex-row list-none col-span-2 mt-6' >
            <img src={pin_loc} className="w-5 h-5 " alt="" />
            <span className='ml-2 text-main_green  opacity-80'>
              {item.location}
            </span>
          </div>
        </div>
      </div>
    );
  }


  const Format_projects = (item) => {
    const l = item.image_link;
    console.log(l)
    const getImagePath = (image) => {
      return `./images/${image}.jpg`
    }
    return (
      <div className="relative mt-8  ">
        <a href={item.link} className="absolute inset-0 z-10 h-56 w-5/6 bg-main_green bg-opacity-60 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100  ">
          <h1 className="tracking-wider text-xl mb-5" >{item.title} </h1>
          <p className="mx-auto">{item.description}</p>
        </a>
        <a className="relative">
          <div className=" flex flex-wrap content-center">
            <img src={require(`${item.image_link}`).default} className="object-cover h-56 w-5/6" alt="" />
          </div>
        </a>
      </div>
    );
  }



  return (
    <div className="bg-background  text-white">
      {/* <Navbar /> */}
      <Navbar />

      {/* First row INTRODUCTION */}
      <div id="intro" className=" flex h-screen ">
        <div className="m-auto w-full max-w-5xl  ">
          <h1 className=" text-main_green  text-left pb-3 ">Hi, my name is </h1>
          <h2 className="text-4xl text-white font-bold pb-3 px-8 text-opacity-90 ">{intro.name}</h2>
          <h3 className="text-3xl text-white font-bold text-opacity-50 pb-3 ">{intro.under_name}</h3>
          <div className='text-white w-3/4  '>
            <p>
              {intro.intro_text}
            </p>
          </div>
        </div>
      </div>

      <div className=" w-full max-w-5xl m-auto .h-screen flex flex-col space-y-5 ">
        {/* 2nd row ABOUT ME */}
        <div id="about" className=" mb-32">
          <div className='text-white  flex flex-col lg:flex-row list-none text-xl'>
            <span className="ml-2 text-main_green mr-2 ">01. </span>
            <h1 className=' text-2xl tracking-wider mb-8 opacity-70 hover:opacity-100'> {menu.it1}</h1>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-5 ">
            {/* 1st col */}
            <div className="">
              <h2 className='text-main_green text-2xl mb-3'>About Me</h2>
              <p className='opacity-50'> {profile.text} </p>
            </div>

            {/* 2nd col */}
            <div className="mb-4 ">
              <img src={profile_img} className=" max-w-full max-h-full min-h-full min-w-full rounded-full border-4 border-green-300 p-2" alt="" />
            </div>

            {/* 3rd col */}
            <div className="ml-4 ">
              <h2 className='text-main_green text-2xl mb-3'>Details</h2>
              <ul className=' opacity-50'>
                <li className=' mt-6'> <span className='font-bold text-lg'> Name:  </span><br /> <span> {profile.name} </span> </li>
                <li className=' mt-6' > <span className='font-bold text-lg'> Age:  </span><br /> <span className=''> {calculate_age(profile.age)} years </span></li>
                <li className=' mt-6'> <span className='font-bold text-lg'> Location:  </span><br /> <span className=''> {profile.location} </span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3rd row EDUCATION & WORK */}
        <div id="exp" className=" mb-36">
          <div className='text-white flex flex-col lg:flex-row list-none pb-2 text-xl '>
            <span className="ml-2 text-main_green mr-2 ">02. </span>
            <h1 className=' text-2xl tracking-wider mb-8 opacity-70 hover:opacity-100'> {menu.it2}</h1>
          </div>

          <div className=" mt-5 ">
            {/* 1st row */}
            <div >
              <h2 className=' text-main_green text-2xl tracking-widest text-center'>Education</h2>
              <div className=" ml-16 ">
                {exp.education.map((item) => {
                  return (FormatEducation_Job(item));
                })}

              </div>
            </div>

            {/* 2nd row */}
            <div className='mt-5 border-t-2 border-main_green border-opacity-20 '>
              <h2 className=' mt-8 text-main_green text-2xl tracking-widest text-center'>Work</h2>
              <div className="  ml-16 ">
                {exp.work.map((item) => {
                  return (FormatEducation_Job(item));
                })}
              </div>
            </div>

            {/* 3rd row */}
            <div className='mt-5 border-t-2 border-main_green border-opacity-20'>
              <h2 className=' mt-8 text-main_green text-2xl tracking-widest text-center'>Abilities</h2>
              <h3 className=' mt-8  text-2xl tracking-widest'>Skills</h3>
              <div className="mt-8 ml-4 grid grid-flow-row grid-cols-2 ">
                {exp.skills.map((item) => {
                  return (Format_ab(item));
                })}
              </div>

              <h3 className=' mt-8  text-2xl tracking-widest border-t-2 border-main_green border-opacity-20 pt-8'>Languages</h3>
              <div className="ml-4 mt-8 grid grid-flow-row grid-cols-2 ">
                {exp.languages.map((item) => {
                  return (Format_ab(item));
                })}
              </div>

              <h3 className=' mt-8  text-2xl tracking-widest border-t-2 border-main_green border-opacity-20 pt-8'>Tools</h3>
              <div className="ml-4 mt-8 grid grid-flow-row grid-cols-2 ">
                {exp.tools.map((item) => {
                  return (Format_ab(item));
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 4th row PROJECTS */}
        <div id="projects" className="border-t-2 border-main_green border-opacity-50 ">

          <div className='text-white flex flex-col lg:flex-row list-none pb-2 text-xl mt-28'>
            <span className="ml-2 text-main_green mr-2 ">03. </span>
            <h1 className=' text-2xl tracking-wider mb-8 opacity-70 hover:opacity-100'> {menu.it3}</h1>
          </div>

          <div className='grid grid-cols-2 grid-flow-row max-w-4xl m-auto pb-12'>
            {projects.projects.map((item) => {
              return (Format_projects(item));
            })}

          </div>
        </div>

        {/* 5th row CONTACT */}
        <div id="contact" className="border-t-2 border-main_green border-opacity-50">


          <div className='pb-2 items-center mt-16 text-center  max-w-xl m-auto '>
            <p className='leading-normal'> <h1 className=' text-2xl text-main_green tracking-wider mb-8'> 04. {menu.it4symb}</h1></p>

            <h1 className=' text-5xl  mb-3 font-bold opacity-70 '> Get In Touch </h1>
            <p>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!  </p>
            <a class="mailto" href="mailto:contact@test.com">
              <button className='mt-8 border-2 border-main_green text-main_green rounded-md px-10 py-5 hover:bg-main_green hover:bg-opacity-20' trailingIcon="picture_as_pdf" label="Resume">
                Say Hello
              </button>
            </a>
            <div className='mt-5'> 
            <SocialIcon className='mr-5' url="https://www.linkedin.com/in/karim-khadro-8841461ba/" target="_blank" />
            <SocialIcon url="https://github.com/Karim-khadro/" target="_blank"/>
            </div>
          </div>
        </div>

      </div>
      <footer className=' text-center opacity-60 mt-32 pb-5 max-w-2xl m-auto'>Build & des by me <br /> 2021</footer>
    </div >
  );
}

export default App;
