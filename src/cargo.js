const fs = require("fs");
const path = require("path");

const core = require("@actions/core");
const toml = require('toml')

async function* walk(dir) {
    for await (const d of await fs.promises.opendir(dir)) {
        const entry = path.join(dir, d.name);
        if (d.isDirectory()) yield* walk(entry); else if (d.isFile()) yield entry;
    }
}

exports.run = async () => {
    console.log('Running Cargo script')
    let cargo_path = null
    for await (const p of walk('.')) {
        if (p.includes("Cargo.toml")) {
            const buffer = fs.readFileSync(p);
            const toml_file = toml.parse(buffer.toString())
            if ('package' in toml_file) {
                cargo_path = p
                break
            }
        }
    }
    if (cargo_path === null) {
        core.setFailed(error.message);
        return false
    }
    console.log("Parsing: ", cargo_path)
    const buffer = fs.readFileSync(cargo_path);
    const toml_file = toml.parse(buffer.toString())
    core.setOutput('name', toml_file.package.name);
    core.setOutput('version', toml_file.package.version);
}
