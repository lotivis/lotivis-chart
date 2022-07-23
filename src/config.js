import { GERMAN_NUMBER_FORMAT } from "./formats.js";

export const config = {
  /**
   * A Boolean value indicating whether the debug logging is enabled
   */
  debug: false,

  /**
   * The default margin to use for charts
   */
  defaultMargin: 60,

  /**
   * The default offset for the space between an object an the toolbar
   */
  tooltipOffset: 7,

  /**
   *  The default radius to use for bars drawn on a chart
   */
  barRadius: 0,

  /**
   * The opacity to use for selection.
   */
  selectionOpacity: 0.1,

  /**
   * A string which is used as prefix for download.
   */
  downloadFilePrefix: "ltv",

  /**
   * A string which is used as separator between components when creating a file name.
   */
  filenameSeparator: "-",

  /**
   * The default number formatter used by all charts.
   */
  numberFormat: GERMAN_NUMBER_FORMAT,

  /** A Boolean value indicating whether logging of third party libraries is enabled */
  thidPartyLogging: false,

  /**
   * Default background color of charts.
   */
  chartsBackgroundColor: "white",

  /**
   * Default axis color of charts.
   */
  chartsAxisColor: "lightgrey",

  chartsAxisStrokeWidth: "1",
};

/**
 * Gets or sets whethter lotivis is in debug mode.
 * @param {Boolean} enabled Enable debug logging
 */
export function debug(...args) {
  if (!arguments.length) {
    return config.debug;
  } else if (arguments.length === 1 && typeof args[0] === "boolean") {
    config.debug = args[0];
  } else if (config.debug) {
    console.log("[ltv] ", ...args);
  }
}
