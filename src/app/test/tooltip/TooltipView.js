import React from 'react';
import Style from './TooltipView.css';

const TOOLTIP_INIT_TIME = 30000;
const TOOLTIP_WAIT_TIME = 15000;

export const RANDOM_MODE = "random";
export const SEQUENTIAL_MODE = "sequential";
export const ONESHOT_MODE = "oneshot";

class TooltipView extends React.Component
{
  constructor(props)
  {
    super(props);

    this._tooltipTimeout = null;
    this._tooltipTime = TOOLTIP_INIT_TIME;

    this.state = {
      index: props.initial || 0
    };
  }

  setTooltipIndex(index)
  {
    this.setState({index: index});
  }

  getTooltipIndex()
  {
    return this.state.index;
  }

  updateTooltip()
  {
    this._tooltipTimeout = null;
    this._tooltipTime = TOOLTIP_WAIT_TIME;

    if (this.props.visible)
    {
      const count = React.Children.count(this.props.children);
      let nextIndex = this.state.index + 1;
      if (this.props.mode === RANDOM_MODE)
      {
        nextIndex = Math.floor(Math.random() * count);
      }
      else if (this.props.mode === ONESHOT_MODE)
      {
        if (nextIndex >= count) nextIndex = count - 1;
      }
      else
      {
        if (nextIndex >= count) nextIndex = 0;
      }
      this.setTooltipIndex(nextIndex);
    }
    else
    {
      if (this.props.mode === RANDOM_MODE)
      {
        //Pick a random index to start at.
        this.setTooltipIndex(Math.floor(Math.random() * React.Children.count(this.props.children)));
      }
      else if (this.props.mode === ONESHOT_MODE)
      {
        //Skip to the end.
        this.setTooltipIndex(React.Children.count(this.props.children) - 1);
      }
      else
      {
        //Go back to the beginning.
        this.setTooltipIndex(0);
      }
    }
  }

  //Override
  render()
  {
    const mode = this.props.mode;
    const visible = this.props.visible;

    const tooltipIndex = this.state.index;

    if (visible && !this._tooltipTimeout)
    {
      this._tooltipTimeout = setTimeout(() => {
        this.updateTooltip();
      }, this._tooltipTime);
    }

    return (
      <div id={this.props.id}
        className={Style.tooltip_container +
          (visible ? " visible " : "") +
          " " + this.props.className}
        style={this.props.style}>
        {React.Children.map(this.props.children, (child, i) => {
          return (
            <label style={{opacity: tooltipIndex === i ? 1 : 0}}>
              {child}
            </label>
          );
        })}
      </div>
    );
  }
}

export default TooltipView;