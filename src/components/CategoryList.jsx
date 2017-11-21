export default class CategoryList extends React.Component {
  render() {
    return (
      <nav className="apilist_categories" role="navigation">
      <ul>
      <li tabIndex="0" onClick={() => 
        { this.props.pr_val_filterCategory("All")}}>
          <a>All Items:</a> 
          <span className="apilist_categories_count">
          {this.props.pr_apiTotalCount}
          </span>
      </li>
      {this.props.pr_categoryTypes.map((i, index) =>
        <li tabIndex="0" key={index + 1} onClick={() => 
          { this.props.pr_val_filterCategory(i.catName)}}>
          <a>{i.catName}</a> <span className="apilist_categories_count">
          {i.catLength}
          </span>
          </li>
        )}
      </ul>
      </nav>
      );
  }
}