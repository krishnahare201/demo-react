import React, { Component } from 'react'

export default class App extends Component {

  render() {
    const onMouseOver = event => {
      const el = event.target;
      let colorhex = [
        "#7AF377",
      ];
      el.style.color = colorhex[0]
    };

    const onMouseOut = event => {
      const el = event.target;
      let black = "#000000";
      el.style.color = black;
    };
    const hocComponent = props => (
      <div>
        <h2> Inner HOC Component</h2>
        <p>{props.name}</p>
        <div>
          <span
            onMouseEnter={event => onMouseOver(event)}
            onMouseOut={event => onMouseOut(event)}
            style={{ width: 400 }}
          >
            Hover Me
          </span>
        </div>
      </div>
    );

    const hocCreator = WrappedComponent => {
      return props => (
        <div>
          <h1>Outer HOC Component</h1>
          <WrappedComponent {...props} />
        </div>
      );
    };
    const CustomHigherComponent = hocCreator(hocComponent);
    return (
      <div>
        <CustomHigherComponent name="display in Higher order component" isValid={false} />,
      </div>
    )
  }
}
