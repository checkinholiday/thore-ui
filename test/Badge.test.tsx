import React from 'react';
import * as ReactDOM from 'react-dom';
import { Badge } from '../src/components/Badge/Badge';

describe('Badge', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Badge text="Badge" type="primary" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
