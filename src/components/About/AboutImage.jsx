import imgAbout from "../../assets/about.jpg";

const AboutImage = () => {
  return (
    <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0 px-5">
      <img src={imgAbout} alt="aboutUs" className="rounded-lg max-w-full
       outline-8 outline-offset-8 outline outline-gray-300 duration-700 linear hover:-translate-y-3 hover:translate-x-3
       hover:outline-gray-400"/>
    </div>
  );
};

export default AboutImage;
