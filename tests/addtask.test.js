import { Selector } from "testcafe";

//prettier-ignore
fixture `Tasks suite`.page `http://localhost:3000/`;

//Selectors
const addTaskBtn = Selector("footer button");
const taskInput = Selector("input[name='task']");
const calendarInput = Selector("input[name='dueDate']");
const newTaskCreated = Selector("ul div:last-child span");

test("Add a task scenario", async (t) => {
  await t
    .click(addTaskBtn)
    .typeText(taskInput, "New Task")
    .click(calendarInput)
    .pressKey("ctrl+a delete")
    .typeText(calendarInput, "2021-12-01")
    .pressKey("enter")
    .expect(newTaskCreated.with({ visibilityCheck: true }).innerText)
    .contains("New Task");
});
