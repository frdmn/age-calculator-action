# age-calculator-action

[![](https://github.com/frdmn/age-calculator-action/workflows/Test%20action/badge.svg)](https://github.com/frdmn/age-calculator-action/actions?query=workflow%3A%22Test+action%22)

GitHub Action to calculate the age in years of a given date string for further use.

## Inputs

### `date`

**Required** Date to calculate age in _YYYY/MM/DD_ format.

## Outputs

### `age`

The age in years.

## Usage

```yaml
- uses: frdmn/age-calculator-action@v1.1
  id: birthday
  with:
    date: '1991-08-17'
```

You can then make use of the `${{ steps.birthday.outputs.age }}` variable (which would return `29` in the example above) in additional action steps.

## Contributing

1. Fork it
2. Create your feature branch:

    ```shell
    git checkout -b feature/my-new-feature
    ```

3. Commit your changes:

    ```shell
    git commit -am 'Add some feature'
    ```

4. Push to the branch:

    ```shell
    git push origin feature/my-new-feature
    ```

5. Submit a pull request

## License

[MIT](LICENSE)
