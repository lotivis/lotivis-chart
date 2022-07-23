# lotivis-chart [![Node.js CI](https://github.com/lukasdanckwerth/lotivis-chart/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/lukasdanckwerth/lotivis-chart/actions/workflows/node.js.yml)

Base chart for lotivis.js.

## Installing

If you use npm, `npm install lotivis-chart`. You can also download the [latest realease on GitHub](https://github.com/lukasdanckwerth/lotivis-chart/releases/latest). For using in browsers, you can load the UMD bundle from an npm-based CDN such as jsDelivr.

```html
<script src="https://cdn.jsdelivr.net/..."></script>
<script>

let dataController = lotivis.dataController();

</script>

```

## API Reference

#### chart.**[id](./src/chart.js)**()

#### chart.**[attr](./src/chart.js)**()

#### chart.**[skipFilterUpdate](./src/chart.js)**()

#### chart.**[dataController](./src/chart.js)**()

#### chart.**[margin](./src/chart.js)**()

#### chart.**[dataView](./src/chart.js)**()

#### chart.**[clear](./src/chart.js)**()

#### chart.**[render](./src/chart.js)**()

#### chart.**[run](./src/chart.js)**()

#### chart.**[attr](./src/chart.js)**()

## Development`

```bash
# build module
yarn build

# develop module
yarn build:watch
```