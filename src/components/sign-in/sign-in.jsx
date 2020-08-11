import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import Footer from "../footer/footer.jsx";
import {Link} from "react-router-dom";
import {AppRoute} from "../../common.js";

class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = createRef();
    this.passwordRef = createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    const {onSubmit} = this.props;

    evt.preventDefault();
    onSubmit({
      login: this.loginRef.current.value,
      password: this.passwordRef.current.value,
    });
  }

  render() {
    const {isLoginValid, isPasswordValid, isInputValid} = this.props;

    const invalidMessage = <div className="sign-in__message">
      <p>Please enter a valid email address</p>
    </div>;

    return (
      <div className="user-page">

        <header className="page-header user-page__head">
          <div className="logo">
            <Link to={AppRoute.ROOT} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form" onSubmit={this.handleSubmit}>
            {
              isInputValid ? `` : invalidMessage
            }
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input className="sign-in__input" type="email" placeholder="Email address" name="user-email"
                  id="user-email" ref={this.loginRef} onChange={(evt) => isLoginValid(this.loginRef, evt)} required/>
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input className="sign-in__input" type="password" placeholder="Password" name="user-password"
                  id="user-password" ref={this.passwordRef} onChange={() => isPasswordValid(this.passwordRef)} required/>
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <Footer />
      </div>
    );
  }
}

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoginValid: PropTypes.func.isRequired,
  isPasswordValid: PropTypes.func.isRequired,
  isInputValid: PropTypes.func.isRequired,
};

export default SignIn;
