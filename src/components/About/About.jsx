import { useEffect } from "react";
import Header from "../Header/Header";
import "./About.css"

const About = (props) => {
  useEffect(() => {
    document.title = "About - Pixcel is a free stock image platform";
  }, [])

  return (
    <>
      <Header company={props.company} />
      <div className="container">
        <div className="about-content">
          <h1>About Pixcel</h1>
          <p>Welcome to Pixcel, your open-source destination for high-quality stock images! Whether you're a designer, developer, content creator, or just someone in need of beautiful visuals, Pixcel provides a vast collection of stunning images to meet all your needs.</p>

          <h2>What is Pixcel?</h2>
          <p>Pixcel is a React JS-based web application that leverages the Unsplash API to offer a seamless experience for browsing and downloading top-notch stock images. With Pixcel, you can easily search for any kind of image, explore popular categories, and download them in high resolution, all in just a click.</p>

          <h2>Why Pixcel?</h2>
          <p>In the ever-growing world of digital content, having access to high-quality visuals is essential. Pixcel was created to provide an easy-to-use, efficient, and open-source platform where users can find exactly the images they need without any hassle. We believe in the power of open-source development and community collaboration, which is why Pixcel is fully open-source. You can check out the source code on <a href="https://github.com/tapaskumardash/pixcel">GitHub</a>, contribute to the project, or even use it as a foundation for your own projects.</p>

          <h2>Key Features:</h2>
          <ul>
            <li><b>High-Quality Images:</b> Access a wide range of images in stunning resolution, perfect for any project.</li>
            <li><b>Powerful Search:</b> Find exactly what you're looking for with our robust search functionality powered by the Unsplash API.</li>
            <li><b>Open-Source:</b> Pixcel is entirely open-source, encouraging developers and creators to contribute, customize, and expand its capabilities.</li>
            <li><b>User-Friendly:</b> Built with React JS, Pixcel offers a smooth and responsive user experience.</li>
          </ul>

          <h2>Join the Community</h2>
          <p>We're excited to see how you use Pixcel and what you build with it! Whether you're downloading images or contributing to the project, you're a part of our growing community. Check out the <a href="https://github.com/tapaskumardash/pixcel">GitHub repository</a> to explore the source code, report issues, or contribute your own improvements.</p>
        </div>
      </div>
    </>
  )
}

export default About;
