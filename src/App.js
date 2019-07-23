import React from 'react';
import logo from './logo.svg';
import './App.css';
import marked from 'marked';

{/* Editor component that serves as the parent component which adds the user's input with the placeholder
  and its previewed according to the github flavored markdown library(marked) */}
class Editor extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      input: placeholder
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({
      input: event.target.value
    });
  }

  render(){
    return(
      <div>
        <h1 class="center position"> <img src={logo} className="App-logo" alt="logo" /> Markdown Previewer</h1>
        
        <div id="editor">
        <h2>Editor</h2>
        {/* inputing the placeholder into the textarea */}
        <textarea onInput={this.handleChange}>
          {placeholder}
        </textarea>
        </div>
        
        <h2 id="editor">Previewer</h2>
        <div id="preview">
          <Preview theState={this.state.input}/>
        </div>
      </div>
    );
  }
}

{/* previewer component that implement the github flavored markdown library(marked) on the value in the input
  field of the editor component */}
class Preview extends React.Component {
  getText(){
    let rawText = marked(this.props.theState, {sanitize: true});
    return { __html: rawText}
  }
  render(){
    return(
      <div dangerouslySetInnerHTML={this.getText()}/>
    );
  }
}

{/* placeholder for the input field in the editor component */}
const placeholder = 
`
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`

// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)

`;

export default Editor;
