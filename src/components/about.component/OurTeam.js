import React, { useEffect, useState } from "react";
import Styles from "../../styles/ourteam.module.css";
import { dataourteam } from "./data_ourteam";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const OurTeam = () => {
  return (
    <div>
      <div className={Styles.container}>
        {dataourteam.map((curElem) => {
          return (
            <div className={Styles.card_item} key={curElem.id}>
              <a className="no-underline" href={curElem.link} target="_blank" rel="noreferrer">
                <div className={Styles.card_inner}>
                  <img src={curElem.image} />
                  <div className={Styles.userName}>
                    <p className="text-xl mb-1">{curElem.name}</p>
                    <p className="text-slate-400">{curElem.position}</p>
                    <p className="">
                      <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </p>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default OurTeam;
