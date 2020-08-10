import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {AppRoute} from "../../common.js";
import {connect} from "react-redux";
import {getErrorType} from "../../reducer/data/selectors.js";

const ErrorMessages = {
  400: `Вы ввели неверные данные`,
  401: `Вы не авторизированы`,
  403: `Доступ запрещен`,
  404: `Страница не найдена`,
  500: `Какие-то неполадки на сервере`,
  503: `Сервер недоступен`,
};

const ErrorScreen = (props) => {
  const currentYear = new Date().getFullYear();

  const {errorType, errorText} = props;

  const message = errorType ? `Ошибка ${errorType}: ${ErrorMessages[errorType]}` : errorText;

  return (
    <>
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <Link to={AppRoute.ROOT} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>
        </header>

        <div className="sign-in user-page__content">
          <div className="sign-in__message">
            <p>{message}</p>
          </div>
        </div>

        <footer className="page-footer">
          <div className="logo">
            <Link to={AppRoute.ROOT} className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© {currentYear} What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

ErrorScreen.propTypes = {
  errorType: PropTypes.string.isRequired,
  errorText: PropTypes.string,
};

const mapStateToProps = (state) => ({
  errorType: getErrorType(state),
});

export {ErrorScreen};
export default connect(mapStateToProps)(ErrorScreen);
