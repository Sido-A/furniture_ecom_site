import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__flex container">
        <div className="footer__sns">
          <a href="#">
            <i>
              <InstagramIcon />
            </i>
          </a>
          <a href="#">
            <i>
              <FacebookIcon />
            </i>
          </a>
          <a href="#">
            <i>
              <TwitterIcon />
            </i>
          </a>
        </div>

        <div className="footer__menu">
          <div className="footer__links1 link">
            <Link>About us</Link>

            <Link>How can we help</Link>
          </div>

          <div className="footer__links2 link">
            <Link>shop by room</Link>

            <Link>shop by style</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
