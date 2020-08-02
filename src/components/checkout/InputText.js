import React from 'react';

class InputText extends React.Component {
  render() {
    const { name, dataTestId, onChange, value } = this.props;
    return (
      <input
        type="text"
        required="required"
        name={name}
        placeholder={name}
        data-testid={dataTestId}
        onChange={onChange}
        value={value}
      />
    );
  }
}
export default InputText;
