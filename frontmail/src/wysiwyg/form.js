import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import ColorPic from "./color-pic";
import "./form.css";
import PubSub from "pubsub-js";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.token = "";
  }

  componentDidMount() {
    // this.token = PubSub.subscribe("form-wys", function(msg, data) {
    //   console.log({ msg, data });
    //   return { msg, data };
    // });
    // console.log("token", this.token);
  }

  componentWillUnmount() {
    // PubSub.unsubscribe(this.token);
  }

  onEditorStateChange = editorState => {
    this.setState({
      editorState
    });

    let htmlValue = draftToHtml(
      convertToRaw(this.state.editorState.getCurrentContent())
    );

    PubSub.publish("form-wys", htmlValue);
  };

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
          }}
          toolbar={{
            colorPicker: { component: ColorPic }
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
