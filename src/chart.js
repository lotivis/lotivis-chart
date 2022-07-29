import * as d3 from "d3";
import { attributable } from "./attributable.js";
import { DataController } from "lotivis-data";

export default function (attr) {
  if (!attr) throw new Error("no attr passed");

  // private attributes
  let chart = {};

  if (!attr.id) {
    attr.id = "chart-" + new Date().getTime();
  }

  if (!attr.selector) {
    attr.selector = "ltv-chart";
  }

  if (!attr.debug) {
    attr.debug = false;
  }

  attributable(chart, attr);

  // private

  function filterWillChange(sender, filterName, action, item) {
    console.log(
      "[lotivis-chart]  ",
      sender ? sender.id() : null,
      "filterWillChange",
      filterName,
      action,
      item
    );
  }

  function filterDidChange(sender, filterName, action, item) {
    console.log(
      "[lotivis-chart]  ",
      sender ? sender.id() : null,
      "filterDidChange",
      filterName,
      action,
      item
    );
    if (sender === chart) return console.log(attr.id, "is sender");
    if (chart.skipFilterUpdate(filterName, action, item))
      return console.log(attr.id, "skip filter update", filterName);
    return chart.run();
  }

  function dataWillChange(sender, filterName, action, item) {
    console.log(
      "[lotivis-chart]  dataWillChange",
      sender ? sender.id() : null,
      filterName,
      action,
      item
    );
  }

  function dataDidChange(sender, filterName, action, item) {
    console.log(
      "[lotivis-chart]  dataDidChange",
      sender ? sender.id() : null,
      filterName,
      action,
      item
    );
    return chart.run();
  }

  // public

  // override existing function
  chart.id = function () {
    return attr.id;
  };

  chart.dataController = function (dc) {
    if (!arguments.length) {
      return attr.dataController;
    }

    // if (!(dc instanceof DataController)) {
    //   throw new Error("not a controller: " + dc);
    // }

    // remove callback from existing controller
    if (attr.dataController) {
      attr.dataController.onFilterWillChange(chart.id(), null);
      attr.dataController.onFilterDidChange(chart.id(), null);
      attr.dataController.onDataWillChange(chart.id(), null);
      attr.dataController.onDataDidChange(chart.id(), null);
    }

    attr.dataController = dc;

    if (attr.dataController) {
      // attr.dataController.onFilter(chart.id(), filterUpdate);
      attr.dataController.onFilterWillChange(chart.id(), filterWillChange);
      attr.dataController.onFilterDidChange(chart.id(), filterDidChange);
      attr.dataController.onDataWillChange(chart.id(), dataWillChange);
      attr.dataController.onDataDidChange(chart.id(), dataDidChange);
    }

    return chart;
  };

  chart.skipFilterUpdate = function (filter, action, item) {
    return false;
  };

  chart.margin = function (_) {
    if (!arguments.length) {
      return {
        left: attr.marginLeft,
        top: attr.marginTop,
        right: attr.marginRight,
        bottom: attr.marginBottom,
      };
    }
    if (_ && _["left"]) this.attr({ marginLeft: _["left"] });
    if (_ && _["top"]) this.attr({ marginTop: _["top"] });
    if (_ && _["right"]) this.attr({ marginRight: _["right"] });
    if (_ && _["bottom"]) this.attr({ marginBottom: _["bottom"] });
    return chart;
  };

  // life cycle

  chart.dataView = function () {
    return attr.dataController ? { data: attr.dataController.data() } : {};
  };

  chart.clear = function (container, calc, dataView) {
    return container.selectAll("*").remove(), this;
  };

  chart.render = function (container, calc, dataView) {
    return this;
  };

  chart.run = function (dc) {
    if (dc) chart.dataController(dc);
    else dc = attr.dataController;

    if (!dc) throw new Error("no data controller");

    if (!attr.selector) throw new Error("no selector");

    let selection = d3.selectAll(attr.selector);
    if (selection.size() === 0)
      throw new Error("empty selection: " + attr.selector);

    console.time("dataView " + attr.id);
    let dv = chart.dataView(dc);
    console.timeEnd("dataView " + attr.id);

    selection.each(function scope() {
      // receive container
      let container = d3.select(this),
        calc = {};

      chart.clear(container, calc, dv);
      chart.render(container, calc, dv);
    });

    return chart;
  };

  // return generated chart
  return chart;
}
