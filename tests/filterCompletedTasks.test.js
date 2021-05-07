import { Selector } from "testcafe";

//prettier-ignore
fixture `Tasks suite`.page `http://localhost:3000/`;

//Selectors
const filterBtn = Selector("header > div > button");
const completedTask = Selector("ul > div.Mui-selected");
const noTasksText = Selector("ul > div > p");

test("Filter completed tasks", async (t) => {
  await t.click(filterBtn).expect(completedTask.exists).notOk();
  const pendingTasks = Selector("ul > div");
  var count = await pendingTasks.count;
  for (var i = 0; i < count; i++) await t.click(pendingTasks.nth(i));
  await t
    .click(filterBtn)
    .expect(noTasksText.innerText)
    .contains("You have no tasks");
});
