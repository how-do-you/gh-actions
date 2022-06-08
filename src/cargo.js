const fs = require("fs");
const path = require("path");

const core = require("@actions/core");


async function* walk(dir) {
    for await (const d of await fs.promises.opendir(dir)) {
        const entry = path.join(dir, d.name);
        if (d.isDirectory()) yield* walk(entry);
        else if (d.isFile()) yield entry;
    }
}

exports.run = async () => {
    core.setOutput("version", "0.0.0");
    for await (const p of walk('.')) {
        console.log(p)
    }
}
