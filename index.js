const core = require('@actions/core');
const cargo = require('./src/cargo');

try {
    const script_to_run = core.getInput('script');
    if (script_to_run === "cargo") {
        cargo.run();
    }
} catch (error) {
    core.setFailed(error.message);
}
