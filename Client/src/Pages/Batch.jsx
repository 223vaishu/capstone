import React from "react";
import Nav from "../Components/Nav";
import "./Batch.css";
import badminton from "../images/badminton.avif";
import basketball from "../images/basketball.jpeg";
import football from "../images/football.jpeg";
import cricket from "../images/cricket.jpeg";
import chess from "../images/chess.jpeg";
import swim from "../images/swim.jpeg";
import gym from "../images/gym.jpeg";
import volly from "../images/volly.jpeg";
import tennis from "../images/tennis.jpg";
import rowing from "../images/rowing.jpeg";
import kho from "../images/kho.jpeg";
import kabaddi from "../images/kabaddi.jpeg";
import arc from "../images/arc.jpeg";
import boxing from "../images/boxing.jpg";

function Batch() {
    return (
        <div>
            <Nav />
            <div className="heading">
                <div className="Sentence">
                    <h1 className="Sent">"Discover your next sporting adventure at ALLMITSPORT's dynamic batch offerings!" 🏋️‍♂️💪</h1>
                </div>
                <div className="batch-boxes">
                    <div className="boxes">
                        <img className="contact-img" src={gym} alt="A gym with various workout equipment and weights" />
                        <h2 className="batch-title">Gym & Swimming</h2>
                        <h3 className="batch-batch">Boys</h3>
                        <h3 className="batch-time">6:30am to 7:30am</h3>
                        <button className="update1">Update</button>
                        <button className="delete">Delete</button>
                    </div>

                    <div className="boxes">
                        <img className="contact-img" src={swim} alt="A person swimming underwater with a swim cap and goggles" />
                        <h2 className="batch-title">Gym & Swimming</h2>
                        <h3 className="batch-batch">Girls</h3>
                        <h3 className="batch-time">7:30am to 8:30am</h3>
                        <button className="update1">Update</button>
                        <button className="delete">Delete</button>
                    </div>

                    <div className="boxes">
                    <img className="contact-img" src={gym} alt="A gym with various workout equipment and weights" />
                        <h2 className="batch-title">Gym & Swimming</h2>
                        <h3 className="batch-batch">Boys</h3>
                        <h3 className="batch-time">4:30pm to 5:30pm</h3>
                        <button className="update1">Update</button>
                        <button className="delete">Delete</button>
                    </div>

                    <div className="boxes">
                    <img className="contact-img" src={swim} alt="A person swimming underwater with a swim cap and goggles" />
                        <h2 className="batch-title">Gym & Swimming</h2>
                        <h3 className="batch-batch">Girls</h3>
                        <h3 className="batch-time">5:30pm to 6:30pm</h3>
                        <button className="update1">Update</button>
                        <button className="delete">Delete</button>
                    </div>

                    <div className="boxes">
                    <img className="contact-img" src={gym} alt="A gym with various workout equipment and weights" />
                        <h2 className="batch-title">Gym & Swimming</h2>
                        <h3 className="batch-batch">Boys</h3>
                        <h3 className="batch-time">6:30pm to 7:30pm</h3>
                        <button className="update1">Update</button>
                        <button className="delete">Delete</button>
                    </div>

                    <div className="boxes">
                    <img className="contact-img" src={badminton} alt="A person holding a badminton racket and ready to play" />
                        <h2 className="batch-title">Badminton</h2>
                        <h3 className="batch-batch">Girls</h3>
                        <h3 className="batch-time">4:30pm to 7:30pm</h3>
                        <button className="update1">Update</button>
                        <button className="delete">Delete</button>
                    </div>

                    <div className="boxes">
                    <img className="contact-img" src={badminton} alt="A person holding a badminton racket and ready to play" />
                        <h2 className="batch-title">Badminton</h2>
                        <h3 className="batch-batch">Boys</h3>
                        <h3 className="batch-time">4:30pm to 7:30pm</h3>
                        <button className="update1">Update</button>
                        <button className="delete">Delete</button>
                    </div>

                    <div className="boxes">
                    <img className="contact-img" src={football} alt="A football on a grass field with goalposts in the background" />
                        <h2 className="batch-title">FootBall</h2>
                        <h3 className="batch-batch">Girls</h3>
                        <h3 className="batch-time">4:30pm to 7:30pm</h3>
                        <button className="update1">Update</button>
                        <button className="delete">Delete</button>
                    </div>

                    <div className="boxes">
                    <img className="contact-img" src={football} alt="A football on a grass field with goalposts in the background" />
                        <h2 className="batch-title">FootBall</h2>
                        <h3 className="batch-batch">Boys</h3>
                        <h3 className="batch-time">4:30pm to 7:30pm</h3>
                        <button className="update1">Update</button>
                        <button className="delete">Delete</button>
                    </div>

                    <div className="boxes">
                    <img className="contact-img" src={basketball} alt="A basketball player dribbling a ball on a court" />
                        <h2 className="batch-title">Basketball</h2>
                        <h3 className="batch-batch">Girls</h3>
                        <h3 className="batch-time">4:30pm to 7:30pm</h3>
                        <button className="update1">Update</button>
                        <button className="delete">Delete</button>
                    </div>

                    <div className="boxes">
                    <img className="contact-img" src={basketball} alt="A basketball player dribbling a ball on a court" />
                        <h2 className="batch-title">Basketball</h2>
                        <h3 className="batch-batch">Boys</h3>
                        <h3 className="batch-time">4:30pm to 7:30pm</h3>
                        <button className="update1">Update</button>
                        <button className="delete">Delete</button>
                    </div>

                    <div className="boxes">
                    <img className="contact-img" src={cricket} alt="A cricket player holding a bat and ready to hit the ball" />
                        <h2 className="batch-title">Cricket</h2>
                        <h3 className="batch-batch">Girls</h3>
                        <h3 className="batch-time">4:30pm to 7:30pm</h3>
                        <button className="update1">Update</button>
                        <button className="delete">Delete</button>
                    </div>

                    <div className="boxes">
                    <img className="contact-img" src={cricket} alt="A cricket player holding a bat and ready to hit the ball" />
                        <h2 className="batch-title">Cricket</h2>
                        <h3 className="batch-batch">Boys</h3>
                        <h3 className="batch-time">4:30pm to 7:30pm</h3>
                        <button className="update1">Update</button>
                        <button className="delete">Delete</button>
                    </div>

                    <div className="boxes">
                    <img className="contact-img" src={kho} alt="A group of people playing kho-kho, a traditional Indian sport" />
                        <h2 className="batch-title">Kho-kho</h2>
                        <h3 className="batch-batch">Girls</h3>
                        <h3 className="batch-time">4:30pm to 7:30pm</h3>
                        <button className="update1">Update</button>
                        <button className="delete">Delete</button>
                    </div>

                    <div className="boxes">
                    <img className="contact-img" src={kho} alt="A group of people playing kho-kho, a traditional Indian sport" />
                        <h2 className="batch-title">Kho-kho</h2>
                        <h3 className="batch-batch">Boys</h3>
                        <h3 className="batch-time">4:30pm to 7:30pm</h3>
                        <button className="update1">Update</button>
                        <button className="delete">Delete</button>
                    </div>

                    <div className="boxes">
                    <img className="contact-img" src={kabaddi} alt="Two teams playing kabaddi, a contact sport from India" />
                        <h2 className="batch-title">Kabaddi</h2>
                        <h3 className="batch-batch">Girls</h3>
                        <h3 className="batch-time">4:30pm to 7:30pm</h3>
                        <button className="update1">Update</button>
                        <button className="delete">Delete</button>
                    </div>

                    <div className="boxes">
                    <img className="contact-img" src={kabaddi} alt="Two teams playing kabaddi, a contact sport from India" />
                        <h2 className="batch-title">Kabaddi</h2>
                        <h3 className="batch-batch">Boys</h3>
                        <h3 className="batch-time">4:30pm to 7:30pm</h3>
                        <button className="update1">Update</button>
                        <button className="delete">Delete</button>
                    </div>

                    <div className="boxes">
                    <img className="contact-img" src={tennis} alt="A tennis court with a net and rackets in the foreground" />
                        <h2 className="batch-title">Tennis</h2>
                        <h3 className="batch-batch">Girls</h3>
                        <h3 className="batch-time">4:30pm to 7:30pm</h3>
                        <button className="update1">Update</button>
                        <button className="delete">Delete</button>
                    </div>

                    <div className="boxes">
                    <img className="contact-img" src={tennis} alt="A tennis court with a net and rackets in the foreground" />
                        <h2 className="batch-title">tennis</h2>
                        <h3 className="batch-batch">Boys</h3>
                        <h3 className="batch-time">4:30pm to 7:30pm</h3>
                        <button className="update1">Update</button>
                        <button className="delete">Delete</button>
                    </div>

                    <div className="boxes">
                    <img className="contact-img" src={volly} alt="A volleyball game in progress on a sandy beach" />
                        <h2 className="batch-title">Volleyball</h2>
                        <h3 className="batch-batch">Girls</h3>
                        <h3 className="batch-time">4:30pm to 7:30pm</h3>
                        <button className="update1">Update</button>
                        <button className="delete">Delete</button>
                    </div>

                    <div className="boxes">
                    <img className="contact-img" src={volly} alt="A volleyball game in progress on a sandy beach" />
                        <h2 className="batch-title">Volleyball</h2>
                        <h3 className="batch-batch">Boys</h3>
                        <h3 className="batch-time">4:30pm to 7:30pm</h3>
                        <button className="update1">Update</button>
                        <button className="delete">Delete</button>
                    </div>

                    <div className="boxes">
                    <img className="contact-img" src={chess} alt="A chess board with pieces on it, ready for a game" />
                        <h2 className="batch-title">Chess</h2>
                        <h3 className="batch-batch">Girls</h3>
                        <h3 className="batch-time">4:30pm to 7:30pm</h3>
                        <button className="update1">Update</button>
                        <button className="delete">Delete</button>
                    </div>

                    <div className="boxes">
                    <img className="contact-img" src={chess} alt="A chess board with pieces on it, ready for a game" />
                        <h2 className="batch-title">Chess</h2>
                        <h3 className="batch-batch">Boys</h3>
                        <h3 className="batch-time">4:30pm to 7:30pm</h3>
                        <button className="update1">Update</button>
                        <button className="delete">Delete</button>
                    </div>

                    <div className="boxes">
                    <img className="contact-img" src={rowing} alt="A rowing team in a boat, rowing in a lake or river" />
                        <h2 className="batch-title">Rowing</h2>
                        <h3 className="batch-batch">Girls</h3>
                        <h3 className="batch-time">4:30pm to 7:30pm</h3>
                        <button className="update1">Update</button>
                        <button className="delete">Delete</button>
                    </div>

                    <div className="boxes">
                    <img className="contact-img" src={rowing} alt="A rowing team in a boat, rowing in a lake or river" />
                        <h2 className="batch-title">Rowing</h2>
                        <h3 className="batch-batch">Boys</h3>
                        <h3 className="batch-time">4:30pm to 7:30pm</h3>
                        <button className="update1">Update</button>
                        <button className="delete">Delete</button>
                    </div>

                    <div className="boxes">
                    <img className="contact-img" src={boxing} alt="A boxing match in progress in a ring" />
                        <h2 className="batch-title">Boxing</h2>
                        <h3 className="batch-batch">Girls</h3>
                        <h3 className="batch-time">4:30pm to 7:30pm</h3>
                        <button className="update1">Update</button>
                        <button className="delete">Delete</button>
                    </div>

                    <div className="boxes">
                    <img className="contact-img" src={boxing} alt="A boxing match in progress in a ring" />
                        <h2 className="batch-title">Boxing</h2>
                        <h3 className="batch-batch">Boys</h3>
                        <h3 className="batch-time">4:30pm to 7:30pm</h3>
                        <button className="update1">Update</button>
                        <button className="delete">Delete</button>
                    </div>

                    <div className="boxes">
                    <img className="contact-img" src={arc} alt="An archer holding a bow and arrow, ready to shoot at a target" />
                        <h2 className="batch-title">Archery</h2>
                        <h3 className="batch-batch">Girls</h3>
                        <h3 className="batch-time">4:30pm to 7:30pm</h3>
                        <button className="update1">Update</button>
                        <button className="delete">Delete</button>
                    </div>


                    <div className="boxes">
                        <img className="contact-img" src={arc} alt="An archer holding a bow and arrow, ready to shoot at a target" />
                        <h2 className="batch-title">Archery</h2>
                        <h3 className="batch-batch">Boys</h3>
                        <h3 className="batch-time">4:30pm to 7:30pm</h3>
                        <button className="update1">Update</button>
                        <button className="delete">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Batch;
