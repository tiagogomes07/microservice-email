import { React, Component } from "react";
//import { Editor } from "react-draft-wysiwyg";
//import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
//import { EditorState, convertToRaw } from "draft-js";
//import draftToHtml from "draftjs-to-html";
// import { BlockPicker } from "react-color";
// import PropTypes from "prop-types";

// class ColorPic extends Component {
//   static propTypes = {
//     expanded: PropTypes.bool,
//     onExpandEvent: PropTypes.func,
//     onChange: PropTypes.func,
//     currentState: PropTypes.object
//   };

//   stopPropagation = event => {
//     event.stopPropagation();
//   };

//   onChange = color => {
//     const { onChange } = this.props;
//     onChange("color", color.hex);
//   };

//   renderModal = () => {
//     const { color } = this.props.currentState;
//     return (
//       <div onClick={this.stopPropagation}>
//         <BlockPicker color={color} onChangeComplete={this.onChange} />
//       </div>
//     );
//   };

//   render() {
//     const { expanded, onExpandEvent } = this.props;
//     return (
//       <div
//         aria-haspopup="true"
//         aria-expanded={expanded}
//         aria-label="rdw-color-picker"
//       >
//         <div onClick={onExpandEvent}>
//           <img src="/fasd" alt="" />
//         </div>
//         {expanded ? this.renderModal() : undefined}
//       </div>
//     );
//   }
// }

export default class EnviarEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // editorState: EditorState.createEmpty()
    };
  }

  // onEditorStateChange = editorState => {
  //   this.setState({
  //     editorState
  //   });
  // };

  render() {
    return (
      <div />
      // <div>
      //   <Editor
      //     editorState={this.state.editorState}
      //     toolbarClassName="toolbarClassName"
      //     wrapperClassName="wrapperClassName"
      //     editorClassName="editorClassName"
      //     onEditorStateChange={this.onEditorStateChange}
      //     // toolbar={{
      //     //   inline: { inDropdown: true },
      //     //   list: { inDropdown: true },
      //     //   textAlign: { inDropdown: true },
      //     //   link: { inDropdown: true },
      //     //   history: { inDropdown: true },
      //     // }}
      //     // toolbar={{
      //     //   colorPicker: { component: ColorPic }
      //     // }}
      //   />
      //   <textarea
      //     value={draftToHtml(
      //       convertToRaw(this.state.editorState.getCurrentContent())
      //     )}
      //   />
      // </div>
    );
  }
}
