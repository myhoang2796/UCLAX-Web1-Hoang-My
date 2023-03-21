import styled from 'styled-components';

/* Component ---------------------------*/
import Essay from './Essay.jsx';

const Essays = () => {
    return (
        <EssaysStyled className='Essays'>
            <h2>Essays</h2>
<Essay question='Q1: Explain the difference between HTML, CSS and JavaScript.'>
1. Html is a standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages. CSS (Cascading Style Sheets) is used to style and layout web pages for example, to alter the font, color, size, and spacing of your content, split it into multiple columns, or add animations and other decorative features. JavaScript is an object-oriented computer programming language commonly used to create interactive effects within web browsers.
</Essay>
<Essay question='Q2: What is the difference between Git and Github?'>
2. Git and GitHub help you manage different versions of your code and collaborate with other developers. Git is a version control system that lets you manage and keep track of your source code history. GitHub is a cloud-based hosting service that lets you manage Git repositories such as share git/git hub gives you the ability to manage the git projects.
</Essay>
<Essay question='Q3: What is the difference between JQuery and React?'>
3. jQuery and React are both very popular JavaScript libraries that produce very similar results even though they use very different techniques. jQuery is a utility library that enables developers to build web apps effortlessly using JavaScript. React is a library that allows embedding HTML within JavaScript. React is more components base and more modular.
</Essay>
<Essay question='Q4: What is the difference between a Front-End and Back-End Developer?'>
4. Front-end development focuses on the visual aspects of a website the part that users see and interact with. Back-end development comprises a site's structure, system, data, and logic. Front-end development is programming that focuses on the visual elements of a website or app that a user will interact with (the client side). Meanwhile, back-end development focuses on the side of a website users can't see (the server side).
api / application interface.

</Essay>
<Essay question='Q5: What are the different ways we can link files/resources to our application?'>
5. Set up a patten of anything to the route relative path. For example when you open your Visual Studio and navigate to Solution Explorer. Expand the Resource Files folder, then: To open in the text editor, double-click the. manifest file. To open in another editor, right-click the. manifest file and select Open With.
</Essay>
<Essay question='Q6: What is the difference between jpg, gif, png and svg images?'>
6. JPG develops and maintains standards for a suite of compression algorithms for computer image files. JPG uses a lossy compression algorithm where the image may lose some of its data. It is the most common image format used in digital cameras, different operating systems, and on the Internet. GIF is short for Graphics Interchange Format, a file format that supports both static and animated images. GIF uses a lossless compression algorithm where there is no data loss. GIF images support animation and transparency. PNG is short for Portable Network Graphic, It's a popular file type with web designers because it can handle graphics with transparent or semi-transparent backgrounds. It can truly be transparent in cost of size. SVG is an image file format created specifically for designing two-dimensional vector and vector-raster graphics for websites. SVG supports animation, transparency, and gradients, and is easily scalable without losing quality.
</Essay>
<Essay question='Q7: Define the following Agile roles: Product Owner, Product Manager, Business Analyst, Scrum Master, UX designer, Developer/Engineer, QA/SDET, and DevOps.'>
7. Product Owner creates the list of backlog items and prioritizes them based on the overall strategy and business objectives. Product Manager focuses on the customer need and the larger business objectives that a product or feature will fulfill and articulate. Business Analysts identify business areas that can be improved to increase efficiency and strengthen business processes. Scrum Master facilitates all the communication and collaboration between leadership and team players to ensure a successful outcome. UX Designer make a product or service usable, enjoyable, and accessible to the users. Developer/Engineer are developing, processing, and configuring software or systems based on the needs of your client. QA/SDET design, develop, and test automation tools and frameworks. DevOps evolves and improves products faster than organizations using traditional software development and infrastructure management processes.

</Essay>

        </EssaysStyled>
    );
}

export default Essays;

const EssaysStyled = styled.div`

`;