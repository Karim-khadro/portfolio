import { intro, menu, profile, exp, projects, sections, contact, footer } from './texts';
import { SocialIcon } from 'react-social-icons'; import React from 'react';
import Navbar from './componants/navBar';
import pin_loc from './images/placeholder.png';
import { useState, useEffect } from 'react';


export default function MainPage() {

  const [age, setAge] = useState("");

  //  Age calculator by birth date
  const calculate_age = (dob1) => {
    var today = new Date();
    var dt1 = parseInt(dob1.substring(0, 2));
    var mon1 = parseInt(dob1.substring(3, 5));
    var yr1 = parseInt(dob1.substring(6, 10));
    var birthDate = new Date(yr1, mon1 - 1, dt1);
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    setAge(age_now);
  }

  // Add the stars to the abelities
  const Format_ab = (item) => {
    const filled_star = <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>;
    const empty_star = <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>;

    // Creating the stars list (empty & full stars)
    const num_stars = parseInt(item.score);
    var stars = [];
    for (var i = 0; i < 5; i++) {
      if (i < num_stars) {
        stars[i] = <li > <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-main_green mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">{filled_star}</svg></li>
      }
      else {
        stars[i] = <li> <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-main_green mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">{empty_star}</svg></li>
      }
    }

    return (
      <div className=' transform grid grid-cols-2 mt-3 transition duration-500 hover:scale-105'>
        <span className='ml-16 opacity-80 '>{item.name}</span>
        <ul class="ml-24 flex justify-center ">
          {stars}
        </ul>
      </div>
    );

  }

  // Create the edicuation & jobs style
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

  // Create the style for the projects
  const Format_projects = (item) => {
    var text;
    if (item.link !== "") {
      text = <a href={item.link} target="_blank" className={`absolute inset-0 z-10 h-full w-5/6 bg-main_green bg-opacity-60 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 ${item.font_color} `}>
        <h1 className="tracking-wider text-xl mb-5" >{item.title} </h1>
        <p className="mx-auto text-lg pl-1 pr-1">{item.description}</p>
      </a>
    }
    else {
      text = <div className={`absolute inset-0 z-10 h-full w-5/6 bg-main_green bg-opacity-60 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100  ${item.font_color} `}>
        <h1 className="tracking-wider text-xl mb-5" >{item.title} </h1>
        <p className="mx-auto text-lg pl-1 pr-1">{item.description}</p>
      </div>
    }
    return (
      <div className="relative mt-8  ">
        {text}
        <a className="relative" target="_blank" >
          <div className=" flex flex-wrap content-center">
            <img src={item.image_link} className="object-cover h-96 w-5/6" alt="" />
          </div>
        </a>
      </div>
    );
  }

  // Direct to profile page if the user wants to add more info in about me
  const check_knowMore = (profile) => {
    if (profile.know_more)
      return (
        <button className=' text-main_green text-lg  opacity-100' onClick={event => window.location.href = '/profile'}>Know more...</button>
      )
  }

  useEffect(() => {
    calculate_age(profile.birth_date)
  });

  return (
    <div className="bg-background text-white">

      <Navbar />

      {/* INTRODUCTION */}
      <div id="intro" className=" flex h-screen ">
        <div className="m-auto w-full max-w-5xl pb-32  ">
          <div className='text-white  flex flex-col lg:flex-row list-none max-w-2xl m-auto'>
            <span className=" text-7xl  font-extrabold tracking-wide font-serif text-main_green">{intro.name} </span>
            <h1 className=" text-7xl text-white font-extrabold tracking-wide max-w-2xl m-auto font-serif"> {intro.surname}</h1>
          </div>
          <h2 className="text-3xl text-white font-bold text-opacity-50 pb-24 pt-8 max-w-2xl m-auto font-mono">{intro.under_name}</h2>
          <div className='text-white w-3/4  '>
            <p>
              {intro.intro_text}
            </p>
          </div>
        </div>
      </div>

      <div className=" w-full max-w-5xl m-auto .h-screen flex flex-col space-y-5 ">
        {/* PROFILE */}
        <div id="about" className=" mb-32">
          <div className='text-white  flex flex-col lg:flex-row list-none text-xl'>
            <span className="ml-2 text-main_green mr-2 font-mono">01. </span>
            <h1 className=' text-2xl font-bold tracking-wide mb-8 opacity-70 hover:opacity-100'> {sections.s1 ? sections.s1 : menu.it1}</h1>
            <div class=" bg bg-gray-300 h-0.5 mt-4 ml-2 w-1/3 opacity-20" />
          </div>

          <div className="grid grid-cols-3 gap-4 mt-5 ">
            {/* ABOUT ME */}
            <div >
              <h2 className='text-main_green text-2xl mb-3 font-mono'>About Me</h2>
              <p className='opacity-70'> {profile.text} </p>
              {check_knowMore(profile)}
            </div>

            {/* Profile IMG */}
            <div className="mb-4 ">
              <img src={profile.profileImg_URL} className=" max-w-5/6 max-h-5/6l min-h-5/6 min-w-5/6 rounded-full border-4 border-green-300 p-2" alt="" />
            </div>

            {/* DETAILS */}
            <div className="ml-4 ">
              <h2 className='text-main_green text-2xl mb-3 font-mono'>Details</h2>
              <ul className=''>
                <li className=' mt-6'> <span className='font-bold text-lg  opacity-50'> Name:  </span><br /> <span className='font-MyFont'> {profile.name} </span> </li>
                <li className=' mt-6' > <span className='font-bold text-lg  opacity-50'> Age:  </span><br /> <span className='font-MyFont'> {age} years </span></li>
                <li className=' mt-6'> <span className='font-bold text-lg  opacity-50'> Location:  </span><br /> <span className='font-MyFont'> {profile.location} </span></li>
              </ul>
            </div>
          </div>
        </div>

        {/*EDUCATION & WORK */}
        <div id="exp" className=" mb-36">
          <div className='text-white flex flex-col lg:flex-row list-none pb-2 text-xl '>
            <span className="ml-2 text-main_green mr-2 font-mono">02. </span>
            <h1 className=' text-2xl tracking-wide font-bold mb-8 opacity-70 hover:opacity-100'> {sections.s2 ? sections.s2 : menu.it2}</h1>
            <div class=" bg bg-gray-300 h-0.5 mt-4 ml-2 w-1/3 opacity-20" />
          </div>

          <div className=" mt-5 ">
            {/* EDUCATION */}
            <div >
              <h2 className=' text-main_green text-2xl  text-center font-mono'>Education</h2>
              <div className=" ml-16 ">
                {exp.education.map((item) => {
                  return (FormatEducation_Job(item));
                })}

              </div>
            </div>

            {/* WORK*/}
            <div className='mt-5 border-t-2 border-main_green border-opacity-20 '>
              <h2 className=' mt-8 text-main_green text-2xl  text-center font-mono'>Work</h2>
              <div className="  ml-16 ">
                {exp.work.map((item) => {
                  return (FormatEducation_Job(item));
                })}
              </div>
            </div>

            {/* ABILITIES */}
            <div className='mt-5 border-t-2 border-main_green border-opacity-20'>
              <h2 className=' mt-8 text-main_green text-2xl  text-center font-mono'>Abilities</h2>

              {/* SKILLS */}
              <h3 className=' mt-8  text-2xl '>Skills</h3>
              <div className="mt-8 ml-4 grid grid-flow-row grid-cols-2 ">
                {exp.skills.map((item) => {
                  return (Format_ab(item));
                })}
              </div>

              {/* LANGUAGES */}
              <h3 className=' mt-8  text-2xl  border-t-2 border-main_green border-opacity-20 pt-8'>Languages</h3>
              <div className="ml-4 mt-8 grid grid-flow-row grid-cols-2 ">
                {exp.languages.map((item) => {
                  return (Format_ab(item));
                })}
              </div>

              {/* TOOLS */}
              <h3 className=' mt-8  text-2xl  border-t-2 border-main_green border-opacity-20 pt-8'>Tools</h3>
              <div className="ml-4 mt-8 grid grid-flow-row grid-cols-2 ">
                {exp.tools.map((item) => {
                  return (Format_ab(item));
                })}
              </div>
            </div>
          </div>
        </div>

        {/* PROJECTS */}
        <div id="projects" className="">
          <div className='text-white flex flex-col lg:flex-row list-none pb-2 text-xl mt-28'>
            <span className="ml-2 text-main_green mr-2 font-mono">03. </span>
            <h1 className=' text-2xl tracking-wide mb-8 opacity-70 hover:opacity-100 font-bold '> {sections.s3 ? sections.s3 : menu.it3}</h1>
            <div class=" bg bg-gray-300 h-0.5 mt-4 ml-2 w-1/3 opacity-20" />
          </div>

          <div className='grid grid-cols-2 grid-flow-row max-w-4xl m-auto pb-12'>
            {projects.projects.map((item) => {
              return (Format_projects(item));
            })}

          </div>
        </div>

        {/* CONTACT */}
        <div id="contact" className="border-t-2 border-main_green border-opacity-50">
          <div className='pb-2 items-center mt-16 text-center  max-w-xl m-auto '>
            <h1 className='leading-normal text-2xl text-main_green tracking-wider mb-8 font-mono'> 04. {sections.s4 ? sections.s4 : menu.it4}</h1>
            <h1 className=' text-5xl  mb-5 font-bold opacity-70 '> {contact.main_phrase} </h1>
            <p>{contact.text}</p>
            <a class="mailto" href={`mailto:${contact.email}`}>
              <button className='mt-8 border-2 border-main_green text-main_green rounded-md px-10 py-5 hover:bg-main_green hover:bg-opacity-20' trailingIcon="picture_as_pdf" label="Resume">
                Email Me
              </button>
            </a>
            <div class="flex items-center mt-5">
              <div class="flex-grow bg bg-gray-300 h-0.5"></div>
              <div class="flex-grow-0 mx-5 text dark:text-white">or</div>
              <div class="flex-grow bg bg-gray-300 h-0.5"></div>
            </div>
            {/* Social media buttons */}
            <div className='mt-5'>
              <SocialIcon className='mr-5 hover:scale-105' url={contact.linkedin} target="_blank" />
              <SocialIcon className='hover:scale-105' url={contact.github} target="_blank" />
            </div>
          </div>
        </div>

      </div>

      {/* FOOTER */}
      <footer className='pb-8 text-center mt-32 max-w-2xl m-auto font-mono text-main_green'>{footer.text} <br /> </footer>
    </div >
  );

}

