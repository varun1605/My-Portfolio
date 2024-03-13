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
      <p>This is the section to write a intro about me including my work ex, projects, my hobbies and my skils</p>
    </div>
      
    </div>
  );
};
export default Body;
