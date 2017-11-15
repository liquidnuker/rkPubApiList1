import axios from "axios";
import {arr_filter} from "../js/arr_filter.js";
import {arr_extractUnique} from "../js/arr_extractUnique.js";
import {arr_sortValue} from "../js/arr_sortValue.js";
import {search_fuse} from "../js/search_fuse.js";
import Paginate from "../js/vendor/Paginate.js";
import {store} from "../js/store.js";

import ApiList_table from "./ApiList_table.jsx";
import CategoryList from "./CategoryList.jsx";
import AuthFilter from "./AuthFilter.jsx";

class HttpsToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    // binders    
  }
  // hooks
  
  // methods
  
  render() {
    return (
      <div>
      <input type="checkbox" id="checkbox" checked={this.props.pr_https} 
      onClick={() => { this.props.pr_toggleHttps(this.props.pr_https)}}/>
      <label tabIndex="0" htmlFor="checkbox">HTTPS only</label>
      </div>
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
      authTypes: [],
      authTypeSelected: [], // checkbox
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
    this.filterCategory = this.filterCategory.bind(this);
    this.toggleAuthType = this.toggleAuthType.bind(this);
    this.toggleHttps = this.toggleHttps.bind(this);
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
  let authTemp = arr_extractUnique(arr, "Auth");
  let authTemp2 = [];

  for (let i in authTemp) {
    authTemp2.push({
      authName: authTemp[i],
      checked: true
    });
  }

  this.setState(prevState => ({
    authTypes: authTemp2
  }));

  authTemp = null;
  authTemp2 = null;

  this.toggleAuthTypeCheckbox(true);

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

toggleAuthTypeCheckbox(checked) {
  let authTypes = this.state.authTypes;
  let authTypeSelected = this.state.authTypeSelected;

  if (checked) {
    authTypeSelected = [];
    for (let i in authTypes) {
      authTypeSelected.push(authTypes[i].authName);
    }
  } else {
    authTypeSelected = [];
  }

  this.setState(prevState => ({
    authTypeSelected: authTypeSelected,
    // uncheck https checkbox when showing all items
    https: false
  }));
}

toggleHttps(checked) {
  checked = !checked;
  // this.setState(prevState => ({
  //   https: checked
  // }));
  this.state.https = checked;

  this.filterAuthType();
}

filterCategory(category) {
  this.state.currentCategory = category;
  this.filterAuthType();
}

toggleAuthType(index) {
  let authTypes = this.state.authTypes;
  let selectedItems = this.state.authTypeSelected;

  if (authTypes[index].checked) {
    let indexToSplice = selectedItems.indexOf(authTypes[index].authName)
    selectedItems.splice(indexToSplice, 1);
    authTypes[index].checked = false;
  } else {
    selectedItems.push(authTypes[index].authName);
    authTypes[index].checked = true;
  }

  this.setState(prevState => ({
    authTypes: authTypes, // for checked attr
    authTypeSelected: selectedItems
  }));

  // ok
  // console.log(this.state.authTypeSelected);
  this.filterAuthType();
}

filterAuthType() {
  let apiListFiltered = this.state.apiListFiltered;
  // this.status.search = "";
  let categoryTemp;

  if (this.state.currentCategory !== "All") {
    categoryTemp = arr_filter(this.state.apiListCache, "Category", this.state.currentCategory);
  } else {
    // to filter authTypes from default items
    categoryTemp = this.state.apiListCache;
  }

  // authType checkbox
  let authTemp = [];
  this.state.authTypeSelected.map((i) => {
    // get items of each authTypeSelected
    let t2 = arr_filter(categoryTemp, "Auth", i);
    authTemp = authTemp.concat(t2);
    t2 = null;
  });

  // HTTPS checkbox
  if (this.state.https) {
    let hTemp = arr_filter(authTemp, "HTTPS", this.state.https);
    apiListFiltered = hTemp;
    hTemp = null;
  } else {
    apiListFiltered = authTemp;
  }

  if (authTemp.length === 0) {
    console.log("no results");
  }

  authTemp = null;
  categoryTemp = null;  
  console.log(apiListFiltered);
  this.activatePager(apiListFiltered); 

}

  render() {
    return (
      <div>
      {this.state.apiList.length}
      <br />
      {this.state.totalPages} {this.state.currentPage}
      <br />
      
      <br />
      <br />
      <AuthFilter pr_items={this.state.authTypes} 
      pr_toggleAuthType={this.toggleAuthType} />

      <HttpsToggle 
      pr_https={this.state.https}
      pr_toggleHttps={this.toggleHttps} />


      <div className="row">
        <div className="col-sm-3">
         <CategoryList pr_categoryTypes={this.state.categoryTypes} 
         pr_filterCategory={this.filterCategory} /> 
        </div>
        <div className="col-sm-9">
          <ApiList_table pr_items={this.state.apiList} />
        </div>
      </div>
      </div>
    );
  }
}