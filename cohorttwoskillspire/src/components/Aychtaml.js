import React, { Component } from 'react'
import puppy from "../assets/200_d.gif";

export default class Aychtaml extends Component {
    render() {
        return <div>
            <h1>Week 1</h1>
            <break />
            <h2>Setup</h2>
            <ul>
              <li>
                Create an account in <a href="https://github.com/">
                  Github
                </a>
              </li>
              <li>
                Create an account in <a href="https://skillspiretukwila.slack.com/">
                  Slack
                </a>
              </li>
              <li>
                Create an account in <a href="https://canvas.instructure.com/">
                  Canvas
                </a>
              </li>
            </ul>
            <p>
              It is okay to Bing/Google everything, however what you
              should really do is try your hardest first and then if you
              for sure can't figure it out, then go ahead and look it
              up, knowing what to look up and how to look something up
              is a skill
            </p>
            <p>
              Always work as a team, someone may know, all of you may
              not. Feel free to ask questions. Not only to each other,
              but online and ask me.
            </p>
            <p>
              This is hard. Acheivable but hard. Some of it will boggle
              your mind and fry your brain but continue to build and
              then work towards understanding why the code works/reacts
              a certain way
            </p>
            <break />
            <h2>What is the terminal?</h2>
            <p>
              The terminal allows you to talk to the OS (operating
              system) without using the GUI (graphic user interface),
              this makes it significantly faster to move around in
            </p>
            <ul>
              <li>ls - list items</li>
              <li>cd - change directory</li>
              <li>pwd - present working directory</li>
              <li>.. - parent directory (one move up the file tree)</li>
              <li>mkdir - create a folder</li>
              <li>touch - create a file</li>
              <li>/ - root directory</li>
              <li>~ - home directory</li>
              <li>rm - delete file</li>
              <li>rm -rf - delete folder</li>
              <li>mv - move/rename file or folder</li>
            </ul>
            <h3>Organizing files</h3>
            <p>
              Create a folder named "repositories" on your desktop. cd
              to your desktop/[mkdir repositories]/inside that folder
              [mkdir week1]/[touch week1.html]
            </p>
            <h3>HTML</h3>
            <p>
              HTML or Hypertext Markup language is what structures your
              pages, think of this like the body, HTML is your bones -
              it gives us a base to work out of, then we will need to
              add some other parts to make the whole human
            </p>
            <p>
              html tags tell us what is inside the element, this was
              built with a p tag which makes the assumption that there
              is a paragraph between the two tags
            </p>
            <h2>Tag you're it!</h2>
            There are over 300 tags, we won't use them all
            <ul>h1, h2, h3, h4, h5, h6</ul>
            <p>
              these are called headings, it doesn't rank things in order
              of importance but will recognize them as such
            </p>
            <h4>p tags</h4>
            <p>
              paragraph, take a block of text, or paragraph and fit them
              snug in between the p tags, some things can go in p tags
              that are related to text
            </p>
            <ul> a or anchor tag</ul>
            <p>
              anchor tags are used to create links, link it to a URL or
              another one of your pages
            </p>
            <h4>div</h4>
            <p>
              div will create a box for you, we can use css or inline
              styling to create these tags
            </p>
            <h4>lists</h4>
            <p>
              {" "}
              ol, ul, li all represent types of lists, ordered lists and unordered lists are parents and the internals are li or lists Ordered List -->
              <ol>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ol>
            </p>
            <h4>img tags</h4>
            <p>
              {" "}
              img tags allow you do manipulate pictures or just add them to a page, they can be modified with attributes, we will be looking deeper at attributes here in a bit
              <br />
              <a href="https://www.codecademy.com/learn/learn-html">
                <img src={puppy} alt={"Puppy"} className="img-responsive" />
              </a>
            </p>
            <h4>tables and rows</h4>
            <table>
              <caption>Albums sold</caption>
              <thead>
                <tr>
                  <th>Artist Name</th>
                  <th>Album Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Jay - Z</td>
                  <td>the black album</td>
                </tr>
                <tr>
                  <td>Tupac</td>
                  <td>all eyez on me</td>
                </tr>
              </tbody>
            </table>
            <h4>Forms!!!!!!</h4>
            <form>
              <label>Enter your name: </label>
              <input type="text" id="users-name" maxlength="30" required />
              <label>Enter your password: </label>
              <input type="password" id="users-password" maxlength="50" />
              <button type="submit">enter</button>
              <p>Enter a status:</p>
              <textarea id="status" cols="30" rows="5" />
              <p>What is your favorite food?</p>
              <input type="radio" name="food" value="donuts" />Donuts
              <input type="radio" name="food" value="lasagna" />Lasagna
              <input type="radio" name="food" value="pizza" /> Pizza
              <p>Select all your current skills.</p>
              <input type="checkbox" value="js" />JavaScript
              <input type="checkbox" value="css" />CSS
              <input type="checkbox" value="html" />HTML
              <p>What rapper is the greatest?</p>
              <select>
                <option>lil yachty</option>
                <option>lil pump</option>
                <option>soundcloud</option>
              </select>
            </form>
            <h3>Video</h3>
            <video controls>
            <source src="https://youtu.be/BMUiFMZr7vk" type="video/mp4" />
            </video>
            <br/>
            <iframe title="funfunfunction" width="560" height="315" src="https://www.youtube.com/embed/BMUiFMZr7vk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen />
            <break></break>
            <h3>Comments</h3>
            <p>
              comment lines out with, comments are useful when you need
              to explain what/why you are doing in the code{" "}
            </p>
            <h3>Attributes</h3>
            <p>
              with some tags there are the ability to put attributes,
              for tags such as an input we can also add attributes that
              will allow different features by using type and value{" "}
            </p>
            <li>Classes</li>
            <p>
              classes are useful by allowing the tag to be found by CSS
              and javascript, you can modify and create actions that way
            </p>
            <li>ID</li>
            <p>
              ID's should be used minimally, the reason to use ID's is
              to make sure you only have one identifier to use an id to
              make sure it is easy to find down the line. If you are
              using anything more than once, go for using a class.
            </p>
            <ul />
            <break />
            <p>
              <b>Tools</b>
            </p>
            <break />
            <li>
              <a href="https://code.visualstudio.com/">
                One of the greatest code editors of all time, feel free
                to use what you are comfortable with. I will be using VS
                Code. HOLLA!!!
              </a>
            </li>
            <li>
              <a href="https://www.iterm2.com/">
                I use iterm2 throughout class, I legit don't know of any
                other outside of using the internal mac terminal
              </a>
            </li>
            <li>
              <a href="https://gitforwindows.org/">
                For windows git bash works and exists
              </a>
            </li>
            <break />
            <p>
              <b>Resources</b>
            </p>
            <break />
            <ul>
              <li>
                <a href="https://btholt.github.io/intro-to-web-dev-v2/basic-html">
                  This is one of many resources that will help further
                  your knowledge
                </a>
              </li>
              <break />
              <li>
                <a href="https://frontendmasters.com/books/front-end-handbook/2018/">
                  LEARN
                </a>
              </li>
              <break />
              <li>
                <a href="https://www.codewars.com/dashboard">
                  Make an account, practice the easy ones, when we get
                  to JS you will want to invest a lot of time into this
                  site.
                </a>
                <break />
              </li>
              <li>
                <a href="https://developer.mozilla.org/en-US/">
                  If I ask you to check the documentation. This is a
                  great place to learn and enhance your JS skills
                </a>
                <break />
              </li>
            </ul>
          </div>;
    }
}

