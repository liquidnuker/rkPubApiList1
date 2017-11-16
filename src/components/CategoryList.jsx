export default class CategoryList extends React.Component {
  render() {
    return (
      <ul>
      <li onClick={() => { this.props.pr_filterCategory("All")}}>
          All Items: {this.props.pr_apiTotalCount}
      </li>
      {this.props.pr_categoryTypes.map((i, index) =>
        <li key={index + 1} onClick={() => 
          { this.props.pr_filterCategory(i.catName)}}>{i.catName} {i.catLength}</li>
        )}
      </ul>
      );
  }
}