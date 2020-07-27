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
        <ul>
          {categories.map((obj) => <li data-testid="category" key={obj.id}>{obj.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default Categories;
