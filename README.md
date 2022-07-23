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

Returns the charts id.

#### chart.**[dataController](./src/chart.js)**(_)

Gets or sets the data controller.

#### chart.**[margin](./src/chart.js)**(_)

Gets or sets a margins object of the chart.

#### chart.**[skipFilterUpdate](./src/chart.js)**(filter, action, item)

Returns whether this chart should rerender for a change of the specified `filter`. Default implementation returns `false`.

#### chart.**[dataView](./src/chart.js)**()

Calculates and returns the data view for a bar chart from the passed data controller.

#### chart.**[clear](./src/chart.js)**(container, calc, dataView)

Clears the content of the passed container. May be overriden by extending charts. Default implementation selects and removes everything (`"*"`) from the conainter.

#### chart.**[render](./src/chart.js)**(container, calc, dataView)

Renders the chart in the passed container. **Should** be overriden by extending charts. Default implementation does nothing and only returns the chart itself.

#### chart.**[run](./src/chart.js)**()

Runs the render chain. For each selected element by the selector of the chart.

#### chart.**[attr](./src/chart.js)**()

## Development`

```bash
# build module
yarn build

# develop module
yarn build:watch
```