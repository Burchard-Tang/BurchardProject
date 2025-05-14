import cat from "./images/Cat.jpeg";

const Contact = () => {
  return (
    <>
      <h1>Contact Me</h1>
      <img src={cat} style={{ width: "50%", height: "50%" }}/>
      <p>I am the cat</p>
    </>
  )
};

export default Contact;