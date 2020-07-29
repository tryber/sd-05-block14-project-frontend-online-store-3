import React from 'react';
import { getCategories } from '../services/api';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      categories: [],
      checked: false,
    };
  }

  componentDidMount() {
    getCategories().then((response) => {
      this.setState({ categories: response });
    });
  }

  render() {
    const { categories, checked } = this.state;
    return (
      <div>
        <h3>Categorias:</h3>
        {categories.map((obj) => (
          <div key={obj.id}>
            <label data-testid="category" htmlFor={obj.id}>
              <input
                type="checkbox"
                name="categories"
                id={obj.id}
                checked={checked}
                onClick={() => this.props.onClick(obj)}
              />
              {obj.name}
            </label>
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
