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

### Chart

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

### Config

The lotivis config is available through the `config` field of lotivs.

```
lotivis.config.defaultMargin = 25;
lotivis.config.chartsBackgroundColor = "pink";
lotivis.config.tooltipOffset = 5;
```

|Name|Type|Descriptiopn| Default |
| - | - | - | - |
| `debug` | `bool` | Enabled debug messages. | `false` |
| `defaultMargin` | `number` | The default margin to use for charts. | `60` |
| `tooltipOffset` | `number` | The default offset for the space between an object an the toolbar. | `7` |
| `barRadius` | `number` | The default radius to use for bars drawn on a chart. | `0` |
| `selectionOpacity` | `number` | The opacity to use for selection. | `0.1` |
| `downloadFilePrefix` | `string` | A string which is used as prefix for download. | `"ltv"` |
| `filenameSeparator` | `string` | A string which is used as separator between components when creating a file name. | `"-"` |
| `numberFormat` | `NumberFormatter` | The default number formatter used by all charts. | `GERMAN_NUMBER_FORMAT` |
| `chartsBackgroundColor` | `string` | Default background color of charts. | `"white"` |
| `chartsAxisColor` | `string` | Default axis color of charts. | `"lightgrey"` |
| `chartsAxisStrokeWidth` | `string` | | `"1"` |


## Development`

```bash
# build module
yarn build

# develop module
yarn build:watch
```