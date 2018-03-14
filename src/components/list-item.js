import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';

import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  render() {
    const { id, title, description } = this.props.library;
    const { selectLibrary, expanded } = this.props;
    const { titleStyle } = styles;
    return (
      <TouchableWithoutFeedback
        onPress={() => selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          { expanded &&
            <CardSection>
              <Text style={{flex:1, fontSize:20}}>{description}</Text>
            </CardSection>
          }
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = ({ selectedLibraryId }, ownProps) => {
   const expanded = selectedLibraryId == ownProps.library.id;
   return { expanded };
}

export default connect(mapStateToProps, actions)(ListItem);

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}
