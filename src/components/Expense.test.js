import React from "react";
import { render, screen } from "@testing-library/react";
import Expense from "./Expense";
import { Provider } from "react-redux";
import store from "../Store";
import { useDispatch } from 'react-redux';
import userEvent from "@testing-library/user-event";
import { expenseActions } from '../Store/ExpenseReducer';

describe("Expense component", () => {
  test("renders Edit button", () => {
    render(
      <Provider store={store}>
        <Expense
          item={{
            category: "wait what",
            description: "Description",
            expense: 100,
            id: 1,
          }}
        />
      </Provider>
    );
    const editButton = screen.getByText("Edit");
    expect(editButton).toBeInTheDocument();
  });

  test("renders Delete button", () => {
    render(
      <Provider store={store}>
        <Expense
          item={{
            category: "Category",
            description: "Description",
            expense: 100,
            id: 1,
          }}
        />
      </Provider>
    );
    const deleteButton = screen.getByText("Delete");
    expect(deleteButton).toBeInTheDocument();
  });
  test("verifying the delete button", async () => {
    render(
      <Provider store={store}>
        <Expense
          item={{
            category: "Category",
            description: "Description",
            expense: 100,
            id: 1,
          }}
        />
      </Provider>
    );
    const deleteButton = screen.getByText("Delete");
    
    userEvent.click(deleteButton);
    const ele = screen.getByText("Category");
   
    expect(ele).toBeInTheDocument();
  });
  test("verifying the delete button", async () => {
    render(
      <Provider store={store}>
        <Expense
          item={{
            category: "Category",
            description: "Description",
            expense: 100,
            id: 1,
          }}
        />
      </Provider>
    );
    const deleteButton = screen.getByText("Delete");
    
    userEvent.click(deleteButton);
    const ele = screen.getByText("Category");
   
    expect(ele).toBeInTheDocument();
  });
});
describe('Expense component', () => {
    test('calls deleteTheExpense when "Delete" button is clicked', () => {
      const item = {
        category: 'Category',
        description: 'Description',
        expense: 100,
        id: 1,
      };
      render(<Provider store={store}><Expense item={item} /></Provider>);
      const deleteButton = screen.getByText('Delete');
      global.fetch = jest.fn().mockResolvedValue({ ok: true });
      userEvent.click(deleteButton);
      expect(fetch).toHaveBeenCalled();
    });
  });