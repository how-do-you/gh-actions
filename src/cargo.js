const core = require("@actions/core");
//const github = require("@actions/github");

core.setOutput("version", "0.0.0");

// Get the JSON webhook payload for the event that triggered the workflow
// const payload = JSON.stringify(github.context.payload, undefined, 2)
// console.log(`The event payload: ${payload}`);
