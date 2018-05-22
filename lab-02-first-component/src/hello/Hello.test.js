import React from 'react';
import { shallow } from 'enzyme';

import Hello from './Hello';
import renderer from 'react-test-renderer';

describe('Hello World:', () => {

  it('renders without exploding', () => {
    expect(shallow(<Hello />)).toHaveLength(1);
  });

  it('should render with default text', () => {
    const component = shallow(<Hello />);

    expect(component).toIncludeText('Howdy');
    expect(component).toIncludeText('Partner');
  });

  it('should render with our props', () => {
    const component = shallow(<Hello friend="Bob" />);

    expect(component).toIncludeText('Howdy');
    expect(component).toIncludeText('Bob');
    expect(component).not.toIncludeText('Partner');
  });

});

it('should render to match the snapshot', () => {
  const component = renderer.create(<Hello friend="Bob" />);

  expect(component.toJSON()).toMatchSnapshot();
});