import React from "react";

class InputText extends React.Component {
  render() {
    const { name, dataTestId, onChange } = this.props;
    return (
      <div>
        <input type="text" required="required" name={name} placeholder={name} data-testid={dataTestId} onChange={onChange} />
      </div>
    )
  }
}
export default InputText;
