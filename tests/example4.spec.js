import { test } from '@playwright/test';
import { TodoPage } from './todo-page';

test.describe('todo tests', () => {
  let todoPage;

  test.beforeEach(async ({ page }) => {
    // Initialize the TodoPage object and navigate to the page
    todoPage = new TodoPage(page);
    await todoPage.goto();

    // Add initial items to the to-do list
    await todoPage.addToDo('item1');
    await todoPage.addToDo('item2');
  });

  test.afterEach(async () => {
    // Remove all items after each test
    await todoPage.removeAll();
  });

  test('should add an item', async () => {
    // Add a new item to the to-do list
    await todoPage.addToDo('my item');
    // Verify the item was added
    const items = await todoPage.getItems();
    await test.expect(items).toContain('my item');
  });

  test('should remove an item', async () => {
    // Remove an item from the to-do list
    await todoPage.remove('item1');
    // Verify the item was removed
    const items = await todoPage.getItems();
    await test.expect(items).not.toContain('item1');
  });

  test('should mark an item as completed', async () => {
    // Mark an item as completed
    await todoPage.markAsCompleted('item2');
    // Verify the item is marked as completed
    const isCompleted = await todoPage.isCompleted('item2');
    await test.expect(isCompleted).toBe(true);
  });
});