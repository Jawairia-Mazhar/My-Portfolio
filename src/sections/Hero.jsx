const Hero = () => {
  return (
    <section className="flex justify-between mr-35 ml-20" id="hero">
        <div className="text-sm leading-10  mt-25">
        <h1 className="text-2xl mb-6 mt-6 font-semibold">Hi I'm Jawairia Mazhar</h1>
        <p className="indent-4 leading-7 text-wrap max-w-4xl text-base tracking-wide">
          A Computer Science student and aspiring web developer. I love creating
          interactive web experiences using JavaScript, React, and Tailwind CSS.
          I learn by building projects, exploring UI/UX, and constantly
          improving my skills. My goal is to craft websites that are not just
          functional, but also engaging and user-friendly.
        </p> 
        </div>
        <img className="w-120 h-120 mt-15" src="\src\assets\hijab_logo.png" alt="Cover image" />
      </section>
  );
}
export default Hero;