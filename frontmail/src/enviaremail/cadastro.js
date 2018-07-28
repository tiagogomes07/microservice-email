import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { BlockPicker } from "react-color";
import PropTypes from "prop-types";

export default class Cadastro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
  }

  onEditorStateChange = editorState => {
    this.setState({
      editorState
    });
  };

  render() {
    return (
      <div>
        <Editor
          editorState={this.state.editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange}
          //   toolbar={{
          //     inline: { inDropdown: true },
          //     list: { inDropdown: true },
          //     textAlign: { inDropdown: true },
          //     link: { inDropdown: true },
          //     history: { inDropdown: true },
          //   }}
          //   toolbar={{
          //     colorPicker: { component: ColorPic }
          //   }}
        />
      </div>
    );
  }
}

//export default Cadastro;
