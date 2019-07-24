import React, { Component } from 'react';
import { Button, Row, Spinner } from 'reactstrap';
import '../css/Widgets.css';
import SmallWidget from '../widgets/SmallWidget.js';
import Footer from '../Footer.js';
import { compose } from 'recompose';
import { withFirebase } from '../firebase';

class Companies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 4,
      error: false,
      loading: true,
      widgets: false,
      widget_props: []
    };
    this.onLoadMore = this.onLoadMore.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.companies().on('value', snapshot => {

      const companyObject = snapshot.val();

      const companyList = Object.keys(companyObject).map(key => ({
        ...companyObject[key],
        cid: key,
      }));

      this.setState({
        widget_props: companyList,
        widgets: true,
        loading: false,
      });
    });
  }

  onLoadMore() {
    this.setState({
      limit: this.state.limit + 4
    });
  }

  renderSmallWidgets() {
    return this.state.widget_props.slice(0,this.state.limit).map((widget_prop)=>{
      return(
         <SmallWidget key={widget_prop.aid}{...widget_prop}/>
        );
    });
  }

  render() {
    const { loading, widgets } = this.state;

    return (
      <Row>
        <div id="company-header"><h1>companies</h1></div>
        <div id="loading">
          { loading &&
            <div>
              <Spinner  color="dark" />
              <Spinner  color="dark" />
              <Spinner  color="dark" />
            </div>
          }
        </div>
        <div id="search">
        </div>
        <Row id="company-row">
          {this.renderSmallWidgets()}
          { widgets &&
            <Button id="athena-load" onClick={this.onLoadMore} className="athena-primary">→ View more</Button>
          }
        </Row>
        <Footer background={'purple'}/>
      </Row>
    );
  }
}

const CompaniesPage = compose(
  withFirebase
)(Companies);

export default CompaniesPage;
