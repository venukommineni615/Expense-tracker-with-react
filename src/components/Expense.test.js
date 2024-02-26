import React from 'react';
import { render, screen } from '@testing-library/react';
import Expense from './Expense';
import { Provider } from 'react-redux';
import store from '../Store';

describe('Expense component', () => {
  test('renders Edit button', () => {
    render(
      <Provider store={store}>
        <Expense item={{ category: 'wait what', description: 'Description', expense: 100, id: 1 }} />
      </Provider>
    );
    const editButton = screen.getByText('Edit');
    expect(editButton).toBeInTheDocument();
  });

  test('renders Delete button', () => {
    render(
      <Provider store={store}>
        <Expense item={{ category: 'Category', description: 'Description', expense: 100, id: 1 }} />
      </Provider>
    );
    const deleteButton = screen.getByText('Delete');
    expect(deleteButton).toBeInTheDocument();
  });

});
