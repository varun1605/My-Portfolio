import nobg from "./utils/nobg.png";
const Body = () => {
  return (
    // <div className="body-class">
    //   <div className="body-image">
    //     <img src={nobg} className="image-class"></img>
    //   </div>
    //   <div className="about-me-class">
    //     <h2>About me</h2>
    //     <p>
    //       Hi there, my name is Varun Mangrulkar. I am a software developer
    //       working in an MNC. Here I am going to share my experience and , you
    //       will be abel to know about my skills and knowledge.{" "}
    //     </p>{" "}
    //   </div>
    // </div>
    <div className="body-div ">
      <img src={nobg} alt="myImage"></img>
      <div className="about-me-div">
        <h1>About Varun</h1>
        <p>
          Varun Mangrulkar is a seasoned software developer with two years of
          professional experience, currently excelling in frontend development
          at Infosys, a prestigious MNC. His expertise lies in crafting
          cutting-edge web solutions using React.js, Node.js, and other modern
          technologies. Passionate about continuous learning, Varun is actively
          exploring AWS and DevOps to further enhance his technical prowess.
          Beyond his technical endeavors, Varun is a dedicated fitness
          enthusiast, regularly hitting the gym to maintain peak physical
          condition. His love for nature extends to wildlife photography, where
          he captures the beauty of the natural world through his lens.{" "}
        </p>
      </div>
    </div>
  );
};
export default Body;
