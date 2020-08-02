import React from 'react';
import './paymentMethod.css';

class RadioInput extends React.Component {
  render() {
    const { imgEInput, value, escolhido, onChange, imagePath } = this.props;
    return (
      <div className={imgEInput} >
        <div>
          <label htmlFor={value}>
            <input
              type="radio"
              value={value}
              checked={escolhido === value}
              onChange={onChange}
              id={value}
            /> {value}
          </label>
        </div>
        <img
          src={imagePath}
          alt={value}
          className={'imagem'}
        />
      </div>
    );
  }
}

export default RadioInput;
