# how-do-you/gh-actions

This action is a collection of utility scripts, primarily meant to get values from files and make them available as
outputs for later workflow steps.

## Inputs

### `script`

**Required** The script to run. Possible values are:

- cargo

## `cargo` script

Tries to find a `Cargo.toml` file that contains a `package` section. It reads it and outputs the `version` and `name`
fields to be used by later workflow steps. More values are planned to be made available.

### Outputs

- Cargo name: `${{steps.cargo.outputs.name}}`
- Cargo version: `${{steps.cargo.outputs.version}}`

### Example usage

```
- name: Get Cargo variables
  uses: how-do-you/gh-actions@v0
  with:
    script: 'cargo'
- name: Print Cargo version
  run: echo "Version: ${{ steps.cargo.outputs.version }}"  
```
