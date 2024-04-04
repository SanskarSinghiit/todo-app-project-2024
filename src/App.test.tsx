import { describe, expect, test } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('App', () => {
  test('should render input field and add button', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Add Task');
    const button = screen.getByText('+');

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('should add task to list when add button is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);

    const input = screen.getByPlaceholderText('Add Task');
    const button = screen.getByText('+');

    await user.type(input, 'New Task');
    await user.click(button);

    await waitFor(() => {
      expect(screen.getByText('New Task')).toBeInTheDocument();
    });
  });

  test('should edit task when edit button is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);

    const input = screen.getByPlaceholderText('Add Task');
    const addButton = screen.getByText('+');

    await user.type(input, 'Task to Edit');
    await user.click(addButton);

    const editButton = screen.getByRole('button', { name: 'edit' });
    await user.click(editButton);

    const saveButton = screen.getByText('Save');
    await user.clear(input);
    await user.type(input, 'Updated Task');
    await user.click(saveButton);

    await waitFor(() => {
      expect(screen.getByText('Updated Task')).toBeInTheDocument();
    });
  });

  test('should delete task when delete button is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);

    const input = screen.getByPlaceholderText('Add Task');
    const addButton = screen.getByText('+');

    await user.type(input, 'Task to Delete');
    await user.click(addButton);

    const deleteButton = screen.getByRole('button', { name: 'delete' });
    await user.click(deleteButton);

    await waitFor(() => {
      expect(screen.queryByText('Task to Delete')).not.toBeInTheDocument();
    });
  });
});
