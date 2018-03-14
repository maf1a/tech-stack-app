import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';

import ListItem from './list-item';

class LibraryList extends Component {
  state = {
    dataSource: null
  }

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.setState({
      dataSource: ds.cloneWithRows(this.props.libraries)
    });
  }

  renderRow(library) {
    return <ListItem library={library} />
  }

  render() {
    const { dataSource } = this.state;
    return(
      <ListView
        dataSource={dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = ({ libraries }) => {
  return { libraries }
}

export default connect(mapStateToProps)(LibraryList);
