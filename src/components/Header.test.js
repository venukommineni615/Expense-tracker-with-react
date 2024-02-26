import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './Header';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('Header component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      expense: {
        totalExpense:10000,
        items: [],
      },
      theme: {
        theme: 'light',
        color: 'black',
      },
    });
  });

  test('renders Log out button and Expense Tracker heading', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );
    const logoutButton = screen.getByText('Log out');
    expect(logoutButton).toBeInTheDocument();
    
  });

  test('renders Expense Tracker heading', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );
   
    const heading = screen.getByText('Expense Tracker');
    expect(heading).toBeInTheDocument();
  });
  test('renders activate premium button', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );
   
    const heading = screen.getByText('Activate Premium');
    expect(heading).toBeInTheDocument();
  });
});
