import React, { Component } from "react";

class PhoneNumberInput extends Component {
  constructor(props) {
    super(props);
    this.state = { phoneNumber: "" };
  }

  handlePhoneNumberChange = (e) => {
    const input = e.target.value.replace(/\D/g, "");
    const formattedNumber = this.formatPhoneNumber(input);
    this.setState({ phoneNumber: formattedNumber });
  };

  formatPhoneNumber = (phoneNumber) => {
    if (phoneNumber.length <= 3) {
      return phoneNumber;
    } else if (phoneNumber.length <= 6) {
      return `(${phoneNumber.slice(0, 3)})-${phoneNumber.slice(3)}`;
    } else if (phoneNumber.length <= 10) {
      return `(${phoneNumber.slice(0, 3)})-${phoneNumber.slice(
        3,
        6
      )}-${phoneNumber.slice(6, 10)}`;
    } else {
      return `(${phoneNumber.slice(0, 3)})-${phoneNumber.slice(
        3,
        6
      )}-${phoneNumber.slice(6, 10)}`;
    }
  };

  render() {
    return (
      <div className="order-segment">
        <label htmlFor="phone">Номер телефону: </label> <br />
        <input
          type="tel"
          id="phoneNumber"
          className="delivery-phone-number"
          placeholder="(0__)___-__-__"
          value={this.state.phoneNumber}
          onChange={this.handlePhoneNumberChange}
        />
      </div>
    );
  }
}

export default PhoneNumberInput;
