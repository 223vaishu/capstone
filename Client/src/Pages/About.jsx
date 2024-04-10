import React from "react";
import Nav from "../Components/Nav";
import "./About.css"
import image from "../images/abc.jpeg"

function About(){
    return(
        <div>
            <Nav/>
            <div className="Main1">
                <div className="Overview">
                    <h1>OverView</h1>
                    <h2>MIT Art Design and Technology University has been making concerted efforts for taking a leap towards the world class education. It is amongst the leading Government recognized Private University within the ambit of the renowned MIT Group of Institutions, Pune. MIT ADT University is a multi-disciplinary university which is famous for its sprawling lush green campus of 125 acres and picturesque location, spanning over the large area of 125 acres. University is the manifestation of the serenity of Mother Nature and aesthetically built on the banks of Mula-Mutha river.

                    The University is driven by the vision of delivering the world - class value-based education and Holistic development of the student's personality, enabling them to transform themselves into a Future Global Leaders.</h2>
                </div>
                <div className="sport">
                    <h1 className="vision">Vision</h1>
                    <h3>"Committed towards building a strong Nation through sports.Empowering athletes to transcend limits, achieve excellence, and inspire generations through the transformative power of sports."</h3>
                </div>
                <div className="sport1">
                    <h1 className="Mission">Mission : </h1>
                    <h3>"It is our mission to facilitate the young generation to develop as healthy and balanced human beings with a wisdom to create life full of peace, passion and purpose.Our mission at ALLMITSPORT is to foster a vibrant community of sports enthusiasts, where passion meets expertise. We strive to deliver top-notch content, expert advice, and unparalleled support to help athletes thrive in their athletic endeavors."</h3>
                </div>
                <div className="sport2">
                    <h1 className="Objectives">Objectives : </h1>
                    <h3> - To develop and upgrade with the excellent, appropriate sports infrastructure facilities like playing fields, gymnasium, swimming pool supported with excellent quality of sports equipment.<br></br>
                     - To maintain the indoor and outdoor sports Infrastructure facilities in the University campus.<br></br>
                     - To search sports talent at the institutional level and to groom students to become better performers in national and international arena.<br></br>
                     - To promote student's participation in sports and create awareness about the benefits of physical education.<br></br>
                     - To spread the culture of sports among the students of MIT ADT University.<br></br>
                     - To provide systematic coaching programs by involving qualified & competent sports expertise to groom university teams & sports talent.<br></br>
                     - To project the potential talent of the university by organizing state, national, and international level tournaments.<br></br>
                     - To provide incentives and awards to sports persons to motivate students to participate in various sports events.</h3>
                </div>
                <div className="sport3">
                    <h1 className="infra">Infrastructure : </h1>
                    <h3> - The Sports Infrastructure includes a well-equipped gymnasium, Olympic size swimming pool, water polo, badminton courts, basketball courts, volleyball courts, tennis courts, football playground, cricket playground, kabaddi playground, kho-kho playground, table tennis, rowing, chess, boxing, archery and facilities available for all students.<br></br>
                     - Our Sports Infrastructure is well equipped to train the students and harness their latent potential in wide-ranging sports<br></br>
                     - Being the apex body for sports at MIT ADTU, we in addition to hosting sports tournaments, also actively involved in a number of social and informal events. We take pride in making a significant contribution to our students' personality, fitness and health development.<br></br>
                     - MIT-ADT University Sports Department has been conceptualizing and organizing yearly sports competitions in University campus at various levels viz. Inter collegiate, District and State Level.</h3>
                </div>
                <div className="sport4">
                    <h1 className="Message">Message : </h1>
                    <h3>MIT-ADTU Sports department is the nerve centre for all sports initiatives by the University. We are a unique multi-campus and multi-disciplinary organization, conducting university approved academic programmes in diverse fields and non-academic development programs. It has been our culture & tradition to nurture our student's persona to shape-up their all-round personality.
                    <br></br><br></br>

                    At MIT ADT University we believe that extracurricular activities are of paramount importance for comprehensive development of a student. By taking part in various extracurricular activities the student will be able to achieve overall personality development.<br></br><br></br>


                    MIT-ADT University is known for nurturing and producing the best talents from wide-ranging fields. Our Students have displayed and proved their calibre and excellence in the field of academics & Sports on various occasions. MIT-ADT University has also built a World Class Sports Infrastructure which is beneficial to our students in building desired level of competency and gaining finesse in their craft. It enables them to qualify for the national & international level sports events and winning laurels for their institutions and the country.<br></br><br></br>


                    'Vishwanath Sports meet' is rated amongst the most prestigious sporting event happening under the aegis of MIT-ADT University and has been credited with discovering great talents from the colleges and universities in Maharashtra.</h3>
                </div>
                
                <img className="img" src={image} alt="back" />
            </div>
        </div>
    )
}

export default About;