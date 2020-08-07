import React from "react";
import PropTypes from "prop-types";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {Link} from "react-router-dom";
import {AppRoute} from "../../common.js";

const Header = (props) => {
  const {authorizationStatus, children} = props;

  return (
    <header className="page-header movie-card__head">
      <div className="logo">
        <a className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      {children}

      <div className="user-block">

        {
          authorizationStatus === AuthorizationStatus.AUTH
            ? <div className="user-block__avatar">
              <Link to={AppRoute.MY_LIST}>
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </Link>
            </div>
            : <div className="user-block">
              <Link className="user-block__link" to={AppRoute.LOGIN}>Sign in</Link>
            </div>
        }

      </div>
    </header>
  );
};

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Header;
