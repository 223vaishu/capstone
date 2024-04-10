import React from "react";
import Nav from "../Components/Nav";
import "./Detail.css";
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

function Detail() {
  return (
    <div>
      <Nav />
      <div className="main-container">
        <div>
          <h1 className="main-heading">Detail Information....</h1>
        </div>
        <div className="sport-card">
          <div className="card">
            <img className="card-img" src={badminton}  alt="A person holding a badminton racket and ready to play" />
            <h2 className="card-title">Badminton</h2>
            <p className="card-description">
              Badminton is a racket sport played either individually (singles)
              or between two teams of two players each (doubles). It is played
              on a rectangular court divided by a net and involves hitting a
              shuttlecock (a feathered or synthetic projectile) back and forth
              over the net using racquets.
            </p>
          </div>
          <div className="card">
            <img className="card-img" src={football} alt="A football on a grass field with goalposts in the background" />
            <h2 className="card-title">Football</h2>
            <p className="card-description">
              A team sport played between two teams of eleven players each,
              where the objective is to score goals by kicking the ball into
              the opposing team's goal. It's the most popular sport globally.
            </p>
          </div>
          <div className="card">
            <img className="card-img" src={basketball} alt="A basketball player dribbling a ball on a court" />
            <h2 className="card-title">Basketball</h2>
            <p className="card-description">
              A team sport played on a rectangular court with a hoop at each
              end. The objective is to score points by shooting a ball through
              the opponent's hoop while preventing them from doing so.
            </p>
          </div>
          <div className="card">
            <img className="card-img" src={cricket} alt="A cricket player holding a bat and ready to hit the ball" />
            <h2 className="card-title">Cricket</h2>
            <p className="card-description">
              A bat-and-ball game played between two teams of eleven players
              each. The batting team scores runs by hitting the ball and
              running between wickets, while the bowling and fielding team
              tries to dismiss the batsmen and restrict the scoring.
            </p>
          </div>
          <div className="card">
            <img className="card-img" src={swim} alt="A person swimming underwater with a swim cap and goggles" />
            <h2 className="card-title">Swimming</h2>
            <p className="card-description">
              A water sport involving various strokes and distances, where
              competitors race against each other either individually or as
              part of a team.
            </p>
          </div>
          <div className="card">
            <img className="card-img" src={gym}  alt="A gym with various workout equipment and weights" />
            <h2 className="card-title">Gym</h2>
            <p className="card-description">
              A sport involving exercises that require balance, strength,
              flexibility, agility, coordination, and endurance, typically
              performed on apparatus such as bars, beams, rings, and vaults.
            </p>
          </div>
          <div className="card">
            <img className="card-img" src={kho} alt="A group of people playing kho-kho, a traditional Indian sport"/>
            <h2 className="card-title">Kho-Kho</h2>
            <p className="card-description">
              The game is played between two teams, each consisting of twelve
              players, with nine players on the field at a time. The objective
              of the game is for the chasing team (defenders) to tag the
              members of the opposing team (chasers) while avoiding being
              tagged themselves within a specified time limit.
            </p>
          </div>
          <div className="card">
            <img className="card-img" src={kabaddi} alt="Two teams playing kabaddi, a contact sport from India" />
            <h2 className="card-title">Kabaddi</h2>
            <p className="card-description">
              Kabaddi is a team sport played between two teams, each
              consisting of seven players. The objective is for a player, known
              as the "raider," to enter the opponent's half of the field, tag
              as many defenders as possible, and return to their own half
              without being tackled.
            </p>
          </div>
          <div className="card">
            <img className="card-img" src={tennis} alt="A tennis court with a net and rackets in the foreground" />
            <h2 className="card-title">Tennis</h2>
            <p className="card-description">
              A racket sport played either individually against a single
              opponent (singles) or between two teams of two players each
              (doubles). Players use rackets to hit a ball over a net into the
              opponent's court, aiming to score points.
            </p>
          </div>
          <div className="card">
            <img className="card-img" src={volly}  alt="A volleyball game in progress on a sandy beach" />
            <h2 className="card-title">VolleyBall</h2>
            <p className="card-description">
              The primary objective of volleyball is to score points by
              grounding the ball on the opponent's court or by forcing the
              opponent to commit a fault. Each team tries to send the ball over
              the net and prevent the opposing team from doing the same.
            </p>
          </div>
          <div className="card">
            <img className="card-img" src={chess} alt="A chess board with pieces on it, ready for a game" />
            <h2 className="card-title">Chess</h2>
            <p className="card-description">
              The primary objective of chess is to checkmate the opponent's
              king, whereby the king is under attack and has no legal moves to
              escape. The game can also end in a draw or resignation.
            </p>
          </div>
          <div className="card">
            <img className="card-img" src={rowing}  alt="A rowing team in a boat, rowing in a lake or river" />
            <h2 className="card-title">Rowing</h2>
            <p className="card-description">
              Rowing boats, also known as shells, come in various designs
              depending on the number of rowers. They can be singles (one
              rower), doubles (two rowers), pairs (two rowers with one oar
              each), fours (four rowers), or eights (eight rowers).
            </p>
          </div>
          <div className="card">
            <img className="card-img" src={boxing} alt="A boxing match in progress in a ring"/>
            <h2 className="card-title">Boxing</h2>
            <p className="card-description">
              A combat sport where two opponents engage in a contest of
              strength, speed, reflexes, and endurance by throwing punches at
              each other within a defined set of rules.
            </p>
          </div>
          <div className="card">
            <img className="card-img" src={arc}  alt="An archer holding a bow and arrow, ready to shoot at a target" />
            <h2 className="card-title">Archery</h2>
            <p className="card-description">
              Archers employ a specific shooting technique involving stance,
              grip, draw, anchor, aim, and release to consistently hit their
              target accurately. Proper form and consistency are crucial for
              success in archery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
