# Mathlive issue templates

## Scaffolding reproducible Mathlive Issues

> **Compatibility Note:**
> We use Vite as our bundle manager, and it requires [Node.js](https://nodejs.org/en/) version >=12.0.0.

With Yarn:

```bash
$ git clone --depth 1 https://github.com/cortex-js/mathlive-bug-issue-templates mathlive-xxx-bug
$ cd mathlive-xxx-bug
$ yarn

# pick, which template suits you more and try to reproduce your bug / issue there
$ cd templates/template-react

# will start the development server, listening on localhost:3000
$ yarn dev
```

When done, push to Github and post the URL to your repository in the issue description.
A reproducible issue increases the chance to fix it significantly!

### Currently supported template presets

- `vanilla`
- `vanilla-ts`
- `react`
- `react-ts`

### Not yet implemented:

- `vue`
- `vue-ts`
