import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import TP6 from '../../src/quantum/TP6';
import { timePickers } from '../../src/utils/timePickers';

it('renders correctly url', () => {
  timePickers.mock();

  const tree = renderer
    .create(
      <MemoryRouter
        initialEntries={['/quantum/tp6?bits=64&test=warm-loadtime']}
        initialIndex={0}
      >
        <TP6 />
      </MemoryRouter>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
