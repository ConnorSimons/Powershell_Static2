import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <header>
      <h1>My PowerShell Learning Journey</h1>
    </header>
    <section id="about-me">
      <h2>About Me</h2>
      <p>
        Hello, I am Connor Simons. When I'm not diving into the world of PowerShell, you'll often find me immersed in the world of games, both on-screen and with my trusty RC cars. I also have a deep appreciation for the great outdoors, and you can often catch me exploring the breathtaking landscapes of the Pacific Northwest through hiking.
      </p>
    </section>
    <section id="overview">
      <h2>Overview</h2>
      <p>
        Welcome to my PowerShell learning journey! In this blog, I'll share my experiences and insights as I delve into the world of PowerShell scripting.
      </p>
      <p>
        We'll cover key topics including:
      </p>
      <ul>
        <li>
          <strong>PowerShell Help System:</strong> Mastering the built-in help system to quickly access documentation and learn about cmdlets and their usage.
        </li>
        <li>
          <strong>Functions:</strong> Creating and utilizing functions to modularize your code, enhance reusability, and streamline your PowerShell scripts.
        </li>
        <li>
          <strong>PowerShell Remoting:</strong> Harnessing the power of remoting to manage and control remote machines, execute commands, and retrieve information.
        </li>
      </ul>
      <p>
        Whether you're a beginner or an experienced IT professional, this blog will guide you through essential PowerShell concepts and techniques. Let's dive in and discover the capabilities of PowerShell together!
      </p>
    </section>
    <section id="help-system">
      <h2>Exploring the Help System</h2>
      <p>
        One of the essential aspects of PowerShell is its extensive help system,
        which provides detailed information about commands and concepts.
        Let's dive into some basics of using the help system.
      </p>
      {/* Rest of the Help System content */}
    </section>
    <section id="functions">
      <h2>Mastering Functions</h2>
      <p>
        Functions are like mini-programs within PowerShell that allow you to create reusable blocks of code.
        They're like building blocks that you can use over and over again in your scripts.
        Let's explore how functions work by looking at their structure and how you can use them.
      </p>
      {/* Rest of the Functions content */}
    </section>
    <section id="powershell-remoting">
      <h2>PowerShell Remoting</h2>
      <p>
        PowerShell Remoting is a powerful feature that allows you to execute commands on remote computers.
        It's like having the ability to control other machines from the comfort of your own computer.
        Let's explore how PowerShell Remoting works and how you can use it.
      </p>
      {/* Rest of the PowerShell Remoting content */}
    </section>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
