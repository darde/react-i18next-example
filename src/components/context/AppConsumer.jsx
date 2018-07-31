import React from 'react';
import RouteContext from './RouteContext';

const AppConsumer = Child => (
  class extends React.Component {
    render() {
      return (
        <RouteContext.Consumer>
          {(contextValues) => (
            <Child route={contextValues.route} go={contextValues.go} {...this.props} />
          )}
        </RouteContext.Consumer>
      );
    }
  }
);

export default AppConsumer;
