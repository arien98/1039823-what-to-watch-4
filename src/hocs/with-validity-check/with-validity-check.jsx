import React, {PureComponent} from "react";

const withValidityCheck = (Component) => {

  class WithValidityCheck extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isValid: true
      };

      this._handleTrueValidity = this._handleTrueValidity.bind(this);
      this._handleFalseValidity = this._handleFalseValidity.bind(this);
      this.isPasswordValid = this.isPasswordValid.bind(this);
      this.isLoginValid = this.isLoginValid.bind(this);
    }


    render() {
      return (
        <Component
          {...this.props}
          isInputValid={this.state.isValid}
          isLoginValid={this.isLoginValid}
          isPasswordValid={this.isPasswordValid}
        />
      );
    }

    _handleTrueValidity() {
      this.setState({isValid: true});
    }

    _handleFalseValidity() {
      this.setState({isValid: false});
    }

    isLoginValid(input, evt) {
      if (input.current.validity.valid && evt.target.value.length >= 6) {
        evt.target.style.borderColor = ``;

        this._handleTrueValidity();
        return true;
      }
      evt.target.style.borderColor = `#a8421e`;
      this._handleFalseValidity();
      return false;
    }

    isPasswordValid(input) {
      if (input === ``) {
        this._handleFalseValidity();
        return false;
      }
      this._handleTrueValidity();
      return true;
    }
  }

  return WithValidityCheck;
};

export default withValidityCheck;
