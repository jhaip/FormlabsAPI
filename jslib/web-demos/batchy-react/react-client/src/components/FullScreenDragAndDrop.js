import React from 'react';
// import BodyEnd from "./BodyEnd";

// TODO: Not yet hook up, needs to give files to main editor

function addEventListener(type, listener, options) {
    document.addEventListener(type, listener, options);
    return () => document.removeEventListener(type, listener, options);
}

function setImmediate(callback, ...args) {
    let cancelled = false;
    Promise.resolve().then(() => cancelled || callback(...args));
    return () => {
        cancelled = true;
    };
}

function noop(){}

function handleDragOver(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = 'copy';
}

export default class FileDrop extends React.Component {

  constructor(props) {
    super(props);
    this.listeners = [];
  }

  state = {
      dragging: false,
  }

  componentDidMount() {
      let count = 0;
      let cancelImmediate = noop;

      this.listeners = [
          addEventListener('dragover',handleDragOver),
          addEventListener('dragenter',ev => {
              ev.preventDefault();

              if(count === 0) {
                  this.setState({dragging: true})
              }
              ++count;
          }),
          addEventListener('dragleave',ev => {
              ev.preventDefault();
              cancelImmediate = setImmediate(() => {
                  --count;
                  if(count === 0) {
                      this.setState({dragging: false})
                  }
              })

          }),
          addEventListener('drop',ev => {
              ev.preventDefault();
              cancelImmediate();
              if(count > 0) {
                  count = 0;
                  this.setState({dragging: false})
              }
          }),
      ]
  }

  componentWillUnmount() {
      this.listeners.forEach(f => f());
  }

  render() {
      return this.state.dragging ? (
      //  <BodyEnd>
      <div className="full-screen-drop-target"></div>
      // </BodyEnd>
      ) : null;
  }
}
