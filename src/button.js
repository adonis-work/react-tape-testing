'use strict';

import React, {Component} from 'react';

export default class Button extends Component {
  static defaultProps = {
    label: 'button',
    className: 'default-class'
  }
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.props.label}
      </div>
    )
  }
}
