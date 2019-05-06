import React, { Component } from 'react';
import { Col, Button, Row, Spinner } from 'reactstrap';
import '../css/Widgets.css';
import SmallWidget from '../widgets/SmallWidget.js';
import { compose } from 'recompose';
import { withFirebase } from '../firebase';

class Associations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 2,
      error: false,
      loading: true,
      widgets: false,
      widget_props: []
    };

    this.onLoadMore = this.onLoadMore.bind(this);
  }

  onLoadMore() {
    this.setState({
      limit: this.state.limit + 2
    });
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.associations().on('value', snapshot => {

      const associationObject = snapshot.val();

      const associationList = Object.keys(associationObject).map(key => ({
        ...associationObject[key],
        aid: key,
      }));

      this.setState({
        widget_props: associationList,
        widgets: true,
        loading: false,
      });
    });
  }


  renderSmallWidgets() {
    return this.state.widget_props.slice(0,this.state.limit).map((widget_prop)=>{
      return(
        <Col xs="12" md="6">
          <SmallWidget key={widget_prop.aid}{...widget_prop}/>
        </Col>
        );
    });
  }

  render() {
    const { loading, widgets } = this.state;

    return (
      <Row>
        <Col xs="12" md="12" id="association-header"><h1>associations</h1></Col>
        <Col id="loading" xs="12" md="12">
          { loading &&
            <div>
              <Spinner  color="dark" />
              <Spinner  color="dark" />
              <Spinner  color="dark" />
            </div>
          }
        </Col>
        <Row id="association-row">
          {this.renderSmallWidgets()}
          { widgets &&
            <Button id="athena-load" onClick={this.onLoadMore} className="athena-primary">→ View more</Button>
          }
        </Row>
      </Row>
    );
  }
}

const AssociationsPage = compose(
  withFirebase
)(Associations);

export default AssociationsPage;
