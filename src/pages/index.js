import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <section id="home">
      <header>
        <h1>My PowerShell Journey</h1>
      </header>
    </section>
   <section id="about-me">
      <h2>About Me</h2>
      <p>
        Hello, I am Connor Simons. When I'm not diving into the world of PowerShell, you'll often find me immersed in the world of games, both on-screen and with my trusty RC cars. I also have a deep appreciation for the great outdoors, and you can often catch me exploring the breathtaking landscapes of the Pacific Northwest through hiking.
      </p>
    </section>
    <section id="learning-method">
      <h2>My Learning Method</h2>
      <p>
        In my journey of mastering PowerShell, I've adopted a systematic learning approach. I believe in continuous learning, and I've been using a combination of online tutorials, video courses, and interactive platforms to enhance my PowerShell skills.
      </p>
      <p>
        Some of the resources I've found particularly helpful include:
      </p>
      <ul>
        <li>
          <strong>Online Tutorials:</strong> Websites like PowerShell.org and Microsoft Learn offer comprehensive tutorials and guides for beginners and advanced users.
        </li>
        <li>
          <strong>Video Courses:</strong> Platforms like Pluralsight and Udemy provide in-depth video courses on PowerShell scripting and automation.
        </li>
        <li>
          <strong>Interactive Labs:</strong> I've taken advantage of platforms like Try PowerShell to practice my skills in a real-world environment.
        </li>
      </ul>
      <p>
        This diverse approach has allowed me to grasp PowerShell concepts effectively and apply them to real-world scenarios.
      </p>
    </section>
    <section id="challenge-labs">
      <h2>Challenge Labs</h2>
      <p>
        As part of my learning journey, I've completed various challenge labs from our PowerShell course. These labs have been instrumental in applying theoretical knowledge to practical tasks. Let's explore some of these challenge labs and see how I approached and solved the challenges.
      </p>
      {/* Add details about each challenge lab */}
    </section>
    <section id="my-projects">
      <h2>My Projects</h2>
      <p>
        In addition to coursework, I've embarked on some exciting PowerShell projects to further enhance my skills. These projects showcase my creativity and ability to develop automation solutions using PowerShell.
      </p>
      {/* Add details about each project */}
    </section>
    <section id="contact">
      <h2>Contact Me</h2>
      <p>
        If you're interested in connecting, collaborating, or learning more about my PowerShell journey, feel free to get in touch!
      </p>
      {/* Add contact information */}
    </section>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Contents" />

export default IndexPage
