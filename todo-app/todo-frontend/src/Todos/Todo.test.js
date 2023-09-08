import React from 'react';
import { render } from '@testing-library/react';
import Todo from './Todo';

describe('Todo component', () => {

  const mockTodoNotDone = {
    _id: '1',
    text: 'This should not be done',
    done: false,
  };

  it('render works', () => {
    render(<Todo todo={mockTodoNotDone} onClickComplete={() => {}} onClickDelete={() => {}} />);
  });

  it('displays the todo text', () => {
    const { getByText } = render(<Todo todo={mockTodoNotDone} onClickComplete={() => {}} onClickDelete={() => {}} />);
    expect(getByText('This should not be done')).toBeInTheDocument();
  });
});

