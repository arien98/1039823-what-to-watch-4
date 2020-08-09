import React from "react";
import PropTypes from "prop-types";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {Link} from "react-router-dom";
import {AppRoute} from "../../common.js";
import {getAuthorizationStatus, getAuthorizationInfo} from "../../reducer/user/selectors.js";
import {connect} from "react-redux";

const Header = (props) => {
  const {authorizationStatus, authorizationInfo, children} = props;

  const headerClass = children ? `page-header user-page__head` : `page-header movie-card__head`;

  return (
    <header className={headerClass}>
      <div className="logo">
        <Link to={AppRoute.ROOT} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      {children}

      <div className="user-block">

        {authorizationStatus === AuthorizationStatus.AUTH
          ? <Link to={AppRoute.MY_LIST}>
            <div className="user-block__avatar">
              <img src={authorizationInfo.avatar} alt={`${authorizationInfo.name} avatar`} width="63" height="63" />
            </div>
          </Link>
          : <Link
            to={AppRoute.LOGIN}
            className="user-block__link">
          Sign in
          </Link>
        }

      </div>
    </header>
  );
};

Header.propTypes = {
  authorizationInfo: PropTypes.exact({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
  authorizationStatus: PropTypes.string.isRequired,
  children: PropTypes.node,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  authorizationInfo: getAuthorizationInfo(state),
});

export {Header};
export default connect(mapStateToProps)(Header);
