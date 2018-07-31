import React from 'react';
import t from 'prop-types';
import RouteContext from './RouteContext';

class AppProvider extends React.Component {
  static propTypes = {
    children: t.node.isRequired,
  };

  state = {
    route: 'Home',
  }

  go = (value) => {
    this.setState({ route: value });
  }

  render() {
    const contextValues = {
      route: this.state.route,
      go: this.go,
    };

    return (
      <RouteContext.Provider value={contextValues}>
        {this.props.children}
      </RouteContext.Provider>
    );
  }
}

export default AppProvider;
