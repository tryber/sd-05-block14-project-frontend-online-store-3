import React from 'react';
import { getCategories } from '../services/api';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories: [] };
  }

  componentDidMount() {
    getCategories().then((response) => {
      this.setState({ categories: response });
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <h3>Categorias:</h3>
        {categories.map((obj) => (
          <div key={obj.id}>
            <label data-testid="category" htmlFor={obj.id}>
              <input
                type="radio"
                name="categories"
                id={obj.id}
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
