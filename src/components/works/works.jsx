import React from "react";
import { TbPointFilled } from "react-icons/tb";
import Earnbroker from "../../images/ebh.jpeg";
import EarnbrokerTrading from "../../images/ebtp.jpeg";
import "./works.scss";

const Works = () => {
  return (
    <div className="works">
      <h1>&lt;works&gt;</h1>
      <div className="works-wrapper">
        <p className="works-text">
        /While I have numerous projects hosted locally, the following are some of the projects I have developed for actual clients and deployed in real-world environments./
        </p>
        <div className="works-cover">
          <div className="seperate">
            <TbPointFilled size={22} color="#fc3b10" />
            <TbPointFilled size={22} color="#ffd500" />
            <TbPointFilled size={22} color="#0dcc0d" />
            <a href="https://simmsonhair.com/"><p>Simmsonhair.com</p></a>
          </div>
          <div className="work earnbroker">
            <p>
            Simms On Hair is an advanced hair salon management system built with the MERN stack. It features an intuitive user interface where clients can book appointments, browse hair products, and get personalized recommendations. The platform includes a robust admin dashboard that allows salon administrators to manage appointments, track inventory, and monitor overall salon operations. Additionally, the system integrates real-time notifications to keep both clients and staff updated on schedules and changes, ensuring a seamless and efficient salon experience.
            </p>
          </div>
        </div>

        <div className="works-cover">
          <div className="seperate">
            <TbPointFilled size={22} color="#fc3b10" />
            <TbPointFilled size={22} color="#ffd500" />
            <TbPointFilled size={22} color="#0dcc0d" />
            <a href="http://kankysecret.com/"><p>Kankysecrets.com</p></a>
          </div>
          <div className="work cosmetic">
            <p>
              This is an e-commerce site built with the MERN stack also. I built
              the website for a close relative for her skincare brand to handle
              orders.
            </p>
          </div>
        </div>

        <div className="works-cover">
          <div className="seperate">
            <TbPointFilled size={22} color="#fc3b10" />
            <TbPointFilled size={22} color="#ffd500" />
            <TbPointFilled size={22} color="#0dcc0d" />
            <a href="https://creditaffairs.com.ng/"><p>Creditaffairs.com.ng</p></a>
          </div>
          <div className="work creditaffairs">
            <p>
              This was a quick and urgent loan website built for the
              creditaffairs loan company for users to see about their comapny
              and reach out to them.
            </p>
          </div>
        </div>

        <div className="works-cover">
          <div className="seperate">
            <TbPointFilled size={22} color="#fc3b10" />
            <TbPointFilled size={22} color="#ffd500" />
            <TbPointFilled size={22} color="#0dcc0d" />
            <a href="https://adehosting.com/"><p>Adehosting.com</p></a>
          </div>
          <div className="work todo">
            <p>
              This was not a project i worked on alone, i assisted in the
              project. This is a hosting platform where you host your websites
              for very affordable rates!
            </p>
          </div>
        </div>

        <div className="works-cover">
          <div className="seperate">
            <TbPointFilled size={22} color="#fc3b10" />
            <TbPointFilled size={22} color="#ffd500" />
            <TbPointFilled size={22} color="#0dcc0d" />
            <p>Payza</p>
          </div>
          <div className="work calc">
            <p>
              This is my first cross-platform mobile app I built for a client
              with react Native MERN and it's going live on play store and app
              store on the 8th of April, 2024! It is an app for buying and
              selling of currencies and it also has an inbuilt chat app and also
              the admin side of the app for when an admin logs into the
              aplication.
            </p>
          </div>
        </div>

        <div className="works-cover">
          <div className="seperate">
            <TbPointFilled size={22} color="#fc3b10" />
            <TbPointFilled size={22} color="#ffd500" />
            <TbPointFilled size={22} color="#0dcc0d" />
            <a href="https://tgrfoods.com/"><p>tgrfoods.com</p></a>
          </div>
          <div className="work tgr">
            <p>
              This wa also a team work and it is a website for ordering fooditems.
            </p>
          </div>
        </div>
      </div>
      <h1>&lt;/works&gt;</h1>
    </div>
  );
};

export default Works;
