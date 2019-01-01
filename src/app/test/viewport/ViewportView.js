import React from 'react';

import Style from './ViewportView.css';

class ViewportView extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      index: 1
    };
  }

  setViewIndex(index)
  {
    this.setState({index: index});
  }

  getViewIndex()
  {
    return this.state.index;
  }

  //Override
  render()
  {
    return (
      <React.Fragment>
        {React.Children.map(this.props.children, (child, i) => {
          return (
            <div id={this.props.id}
              className={Style.view_container +
                (this.state.index === i ? " active " : "") +
                " " + this.props.className}
              style={this.props.style}>
              {child}
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default ViewportView;