export default class CategoryList extends React.Component {
  render() {
    return (
      <ul>
      {this.props.pr_categoryTypes.map((i, index) =>
        <li key={index + 1} onClick={() => 
          { this.props.pr_filterCategory(i.catName)}}>{i.catName} {i.catLength}</li>
        )}
      </ul>
      );
  }
}