import inquier from "inquirer";

let exit = false;
while (!exit) {
  const answer = await inquier.prompt({
    name: "consoleRunner",
    type: "list",
    message: "Which console-runner do you want to run?",
    choices: ["create-admin", "exit"],
  });

  if (answer.consoleRunner !== "exit") {
    const { run } = await import(`./${answer.consoleRunner}.runner.js`);
    await run();
  } else {
    exit = true;
  }
}
