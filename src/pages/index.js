import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { StaticImage } from "gatsby-plugin-image"


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
    <h2>Project: Managing Windows Services and Print Spooler</h2>
  <p>
    In this section, I'll walk you through my journey of creating a PowerShell script to manage Windows services and address print spooler challenges. This project provided an opportunity to deepen my PowerShell skills and learn more about service management and file manipulation.
  </p>
  <h3>Learning and Progression</h3>
  <p>
    I started by familiarizing myself with the <code>Get-Service</code> cmdlet and its capabilities to retrieve information about Windows services. I learned about filtering services based on their status and selected only running services using the <code>Where-Object</code> cmdlet.
  </p>
  <p>
    My progression continued with the creation of an HTML file to display the list of running services. I utilized the <code>ConvertTo-Html</code> cmdlet to format the service details and wrote the HTML content to a file named based on the current date.
  </p>
  <p>
    Next, I explored JSON formatting using the <code>ConvertTo-Json</code> cmdlet. I extracted essential details from the running services and stored them in a JSON file for further analysis and usage.
  </p>
  <p>
    To maintain a clean storage space, I developed code to remove files older than 30 days from the designated folders using the <code>Get-ChildItem</code> and <code>Remove-Item</code> cmdlets.
  </p>
  <p>
    With a foundational understanding of managing services, I created a script that checked for files created today in the services and details folders. If the required files were not found, an error message would be displayed.
  </p>
  <p>
    Finally, I tackled the challenge of automating the restart of the print spooler service when old print jobs were detected in the spooler folder. I incorporated parameters to adjust the maximum age of files to be considered old.
  </p>
  <h3>Code Snippets</h3>
  <div class="code-section">
    <div class="code-image">
      <StaticImage
        src="../images/code-export-services.png"
        alt="Exporting Services to Files"
        
      />
    </div>
    <div class="code-text">
      <p>Script to Export Services to Files:</p>
{/*<pre><code> Place your PowerShell script here </code></pre>*/}
    </div>
  </div>

  <div class="code-section">
    <div class="code-image">
      <StaticImage
        src="../images/code-restart-spooler.png"
        alt="Checking Old Spool Files and Restarting Print Spooler"
      />
    </div>
    <div class="code-text">
      <p>Script to Check Old Spool Files and Restart Print Spooler:</p>
{/*<pre><code> Place your PowerShell script here </code></pre>*/}
    </div>
  </div>
  <p>
    Through this project, I deepened my understanding of Windows services, file manipulation, and parameterized scripts. The journey helped me enhance my PowerShell skills and build practical solutions to real-world challenges.
  </p>
</section>

    <section id="contact">
      <h2>Contact Me</h2>
      <p>
        If you're interested in connecting, collaborating, or learning more about my PowerShell journey, feel free to get in touch! www.linkedin.com/in/connor-simons
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
