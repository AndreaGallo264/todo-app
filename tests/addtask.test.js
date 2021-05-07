import { Selector, ClientFunction } from "testcafe";

//prettier-ignore
fixture `Tasks suite`.page `http://localhost:3000/`;
const addTaskBtn = Selector("footer button");
const getLocation = ClientFunction(() => document.location.href);

test("Add a task scenario", async (t) => {
  await t
    .click(addTaskBtn)
    .typeText(Selector("input[name='task']"), "New Task")
    .click("input[name='dueDate']")
    .pressKey("ctrl+a delete")
    .typeText(Selector("input[name='dueDate']"), "2021-12-01")
    .click(Selector("button[type='submit'"))
    .expect(getLocation())
    .contains("new");
});
