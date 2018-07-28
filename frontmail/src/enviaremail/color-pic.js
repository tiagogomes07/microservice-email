import React from "react";
import { SketchPicker } from "react-color";
import PropTypes from "prop-types";
import icon from "./icon.jpg";

export default class ColorPic extends React.Component {
  static propTypes = {
    expanded: PropTypes.bool,
    onExpandEvent: PropTypes.func,
    onChange: PropTypes.func,
    currentState: PropTypes.object
  };

  stopPropagation = event => {
    event.stopPropagation();
  };

  onChange = color => {
    const { onChange } = this.props;
    onChange("color", color.hex);
  };

  renderModal = () => {
    const { color } = this.props.currentState;
    return (
      <div style={{ position: "absolute" }} onClick={this.stopPropagation}>
        <SketchPicker color={color} onChangeComplete={this.onChange} />
      </div>
    );
  };

  render() {
    const { expanded, onExpandEvent } = this.props;
    return (
      <div
        aria-haspopup="true"
        aria-expanded={expanded}
        aria-label="rdw-color-picker"
      >
        <div onClick={onExpandEvent}>
          <img width="20" height="20" src={icon} alt="" />
        </div>
        {expanded ? this.renderModal() : undefined}
      </div>
    );
  }
}
