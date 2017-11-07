import axios from "axios";
import {arr_filter} from "../js/arr_filter.js";
import {arr_extractUnique} from "../js/arr_extractUnique.js";
import {arr_sortValue} from "../js/arr_sortValue.js";
import {search_fuse} from "../js/search_fuse.js";
import Paginate from "../js/vendor/Paginate.js";
import {store} from "../js/store.js";

import ApiList_table from "./ApiList_table.jsx";

class CategoryList extends React.Component {
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

export default class ComponentWithState extends React.Component {
  constructor(props) {
    super(props);

    this.API_URL ="https://raw.githubusercontent.com/toddmotto/public-apis/master/json/entries.json";
    this.BACKUP_URL ="./entries_offline.json";

    this.state = {
      apiListCache: [], // default unfiltered items
      apiTotalCount: "",
      apiListFiltered: "", // filtered items
      apiList: [], // displayed/paginated items

      categoryTypes: [],
      currentCategory: "All",
      authTypes: "",
      authTypeselected: [], // checkbox
      https: "",

      // paginator
      pager: null,
      currentPage: "",
      totalPages: "",
      pagerButtons: true,
      perPage: 20,
      perPageItems: [10, 20, 40, 60, 100],

      sortAsc: true,

      // messages
      status: {
        search: "status.search"
      }
    };

    // binders
    this.getData = this.getData.bind(this);
  }

  // lifecycle hooks
  componentDidMount() {
    this.getApiData(this.BACKUP_URL);
  }
  
  // methods
  getApiData(url) {
      axios.get(url)
        .then((response) => {
          this.setState({
            apiTotalCount: response.data.count,
            apiListCache: response.data.entries,
            apiListFiltered: this.apiListCache,            
          }); 
          this.activatePager(this.state.apiListCache);
        })
        .then(() => {
          this.addFiltersList(this.state.apiListCache);
        })
        .catch((error) => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);

          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js

          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
    }

    activatePager(data) {
      this.pager = null;
      this.pager = new Paginate(data, this.state.perPage);
      
      this.setState(prevState => ({
        apiList: this.pager.page(0),
        currentPage: this.pager.currentPage,
        totalPages: this.pager.totalPages,
        pagerButtons: true
      }));
    }

    addFiltersList(arr) {
      // for authTypes
      this.state.authTypes = arr_extractUnique(arr, "Auth");
      console.log(this.state.authTypes);
      // this.toggleAuthTypeCheckbox(true);

      // for categoryTypes
      let temp = arr_extractUnique(arr, "Category");
      let temp2 = [];
      // filter to get length of each item then push
      temp.map((i) => {
        let l = arr_filter(this.state.apiListCache, "Category", i);
        
        temp2.push({
            catName: i,
            catLength: l.length
          });
        });

      this.setState(prevState => ({
        categoryTypes: temp2
      }));
      
      temp = null;
      temp2 = null;
    }

    getData(val) {
      console.log(val);
    }

  render() {
    const apiList = this.state.apiList;
    return (
      <div>
      {this.state.apiList.length}
      <br />
      {this.state.totalPages} {this.state.currentPage}

      <br />
      <br />

      <div className="row">
        <div className="col-sm-3">
         <CategoryList pr_categoryTypes={this.state.categoryTypes} 
         pr_data={this.getData} /> 
        </div>
        <div className="col-sm-9">
          <ApiList_table pr_items={this.state.apiList} />
        </div>
      </div>
      </div>
    );
  }
}