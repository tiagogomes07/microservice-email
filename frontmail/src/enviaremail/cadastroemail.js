import { React, Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { SketchPicker } from "react-color";
import PropTypes from "prop-types";
import icon from "./icon.jpg";
import "./cadastro.css";

export default class CadastroEmail extends React.Component {
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

  returnValue() {
    return draftToHtml(
      convertToRaw(this.state.editorState.getCurrentContent())
    );
  }

  render() {
    return (
      <div>
        <Editor
          editorState={this.state.editorState}
          toolbarClassName="toolbarClassName toolbar"
          wrapperClassName="wrapperClassName wrapper"
          editorClassName="editorClassName border"
          onEditorStateChange={this.onEditorStateChange}
          toolbar={{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true }
            // colorPicker: { component: ColorPic }
          }}
        />
        <textarea
          disabled
          value={draftToHtml(
            convertToRaw(this.state.editorState.getCurrentContent())
          )}
        />
      </div>
    );
  }
}
