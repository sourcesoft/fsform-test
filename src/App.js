import React from 'react';
import ExampleWrapper from './ExampleWrapper';
import './App.css';

import fsform from 'fsform';
import {
  Provider,
  PersistGate,
  App,
  Form,
  FieldShortAnswer,
} from 'fsform/lib/react';
import control from 'fsform/lib/control';

console.log(fsform);

// Full control
const state = control();

class Main extends React.Component {
  componentDidMount() {
    // Bootstrap helper
    // fsform.render(document.getElementById('fsform-container'));
  }
  handleSubmit = () => {
    state.submit();
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ExampleWrapper>
            <div>First usage:</div>
            <Provider store={state.store}>
              <PersistGate loading={null} persistor={state.persistor}>
                <App formId={34245}>
                  <Form />
                </App>
                <App formId={224}>
                  <Form />
                </App>
              </PersistGate>
            </Provider>
          </ExampleWrapper>

          <ExampleWrapper>
            <div>Second usage:</div>
            <Provider store={state.store}>
              <PersistGate loading={null} persistor={state.persistor}>
                <App formId={412}>
                  <div>Printing only one field</div>
                  <FieldShortAnswer />
                  <input type="submit" onClick={this.handleSubmit} />
                </App>
              </PersistGate>
            </Provider>
          </ExampleWrapper>

          <ExampleWrapper>
            <div>Third usage:</div>
            <div id="fsform-container" />
          </ExampleWrapper>
        </header>
      </div>
    );
  }
}

export default Main;
