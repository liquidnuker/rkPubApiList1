export default class CategoryList extends React.Component {
  send(param) {
    this.props.pr_data(param);
  }

  render() {
    return (
      <ul>
      {this.props.pr_categoryTypes.map((i, index) =>
        <li key={index + 1} onClick={() => { this.send(i.catName)}}>{i.catName} {i.catLength}</li>
        )}
      </ul>
      );
  }
}