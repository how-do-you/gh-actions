const core = require('@actions/core');
const cargo = require('./src/cargo');

(async function () {
    try {
        const script_to_run = core.getInput('script');
        if (script_to_run === "cargo") {
            await cargo.run();
        }
    } catch (error) {
        core.setFailed(error.message);
    }
})()
