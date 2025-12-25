const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-10" id="hero">
        <img className="w-70 h-70 mt-5 md:w-120 md:h-120 mx-auto object-contain md:mx-0 mb-8 md:mb-0" src="\src\assets\hijab_logo.png" alt="Cover image" />

        <div className="text-xs md:text-sm md:leading-10  md:mt-25">
          <h1 className="text-xl md:text-5xl mb-4 font-semibold">Hi I'm Jawairia Mazhar</h1>
          <p className="p-1 indent-4 md:leading-7 text-wrap md:max-w-4xl text-base tracking-wide">
          A Computer Science student and aspiring web developer. I love creating
          interactive web experiences using JavaScript, React, and Tailwind CSS.
          I learn by building projects, exploring UI/UX, and constantly
          improving my skills. My goal is to craft websites that are not just
          functional, but also engaging and user-friendly.
          </p> 
        </div>
      </section>
  );
}
export default Hero;