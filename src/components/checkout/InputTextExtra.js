import React from 'react';

class InputTextExtra extends React.Component {
  render() {
    const { name, dataTestId, onChange, value, minlength } = this.props;
    return (
      <input
        type="text"
        required="required"
        name={name}
        placeholder={name}
        data-testid={dataTestId}
        onChange={onChange}
        value={value}
        minLength={minlength}
        maxLength={minlength}
      />
    );
  }
}
export default InputTextExtra;
