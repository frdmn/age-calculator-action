# age-calculator-action

[![](https://github.com/frdmn/age-calculator-action/workflows/Test%20action/badge.svg)](https://github.com/frdmn/age-calculator-action/actions?query=workflow%3A%22Test+action%22)

GitHub Action to calculate the age in years of a given date string for further use.

## Inputs

### `date`

**Required** Date to calculate age in _YYYY-MM-DD_ (or _YYYY/MM/DD_) format. The action fails if the date is missing or invalid.

## Outputs

### `age`

The age in years.

## Usage

```yaml
- uses: frdmn/age-calculator-action@v2
  id: birthday
  with:
    date: '1991-08-17'
```

You can then make use of the `${{ steps.birthday.outputs.age }}` variable (which would return `35` in the example above, as of 2026) in additional action steps.

## Development

The action is written as an ES module in `index.js` and bundled into `dist/` with [`@vercel/ncc`](https://github.com/vercel/ncc). GitHub runs `dist/index.js` (see `action.yml`) directly from the repository, without installing dependencies, so `dist/` **must be committed**.

Requirements: Node.js 24 (the runtime the action runs on) and npm.

### Setup

```shell
npm install
```

### Run locally

The action reads its inputs from `INPUT_*` environment variables and writes outputs to the file in `GITHUB_OUTPUT`. Pointing that at `/dev/stdout` prints the output:

```shell
INPUT_DATE=1991-08-17 GITHUB_OUTPUT=/dev/stdout node index.js
```

To test the bundle exactly as GitHub runs it, use `dist/index.js` instead:

```shell
INPUT_DATE=1991-08-17 GITHUB_OUTPUT=/dev/stdout node dist/index.js
```

An invalid date such as `INPUT_DATE=garbage` prints an `::error::` line and exits with code 1.

### Build `dist/`

After changing `index.js` or the dependencies, rebuild the bundle and commit the result together with your change:

```shell
npm run build
git add dist
```

### Test in CI

The [Test action](.github/workflows/test.yml) workflow checks out the repository and runs the action from the checkout (`uses: ./`), so pushes and pull requests test the code from that branch.

## Contributing

1. Fork it
2. Create your feature branch:

    ```shell
    git checkout -b feature/my-new-feature
    ```

3. Make your changes, then rebuild and commit `dist/` (see [Development](#development)):

    ```shell
    npm run build
    ```

4. Commit your changes:

    ```shell
    git commit -am 'Add some feature'
    ```

5. Push to the branch:

    ```shell
    git push origin feature/my-new-feature
    ```

6. Submit a pull request

## License

[MIT](LICENSE)
