/*!
 * West Coast Charts option validator v1.1.2
 * (c) 2026 West Coast Software - MIT License
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.WestCoastChartsValidate = factory());
})(this, (function () { 'use strict';

  /*
   * West Coast Charts - used by the side-effect entries (import
   * 'west-coast-charts/types/gauge', script tags): installs the plugin into
   * the core loaded on the page, or parks it until the core loads. Works for
   * ES modules, CommonJS and script tags alike, without the plugin bundle
   * importing (and duplicating) the core.
   * Copyright (c) 2026 West Coast Software - MIT License
   */
  function autoInstall(plugin) {
    const g = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : {};
    if (typeof g.__wccInstallFeature === 'function') {
      g.__wccInstallFeature(plugin);
    } else {
      (g.__wccPendingFeatures = g.__wccPendingFeatures || []).push(plugin);
    }
    return plugin;
  }

  const type = "object";
  const properties = {
  	annotations: {
  		$ref: "#/$defs/ApexAnnotations"
  	},
  	chart: {
  		type: "object",
  		properties: {
  			licenseKey: {
  				type: "string"
  			},
  			readability: {
  				anyOf: [
  					{
  						type: "string",
  						"enum": [
  							"none",
  							"halo",
  							"pill",
  							"auto",
  							"hide"
  						]
  					},
  					{
  						type: "boolean"
  					},
  					{
  						type: "object",
  						properties: {
  							mode: {
  								type: "string",
  								"enum": [
  									"none",
  									"halo",
  									"pill",
  									"auto",
  									"hide"
  								]
  							},
  							fallback: {
  								type: "string",
  								"enum": [
  									"halo",
  									"pill",
  									"hide"
  								]
  							},
  							enabled: {
  								type: "boolean"
  							},
  							contrast: {
  								type: "boolean"
  							},
  							minRatio: {
  								type: "number"
  							},
  							light: {
  								type: "string"
  							},
  							dark: {
  								type: "string"
  							},
  							background: {
  								type: "string"
  							},
  							halo: {
  								type: "object",
  								properties: {
  									width: {
  										type: "number"
  									},
  									color: {
  										type: "string"
  									},
  									opacity: {
  										type: "number"
  									},
  									blur: {
  										type: "number"
  									}
  								},
  								additionalProperties: false
  							},
  							pill: {
  								type: "object",
  								properties: {
  									fill: {
  										type: "string"
  									},
  									opacity: {
  										type: "number"
  									},
  									radius: {
  										type: "number"
  									},
  									padding: {
  										anyOf: [
  											{
  												type: "number"
  											},
  											{
  												type: "array",
  												prefixItems: [
  													{
  														type: "number"
  													},
  													{
  														type: "number"
  													}
  												],
  												minItems: 2,
  												maxItems: 2
  											}
  										]
  									},
  									stroke: {
  										type: "string"
  									},
  									strokeWidth: {
  										type: "number"
  									},
  									offset: {
  										type: "array",
  										prefixItems: [
  											{
  												type: "number"
  											},
  											{
  												type: "number"
  											}
  										],
  										minItems: 2,
  										maxItems: 2
  									}
  								},
  								additionalProperties: false
  							},
  							shadow: {
  								anyOf: [
  									{
  										type: "boolean"
  									},
  									{
  										type: "object",
  										properties: {
  											dx: {
  												type: "number"
  											},
  											dy: {
  												type: "number"
  											},
  											blur: {
  												type: "number"
  											},
  											color: {
  												type: "string"
  											},
  											opacity: {
  												type: "number"
  											}
  										},
  										additionalProperties: false
  									}
  								]
  							},
  							raise: {
  								type: "boolean"
  							},
  							each: {
  								"x-wcc-type": "function"
  							}
  						},
  						additionalProperties: false
  					}
  				]
  			},
  			accessibility: {
  				$ref: "#/$defs/WccChartAccessibility"
  			},
  			width: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "number"
  					}
  				]
  			},
  			height: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "number"
  					}
  				]
  			},
  			type: {
  				type: "string",
  				"enum": [
  					"line",
  					"area",
  					"bar",
  					"pie",
  					"donut",
  					"radialBar",
  					"scatter",
  					"bubble",
  					"heatmap",
  					"candlestick",
  					"boxPlot",
  					"radar",
  					"polarArea",
  					"rangeBar",
  					"rangeArea",
  					"treemap",
  					"gauge",
  					"funnel",
  					"pyramid",
  					"waterfall",
  					"dumbbell",
  					"beeswarm",
  					"histogram",
  					"violin",
  					"raincloud",
  					"sunburst",
  					"icicle",
  					"streamgraph",
  					"unit",
  					"waffle",
  					"slope",
  					"barRace",
  					"calendar",
  					"sankey",
  					"chord",
  					"gantt",
  					"tree",
  					"stock",
  					"map",
  					"marimekko",
  					"network",
  					"radialColumn",
  					"quintTimeline",
  					"quintConvergence",
  					"vitalsClock",
  					"schedule"
  				]
  			},
  			foreColor: {
  				type: "string"
  			},
  			fontFamily: {
  				type: "string"
  			},
  			background: {
  				type: "string"
  			},
  			offsetX: {
  				type: "number"
  			},
  			offsetY: {
  				type: "number"
  			},
  			dropShadow: {
  				type: "object",
  				properties: {
  					enabled: {
  						type: "boolean"
  					},
  					top: {
  						type: "number"
  					},
  					left: {
  						type: "number"
  					},
  					blur: {
  						type: "number"
  					},
  					opacity: {
  						type: "number"
  					},
  					color: {
  						anyOf: [
  							{
  								type: "string"
  							},
  							{
  								type: "object",
  								properties: {
  									toString: {
  										"x-wcc-type": "function"
  									},
  									charAt: {
  										"x-wcc-type": "function"
  									},
  									charCodeAt: {
  										"x-wcc-type": "function"
  									},
  									concat: {
  										"x-wcc-type": "function"
  									},
  									indexOf: {
  										"x-wcc-type": "function"
  									},
  									lastIndexOf: {
  										"x-wcc-type": "function"
  									},
  									localeCompare: {
  										"x-wcc-type": "function"
  									},
  									match: {
  										"x-wcc-type": "function"
  									},
  									replace: {
  										"x-wcc-type": "function"
  									},
  									search: {
  										"x-wcc-type": "function"
  									},
  									slice: {
  										"x-wcc-type": "function"
  									},
  									split: {
  										"x-wcc-type": "function"
  									},
  									substring: {
  										"x-wcc-type": "function"
  									},
  									toLowerCase: {
  										"x-wcc-type": "function"
  									},
  									toLocaleLowerCase: {
  										"x-wcc-type": "function"
  									},
  									toUpperCase: {
  										"x-wcc-type": "function"
  									},
  									toLocaleUpperCase: {
  										"x-wcc-type": "function"
  									},
  									trim: {
  										"x-wcc-type": "function"
  									},
  									length: {
  										type: "number"
  									},
  									substr: {
  										"x-wcc-type": "function",
  										deprecated: true,
  										"x-wcc-deprecated": "A legacy feature for browser compatibility"
  									},
  									valueOf: {
  										"x-wcc-type": "function"
  									},
  									codePointAt: {
  										"x-wcc-type": "function"
  									},
  									includes: {
  										"x-wcc-type": "function"
  									},
  									endsWith: {
  										"x-wcc-type": "function"
  									},
  									normalize: {
  										"x-wcc-type": "function"
  									},
  									repeat: {
  										"x-wcc-type": "function"
  									},
  									startsWith: {
  										"x-wcc-type": "function"
  									},
  									anchor: {
  										"x-wcc-type": "function",
  										deprecated: true,
  										"x-wcc-deprecated": "A legacy feature for browser compatibility"
  									},
  									big: {
  										"x-wcc-type": "function",
  										deprecated: true,
  										"x-wcc-deprecated": "A legacy feature for browser compatibility"
  									},
  									blink: {
  										"x-wcc-type": "function",
  										deprecated: true,
  										"x-wcc-deprecated": "A legacy feature for browser compatibility"
  									},
  									bold: {
  										"x-wcc-type": "function",
  										deprecated: true,
  										"x-wcc-deprecated": "A legacy feature for browser compatibility"
  									},
  									fixed: {
  										"x-wcc-type": "function",
  										deprecated: true,
  										"x-wcc-deprecated": "A legacy feature for browser compatibility"
  									},
  									fontcolor: {
  										"x-wcc-type": "function",
  										deprecated: true,
  										"x-wcc-deprecated": "A legacy feature for browser compatibility"
  									},
  									fontsize: {
  										"x-wcc-type": "function",
  										deprecated: true,
  										"x-wcc-deprecated": "A legacy feature for browser compatibility"
  									},
  									italics: {
  										"x-wcc-type": "function",
  										deprecated: true,
  										"x-wcc-deprecated": "A legacy feature for browser compatibility"
  									},
  									link: {
  										"x-wcc-type": "function",
  										deprecated: true,
  										"x-wcc-deprecated": "A legacy feature for browser compatibility"
  									},
  									small: {
  										"x-wcc-type": "function",
  										deprecated: true,
  										"x-wcc-deprecated": "A legacy feature for browser compatibility"
  									},
  									strike: {
  										"x-wcc-type": "function",
  										deprecated: true,
  										"x-wcc-deprecated": "A legacy feature for browser compatibility"
  									},
  									sub: {
  										"x-wcc-type": "function",
  										deprecated: true,
  										"x-wcc-deprecated": "A legacy feature for browser compatibility"
  									},
  									sup: {
  										"x-wcc-type": "function",
  										deprecated: true,
  										"x-wcc-deprecated": "A legacy feature for browser compatibility"
  									},
  									padStart: {
  										"x-wcc-type": "function"
  									},
  									padEnd: {
  										"x-wcc-type": "function"
  									},
  									trimEnd: {
  										"x-wcc-type": "function"
  									},
  									trimStart: {
  										"x-wcc-type": "function"
  									},
  									trimLeft: {
  										"x-wcc-type": "function",
  										deprecated: true,
  										"x-wcc-deprecated": "A legacy feature for browser compatibility. Use `trimStart` instead"
  									},
  									trimRight: {
  										"x-wcc-type": "function",
  										deprecated: true,
  										"x-wcc-deprecated": "A legacy feature for browser compatibility. Use `trimEnd` instead"
  									},
  									matchAll: {
  										"x-wcc-type": "function"
  									},
  									"__@iterator@227": {
  										"x-wcc-type": "function"
  									},
  									toLocaleString: {
  										"x-wcc-type": "function"
  									},
  									pop: {
  										"x-wcc-type": "function"
  									},
  									push: {
  										"x-wcc-type": "function"
  									},
  									join: {
  										"x-wcc-type": "function"
  									},
  									reverse: {
  										"x-wcc-type": "function"
  									},
  									shift: {
  										"x-wcc-type": "function"
  									},
  									sort: {
  										"x-wcc-type": "function"
  									},
  									splice: {
  										"x-wcc-type": "function"
  									},
  									unshift: {
  										"x-wcc-type": "function"
  									},
  									every: {
  										"x-wcc-type": "function"
  									},
  									some: {
  										"x-wcc-type": "function"
  									},
  									forEach: {
  										"x-wcc-type": "function"
  									},
  									map: {
  										"x-wcc-type": "function"
  									},
  									filter: {
  										"x-wcc-type": "function"
  									},
  									reduce: {
  										"x-wcc-type": "function"
  									},
  									reduceRight: {
  										"x-wcc-type": "function"
  									},
  									find: {
  										"x-wcc-type": "function"
  									},
  									findIndex: {
  										"x-wcc-type": "function"
  									},
  									fill: {
  										"x-wcc-type": "function"
  									},
  									copyWithin: {
  										"x-wcc-type": "function"
  									},
  									entries: {
  										"x-wcc-type": "function"
  									},
  									keys: {
  										"x-wcc-type": "function"
  									},
  									values: {
  										"x-wcc-type": "function"
  									},
  									flatMap: {
  										"x-wcc-type": "function"
  									},
  									flat: {
  										"x-wcc-type": "function"
  									},
  									"__@unscopables@230": {
  										"x-wcc-type": "__type"
  									}
  								},
  								required: [
  									"toString",
  									"concat",
  									"indexOf",
  									"lastIndexOf",
  									"slice",
  									"length",
  									"valueOf",
  									"includes",
  									"__@iterator@227",
  									"toLocaleString",
  									"__@unscopables@230"
  								],
  								additionalProperties: {
  									type: "string"
  								}
  							}
  						]
  					},
  					enabledOnSeries: {
  						type: "array",
  						items: {
  							type: "number"
  						}
  					}
  				},
  				additionalProperties: false
  			},
  			nonce: {
  				type: "string"
  			},
  			sanitizeHtml: {
  				anyOf: [
  					{
  						type: "boolean"
  					},
  					{
  						"x-wcc-type": "function"
  					}
  				]
  			},
  			events: {
  				type: "object",
  				properties: {
  					animationEnd: {
  						"x-wcc-type": "function"
  					},
  					beforeMount: {
  						"x-wcc-type": "function"
  					},
  					scheduleChange: {
  						"x-wcc-type": "function"
  					},
  					scheduleSelect: {
  						"x-wcc-type": "function"
  					},
  					slotClick: {
  						"x-wcc-type": "function"
  					},
  					scheduleConflict: {
  						"x-wcc-type": "function"
  					},
  					taskChange: {
  						"x-wcc-type": "function"
  					},
  					taskCreate: {
  						"x-wcc-type": "function"
  					},
  					taskDelete: {
  						"x-wcc-type": "function"
  					},
  					historyChange: {
  						"x-wcc-type": "function"
  					},
  					groupToggle: {
  						"x-wcc-type": "function"
  					},
  					dependencyCreate: {
  						"x-wcc-type": "function"
  					},
  					dependencyDelete: {
  						"x-wcc-type": "function"
  					},
  					nodeMove: {
  						"x-wcc-type": "function"
  					},
  					childrenLoad: {
  						"x-wcc-type": "function"
  					},
  					childrenLoadError: {
  						"x-wcc-type": "function"
  					},
  					drilldown: {
  						"x-wcc-type": "function"
  					},
  					drillup: {
  						"x-wcc-type": "function"
  					},
  					drawingChange: {
  						"x-wcc-type": "function"
  					},
  					wccHistoryChange: {
  						"x-wcc-type": "function"
  					},
  					wccOrientChange: {
  						"x-wcc-type": "function"
  					},
  					mounted: {
  						"x-wcc-type": "function"
  					},
  					updated: {
  						"x-wcc-type": "function"
  					},
  					mouseMove: {
  						"x-wcc-type": "function"
  					},
  					mouseLeave: {
  						"x-wcc-type": "function"
  					},
  					click: {
  						"x-wcc-type": "function"
  					},
  					xAxisLabelClick: {
  						"x-wcc-type": "function"
  					},
  					legendClick: {
  						"x-wcc-type": "function"
  					},
  					markerClick: {
  						"x-wcc-type": "function"
  					},
  					selection: {
  						"x-wcc-type": "function"
  					},
  					dataPointSelection: {
  						"x-wcc-type": "function"
  					},
  					dataPointMouseEnter: {
  						"x-wcc-type": "function"
  					},
  					dataPointMouseLeave: {
  						"x-wcc-type": "function"
  					},
  					beforeZoom: {
  						"x-wcc-type": "function"
  					},
  					beforeResetZoom: {
  						"x-wcc-type": "function"
  					},
  					zoomed: {
  						"x-wcc-type": "function"
  					},
  					scrolled: {
  						"x-wcc-type": "function"
  					},
  					brushScrolled: {
  						"x-wcc-type": "function"
  					},
  					keyDown: {
  						"x-wcc-type": "function"
  					},
  					keyUp: {
  						"x-wcc-type": "function"
  					}
  				},
  				additionalProperties: false
  			},
  			brush: {
  				type: "object",
  				properties: {
  					enabled: {
  						type: "boolean"
  					},
  					autoScaleYaxis: {
  						type: "boolean"
  					},
  					target: {
  						type: "string"
  					},
  					targets: {
  						type: "array",
  						items: {
  							type: "string"
  						}
  					}
  				},
  				additionalProperties: false
  			},
  			id: {
  				type: "string"
  			},
  			group: {
  				type: "string"
  			},
  			locales: {
  				type: "array",
  				items: {
  					$ref: "#/$defs/ApexLocale"
  				}
  			},
  			defaultLocale: {
  				type: "string"
  			},
  			parentHeightOffset: {
  				type: "number"
  			},
  			redrawOnParentResize: {
  				type: "boolean"
  			},
  			redrawOnWindowResize: {
  				anyOf: [
  					{
  						type: "boolean"
  					},
  					{
  						"x-wcc-type": "Function"
  					}
  				]
  			},
  			sparkline: {
  				type: "object",
  				properties: {
  					enabled: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			stacked: {
  				type: "boolean"
  			},
  			stackType: {
  				type: "string",
  				"enum": [
  					"normal",
  					"100%"
  				]
  			},
  			stackOnlyBar: {
  				type: "boolean"
  			},
  			toolbar: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					},
  					offsetX: {
  						type: "number"
  					},
  					offsetY: {
  						type: "number"
  					},
  					tools: {
  						type: "object",
  						properties: {
  							download: {
  								anyOf: [
  									{
  										type: "boolean"
  									},
  									{
  										type: "string"
  									}
  								]
  							},
  							selection: {
  								anyOf: [
  									{
  										type: "boolean"
  									},
  									{
  										type: "string"
  									}
  								]
  							},
  							zoom: {
  								anyOf: [
  									{
  										type: "boolean"
  									},
  									{
  										type: "string"
  									}
  								]
  							},
  							zoomin: {
  								anyOf: [
  									{
  										type: "boolean"
  									},
  									{
  										type: "string"
  									}
  								]
  							},
  							zoomout: {
  								anyOf: [
  									{
  										type: "boolean"
  									},
  									{
  										type: "string"
  									}
  								]
  							},
  							pan: {
  								anyOf: [
  									{
  										type: "boolean"
  									},
  									{
  										type: "string"
  									}
  								]
  							},
  							reset: {
  								anyOf: [
  									{
  										type: "boolean"
  									},
  									{
  										type: "string"
  									}
  								]
  							},
  							customIcons: {
  								type: "array",
  								items: {
  									type: "object",
  									properties: {
  										icon: {
  											type: "string"
  										},
  										title: {
  											type: "string"
  										},
  										index: {
  											type: "number"
  										},
  										"class": {
  											type: "string"
  										},
  										click: {
  											"x-wcc-type": "function"
  										}
  									},
  									additionalProperties: false
  								}
  							}
  						},
  						additionalProperties: false
  					},
  					"export": {
  						type: "object",
  						properties: {
  							csv: {
  								type: "object",
  								properties: {
  									filename: {
  										type: "string"
  									},
  									columnDelimiter: {
  										type: "string"
  									},
  									headerCategory: {
  										type: "string"
  									},
  									headerValue: {
  										type: "string"
  									},
  									categoryFormatter: {
  										"x-wcc-type": "function"
  									},
  									valueFormatter: {
  										"x-wcc-type": "function"
  									}
  								},
  								additionalProperties: false
  							},
  							svg: {
  								type: "object",
  								properties: {
  									filename: {
  										type: "string"
  									}
  								},
  								additionalProperties: false
  							},
  							png: {
  								type: "object",
  								properties: {
  									filename: {
  										type: "string"
  									}
  								},
  								additionalProperties: false
  							},
  							width: {
  								type: "number"
  							},
  							scale: {
  								type: "number"
  							}
  						},
  						additionalProperties: false
  					},
  					autoSelected: {
  						type: "string",
  						"enum": [
  							"zoom",
  							"selection",
  							"pan"
  						]
  					}
  				},
  				additionalProperties: false
  			},
  			zoom: {
  				type: "object",
  				properties: {
  					enabled: {
  						type: "boolean"
  					},
  					type: {
  						type: "string",
  						"enum": [
  							"x",
  							"y",
  							"xy"
  						]
  					},
  					autoScaleYaxis: {
  						type: "boolean"
  					},
  					allowMouseWheelZoom: {
  						type: "boolean"
  					},
  					zoomedArea: {
  						type: "object",
  						properties: {
  							fill: {
  								type: "object",
  								properties: {
  									color: {
  										type: "string"
  									},
  									opacity: {
  										type: "number"
  									}
  								},
  								additionalProperties: false
  							},
  							stroke: {
  								type: "object",
  								properties: {
  									color: {
  										type: "string"
  									},
  									opacity: {
  										type: "number"
  									},
  									width: {
  										type: "number"
  									}
  								},
  								additionalProperties: false
  							}
  						},
  						additionalProperties: false
  					}
  				},
  				additionalProperties: false
  			},
  			selection: {
  				type: "object",
  				properties: {
  					enabled: {
  						type: "boolean"
  					},
  					type: {
  						type: "string"
  					},
  					fill: {
  						type: "object",
  						properties: {
  							color: {
  								type: "string"
  							},
  							opacity: {
  								type: "number"
  							}
  						},
  						additionalProperties: false
  					},
  					stroke: {
  						type: "object",
  						properties: {
  							width: {
  								type: "number"
  							},
  							color: {
  								type: "string"
  							},
  							opacity: {
  								type: "number"
  							},
  							dashArray: {
  								type: "number"
  							}
  						},
  						additionalProperties: false
  					},
  					xaxis: {
  						type: "object",
  						properties: {
  							min: {
  								type: "number"
  							},
  							max: {
  								type: "number"
  							}
  						},
  						additionalProperties: false
  					},
  					yaxis: {
  						type: "object",
  						properties: {
  							min: {
  								type: "number"
  							},
  							max: {
  								type: "number"
  							}
  						},
  						additionalProperties: false
  					}
  				},
  				additionalProperties: false
  			},
  			animations: {
  				type: "object",
  				properties: {
  					enabled: {
  						type: "boolean"
  					},
  					respectReducedMotion: {
  						type: "boolean"
  					},
  					largeDatasetThreshold: {
  						type: "number"
  					},
  					chartTypeMorph: {
  						type: "object",
  						properties: {
  							enabled: {
  								type: "boolean"
  							},
  							speed: {
  								type: "number"
  							}
  						},
  						additionalProperties: false
  					},
  					easing: {
  						anyOf: [
  							{
  								type: "string"
  							},
  							{
  								type: "array",
  								prefixItems: [
  									{
  										type: "number"
  									},
  									{
  										type: "number"
  									},
  									{
  										type: "number"
  									},
  									{
  										type: "number"
  									}
  								],
  								minItems: 4,
  								maxItems: 4
  							},
  							{
  								"x-wcc-type": "function"
  							}
  						]
  					},
  					speed: {
  						type: "number"
  					},
  					animateGradually: {
  						type: "object",
  						properties: {
  							enabled: {
  								type: "boolean"
  							},
  							delay: {
  								type: "number"
  							}
  						},
  						additionalProperties: false
  					},
  					dynamicAnimation: {
  						type: "object",
  						properties: {
  							enabled: {
  								type: "boolean"
  							},
  							easing: {
  								anyOf: [
  									{
  										type: "string"
  									},
  									{
  										type: "array",
  										prefixItems: [
  											{
  												type: "number"
  											},
  											{
  												type: "number"
  											},
  											{
  												type: "number"
  											},
  											{
  												type: "number"
  											}
  										],
  										minItems: 4,
  										maxItems: 4
  									},
  									{
  										"x-wcc-type": "function"
  									}
  								]
  							},
  							speed: {
  								type: "number"
  							},
  							matchBy: {
  								anyOf: [
  									{
  										type: "string",
  										"enum": [
  											"x",
  											"index"
  										]
  									},
  									{
  										"x-wcc-type": "function"
  									}
  								]
  							}
  						},
  						additionalProperties: false
  					},
  					resize: {
  						type: "object",
  						properties: {
  							enabled: {
  								type: "boolean"
  							},
  							speed: {
  								type: "number"
  							}
  						},
  						additionalProperties: false
  					}
  				},
  				additionalProperties: false
  			},
  			renderer: {
  				type: "string",
  				"enum": [
  					"auto",
  					"svg",
  					"canvas"
  				]
  			},
  			rendererThreshold: {
  				type: "number"
  			},
  			wcc: {
  				type: "object",
  				properties: {
  					canvas: {
  						type: "object",
  						properties: {
  							pixelRatio: {
  								anyOf: [
  									{
  										"const": "device"
  									},
  									{
  										type: "number"
  									}
  								]
  							},
  							cellCap: {
  								type: "number"
  							},
  							settleMs: {
  								type: "number"
  							},
  							axisStride: {
  								type: "number"
  							}
  						},
  						additionalProperties: false
  					}
  				},
  				additionalProperties: true
  			},
  			link: {
  				$ref: "#/$defs/WccLinkOptions"
  			},
  			history: {
  				$ref: "#/$defs/WccHistoryOptions"
  			},
  			orient: {
  				anyOf: [
  					{
  						type: "boolean"
  					},
  					{
  						$ref: "#/$defs/WccOrientOptions"
  					}
  				]
  			},
  			deterministic: {
  				type: "boolean"
  			},
  			seed: {
  				type: "number"
  			},
  			now: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "number"
  					},
  					{
  						"x-wcc-type": "Date"
  					},
  					{
  						"x-wcc-type": "function"
  					}
  				]
  			},
  			requestedType: {
  				type: "string"
  			},
  			validate: {
  				type: "string",
  				"enum": [
  					"warn",
  					"error",
  					"off"
  				]
  			}
  		},
  		additionalProperties: false
  	},
  	colors: {
  		type: "array",
  		items: {
  		}
  	},
  	dataLabels: {
  		$ref: "#/$defs/ApexDataLabels"
  	},
  	fill: {
  		$ref: "#/$defs/ApexFill"
  	},
  	forecastDataPoints: {
  		$ref: "#/$defs/ApexForecastDataPoints"
  	},
  	grid: {
  		$ref: "#/$defs/ApexGrid"
  	},
  	labels: {
  		type: "array",
  		items: {
  			anyOf: [
  				{
  					type: "string"
  				},
  				{
  					type: "number"
  				}
  			]
  		}
  	},
  	legend: {
  		$ref: "#/$defs/ApexLegend"
  	},
  	markers: {
  		$ref: "#/$defs/ApexMarkers"
  	},
  	noData: {
  		$ref: "#/$defs/ApexNoData"
  	},
  	plotOptions: {
  		type: "object",
  		properties: {
  			line: {
  				type: "object",
  				properties: {
  					isSlopeChart: {
  						type: "boolean"
  					},
  					colors: {
  						type: "object",
  						properties: {
  							threshold: {
  								type: "number"
  							},
  							colorAboveThreshold: {
  								type: "string"
  							},
  							colorBelowThreshold: {
  								type: "string"
  							}
  						},
  						additionalProperties: false
  					}
  				},
  				additionalProperties: false
  			},
  			area: {
  				type: "object",
  				properties: {
  					fillTo: {
  						type: "string",
  						"enum": [
  							"end",
  							"origin"
  						]
  					}
  				},
  				additionalProperties: false
  			},
  			bar: {
  				type: "object",
  				properties: {
  					wcc: {
  						type: "object",
  						properties: {
  							mark: {
  								type: "string",
  								"enum": [
  									"lollipop",
  									"ringStem"
  								]
  							},
  							stemWidth: {
  								type: "number"
  							},
  							headRadius: {
  								type: "number"
  							}
  						},
  						additionalProperties: false
  					},
  					horizontal: {
  						type: "boolean"
  					},
  					columnWidth: {
  						anyOf: [
  							{
  								type: "string"
  							},
  							{
  								type: "number"
  							}
  						]
  					},
  					barHeight: {
  						anyOf: [
  							{
  								type: "string"
  							},
  							{
  								type: "number"
  							}
  						]
  					},
  					distributed: {
  						type: "boolean"
  					},
  					borderRadius: {
  						type: "number"
  					},
  					borderRadiusApplication: {
  						type: "string",
  						"enum": [
  							"end",
  							"around"
  						]
  					},
  					borderRadiusWhenStacked: {
  						type: "string",
  						"enum": [
  							"all",
  							"last"
  						]
  					},
  					hideZeroBarsWhenGrouped: {
  						type: "boolean"
  					},
  					rangeBarOverlap: {
  						type: "boolean"
  					},
  					rangeBarGroupRows: {
  						type: "boolean"
  					},
  					isDumbbell: {
  						type: "boolean"
  					},
  					dumbbellColors: {
  						type: "array",
  						items: {
  							type: "array",
  							items: {
  								type: "string"
  							}
  						}
  					},
  					isFunnel: {
  						type: "boolean"
  					},
  					isFunnel3d: {
  						type: "boolean"
  					},
  					colors: {
  						type: "object",
  						properties: {
  							ranges: {
  								type: "array",
  								items: {
  									type: "object",
  									properties: {
  										from: {
  											type: "number"
  										},
  										to: {
  											type: "number"
  										},
  										color: {
  											type: "string"
  										}
  									},
  									additionalProperties: false
  								}
  							},
  							backgroundBarColors: {
  								type: "array",
  								items: {
  									type: "string"
  								}
  							},
  							backgroundBarOpacity: {
  								type: "number"
  							},
  							backgroundBarRadius: {
  								type: "number"
  							}
  						},
  						additionalProperties: false
  					},
  					dataLabels: {
  						type: "object",
  						properties: {
  							maxItems: {
  								type: "number"
  							},
  							hideOverflowingLabels: {
  								type: "boolean"
  							},
  							position: {
  								type: "string"
  							},
  							orientation: {
  								type: "string",
  								"enum": [
  									"horizontal",
  									"vertical"
  								]
  							},
  							total: {
  								type: "object",
  								properties: {
  									enabled: {
  										type: "boolean"
  									},
  									formatter: {
  										"x-wcc-type": "function"
  									},
  									offsetX: {
  										type: "number"
  									},
  									offsetY: {
  										type: "number"
  									},
  									style: {
  										type: "object",
  										properties: {
  											color: {
  												type: "string"
  											},
  											fontSize: {
  												type: "string"
  											},
  											fontFamily: {
  												type: "string"
  											},
  											fontWeight: {
  												anyOf: [
  													{
  														type: "string"
  													},
  													{
  														type: "number"
  													}
  												]
  											}
  										},
  										additionalProperties: false
  									}
  								},
  								additionalProperties: false
  							}
  						},
  						additionalProperties: false
  					},
  					dumbbell: {
  						type: "object",
  						properties: {
  							connector: {
  								type: "object",
  								properties: {
  									color: {
  										type: "string"
  									},
  									opacity: {
  										type: "number"
  									}
  								},
  								additionalProperties: false
  							},
  							dataLabels: {
  								type: "object",
  								properties: {
  									enabled: {
  										type: "boolean"
  									},
  									offset: {
  										type: "number"
  									},
  									colorFromMarker: {
  										type: "boolean"
  									},
  									formatter: {
  										"x-wcc-type": "function"
  									},
  									style: {
  										$ref: "#/$defs/WccTextStyle"
  									}
  								},
  								additionalProperties: false
  							},
  							tooltip: {
  								type: "object",
  								properties: {
  									differenceLabel: {
  										type: "string"
  									}
  								},
  								additionalProperties: false
  							}
  						},
  						additionalProperties: false
  					}
  				},
  				additionalProperties: false
  			},
  			bubble: {
  				type: "object",
  				properties: {
  					zScaling: {
  						type: "boolean"
  					},
  					minBubbleRadius: {
  						type: "number"
  					},
  					maxBubbleRadius: {
  						type: "number"
  					},
  					minZ: {
  						type: "number"
  					},
  					maxZ: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			},
  			candlestick: {
  				type: "object",
  				properties: {
  					type: {
  						type: "string"
  					},
  					colors: {
  						type: "object",
  						properties: {
  							upward: {
  								anyOf: [
  									{
  										type: "string"
  									},
  									{
  										type: "array",
  										items: {
  											type: "string"
  										}
  									}
  								]
  							},
  							downward: {
  								anyOf: [
  									{
  										type: "string"
  									},
  									{
  										type: "array",
  										items: {
  											type: "string"
  										}
  									}
  								]
  							}
  						},
  						additionalProperties: false
  					},
  					wick: {
  						type: "object",
  						properties: {
  							useFillColor: {
  								type: "boolean"
  							}
  						},
  						additionalProperties: false
  					}
  				},
  				additionalProperties: false
  			},
  			boxPlot: {
  				type: "object",
  				properties: {
  					wcc: {
  						type: "object",
  						properties: {
  							jitter: {
  								type: "number"
  							}
  						},
  						additionalProperties: false
  					},
  					colors: {
  						type: "object",
  						properties: {
  							upper: {
  								anyOf: [
  									{
  										type: "string"
  									},
  									{
  										type: "array",
  										items: {
  											type: "string"
  										}
  									}
  								]
  							},
  							lower: {
  								anyOf: [
  									{
  										type: "string"
  									},
  									{
  										type: "array",
  										items: {
  											type: "string"
  										}
  									}
  								]
  							}
  						},
  						additionalProperties: false
  					},
  					whiskers: {
  						type: "string",
  						"enum": [
  							"minmax",
  							"tukey",
  							"percentile"
  						]
  					},
  					whiskerPercentiles: {
  						type: "array",
  						prefixItems: [
  							{
  								type: "number"
  							},
  							{
  								type: "number"
  							}
  						],
  						minItems: 2,
  						maxItems: 2
  					},
  					points: {
  						type: "object",
  						properties: {
  							show: {
  								anyOf: [
  									{
  										type: "string",
  										"enum": [
  											"all",
  											"outliers"
  										]
  									},
  									{
  										type: "boolean"
  									}
  								]
  							},
  							shape: {
  								type: "string",
  								"enum": [
  									"circle",
  									"square"
  								]
  							},
  							size: {
  								type: "number"
  							},
  							jitter: {
  								type: "number"
  							},
  							maxPoints: {
  								type: "number"
  							},
  							opacity: {
  								type: "number"
  							},
  							fillColor: {
  								type: "string"
  							},
  							strokeColor: {
  								type: "string"
  							},
  							strokeWidth: {
  								type: "number"
  							},
  							colorScale: {
  								type: "object",
  								properties: {
  									colors: {
  										type: "array",
  										items: {
  											type: "string"
  										}
  									},
  									min: {
  										type: "number"
  									},
  									max: {
  										type: "number"
  									},
  									steps: {
  										type: "number"
  									}
  								},
  								additionalProperties: false
  							}
  						},
  						additionalProperties: false
  					}
  				},
  				additionalProperties: false
  			},
  			heatmap: {
  				type: "object",
  				properties: {
  					wcc: {
  						type: "object",
  						properties: {
  							centerTimeLabels: {
  								type: "boolean"
  							}
  						},
  						additionalProperties: false
  					},
  					radius: {
  						type: "number"
  					},
  					enableShades: {
  						type: "boolean"
  					},
  					shadeIntensity: {
  						type: "number"
  					},
  					reverseNegativeShade: {
  						type: "boolean"
  					},
  					distributed: {
  						type: "boolean"
  					},
  					useFillColorAsStroke: {
  						type: "boolean"
  					},
  					colorScale: {
  						type: "object",
  						properties: {
  							ranges: {
  								type: "array",
  								items: {
  									type: "object",
  									properties: {
  										from: {
  											type: "number"
  										},
  										to: {
  											type: "number"
  										},
  										color: {
  											type: "string"
  										},
  										foreColor: {
  											type: "string"
  										},
  										name: {
  											type: "string"
  										}
  									},
  									additionalProperties: false
  								}
  							},
  							inverse: {
  								type: "boolean"
  							},
  							min: {
  								type: "number"
  							},
  							max: {
  								type: "number"
  							}
  						},
  						additionalProperties: false
  					},
  					shape: {
  						type: "string",
  						"enum": [
  							"circle",
  							"rect",
  							"diamond",
  							"hexagon"
  						]
  					},
  					shapeAspect: {
  						type: "string",
  						"enum": [
  							"fill",
  							"regular"
  						]
  					},
  					empty: {
  						anyOf: [
  							{
  								type: "boolean"
  							},
  							{
  								type: "object",
  								properties: {
  									label: {
  										type: "string"
  									},
  									color: {
  										type: "string"
  									},
  									legend: {
  										type: "boolean"
  									}
  								},
  								additionalProperties: false
  							}
  						]
  					}
  				},
  				additionalProperties: false
  			},
  			treemap: {
  				type: "object",
  				properties: {
  					enableShades: {
  						type: "boolean"
  					},
  					shadeIntensity: {
  						type: "number"
  					},
  					distributed: {
  						type: "boolean"
  					},
  					reverseNegativeShade: {
  						type: "boolean"
  					},
  					useFillColorAsStroke: {
  						type: "boolean"
  					},
  					dataLabels: {
  						type: "object",
  						properties: {
  							format: {
  								type: "string",
  								"enum": [
  									"scale",
  									"truncate"
  								]
  							},
  							showValue: {
  								type: "boolean"
  							},
  							minFontSize: {
  								type: "number"
  							},
  							align: {
  								type: "string",
  								"enum": [
  									"left",
  									"center"
  								]
  							}
  						},
  						additionalProperties: false
  					},
  					borderRadius: {
  						type: "number"
  					},
  					colorScale: {
  						type: "object",
  						properties: {
  							inverse: {
  								type: "boolean"
  							},
  							ranges: {
  								type: "array",
  								items: {
  									type: "object",
  									properties: {
  										from: {
  											type: "number"
  										},
  										to: {
  											type: "number"
  										},
  										color: {
  											type: "string"
  										},
  										foreColor: {
  											type: "string"
  										},
  										name: {
  											type: "string"
  										}
  									},
  									additionalProperties: false
  								}
  							},
  							min: {
  								type: "number"
  							},
  							max: {
  								type: "number"
  							},
  							colorValue: {
  								anyOf: [
  									{
  										type: "string"
  									},
  									{
  										"x-wcc-type": "function"
  									}
  								]
  							},
  							gradient: {
  								type: "object",
  								properties: {
  									enabled: {
  										type: "boolean"
  									},
  									min: {
  										type: "number"
  									},
  									max: {
  										type: "number"
  									},
  									midpoint: {
  										type: "number"
  									},
  									symmetric: {
  										type: "boolean"
  									},
  									stops: {
  										type: "array",
  										items: {
  											type: "object",
  											properties: {
  												value: {
  													type: "number"
  												},
  												color: {
  													type: "string"
  												}
  											},
  											required: [
  												"value",
  												"color"
  											],
  											additionalProperties: false
  										}
  									}
  								},
  								additionalProperties: false
  							},
  							gradientLegend: {
  								type: "object",
  								properties: {
  									enabled: {
  										type: "boolean"
  									},
  									width: {
  										anyOf: [
  											{
  												type: "string"
  											},
  											{
  												type: "number"
  											}
  										]
  									},
  									thickness: {
  										type: "number"
  									},
  									align: {
  										type: "string",
  										"enum": [
  											"right",
  											"left",
  											"center"
  										]
  									},
  									stops: {
  										type: "number"
  									},
  									showLabels: {
  										type: "boolean"
  									},
  									showHoverValue: {
  										type: "boolean"
  									},
  									labelStyle: {
  										type: "object",
  										properties: {
  											fontSize: {
  												anyOf: [
  													{
  														type: "string"
  													},
  													{
  														type: "number"
  													}
  												]
  											},
  											color: {
  												type: "string"
  											},
  											fontFamily: {
  												type: "string"
  											}
  										},
  										additionalProperties: false
  									},
  									arrow: {
  										type: "object",
  										properties: {
  											size: {
  												type: "number"
  											},
  											color: {
  												type: "string"
  											}
  										},
  										additionalProperties: false
  									},
  									formatter: {
  										"x-wcc-type": "function"
  									}
  								},
  								additionalProperties: false
  							}
  						},
  						additionalProperties: false
  					},
  					seriesTitle: {
  						type: "object",
  						properties: {
  							show: {
  								type: "boolean"
  							},
  							offsetY: {
  								type: "number"
  							},
  							offsetX: {
  								type: "number"
  							},
  							borderColor: {
  								type: "string"
  							},
  							borderWidth: {
  								type: "number"
  							},
  							borderRadius: {
  								type: "number"
  							},
  							style: {
  								type: "object",
  								properties: {
  									background: {
  										type: "string"
  									},
  									color: {
  										type: "string"
  									},
  									fontSize: {
  										type: "string"
  									},
  									fontFamily: {
  										type: "string"
  									},
  									fontWeight: {
  										anyOf: [
  											{
  												type: "string"
  											},
  											{
  												type: "number"
  											}
  										]
  									},
  									cssClass: {
  										type: "string"
  									},
  									padding: {
  										type: "object",
  										properties: {
  											left: {
  												type: "number"
  											},
  											right: {
  												type: "number"
  											},
  											top: {
  												type: "number"
  											},
  											bottom: {
  												type: "number"
  											}
  										},
  										additionalProperties: false
  									}
  								},
  								additionalProperties: false
  							}
  						},
  						additionalProperties: false
  					},
  					zoomOnClick: {
  						type: "boolean"
  					},
  					zoom: {
  						type: "object",
  						properties: {
  							enabled: {
  								type: "boolean"
  							},
  							breadcrumb: {
  								anyOf: [
  									{
  										"const": false
  									},
  									{
  										type: "object",
  										properties: {
  											rootLabel: {
  												type: "string"
  											},
  											separator: {
  												type: "string"
  											},
  											position: {
  												type: "string",
  												"enum": [
  													"top-left",
  													"top-right"
  												]
  											}
  										},
  										additionalProperties: false
  									}
  								]
  							}
  						},
  						additionalProperties: false
  					},
  					nested: {
  						type: "object",
  						properties: {
  							enabled: {
  								type: "boolean"
  							},
  							drilldownAsLevels: {
  								type: "boolean"
  							}
  						},
  						additionalProperties: false
  					},
  					tint: {
  						type: "number"
  					},
  					parents: {
  						$ref: "#/$defs/WccTreemapLevel"
  					},
  					levels: {
  						type: "array",
  						items: {
  							$ref: "#/$defs/WccTreemapLevel"
  						}
  					}
  				},
  				additionalProperties: false
  			},
  			pie: {
  				type: "object",
  				properties: {
  					wcc: {
  						type: "object",
  						properties: {
  							segmentGap: {
  								type: "number"
  							},
  							segmentRadius: {
  								type: "number"
  							}
  						},
  						additionalProperties: false
  					},
  					startAngle: {
  						type: "number"
  					},
  					endAngle: {
  						type: "number"
  					},
  					customScale: {
  						type: "number"
  					},
  					offsetX: {
  						type: "number"
  					},
  					offsetY: {
  						type: "number"
  					},
  					expandOnClick: {
  						type: "boolean"
  					},
  					dataLabels: {
  						type: "object",
  						properties: {
  							offset: {
  								type: "number"
  							},
  							minAngleToShowLabel: {
  								type: "number"
  							}
  						},
  						additionalProperties: false
  					},
  					donut: {
  						type: "object",
  						properties: {
  							size: {
  								type: "string"
  							},
  							background: {
  								type: "string"
  							},
  							labels: {
  								type: "object",
  								properties: {
  									readability: {
  										anyOf: [
  											{
  												type: "string",
  												"enum": [
  													"none",
  													"halo",
  													"pill",
  													"auto",
  													"hide"
  												]
  											},
  											{
  												type: "boolean"
  											},
  											{
  												type: "object",
  												properties: {
  													mode: {
  														type: "string",
  														"enum": [
  															"none",
  															"halo",
  															"pill",
  															"auto",
  															"hide"
  														]
  													},
  													fallback: {
  														type: "string",
  														"enum": [
  															"halo",
  															"pill",
  															"hide"
  														]
  													},
  													enabled: {
  														type: "boolean"
  													},
  													contrast: {
  														type: "boolean"
  													},
  													minRatio: {
  														type: "number"
  													},
  													light: {
  														type: "string"
  													},
  													dark: {
  														type: "string"
  													},
  													background: {
  														type: "string"
  													},
  													halo: {
  														type: "object",
  														properties: {
  															width: {
  																type: "number"
  															},
  															color: {
  																type: "string"
  															},
  															opacity: {
  																type: "number"
  															},
  															blur: {
  																type: "number"
  															}
  														},
  														additionalProperties: false
  													},
  													pill: {
  														type: "object",
  														properties: {
  															fill: {
  																type: "string"
  															},
  															opacity: {
  																type: "number"
  															},
  															radius: {
  																type: "number"
  															},
  															padding: {
  																anyOf: [
  																	{
  																		type: "number"
  																	},
  																	{
  																		type: "array",
  																		prefixItems: [
  																			{
  																				type: "number"
  																			},
  																			{
  																				type: "number"
  																			}
  																		],
  																		minItems: 2,
  																		maxItems: 2
  																	}
  																]
  															},
  															stroke: {
  																type: "string"
  															},
  															strokeWidth: {
  																type: "number"
  															},
  															offset: {
  																type: "array",
  																prefixItems: [
  																	{
  																		type: "number"
  																	},
  																	{
  																		type: "number"
  																	}
  																],
  																minItems: 2,
  																maxItems: 2
  															}
  														},
  														additionalProperties: false
  													},
  													shadow: {
  														anyOf: [
  															{
  																type: "boolean"
  															},
  															{
  																type: "object",
  																properties: {
  																	dx: {
  																		type: "number"
  																	},
  																	dy: {
  																		type: "number"
  																	},
  																	blur: {
  																		type: "number"
  																	},
  																	color: {
  																		type: "string"
  																	},
  																	opacity: {
  																		type: "number"
  																	}
  																},
  																additionalProperties: false
  															}
  														]
  													},
  													raise: {
  														type: "boolean"
  													},
  													each: {
  														"x-wcc-type": "function"
  													}
  												},
  												additionalProperties: false
  											}
  										]
  									},
  									show: {
  										type: "boolean"
  									},
  									name: {
  										type: "object",
  										properties: {
  											show: {
  												type: "boolean"
  											},
  											fontSize: {
  												type: "string"
  											},
  											fontFamily: {
  												type: "string"
  											},
  											fontWeight: {
  												anyOf: [
  													{
  														type: "string"
  													},
  													{
  														type: "number"
  													}
  												]
  											},
  											color: {
  												type: "string"
  											},
  											offsetY: {
  												type: "number"
  											},
  											formatter: {
  												"x-wcc-type": "function"
  											}
  										},
  										additionalProperties: false
  									},
  									value: {
  										type: "object",
  										properties: {
  											show: {
  												type: "boolean"
  											},
  											fontSize: {
  												type: "string"
  											},
  											fontFamily: {
  												type: "string"
  											},
  											fontWeight: {
  												anyOf: [
  													{
  														type: "string"
  													},
  													{
  														type: "number"
  													}
  												]
  											},
  											color: {
  												type: "string"
  											},
  											offsetY: {
  												type: "number"
  											},
  											formatter: {
  												"x-wcc-type": "function"
  											}
  										},
  										additionalProperties: false
  									},
  									total: {
  										type: "object",
  										properties: {
  											show: {
  												type: "boolean"
  											},
  											showAlways: {
  												type: "boolean"
  											},
  											fontFamily: {
  												type: "string"
  											},
  											fontWeight: {
  												anyOf: [
  													{
  														type: "string"
  													},
  													{
  														type: "number"
  													}
  												]
  											},
  											fontSize: {
  												type: "string"
  											},
  											label: {
  												type: "string"
  											},
  											color: {
  												type: "string"
  											},
  											formatter: {
  												"x-wcc-type": "function"
  											}
  										},
  										additionalProperties: false
  									}
  								},
  								additionalProperties: false
  							}
  						},
  						additionalProperties: false
  					}
  				},
  				additionalProperties: false
  			},
  			polarArea: {
  				type: "object",
  				properties: {
  					rings: {
  						type: "object",
  						properties: {
  							strokeWidth: {
  								type: "number"
  							},
  							strokeColor: {
  								type: "string"
  							}
  						},
  						additionalProperties: false
  					},
  					spokes: {
  						type: "object",
  						properties: {
  							strokeWidth: {
  								type: "number"
  							},
  							connectorColors: {
  								anyOf: [
  									{
  										type: "string"
  									},
  									{
  										type: "array",
  										items: {
  											type: "string"
  										}
  									}
  								]
  							}
  						},
  						additionalProperties: false
  					}
  				},
  				additionalProperties: false
  			},
  			radar: {
  				type: "object",
  				properties: {
  					size: {
  						type: "number"
  					},
  					offsetX: {
  						type: "number"
  					},
  					offsetY: {
  						type: "number"
  					},
  					polygons: {
  						type: "object",
  						properties: {
  							strokeColors: {
  								anyOf: [
  									{
  										type: "string"
  									},
  									{
  										type: "array",
  										items: {
  											type: "string"
  										}
  									}
  								]
  							},
  							strokeWidth: {
  								anyOf: [
  									{
  										type: "string"
  									},
  									{
  										type: "array",
  										items: {
  											type: "string"
  										}
  									}
  								]
  							},
  							connectorColors: {
  								anyOf: [
  									{
  										type: "string"
  									},
  									{
  										type: "array",
  										items: {
  											type: "string"
  										}
  									}
  								]
  							},
  							fill: {
  								type: "object",
  								properties: {
  									colors: {
  										type: "array",
  										items: {
  											type: "string"
  										}
  									}
  								},
  								additionalProperties: false
  							}
  						},
  						additionalProperties: false
  					}
  				},
  				additionalProperties: false
  			},
  			radialBar: {
  				type: "object",
  				properties: {
  					inverseOrder: {
  						type: "boolean"
  					},
  					startAngle: {
  						type: "number"
  					},
  					endAngle: {
  						type: "number"
  					},
  					offsetX: {
  						type: "number"
  					},
  					offsetY: {
  						type: "number"
  					},
  					hollow: {
  						type: "object",
  						properties: {
  							margin: {
  								type: "number"
  							},
  							size: {
  								type: "string"
  							},
  							background: {
  								type: "string"
  							},
  							image: {
  								type: "string"
  							},
  							imageWidth: {
  								type: "number"
  							},
  							imageHeight: {
  								type: "number"
  							},
  							imageOffsetX: {
  								type: "number"
  							},
  							imageOffsetY: {
  								type: "number"
  							},
  							imageClipped: {
  								type: "boolean"
  							},
  							position: {
  								type: "string",
  								"enum": [
  									"front",
  									"back"
  								]
  							},
  							dropShadow: {
  								$ref: "#/$defs/ApexDropShadow"
  							}
  						},
  						additionalProperties: false
  					},
  					track: {
  						type: "object",
  						properties: {
  							show: {
  								type: "boolean"
  							},
  							startAngle: {
  								type: "number"
  							},
  							endAngle: {
  								type: "number"
  							},
  							background: {
  								anyOf: [
  									{
  										type: "string"
  									},
  									{
  										type: "array",
  										items: {
  											type: "string"
  										}
  									}
  								]
  							},
  							strokeWidth: {
  								type: "string"
  							},
  							opacity: {
  								type: "number"
  							},
  							margin: {
  								type: "number"
  							},
  							dropShadow: {
  								$ref: "#/$defs/ApexDropShadow"
  							}
  						},
  						additionalProperties: false
  					},
  					dataLabels: {
  						type: "object",
  						properties: {
  							readability: {
  								anyOf: [
  									{
  										type: "string",
  										"enum": [
  											"none",
  											"halo",
  											"pill",
  											"auto",
  											"hide"
  										]
  									},
  									{
  										type: "boolean"
  									},
  									{
  										type: "object",
  										properties: {
  											mode: {
  												type: "string",
  												"enum": [
  													"none",
  													"halo",
  													"pill",
  													"auto",
  													"hide"
  												]
  											},
  											fallback: {
  												type: "string",
  												"enum": [
  													"halo",
  													"pill",
  													"hide"
  												]
  											},
  											enabled: {
  												type: "boolean"
  											},
  											contrast: {
  												type: "boolean"
  											},
  											minRatio: {
  												type: "number"
  											},
  											light: {
  												type: "string"
  											},
  											dark: {
  												type: "string"
  											},
  											background: {
  												type: "string"
  											},
  											halo: {
  												type: "object",
  												properties: {
  													width: {
  														type: "number"
  													},
  													color: {
  														type: "string"
  													},
  													opacity: {
  														type: "number"
  													},
  													blur: {
  														type: "number"
  													}
  												},
  												additionalProperties: false
  											},
  											pill: {
  												type: "object",
  												properties: {
  													fill: {
  														type: "string"
  													},
  													opacity: {
  														type: "number"
  													},
  													radius: {
  														type: "number"
  													},
  													padding: {
  														anyOf: [
  															{
  																type: "number"
  															},
  															{
  																type: "array",
  																prefixItems: [
  																	{
  																		type: "number"
  																	},
  																	{
  																		type: "number"
  																	}
  																],
  																minItems: 2,
  																maxItems: 2
  															}
  														]
  													},
  													stroke: {
  														type: "string"
  													},
  													strokeWidth: {
  														type: "number"
  													},
  													offset: {
  														type: "array",
  														prefixItems: [
  															{
  																type: "number"
  															},
  															{
  																type: "number"
  															}
  														],
  														minItems: 2,
  														maxItems: 2
  													}
  												},
  												additionalProperties: false
  											},
  											shadow: {
  												anyOf: [
  													{
  														type: "boolean"
  													},
  													{
  														type: "object",
  														properties: {
  															dx: {
  																type: "number"
  															},
  															dy: {
  																type: "number"
  															},
  															blur: {
  																type: "number"
  															},
  															color: {
  																type: "string"
  															},
  															opacity: {
  																type: "number"
  															}
  														},
  														additionalProperties: false
  													}
  												]
  											},
  											raise: {
  												type: "boolean"
  											},
  											each: {
  												"x-wcc-type": "function"
  											}
  										},
  										additionalProperties: false
  									}
  								]
  							},
  							show: {
  								type: "boolean"
  							},
  							name: {
  								type: "object",
  								properties: {
  									show: {
  										type: "boolean"
  									},
  									fontFamily: {
  										type: "string"
  									},
  									fontWeight: {
  										anyOf: [
  											{
  												type: "string"
  											},
  											{
  												type: "number"
  											}
  										]
  									},
  									fontSize: {
  										type: "string"
  									},
  									color: {
  										type: "string"
  									},
  									offsetY: {
  										type: "number"
  									}
  								},
  								additionalProperties: false
  							},
  							value: {
  								type: "object",
  								properties: {
  									show: {
  										type: "boolean"
  									},
  									fontFamily: {
  										type: "string"
  									},
  									fontSize: {
  										type: "string"
  									},
  									fontWeight: {
  										anyOf: [
  											{
  												type: "string"
  											},
  											{
  												type: "number"
  											}
  										]
  									},
  									color: {
  										type: "string"
  									},
  									offsetY: {
  										type: "number"
  									},
  									formatter: {
  										"x-wcc-type": "function"
  									}
  								},
  								additionalProperties: false
  							},
  							total: {
  								type: "object",
  								properties: {
  									show: {
  										type: "boolean"
  									},
  									label: {
  										type: "string"
  									},
  									color: {
  										type: "string"
  									},
  									fontFamily: {
  										type: "string"
  									},
  									fontWeight: {
  										anyOf: [
  											{
  												type: "string"
  											},
  											{
  												type: "number"
  											}
  										]
  									},
  									fontSize: {
  										type: "string"
  									},
  									formatter: {
  										"x-wcc-type": "function"
  									}
  								},
  								additionalProperties: false
  							}
  						},
  						additionalProperties: false
  					},
  					barLabels: {
  						type: "object",
  						properties: {
  							enabled: {
  								type: "boolean"
  							},
  							offsetX: {
  								type: "number"
  							},
  							offsetY: {
  								type: "number"
  							},
  							useSeriesColors: {
  								type: "boolean"
  							},
  							fontFamily: {
  								type: "string"
  							},
  							fontWeight: {
  								anyOf: [
  									{
  										type: "string"
  									},
  									{
  										type: "number"
  									}
  								]
  							},
  							fontSize: {
  								type: "string"
  							},
  							formatter: {
  								"x-wcc-type": "function"
  							},
  							onClick: {
  								"x-wcc-type": "function"
  							}
  						},
  						additionalProperties: false
  					},
  					shape: {
  						type: "string",
  						"enum": [
  							"arc",
  							"needle"
  						]
  					},
  					min: {
  						type: "number"
  					},
  					max: {
  						type: "number"
  					},
  					bands: {
  						type: "array",
  						items: {
  							type: "object",
  							properties: {
  								from: {
  									type: "number"
  								},
  								to: {
  									type: "number"
  								},
  								color: {
  									type: "string"
  								},
  								label: {
  									type: "string"
  								}
  							},
  							required: [
  								"from",
  								"to"
  							],
  							additionalProperties: false
  						}
  					},
  					bandsStyle: {
  						type: "object",
  						properties: {
  							strokeWidth: {
  								anyOf: [
  									{
  										type: "string"
  									},
  									{
  										type: "number"
  									}
  								]
  							},
  							gap: {
  								type: "number"
  							},
  							hideTrackWhenPresent: {
  								type: "boolean"
  							},
  							linecap: {
  								type: "string",
  								"enum": [
  									"square",
  									"butt",
  									"round"
  								]
  							},
  							align: {
  								type: "string",
  								"enum": [
  									"center",
  									"outer"
  								]
  							}
  						},
  						additionalProperties: false
  					},
  					ticks: {
  						type: "object",
  						properties: {
  							show: {
  								type: "boolean"
  							},
  							major: {
  								type: "object",
  								properties: {
  									count: {
  										type: "number"
  									},
  									length: {
  										type: "number"
  									},
  									width: {
  										type: "number"
  									},
  									color: {
  										type: "string"
  									},
  									placement: {
  										type: "string",
  										"enum": [
  											"center",
  											"outside",
  											"inside"
  										]
  									}
  								},
  								additionalProperties: false
  							},
  							minor: {
  								type: "object",
  								properties: {
  									count: {
  										type: "number"
  									},
  									length: {
  										type: "number"
  									},
  									width: {
  										type: "number"
  									},
  									color: {
  										type: "string"
  									},
  									placement: {
  										type: "string",
  										"enum": [
  											"center",
  											"outside",
  											"inside"
  										]
  									}
  								},
  								additionalProperties: false
  							},
  							labels: {
  								type: "object",
  								properties: {
  									show: {
  										type: "boolean"
  									},
  									offset: {
  										type: "number"
  									},
  									fontSize: {
  										anyOf: [
  											{
  												type: "string"
  											},
  											{
  												type: "number"
  											}
  										]
  									},
  									fontFamily: {
  										type: "string"
  									},
  									fontWeight: {
  										anyOf: [
  											{
  												type: "string"
  											},
  											{
  												type: "number"
  											}
  										]
  									},
  									color: {
  										type: "string"
  									},
  									formatter: {
  										"x-wcc-type": "function"
  									}
  								},
  								additionalProperties: false
  							}
  						},
  						additionalProperties: false
  					},
  					needle: {
  						type: "object",
  						properties: {
  							color: {
  								type: "string"
  							},
  							length: {
  								anyOf: [
  									{
  										type: "string"
  									},
  									{
  										type: "number"
  									}
  								]
  							},
  							baseWidth: {
  								type: "number"
  							},
  							tipWidth: {
  								type: "number"
  							},
  							showValueArc: {
  								type: "boolean"
  							},
  							offsetY: {
  								type: "number"
  							},
  							animation: {
  								type: "object",
  								properties: {
  									enabled: {
  										type: "boolean"
  									},
  									duration: {
  										type: "number"
  									},
  									easing: {
  										anyOf: [
  											{
  												type: "string"
  											},
  											{
  												type: "array",
  												prefixItems: [
  													{
  														type: "number"
  													},
  													{
  														type: "number"
  													},
  													{
  														type: "number"
  													},
  													{
  														type: "number"
  													}
  												],
  												minItems: 4,
  												maxItems: 4
  											},
  											{
  												"x-wcc-type": "function"
  											}
  										]
  									}
  								},
  								additionalProperties: false
  							}
  						},
  						additionalProperties: false
  					}
  				},
  				additionalProperties: false
  			},
  			funnel: {
  				type: "object",
  				properties: {
  					shape: {
  						type: "string",
  						"enum": [
  							"rectangle",
  							"trapezoid"
  						]
  					},
  					lastShape: {
  						type: "string",
  						"enum": [
  							"flat",
  							"taper"
  						]
  					}
  				},
  				additionalProperties: false
  			},
  			waterfall: {
  				type: "object",
  				properties: {
  					colors: {
  						type: "object",
  						properties: {
  							positive: {
  								type: "string"
  							},
  							negative: {
  								type: "string"
  							},
  							subtotal: {
  								type: "string"
  							},
  							total: {
  								type: "string"
  							}
  						},
  						additionalProperties: false
  					},
  					connectors: {
  						type: "object",
  						properties: {
  							show: {
  								type: "boolean"
  							},
  							color: {
  								type: "string"
  							},
  							strokeWidth: {
  								type: "number"
  							},
  							strokeDashArray: {
  								type: "number"
  							}
  						},
  						additionalProperties: false
  					}
  				},
  				additionalProperties: false
  			},
  			sunburst: {
  				type: "object",
  				properties: {
  					offsetX: {
  						type: "number"
  					},
  					offsetY: {
  						type: "number"
  					},
  					startAngle: {
  						type: "number"
  					},
  					endAngle: {
  						type: "number"
  					},
  					innerSize: {
  						anyOf: [
  							{
  								type: "string"
  							},
  							{
  								type: "number"
  							}
  						]
  					},
  					borderRadius: {
  						type: "number"
  					},
  					spacing: {
  						type: "number"
  					},
  					leaf: {
  						type: "string",
  						"enum": [
  							"extend",
  							"stop"
  						]
  					},
  					partition: {
  						type: "string",
  						"enum": [
  							"normalize",
  							"strict"
  						]
  					},
  					tint: {
  						type: "number"
  					},
  					colorBy: {
  						type: "string",
  						"enum": [
  							"branch",
  							"name"
  						]
  					},
  					zoomOnClick: {
  						type: "boolean"
  					},
  					dataLabels: {
  						type: "object",
  						properties: {
  							show: {
  								type: "boolean"
  							},
  							showValue: {
  								type: "boolean"
  							},
  							style: {
  								$ref: "#/$defs/WccTextStyle"
  							},
  							minAngleToShow: {
  								type: "number"
  							}
  						},
  						additionalProperties: false
  					}
  				},
  				additionalProperties: false
  			},
  			icicle: {
  				type: "object",
  				properties: {
  					direction: {
  						type: "string",
  						"enum": [
  							"right",
  							"left",
  							"down",
  							"up"
  						]
  					},
  					levelSize: {
  						anyOf: [
  							{
  								type: "string"
  							},
  							{
  								type: "number"
  							}
  						]
  					},
  					maxDepth: {
  						anyOf: [
  							{
  								"const": "auto"
  							},
  							{
  								type: "number"
  							}
  						]
  					},
  					spacing: {
  						type: "number"
  					},
  					borderRadius: {
  						type: "number"
  					},
  					leaf: {
  						type: "string",
  						"enum": [
  							"extend",
  							"stop"
  						]
  					},
  					partition: {
  						type: "string",
  						"enum": [
  							"normalize",
  							"strict"
  						]
  					},
  					sort: {
  						type: "string",
  						"enum": [
  							"none",
  							"name",
  							"value"
  						]
  					},
  					tint: {
  						type: "number"
  					},
  					colorBy: {
  						type: "string",
  						"enum": [
  							"branch",
  							"name"
  						]
  					},
  					zoomOnClick: {
  						type: "boolean"
  					},
  					zoomType: {
  						type: "string",
  						"enum": [
  							"value",
  							"both"
  						]
  					},
  					dataLabels: {
  						type: "object",
  						properties: {
  							show: {
  								type: "boolean"
  							},
  							showValue: {
  								type: "boolean"
  							},
  							style: {
  								$ref: "#/$defs/WccTextStyle"
  							},
  							minSizeToShow: {
  								type: "number"
  							},
  							align: {
  								type: "string"
  							},
  							rotate: {
  								type: "string",
  								"enum": [
  									"auto",
  									"always",
  									"never"
  								]
  							}
  						},
  						additionalProperties: false
  					}
  				},
  				additionalProperties: false
  			},
  			unit: {
  				type: "object",
  				properties: {
  					layout: {
  						type: "string",
  						"enum": [
  							"scatter",
  							"arc",
  							"grouped",
  							"packed",
  							"columns",
  							"grid",
  							"custom"
  						]
  					},
  					positions: {
  						anyOf: [
  							{
  								type: "string"
  							},
  							{
  								"x-wcc-type": "function"
  							},
  							{
  								$ref: "#/$defs/WccUnitShape"
  							}
  						]
  					},
  					scatter: {
  						type: "object",
  						properties: {
  							y: {
  								type: "string",
  								"enum": [
  									"value",
  									"lanes"
  								]
  							},
  							orientation: {
  								type: "string",
  								"enum": [
  									"horizontal",
  									"vertical"
  								]
  							},
  							spread: {
  								type: "string",
  								"enum": [
  									"swarm",
  									"jitter"
  								]
  							},
  							xTitle: {
  								type: "string"
  							},
  							yTitle: {
  								type: "string"
  							},
  							xFormatter: {
  								"x-wcc-type": "function"
  							},
  							yFormatter: {
  								"x-wcc-type": "function"
  							},
  							xMin: {
  								type: "number"
  							},
  							xMax: {
  								type: "number"
  							},
  							yMin: {
  								type: "number"
  							},
  							yMax: {
  								type: "number"
  							},
  							tickAmount: {
  								type: "number"
  							},
  							yTickAmount: {
  								type: "number"
  							},
  							laneLabelWidth: {
  								type: "number"
  							},
  							gridlines: {
  								type: "boolean"
  							},
  							sizeField: {
  								type: "string"
  							},
  							sizeRange: {
  								type: "array",
  								prefixItems: [
  									{
  										type: "number"
  									},
  									{
  										type: "number"
  									}
  								],
  								minItems: 2,
  								maxItems: 2
  							}
  						},
  						additionalProperties: false
  					},
  					transition: {
  						type: "string",
  						"enum": [
  							"group",
  							"flow",
  							"identity"
  						]
  					},
  					shape: {
  						type: "string",
  						"enum": [
  							"circle",
  							"square",
  							"image",
  							"pictogram"
  						]
  					},
  					image: {
  						type: "object",
  						properties: {
  							src: {
  								type: "string"
  							},
  							width: {
  								type: "number"
  							},
  							height: {
  								type: "number"
  							},
  							tint: {
  								type: "boolean"
  							}
  						},
  						additionalProperties: false
  					},
  					pictogram: {
  						type: "object",
  						properties: {
  							mark: {
  								anyOf: [
  									{
  										type: "string"
  									},
  									{
  										type: "object",
  										properties: {
  											name: {
  												type: "string"
  											}
  										},
  										required: [
  											"name"
  										],
  										additionalProperties: false
  									},
  									{
  										type: "object",
  										properties: {
  											path: {
  												type: "string"
  											},
  											viewBox: {
  												anyOf: [
  													{
  														type: "string"
  													},
  													{
  														type: "array",
  														prefixItems: [
  															{
  																type: "number"
  															},
  															{
  																type: "number"
  															},
  															{
  																type: "number"
  															},
  															{
  																type: "number"
  															}
  														],
  														minItems: 4,
  														maxItems: 4
  													}
  												]
  											}
  										},
  										required: [
  											"path"
  										],
  										additionalProperties: true
  									},
  									{
  										type: "array",
  										items: {
  											anyOf: [
  												{
  													type: "string"
  												},
  												{
  													type: "object",
  													properties: {
  														name: {
  															type: "string"
  														}
  													},
  													required: [
  														"name"
  													],
  													additionalProperties: false
  												},
  												{
  													type: "object",
  													properties: {
  														path: {
  															type: "string"
  														},
  														viewBox: {
  															anyOf: [
  																{
  																	type: "string"
  																},
  																{
  																	type: "array",
  																	prefixItems: [
  																		{
  																			type: "number"
  																		},
  																		{
  																			type: "number"
  																		},
  																		{
  																			type: "number"
  																		},
  																		{
  																			type: "number"
  																		}
  																	],
  																	minItems: 4,
  																	maxItems: 4
  																}
  															]
  														}
  													},
  													required: [
  														"path"
  													],
  													additionalProperties: true
  												}
  											]
  										}
  									}
  								]
  							},
  							fit: {
  								type: "string"
  							},
  							scale: {
  								type: "number"
  							},
  							padding: {
  								type: "number"
  							},
  							fallback: {
  								type: "string"
  							},
  							outline: {
  								type: "boolean"
  							},
  							outlineWidth: {
  								type: "number"
  							}
  						},
  						additionalProperties: false
  					},
  					size: {
  						anyOf: [
  							{
  								"const": "auto"
  							},
  							{
  								type: "number"
  							}
  						]
  					},
  					columns: {
  						type: "object",
  						properties: {
  							size: {
  								anyOf: [
  									{
  										"const": "inherit"
  									},
  									{
  										type: "number"
  									}
  								]
  							}
  						},
  						additionalProperties: false
  					},
  					grid: {
  						type: "object",
  						properties: {
  							columns: {
  								type: "number"
  							},
  							total: {
  								type: "number"
  							},
  							fillFrom: {
  								type: "string"
  							},
  							split: {
  								type: "boolean"
  							},
  							tileColumns: {
  								type: "number"
  							},
  							max: {
  								type: "number"
  							},
  							trackColor: {
  								type: "string"
  							}
  						},
  						additionalProperties: false
  					},
  					arc: {
  						type: "object",
  						properties: {
  							startAngle: {
  								type: "number"
  							},
  							endAngle: {
  								type: "number"
  							},
  							innerRadiusRatio: {
  								type: "number"
  							},
  							rows: {
  								anyOf: [
  									{
  										"const": "auto"
  									},
  									{
  										type: "number"
  									}
  								]
  							}
  						},
  						additionalProperties: false
  					},
  					gather: {
  						type: "object",
  						properties: {
  							easing: {
  								type: "string"
  							},
  							overshoot: {
  								type: "number"
  							},
  							enter: {
  								type: "string"
  							},
  							motion: {
  								type: "string"
  							},
  							spring: {
  								type: "string"
  							}
  						},
  						additionalProperties: false
  					},
  					sizeByValue: {
  						type: "object",
  						properties: {
  							enabled: {
  								type: "boolean"
  							},
  							maxRadius: {
  								anyOf: [
  									{
  										"const": "auto"
  									},
  									{
  										type: "number"
  									}
  								]
  							},
  							minRadius: {
  								type: "number"
  							},
  							scale: {
  								type: "string"
  							}
  						},
  						additionalProperties: false
  					},
  					spacing: {
  						type: "number"
  					},
  					borderRadius: {
  						type: "number"
  					},
  					unitValue: {
  						type: "number"
  					},
  					maxUnits: {
  						type: "number"
  					},
  					sortByGroup: {
  						type: "boolean"
  					},
  					clusterLabels: {
  						type: "object",
  						properties: {
  							show: {
  								type: "boolean"
  							},
  							position: {
  								type: "string"
  							},
  							curved: {
  								type: "boolean"
  							},
  							color: {
  								type: "string"
  							},
  							offsetY: {
  								type: "number"
  							},
  							formatter: {
  								"x-wcc-type": "function"
  							},
  							fontSize: {
  								type: "string"
  							},
  							fontFamily: {
  								type: "string"
  							},
  							fontWeight: {
  								anyOf: [
  									{
  										type: "string"
  									},
  									{
  										type: "number"
  									}
  								]
  							},
  							external: {
  								type: "object",
  								properties: {
  									show: {
  										type: "boolean"
  									},
  									offsetX: {
  										type: "number"
  									},
  									offsetY: {
  										type: "number"
  									},
  									connector: {
  										type: "object",
  										properties: {
  											show: {
  												type: "boolean"
  											},
  											width: {
  												type: "number"
  											},
  											color: {
  												type: "string"
  											},
  											gap: {
  												type: "number"
  											},
  											length: {
  												type: "number"
  											}
  										},
  										additionalProperties: false
  									}
  								},
  								additionalProperties: false
  							}
  						},
  						additionalProperties: false
  					},
  					tooltip: {
  						type: "object",
  						properties: {
  							formatter: {
  								"x-wcc-type": "function"
  							}
  						},
  						additionalProperties: false
  					}
  				},
  				additionalProperties: false
  			},
  			streamgraph: {
  				type: "object",
  				properties: {
  					offset: {
  						type: "string",
  						"enum": [
  							"wiggle",
  							"silhouette",
  							"zero",
  							"expand"
  						]
  					},
  					order: {
  						type: "string",
  						"enum": [
  							"none",
  							"inside-out",
  							"inverse"
  						]
  					},
  					hover: {
  						type: "object",
  						properties: {
  							show: {
  								type: "boolean"
  							},
  							opacity: {
  								type: "number"
  							}
  						},
  						additionalProperties: false
  					},
  					labels: {
  						type: "object",
  						properties: {
  							show: {
  								type: "boolean"
  							},
  							minWidth: {
  								type: "number"
  							},
  							minFontSize: {
  								type: "number"
  							},
  							maxFontSize: {
  								type: "number"
  							},
  							style: {
  								type: "object",
  								properties: {
  									fontSize: {
  										type: "string"
  									},
  									fontFamily: {
  										type: "string"
  									},
  									fontWeight: {
  										anyOf: [
  											{
  												type: "string"
  											},
  											{
  												type: "number"
  											}
  										]
  									},
  									colors: {
  										type: "array",
  										items: {
  											type: "string"
  										}
  									}
  								},
  								additionalProperties: false
  							}
  						},
  						additionalProperties: false
  					}
  				},
  				additionalProperties: false
  			},
  			calendar: {
  				type: "object",
  				properties: {
  					weekStart: {
  						type: "number"
  					},
  					start: {
  						anyOf: [
  							{
  								type: "string"
  							},
  							{
  								type: "number"
  							},
  							{
  								"x-wcc-type": "Date"
  							}
  						]
  					},
  					end: {
  						anyOf: [
  							{
  								type: "string"
  							},
  							{
  								type: "number"
  							},
  							{
  								"x-wcc-type": "Date"
  							}
  						]
  					},
  					aggregate: {
  						type: "string",
  						"enum": [
  							"last",
  							"sum",
  							"max",
  							"min",
  							"mean"
  						]
  					},
  					dayLabels: {
  						anyOf: [
  							{
  								type: "string",
  								"enum": [
  									"all",
  									"alternate"
  								]
  							},
  							{
  								"const": false
  							}
  						]
  					},
  					dayNames: {
  						type: "array",
  						items: {
  							type: "string"
  						}
  					},
  					monthNames: {
  						type: "array",
  						items: {
  							type: "string"
  						}
  					},
  					emptyColor: {
  						type: "string"
  					},
  					color: {
  						type: "string"
  					},
  					formatter: {
  						"x-wcc-type": "function"
  					}
  				},
  				additionalProperties: false
  			},
  			barRace: {
  				type: "object",
  				properties: {
  					maxBars: {
  						type: "number"
  					},
  					sort: {
  						type: "string",
  						"enum": [
  							"asc",
  							"desc"
  						]
  					},
  					nulls: {
  						type: "string",
  						"enum": [
  							"hide",
  							"dash"
  						]
  					},
  					speed: {
  						type: "number"
  					},
  					colors: {
  						anyOf: [
  							{
  								type: "string"
  							},
  							{
  								type: "array",
  								items: {
  									type: "string"
  								}
  							}
  						]
  					},
  					labels: {
  						type: "object",
  						properties: {
  							show: {
  								type: "boolean"
  							},
  							fontSize: {
  								type: "number"
  							}
  						},
  						additionalProperties: false
  					},
  					values: {
  						type: "object",
  						properties: {
  							show: {
  								type: "boolean"
  							},
  							fontSize: {
  								type: "number"
  							},
  							decimals: {
  								type: "number"
  							},
  							formatter: {
  								"x-wcc-type": "function"
  							},
  							nullLabel: {
  								type: "string"
  							}
  						},
  						additionalProperties: false
  					},
  					ticker: {
  						type: "object",
  						properties: {
  							show: {
  								type: "boolean"
  							},
  							text: {
  								anyOf: [
  									{
  										type: "string"
  									},
  									{
  										type: "number"
  									},
  									{
  										"x-wcc-type": "function"
  									}
  								]
  							},
  							fontSize: {
  								type: "number"
  							},
  							color: {
  								type: "string"
  							},
  							opacity: {
  								type: "number"
  							}
  						},
  						additionalProperties: false
  					},
  					cut: {
  						type: "object",
  						properties: {
  							show: {
  								anyOf: [
  									{
  										"const": "auto"
  									},
  									{
  										type: "boolean"
  									}
  								]
  							},
  							label: {
  								anyOf: [
  									{
  										"const": false
  									},
  									{
  										type: "string"
  									},
  									{
  										"x-wcc-type": "function"
  									}
  								]
  							},
  							color: {
  								type: "string"
  							}
  						},
  						additionalProperties: false
  					}
  				},
  				additionalProperties: false
  			},
  			slope: {
  				type: "object",
  				properties: {
  					colorBy: {
  						type: "string",
  						"enum": [
  							"series",
  							"direction"
  						]
  					},
  					upColor: {
  						type: "string"
  					},
  					downColor: {
  						type: "string"
  					},
  					flatColor: {
  						type: "string"
  					},
  					flatThreshold: {
  						type: "number"
  					},
  					highlight: {
  						type: "array",
  						items: {
  							type: "string"
  						}
  					},
  					mutedColor: {
  						type: "string"
  					},
  					labels: {
  						type: "object",
  						properties: {
  							show: {
  								type: "boolean"
  							},
  							left: {
  								anyOf: [
  									{
  										type: "string",
  										"enum": [
  											"name",
  											"value",
  											"both"
  										]
  									},
  									{
  										"const": false
  									}
  								]
  							},
  							right: {
  								anyOf: [
  									{
  										type: "string",
  										"enum": [
  											"name",
  											"value",
  											"both"
  										]
  									},
  									{
  										"const": false
  									}
  								]
  							},
  							fontSize: {
  								type: "number"
  							},
  							minGap: {
  								type: "number"
  							},
  							formatter: {
  								"x-wcc-type": "function"
  							}
  						},
  						additionalProperties: false
  					},
  					periods: {
  						type: "object",
  						properties: {
  							show: {
  								type: "boolean"
  							},
  							fontSize: {
  								type: "number"
  							}
  						},
  						additionalProperties: false
  					},
  					hover: {
  						type: "object",
  						properties: {
  							opacity: {
  								type: "number"
  							}
  						},
  						additionalProperties: false
  					}
  				},
  				additionalProperties: false
  			},
  			beeswarm: {
  				type: "object",
  				properties: {
  					size: {
  						type: "number"
  					},
  					minSize: {
  						type: "number"
  					},
  					padding: {
  						type: "number"
  					},
  					width: {
  						anyOf: [
  							{
  								type: "string"
  							},
  							{
  								type: "number"
  							}
  						]
  					},
  					side: {
  						type: "string",
  						"enum": [
  							"top",
  							"right",
  							"bottom",
  							"left",
  							"both"
  						]
  					},
  					maxPoints: {
  						type: "number"
  					},
  					opacity: {
  						type: "number"
  					},
  					strokeWidth: {
  						type: "number"
  					},
  					strokeColor: {
  						type: "string"
  					},
  					colorScale: {
  						$ref: "#/$defs/WccColorScale"
  					},
  					median: {
  						type: "object",
  						properties: {
  							show: {
  								type: "boolean"
  							},
  							color: {
  								type: "string"
  							},
  							strokeWidth: {
  								type: "number"
  							}
  						},
  						additionalProperties: false
  					}
  				},
  				additionalProperties: false
  			},
  			violin: {
  				type: "object",
  				properties: {
  					bandwidthScale: {
  						type: "number"
  					},
  					kde: {
  						type: "object",
  						properties: {
  							bandwidth: {
  								type: "number"
  							},
  							resolution: {
  								type: "number"
  							}
  						},
  						additionalProperties: false
  					},
  					normalize: {
  						type: "string",
  						"enum": [
  							"group",
  							"individual"
  						]
  					},
  					side: {
  						type: "string",
  						"enum": [
  							"top",
  							"right",
  							"bottom",
  							"left",
  							"both"
  						]
  					},
  					box: {
  						type: "object",
  						properties: {
  							show: {
  								type: "boolean"
  							},
  							width: {
  								anyOf: [
  									{
  										type: "string"
  									},
  									{
  										type: "number"
  									}
  								]
  							},
  							whiskers: {
  								type: "string",
  								"enum": [
  									"minmax",
  									"tukey",
  									"percentile"
  								]
  							},
  							strokeWidth: {
  								type: "number"
  							},
  							fillColor: {
  								type: "string"
  							},
  							capWidth: {
  								type: "number"
  							}
  						},
  						additionalProperties: false
  					},
  					points: {
  						type: "object",
  						properties: {
  							show: {
  								anyOf: [
  									{
  										type: "string",
  										"enum": [
  											"all",
  											"outliers"
  										]
  									},
  									{
  										type: "boolean"
  									}
  								]
  							},
  							shape: {
  								type: "string",
  								"enum": [
  									"circle",
  									"square"
  								]
  							},
  							size: {
  								type: "number"
  							},
  							jitter: {
  								type: "number"
  							},
  							maxPoints: {
  								type: "number"
  							},
  							opacity: {
  								type: "number"
  							},
  							fillColor: {
  								type: "string"
  							},
  							strokeColor: {
  								type: "string"
  							},
  							strokeWidth: {
  								type: "number"
  							},
  							colorScale: {
  								$ref: "#/$defs/WccColorScale"
  							},
  							constrainToViolin: {
  								type: "boolean"
  							},
  							position: {
  								type: "string",
  								"enum": [
  									"top",
  									"right",
  									"bottom",
  									"left",
  									"center"
  								]
  							},
  							laneWidth: {
  								anyOf: [
  									{
  										type: "string"
  									},
  									{
  										type: "number"
  									}
  								]
  							}
  						},
  						additionalProperties: false
  					}
  				},
  				additionalProperties: false
  			},
  			histogram: {
  				type: "object",
  				properties: {
  					bins: {
  						anyOf: [
  							{
  								type: "string"
  							},
  							{
  								type: "number"
  							},
  							{
  								type: "array",
  								items: {
  									type: "number"
  								}
  							}
  						]
  					},
  					binWidth: {
  						type: "number"
  					},
  					range: {
  						type: "array",
  						prefixItems: [
  							{
  								type: "number"
  							},
  							{
  								type: "number"
  							}
  						],
  						minItems: 2,
  						maxItems: 2
  					},
  					normalize: {
  						type: "string",
  						"enum": [
  							"count",
  							"relative",
  							"density"
  						]
  					},
  					cumulative: {
  						type: "boolean"
  					},
  					overlap: {
  						type: "boolean"
  					},
  					niceEdges: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			sankey: {
  				$ref: "#/$defs/WccSankeyOptions",
  				"x-wcc-license": "premium"
  			},
  			chord: {
  				$ref: "#/$defs/WccChordOptions",
  				"x-wcc-license": "premium"
  			},
  			gantt: {
  				$ref: "#/$defs/WccGanttOptions",
  				"x-wcc-license": "premium"
  			},
  			tree: {
  				$ref: "#/$defs/WccTreeOptions",
  				"x-wcc-license": "premium"
  			},
  			stock: {
  				$ref: "#/$defs/WccStockOptions",
  				"x-wcc-license": "premium"
  			},
  			map: {
  				$ref: "#/$defs/WccMapOptions",
  				"x-wcc-license": "premium"
  			},
  			marimekko: {
  				$ref: "#/$defs/WccMarimekkoOptions",
  				"x-wcc-license": "premium"
  			},
  			network: {
  				$ref: "#/$defs/WccNetworkOptions",
  				"x-wcc-license": "premium"
  			},
  			radialColumn: {
  				type: "object",
  				properties: {
  					aggregate: {
  						type: "string",
  						"enum": [
  							"none",
  							"sum",
  							"max",
  							"min",
  							"mean"
  						]
  					},
  					link: {
  						anyOf: [
  							{
  								type: "string",
  								"enum": [
  									"none",
  									"auto",
  									"map",
  									"category",
  									"angle"
  								]
  							},
  							{
  								$ref: "#/$defs/RadialColumnLink"
  							}
  						]
  					},
  					encode: {
  						$ref: "#/$defs/RadialColumnEncode"
  					},
  					markers: {
  						type: "array",
  						items: {
  							type: "object",
  							properties: {
  								at: {
  									anyOf: [
  										{
  											type: "string"
  										},
  										{
  											type: "number"
  										}
  									]
  								},
  								label: {
  									type: "string"
  								},
  								kind: {
  									type: "string"
  								},
  								color: {
  									type: "string"
  								},
  								shape: {
  									type: "string",
  									"enum": [
  										"diamond",
  										"dot"
  									]
  								}
  							},
  							required: [
  								"at"
  							],
  							additionalProperties: false
  						}
  					},
  					startAngle: {
  						type: "number"
  					},
  					endAngle: {
  						type: "number"
  					},
  					innerRadius: {
  						anyOf: [
  							{
  								type: "string"
  							},
  							{
  								type: "number"
  							}
  						]
  					},
  					barPadding: {
  						anyOf: [
  							{
  								"const": "auto"
  							},
  							{
  								type: "number"
  							}
  						]
  					},
  					groupPadding: {
  						type: "number"
  					},
  					stacked: {
  						type: "boolean"
  					},
  					stackGap: {
  						type: "number"
  					},
  					rounded: {
  						type: "boolean"
  					},
  					fill: {
  						type: "object",
  						properties: {
  							type: {
  								type: "string",
  								"enum": [
  									"auto",
  									"series",
  									"value",
  									"spectrum"
  								]
  							},
  							stops: {
  								type: "array",
  								items: {
  									type: "string"
  								}
  							},
  							ranges: {
  								type: "array",
  								items: {
  									type: "object",
  									properties: {
  										from: {
  											type: "number"
  										},
  										to: {
  											type: "number"
  										},
  										color: {
  											type: "string"
  										}
  									},
  									required: [
  										"from",
  										"to",
  										"color"
  									],
  									additionalProperties: false
  								}
  							},
  							fade: {
  								type: "number"
  							}
  						},
  						additionalProperties: false
  					},
  					track: {
  						type: "object",
  						properties: {
  							show: {
  								type: "boolean"
  							},
  							color: {
  								type: "string"
  							}
  						},
  						additionalProperties: false
  					},
  					baseline: {
  						type: "object",
  						properties: {
  							show: {
  								type: "boolean"
  							}
  						},
  						additionalProperties: false
  					},
  					valueAxis: {
  						type: "object",
  						properties: {
  							show: {
  								type: "boolean"
  							},
  							min: {
  								type: "number"
  							},
  							max: {
  								type: "number"
  							},
  							tickAmount: {
  								type: "number"
  							},
  							nice: {
  								type: "boolean"
  							},
  							rings: {
  								type: "boolean"
  							},
  							labels: {
  								type: "object",
  								properties: {
  									show: {
  										type: "boolean"
  									},
  									formatter: {
  										"x-wcc-type": "function"
  									},
  									readability: {
  										anyOf: [
  											{
  												type: "string",
  												"enum": [
  													"none",
  													"halo",
  													"pill",
  													"auto",
  													"hide"
  												]
  											},
  											{
  												type: "boolean"
  											},
  											{
  												type: "object",
  												properties: {
  													mode: {
  														type: "string",
  														"enum": [
  															"none",
  															"halo",
  															"pill",
  															"auto",
  															"hide"
  														]
  													},
  													fallback: {
  														type: "string",
  														"enum": [
  															"halo",
  															"pill",
  															"hide"
  														]
  													},
  													enabled: {
  														type: "boolean"
  													},
  													contrast: {
  														type: "boolean"
  													},
  													minRatio: {
  														type: "number"
  													},
  													light: {
  														type: "string"
  													},
  													dark: {
  														type: "string"
  													},
  													background: {
  														type: "string"
  													},
  													halo: {
  														type: "object",
  														properties: {
  															width: {
  																type: "number"
  															},
  															color: {
  																type: "string"
  															},
  															opacity: {
  																type: "number"
  															},
  															blur: {
  																type: "number"
  															}
  														},
  														additionalProperties: false
  													},
  													pill: {
  														type: "object",
  														properties: {
  															fill: {
  																type: "string"
  															},
  															opacity: {
  																type: "number"
  															},
  															radius: {
  																type: "number"
  															},
  															padding: {
  																anyOf: [
  																	{
  																		type: "number"
  																	},
  																	{
  																		type: "array",
  																		prefixItems: [
  																			{
  																				type: "number"
  																			},
  																			{
  																				type: "number"
  																			}
  																		],
  																		minItems: 2,
  																		maxItems: 2
  																	}
  																]
  															},
  															stroke: {
  																type: "string"
  															},
  															strokeWidth: {
  																type: "number"
  															},
  															offset: {
  																type: "array",
  																prefixItems: [
  																	{
  																		type: "number"
  																	},
  																	{
  																		type: "number"
  																	}
  																],
  																minItems: 2,
  																maxItems: 2
  															}
  														},
  														additionalProperties: false
  													},
  													shadow: {
  														anyOf: [
  															{
  																type: "boolean"
  															},
  															{
  																type: "object",
  																properties: {
  																	dx: {
  																		type: "number"
  																	},
  																	dy: {
  																		type: "number"
  																	},
  																	blur: {
  																		type: "number"
  																	},
  																	color: {
  																		type: "string"
  																	},
  																	opacity: {
  																		type: "number"
  																	}
  																},
  																additionalProperties: false
  															}
  														]
  													},
  													raise: {
  														type: "boolean"
  													},
  													each: {
  														"x-wcc-type": "function"
  													}
  												},
  												additionalProperties: false
  											}
  										]
  									},
  									angle: {
  										anyOf: [
  											{
  												"const": "auto"
  											},
  											{
  												type: "number"
  											}
  										]
  									},
  									pinAngle: {
  										type: "boolean"
  									}
  								},
  								additionalProperties: false
  							}
  						},
  						additionalProperties: false
  					},
  					categoryLabels: {
  						type: "object",
  						properties: {
  							show: {
  								type: "boolean"
  							},
  							orientation: {
  								type: "string",
  								"enum": [
  									"auto",
  									"horizontal",
  									"radial"
  								]
  							},
  							offset: {
  								type: "number"
  							},
  							maxWidth: {
  								type: "number"
  							},
  							step: {
  								type: "number"
  							},
  							maxCount: {
  								type: "number"
  							},
  							formatter: {
  								"x-wcc-type": "function"
  							}
  						},
  						additionalProperties: false
  					},
  					center: {
  						type: "object",
  						properties: {
  							readability: {
  								anyOf: [
  									{
  										type: "string",
  										"enum": [
  											"none",
  											"halo",
  											"pill",
  											"auto",
  											"hide"
  										]
  									},
  									{
  										type: "boolean"
  									},
  									{
  										type: "object",
  										properties: {
  											mode: {
  												type: "string",
  												"enum": [
  													"none",
  													"halo",
  													"pill",
  													"auto",
  													"hide"
  												]
  											},
  											fallback: {
  												type: "string",
  												"enum": [
  													"halo",
  													"pill",
  													"hide"
  												]
  											},
  											enabled: {
  												type: "boolean"
  											},
  											contrast: {
  												type: "boolean"
  											},
  											minRatio: {
  												type: "number"
  											},
  											light: {
  												type: "string"
  											},
  											dark: {
  												type: "string"
  											},
  											background: {
  												type: "string"
  											},
  											halo: {
  												type: "object",
  												properties: {
  													width: {
  														type: "number"
  													},
  													color: {
  														type: "string"
  													},
  													opacity: {
  														type: "number"
  													},
  													blur: {
  														type: "number"
  													}
  												},
  												additionalProperties: false
  											},
  											pill: {
  												type: "object",
  												properties: {
  													fill: {
  														type: "string"
  													},
  													opacity: {
  														type: "number"
  													},
  													radius: {
  														type: "number"
  													},
  													padding: {
  														anyOf: [
  															{
  																type: "number"
  															},
  															{
  																type: "array",
  																prefixItems: [
  																	{
  																		type: "number"
  																	},
  																	{
  																		type: "number"
  																	}
  																],
  																minItems: 2,
  																maxItems: 2
  															}
  														]
  													},
  													stroke: {
  														type: "string"
  													},
  													strokeWidth: {
  														type: "number"
  													},
  													offset: {
  														type: "array",
  														prefixItems: [
  															{
  																type: "number"
  															},
  															{
  																type: "number"
  															}
  														],
  														minItems: 2,
  														maxItems: 2
  													}
  												},
  												additionalProperties: false
  											},
  											shadow: {
  												anyOf: [
  													{
  														type: "boolean"
  													},
  													{
  														type: "object",
  														properties: {
  															dx: {
  																type: "number"
  															},
  															dy: {
  																type: "number"
  															},
  															blur: {
  																type: "number"
  															},
  															color: {
  																type: "string"
  															},
  															opacity: {
  																type: "number"
  															}
  														},
  														additionalProperties: false
  													}
  												]
  											},
  											raise: {
  												type: "boolean"
  											},
  											each: {
  												"x-wcc-type": "function"
  											}
  										},
  										additionalProperties: false
  									}
  								]
  							},
  							show: {
  								anyOf: [
  									{
  										"const": "auto"
  									},
  									{
  										type: "boolean"
  									}
  								]
  							},
  							label: {
  								type: "string"
  							},
  							value: {
  								anyOf: [
  									{
  										type: "string"
  									},
  									{
  										type: "number"
  									},
  									{
  										"x-wcc-type": "function"
  									}
  								]
  							},
  							formatter: {
  								"x-wcc-type": "function"
  							},
  							hover: {
  								type: "boolean"
  							}
  						},
  						additionalProperties: false
  					},
  					layers: {
  						type: "array",
  						items: {
  							$ref: "#/$defs/RadialColumnLayer"
  						}
  					},
  					layerGap: {
  						type: "number"
  					},
  					hole: {
  						anyOf: [
  							{
  								type: "string"
  							},
  							{
  								type: "number"
  							}
  						]
  					},
  					legend: {
  						type: "object",
  						properties: {
  							show: {
  								anyOf: [
  									{
  										"const": "auto"
  									},
  									{
  										type: "boolean"
  									}
  								]
  							},
  							position: {
  								type: "string",
  								"enum": [
  									"auto",
  									"right",
  									"bottom"
  								]
  							}
  						},
  						additionalProperties: false
  					},
  					plugins: {
  						type: "array",
  						items: {
  							anyOf: [
  								{
  									type: "string"
  								},
  								{
  									$ref: "#/$defs/WccPremiumPlugin"
  								},
  								{
  									type: "array",
  									prefixItems: [
  										{
  											type: "string"
  										},
  										{
  											type: "object",
  											additionalProperties: true
  										}
  									],
  									minItems: 1,
  									maxItems: 2
  								}
  							]
  						}
  					}
  				},
  				additionalProperties: false,
  				"x-wcc-license": "premium"
  			},
  			quint: {
  				$ref: "#/$defs/WccQuintOptions",
  				"x-wcc-license": "premium"
  			},
  			vitalsClock: {
  				$ref: "#/$defs/WccVitalsClockOptions",
  				"x-wcc-license": "premium"
  			},
  			schedule: {
  				$ref: "#/$defs/WccScheduleOptions",
  				"x-wcc-license": "premium"
  			}
  		},
  		additionalProperties: false
  	},
  	responsive: {
  		type: "array",
  		items: {
  			$ref: "#/$defs/ApexResponsive"
  		}
  	},
  	series: {
  		anyOf: [
  			{
  				type: "array",
  				items: {
  					type: "object",
  					properties: {
  						name: {
  							type: "string"
  						},
  						type: {
  							type: "string"
  						},
  						color: {
  							type: "string"
  						},
  						group: {
  							type: "string"
  						},
  						hidden: {
  							type: "boolean"
  						},
  						zIndex: {
  							type: "number"
  						},
  						data: {
  							anyOf: [
  								{
  									type: "array",
  									items: {
  										type: "array",
  										items: {
  											type: "number"
  										}
  									}
  								},
  								{
  									type: "array",
  									items: {
  										anyOf: [
  											{
  												type: "null"
  											},
  											{
  												type: "number"
  											}
  										]
  									}
  								},
  								{
  									type: "array",
  									items: {
  										type: "object",
  										properties: {
  											x: {
  											},
  											y: {
  											},
  											fill: {
  												$ref: "#/$defs/ApexFill"
  											},
  											fillColor: {
  												type: "string"
  											},
  											strokeColor: {
  												type: "string"
  											},
  											meta: {
  											},
  											goals: {
  												type: "array",
  												items: {
  													type: "object",
  													properties: {
  														name: {
  															type: "string"
  														},
  														value: {
  															type: "number"
  														},
  														strokeHeight: {
  															type: "number"
  														},
  														strokeWidth: {
  															type: "number"
  														},
  														strokeColor: {
  															type: "string"
  														},
  														strokeDashArray: {
  															type: "number"
  														},
  														strokeLineCap: {
  															type: "string",
  															"enum": [
  																"square",
  																"butt",
  																"round"
  															]
  														}
  													},
  													required: [
  														"value"
  													],
  													additionalProperties: false
  												}
  											},
  											barHeightOffset: {
  												type: "number"
  											},
  											columnWidthOffset: {
  												type: "number"
  											}
  										},
  										required: [
  											"x",
  											"y"
  										],
  										additionalProperties: false
  									}
  								},
  								{
  									type: "array",
  									items: {
  										type: "object",
  										properties: {
  											x: {
  											},
  											points: {
  												type: "array",
  												items: {
  													type: "number"
  												}
  											},
  											fillColor: {
  												type: "string"
  											},
  											meta: {
  											}
  										},
  										required: [
  											"x",
  											"points"
  										],
  										additionalProperties: false
  									}
  								},
  								{
  									type: "array",
  									items: {
  										type: "array",
  										prefixItems: [
  											{
  												type: "number"
  											},
  											{
  												anyOf: [
  													{
  														type: "null"
  													},
  													{
  														type: "number"
  													}
  												]
  											}
  										],
  										minItems: 2,
  										maxItems: 2
  									}
  								},
  								{
  									type: "array",
  									items: {
  										type: "array",
  										prefixItems: [
  											{
  												type: "number"
  											},
  											{
  												type: "array",
  												items: {
  													anyOf: [
  														{
  															type: "null"
  														},
  														{
  															type: "number"
  														}
  													]
  												}
  											}
  										],
  										minItems: 2,
  										maxItems: 2
  									}
  								}
  							]
  						}
  					},
  					required: [
  						"data"
  					],
  					additionalProperties: false
  				}
  			},
  			{
  				type: "array",
  				items: {
  					type: "number"
  				}
  			},
  			{
  				type: "array",
  				items: {
  					$ref: "#/$defs/WccSeries"
  				}
  			}
  		]
  	},
  	states: {
  		$ref: "#/$defs/ApexStates"
  	},
  	stroke: {
  		$ref: "#/$defs/ApexStroke"
  	},
  	subtitle: {
  		$ref: "#/$defs/ApexTitleSubtitle"
  	},
  	theme: {
  		$ref: "#/$defs/ApexTheme"
  	},
  	title: {
  		$ref: "#/$defs/ApexTitleSubtitle"
  	},
  	tooltip: {
  		$ref: "#/$defs/ApexTooltip"
  	},
  	xaxis: {
  		$ref: "#/$defs/ApexXAxis"
  	},
  	yaxis: {
  		anyOf: [
  			{
  				$ref: "#/$defs/ApexYAxis"
  			},
  			{
  				type: "array",
  				items: {
  					$ref: "#/$defs/ApexYAxis"
  				}
  			}
  		]
  	},
  	wcc: {
  		type: "object",
  		properties: {
  			a11y: {
  				type: "object",
  				properties: {
  					dataTable: {
  						anyOf: [
  							{
  								type: "string",
  								"enum": [
  									"hidden",
  									"details"
  								]
  							},
  							{
  								type: "boolean"
  							}
  						]
  					},
  					dataTableMaxRows: {
  						type: "number"
  					},
  					strings: {
  						type: "object",
  						additionalProperties: true
  					}
  				},
  				additionalProperties: false
  			},
  			performance: {
  				type: "object",
  				properties: {
  					decimate: {
  						type: "boolean"
  					},
  					denseMarks: {
  						anyOf: [
  							{
  								"const": "auto"
  							},
  							{
  								type: "boolean"
  							}
  						]
  					},
  					denseThreshold: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			},
  			narrative: {
  				$ref: "#/$defs/WccNarrativeOptions"
  			}
  		},
  		additionalProperties: false
  	},
  	drilldown: {
  		$ref: "#/$defs/WccDrilldownOptions"
  	},
  	highlightFilter: {
  		$ref: "#/$defs/WccHighlightFilterOptions"
  	},
  	trellis: {
  		$ref: "#/$defs/WccTrellisOptions"
  	}
  };
  const additionalProperties = false;
  const $defs = {
  	AnnotationLabel: {
  		type: "object",
  		properties: {
  			borderColor: {
  				type: "string"
  			},
  			borderWidth: {
  				type: "number"
  			},
  			borderRadius: {
  				type: "number"
  			},
  			text: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "array",
  						items: {
  							type: "string"
  						}
  					}
  				]
  			},
  			textAnchor: {
  				type: "string"
  			},
  			offsetX: {
  				type: "number"
  			},
  			offsetY: {
  				type: "number"
  			},
  			style: {
  				$ref: "#/$defs/AnnotationStyle"
  			},
  			position: {
  				type: "string"
  			},
  			orientation: {
  				type: "string"
  			},
  			mouseEnter: {
  				"x-wcc-type": "Function"
  			},
  			mouseLeave: {
  				"x-wcc-type": "Function"
  			},
  			click: {
  				"x-wcc-type": "Function"
  			}
  		},
  		additionalProperties: false
  	},
  	AnnotationStyle: {
  		type: "object",
  		properties: {
  			background: {
  				type: "string"
  			},
  			color: {
  				type: "string"
  			},
  			fontFamily: {
  				type: "string"
  			},
  			fontWeight: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "number"
  					}
  				]
  			},
  			fontSize: {
  				type: "string"
  			},
  			cssClass: {
  				type: "string"
  			},
  			padding: {
  				type: "object",
  				properties: {
  					left: {
  						type: "number"
  					},
  					right: {
  						type: "number"
  					},
  					top: {
  						type: "number"
  					},
  					bottom: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			}
  		},
  		additionalProperties: false
  	},
  	ApexAnnotations: {
  		type: "object",
  		properties: {
  			yaxis: {
  				type: "array",
  				items: {
  					$ref: "#/$defs/YAxisAnnotations"
  				}
  			},
  			xaxis: {
  				type: "array",
  				items: {
  					$ref: "#/$defs/XAxisAnnotations"
  				}
  			},
  			points: {
  				type: "array",
  				items: {
  					$ref: "#/$defs/PointAnnotations"
  				}
  			},
  			texts: {
  				type: "array",
  				items: {
  					$ref: "#/$defs/TextAnnotations"
  				}
  			},
  			images: {
  				type: "array",
  				items: {
  					$ref: "#/$defs/ImageAnnotations"
  				}
  			}
  		},
  		additionalProperties: false
  	},
  	ApexColorStop: {
  		type: "object",
  		properties: {
  			offset: {
  				type: "number"
  			},
  			color: {
  				type: "string"
  			},
  			opacity: {
  				type: "number"
  			}
  		},
  		required: [
  			"offset",
  			"color",
  			"opacity"
  		],
  		additionalProperties: false
  	},
  	ApexDataLabels: {
  		type: "object",
  		properties: {
  			readability: {
  				anyOf: [
  					{
  						type: "string",
  						"enum": [
  							"none",
  							"halo",
  							"pill",
  							"auto",
  							"hide"
  						]
  					},
  					{
  						type: "boolean"
  					},
  					{
  						type: "object",
  						properties: {
  							mode: {
  								type: "string",
  								"enum": [
  									"none",
  									"halo",
  									"pill",
  									"auto",
  									"hide"
  								]
  							},
  							fallback: {
  								type: "string",
  								"enum": [
  									"halo",
  									"pill",
  									"hide"
  								]
  							},
  							enabled: {
  								type: "boolean"
  							},
  							contrast: {
  								type: "boolean"
  							},
  							minRatio: {
  								type: "number"
  							},
  							light: {
  								type: "string"
  							},
  							dark: {
  								type: "string"
  							},
  							background: {
  								type: "string"
  							},
  							halo: {
  								type: "object",
  								properties: {
  									width: {
  										type: "number"
  									},
  									color: {
  										type: "string"
  									},
  									opacity: {
  										type: "number"
  									},
  									blur: {
  										type: "number"
  									}
  								},
  								additionalProperties: false
  							},
  							pill: {
  								type: "object",
  								properties: {
  									fill: {
  										type: "string"
  									},
  									opacity: {
  										type: "number"
  									},
  									radius: {
  										type: "number"
  									},
  									padding: {
  										anyOf: [
  											{
  												type: "number"
  											},
  											{
  												type: "array",
  												prefixItems: [
  													{
  														type: "number"
  													},
  													{
  														type: "number"
  													}
  												],
  												minItems: 2,
  												maxItems: 2
  											}
  										]
  									},
  									stroke: {
  										type: "string"
  									},
  									strokeWidth: {
  										type: "number"
  									},
  									offset: {
  										type: "array",
  										prefixItems: [
  											{
  												type: "number"
  											},
  											{
  												type: "number"
  											}
  										],
  										minItems: 2,
  										maxItems: 2
  									}
  								},
  								additionalProperties: false
  							},
  							shadow: {
  								anyOf: [
  									{
  										type: "boolean"
  									},
  									{
  										type: "object",
  										properties: {
  											dx: {
  												type: "number"
  											},
  											dy: {
  												type: "number"
  											},
  											blur: {
  												type: "number"
  											},
  											color: {
  												type: "string"
  											},
  											opacity: {
  												type: "number"
  											}
  										},
  										additionalProperties: false
  									}
  								]
  							},
  							raise: {
  								type: "boolean"
  							},
  							each: {
  								"x-wcc-type": "function"
  							}
  						},
  						additionalProperties: false
  					}
  				]
  			},
  			enabled: {
  				type: "boolean"
  			},
  			enabledOnSeries: {
  				type: "array",
  				items: {
  					type: "number"
  				}
  			},
  			textAnchor: {
  				type: "string",
  				"enum": [
  					"end",
  					"start",
  					"middle"
  				]
  			},
  			distributed: {
  				type: "boolean"
  			},
  			offsetX: {
  				type: "number"
  			},
  			offsetY: {
  				type: "number"
  			},
  			style: {
  				type: "object",
  				properties: {
  					fontSize: {
  						type: "string"
  					},
  					fontFamily: {
  						type: "string"
  					},
  					fontWeight: {
  						anyOf: [
  							{
  								type: "string"
  							},
  							{
  								type: "number"
  							}
  						]
  					},
  					colors: {
  						type: "array",
  						items: {
  						}
  					}
  				},
  				additionalProperties: false
  			},
  			background: {
  				type: "object",
  				properties: {
  					enabled: {
  						type: "boolean"
  					},
  					foreColor: {
  						type: "string"
  					},
  					backgroundColor: {
  						type: "string"
  					},
  					borderRadius: {
  						type: "number"
  					},
  					padding: {
  						type: "number"
  					},
  					opacity: {
  						type: "number"
  					},
  					borderWidth: {
  						type: "number"
  					},
  					borderColor: {
  						type: "string"
  					},
  					dropShadow: {
  						$ref: "#/$defs/ApexDropShadow"
  					}
  				},
  				additionalProperties: false
  			},
  			dropShadow: {
  				$ref: "#/$defs/ApexDropShadow"
  			},
  			formatter: {
  				"x-wcc-type": "function"
  			}
  		},
  		additionalProperties: false
  	},
  	ApexDiscretePoint: {
  		type: "object",
  		properties: {
  			seriesIndex: {
  				type: "number"
  			},
  			dataPointIndex: {
  				type: "number"
  			},
  			fillColor: {
  				type: "string"
  			},
  			strokeColor: {
  				type: "string"
  			},
  			size: {
  				type: "number"
  			},
  			shape: {
  				anyOf: [
  					{
  						type: "string",
  						"enum": [
  							"line",
  							"circle",
  							"square",
  							"rect",
  							"cross",
  							"plus",
  							"star",
  							"sparkle",
  							"diamond",
  							"triangle"
  						]
  					},
  					{
  						type: "array",
  						items: {
  							type: "string",
  							"enum": [
  								"line",
  								"circle",
  								"square",
  								"rect",
  								"cross",
  								"plus",
  								"star",
  								"sparkle",
  								"diamond",
  								"triangle"
  							]
  						}
  					}
  				]
  			}
  		},
  		additionalProperties: false
  	},
  	ApexDropShadow: {
  		type: "object",
  		properties: {
  			enabled: {
  				type: "boolean"
  			},
  			top: {
  				type: "number"
  			},
  			left: {
  				type: "number"
  			},
  			blur: {
  				type: "number"
  			},
  			opacity: {
  				type: "number"
  			},
  			color: {
  				type: "string"
  			}
  		},
  		additionalProperties: false
  	},
  	ApexFill: {
  		type: "object",
  		properties: {
  			colors: {
  				type: "array",
  				items: {
  				}
  			},
  			opacity: {
  				anyOf: [
  					{
  						type: "number"
  					},
  					{
  						type: "array",
  						items: {
  							type: "number"
  						}
  					}
  				]
  			},
  			type: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "array",
  						items: {
  							type: "string"
  						}
  					}
  				]
  			},
  			gradient: {
  				type: "object",
  				properties: {
  					shade: {
  						type: "string"
  					},
  					type: {
  						type: "string"
  					},
  					shadeIntensity: {
  						type: "number"
  					},
  					gradientToColors: {
  						type: "array",
  						items: {
  							type: "string"
  						}
  					},
  					inverseColors: {
  						type: "boolean"
  					},
  					opacityFrom: {
  						anyOf: [
  							{
  								type: "number"
  							},
  							{
  								type: "array",
  								items: {
  									type: "number"
  								}
  							}
  						]
  					},
  					opacityTo: {
  						anyOf: [
  							{
  								type: "number"
  							},
  							{
  								type: "array",
  								items: {
  									type: "number"
  								}
  							}
  						]
  					},
  					stops: {
  						type: "array",
  						items: {
  							type: "number"
  						}
  					},
  					colorStops: {
  						anyOf: [
  							{
  								type: "array",
  								items: {
  									$ref: "#/$defs/ApexColorStop"
  								}
  							},
  							{
  								type: "array",
  								items: {
  									type: "array",
  									items: {
  										$ref: "#/$defs/ApexColorStop"
  									}
  								}
  							}
  						]
  					}
  				},
  				additionalProperties: false
  			},
  			image: {
  				type: "object",
  				properties: {
  					src: {
  						anyOf: [
  							{
  								type: "string"
  							},
  							{
  								type: "array",
  								items: {
  									type: "string"
  								}
  							}
  						]
  					},
  					width: {
  						type: "number"
  					},
  					height: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			},
  			pattern: {
  				type: "object",
  				properties: {
  					style: {
  						anyOf: [
  							{
  								type: "string"
  							},
  							{
  								type: "array",
  								items: {
  									type: "string"
  								}
  							}
  						]
  					},
  					width: {
  						type: "number"
  					},
  					height: {
  						type: "number"
  					},
  					strokeWidth: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			}
  		},
  		additionalProperties: false
  	},
  	ApexForecastDataPoints: {
  		type: "object",
  		properties: {
  			count: {
  				type: "number"
  			},
  			fillOpacity: {
  				type: "number"
  			},
  			strokeWidth: {
  				type: "number"
  			},
  			dashArray: {
  				type: "number"
  			}
  		},
  		additionalProperties: false
  	},
  	ApexGrid: {
  		type: "object",
  		properties: {
  			show: {
  				type: "boolean"
  			},
  			borderColor: {
  				type: "string"
  			},
  			strokeDashArray: {
  				type: "number"
  			},
  			position: {
  				type: "string",
  				"enum": [
  					"front",
  					"back"
  				]
  			},
  			xaxis: {
  				type: "object",
  				properties: {
  					lines: {
  						type: "object",
  						properties: {
  							show: {
  								type: "boolean"
  							},
  							offsetX: {
  								type: "number"
  							},
  							offsetY: {
  								type: "number"
  							}
  						},
  						additionalProperties: false
  					}
  				},
  				additionalProperties: false
  			},
  			yaxis: {
  				type: "object",
  				properties: {
  					lines: {
  						type: "object",
  						properties: {
  							show: {
  								type: "boolean"
  							},
  							offsetX: {
  								type: "number"
  							},
  							offsetY: {
  								type: "number"
  							}
  						},
  						additionalProperties: false
  					}
  				},
  				additionalProperties: false
  			},
  			row: {
  				type: "object",
  				properties: {
  					colors: {
  						type: "array",
  						items: {
  							type: "string"
  						}
  					},
  					opacity: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			},
  			column: {
  				type: "object",
  				properties: {
  					colors: {
  						type: "array",
  						items: {
  							type: "string"
  						}
  					},
  					opacity: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			},
  			padding: {
  				type: "object",
  				properties: {
  					top: {
  						type: "number"
  					},
  					right: {
  						type: "number"
  					},
  					bottom: {
  						type: "number"
  					},
  					left: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			}
  		},
  		additionalProperties: false
  	},
  	ApexLegend: {
  		type: "object",
  		properties: {
  			show: {
  				type: "boolean"
  			},
  			showForSingleSeries: {
  				type: "boolean"
  			},
  			showForNullSeries: {
  				type: "boolean"
  			},
  			showForZeroSeries: {
  				type: "boolean"
  			},
  			floating: {
  				type: "boolean"
  			},
  			inverseOrder: {
  				type: "boolean"
  			},
  			position: {
  				type: "string",
  				"enum": [
  					"top",
  					"right",
  					"bottom",
  					"left"
  				]
  			},
  			horizontalAlign: {
  				type: "string",
  				"enum": [
  					"right",
  					"left",
  					"center"
  				]
  			},
  			fontSize: {
  				type: "string"
  			},
  			fontFamily: {
  				type: "string"
  			},
  			fontWeight: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "number"
  					}
  				]
  			},
  			width: {
  				type: "number"
  			},
  			height: {
  				type: "number"
  			},
  			offsetX: {
  				type: "number"
  			},
  			offsetY: {
  				type: "number"
  			},
  			formatter: {
  				"x-wcc-type": "function"
  			},
  			tooltipHoverFormatter: {
  				"x-wcc-type": "function"
  			},
  			customLegendItems: {
  				type: "array",
  				items: {
  					type: "string"
  				}
  			},
  			clusterGroupedSeries: {
  				type: "boolean"
  			},
  			clusterGroupedSeriesOrientation: {
  				type: "string"
  			},
  			labels: {
  				type: "object",
  				properties: {
  					colors: {
  						anyOf: [
  							{
  								type: "string"
  							},
  							{
  								type: "array",
  								items: {
  									type: "string"
  								}
  							}
  						]
  					},
  					useSeriesColors: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			markers: {
  				type: "object",
  				properties: {
  					size: {
  						type: "number"
  					},
  					strokeWidth: {
  						anyOf: [
  							{
  								type: "number"
  							},
  							{
  								type: "array",
  								items: {
  									type: "number"
  								}
  							}
  						]
  					},
  					fillColors: {
  						type: "array",
  						items: {
  							type: "string"
  						}
  					},
  					shape: {
  						anyOf: [
  							{
  								type: "string",
  								"enum": [
  									"line",
  									"circle",
  									"square",
  									"rect",
  									"cross",
  									"plus",
  									"star",
  									"sparkle",
  									"diamond",
  									"triangle"
  								]
  							},
  							{
  								type: "array",
  								items: {
  									type: "string",
  									"enum": [
  										"line",
  										"circle",
  										"square",
  										"rect",
  										"cross",
  										"plus",
  										"star",
  										"sparkle",
  										"diamond",
  										"triangle"
  									]
  								}
  							}
  						]
  					},
  					offsetX: {
  						type: "number"
  					},
  					offsetY: {
  						type: "number"
  					},
  					customHTML: {
  						anyOf: [
  							{
  								"x-wcc-type": "function"
  							},
  							{
  								type: "array",
  								items: {
  									"x-wcc-type": "function"
  								}
  							}
  						]
  					},
  					onClick: {
  						"x-wcc-type": "function"
  					}
  				},
  				additionalProperties: false
  			},
  			itemMargin: {
  				type: "object",
  				properties: {
  					horizontal: {
  						type: "number"
  					},
  					vertical: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			},
  			onItemClick: {
  				type: "object",
  				properties: {
  					toggleDataSeries: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			onItemHover: {
  				type: "object",
  				properties: {
  					highlightDataSeries: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			}
  		},
  		additionalProperties: false
  	},
  	ApexLocale: {
  		type: "object",
  		properties: {
  			name: {
  				type: "string"
  			},
  			options: {
  				type: "object",
  				properties: {
  					months: {
  						type: "array",
  						items: {
  							type: "string"
  						}
  					},
  					shortMonths: {
  						type: "array",
  						items: {
  							type: "string"
  						}
  					},
  					days: {
  						type: "array",
  						items: {
  							type: "string"
  						}
  					},
  					shortDays: {
  						type: "array",
  						items: {
  							type: "string"
  						}
  					},
  					toolbar: {
  						type: "object",
  						properties: {
  							selection: {
  								type: "string"
  							},
  							selectionZoom: {
  								type: "string"
  							},
  							zoomIn: {
  								type: "string"
  							},
  							zoomOut: {
  								type: "string"
  							},
  							pan: {
  								type: "string"
  							},
  							reset: {
  								type: "string"
  							},
  							exportToSVG: {
  								type: "string"
  							},
  							exportToPNG: {
  								type: "string"
  							},
  							exportToCSV: {
  								type: "string"
  							}
  						},
  						additionalProperties: false
  					}
  				},
  				additionalProperties: false
  			}
  		},
  		additionalProperties: false
  	},
  	ApexMarkers: {
  		type: "object",
  		properties: {
  			size: {
  				anyOf: [
  					{
  						type: "number"
  					},
  					{
  						type: "array",
  						items: {
  							type: "number"
  						}
  					}
  				]
  			},
  			colors: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "array",
  						items: {
  							type: "string"
  						}
  					}
  				]
  			},
  			strokeColors: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "array",
  						items: {
  							type: "string"
  						}
  					}
  				]
  			},
  			strokeWidth: {
  				anyOf: [
  					{
  						type: "number"
  					},
  					{
  						type: "array",
  						items: {
  							type: "number"
  						}
  					}
  				]
  			},
  			strokeOpacity: {
  				anyOf: [
  					{
  						type: "number"
  					},
  					{
  						type: "array",
  						items: {
  							type: "number"
  						}
  					}
  				]
  			},
  			strokeDashArray: {
  				anyOf: [
  					{
  						type: "number"
  					},
  					{
  						type: "array",
  						items: {
  							type: "number"
  						}
  					}
  				]
  			},
  			fillOpacity: {
  				anyOf: [
  					{
  						type: "number"
  					},
  					{
  						type: "array",
  						items: {
  							type: "number"
  						}
  					}
  				]
  			},
  			discrete: {
  				type: "array",
  				items: {
  					$ref: "#/$defs/ApexDiscretePoint"
  				}
  			},
  			shape: {
  				anyOf: [
  					{
  						type: "string",
  						"enum": [
  							"line",
  							"circle",
  							"square",
  							"rect",
  							"cross",
  							"plus",
  							"star",
  							"sparkle",
  							"diamond",
  							"triangle"
  						]
  					},
  					{
  						type: "array",
  						items: {
  							type: "string",
  							"enum": [
  								"line",
  								"circle",
  								"square",
  								"rect",
  								"cross",
  								"plus",
  								"star",
  								"sparkle",
  								"diamond",
  								"triangle"
  							]
  						}
  					}
  				]
  			},
  			offsetX: {
  				type: "number"
  			},
  			offsetY: {
  				type: "number"
  			},
  			showNullDataPoints: {
  				type: "boolean"
  			},
  			onClick: {
  				"x-wcc-type": "function"
  			},
  			onDblClick: {
  				"x-wcc-type": "function"
  			},
  			hover: {
  				type: "object",
  				properties: {
  					size: {
  						type: "number"
  					},
  					sizeOffset: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			}
  		},
  		additionalProperties: false
  	},
  	ApexNoData: {
  		type: "object",
  		properties: {
  			text: {
  				type: "string"
  			},
  			align: {
  				type: "string",
  				"enum": [
  					"right",
  					"left",
  					"center"
  				]
  			},
  			verticalAlign: {
  				type: "string",
  				"enum": [
  					"top",
  					"bottom",
  					"middle"
  				]
  			},
  			offsetX: {
  				type: "number"
  			},
  			offsetY: {
  				type: "number"
  			},
  			style: {
  				type: "object",
  				properties: {
  					color: {
  						type: "string"
  					},
  					fontSize: {
  						type: "string"
  					},
  					fontFamily: {
  						type: "string"
  					}
  				},
  				additionalProperties: false
  			}
  		},
  		additionalProperties: false
  	},
  	ApexResponsive: {
  		type: "object",
  		properties: {
  			breakpoint: {
  				type: "number"
  			},
  			options: {
  			}
  		},
  		additionalProperties: false
  	},
  	ApexStates: {
  		type: "object",
  		properties: {
  			hover: {
  				type: "object",
  				properties: {
  					filter: {
  						type: "object",
  						properties: {
  							type: {
  								type: "string"
  							}
  						},
  						additionalProperties: false
  					}
  				},
  				additionalProperties: false
  			},
  			active: {
  				type: "object",
  				properties: {
  					allowMultipleDataPointsSelection: {
  						type: "boolean"
  					},
  					filter: {
  						type: "object",
  						properties: {
  							type: {
  								type: "string"
  							}
  						},
  						additionalProperties: false
  					}
  				},
  				additionalProperties: false
  			}
  		},
  		additionalProperties: false
  	},
  	ApexStroke: {
  		type: "object",
  		properties: {
  			show: {
  				type: "boolean"
  			},
  			curve: {
  				anyOf: [
  					{
  						type: "string",
  						"enum": [
  							"straight",
  							"smooth",
  							"stepline",
  							"linestep",
  							"monotoneCubic"
  						]
  					},
  					{
  						type: "array",
  						items: {
  							type: "string",
  							"enum": [
  								"straight",
  								"smooth",
  								"stepline",
  								"linestep",
  								"monotoneCubic"
  							]
  						}
  					}
  				]
  			},
  			lineCap: {
  				type: "string",
  				"enum": [
  					"square",
  					"butt",
  					"round"
  				]
  			},
  			colors: {
  				anyOf: [
  					{
  						type: "array",
  						items: {
  						}
  					},
  					{
  						type: "array",
  						items: {
  							type: "string"
  						}
  					}
  				]
  			},
  			width: {
  				anyOf: [
  					{
  						type: "number"
  					},
  					{
  						type: "array",
  						items: {
  							type: "number"
  						}
  					}
  				]
  			},
  			dashArray: {
  				anyOf: [
  					{
  						type: "number"
  					},
  					{
  						type: "array",
  						items: {
  							type: "number"
  						}
  					}
  				]
  			},
  			fill: {
  				$ref: "#/$defs/ApexFill"
  			}
  		},
  		additionalProperties: false
  	},
  	ApexTheme: {
  		type: "object",
  		properties: {
  			accessibility: {
  				type: "object",
  				properties: {
  					colorBlindMode: {
  						type: "string",
  						"enum": [
  							"",
  							"deuteranopia",
  							"protanopia",
  							"tritanopia",
  							"highContrast"
  						]
  					}
  				},
  				additionalProperties: false
  			},
  			mode: {
  				type: "string",
  				"enum": [
  					"auto",
  					"light",
  					"dark"
  				]
  			},
  			preset: {
  				type: "string",
  				"enum": [
  					"coastal",
  					"midnight",
  					"paper",
  					"accessible",
  					"classic"
  				]
  			},
  			tokens: {
  				anyOf: [
  					{
  						type: "boolean"
  					},
  					{
  						$ref: "#/$defs/WccThemeTokens"
  					}
  				]
  			},
  			follow: {
  				anyOf: [
  					{
  						"const": "os"
  					},
  					{
  						"const": false
  					}
  				]
  			},
  			name: {
  				type: "string"
  			},
  			palette: {
  				type: "string"
  			},
  			monochrome: {
  				type: "object",
  				properties: {
  					enabled: {
  						type: "boolean"
  					},
  					color: {
  						type: "string"
  					},
  					shadeTo: {
  						type: "string",
  						"enum": [
  							"light",
  							"dark"
  						]
  					},
  					shadeIntensity: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			}
  		},
  		additionalProperties: false
  	},
  	ApexTitleSubtitle: {
  		type: "object",
  		properties: {
  			text: {
  				type: "string"
  			},
  			align: {
  				type: "string",
  				"enum": [
  					"right",
  					"left",
  					"center"
  				]
  			},
  			margin: {
  				type: "number"
  			},
  			offsetX: {
  				type: "number"
  			},
  			offsetY: {
  				type: "number"
  			},
  			floating: {
  				type: "boolean"
  			},
  			style: {
  				type: "object",
  				properties: {
  					fontSize: {
  						type: "string"
  					},
  					fontFamily: {
  						type: "string"
  					},
  					fontWeight: {
  						anyOf: [
  							{
  								type: "string"
  							},
  							{
  								type: "number"
  							}
  						]
  					},
  					color: {
  						type: "string"
  					}
  				},
  				additionalProperties: false
  			}
  		},
  		additionalProperties: false
  	},
  	ApexTooltip: {
  		type: "object",
  		properties: {
  			enabled: {
  				type: "boolean"
  			},
  			enabledOnSeries: {
  				type: "array",
  				items: {
  					type: "number"
  				}
  			},
  			shared: {
  				type: "boolean"
  			},
  			followCursor: {
  				type: "boolean"
  			},
  			intersect: {
  				type: "boolean"
  			},
  			inverseOrder: {
  				type: "boolean"
  			},
  			custom: {
  				anyOf: [
  					{
  						"x-wcc-type": "function"
  					},
  					{
  						type: "array",
  						items: {
  							"x-wcc-type": "function"
  						}
  					}
  				]
  			},
  			fillSeriesColor: {
  				type: "boolean"
  			},
  			theme: {
  				type: "string"
  			},
  			cssClass: {
  				type: "string"
  			},
  			hideEmptySeries: {
  				type: "boolean"
  			},
  			style: {
  				type: "object",
  				properties: {
  					fontSize: {
  						type: "string"
  					},
  					fontFamily: {
  						type: "string"
  					}
  				},
  				additionalProperties: false
  			},
  			onDatasetHover: {
  				type: "object",
  				properties: {
  					highlightDataSeries: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			x: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					},
  					format: {
  						type: "string"
  					},
  					formatter: {
  						"x-wcc-type": "function"
  					}
  				},
  				additionalProperties: false
  			},
  			y: {
  				anyOf: [
  					{
  						$ref: "#/$defs/ApexTooltipY"
  					},
  					{
  						type: "array",
  						items: {
  							$ref: "#/$defs/ApexTooltipY"
  						}
  					}
  				]
  			},
  			z: {
  				type: "object",
  				properties: {
  					title: {
  						type: "string"
  					},
  					formatter: {
  						"x-wcc-type": "function"
  					}
  				},
  				additionalProperties: false
  			},
  			marker: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					},
  					fillColors: {
  						type: "array",
  						items: {
  							type: "string"
  						}
  					}
  				},
  				additionalProperties: false
  			},
  			items: {
  				type: "object",
  				properties: {
  					display: {
  						type: "string"
  					}
  				},
  				additionalProperties: false
  			},
  			fixed: {
  				type: "object",
  				properties: {
  					enabled: {
  						type: "boolean"
  					},
  					position: {
  						type: "string"
  					},
  					offsetX: {
  						type: "number"
  					},
  					offsetY: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			}
  		},
  		additionalProperties: false
  	},
  	ApexTooltipY: {
  		type: "object",
  		properties: {
  			title: {
  				type: "object",
  				properties: {
  					formatter: {
  						"x-wcc-type": "function"
  					}
  				},
  				additionalProperties: false
  			},
  			formatter: {
  				"x-wcc-type": "function"
  			}
  		},
  		additionalProperties: false
  	},
  	ApexXAxis: {
  		type: "object",
  		properties: {
  			type: {
  				type: "string",
  				"enum": [
  					"category",
  					"datetime",
  					"numeric"
  				]
  			},
  			categories: {
  			},
  			overwriteCategories: {
  				anyOf: [
  					{
  						type: "array",
  						items: {
  							type: "string"
  						}
  					},
  					{
  						type: "array",
  						items: {
  							type: "number"
  						}
  					}
  				]
  			},
  			offsetX: {
  				type: "number"
  			},
  			offsetY: {
  				type: "number"
  			},
  			sorted: {
  				type: "boolean"
  			},
  			labels: {
  				type: "object",
  				properties: {
  					readability: {
  						anyOf: [
  							{
  								type: "string",
  								"enum": [
  									"none",
  									"halo",
  									"pill",
  									"auto",
  									"hide"
  								]
  							},
  							{
  								type: "boolean"
  							},
  							{
  								type: "object",
  								properties: {
  									mode: {
  										type: "string",
  										"enum": [
  											"none",
  											"halo",
  											"pill",
  											"auto",
  											"hide"
  										]
  									},
  									fallback: {
  										type: "string",
  										"enum": [
  											"halo",
  											"pill",
  											"hide"
  										]
  									},
  									enabled: {
  										type: "boolean"
  									},
  									contrast: {
  										type: "boolean"
  									},
  									minRatio: {
  										type: "number"
  									},
  									light: {
  										type: "string"
  									},
  									dark: {
  										type: "string"
  									},
  									background: {
  										type: "string"
  									},
  									halo: {
  										type: "object",
  										properties: {
  											width: {
  												type: "number"
  											},
  											color: {
  												type: "string"
  											},
  											opacity: {
  												type: "number"
  											},
  											blur: {
  												type: "number"
  											}
  										},
  										additionalProperties: false
  									},
  									pill: {
  										type: "object",
  										properties: {
  											fill: {
  												type: "string"
  											},
  											opacity: {
  												type: "number"
  											},
  											radius: {
  												type: "number"
  											},
  											padding: {
  												anyOf: [
  													{
  														type: "number"
  													},
  													{
  														type: "array",
  														prefixItems: [
  															{
  																type: "number"
  															},
  															{
  																type: "number"
  															}
  														],
  														minItems: 2,
  														maxItems: 2
  													}
  												]
  											},
  											stroke: {
  												type: "string"
  											},
  											strokeWidth: {
  												type: "number"
  											},
  											offset: {
  												type: "array",
  												prefixItems: [
  													{
  														type: "number"
  													},
  													{
  														type: "number"
  													}
  												],
  												minItems: 2,
  												maxItems: 2
  											}
  										},
  										additionalProperties: false
  									},
  									shadow: {
  										anyOf: [
  											{
  												type: "boolean"
  											},
  											{
  												type: "object",
  												properties: {
  													dx: {
  														type: "number"
  													},
  													dy: {
  														type: "number"
  													},
  													blur: {
  														type: "number"
  													},
  													color: {
  														type: "string"
  													},
  													opacity: {
  														type: "number"
  													}
  												},
  												additionalProperties: false
  											}
  										]
  									},
  									raise: {
  										type: "boolean"
  									},
  									each: {
  										"x-wcc-type": "function"
  									}
  								},
  								additionalProperties: false
  							}
  						]
  					},
  					show: {
  						type: "boolean"
  					},
  					rotate: {
  						type: "number"
  					},
  					rotateAlways: {
  						type: "boolean"
  					},
  					hideOverlappingLabels: {
  						type: "boolean"
  					},
  					showDuplicates: {
  						type: "boolean"
  					},
  					trim: {
  						type: "boolean"
  					},
  					minHeight: {
  						type: "number"
  					},
  					maxHeight: {
  						type: "number"
  					},
  					style: {
  						type: "object",
  						properties: {
  							colors: {
  								anyOf: [
  									{
  										type: "string"
  									},
  									{
  										type: "array",
  										items: {
  											type: "string"
  										}
  									}
  								]
  							},
  							fontSize: {
  								type: "string"
  							},
  							fontFamily: {
  								type: "string"
  							},
  							fontWeight: {
  								anyOf: [
  									{
  										type: "string"
  									},
  									{
  										type: "number"
  									}
  								]
  							},
  							cssClass: {
  								type: "string"
  							}
  						},
  						additionalProperties: false
  					},
  					offsetX: {
  						type: "number"
  					},
  					offsetY: {
  						type: "number"
  					},
  					format: {
  						type: "string"
  					},
  					formatter: {
  						"x-wcc-type": "function"
  					},
  					datetimeUTC: {
  						type: "boolean"
  					},
  					datetimeFormatter: {
  						type: "object",
  						properties: {
  							year: {
  								type: "string"
  							},
  							month: {
  								type: "string"
  							},
  							day: {
  								type: "string"
  							},
  							hour: {
  								type: "string"
  							},
  							minute: {
  								type: "string"
  							},
  							second: {
  								type: "string"
  							}
  						},
  						additionalProperties: false
  					}
  				},
  				additionalProperties: false
  			},
  			group: {
  				type: "object",
  				properties: {
  					groups: {
  						type: "array",
  						items: {
  							type: "object",
  							properties: {
  								title: {
  									type: "string"
  								},
  								cols: {
  									type: "number"
  								}
  							},
  							required: [
  								"title",
  								"cols"
  							],
  							additionalProperties: false
  						}
  					},
  					style: {
  						type: "object",
  						properties: {
  							colors: {
  								anyOf: [
  									{
  										type: "string"
  									},
  									{
  										type: "array",
  										items: {
  											type: "string"
  										}
  									}
  								]
  							},
  							fontSize: {
  								type: "string"
  							},
  							fontFamily: {
  								type: "string"
  							},
  							fontWeight: {
  								anyOf: [
  									{
  										type: "string"
  									},
  									{
  										type: "number"
  									}
  								]
  							},
  							cssClass: {
  								type: "string"
  							}
  						},
  						additionalProperties: false
  					}
  				},
  				additionalProperties: false
  			},
  			axisBorder: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					},
  					color: {
  						type: "string"
  					},
  					offsetX: {
  						type: "number"
  					},
  					offsetY: {
  						type: "number"
  					},
  					strokeWidth: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			},
  			axisTicks: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					},
  					borderType: {
  						type: "string"
  					},
  					color: {
  						type: "string"
  					},
  					height: {
  						type: "number"
  					},
  					offsetX: {
  						type: "number"
  					},
  					offsetY: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			},
  			tickPlacement: {
  				type: "string"
  			},
  			tickAmount: {
  				anyOf: [
  					{
  						"const": "dataPoints"
  					},
  					{
  						type: "number"
  					}
  				]
  			},
  			stepSize: {
  				type: "number"
  			},
  			min: {
  				type: "number"
  			},
  			max: {
  				type: "number"
  			},
  			range: {
  				type: "number"
  			},
  			floating: {
  				type: "boolean"
  			},
  			decimalsInFloat: {
  				type: "number"
  			},
  			position: {
  				type: "string"
  			},
  			title: {
  				type: "object",
  				properties: {
  					text: {
  						type: "string"
  					},
  					offsetX: {
  						type: "number"
  					},
  					offsetY: {
  						type: "number"
  					},
  					style: {
  						type: "object",
  						properties: {
  							color: {
  								type: "string"
  							},
  							fontFamily: {
  								type: "string"
  							},
  							fontWeight: {
  								anyOf: [
  									{
  										type: "string"
  									},
  									{
  										type: "number"
  									}
  								]
  							},
  							fontSize: {
  								type: "string"
  							},
  							cssClass: {
  								type: "string"
  							}
  						},
  						additionalProperties: false
  					}
  				},
  				additionalProperties: false
  			},
  			crosshairs: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					},
  					width: {
  						anyOf: [
  							{
  								type: "string"
  							},
  							{
  								type: "number"
  							}
  						]
  					},
  					position: {
  						type: "string"
  					},
  					opacity: {
  						type: "number"
  					},
  					stroke: {
  						type: "object",
  						properties: {
  							color: {
  								type: "string"
  							},
  							width: {
  								type: "number"
  							},
  							dashArray: {
  								type: "number"
  							}
  						},
  						additionalProperties: false
  					},
  					fill: {
  						type: "object",
  						properties: {
  							type: {
  								type: "string"
  							},
  							color: {
  								type: "string"
  							},
  							gradient: {
  								type: "object",
  								properties: {
  									colorFrom: {
  										type: "string"
  									},
  									colorTo: {
  										type: "string"
  									},
  									stops: {
  										type: "array",
  										items: {
  											type: "number"
  										}
  									},
  									opacityFrom: {
  										type: "number"
  									},
  									opacityTo: {
  										type: "number"
  									}
  								},
  								additionalProperties: false
  							}
  						},
  						additionalProperties: false
  					},
  					dropShadow: {
  						$ref: "#/$defs/ApexDropShadow"
  					}
  				},
  				additionalProperties: false
  			},
  			tooltip: {
  				type: "object",
  				properties: {
  					enabled: {
  						type: "boolean"
  					},
  					offsetY: {
  						type: "number"
  					},
  					formatter: {
  						"x-wcc-type": "function"
  					},
  					style: {
  						type: "object",
  						properties: {
  							fontSize: {
  								type: "string"
  							},
  							fontFamily: {
  								type: "string"
  							}
  						},
  						additionalProperties: false
  					}
  				},
  				additionalProperties: false
  			}
  		},
  		additionalProperties: false
  	},
  	ApexYAxis: {
  		type: "object",
  		properties: {
  			wcc: {
  				type: "object",
  				properties: {
  					alignZero: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			show: {
  				type: "boolean"
  			},
  			showAlways: {
  				type: "boolean"
  			},
  			showForNullSeries: {
  				type: "boolean"
  			},
  			seriesName: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "array",
  						items: {
  							type: "string"
  						}
  					}
  				]
  			},
  			opposite: {
  				type: "boolean"
  			},
  			reversed: {
  				type: "boolean"
  			},
  			logarithmic: {
  				type: "boolean"
  			},
  			logBase: {
  				type: "number"
  			},
  			tickAmount: {
  				type: "number"
  			},
  			stepSize: {
  				type: "number"
  			},
  			forceNiceScale: {
  				type: "boolean"
  			},
  			min: {
  				anyOf: [
  					{
  						type: "number"
  					},
  					{
  						"x-wcc-type": "function"
  					}
  				]
  			},
  			max: {
  				anyOf: [
  					{
  						type: "number"
  					},
  					{
  						"x-wcc-type": "function"
  					}
  				]
  			},
  			floating: {
  				type: "boolean"
  			},
  			decimalsInFloat: {
  				type: "number"
  			},
  			labels: {
  				type: "object",
  				properties: {
  					readability: {
  						anyOf: [
  							{
  								type: "string",
  								"enum": [
  									"none",
  									"halo",
  									"pill",
  									"auto",
  									"hide"
  								]
  							},
  							{
  								type: "boolean"
  							},
  							{
  								type: "object",
  								properties: {
  									mode: {
  										type: "string",
  										"enum": [
  											"none",
  											"halo",
  											"pill",
  											"auto",
  											"hide"
  										]
  									},
  									fallback: {
  										type: "string",
  										"enum": [
  											"halo",
  											"pill",
  											"hide"
  										]
  									},
  									enabled: {
  										type: "boolean"
  									},
  									contrast: {
  										type: "boolean"
  									},
  									minRatio: {
  										type: "number"
  									},
  									light: {
  										type: "string"
  									},
  									dark: {
  										type: "string"
  									},
  									background: {
  										type: "string"
  									},
  									halo: {
  										type: "object",
  										properties: {
  											width: {
  												type: "number"
  											},
  											color: {
  												type: "string"
  											},
  											opacity: {
  												type: "number"
  											},
  											blur: {
  												type: "number"
  											}
  										},
  										additionalProperties: false
  									},
  									pill: {
  										type: "object",
  										properties: {
  											fill: {
  												type: "string"
  											},
  											opacity: {
  												type: "number"
  											},
  											radius: {
  												type: "number"
  											},
  											padding: {
  												anyOf: [
  													{
  														type: "number"
  													},
  													{
  														type: "array",
  														prefixItems: [
  															{
  																type: "number"
  															},
  															{
  																type: "number"
  															}
  														],
  														minItems: 2,
  														maxItems: 2
  													}
  												]
  											},
  											stroke: {
  												type: "string"
  											},
  											strokeWidth: {
  												type: "number"
  											},
  											offset: {
  												type: "array",
  												prefixItems: [
  													{
  														type: "number"
  													},
  													{
  														type: "number"
  													}
  												],
  												minItems: 2,
  												maxItems: 2
  											}
  										},
  										additionalProperties: false
  									},
  									shadow: {
  										anyOf: [
  											{
  												type: "boolean"
  											},
  											{
  												type: "object",
  												properties: {
  													dx: {
  														type: "number"
  													},
  													dy: {
  														type: "number"
  													},
  													blur: {
  														type: "number"
  													},
  													color: {
  														type: "string"
  													},
  													opacity: {
  														type: "number"
  													}
  												},
  												additionalProperties: false
  											}
  										]
  									},
  									raise: {
  										type: "boolean"
  									},
  									each: {
  										"x-wcc-type": "function"
  									}
  								},
  								additionalProperties: false
  							}
  						]
  					},
  					show: {
  						type: "boolean"
  					},
  					showDuplicates: {
  						type: "boolean"
  					},
  					minWidth: {
  						type: "number"
  					},
  					maxWidth: {
  						type: "number"
  					},
  					offsetX: {
  						type: "number"
  					},
  					offsetY: {
  						type: "number"
  					},
  					rotate: {
  						type: "number"
  					},
  					align: {
  						type: "string",
  						"enum": [
  							"right",
  							"left",
  							"center"
  						]
  					},
  					padding: {
  						type: "number"
  					},
  					style: {
  						type: "object",
  						properties: {
  							colors: {
  								anyOf: [
  									{
  										type: "string"
  									},
  									{
  										type: "array",
  										items: {
  											type: "string"
  										}
  									}
  								]
  							},
  							fontSize: {
  								type: "string"
  							},
  							fontWeight: {
  								anyOf: [
  									{
  										type: "string"
  									},
  									{
  										type: "number"
  									}
  								]
  							},
  							fontFamily: {
  								type: "string"
  							},
  							cssClass: {
  								type: "string"
  							}
  						},
  						additionalProperties: false
  					},
  					formatter: {
  						"x-wcc-type": "function"
  					}
  				},
  				additionalProperties: false
  			},
  			axisBorder: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					},
  					color: {
  						type: "string"
  					},
  					width: {
  						type: "number"
  					},
  					offsetX: {
  						type: "number"
  					},
  					offsetY: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			},
  			axisTicks: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					},
  					color: {
  						type: "string"
  					},
  					width: {
  						type: "number"
  					},
  					offsetX: {
  						type: "number"
  					},
  					offsetY: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			},
  			title: {
  				type: "object",
  				properties: {
  					text: {
  						type: "string"
  					},
  					rotate: {
  						type: "number"
  					},
  					offsetX: {
  						type: "number"
  					},
  					offsetY: {
  						type: "number"
  					},
  					style: {
  						type: "object",
  						properties: {
  							color: {
  								type: "string"
  							},
  							fontSize: {
  								type: "string"
  							},
  							fontWeight: {
  								anyOf: [
  									{
  										type: "string"
  									},
  									{
  										type: "number"
  									}
  								]
  							},
  							fontFamily: {
  								type: "string"
  							},
  							cssClass: {
  								type: "string"
  							}
  						},
  						additionalProperties: false
  					}
  				},
  				additionalProperties: false
  			},
  			crosshairs: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					},
  					position: {
  						type: "string"
  					},
  					stroke: {
  						type: "object",
  						properties: {
  							color: {
  								type: "string"
  							},
  							width: {
  								type: "number"
  							},
  							dashArray: {
  								type: "number"
  							}
  						},
  						additionalProperties: false
  					}
  				},
  				additionalProperties: false
  			},
  			tooltip: {
  				type: "object",
  				properties: {
  					enabled: {
  						type: "boolean"
  					},
  					offsetX: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			}
  		},
  		additionalProperties: false
  	},
  	ImageAnnotations: {
  		type: "object",
  		properties: {
  			path: {
  				type: "string"
  			},
  			x: {
  				type: "number"
  			},
  			y: {
  				type: "number"
  			},
  			width: {
  				type: "number"
  			},
  			height: {
  				type: "number"
  			}
  		},
  		additionalProperties: false
  	},
  	PointAnnotations: {
  		type: "object",
  		properties: {
  			scope: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "number"
  					},
  					{
  						type: "array",
  						items: {
  							anyOf: [
  								{
  									type: "string"
  								},
  								{
  									type: "number"
  								}
  							]
  						}
  					},
  					{
  						"x-wcc-type": "function"
  					}
  				]
  			},
  			wcc: {
  				type: "object",
  				properties: {
  					tooltip: {
  						anyOf: [
  							{
  								type: "string"
  							},
  							{
  								"x-wcc-type": "function"
  							}
  						]
  					}
  				},
  				additionalProperties: false
  			},
  			id: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "number"
  					}
  				]
  			},
  			x: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "number"
  					}
  				]
  			},
  			y: {
  				anyOf: [
  					{
  						type: "null"
  					},
  					{
  						type: "number"
  					}
  				]
  			},
  			yAxisIndex: {
  				type: "number"
  			},
  			seriesIndex: {
  				type: "number"
  			},
  			mouseEnter: {
  				"x-wcc-type": "Function"
  			},
  			mouseLeave: {
  				"x-wcc-type": "Function"
  			},
  			click: {
  				"x-wcc-type": "Function"
  			},
  			marker: {
  				type: "object",
  				properties: {
  					size: {
  						type: "number"
  					},
  					fillColor: {
  						type: "string"
  					},
  					strokeColor: {
  						type: "string"
  					},
  					strokeWidth: {
  						type: "number"
  					},
  					shape: {
  						type: "string"
  					},
  					offsetX: {
  						type: "number"
  					},
  					offsetY: {
  						type: "number"
  					},
  					cssClass: {
  						type: "string"
  					}
  				},
  				additionalProperties: false
  			},
  			label: {
  				$ref: "#/$defs/AnnotationLabel"
  			},
  			image: {
  				type: "object",
  				properties: {
  					path: {
  						type: "string"
  					},
  					width: {
  						type: "number"
  					},
  					height: {
  						type: "number"
  					},
  					offsetX: {
  						type: "number"
  					},
  					offsetY: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			}
  		},
  		additionalProperties: false
  	},
  	RadialChordGroup: {
  		type: "object",
  		properties: {
  			id: {
  				type: "string"
  			},
  			name: {
  				type: "string"
  			},
  			color: {
  				type: "string"
  			},
  			values: {
  				type: "array",
  				items: {
  					type: "number"
  				}
  			},
  			link: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "number"
  					},
  					{
  						type: "array",
  						items: {
  							anyOf: [
  								{
  									type: "string"
  								},
  								{
  									type: "number"
  								}
  							]
  						}
  					}
  				]
  			}
  		},
  		required: [
  			"id"
  		],
  		additionalProperties: false
  	},
  	RadialColumnEncode: {
  		type: "object",
  		properties: {
  			angle: {
  				type: "string"
  			},
  			length: {
  				type: "string"
  			},
  			color: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "object",
  						properties: {
  							field: {
  								type: "string"
  							},
  							values: {
  								type: "array",
  								items: {
  									anyOf: [
  										{
  											type: "null"
  										},
  										{
  											type: "number"
  										}
  									]
  								}
  							},
  							name: {
  								type: "string"
  							},
  							unit: {
  								type: "string"
  							},
  							decimals: {
  								type: "number"
  							},
  							format: {
  								"x-wcc-type": "function"
  							},
  							legend: {
  								type: "boolean"
  							},
  							show: {
  								type: "boolean"
  							},
  							scale: {
  								type: "string",
  								"enum": [
  									"diverging",
  									"sequential"
  								]
  							},
  							domain: {
  								type: "array",
  								items: {
  									type: "number"
  								}
  							},
  							mid: {
  								type: "number"
  							},
  							stops: {
  								type: "array",
  								items: {
  									type: "string"
  								}
  							},
  							reverse: {
  								type: "boolean"
  							}
  						},
  						additionalProperties: false
  					}
  				]
  			},
  			delta: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "object",
  						properties: {
  							field: {
  								type: "string"
  							},
  							values: {
  								type: "array",
  								items: {
  									anyOf: [
  										{
  											type: "null"
  										},
  										{
  											type: "number"
  										}
  									]
  								}
  							},
  							name: {
  								type: "string"
  							},
  							unit: {
  								type: "string"
  							},
  							decimals: {
  								type: "number"
  							},
  							format: {
  								"x-wcc-type": "function"
  							},
  							legend: {
  								type: "boolean"
  							},
  							show: {
  								type: "boolean"
  							},
  							style: {
  								type: "string",
  								"enum": [
  									"band",
  									"ticks",
  									"bars"
  								]
  							},
  							colors: {
  								type: "object",
  								properties: {
  									up: {
  										type: "string"
  									},
  									down: {
  										type: "string"
  									}
  								},
  								additionalProperties: false
  							},
  							max: {
  								type: "number"
  							}
  						},
  						additionalProperties: false
  					}
  				]
  			},
  			guide: {
  				anyOf: [
  					{
  						type: "boolean"
  					},
  					{
  						type: "object",
  						properties: {
  							show: {
  								type: "boolean"
  							},
  							open: {
  								anyOf: [
  									{
  										"const": "always"
  									},
  									{
  										type: "boolean"
  									}
  								]
  							}
  						},
  						additionalProperties: false
  					}
  				]
  			}
  		},
  		additionalProperties: false
  	},
  	RadialColumnLayer: {
  		type: "object",
  		properties: {
  			type: {
  				type: "string",
  				"enum": [
  					"pie",
  					"donut",
  					"radialBar",
  					"heatmap",
  					"polarArea",
  					"gauge",
  					"sunburst",
  					"chord",
  					"matrix",
  					"arc",
  					"nestedDonut",
  					"goals",
  					"wave",
  					"incident",
  					"bands",
  					"trace",
  					"span",
  					"vitalsNow"
  				]
  			},
  			name: {
  				type: "string"
  			},
  			data: {
  				anyOf: [
  					{
  						type: "array",
  						items: {
  							anyOf: [
  								{
  									type: "number"
  								},
  								{
  									type: "array",
  									prefixItems: [
  										{
  											type: "string"
  										},
  										{
  											type: "number"
  										}
  									],
  									minItems: 2,
  									maxItems: 2
  								},
  								{
  									$ref: "#/$defs/RadialLayerDatumObject"
  								}
  							]
  						}
  					},
  					{
  						type: "array",
  						items: {
  							type: "object",
  							properties: {
  								name: {
  									type: "string"
  								},
  								data: {
  									type: "array",
  									items: {
  										anyOf: [
  											{
  												type: "null"
  											},
  											{
  												type: "number"
  											},
  											{
  												type: "array",
  												prefixItems: [
  													{
  														type: "string"
  													},
  													{
  														type: "number"
  													}
  												],
  												minItems: 2,
  												maxItems: 2
  											},
  											{
  												$ref: "#/$defs/RadialLayerDatumObject"
  											}
  										]
  									}
  								}
  							},
  							required: [
  								"data"
  							],
  							additionalProperties: false
  						}
  					},
  					{
  						type: "array",
  						items: {
  							type: "array",
  							items: {
  								anyOf: [
  									{
  										type: "null"
  									},
  									{
  										type: "number"
  									}
  								]
  							}
  						}
  					},
  					{
  						type: "array",
  						items: {
  							anyOf: [
  								{
  									type: "array",
  									prefixItems: [
  										{
  											type: "string"
  										},
  										{
  											type: "string"
  										},
  										{
  											type: "number"
  										}
  									],
  									minItems: 3,
  									maxItems: 3
  								},
  								{
  									type: "object",
  									properties: {
  										from: {
  											type: "string"
  										},
  										to: {
  											type: "string"
  										},
  										value: {
  											type: "number"
  										},
  										color: {
  											type: "string"
  										}
  									},
  									required: [
  										"from",
  										"to",
  										"value"
  									],
  									additionalProperties: false
  								}
  							]
  						}
  					},
  					{
  						type: "array",
  						items: {
  							$ref: "#/$defs/RadialWaveSeries"
  						}
  					},
  					{
  						type: "array",
  						items: {
  							type: "array",
  							items: {
  								anyOf: [
  									{
  										type: "null"
  									},
  									{
  										type: "string"
  									},
  									{
  										type: "number"
  									}
  								]
  							}
  						}
  					},
  					{
  						type: "array",
  						items: {
  							$ref: "#/$defs/RadialMatrixCell"
  						}
  					},
  					{
  						type: "array",
  						items: {
  							$ref: "#/$defs/RadialIncident"
  						}
  					}
  				]
  			},
  			series: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "number"
  					}
  				]
  			},
  			labels: {
  				type: "array",
  				items: {
  					type: "string"
  				}
  			},
  			thickness: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "number"
  					}
  				]
  			},
  			gap: {
  				type: "number"
  			},
  			ringGap: {
  				type: "number"
  			},
  			padding: {
  				type: "number"
  			},
  			corner: {
  				type: "number"
  			},
  			colors: {
  				type: "array",
  				items: {
  					type: "string"
  				}
  			},
  			colorBy: {
  				"const": "spectrum"
  			},
  			legend: {
  				type: "boolean"
  			},
  			link: {
  				anyOf: [
  					{
  						type: "string",
  						"enum": [
  							"none",
  							"auto",
  							"map",
  							"category",
  							"angle"
  						]
  					},
  					{
  						type: "boolean"
  					},
  					{
  						$ref: "#/$defs/RadialColumnLink"
  					}
  				]
  			},
  			align: {
  				type: "boolean"
  			},
  			trackColor: {
  				type: "string"
  			},
  			startAngle: {
  				type: "number"
  			},
  			endAngle: {
  				type: "number"
  			},
  			min: {
  				type: "number"
  			},
  			max: {
  				type: "number"
  			},
  			color: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						$ref: "#/$defs/RadialMatrixScale"
  					}
  				]
  			},
  			groups: {
  				type: "array",
  				items: {
  					$ref: "#/$defs/RadialChordGroup"
  				}
  			},
  			matrix: {
  				type: "array",
  				items: {
  					type: "array",
  					items: {
  						type: "number"
  					}
  				}
  			},
  			directed: {
  				type: "boolean"
  			},
  			sort: {
  				type: "string",
  				"enum": [
  					"none",
  					"asc",
  					"desc"
  				]
  			},
  			ringWidth: {
  				type: "number"
  			},
  			ribbon: {
  				type: "object",
  				properties: {
  					opacity: {
  						type: "number"
  					},
  					colorMode: {
  						type: "string",
  						"enum": [
  							"source",
  							"target",
  							"gradient"
  						]
  					},
  					padding: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			},
  			target: {
  				type: "number"
  			},
  			maxLaps: {
  				type: "number"
  			},
  			ringLabels: {
  				type: "boolean"
  			},
  			ringTitles: {
  				type: "boolean"
  			},
  			legendTitle: {
  				type: "string"
  			},
  			rows: {
  				type: "array",
  				items: {
  					anyOf: [
  						{
  							type: "string"
  						},
  						{
  							$ref: "#/$defs/RadialMatrixHeader"
  						},
  						{
  							$ref: "#/$defs/RadialVitalsRow"
  						}
  					]
  				}
  			},
  			cols: {
  				type: "array",
  				items: {
  					anyOf: [
  						{
  							type: "string"
  						},
  						{
  							$ref: "#/$defs/RadialMatrixHeader"
  						}
  					]
  				}
  			},
  			statuses: {
  				"x-wcc-type": "__type"
  			},
  			headers: {
  				anyOf: [
  					{
  						type: "boolean"
  					},
  					{
  						type: "object",
  						properties: {
  							show: {
  								type: "boolean"
  							},
  							fontSize: {
  								type: "number"
  							},
  							readability: {
  								anyOf: [
  									{
  										type: "string",
  										"enum": [
  											"none",
  											"halo",
  											"pill",
  											"auto",
  											"hide"
  										]
  									},
  									{
  										type: "boolean"
  									},
  									{
  										type: "object",
  										properties: {
  											mode: {
  												type: "string",
  												"enum": [
  													"none",
  													"halo",
  													"pill",
  													"auto",
  													"hide"
  												]
  											},
  											fallback: {
  												type: "string",
  												"enum": [
  													"halo",
  													"pill",
  													"hide"
  												]
  											},
  											enabled: {
  												type: "boolean"
  											},
  											contrast: {
  												type: "boolean"
  											},
  											minRatio: {
  												type: "number"
  											},
  											light: {
  												type: "string"
  											},
  											dark: {
  												type: "string"
  											},
  											background: {
  												type: "string"
  											},
  											halo: {
  												type: "object",
  												properties: {
  													width: {
  														type: "number"
  													},
  													color: {
  														type: "string"
  													},
  													opacity: {
  														type: "number"
  													},
  													blur: {
  														type: "number"
  													}
  												},
  												additionalProperties: false
  											},
  											pill: {
  												type: "object",
  												properties: {
  													fill: {
  														type: "string"
  													},
  													opacity: {
  														type: "number"
  													},
  													radius: {
  														type: "number"
  													},
  													padding: {
  														anyOf: [
  															{
  																type: "number"
  															},
  															{
  																type: "array",
  																prefixItems: [
  																	{
  																		type: "number"
  																	},
  																	{
  																		type: "number"
  																	}
  																],
  																minItems: 2,
  																maxItems: 2
  															}
  														]
  													},
  													stroke: {
  														type: "string"
  													},
  													strokeWidth: {
  														type: "number"
  													},
  													offset: {
  														type: "array",
  														prefixItems: [
  															{
  																type: "number"
  															},
  															{
  																type: "number"
  															}
  														],
  														minItems: 2,
  														maxItems: 2
  													}
  												},
  												additionalProperties: false
  											},
  											shadow: {
  												anyOf: [
  													{
  														type: "boolean"
  													},
  													{
  														type: "object",
  														properties: {
  															dx: {
  																type: "number"
  															},
  															dy: {
  																type: "number"
  															},
  															blur: {
  																type: "number"
  															},
  															color: {
  																type: "string"
  															},
  															opacity: {
  																type: "number"
  															}
  														},
  														additionalProperties: false
  													}
  												]
  											},
  											raise: {
  												type: "boolean"
  											},
  											each: {
  												"x-wcc-type": "function"
  											}
  										},
  										additionalProperties: false
  									}
  								]
  							}
  						},
  						additionalProperties: false
  					}
  				]
  			},
  			values: {
  				anyOf: [
  					{
  						"const": "auto"
  					},
  					{
  						type: "boolean"
  					}
  				]
  			},
  			minCell: {
  				type: "number"
  			},
  			overflow: {
  				type: "string",
  				"enum": [
  					"truncate",
  					"aggregate"
  				]
  			},
  			aggregate: {
  				type: "string",
  				"enum": [
  					"last",
  					"sum",
  					"max",
  					"min",
  					"mean",
  					"median"
  				]
  			},
  			inset: {
  				type: "number"
  			},
  			unit: {
  				type: "string"
  			},
  			value: {
  				type: "number"
  			},
  			follow: {
  				anyOf: [
  					{
  						type: "boolean"
  					},
  					{
  						type: "string"
  					},
  					{
  						type: "number"
  					}
  				]
  			},
  			bands: {
  				anyOf: [
  					{
  						type: "array",
  						items: {
  							$ref: "#/$defs/RadialVitalsBand"
  						}
  					},
  					{
  						type: "array",
  						items: {
  							type: "object",
  							properties: {
  								to: {
  									type: "number"
  								},
  								color: {
  									type: "string"
  								}
  							},
  							required: [
  								"to",
  								"color"
  							],
  							additionalProperties: false
  						}
  					}
  				]
  			},
  			formatter: {
  				"x-wcc-type": "function"
  			},
  			center: {
  				type: "boolean"
  			},
  			scale: {
  				anyOf: [
  					{
  						type: "string",
  						"enum": [
  							"linear",
  							"log"
  						]
  					},
  					{
  						type: "boolean"
  					}
  				]
  			},
  			now: {
  				anyOf: [
  					{
  						type: "boolean"
  					},
  					{
  						type: "string"
  					},
  					{
  						type: "number"
  					},
  					{
  						type: "object",
  						properties: {
  							label: {
  								type: "string"
  							},
  							color: {
  								type: "string"
  							}
  						},
  						additionalProperties: false
  					}
  				]
  			},
  			time: {
  				type: "object",
  				properties: {
  					start: {
  						anyOf: [
  							{
  								type: "string"
  							},
  							{
  								type: "number"
  							}
  						]
  					},
  					end: {
  						anyOf: [
  							{
  								type: "string"
  							},
  							{
  								type: "number"
  							}
  						]
  					}
  				},
  				required: [
  					"start",
  					"end"
  				],
  				additionalProperties: false
  			},
  			upto: {
  				type: "number"
  			},
  			endLabel: {
  				type: "string"
  			},
  			gapAfter: {
  				type: "number"
  			},
  			alarms: {
  				type: "array",
  				items: {
  					type: "object",
  					properties: {
  						from: {
  							anyOf: [
  								{
  									type: "string"
  								},
  								{
  									type: "number"
  								}
  							]
  						},
  						to: {
  							anyOf: [
  								{
  									type: "string"
  								},
  								{
  									type: "number"
  								}
  							]
  						},
  						label: {
  							type: "string"
  						}
  					},
  					required: [
  						"from"
  					],
  					additionalProperties: false
  				}
  			},
  			status: {
  				type: "array",
  				items: {
  					type: "object",
  					properties: {
  						name: {
  							type: "string"
  						},
  						text: {
  							type: "string"
  						},
  						ago: {
  							type: "number"
  						},
  						stale: {
  							type: "boolean"
  						}
  					},
  					required: [
  						"name",
  						"text"
  					],
  					additionalProperties: false
  				}
  			},
  			note: {
  				type: "string"
  			},
  			mode: {
  				type: "string",
  				"enum": [
  					"auto",
  					"value",
  					"ridge",
  					"overlay",
  					"stack",
  					"status"
  				]
  			},
  			overlap: {
  				type: "number"
  			},
  			sectors: {
  				anyOf: [
  					{
  						type: "number"
  					},
  					{
  						type: "array",
  						items: {
  							anyOf: [
  								{
  									type: "string"
  								},
  								{
  									$ref: "#/$defs/RadialWaveSector"
  								}
  							]
  						}
  					}
  				]
  			},
  			sectorLabels: {
  				type: "boolean"
  			},
  			depth: {
  				type: "number"
  			},
  			curve: {
  				type: "string",
  				"enum": [
  					"linear",
  					"smooth"
  				]
  			},
  			anomalies: {
  				anyOf: [
  					{
  						"const": false
  					},
  					{
  						type: "array",
  						items: {
  							$ref: "#/$defs/RadialWaveAnomaly"
  						}
  					},
  					{
  						type: "object",
  						properties: {
  							color: {
  								type: "string"
  							}
  						},
  						additionalProperties: false
  					}
  				]
  			}
  		},
  		required: [
  			"type"
  		],
  		additionalProperties: false
  	},
  	RadialColumnLink: {
  		type: "object",
  		properties: {
  			mode: {
  				type: "string",
  				"enum": [
  					"none",
  					"auto",
  					"map",
  					"category",
  					"angle"
  				]
  			},
  			map: {
  				anyOf: [
  					{
  						"x-wcc-type": "function"
  					},
  					{
  						"x-wcc-type": "__type"
  					}
  				]
  			},
  			interaction: {
  				type: "string",
  				"enum": [
  					"filter",
  					"both",
  					"highlight"
  				]
  			},
  			bidirectional: {
  				type: "boolean"
  			},
  			align: {
  				type: "boolean"
  			},
  			indicator: {
  				type: "boolean"
  			},
  			unit: {
  				type: "string"
  			},
  			basis: {
  				type: "string"
  			}
  		},
  		additionalProperties: false
  	},
  	RadialColumnOptions: {
  		type: "object",
  		properties: {
  			aggregate: {
  				type: "string",
  				"enum": [
  					"none",
  					"sum",
  					"max",
  					"min",
  					"mean"
  				]
  			},
  			link: {
  				anyOf: [
  					{
  						type: "string",
  						"enum": [
  							"none",
  							"auto",
  							"map",
  							"category",
  							"angle"
  						]
  					},
  					{
  						$ref: "#/$defs/RadialColumnLink"
  					}
  				]
  			},
  			encode: {
  				$ref: "#/$defs/RadialColumnEncode"
  			},
  			markers: {
  				type: "array",
  				items: {
  					type: "object",
  					properties: {
  						at: {
  							anyOf: [
  								{
  									type: "string"
  								},
  								{
  									type: "number"
  								}
  							]
  						},
  						label: {
  							type: "string"
  						},
  						kind: {
  							type: "string"
  						},
  						color: {
  							type: "string"
  						},
  						shape: {
  							type: "string",
  							"enum": [
  								"diamond",
  								"dot"
  							]
  						}
  					},
  					required: [
  						"at"
  					],
  					additionalProperties: false
  				}
  			},
  			startAngle: {
  				type: "number"
  			},
  			endAngle: {
  				type: "number"
  			},
  			innerRadius: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "number"
  					}
  				]
  			},
  			barPadding: {
  				anyOf: [
  					{
  						"const": "auto"
  					},
  					{
  						type: "number"
  					}
  				]
  			},
  			groupPadding: {
  				type: "number"
  			},
  			stacked: {
  				type: "boolean"
  			},
  			stackGap: {
  				type: "number"
  			},
  			rounded: {
  				type: "boolean"
  			},
  			fill: {
  				type: "object",
  				properties: {
  					type: {
  						type: "string",
  						"enum": [
  							"auto",
  							"series",
  							"value",
  							"spectrum"
  						]
  					},
  					stops: {
  						type: "array",
  						items: {
  							type: "string"
  						}
  					},
  					ranges: {
  						type: "array",
  						items: {
  							type: "object",
  							properties: {
  								from: {
  									type: "number"
  								},
  								to: {
  									type: "number"
  								},
  								color: {
  									type: "string"
  								}
  							},
  							required: [
  								"from",
  								"to",
  								"color"
  							],
  							additionalProperties: false
  						}
  					},
  					fade: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			},
  			track: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					},
  					color: {
  						type: "string"
  					}
  				},
  				additionalProperties: false
  			},
  			baseline: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			valueAxis: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					},
  					min: {
  						type: "number"
  					},
  					max: {
  						type: "number"
  					},
  					tickAmount: {
  						type: "number"
  					},
  					nice: {
  						type: "boolean"
  					},
  					rings: {
  						type: "boolean"
  					},
  					labels: {
  						type: "object",
  						properties: {
  							show: {
  								type: "boolean"
  							},
  							formatter: {
  								"x-wcc-type": "function"
  							},
  							readability: {
  								anyOf: [
  									{
  										type: "string",
  										"enum": [
  											"none",
  											"halo",
  											"pill",
  											"auto",
  											"hide"
  										]
  									},
  									{
  										type: "boolean"
  									},
  									{
  										type: "object",
  										properties: {
  											mode: {
  												type: "string",
  												"enum": [
  													"none",
  													"halo",
  													"pill",
  													"auto",
  													"hide"
  												]
  											},
  											fallback: {
  												type: "string",
  												"enum": [
  													"halo",
  													"pill",
  													"hide"
  												]
  											},
  											enabled: {
  												type: "boolean"
  											},
  											contrast: {
  												type: "boolean"
  											},
  											minRatio: {
  												type: "number"
  											},
  											light: {
  												type: "string"
  											},
  											dark: {
  												type: "string"
  											},
  											background: {
  												type: "string"
  											},
  											halo: {
  												type: "object",
  												properties: {
  													width: {
  														type: "number"
  													},
  													color: {
  														type: "string"
  													},
  													opacity: {
  														type: "number"
  													},
  													blur: {
  														type: "number"
  													}
  												},
  												additionalProperties: false
  											},
  											pill: {
  												type: "object",
  												properties: {
  													fill: {
  														type: "string"
  													},
  													opacity: {
  														type: "number"
  													},
  													radius: {
  														type: "number"
  													},
  													padding: {
  														anyOf: [
  															{
  																type: "number"
  															},
  															{
  																type: "array",
  																prefixItems: [
  																	{
  																		type: "number"
  																	},
  																	{
  																		type: "number"
  																	}
  																],
  																minItems: 2,
  																maxItems: 2
  															}
  														]
  													},
  													stroke: {
  														type: "string"
  													},
  													strokeWidth: {
  														type: "number"
  													},
  													offset: {
  														type: "array",
  														prefixItems: [
  															{
  																type: "number"
  															},
  															{
  																type: "number"
  															}
  														],
  														minItems: 2,
  														maxItems: 2
  													}
  												},
  												additionalProperties: false
  											},
  											shadow: {
  												anyOf: [
  													{
  														type: "boolean"
  													},
  													{
  														type: "object",
  														properties: {
  															dx: {
  																type: "number"
  															},
  															dy: {
  																type: "number"
  															},
  															blur: {
  																type: "number"
  															},
  															color: {
  																type: "string"
  															},
  															opacity: {
  																type: "number"
  															}
  														},
  														additionalProperties: false
  													}
  												]
  											},
  											raise: {
  												type: "boolean"
  											},
  											each: {
  												"x-wcc-type": "function"
  											}
  										},
  										additionalProperties: false
  									}
  								]
  							},
  							angle: {
  								anyOf: [
  									{
  										"const": "auto"
  									},
  									{
  										type: "number"
  									}
  								]
  							},
  							pinAngle: {
  								type: "boolean"
  							}
  						},
  						additionalProperties: false
  					}
  				},
  				additionalProperties: false
  			},
  			categoryLabels: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					},
  					orientation: {
  						type: "string",
  						"enum": [
  							"auto",
  							"horizontal",
  							"radial"
  						]
  					},
  					offset: {
  						type: "number"
  					},
  					maxWidth: {
  						type: "number"
  					},
  					step: {
  						type: "number"
  					},
  					maxCount: {
  						type: "number"
  					},
  					formatter: {
  						"x-wcc-type": "function"
  					}
  				},
  				additionalProperties: false
  			},
  			center: {
  				type: "object",
  				properties: {
  					readability: {
  						anyOf: [
  							{
  								type: "string",
  								"enum": [
  									"none",
  									"halo",
  									"pill",
  									"auto",
  									"hide"
  								]
  							},
  							{
  								type: "boolean"
  							},
  							{
  								type: "object",
  								properties: {
  									mode: {
  										type: "string",
  										"enum": [
  											"none",
  											"halo",
  											"pill",
  											"auto",
  											"hide"
  										]
  									},
  									fallback: {
  										type: "string",
  										"enum": [
  											"halo",
  											"pill",
  											"hide"
  										]
  									},
  									enabled: {
  										type: "boolean"
  									},
  									contrast: {
  										type: "boolean"
  									},
  									minRatio: {
  										type: "number"
  									},
  									light: {
  										type: "string"
  									},
  									dark: {
  										type: "string"
  									},
  									background: {
  										type: "string"
  									},
  									halo: {
  										type: "object",
  										properties: {
  											width: {
  												type: "number"
  											},
  											color: {
  												type: "string"
  											},
  											opacity: {
  												type: "number"
  											},
  											blur: {
  												type: "number"
  											}
  										},
  										additionalProperties: false
  									},
  									pill: {
  										type: "object",
  										properties: {
  											fill: {
  												type: "string"
  											},
  											opacity: {
  												type: "number"
  											},
  											radius: {
  												type: "number"
  											},
  											padding: {
  												anyOf: [
  													{
  														type: "number"
  													},
  													{
  														type: "array",
  														prefixItems: [
  															{
  																type: "number"
  															},
  															{
  																type: "number"
  															}
  														],
  														minItems: 2,
  														maxItems: 2
  													}
  												]
  											},
  											stroke: {
  												type: "string"
  											},
  											strokeWidth: {
  												type: "number"
  											},
  											offset: {
  												type: "array",
  												prefixItems: [
  													{
  														type: "number"
  													},
  													{
  														type: "number"
  													}
  												],
  												minItems: 2,
  												maxItems: 2
  											}
  										},
  										additionalProperties: false
  									},
  									shadow: {
  										anyOf: [
  											{
  												type: "boolean"
  											},
  											{
  												type: "object",
  												properties: {
  													dx: {
  														type: "number"
  													},
  													dy: {
  														type: "number"
  													},
  													blur: {
  														type: "number"
  													},
  													color: {
  														type: "string"
  													},
  													opacity: {
  														type: "number"
  													}
  												},
  												additionalProperties: false
  											}
  										]
  									},
  									raise: {
  										type: "boolean"
  									},
  									each: {
  										"x-wcc-type": "function"
  									}
  								},
  								additionalProperties: false
  							}
  						]
  					},
  					show: {
  						anyOf: [
  							{
  								"const": "auto"
  							},
  							{
  								type: "boolean"
  							}
  						]
  					},
  					label: {
  						type: "string"
  					},
  					value: {
  						anyOf: [
  							{
  								type: "string"
  							},
  							{
  								type: "number"
  							},
  							{
  								"x-wcc-type": "function"
  							}
  						]
  					},
  					formatter: {
  						"x-wcc-type": "function"
  					},
  					hover: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			layers: {
  				type: "array",
  				items: {
  					$ref: "#/$defs/RadialColumnLayer"
  				}
  			},
  			layerGap: {
  				type: "number"
  			},
  			hole: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "number"
  					}
  				]
  			},
  			legend: {
  				type: "object",
  				properties: {
  					show: {
  						anyOf: [
  							{
  								"const": "auto"
  							},
  							{
  								type: "boolean"
  							}
  						]
  					},
  					position: {
  						type: "string",
  						"enum": [
  							"auto",
  							"right",
  							"bottom"
  						]
  					}
  				},
  				additionalProperties: false
  			}
  		},
  		additionalProperties: false
  	},
  	RadialIncident: {
  		type: "object",
  		properties: {
  			from: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "number"
  					}
  				]
  			},
  			to: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "number"
  					}
  				]
  			},
  			label: {
  				type: "string"
  			},
  			keys: {
  				type: "array",
  				items: {
  					type: "string"
  				}
  			}
  		},
  		required: [
  			"from"
  		],
  		additionalProperties: false
  	},
  	RadialLayerDatumObject: {
  		type: "object",
  		properties: {
  			x: {
  				type: "string"
  			},
  			name: {
  				type: "string"
  			},
  			y: {
  				type: "number"
  			},
  			value: {
  				type: "number"
  			},
  			color: {
  				type: "string"
  			},
  			max: {
  				type: "number"
  			},
  			target: {
  				type: "number"
  			},
  			trackColor: {
  				type: "string"
  			},
  			label: {
  				type: "string"
  			},
  			children: {
  				type: "array",
  				items: {
  					anyOf: [
  						{
  							type: "number"
  						},
  						{
  							type: "array",
  							prefixItems: [
  								{
  									type: "string"
  								},
  								{
  									type: "number"
  								}
  							],
  							minItems: 2,
  							maxItems: 2
  						},
  						{
  							$ref: "#/$defs/RadialLayerDatumObject"
  						}
  					]
  				}
  			},
  			link: {
  				type: "array",
  				items: {
  					anyOf: [
  						{
  							type: "string"
  						},
  						{
  							type: "number"
  						}
  					]
  				}
  			},
  			keys: {
  				type: "array",
  				items: {
  					type: "string"
  				}
  			},
  			values: {
  				type: "array",
  				items: {
  					anyOf: [
  						{
  							type: "null"
  						},
  						{
  							type: "number"
  						}
  					]
  				}
  			}
  		},
  		additionalProperties: false
  	},
  	RadialMatrixCell: {
  		type: "object",
  		properties: {
  			row: {
  				type: "string"
  			},
  			col: {
  				type: "string"
  			},
  			value: {
  				anyOf: [
  					{
  						type: "null"
  					},
  					{
  						type: "number"
  					}
  				]
  			},
  			status: {
  				type: "string"
  			},
  			label: {
  				type: "string"
  			},
  			color: {
  				type: "string"
  			},
  			link: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "number"
  					},
  					{
  						type: "array",
  						items: {
  							anyOf: [
  								{
  									type: "string"
  								},
  								{
  									type: "number"
  								}
  							]
  						}
  					}
  				]
  			},
  			keys: {
  				type: "array",
  				items: {
  					type: "string"
  				}
  			},
  			values: {
  				type: "array",
  				items: {
  					anyOf: [
  						{
  							type: "null"
  						},
  						{
  							type: "number"
  						}
  					]
  				}
  			}
  		},
  		required: [
  			"row",
  			"col"
  		],
  		additionalProperties: false
  	},
  	RadialMatrixHeader: {
  		type: "object",
  		properties: {
  			id: {
  				type: "string"
  			},
  			name: {
  				type: "string"
  			},
  			short: {
  				type: "string"
  			},
  			keys: {
  				type: "array",
  				items: {
  					type: "string"
  				}
  			},
  			link: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "number"
  					},
  					{
  						type: "array",
  						items: {
  							anyOf: [
  								{
  									type: "string"
  								},
  								{
  									type: "number"
  								}
  							]
  						}
  					}
  				]
  			},
  			values: {
  				type: "array",
  				items: {
  					anyOf: [
  						{
  							type: "null"
  						},
  						{
  							type: "number"
  						}
  					]
  				}
  			}
  		},
  		additionalProperties: false
  	},
  	RadialMatrixScale: {
  		type: "object",
  		properties: {
  			scale: {
  				type: "string",
  				"enum": [
  					"diverging",
  					"sequential"
  				]
  			},
  			domain: {
  				type: "array",
  				items: {
  					type: "number"
  				}
  			},
  			mid: {
  				type: "number"
  			},
  			stops: {
  				type: "array",
  				items: {
  					type: "string"
  				}
  			},
  			reverse: {
  				type: "boolean"
  			}
  		},
  		additionalProperties: false
  	},
  	RadialVitalsBand: {
  		type: "object",
  		properties: {
  			to: {
  				type: "number"
  			},
  			level: {
  				type: "number",
  				"enum": [
  					0,
  					2,
  					1,
  					3
  				]
  			},
  			label: {
  				type: "string"
  			}
  		},
  		required: [
  			"level"
  		],
  		additionalProperties: false
  	},
  	RadialVitalsRow: {
  		type: "object",
  		properties: {
  			name: {
  				type: "string"
  			},
  			unit: {
  				type: "string"
  			},
  			aggregate: {
  				type: "string",
  				"enum": [
  					"last",
  					"max",
  					"min",
  					"mean",
  					"median"
  				]
  			},
  			bands: {
  				type: "array",
  				items: {
  					$ref: "#/$defs/RadialVitalsBand"
  				}
  			},
  			data: {
  				type: "array",
  				items: {
  					anyOf: [
  						{
  							type: "null"
  						},
  						{
  							type: "number"
  						}
  					]
  				}
  			},
  			samples: {
  				type: "array",
  				items: {
  					anyOf: [
  						{
  							type: "null"
  						},
  						{
  							type: "array",
  							items: {
  								type: "array",
  								prefixItems: [
  									{
  										type: "string"
  									},
  									{
  										type: "number"
  									}
  								],
  								minItems: 2,
  								maxItems: 2
  							}
  						}
  					]
  				}
  			}
  		},
  		required: [
  			"name",
  			"data"
  		],
  		additionalProperties: false
  	},
  	RadialWaveAnomaly: {
  		type: "object",
  		properties: {
  			series: {
  				type: "string"
  			},
  			at: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "number"
  					}
  				]
  			},
  			label: {
  				type: "string"
  			},
  			kind: {
  				type: "string"
  			},
  			color: {
  				type: "string"
  			}
  		},
  		required: [
  			"at"
  		],
  		additionalProperties: false
  	},
  	RadialWaveSector: {
  		type: "object",
  		properties: {
  			name: {
  				type: "string"
  			},
  			label: {
  				type: "string"
  			},
  			link: {
  				type: "array",
  				items: {
  					anyOf: [
  						{
  							type: "string"
  						},
  						{
  							type: "number"
  						}
  					]
  				}
  			},
  			keys: {
  				type: "array",
  				items: {
  					type: "string"
  				}
  			},
  			values: {
  				type: "array",
  				items: {
  					anyOf: [
  						{
  							type: "null"
  						},
  						{
  							type: "number"
  						}
  					]
  				}
  			}
  		},
  		additionalProperties: false
  	},
  	RadialWaveSeries: {
  		type: "object",
  		properties: {
  			name: {
  				type: "string"
  			},
  			data: {
  				type: "array",
  				items: {
  					anyOf: [
  						{
  							type: "null"
  						},
  						{
  							type: "number"
  						},
  						{
  							type: "array",
  							prefixItems: [
  								{
  								},
  								{
  									anyOf: [
  										{
  											type: "null"
  										},
  										{
  											type: "number"
  										}
  									]
  								}
  							],
  							minItems: 2,
  							maxItems: 2
  						},
  						{
  							type: "object",
  							properties: {
  								y: {
  									anyOf: [
  										{
  											type: "null"
  										},
  										{
  											type: "number"
  										}
  									]
  								}
  							},
  							required: [
  								"y"
  							],
  							additionalProperties: false
  						}
  					]
  				}
  			},
  			color: {
  				type: "string"
  			},
  			envelope: {
  				type: "object",
  				properties: {
  					lo: {
  						type: "array",
  						items: {
  							anyOf: [
  								{
  									type: "null"
  								},
  								{
  									type: "number"
  								}
  							]
  						}
  					},
  					hi: {
  						type: "array",
  						items: {
  							anyOf: [
  								{
  									type: "null"
  								},
  								{
  									type: "number"
  								}
  							]
  						}
  					}
  				},
  				required: [
  					"lo",
  					"hi"
  				],
  				additionalProperties: false
  			},
  			forecast: {
  				type: "object",
  				properties: {
  					data: {
  						type: "array",
  						items: {
  							anyOf: [
  								{
  									type: "null"
  								},
  								{
  									type: "number"
  								}
  							]
  						}
  					},
  					lo: {
  						type: "array",
  						items: {
  							anyOf: [
  								{
  									type: "null"
  								},
  								{
  									type: "number"
  								}
  							]
  						}
  					},
  					hi: {
  						type: "array",
  						items: {
  							anyOf: [
  								{
  									type: "null"
  								},
  								{
  									type: "number"
  								}
  							]
  						}
  					}
  				},
  				additionalProperties: false
  			},
  			anomalies: {
  				type: "array",
  				items: {
  					$ref: "#/$defs/RadialWaveAnomaly"
  				}
  			},
  			keys: {
  				type: "array",
  				items: {
  					type: "string"
  				}
  			},
  			link: {
  				type: "array",
  				items: {
  					anyOf: [
  						{
  							type: "string"
  						},
  						{
  							type: "number"
  						}
  					]
  				}
  			}
  		},
  		required: [
  			"data"
  		],
  		additionalProperties: false
  	},
  	TextAnnotations: {
  		type: "object",
  		properties: {
  			x: {
  				type: "number"
  			},
  			y: {
  				type: "number"
  			},
  			text: {
  				type: "string"
  			},
  			textAnchor: {
  				type: "string"
  			},
  			foreColor: {
  				type: "string"
  			},
  			fontSize: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "number"
  					}
  				]
  			},
  			fontFamily: {
  				type: "string"
  			},
  			fontWeight: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "number"
  					}
  				]
  			},
  			backgroundColor: {
  				type: "string"
  			},
  			borderColor: {
  				type: "string"
  			},
  			borderRadius: {
  				type: "number"
  			},
  			borderWidth: {
  				type: "number"
  			},
  			paddingLeft: {
  				type: "number"
  			},
  			paddingRight: {
  				type: "number"
  			},
  			paddingTop: {
  				type: "number"
  			},
  			paddingBottom: {
  				type: "number"
  			}
  		},
  		additionalProperties: false
  	},
  	WccChartAccessibility: {
  		type: "object",
  		properties: {
  			enabled: {
  				type: "boolean"
  			},
  			announcements: {
  				type: "object",
  				properties: {
  					enabled: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			keyboard: {
  				type: "object",
  				properties: {
  					enabled: {
  						type: "boolean"
  					},
  					navigation: {
  						type: "object",
  						properties: {
  							enabled: {
  								type: "boolean"
  							},
  							wrapAround: {
  								type: "boolean"
  							}
  						},
  						additionalProperties: false
  					}
  				},
  				additionalProperties: false
  			}
  		},
  		additionalProperties: false
  	},
  	WccChordOptions: {
  		type: "object",
  		properties: {
  			plugins: {
  				type: "array",
  				items: {
  					anyOf: [
  						{
  							type: "string"
  						},
  						{
  							$ref: "#/$defs/WccPremiumPlugin"
  						},
  						{
  							type: "array",
  							prefixItems: [
  								{
  									type: "string"
  								},
  								{
  									type: "object",
  									additionalProperties: true
  								}
  							],
  							minItems: 1,
  							maxItems: 2
  						}
  					]
  				}
  			},
  			matrix: {
  				anyOf: [
  					{
  						type: "null"
  					},
  					{
  						type: "array",
  						items: {
  							type: "array",
  							items: {
  								type: "number"
  							}
  						}
  					}
  				]
  			},
  			labels: {
  				type: "array",
  				items: {
  					type: "string"
  				}
  			},
  			directed: {
  				anyOf: [
  					{
  						"const": "auto"
  					},
  					{
  						type: "boolean"
  					}
  				]
  			},
  			padAngle: {
  				type: "number"
  			},
  			sort: {
  				type: "string",
  				"enum": [
  					"none",
  					"asc",
  					"desc"
  				]
  			},
  			ringWidth: {
  				type: "number"
  			},
  			ribbon: {
  				type: "object",
  				properties: {
  					opacity: {
  						type: "number"
  					},
  					colorMode: {
  						type: "string",
  						"enum": [
  							"source",
  							"target",
  							"gradient"
  						]
  					},
  					padding: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			},
  			groups: {
  				type: "array",
  				items: {
  					type: "object",
  					properties: {
  						id: {
  							anyOf: [
  								{
  									type: "string"
  								},
  								{
  									type: "number"
  								}
  							]
  						},
  						name: {
  							type: "string"
  						},
  						color: {
  							type: "string"
  						}
  					},
  					required: [
  						"id"
  					],
  					additionalProperties: false
  				}
  			},
  			ticks: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					},
  					step: {
  						anyOf: [
  							{
  								"const": "auto"
  							},
  							{
  								type: "number"
  							}
  						]
  					},
  					labelStep: {
  						anyOf: [
  							{
  								"const": "auto"
  							},
  							{
  								type: "number"
  							}
  						]
  					},
  					formatter: {
  						"x-wcc-type": "function"
  					}
  				},
  				additionalProperties: false
  			},
  			dataLabels: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					},
  					showValue: {
  						type: "boolean"
  					},
  					formatter: {
  						"x-wcc-type": "function"
  					}
  				},
  				additionalProperties: false
  			}
  		},
  		additionalProperties: false
  	},
  	WccColorScale: {
  		type: "object",
  		properties: {
  			colors: {
  				type: "array",
  				items: {
  					type: "string"
  				}
  			},
  			min: {
  				type: "number"
  			},
  			max: {
  				type: "number"
  			},
  			steps: {
  				type: "number"
  			}
  		},
  		additionalProperties: false
  	},
  	WccDatum: {
  		type: "object",
  		properties: {
  			x: {
  			},
  			y: {
  			},
  			id: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "number"
  					}
  				]
  			},
  			name: {
  				type: "string"
  			},
  			value: {
  				anyOf: [
  					{
  						type: "null"
  					},
  					{
  						type: "number"
  					}
  				]
  			},
  			children: {
  				type: "array",
  				items: {
  					$ref: "#/$defs/WccDatum"
  				}
  			},
  			isTotal: {
  				type: "boolean"
  			},
  			isSubtotal: {
  				type: "boolean"
  			},
  			points: {
  				type: "array",
  				items: {
  					type: "number"
  				}
  			},
  			from: {
  			},
  			to: {
  			},
  			highlight: {
  				anyOf: [
  					{
  						type: "null"
  					},
  					{
  						type: "number"
  					}
  				]
  			},
  			color: {
  				type: "string"
  			},
  			fillColor: {
  				type: "string"
  			},
  			strokeColor: {
  				type: "string"
  			},
  			meta: {
  			}
  		},
  		additionalProperties: true
  	},
  	WccDrilldownOptions: {
  		type: "object",
  		properties: {
  			enabled: {
  				type: "boolean"
  			},
  			series: {
  				type: "array",
  				items: {
  					type: "object",
  					properties: {
  						id: {
  							type: "string"
  						},
  						name: {
  							type: "string"
  						},
  						type: {
  							type: "string"
  						},
  						data: {
  							type: "array",
  							items: {
  							}
  						}
  					},
  					required: [
  						"id",
  						"data"
  					],
  					additionalProperties: true
  				}
  			},
  			animation: {
  				type: "object",
  				properties: {
  					enabled: {
  						type: "boolean"
  					},
  					zoomFromPoint: {
  						type: "boolean"
  					},
  					speed: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			},
  			onDrillDown: {
  				"x-wcc-type": "function"
  			},
  			cache: {
  				type: "boolean"
  			},
  			breadcrumb: {
  				anyOf: [
  					{
  						"const": false
  					},
  					{
  						type: "object",
  						properties: {
  							rootLabel: {
  								type: "string"
  							}
  						},
  						additionalProperties: true
  					}
  				]
  			},
  			wcc: {
  				type: "object",
  				properties: {
  					transition: {
  						type: "string"
  					},
  					hint: {
  						anyOf: [
  							{
  								type: "boolean"
  							},
  							{
  								type: "string"
  							}
  						]
  					},
  					keepZoom: {
  						type: "boolean"
  					},
  					prefetch: {
  						type: "boolean"
  					},
  					deepLink: {
  						anyOf: [
  							{
  								type: "boolean"
  							},
  							{
  								type: "string"
  							}
  						]
  					},
  					syncGroup: {
  						anyOf: [
  							{
  								type: "boolean"
  							},
  							{
  								type: "string"
  							}
  						]
  					}
  				},
  				additionalProperties: true
  			}
  		},
  		additionalProperties: true
  	},
  	WccGanttColumnDef: {
  		type: "object",
  		properties: {
  			key: {
  				type: "string"
  			},
  			header: {
  				type: "string"
  			},
  			width: {
  				type: "number"
  			},
  			align: {
  				type: "string",
  				"enum": [
  					"end",
  					"start",
  					"middle"
  				]
  			},
  			value: {
  				"x-wcc-type": "function"
  			}
  		},
  		required: [
  			"key"
  		],
  		additionalProperties: false
  	},
  	WccGanttOptions: {
  		type: "object",
  		properties: {
  			plugins: {
  				type: "array",
  				items: {
  					anyOf: [
  						{
  							type: "string"
  						},
  						{
  							$ref: "#/$defs/WccPremiumPlugin"
  						},
  						{
  							type: "array",
  							prefixItems: [
  								{
  									type: "string"
  								},
  								{
  									type: "object",
  									additionalProperties: true
  								}
  							],
  							minItems: 1,
  							maxItems: 2
  						}
  					]
  				}
  			},
  			rowHeight: {
  				type: "number"
  			},
  			barHeight: {
  				type: "number"
  			},
  			barRadius: {
  				type: "number"
  			},
  			sort: {
  				type: "string",
  				"enum": [
  					"end",
  					"start",
  					"name",
  					"input"
  				]
  			},
  			grid: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					},
  					width: {
  						type: "number"
  					},
  					columns: {
  						type: "array",
  						items: {
  							anyOf: [
  								{
  									type: "string",
  									"enum": [
  										"end",
  										"start",
  										"name",
  										"duration",
  										"progress",
  										"assignee",
  										"wbs",
  										"ring"
  									]
  								},
  								{
  									$ref: "#/$defs/WccGanttColumnDef"
  								}
  							]
  						}
  					},
  					headers: {
  						type: "object",
  						properties: {
  							end: {
  								type: "string"
  							},
  							start: {
  								type: "string"
  							},
  							name: {
  								type: "string"
  							},
  							duration: {
  								type: "string"
  							},
  							progress: {
  								type: "string"
  							},
  							assignee: {
  								type: "string"
  							},
  							wbs: {
  								type: "string"
  							},
  							ring: {
  								type: "string"
  							}
  						},
  						additionalProperties: false
  					}
  				},
  				additionalProperties: false
  			},
  			groups: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					},
  					collapsible: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			labels: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					},
  					position: {
  						type: "string",
  						"enum": [
  							"right",
  							"left",
  							"inside"
  						]
  					},
  					formatter: {
  						"x-wcc-type": "function"
  					}
  				},
  				additionalProperties: false
  			},
  			progress: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			dependencies: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					},
  					color: {
  						type: "string"
  					},
  					radius: {
  						type: "number"
  					},
  					arrowSize: {
  						type: "number"
  					},
  					lagLabels: {
  						type: "boolean"
  					},
  					violations: {
  						type: "boolean"
  					},
  					edit: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			today: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					},
  					date: {
  						anyOf: [
  							{
  								type: "string"
  							},
  							{
  								type: "number"
  							},
  							{
  								"x-wcc-type": "Date"
  							}
  						]
  					},
  					label: {
  						type: "string"
  					}
  				},
  				additionalProperties: false
  			},
  			weekends: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			calendar: {
  				type: "object",
  				properties: {
  					workingDays: {
  						type: "array",
  						items: {
  							type: "number"
  						}
  					},
  					holidays: {
  						type: "array",
  						items: {
  							anyOf: [
  								{
  									type: "string"
  								},
  								{
  									type: "number"
  								},
  								{
  									"x-wcc-type": "Date"
  								},
  								{
  									type: "object",
  									properties: {
  										date: {
  											anyOf: [
  												{
  													type: "string"
  												},
  												{
  													type: "number"
  												},
  												{
  													"x-wcc-type": "Date"
  												}
  											]
  										},
  										name: {
  											type: "string"
  										}
  									},
  									required: [
  										"date"
  									],
  									additionalProperties: false
  								},
  								{
  									type: "object",
  									properties: {
  										from: {
  											anyOf: [
  												{
  													type: "string"
  												},
  												{
  													type: "number"
  												},
  												{
  													"x-wcc-type": "Date"
  												}
  											]
  										},
  										to: {
  											anyOf: [
  												{
  													type: "string"
  												},
  												{
  													type: "number"
  												},
  												{
  													"x-wcc-type": "Date"
  												}
  											]
  										},
  										name: {
  											type: "string"
  										}
  									},
  									required: [
  										"from",
  										"to"
  									],
  									additionalProperties: false
  								}
  							]
  						}
  					},
  					shade: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			criticalPath: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					},
  					color: {
  						type: "string"
  					}
  				},
  				additionalProperties: false
  			},
  			baselines: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			zoom: {
  				type: "object",
  				properties: {
  					enabled: {
  						type: "boolean"
  					},
  					wheel: {
  						anyOf: [
  							{
  								type: "boolean"
  							},
  							{
  								type: "string"
  							}
  						]
  					},
  					minDays: {
  						type: "number"
  					},
  					maxDays: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			},
  			drag: {
  				type: "object",
  				properties: {
  					enabled: {
  						type: "boolean"
  					},
  					resize: {
  						type: "boolean"
  					},
  					snap: {
  						anyOf: [
  							{
  								type: "string",
  								"enum": [
  									"day",
  									"hour"
  								]
  							},
  							{
  								"const": false
  							}
  						]
  					},
  					draw: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			edit: {
  				type: "object",
  				properties: {
  					undo: {
  						type: "boolean"
  					},
  					keyboard: {
  						type: "boolean"
  					},
  					remove: {
  						type: "boolean"
  					},
  					rename: {
  						type: "boolean"
  					},
  					newName: {
  						type: "string"
  					},
  					newDays: {
  						type: "number"
  					},
  					addLabel: {
  						type: "string"
  					}
  				},
  				additionalProperties: false
  			},
  			range: {
  				type: "object",
  				properties: {
  					min: {
  						anyOf: [
  							{
  								type: "string"
  							},
  							{
  								type: "number"
  							},
  							{
  								"x-wcc-type": "Date"
  							}
  						]
  					},
  					max: {
  						anyOf: [
  							{
  								type: "string"
  							},
  							{
  								type: "number"
  							},
  							{
  								"x-wcc-type": "Date"
  							}
  						]
  					}
  				},
  				additionalProperties: false
  			},
  			boundary: {
  				type: "object",
  				properties: {
  					start: {
  						anyOf: [
  							{
  								type: "string"
  							},
  							{
  								type: "number"
  							},
  							{
  								"x-wcc-type": "Date"
  							}
  						]
  					},
  					end: {
  						anyOf: [
  							{
  								type: "string"
  							},
  							{
  								type: "number"
  							},
  							{
  								"x-wcc-type": "Date"
  							}
  						]
  					},
  					startLabel: {
  						type: "string"
  					},
  					endLabel: {
  						type: "string"
  					},
  					shade: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			annotations: {
  				type: "array",
  				items: {
  					type: "object",
  					properties: {
  						x: {
  							anyOf: [
  								{
  									type: "string"
  								},
  								{
  									type: "number"
  								},
  								{
  									"x-wcc-type": "Date"
  								}
  							]
  						},
  						x2: {
  							anyOf: [
  								{
  									type: "string"
  								},
  								{
  									type: "number"
  								},
  								{
  									"x-wcc-type": "Date"
  								}
  							]
  						},
  						label: {
  							type: "string"
  						},
  						color: {
  							type: "string"
  						},
  						dash: {
  							type: "boolean"
  						},
  						task: {
  							anyOf: [
  								{
  									type: "string"
  								},
  								{
  									type: "number"
  								}
  							]
  						}
  					},
  					required: [
  						"x"
  					],
  					additionalProperties: false
  				}
  			},
  			persist: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "object",
  						properties: {
  							key: {
  								type: "string"
  							},
  							view: {
  								type: "boolean"
  							},
  							collapsed: {
  								type: "boolean"
  							},
  							selection: {
  								type: "boolean"
  							}
  						},
  						required: [
  							"key"
  						],
  						additionalProperties: false
  					}
  				]
  			},
  			controls: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			selection: {
  				type: "object",
  				properties: {
  					enabled: {
  						type: "boolean"
  					},
  					multiple: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			crosshair: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			rtl: {
  				anyOf: [
  					{
  						"const": "auto"
  					},
  					{
  						type: "boolean"
  					}
  				]
  			}
  		},
  		additionalProperties: false
  	},
  	WccHighlightFilterOptions: {
  		type: "object",
  		properties: {
  			enabled: {
  				type: "boolean"
  			},
  			data: {
  				type: "array",
  				items: {
  					anyOf: [
  						{
  							type: "null"
  						},
  						{
  							type: "number"
  						}
  					]
  				}
  			},
  			fadeOpacity: {
  				type: "number"
  			},
  			outline: {
  				type: "object",
  				properties: {
  					width: {
  						type: "number"
  					},
  					opacity: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			},
  			enter: {
  				type: "string"
  			},
  			axis: {
  				type: "string"
  			},
  			dataLabels: {
  				type: "object",
  				properties: {
  					value: {
  						type: "string"
  					},
  					total: {
  						type: "string"
  					}
  				},
  				additionalProperties: false
  			},
  			tooltip: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					},
  					share: {
  						type: "boolean"
  					},
  					formatter: {
  						"x-wcc-type": "function"
  					}
  				},
  				additionalProperties: false
  			},
  			line: {
  				type: "object",
  				properties: {
  					dashArray: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			},
  			pie: {
  				type: "object",
  				properties: {
  					encoding: {
  						type: "string"
  					}
  				},
  				additionalProperties: false
  			},
  			wcc: {
  				type: "object",
  				properties: {
  					csv: {
  						type: "string",
  						"enum": [
  							"both",
  							"whole"
  						]
  					},
  					combo: {
  						type: "boolean"
  					},
  					pattern: {
  						anyOf: [
  							{
  								"const": "auto"
  							},
  							{
  								type: "boolean"
  							}
  						]
  					},
  					stagger: {
  						type: "number"
  					},
  					labelShare: {
  						type: "boolean"
  					},
  					streamingParts: {
  						type: "boolean"
  					},
  					wholeLabels: {
  						anyOf: [
  							{
  								"const": "auto"
  							},
  							{
  								type: "boolean"
  							}
  						]
  					},
  					key: {
  						type: "object",
  						properties: {
  							show: {
  								anyOf: [
  									{
  										"const": "auto"
  									},
  									{
  										type: "boolean"
  									}
  								]
  							},
  							whole: {
  								type: "string"
  							},
  							part: {
  								type: "string"
  							}
  						},
  						additionalProperties: false
  					}
  				},
  				additionalProperties: false
  			}
  		},
  		additionalProperties: true
  	},
  	WccHistoryOptions: {
  		type: "object",
  		properties: {
  			enabled: {
  				type: "boolean"
  			},
  			maxDepth: {
  				type: "number"
  			},
  			coalesceMs: {
  				type: "number"
  			},
  			keyboard: {
  				type: "boolean"
  			},
  			wcc: {
  				type: "object",
  				properties: {
  					toolbar: {
  						type: "boolean"
  					},
  					recordData: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: true
  			}
  		},
  		additionalProperties: false
  	},
  	WccLinkOptions: {
  		type: "object",
  		properties: {
  			id: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "number"
  					}
  				]
  			},
  			group: {
  				type: "string"
  			},
  			dimension: {
  				"x-wcc-type": "function"
  			},
  			type: {
  				type: "string",
  				"enum": [
  					"category",
  					"range",
  					"matrix",
  					"path"
  				]
  			},
  			reduce: {
  				anyOf: [
  					{
  						"const": "count"
  					},
  					{
  						type: "object",
  						properties: {
  							sum: {
  								anyOf: [
  									{
  										type: "string"
  									},
  									{
  										"x-wcc-type": "function"
  									}
  								]
  							}
  						},
  						required: [
  							"sum"
  						],
  						additionalProperties: false
  					},
  					{
  						type: "object",
  						properties: {
  							avg: {
  								anyOf: [
  									{
  										type: "string"
  									},
  									{
  										"x-wcc-type": "function"
  									}
  								]
  							}
  						},
  						required: [
  							"avg"
  						],
  						additionalProperties: false
  					},
  					{
  						type: "object",
  						properties: {
  							min: {
  								anyOf: [
  									{
  										type: "string"
  									},
  									{
  										"x-wcc-type": "function"
  									}
  								]
  							}
  						},
  						required: [
  							"min"
  						],
  						additionalProperties: false
  					},
  					{
  						type: "object",
  						properties: {
  							max: {
  								anyOf: [
  									{
  										type: "string"
  									},
  									{
  										"x-wcc-type": "function"
  									}
  								]
  							}
  						},
  						required: [
  							"max"
  						],
  						additionalProperties: false
  					},
  					{
  						"x-wcc-type": "function"
  					}
  				]
  			},
  			bins: {
  				type: "object",
  				properties: {
  					width: {
  						type: "number"
  					},
  					count: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			},
  			order: {
  				anyOf: [
  					{
  						type: "string",
  						"enum": [
  							"first-seen",
  							"asc",
  							"desc",
  							"value-asc",
  							"value-desc"
  						]
  					},
  					{
  						"x-wcc-type": "function"
  					}
  				]
  			},
  			seriesName: {
  				type: "string"
  			},
  			dimOpacity: {
  				type: "number"
  			},
  			wcc: {
  				type: "object",
  				properties: {
  					label: {
  						type: "string"
  					},
  					selectMode: {
  						type: "string",
  						"enum": [
  							"toggle",
  							"single",
  							"additive-shift"
  						]
  					},
  					summary: {
  						anyOf: [
  							{
  								type: "boolean"
  							},
  							{
  								type: "string"
  							},
  							{
  								"x-wcc-type": "Element"
  							}
  						]
  					},
  					emptyBuckets: {
  						type: "string",
  						"enum": [
  							"hide",
  							"show"
  						]
  					},
  					display: {
  						type: "string",
  						"enum": [
  							"filtered",
  							"parts"
  						]
  					},
  					throttle: {
  						anyOf: [
  							{
  								type: "string",
  								"enum": [
  									"frame",
  									"end"
  								]
  							},
  							{
  								type: "number"
  							}
  						]
  					},
  					centre: {
  						type: "boolean"
  					},
  					centreLabel: {
  						type: "string"
  					},
  					heatScale: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: true
  			}
  		},
  		additionalProperties: true
  	},
  	WccMapOptions: {
  		type: "object",
  		properties: {
  			plugins: {
  				type: "array",
  				items: {
  					anyOf: [
  						{
  							type: "string"
  						},
  						{
  							$ref: "#/$defs/WccPremiumPlugin"
  						},
  						{
  							type: "array",
  							prefixItems: [
  								{
  									type: "string"
  								},
  								{
  									type: "object",
  									additionalProperties: true
  								}
  							],
  							minItems: 1,
  							maxItems: 2
  						}
  					]
  				}
  			},
  			map: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "object"
  					}
  				]
  			},
  			object: {
  				anyOf: [
  					{
  						type: "null"
  					},
  					{
  						type: "string"
  					}
  				]
  			},
  			projection: {
  				type: "string",
  				"enum": [
  					"auto",
  					"equalEarth",
  					"mercator",
  					"equirectangular",
  					"albers",
  					"albersUsa",
  					"orthographic"
  				]
  			},
  			rotate: {
  				type: "array",
  				prefixItems: [
  					{
  						type: "number"
  					},
  					{
  						type: "number"
  					}
  				],
  				minItems: 2,
  				maxItems: 2
  			},
  			normalize: {
  				type: "object",
  				properties: {
  					by: {
  						anyOf: [
  							{
  								type: "null"
  							},
  							{
  								type: "string"
  							},
  							{
  								"x-wcc-type": "function"
  							}
  						]
  					},
  					per: {
  						type: "number"
  					},
  					label: {
  						anyOf: [
  							{
  								type: "null"
  							},
  							{
  								type: "string"
  							}
  						]
  					}
  				},
  				additionalProperties: false
  			},
  			exclude: {
  				type: "array",
  				items: {
  					type: "string"
  				}
  			},
  			style: {
  				type: "string",
  				"enum": [
  					"fill",
  					"dots",
  					"tiles"
  				]
  			},
  			dots: {
  				type: "object",
  				properties: {
  					spacing: {
  						type: "number"
  					},
  					size: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			},
  			tiles: {
  				type: "object",
  				properties: {
  					shape: {
  						type: "string",
  						"enum": [
  							"square",
  							"hex"
  						]
  					},
  					gap: {
  						type: "number"
  					},
  					labels: {
  						anyOf: [
  							{
  								type: "boolean"
  							},
  							{
  								"x-wcc-type": "function"
  							}
  						]
  					},
  					layout: {
  						anyOf: [
  							{
  								type: "string"
  							},
  							{
  								type: "object",
  								additionalProperties: {
  									type: "array",
  									prefixItems: [
  										{
  											type: "number"
  										},
  										{
  											type: "number"
  										}
  									],
  									minItems: 2,
  									maxItems: 2
  								}
  							}
  						]
  					}
  				},
  				additionalProperties: false
  			},
  			sphere: {
  				type: "boolean"
  			},
  			colorScale: {
  				type: "object",
  				properties: {
  					type: {
  						type: "string",
  						"enum": [
  							"linear",
  							"log",
  							"quantize",
  							"diverging"
  						]
  					},
  					palette: {
  						type: "string"
  					},
  					reverse: {
  						type: "boolean"
  					},
  					colors: {
  						anyOf: [
  							{
  								type: "null"
  							},
  							{
  								type: "array",
  								items: {
  									type: "string"
  								}
  							}
  						]
  					},
  					min: {
  						type: "number"
  					},
  					max: {
  						type: "number"
  					},
  					mid: {
  						type: "number"
  					},
  					steps: {
  						type: "number"
  					},
  					ranges: {
  						anyOf: [
  							{
  								type: "null"
  							},
  							{
  								type: "array",
  								items: {
  									type: "object",
  									properties: {
  										from: {
  											type: "number"
  										},
  										to: {
  											type: "number"
  										},
  										color: {
  											type: "string"
  										},
  										name: {
  											type: "string"
  										},
  										pattern: {
  											anyOf: [
  												{
  													type: "string",
  													"enum": [
  														"cross",
  														"horizontal",
  														"vertical",
  														"grid",
  														"dots",
  														"hatch",
  														"hatch-reverse"
  													]
  												},
  												{
  													type: "object",
  													properties: {
  														type: {
  															type: "string"
  														},
  														color: {
  															type: "string"
  														},
  														background: {
  															type: "string"
  														},
  														size: {
  															type: "number"
  														},
  														width: {
  															type: "number"
  														},
  														angle: {
  															type: "number"
  														}
  													},
  													required: [
  														"type"
  													],
  													additionalProperties: false
  												}
  											]
  										}
  									},
  									additionalProperties: false
  								}
  							}
  						]
  					},
  					nullColor: {
  						anyOf: [
  							{
  								type: "null"
  							},
  							{
  								type: "string"
  							}
  						]
  					},
  					patterns: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			borders: {
  				type: "object",
  				properties: {
  					width: {
  						type: "number"
  					},
  					color: {
  						anyOf: [
  							{
  								type: "null"
  							},
  							{
  								type: "string"
  							}
  						]
  					}
  				},
  				additionalProperties: false
  			},
  			bubble: {
  				type: "object",
  				properties: {
  					minRadius: {
  						type: "number"
  					},
  					maxRadius: {
  						type: "number"
  					},
  					opacity: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			},
  			hexbin: {
  				type: "object",
  				properties: {
  					radius: {
  						anyOf: [
  							{
  								"const": "auto"
  							},
  							{
  								type: "number"
  							}
  						]
  					},
  					scaleSize: {
  						type: "boolean"
  					},
  					colors: {
  						anyOf: [
  							{
  								type: "null"
  							},
  							{
  								type: "array",
  								items: {
  									type: "string"
  								}
  							}
  						]
  					}
  				},
  				additionalProperties: false
  			},
  			arcs: {
  				type: "object",
  				properties: {
  					curvature: {
  						type: "number"
  					},
  					width: {
  						type: "array",
  						prefixItems: [
  							{
  								type: "number"
  							},
  							{
  								type: "number"
  							}
  						],
  						minItems: 2,
  						maxItems: 2
  					},
  					flow: {
  						type: "boolean"
  					},
  					endpoints: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			markers: {
  				type: "object",
  				properties: {
  					shape: {
  						type: "string",
  						"enum": [
  							"circle",
  							"square",
  							"star",
  							"diamond",
  							"triangle",
  							"pin"
  						]
  					},
  					size: {
  						type: "number"
  					},
  					labels: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			routes: {
  				type: "object",
  				properties: {
  					width: {
  						type: "number"
  					},
  					geodesic: {
  						type: "boolean"
  					},
  					stops: {
  						type: "boolean"
  					},
  					arrows: {
  						type: "boolean"
  					},
  					labels: {
  						type: "boolean"
  					},
  					dash: {
  						anyOf: [
  							{
  								type: "null"
  							},
  							{
  								type: "string"
  							},
  							{
  								type: "number"
  							}
  						]
  					}
  				},
  				additionalProperties: false
  			},
  			annotations: {
  				type: "array",
  				items: {
  					type: "object",
  					additionalProperties: true
  				}
  			},
  			legend: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					},
  					title: {
  						anyOf: [
  							{
  								type: "null"
  							},
  							{
  								type: "string"
  							}
  						]
  					}
  				},
  				additionalProperties: false
  			},
  			fit: {
  				type: "string",
  				"enum": [
  					"auto",
  					"map",
  					"data"
  				]
  			},
  			zoom: {
  				type: "object",
  				properties: {
  					enabled: {
  						type: "boolean"
  					},
  					wheel: {
  						anyOf: [
  							{
  								type: "boolean"
  							},
  							{
  								type: "string"
  							}
  						]
  					},
  					min: {
  						type: "number"
  					},
  					max: {
  						type: "number"
  					},
  					toRegion: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			controls: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			formatter: {
  				anyOf: [
  					{
  						type: "null"
  					},
  					{
  						"x-wcc-type": "function"
  					}
  				]
  			},
  			drilldown: {
  				type: "object",
  				properties: {
  					enabled: {
  						type: "boolean"
  					},
  					breadcrumb: {
  						type: "boolean"
  					},
  					rootLabel: {
  						type: "string"
  					},
  					load: {
  						"x-wcc-type": "function"
  					},
  					drillable: {
  						anyOf: [
  							{
  								type: "array",
  								items: {
  									anyOf: [
  										{
  											type: "string"
  										},
  										{
  											type: "number"
  										}
  									]
  								}
  							},
  							{
  								"x-wcc-type": "function"
  							}
  						]
  					},
  					regions: {
  						type: "object",
  						additionalProperties: {
  							anyOf: [
  								{
  									"const": true
  								},
  								{
  									type: "object",
  									properties: {
  										map: {
  											anyOf: [
  												{
  													type: "string"
  												},
  												{
  													type: "object"
  												}
  											]
  										},
  										series: {
  											type: "array",
  											items: {
  											}
  										},
  										label: {
  											type: "string"
  										},
  										colorScale: {
  											type: "object"
  										}
  									},
  									additionalProperties: false
  								}
  							]
  						}
  					}
  				},
  				additionalProperties: false
  			}
  		},
  		additionalProperties: false
  	},
  	WccMarimekkoOptions: {
  		type: "object",
  		properties: {
  			plugins: {
  				type: "array",
  				items: {
  					anyOf: [
  						{
  							type: "string"
  						},
  						{
  							$ref: "#/$defs/WccPremiumPlugin"
  						},
  						{
  							type: "array",
  							prefixItems: [
  								{
  									type: "string"
  								},
  								{
  									type: "object",
  									additionalProperties: true
  								}
  							],
  							minItems: 1,
  							maxItems: 2
  						}
  					]
  				}
  			},
  			gap: {
  				type: "number"
  			},
  			radius: {
  				type: "number"
  			},
  			fill: {
  				type: "string",
  				"enum": [
  					"soft",
  					"solid"
  				]
  			},
  			widths: {
  				anyOf: [
  					{
  						"const": "total"
  					},
  					{
  						type: "array",
  						items: {
  							type: "number"
  						}
  					}
  				]
  			},
  			sort: {
  				type: "string",
  				"enum": [
  					"none",
  					"asc",
  					"desc"
  				]
  			},
  			dataLabels: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					},
  					showName: {
  						type: "boolean"
  					},
  					showPercent: {
  						type: "boolean"
  					},
  					minWidth: {
  						type: "number"
  					},
  					minHeight: {
  						type: "number"
  					},
  					outside: {
  						type: "boolean"
  					},
  					formatter: {
  						"x-wcc-type": "function"
  					}
  				},
  				additionalProperties: false
  			},
  			columnLabels: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					},
  					showTotal: {
  						type: "boolean"
  					},
  					showShare: {
  						type: "boolean"
  					},
  					wrap: {
  						type: "boolean"
  					},
  					abbreviate: {
  						type: "boolean"
  					},
  					abbreviations: {
  						type: "object",
  						additionalProperties: {
  							type: "string"
  						}
  					}
  				},
  				additionalProperties: false
  			},
  			yAxis: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			legend: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			}
  		},
  		additionalProperties: false
  	},
  	WccNarrativeOptions: {
  		type: "object",
  		properties: {
  			enabled: {
  				type: "boolean"
  			},
  			source: {
  				type: "string",
  				"enum": [
  					"frames",
  					"record"
  				]
  			},
  			frames: {
  				type: "array",
  				items: {
  					type: "object",
  					properties: {
  						t: {
  						},
  						series: {
  							type: "array",
  							items: {
  							}
  						},
  						label: {
  							type: "string"
  						},
  						caption: {
  							type: "string"
  						},
  						options: {
  							type: "object",
  							additionalProperties: true
  						},
  						annotations: {
  							type: "object",
  							additionalProperties: true
  						}
  					},
  					required: [
  						"series"
  					],
  					additionalProperties: false
  				}
  			},
  			maxFrames: {
  				type: "number"
  			},
  			interpolate: {
  				type: "boolean"
  			},
  			keyBy: {
  				anyOf: [
  					{
  						"const": "x"
  					},
  					{
  						type: "null"
  					},
  					{
  						"x-wcc-type": "function"
  					}
  				]
  			},
  			frameDuration: {
  				type: "number"
  			},
  			loop: {
  				type: "boolean"
  			},
  			autoplay: {
  				type: "boolean"
  			},
  			transport: {
  				type: "boolean"
  			},
  			watermark: {
  				anyOf: [
  					{
  						type: "string",
  						"enum": [
  							"auto",
  							"label"
  						]
  					},
  					{
  						"const": false
  					},
  					{
  						"x-wcc-type": "function"
  					}
  				]
  			},
  			captions: {
  				type: "boolean"
  			},
  			liveBehaviour: {
  				type: "string",
  				"enum": [
  					"buffer",
  					"follow"
  				]
  			}
  		},
  		additionalProperties: false
  	},
  	WccNetworkFacetOptions: {
  		type: "object",
  		properties: {
  			levels: {
  				anyOf: [
  					{
  						"const": "auto"
  					},
  					{
  						type: "array",
  						items: {
  							anyOf: [
  								{
  									type: "string"
  								},
  								{
  									type: "object",
  									properties: {
  										name: {
  											type: "string"
  										}
  									},
  									required: [
  										"name"
  									],
  									additionalProperties: false
  								}
  							]
  						}
  					}
  				]
  			},
  			core: {
  				type: "array",
  				items: {
  					type: "string"
  				}
  			},
  			sides: {
  				anyOf: [
  					{
  						"const": "auto"
  					},
  					{
  						type: "number"
  					}
  				]
  			},
  			rotation: {
  				type: "number"
  			},
  			sectors: {
  				type: "string",
  				"enum": [
  					"auto",
  					"equal",
  					"weighted"
  				]
  			},
  			order: {
  				type: "string",
  				"enum": [
  					"data",
  					"crossings"
  				]
  			},
  			coreRadius: {
  				type: "number"
  			},
  			bundle: {
  				type: "number"
  			},
  			edges: {
  				type: "object",
  				properties: {
  					degreeAlpha: {
  						type: "boolean"
  					},
  					lod: {
  						anyOf: [
  							{
  								"const": "auto"
  							},
  							{
  								type: "boolean"
  							}
  						]
  					},
  					lodZoom: {
  						type: "number"
  					},
  					ribbons: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			shells: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					},
  					labels: {
  						type: "boolean"
  					},
  					opacity: {
  						anyOf: [
  							{
  								"const": "auto"
  							},
  							{
  								type: "number"
  							}
  						]
  					}
  				},
  				additionalProperties: false
  			},
  			facets: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					},
  					opacity: {
  						anyOf: [
  							{
  								"const": "auto"
  							},
  							{
  								type: "number"
  							}
  						]
  					},
  					labels: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			paths: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					},
  					width: {
  						type: "number"
  					},
  					dash: {
  						type: "array",
  						prefixItems: [
  							{
  								type: "number"
  							},
  							{
  								type: "number"
  							}
  						],
  						minItems: 2,
  						maxItems: 2
  					},
  					curvature: {
  						type: "number"
  					},
  					arrows: {
  						type: "boolean"
  					},
  					flow: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			markers: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					},
  					colors: {
  						type: "object",
  						properties: {
  							critical: {
  								type: "string"
  							},
  							warning: {
  								type: "string"
  							},
  							info: {
  								type: "string"
  							},
  							ok: {
  								type: "string"
  							}
  						},
  						additionalProperties: false
  					}
  				},
  				additionalProperties: false
  			},
  			legend: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					},
  					title: {
  						type: "string"
  					}
  				},
  				additionalProperties: false
  			}
  		},
  		additionalProperties: false
  	},
  	WccNetworkOptions: {
  		type: "object",
  		properties: {
  			plugins: {
  				type: "array",
  				items: {
  					anyOf: [
  						{
  							type: "string"
  						},
  						{
  							$ref: "#/$defs/WccPremiumPlugin"
  						},
  						{
  							type: "array",
  							prefixItems: [
  								{
  									type: "string"
  								},
  								{
  									type: "object",
  									additionalProperties: true
  								}
  							],
  							minItems: 1,
  							maxItems: 2
  						}
  					]
  				}
  			},
  			renderer: {
  				type: "string",
  				"enum": [
  					"auto",
  					"svg",
  					"canvas"
  				]
  			},
  			canvasThreshold: {
  				type: "number"
  			},
  			nodes: {
  				type: "object",
  				properties: {
  					minRadius: {
  						type: "number"
  					},
  					maxRadius: {
  						type: "number"
  					},
  					sizeBy: {
  						type: "string",
  						"enum": [
  							"none",
  							"auto",
  							"value",
  							"degree"
  						]
  					},
  					strokeWidth: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			},
  			edges: {
  				type: "object",
  				properties: {
  					width: {
  						type: "array",
  						prefixItems: [
  							{
  								type: "number"
  							},
  							{
  								type: "number"
  							}
  						],
  						minItems: 2,
  						maxItems: 2
  					},
  					opacity: {
  						type: "number"
  					},
  					bundle: {
  						type: "boolean"
  					},
  					bundleStrength: {
  						type: "number"
  					},
  					curvature: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			},
  			layout: {
  				type: "object",
  				properties: {
  					type: {
  						type: "string",
  						"enum": [
  							"force",
  							"facet"
  						]
  					},
  					linkDistance: {
  						anyOf: [
  							{
  								"const": "auto"
  							},
  							{
  								type: "number"
  							}
  						]
  					},
  					charge: {
  						anyOf: [
  							{
  								"const": "auto"
  							},
  							{
  								type: "number"
  							}
  						]
  					},
  					groupStrength: {
  						type: "number"
  					},
  					iterations: {
  						anyOf: [
  							{
  								"const": "auto"
  							},
  							{
  								type: "number"
  							}
  						]
  					},
  					warmup: {
  						anyOf: [
  							{
  								"const": "auto"
  							},
  							{
  								type: "number"
  							}
  						]
  					}
  				},
  				additionalProperties: false
  			},
  			groups: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					},
  					hulls: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			labels: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					},
  					max: {
  						type: "number"
  					},
  					minZoom: {
  						type: "number"
  					},
  					formatter: {
  						"x-wcc-type": "function"
  					},
  					readability: {
  						anyOf: [
  							{
  								type: "string",
  								"enum": [
  									"none",
  									"halo",
  									"pill",
  									"auto",
  									"hide"
  								]
  							},
  							{
  								type: "boolean"
  							},
  							{
  								type: "object",
  								properties: {
  									mode: {
  										type: "string",
  										"enum": [
  											"none",
  											"halo",
  											"pill",
  											"auto",
  											"hide"
  										]
  									},
  									fallback: {
  										type: "string",
  										"enum": [
  											"halo",
  											"pill",
  											"hide"
  										]
  									},
  									enabled: {
  										type: "boolean"
  									},
  									contrast: {
  										type: "boolean"
  									},
  									minRatio: {
  										type: "number"
  									},
  									light: {
  										type: "string"
  									},
  									dark: {
  										type: "string"
  									},
  									background: {
  										type: "string"
  									},
  									halo: {
  										type: "object",
  										properties: {
  											width: {
  												type: "number"
  											},
  											color: {
  												type: "string"
  											},
  											opacity: {
  												type: "number"
  											},
  											blur: {
  												type: "number"
  											}
  										},
  										additionalProperties: false
  									},
  									pill: {
  										type: "object",
  										properties: {
  											fill: {
  												type: "string"
  											},
  											opacity: {
  												type: "number"
  											},
  											radius: {
  												type: "number"
  											},
  											padding: {
  												anyOf: [
  													{
  														type: "number"
  													},
  													{
  														type: "array",
  														prefixItems: [
  															{
  																type: "number"
  															},
  															{
  																type: "number"
  															}
  														],
  														minItems: 2,
  														maxItems: 2
  													}
  												]
  											},
  											stroke: {
  												type: "string"
  											},
  											strokeWidth: {
  												type: "number"
  											},
  											offset: {
  												type: "array",
  												prefixItems: [
  													{
  														type: "number"
  													},
  													{
  														type: "number"
  													}
  												],
  												minItems: 2,
  												maxItems: 2
  											}
  										},
  										additionalProperties: false
  									},
  									shadow: {
  										anyOf: [
  											{
  												type: "boolean"
  											},
  											{
  												type: "object",
  												properties: {
  													dx: {
  														type: "number"
  													},
  													dy: {
  														type: "number"
  													},
  													blur: {
  														type: "number"
  													},
  													color: {
  														type: "string"
  													},
  													opacity: {
  														type: "number"
  													}
  												},
  												additionalProperties: false
  											}
  										]
  									},
  									raise: {
  										type: "boolean"
  									},
  									each: {
  										"x-wcc-type": "function"
  									}
  								},
  								additionalProperties: false
  							}
  						]
  					}
  				},
  				additionalProperties: false
  			},
  			drag: {
  				type: "object",
  				properties: {
  					enabled: {
  						type: "boolean"
  					},
  					pin: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			zoom: {
  				$ref: "#/$defs/WccZoomOptions"
  			},
  			legend: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			controls: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			facet: {
  				$ref: "#/$defs/WccNetworkFacetOptions"
  			}
  		},
  		additionalProperties: false
  	},
  	WccOrientOptions: {
  		type: "object",
  		properties: {
  			enabled: {
  				type: "boolean"
  			},
  			angle: {
  				type: "number"
  			},
  			toolbar: {
  				type: "boolean"
  			},
  			keyboard: {
  				type: "boolean"
  			},
  			pick: {
  				type: "boolean"
  			},
  			step: {
  				anyOf: [
  					{
  						"const": "auto"
  					},
  					{
  						type: "number"
  					}
  				]
  			},
  			snap: {
  				type: "boolean"
  			},
  			target: {
  				anyOf: [
  					{
  						type: "string",
  						"enum": [
  							"top",
  							"right",
  							"bottom",
  							"left"
  						]
  					},
  					{
  						type: "number"
  					}
  				]
  			}
  		},
  		additionalProperties: false
  	},
  	WccPremiumPlugin: {
  		type: "object",
  		properties: {
  			name: {
  				type: "string"
  			},
  			defaults: {
  				type: "object",
  				additionalProperties: true
  			},
  			reserve: {
  				"x-wcc-type": "function"
  			},
  			afterRender: {
  				"x-wcc-type": "function"
  			},
  			event: {
  				"x-wcc-type": "function"
  			},
  			tooltip: {
  				"x-wcc-type": "function"
  			},
  			describe: {
  				"x-wcc-type": "function"
  			},
  			destroy: {
  				"x-wcc-type": "function"
  			}
  		},
  		additionalProperties: false
  	},
  	WccQuintLane: {
  		type: "object",
  		properties: {
  			id: {
  				type: "string"
  			},
  			kind: {
  				type: "string",
  				"enum": [
  					"heatmap",
  					"events",
  					"budget",
  					"lines",
  					"stacked"
  				]
  			},
  			title: {
  				type: "string"
  			},
  			unit: {
  				type: "string"
  			},
  			aggregate: {
  				type: "string",
  				"enum": [
  					"last",
  					"sum",
  					"max",
  					"min",
  					"mean"
  				]
  			},
  			color: {
  				type: "string"
  			},
  			max: {
  				type: "number"
  			},
  			height: {
  				type: "number"
  			}
  		},
  		required: [
  			"id",
  			"kind"
  		],
  		additionalProperties: false
  	},
  	WccQuintOptions: {
  		type: "object",
  		properties: {
  			plugins: {
  				type: "array",
  				items: {
  					anyOf: [
  						{
  							type: "string"
  						},
  						{
  							$ref: "#/$defs/WccPremiumPlugin"
  						},
  						{
  							type: "array",
  							prefixItems: [
  								{
  									type: "string"
  								},
  								{
  									type: "object",
  									additionalProperties: true
  								}
  							],
  							minItems: 1,
  							maxItems: 2
  						}
  					]
  				}
  			},
  			time: {
  				type: "object",
  				properties: {
  					start: {
  						anyOf: [
  							{
  								type: "string"
  							},
  							{
  								type: "number"
  							}
  						]
  					},
  					step: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			},
  			lanes: {
  				type: "array",
  				items: {
  					$ref: "#/$defs/WccQuintLane"
  				}
  			},
  			markers: {
  				type: "array",
  				items: {
  					type: "object",
  					properties: {
  						time: {
  							anyOf: [
  								{
  									type: "string"
  								},
  								{
  									type: "number"
  								}
  							]
  						},
  						kind: {
  							type: "string",
  							"enum": [
  								"deploy",
  								"pipeline"
  							]
  						},
  						label: {
  							type: "string"
  						},
  						keys: {
  							anyOf: [
  								{
  									type: "string"
  								},
  								{
  									type: "array",
  									items: {
  										type: "string"
  									}
  								}
  							]
  						},
  						emphasis: {
  							type: "boolean"
  						}
  					},
  					required: [
  						"time"
  					],
  					additionalProperties: false
  				}
  			},
  			incidents: {
  				type: "array",
  				items: {
  					type: "object",
  					properties: {
  						from: {
  							anyOf: [
  								{
  									type: "string"
  								},
  								{
  									type: "number"
  								}
  							]
  						},
  						to: {
  							anyOf: [
  								{
  									type: "string"
  								},
  								{
  									type: "number"
  								}
  							]
  						},
  						label: {
  							type: "string"
  						},
  						keys: {
  							anyOf: [
  								{
  									type: "string"
  								},
  								{
  									type: "array",
  									items: {
  										type: "string"
  									}
  								}
  							]
  						}
  					},
  					required: [
  						"from"
  					],
  					additionalProperties: false
  				}
  			},
  			utc: {
  				type: "boolean"
  			},
  			errorRate: {
  				type: "object",
  				properties: {
  					warn: {
  						type: "number"
  					},
  					critical: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			},
  			lens: {
  				type: "object",
  				properties: {
  					enabled: {
  						type: "boolean"
  					},
  					factor: {
  						type: "number"
  					},
  					from: {
  						anyOf: [
  							{
  								type: "string"
  							},
  							{
  								type: "number"
  							}
  						]
  					},
  					to: {
  						anyOf: [
  							{
  								type: "string"
  							},
  							{
  								type: "number"
  							}
  						]
  					},
  					pad: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			},
  			focus: {
  				type: "object",
  				properties: {
  					enabled: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			crosshair: {
  				type: "boolean"
  			},
  			legend: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			}
  		},
  		additionalProperties: false
  	},
  	WccSankeyOptions: {
  		type: "object",
  		properties: {
  			plugins: {
  				type: "array",
  				items: {
  					anyOf: [
  						{
  							type: "string"
  						},
  						{
  							$ref: "#/$defs/WccPremiumPlugin"
  						},
  						{
  							type: "array",
  							prefixItems: [
  								{
  									type: "string"
  								},
  								{
  									type: "object",
  									additionalProperties: true
  								}
  							],
  							minItems: 1,
  							maxItems: 2
  						}
  					]
  				}
  			},
  			orientation: {
  				type: "string",
  				"enum": [
  					"horizontal",
  					"vertical"
  				]
  			},
  			nodeWidth: {
  				type: "number"
  			},
  			nodePadding: {
  				type: "number"
  			},
  			nodeAlign: {
  				type: "string",
  				"enum": [
  					"right",
  					"left",
  					"center",
  					"justify"
  				]
  			},
  			nodeBorderRadius: {
  				type: "number"
  			},
  			minNodeHeight: {
  				type: "number"
  			},
  			iterations: {
  				type: "number"
  			},
  			sort: {
  				type: "string",
  				"enum": [
  					"auto",
  					"input"
  				]
  			},
  			cycles: {
  				type: "string",
  				"enum": [
  					"error",
  					"break",
  					"circular"
  				]
  			},
  			nodes: {
  				type: "array",
  				items: {
  					type: "object",
  					properties: {
  						id: {
  							anyOf: [
  								{
  									type: "string"
  								},
  								{
  									type: "number"
  								}
  							]
  						},
  						name: {
  							type: "string"
  						},
  						color: {
  							type: "string"
  						},
  						column: {
  							type: "number"
  						}
  					},
  					required: [
  						"id"
  					],
  					additionalProperties: false
  				}
  			},
  			draggable: {
  				type: "boolean"
  			},
  			rtl: {
  				anyOf: [
  					{
  						"const": "auto"
  					},
  					{
  						type: "boolean"
  					}
  				]
  			},
  			link: {
  				type: "object",
  				properties: {
  					colorMode: {
  						type: "string",
  						"enum": [
  							"source",
  							"target",
  							"gradient"
  						]
  					},
  					color: {
  						type: "string"
  					},
  					opacity: {
  						type: "number"
  					},
  					curvature: {
  						type: "number"
  					},
  					minWidth: {
  						type: "number"
  					},
  					circularWidth: {
  						type: "number"
  					},
  					particles: {
  						type: "object",
  						properties: {
  							enabled: {
  								type: "boolean"
  							},
  							density: {
  								type: "number"
  							},
  							speed: {
  								type: "number"
  							},
  							size: {
  								type: "number"
  							},
  							color: {
  								type: "string"
  							}
  						},
  						additionalProperties: false
  					}
  				},
  				additionalProperties: false
  			},
  			alluvial: {
  				type: "object",
  				properties: {
  					enabled: {
  						type: "boolean"
  					},
  					stages: {
  						type: "array",
  						items: {
  							type: "string"
  						}
  					},
  					showStageLabels: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			playback: {
  				type: "object",
  				properties: {
  					frames: {
  						type: "array",
  						items: {
  							type: "object",
  							properties: {
  								label: {
  									type: "string"
  								},
  								data: {
  									type: "array",
  									items: {
  									}
  								}
  							},
  							required: [
  								"data"
  							],
  							additionalProperties: false
  						}
  					},
  					interval: {
  						type: "number"
  					},
  					autoplay: {
  						type: "boolean"
  					},
  					loop: {
  						type: "boolean"
  					},
  					controls: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			labels: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					},
  					position: {
  						type: "string",
  						"enum": [
  							"auto",
  							"outside"
  						]
  					},
  					showValue: {
  						type: "boolean"
  					},
  					fontSize: {
  						anyOf: [
  							{
  								type: "string"
  							},
  							{
  								type: "number"
  							}
  						]
  					},
  					fontWeight: {
  						anyOf: [
  							{
  								type: "string"
  							},
  							{
  								type: "number"
  							}
  						]
  					},
  					formatter: {
  						"x-wcc-type": "function"
  					},
  					valueFormatter: {
  						"x-wcc-type": "function"
  					}
  				},
  				additionalProperties: false
  			},
  			drilldown: {
  				type: "object",
  				properties: {
  					enabled: {
  						type: "boolean"
  					},
  					breadcrumb: {
  						type: "boolean"
  					},
  					rootLabel: {
  						type: "string"
  					},
  					load: {
  						"x-wcc-type": "function"
  					},
  					drillable: {
  						anyOf: [
  							{
  								type: "array",
  								items: {
  									anyOf: [
  										{
  											type: "string"
  										},
  										{
  											type: "number"
  										}
  									]
  								}
  							},
  							{
  								"x-wcc-type": "function"
  							}
  						]
  					},
  					nodes: {
  						type: "object",
  						additionalProperties: true
  					}
  				},
  				additionalProperties: false
  			}
  		},
  		additionalProperties: false
  	},
  	WccScheduleOptions: {
  		type: "object",
  		properties: {
  			plugins: {
  				type: "array",
  				items: {
  					anyOf: [
  						{
  							type: "string"
  						},
  						{
  							$ref: "#/$defs/WccPremiumPlugin"
  						},
  						{
  							type: "array",
  							prefixItems: [
  								{
  									type: "string"
  								},
  								{
  									type: "object",
  									additionalProperties: true
  								}
  							],
  							minItems: 1,
  							maxItems: 2
  						}
  					]
  				}
  			},
  			date: {
  				type: "string"
  			},
  			range: {
  				type: "string",
  				"enum": [
  					"day",
  					"week"
  				]
  			},
  			timeZone: {
  				type: "string"
  			},
  			now: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "number"
  					}
  				]
  			},
  			resources: {
  				type: "array",
  				items: {
  					type: "object",
  					properties: {
  						id: {
  							type: "string"
  						},
  						name: {
  							type: "string"
  						},
  						kind: {
  							type: "string",
  							"enum": [
  								"device",
  								"room",
  								"staff"
  							]
  						}
  					},
  					required: [
  						"id"
  					],
  					additionalProperties: false
  				}
  			},
  			people: {
  				type: "array",
  				items: {
  					type: "object",
  					properties: {
  						id: {
  							type: "string"
  						},
  						name: {
  							type: "string"
  						},
  						role: {
  							type: "string"
  						},
  						color: {
  							type: "string"
  						},
  						dash: {
  							type: "string"
  						}
  					},
  					required: [
  						"id"
  					],
  					additionalProperties: false
  				}
  			},
  			items: {
  				type: "array",
  				items: {
  					type: "object",
  					properties: {
  						id: {
  							type: "string"
  						},
  						resource: {
  							type: "string"
  						},
  						start: {
  							anyOf: [
  								{
  									type: "string"
  								},
  								{
  									type: "number"
  								}
  							]
  						},
  						end: {
  							anyOf: [
  								{
  									type: "string"
  								},
  								{
  									type: "number"
  								}
  							]
  						},
  						people: {
  							type: "array",
  							items: {
  								type: "string"
  							}
  						},
  						patient: {
  							type: "string"
  						},
  						label: {
  							type: "string"
  						},
  						status: {
  							type: "string",
  							"enum": [
  								"confirmed",
  								"tentative",
  								"arrived",
  								"done",
  								"cancelled",
  								"no-show"
  							]
  						}
  					},
  					required: [
  						"id",
  						"resource",
  						"start",
  						"end"
  					],
  					additionalProperties: false
  				}
  			},
  			hours: {
  				type: "object",
  				properties: {
  					open: {
  						type: "string"
  					},
  					close: {
  						type: "string"
  					},
  					days: {
  						type: "array",
  						items: {
  							type: "number"
  						}
  					},
  					breaks: {
  						type: "array",
  						items: {
  							type: "array",
  							prefixItems: [
  								{
  									type: "string"
  								},
  								{
  									type: "string"
  								}
  							],
  							minItems: 2,
  							maxItems: 2
  						}
  					}
  				},
  				additionalProperties: false
  			},
  			rules: {
  				type: "object",
  				properties: {
  					minTransfer: {
  						anyOf: [
  							{
  								type: "string"
  							},
  							{
  								type: "number"
  							}
  						]
  					}
  				},
  				additionalProperties: false
  			},
  			view: {
  				type: "string",
  				"enum": [
  					"auto",
  					"lanes",
  					"board"
  				]
  			},
  			lanes: {
  				type: "string",
  				"enum": [
  					"resources",
  					"people"
  				]
  			},
  			routes: {
  				type: "boolean"
  			},
  			snap: {
  				type: "number"
  			},
  			editable: {
  				type: "boolean"
  			},
  			redact: {
  				type: "boolean"
  			},
  			filter: {
  				type: "object",
  				properties: {
  					people: {
  						anyOf: [
  							{
  								type: "string"
  							},
  							{
  								type: "array",
  								items: {
  									type: "string"
  								}
  							}
  						]
  					}
  				},
  				additionalProperties: false
  			},
  			legend: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			conflicts: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					},
  					list: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			}
  		},
  		additionalProperties: false
  	},
  	WccSeries: {
  		type: "object",
  		properties: {
  			name: {
  				type: "string"
  			},
  			type: {
  				type: "string"
  			},
  			color: {
  				type: "string"
  			},
  			group: {
  				type: "string"
  			},
  			hidden: {
  				type: "boolean"
  			},
  			data: {
  				anyOf: [
  					{
  						type: "array",
  						items: {
  							anyOf: [
  								{
  									type: "null"
  								},
  								{
  									type: "number"
  								}
  							]
  						}
  					},
  					{
  						$ref: "#/$defs/WccDatum"
  					},
  					{
  						type: "array",
  						items: {
  							$ref: "#/$defs/WccDatum"
  						}
  					},
  					{
  						type: "array",
  						items: {
  							type: "array",
  							prefixItems: [
  								{
  								},
  								{
  								},
  								{
  									anyOf: [
  										{
  											type: "null"
  										},
  										{
  											type: "number"
  										}
  									]
  								}
  							],
  							minItems: 2,
  							maxItems: 3
  						}
  					},
  					{
  						type: "array",
  						items: {
  							type: "array",
  							items: {
  							}
  						}
  					},
  					{
  						type: "object",
  						properties: {
  							nodes: {
  								type: "array",
  								items: {
  									$ref: "#/$defs/WccDatum"
  								}
  							},
  							edges: {
  								type: "array",
  								items: {
  									$ref: "#/$defs/WccDatum"
  								}
  							},
  							links: {
  								type: "array",
  								items: {
  									$ref: "#/$defs/WccDatum"
  								}
  							}
  						},
  						additionalProperties: false
  					}
  				]
  			},
  			nodes: {
  				type: "array",
  				items: {
  					$ref: "#/$defs/WccDatum"
  				}
  			},
  			edges: {
  				type: "array",
  				items: {
  					anyOf: [
  						{
  							$ref: "#/$defs/WccDatum"
  						},
  						{
  							type: "array",
  							prefixItems: [
  								{
  									anyOf: [
  										{
  											type: "string"
  										},
  										{
  											type: "number"
  										}
  									]
  								},
  								{
  									anyOf: [
  										{
  											type: "string"
  										},
  										{
  											type: "number"
  										}
  									]
  								},
  								{
  									type: "number"
  								}
  							],
  							minItems: 2,
  							maxItems: 3
  						}
  					]
  				}
  			},
  			links: {
  				type: "array",
  				items: {
  					anyOf: [
  						{
  							$ref: "#/$defs/WccDatum"
  						},
  						{
  							type: "array",
  							prefixItems: [
  								{
  									anyOf: [
  										{
  											type: "string"
  										},
  										{
  											type: "number"
  										}
  									]
  								},
  								{
  									anyOf: [
  										{
  											type: "string"
  										},
  										{
  											type: "number"
  										}
  									]
  								},
  								{
  									type: "number"
  								}
  							],
  							minItems: 2,
  							maxItems: 3
  						}
  					]
  				}
  			},
  			paths: {
  				type: "array",
  				items: {
  					type: "object",
  					properties: {
  						name: {
  							type: "string"
  						},
  						nodes: {
  							type: "array",
  							items: {
  								anyOf: [
  									{
  										type: "string"
  									},
  									{
  										type: "number"
  									}
  								]
  							}
  						},
  						severity: {
  						},
  						color: {
  							type: "string"
  						}
  					},
  					required: [
  						"nodes"
  					],
  					additionalProperties: false
  				}
  			},
  			highlightData: {
  				type: "array",
  				items: {
  					anyOf: [
  						{
  							type: "null"
  						},
  						{
  							type: "number"
  						}
  					]
  				}
  			},
  			marker: {
  				type: "string"
  			},
  			size: {
  				type: "number"
  			},
  			labels: {
  				type: "boolean"
  			},
  			lane: {
  				type: "string"
  			},
  			keys: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "array",
  						items: {
  							type: "string"
  						}
  					}
  				]
  			},
  			errorRate: {
  				type: "array",
  				items: {
  					anyOf: [
  						{
  							type: "null"
  						},
  						{
  							type: "number"
  						}
  					]
  				}
  			},
  			typical: {
  				type: "array",
  				items: {
  					anyOf: [
  						{
  							type: "null"
  						},
  						{
  							type: "number"
  						}
  					]
  				}
  			},
  			availability: {
  				type: "number"
  			},
  			p95: {
  				type: "number"
  			}
  		},
  		additionalProperties: true
  	},
  	WccStockDrawing: {
  		type: "object",
  		properties: {
  			id: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "number"
  					}
  				]
  			},
  			type: {
  				type: "string"
  			},
  			points: {
  				type: "array",
  				items: {
  					anyOf: [
  						{
  							type: "object",
  							properties: {
  								t: {
  									anyOf: [
  										{
  											type: "string"
  										},
  										{
  											type: "number"
  										},
  										{
  											"x-wcc-type": "Date"
  										}
  									]
  								},
  								y: {
  									type: "number"
  								}
  							},
  							required: [
  								"t",
  								"y"
  							],
  							additionalProperties: false
  						},
  						{
  							type: "array",
  							prefixItems: [
  								{
  									anyOf: [
  										{
  											type: "string"
  										},
  										{
  											type: "number"
  										},
  										{
  											"x-wcc-type": "Date"
  										}
  									]
  								},
  								{
  									type: "number"
  								}
  							],
  							minItems: 2,
  							maxItems: 2
  						}
  					]
  				}
  			},
  			color: {
  				type: "string"
  			},
  			label: {
  				type: "string"
  			},
  			width: {
  				type: "number"
  			},
  			extend: {
  				anyOf: [
  					{
  						type: "string",
  						"enum": [
  							"right",
  							"left",
  							"both"
  						]
  					},
  					{
  						type: "boolean"
  					}
  				]
  			},
  			dash: {
  				anyOf: [
  					{
  						type: "boolean"
  					},
  					{
  						type: "string"
  					}
  				]
  			},
  			fill: {
  				type: "string"
  			},
  			levels: {
  				type: "array",
  				items: {
  					type: "number"
  				}
  			},
  			locked: {
  				type: "boolean"
  			},
  			labelPosition: {
  				type: "string",
  				"enum": [
  					"below",
  					"above"
  				]
  			}
  		},
  		required: [
  			"type",
  			"points"
  		],
  		additionalProperties: false
  	},
  	WccStockOptions: {
  		type: "object",
  		properties: {
  			plugins: {
  				type: "array",
  				items: {
  					anyOf: [
  						{
  							type: "string"
  						},
  						{
  							$ref: "#/$defs/WccPremiumPlugin"
  						},
  						{
  							type: "array",
  							prefixItems: [
  								{
  									type: "string"
  								},
  								{
  									type: "object",
  									additionalProperties: true
  								}
  							],
  							minItems: 1,
  							maxItems: 2
  						}
  					]
  				}
  			},
  			enabled: {
  				type: "boolean"
  			},
  			style: {
  				type: "string",
  				"enum": [
  					"line",
  					"area",
  					"candlestick",
  					"ohlc"
  				]
  			},
  			colors: {
  				type: "object",
  				properties: {
  					up: {
  						type: "string"
  					},
  					down: {
  						type: "string"
  					}
  				},
  				additionalProperties: false
  			},
  			volume: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					},
  					height: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			},
  			overlays: {
  				type: "array",
  				items: {
  					type: "object",
  					properties: {
  						type: {
  							type: "string",
  							"enum": [
  								"sma",
  								"ema",
  								"bollinger"
  							]
  						},
  						period: {
  							type: "number"
  						},
  						k: {
  							type: "number"
  						},
  						color: {
  							type: "string"
  						}
  					},
  					required: [
  						"type"
  					],
  					additionalProperties: false
  				}
  			},
  			indicators: {
  				type: "array",
  				items: {
  					anyOf: [
  						{
  							type: "object",
  							properties: {
  								type: {
  									"const": "rsi"
  								},
  								period: {
  									type: "number"
  								}
  							},
  							required: [
  								"type"
  							],
  							additionalProperties: false
  						},
  						{
  							type: "object",
  							properties: {
  								type: {
  									"const": "macd"
  								},
  								fast: {
  									type: "number"
  								},
  								slow: {
  									type: "number"
  								},
  								signal: {
  									type: "number"
  								}
  							},
  							required: [
  								"type"
  							],
  							additionalProperties: false
  						}
  					]
  				}
  			},
  			rangeSelector: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					},
  					buttons: {
  						type: "array",
  						items: {
  							type: "object",
  							properties: {
  								label: {
  									type: "string"
  								},
  								months: {
  									type: "number"
  								},
  								days: {
  									type: "number"
  								},
  								ytd: {
  									type: "boolean"
  								},
  								all: {
  									type: "boolean"
  								}
  							},
  							required: [
  								"label"
  							],
  							additionalProperties: false
  						}
  					},
  					selected: {
  						type: "string"
  					}
  				},
  				additionalProperties: false
  			},
  			navigator: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					},
  					height: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			},
  			crosshair: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			readout: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			realtime: {
  				type: "object",
  				properties: {
  					follow: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			zoom: {
  				type: "object",
  				properties: {
  					enabled: {
  						type: "boolean"
  					},
  					wheel: {
  						anyOf: [
  							{
  								type: "boolean"
  							},
  							{
  								type: "string"
  							}
  						]
  					},
  					minCandles: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			},
  			yaxis: {
  				type: "object",
  				properties: {
  					decimals: {
  						type: "number"
  					},
  					formatter: {
  						"x-wcc-type": "function"
  					},
  					type: {
  						type: "string",
  						"enum": [
  							"linear",
  							"log",
  							"percent"
  						]
  					}
  				},
  				additionalProperties: false
  			},
  			timeframe: {
  				type: "string",
  				"enum": [
  					"day",
  					"week",
  					"month"
  				]
  			},
  			priceLines: {
  				type: "array",
  				items: {
  					type: "object",
  					properties: {
  						y: {
  							type: "number"
  						},
  						label: {
  							type: "string"
  						},
  						color: {
  							type: "string"
  						},
  						dash: {
  							type: "boolean"
  						},
  						width: {
  							type: "number"
  						}
  					},
  					required: [
  						"y"
  					],
  					additionalProperties: false
  				}
  			},
  			markers: {
  				type: "array",
  				items: {
  					type: "object",
  					properties: {
  						x: {
  							anyOf: [
  								{
  									type: "string"
  								},
  								{
  									type: "number"
  								},
  								{
  									"x-wcc-type": "Date"
  								}
  							]
  						},
  						label: {
  							type: "string"
  						},
  						text: {
  							type: "string"
  						},
  						color: {
  							type: "string"
  						},
  						position: {
  							type: "string",
  							"enum": [
  								"below",
  								"above"
  							]
  						}
  					},
  					required: [
  						"x"
  					],
  					additionalProperties: false
  				}
  			},
  			drawings: {
  				type: "object",
  				properties: {
  					enabled: {
  						type: "boolean"
  					},
  					tools: {
  						type: "array",
  						items: {
  							type: "string",
  							"enum": [
  								"rect",
  								"trendline",
  								"ray",
  								"fib"
  							]
  						}
  					},
  					items: {
  						type: "array",
  						items: {
  							$ref: "#/$defs/WccStockDrawing"
  						}
  					},
  					toolbar: {
  						type: "boolean"
  					},
  					magnet: {
  						type: "boolean"
  					},
  					keepTool: {
  						type: "boolean"
  					},
  					storageKey: {
  						type: "string"
  					},
  					palette: {
  						type: "string",
  						"enum": [
  							"muted",
  							"vivid"
  						]
  					},
  					colors: {
  						type: "object",
  						properties: {
  							trendline: {
  								type: "string"
  							},
  							ray: {
  								type: "string"
  							},
  							fib: {
  								type: "string"
  							},
  							rect: {
  								type: "string"
  							}
  						},
  						additionalProperties: false
  					}
  				},
  				additionalProperties: false
  			}
  		},
  		additionalProperties: false
  	},
  	WccTextStyle: {
  		type: "object",
  		properties: {
  			fontSize: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "number"
  					}
  				]
  			},
  			fontFamily: {
  				type: "string"
  			},
  			fontWeight: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "number"
  					}
  				]
  			},
  			colors: {
  				type: "array",
  				items: {
  					type: "string"
  				}
  			}
  		},
  		additionalProperties: false
  	},
  	WccThemeTokens: {
  		type: "object",
  		properties: {
  			fontFamily: {
  				type: "string"
  			},
  			fontSize: {
  				type: "string"
  			},
  			text: {
  				type: "string"
  			},
  			textMuted: {
  				type: "string"
  			},
  			surface: {
  				type: "string"
  			},
  			background: {
  				type: "string"
  			},
  			grid: {
  				type: "string"
  			},
  			axis: {
  				type: "string"
  			},
  			track: {
  				type: "string"
  			},
  			accent: {
  				type: "string"
  			},
  			focusRing: {
  				type: "string"
  			},
  			tooltipBg: {
  				type: "string"
  			},
  			tooltipText: {
  				type: "string"
  			},
  			tooltipBorder: {
  				type: "string"
  			},
  			tooltipShadow: {
  				type: "string"
  			},
  			radius: {
  				type: "string"
  			},
  			radiusSm: {
  				type: "string"
  			},
  			barRadius: {
  				type: "string"
  			},
  			lineWidth: {
  				type: "string"
  			},
  			gridDash: {
  				type: "string"
  			},
  			motionDuration: {
  				type: "string"
  			},
  			motionEasing: {
  				type: "string"
  			},
  			palette: {
  				type: "array",
  				items: {
  					type: "string"
  				}
  			}
  		},
  		additionalProperties: false
  	},
  	WccTreeOptions: {
  		type: "object",
  		properties: {
  			plugins: {
  				type: "array",
  				items: {
  					anyOf: [
  						{
  							type: "string"
  						},
  						{
  							$ref: "#/$defs/WccPremiumPlugin"
  						},
  						{
  							type: "array",
  							prefixItems: [
  								{
  									type: "string"
  								},
  								{
  									type: "object",
  									additionalProperties: true
  								}
  							],
  							minItems: 1,
  							maxItems: 2
  						}
  					]
  				}
  			},
  			layout: {
  				type: "string",
  				"enum": [
  					"tidy",
  					"dendrogram"
  				]
  			},
  			orientation: {
  				type: "string",
  				"enum": [
  					"horizontal",
  					"vertical",
  					"radial",
  					"top-to-bottom",
  					"bottom-to-top",
  					"left-to-right",
  					"right-to-left"
  				]
  			},
  			direction: {
  				type: "string",
  				"enum": [
  					"reverse",
  					"forward"
  				]
  			},
  			rtl: {
  				anyOf: [
  					{
  						"const": "auto"
  					},
  					{
  						type: "boolean"
  					}
  				]
  			},
  			node: {
  				type: "object",
  				properties: {
  					template: {
  						type: "string",
  						"enum": [
  							"auto",
  							"card",
  							"compact",
  							"dot"
  						]
  					},
  					width: {
  						type: "number"
  					},
  					height: {
  						type: "number"
  					},
  					radius: {
  						type: "number"
  					},
  					avatar: {
  						type: "boolean"
  					},
  					dotSize: {
  						type: "number"
  					},
  					stackLeaves: {
  						anyOf: [
  							{
  								"const": "auto"
  							},
  							{
  								type: "boolean"
  							}
  						]
  					},
  					formatter: {
  						"x-wcc-type": "function"
  					},
  					size: {
  						"x-wcc-type": "function"
  					},
  					autoHeight: {
  						type: "boolean"
  					},
  					maxLines: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			},
  			wrappers: {
  				type: "array",
  				items: {
  					type: "object",
  					properties: {
  						id: {
  							anyOf: [
  								{
  									type: "string"
  								},
  								{
  									type: "number"
  								}
  							]
  						},
  						label: {
  							type: "string"
  						},
  						color: {
  							type: "string"
  						},
  						dashed: {
  							type: "boolean"
  						}
  					},
  					required: [
  						"id"
  					],
  					additionalProperties: false
  				}
  			},
  			spacing: {
  				type: "object",
  				properties: {
  					sibling: {
  						type: "number"
  					},
  					level: {
  						type: "number"
  					},
  					dot: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			},
  			radial: {
  				type: "object",
  				properties: {
  					startAngle: {
  						type: "number"
  					},
  					stretch: {
  						anyOf: [
  							{
  								"const": "auto"
  							},
  							{
  								type: "boolean"
  							}
  						]
  					}
  				},
  				additionalProperties: false
  			},
  			links: {
  				type: "object",
  				properties: {
  					style: {
  						type: "string",
  						"enum": [
  							"auto",
  							"elbow",
  							"curve",
  							"straight"
  						]
  					},
  					color: {
  						type: "string"
  					},
  					width: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			},
  			colorBy: {
  				type: "string",
  				"enum": [
  					"none",
  					"branch",
  					"depth"
  				]
  			},
  			collapse: {
  				type: "object",
  				properties: {
  					enabled: {
  						type: "boolean"
  					},
  					initialDepth: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			},
  			zoom: {
  				type: "object",
  				properties: {
  					enabled: {
  						type: "boolean"
  					},
  					wheel: {
  						anyOf: [
  							{
  								type: "boolean"
  							},
  							{
  								type: "string"
  							}
  						]
  					},
  					min: {
  						type: "number"
  					},
  					max: {
  						type: "number"
  					},
  					fitMin: {
  						type: "number"
  					},
  					fitMax: {
  						type: "number"
  					},
  					readableFont: {
  						type: "number"
  					},
  					overviewFont: {
  						anyOf: [
  							{
  								"const": false
  							},
  							{
  								type: "number"
  							}
  						]
  					}
  				},
  				additionalProperties: false
  			},
  			controls: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: false
  			},
  			lod: {
  				type: "object",
  				properties: {
  					threshold: {
  						type: "number"
  					}
  				},
  				additionalProperties: false
  			},
  			lazy: {
  				type: "object",
  				properties: {
  					load: {
  						"x-wcc-type": "function"
  					},
  					loadingText: {
  						type: "string"
  					},
  					errorText: {
  						type: "string"
  					}
  				},
  				additionalProperties: false
  			}
  		},
  		additionalProperties: false
  	},
  	WccTreemapLevel: {
  		type: "object",
  		properties: {
  			header: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					},
  					showValue: {
  						type: "boolean"
  					},
  					align: {
  						type: "string",
  						"enum": [
  							"right",
  							"left",
  							"center"
  						]
  					},
  					offsetX: {
  						type: "number"
  					},
  					offsetY: {
  						type: "number"
  					},
  					formatter: {
  						"x-wcc-type": "function"
  					},
  					style: {
  						type: "object",
  						additionalProperties: true
  					}
  				},
  				additionalProperties: true
  			},
  			borderColor: {
  				type: "string"
  			},
  			borderWidth: {
  				type: "number"
  			},
  			borderRadius: {
  				type: "number"
  			},
  			fillOpacity: {
  				type: "number"
  			}
  		},
  		additionalProperties: true
  	},
  	WccTrellisOptions: {
  		type: "object",
  		properties: {
  			by: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						"x-wcc-type": "function"
  					}
  				]
  			},
  			row: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						"x-wcc-type": "function"
  					}
  				]
  			},
  			panel: {
  				"x-wcc-type": "function"
  			},
  			column: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						"x-wcc-type": "function"
  					}
  				]
  			},
  			emptyPanels: {
  				type: "string",
  				"enum": [
  					"hide",
  					"placeholder",
  					"skip"
  				]
  			},
  			data: {
  				type: "array",
  				items: {
  				}
  			},
  			x: {
  				type: "string"
  			},
  			y: {
  				type: "string"
  			},
  			seriesBy: {
  				type: "string"
  			},
  			columns: {
  				anyOf: [
  					{
  						"const": "auto"
  					},
  					{
  						type: "number"
  					}
  				]
  			},
  			minPanelWidth: {
  				type: "number"
  			},
  			gap: {
  				type: "number"
  			},
  			aspectRatio: {
  				type: "number"
  			},
  			panelHeight: {
  				type: "number"
  			},
  			minPanelHeight: {
  				type: "number"
  			},
  			order: {
  				anyOf: [
  					{
  						type: "string",
  						"enum": [
  							"first-seen",
  							"asc",
  							"desc"
  						]
  					},
  					{
  						type: "array",
  						items: {
  						}
  					},
  					{
  						"x-wcc-type": "function"
  					}
  				]
  			},
  			limit: {
  				type: "number"
  			},
  			virtualize: {
  				anyOf: [
  					{
  						"const": "auto"
  					},
  					{
  						type: "boolean"
  					}
  				]
  			},
  			scales: {
  				type: "object",
  				properties: {
  					x: {
  						type: "string"
  					},
  					y: {
  						type: "string"
  					},
  					color: {
  						type: "string"
  					},
  					size: {
  						type: "string"
  					}
  				},
  				additionalProperties: false
  			},
  			header: {
  				type: "object",
  				properties: {
  					show: {
  						type: "boolean"
  					},
  					formatter: {
  						"x-wcc-type": "function"
  					},
  					style: {
  						type: "object",
  						properties: {
  							fontSize: {
  								anyOf: [
  									{
  										type: "string"
  									},
  									{
  										type: "number"
  									}
  								]
  							},
  							fontWeight: {
  								anyOf: [
  									{
  										type: "string"
  									},
  									{
  										type: "number"
  									}
  								]
  							},
  							color: {
  								type: "string"
  							}
  						},
  						additionalProperties: false
  					}
  				},
  				additionalProperties: false
  			},
  			axes: {
  				type: "object",
  				properties: {
  					labels: {
  						type: "string",
  						"enum": [
  							"none",
  							"all",
  							"edges"
  						]
  					}
  				},
  				additionalProperties: false
  			},
  			legend: {
  				anyOf: [
  					{
  						type: "boolean"
  					},
  					{
  						type: "string"
  					}
  				]
  			},
  			toolbar: {
  				anyOf: [
  					{
  						type: "boolean"
  					},
  					{
  						type: "string"
  					}
  				]
  			},
  			wcc: {
  				type: "object",
  				properties: {
  					headerValue: {
  						anyOf: [
  							{
  								type: "string",
  								"enum": [
  									"last",
  									"max",
  									"min",
  									"total"
  								]
  							},
  							{
  								"x-wcc-type": "function"
  							}
  						]
  					},
  					sort: {
  						anyOf: [
  							{
  								type: "string",
  								"enum": [
  									"asc",
  									"desc"
  								]
  							},
  							{
  								type: "object",
  								properties: {
  									by: {
  									},
  									dir: {
  										type: "string",
  										"enum": [
  											"asc",
  											"desc"
  										]
  									}
  								},
  								required: [
  									"by"
  								],
  								additionalProperties: false
  							}
  						]
  					},
  					sparkline: {
  						type: "boolean"
  					},
  					typeMix: {
  						type: "boolean"
  					},
  					highlight: {
  						type: "boolean"
  					}
  				},
  				additionalProperties: true
  			}
  		},
  		additionalProperties: true
  	},
  	WccUnitShape: {
  		type: "object",
  		properties: {
  			isUnitShape: {
  				"const": true
  			},
  			name: {
  				type: "string"
  			},
  			kind: {
  				type: "string"
  			},
  			category: {
  				type: "string"
  			},
  			minUnits: {
  				type: "number"
  			},
  			order: {
  			},
  			source: {
  			},
  			rings: {
  				type: "array",
  				items: {
  				}
  			},
  			shape: {
  				type: "object",
  				additionalProperties: true
  			},
  			fill: {
  				"x-wcc-type": "function"
  			},
  			"with": {
  				"x-wcc-type": "function"
  			},
  			outlined: {
  				"x-wcc-type": "function"
  			}
  		},
  		required: [
  			"isUnitShape"
  		],
  		additionalProperties: true
  	},
  	WccVitalsClockOptions: {
  		type: "object",
  		properties: {
  			plugins: {
  				type: "array",
  				items: {
  					anyOf: [
  						{
  							type: "string"
  						},
  						{
  							$ref: "#/$defs/WccPremiumPlugin"
  						},
  						{
  							type: "array",
  							prefixItems: [
  								{
  									type: "string"
  								},
  								{
  									type: "object",
  									additionalProperties: true
  								}
  							],
  							minItems: 1,
  							maxItems: 2
  						}
  					]
  				}
  			},
  			time: {
  				type: "object",
  				properties: {
  					start: {
  						anyOf: [
  							{
  								type: "string"
  							},
  							{
  								type: "number"
  							}
  						]
  					},
  					span: {
  						type: "string"
  					},
  					step: {
  						type: "string"
  					}
  				},
  				additionalProperties: false
  			},
  			now: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "number"
  					}
  				]
  			},
  			timeZone: {
  				type: "string"
  			},
  			params: {
  				type: "array",
  				items: {
  					$ref: "#/$defs/WccVitalsParam"
  				}
  			},
  			events: {
  				type: "array",
  				items: {
  					type: "object",
  					properties: {
  						at: {
  							anyOf: [
  								{
  									type: "string"
  								},
  								{
  									type: "number"
  								}
  							]
  						},
  						kind: {
  							type: "string"
  						},
  						label: {
  							type: "string"
  						}
  					},
  					required: [
  						"at"
  					],
  					additionalProperties: false
  				}
  			},
  			alarms: {
  				type: "array",
  				items: {
  					type: "object",
  					properties: {
  						from: {
  							anyOf: [
  								{
  									type: "string"
  								},
  								{
  									type: "number"
  								}
  							]
  						},
  						to: {
  							anyOf: [
  								{
  									type: "string"
  								},
  								{
  									type: "number"
  								}
  							]
  						},
  						label: {
  							type: "string"
  						}
  					},
  					required: [
  						"from"
  					],
  					additionalProperties: false
  				}
  			},
  			core: {
  				$ref: "#/$defs/RadialColumnLayer"
  			},
  			demo: {
  				anyOf: [
  					{
  						type: "boolean"
  					},
  					{
  						type: "string"
  					}
  				]
  			},
  			radialColumn: {
  				$ref: "#/$defs/RadialColumnOptions"
  			}
  		},
  		additionalProperties: false
  	},
  	WccVitalsParam: {
  		type: "object",
  		properties: {
  			id: {
  				type: "string"
  			},
  			title: {
  				type: "string"
  			},
  			short: {
  				type: "string"
  			},
  			unit: {
  				type: "string"
  			},
  			kind: {
  				type: "string",
  				"enum": [
  					"range",
  					"columns",
  					"trace",
  					"cells"
  				]
  			},
  			aggregate: {
  				type: "string",
  				"enum": [
  					"last",
  					"max",
  					"min",
  					"mean",
  					"median"
  				]
  			},
  			bands: {
  				type: "array",
  				items: {
  					$ref: "#/$defs/RadialVitalsBand"
  				}
  			},
  			data: {
  				type: "array",
  				items: {
  					anyOf: [
  						{
  							type: "array",
  							prefixItems: [
  								{
  									anyOf: [
  										{
  											type: "string"
  										},
  										{
  											type: "number"
  										}
  									]
  								},
  								{
  									type: "number"
  								}
  							],
  							minItems: 2,
  							maxItems: 2
  						},
  						{
  							type: "array",
  							prefixItems: [
  								{
  									anyOf: [
  										{
  											type: "string"
  										},
  										{
  											type: "number"
  										}
  									]
  								},
  								{
  									type: "number"
  								},
  								{
  									type: "number"
  								}
  							],
  							minItems: 3,
  							maxItems: 3
  						}
  					]
  				}
  			},
  			staleAfter: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "number"
  					}
  				]
  			},
  			decimals: {
  				type: "number"
  			},
  			color: {
  				type: "string"
  			},
  			bandsLow: {
  				type: "array",
  				items: {
  					$ref: "#/$defs/RadialVitalsBand"
  				}
  			},
  			gapAfter: {
  				type: "number"
  			},
  			min: {
  				type: "number"
  			},
  			max: {
  				type: "number"
  			}
  		},
  		required: [
  			"id",
  			"kind",
  			"data"
  		],
  		additionalProperties: false
  	},
  	WccZoomOptions: {
  		type: "object",
  		properties: {
  			enabled: {
  				type: "boolean"
  			},
  			wheel: {
  				anyOf: [
  					{
  						type: "boolean"
  					},
  					{
  						type: "string"
  					}
  				]
  			},
  			min: {
  				type: "number"
  			},
  			max: {
  				type: "number"
  			}
  		},
  		additionalProperties: false
  	},
  	XAxisAnnotations: {
  		type: "object",
  		properties: {
  			scope: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "number"
  					},
  					{
  						type: "array",
  						items: {
  							anyOf: [
  								{
  									type: "string"
  								},
  								{
  									type: "number"
  								}
  							]
  						}
  					},
  					{
  						"x-wcc-type": "function"
  					}
  				]
  			},
  			wcc: {
  				type: "object",
  				properties: {
  					tooltip: {
  						anyOf: [
  							{
  								type: "string"
  							},
  							{
  								"x-wcc-type": "function"
  							}
  						]
  					}
  				},
  				additionalProperties: false
  			},
  			id: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "number"
  					}
  				]
  			},
  			x: {
  				anyOf: [
  					{
  						type: "null"
  					},
  					{
  						type: "string"
  					},
  					{
  						type: "number"
  					}
  				]
  			},
  			x2: {
  				anyOf: [
  					{
  						type: "null"
  					},
  					{
  						type: "string"
  					},
  					{
  						type: "number"
  					}
  				]
  			},
  			strokeDashArray: {
  				type: "number"
  			},
  			fillColor: {
  				type: "string"
  			},
  			borderColor: {
  				type: "string"
  			},
  			borderWidth: {
  				type: "number"
  			},
  			opacity: {
  				type: "number"
  			},
  			offsetX: {
  				type: "number"
  			},
  			offsetY: {
  				type: "number"
  			},
  			label: {
  				$ref: "#/$defs/AnnotationLabel"
  			}
  		},
  		additionalProperties: false
  	},
  	YAxisAnnotations: {
  		type: "object",
  		properties: {
  			scope: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "number"
  					},
  					{
  						type: "array",
  						items: {
  							anyOf: [
  								{
  									type: "string"
  								},
  								{
  									type: "number"
  								}
  							]
  						}
  					},
  					{
  						"x-wcc-type": "function"
  					}
  				]
  			},
  			wcc: {
  				type: "object",
  				properties: {
  					tooltip: {
  						anyOf: [
  							{
  								type: "string"
  							},
  							{
  								"x-wcc-type": "function"
  							}
  						]
  					}
  				},
  				additionalProperties: false
  			},
  			id: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "number"
  					}
  				]
  			},
  			y: {
  				anyOf: [
  					{
  						type: "null"
  					},
  					{
  						type: "string"
  					},
  					{
  						type: "number"
  					}
  				]
  			},
  			y2: {
  				anyOf: [
  					{
  						type: "null"
  					},
  					{
  						type: "string"
  					},
  					{
  						type: "number"
  					}
  				]
  			},
  			strokeDashArray: {
  				type: "number"
  			},
  			fillColor: {
  				type: "string"
  			},
  			borderColor: {
  				type: "string"
  			},
  			borderWidth: {
  				type: "number"
  			},
  			opacity: {
  				type: "number"
  			},
  			offsetX: {
  				type: "number"
  			},
  			offsetY: {
  				type: "number"
  			},
  			width: {
  				anyOf: [
  					{
  						type: "string"
  					},
  					{
  						type: "number"
  					}
  				]
  			},
  			yAxisIndex: {
  				type: "number"
  			},
  			label: {
  				$ref: "#/$defs/AnnotationLabel"
  			}
  		},
  		additionalProperties: false
  	}
  };
  var SCHEMA = {
  	"x-wcc-version": "1.1.2",
  	type: type,
  	properties: properties,
  	additionalProperties: additionalProperties,
  	"x-wcc-premium-types": [
  	"sankey",
  	"chord",
  	"gantt",
  	"tree",
  	"stock",
  	"map",
  	"marimekko",
  	"network",
  	"radialColumn",
  	"quintTimeline",
  	"quintConvergence",
  	"vitalsClock",
  	"schedule"
  ],
  	$defs: $defs
  };

  /*
   * West Coast Charts - known wrong option names and values and where they belong.
   * Collected from the option vocabularies agents mix up with ours: Chart.js,
   * Highcharts, ECharts, Plotly, Vega-Lite, older ApexCharts releases (3.x/4.x
   * before 4.7) and WCC names in the wrong casing. Targets are checked against
   * the schema at run time; an alias whose target does not exist is ignored.
   * Copyright (c) 2026 West Coast Software - MIT License
   */

  /**
   * key -> candidates. 'show' = a sibling of the wrong key; '=xaxis' = an absolute path.
   * The first candidate that exists wins (siblings before absolute ones).
   */
  const KEY_ALIASES = {
    // on/off
    enabled: ['show', 'enabled'],
    enable: ['enabled', 'show'],
    display: ['show', 'enabled'],
    visible: ['show', 'enabled', 'hidden'],
    hide: ['show', 'hidden'],
    disabled: ['enabled', 'show'],
    // axes
    xAxis: ['=xaxis'],
    yAxis: ['=yaxis'],
    xAxes: ['=xaxis'],
    yAxes: ['=yaxis'],
    x_axis: ['=xaxis'],
    y_axis: ['=yaxis'],
    scales: ['=xaxis', '=yaxis'],
    axisX: ['=xaxis'],
    axisY: ['=yaxis'],
    // data
    datasets: ['=series'],
    dataset: ['=series'],
    data: ['=series'],
    traces: ['=series'],
    values: ['data'],
    points: ['data'],
    // colours
    color: ['colors', 'color', '=colors'],
    colour: ['color', 'colors', '=colors'],
    colours: ['colors', '=colors'],
    palette: ['=theme.palette', 'colors'],
    backgroundColor: ['background', '=chart.background', 'fill.colors'],
    bgColor: ['background', '=chart.background'],
    borderColor: ['borderColor', 'colors', '=stroke.colors'],
    borderWidth: ['width', 'strokeWidth', '=stroke.width'],
    lineWidth: ['width', 'strokeWidth', '=stroke.width'],
    strokeWidth: ['width', '=stroke.width'],
    strokeColor: ['strokeColors', 'colors', '=stroke.colors'],
    dashStyle: ['dashArray', 'strokeDashArray', '=stroke.dashArray'],
    borderDash: ['dashArray', 'strokeDashArray', '=stroke.dashArray'],
    opacity: ['opacity', 'fillOpacity', '=fill.opacity'],
    alpha: ['opacity', '=fill.opacity'],
    // text
    text: ['text', 'title'],
    label: ['title', 'labels', 'text'],
    name: ['text', 'name'],
    fontColor: ['color', 'colors', '=chart.foreColor'],
    textColor: ['color', 'colors', '=chart.foreColor'],
    font: ['style', 'fontFamily'],
    textStyle: ['style'],
    fontStyle: ['style'],
    fontsize: ['fontSize'],
    // size
    w: ['width'],
    h: ['height'],
    radius: ['size', 'borderRadius', 'radius'],
    cornerRadius: ['borderRadius', 'rounded'],
    rounded: ['borderRadius', 'rounded'],
    barWidth: ['columnWidth', 'barHeight'],
    barThickness: ['columnWidth', 'barHeight'],
    barPercentage: ['columnWidth'],
    categoryPercentage: ['columnWidth'],
    pointWidth: ['columnWidth'],
    pointPadding: ['columnWidth', 'barPadding'],
    innerSize: ['=plotOptions.pie.donut.size'],
    holeSize: ['=plotOptions.pie.donut.size'],
    hole: ['=plotOptions.pie.donut.size', 'hole'],
    cutout: ['=plotOptions.pie.donut.size'],
    cutoutPercentage: ['=plotOptions.pie.donut.size'],
    // behaviour
    animation: ['animations', '=chart.animations'],
    animate: ['animations', '=chart.animations'],
    stack: ['stacked', '=chart.stacked', 'group'],
    stacking: ['stacked', '=chart.stacked'],
    zoomType: ['=chart.zoom.type'],
    zoomEnabled: ['=chart.zoom.enabled'],
    dataZoom: ['=chart.zoom'],
    pan: ['=chart.toolbar.tools.pan'],
    smooth: ['curve', '=stroke.curve'],
    tension: ['curve', '=stroke.curve'],
    lineTension: ['curve', '=stroke.curve'],
    interpolation: ['curve', '=stroke.curve'],
    step: ['curve', '=stroke.curve'],
    stepped: ['curve', '=stroke.curve'],
    orientation: ['horizontal', 'position'],
    horizontal: ['horizontal', '=plotOptions.bar.horizontal'],
    indexAxis: ['=plotOptions.bar.horizontal'],
    inverted: ['=plotOptions.bar.horizontal'],
    reversed: ['reversed', 'inverseOrder'],
    reverse: ['reversed', 'inverseOrder'],
    inverse: ['reversed', 'inverseOrder'],
    logarithmic: ['logarithmic', '=yaxis.logarithmic'],
    log: ['logarithmic'],
    logScale: ['logarithmic'],
    beginAtZero: ['min', 'forceNiceScale'],
    suggestedMin: ['min'],
    suggestedMax: ['max'],
    minimum: ['min'],
    maximum: ['max'],
    ticks: ['labels', 'tickAmount'],
    tickCount: ['tickAmount'],
    ticksCount: ['tickAmount'],
    splitNumber: ['tickAmount'],
    nticks: ['tickAmount'],
    tickInterval: ['stepSize', 'tickAmount'],
    interval: ['stepSize', 'tickAmount'],
    gridLines: ['=grid'],
    gridLineColor: ['=grid.borderColor'],
    splitLine: ['=grid'],
    axisLine: ['axisBorder'],
    axisTick: ['axisTicks'],
    axisLabel: ['labels'],
    tickFormat: ['labels.formatter', 'formatter'],
    format: ['formatter', 'format'],
    formatter: ['formatter', 'labels.formatter'],
    valueFormatter: ['formatter', 'y.formatter'],
    callback: ['formatter', 'labels.formatter'],
    callbacks: ['formatter', 'y', 'custom'],
    pointFormat: ['y.formatter', 'custom'],
    valueSuffix: ['y.formatter'],
    trigger: ['shared', 'intersect'],
    mode: ['mode', 'shared', 'type'],
    shared: ['shared'],
    // chart-level
    renderTo: ['=chart.id'],
    responsive: ['=responsive', '=chart.redrawOnParentResize'],
    maintainAspectRatio: ['=chart.redrawOnParentResize'],
    aspectRatio: ['=chart.height'],
    credits: ['=chart.toolbar'],
    exporting: ['=chart.toolbar.export', '=chart.toolbar'],
    toolbox: ['=chart.toolbar'],
    modebar: ['=chart.toolbar'],
    navigator: ['=chart.brush'],
    rangeSelector: ['=chart.brush', '=chart.zoom'],
    subtitles: ['=subtitle'],
    caption: ['=subtitle'],
    heading: ['=title'],
    header: ['=title'],
    plotBands: ['=annotations.yaxis'],
    plotLines: ['=annotations.yaxis'],
    markLine: ['=annotations.yaxis'],
    markArea: ['=annotations.xaxis'],
    annotation: ['=annotations'],
    visualMap: ['=plotOptions.heatmap.colorScale'],
    colorAxis: ['=plotOptions.heatmap.colorScale', '=plotOptions.map.colorScale'],
    colorScale: ['colorScale'],
    pointStyle: ['shape', '=markers.shape'],
    marker: ['markers', '=markers'],
    symbol: ['shape', '=markers.shape'],
    symbolSize: ['size', '=markers.size'],
    pointRadius: ['size', '=markers.size'],
    pointSize: ['size', '=markers.size'],
    showLine: ['=stroke.show'],
    fill: ['fill', '=fill'],
    gradient: ['=fill.gradient'],
    shadow: ['dropShadow'],
    boxShadow: ['dropShadow'],
    // locale
    lang: ['=chart.defaultLocale', '=chart.locales'],
    language: ['=chart.defaultLocale'],
    locale: ['=chart.defaultLocale', '=chart.locales'],
    // theme
    darkMode: ['=theme.mode'],
    dark: ['=theme.mode'],
    colorScheme: ['=theme.palette', '=theme.mode'],
    // events
    onClick: ['=chart.events.dataPointSelection', '=chart.events.click'],
    onHover: ['=chart.events.dataPointMouseEnter'],
    click: ['click', '=chart.events.click'],
    // licence
    license: ['=chart.licenseKey'],
    licence: ['=chart.licenseKey'],
    licenseKey: ['=chart.licenseKey'],
    key: ['=chart.licenseKey'],
    // accessibility / description
    description: ['=chart.accessibility.description', 'description'],
    ariaLabel: ['=chart.accessibility.description'],
    a11y: ['=chart.accessibility'],
    accessible: ['=chart.accessibility'],
    // radial column (premium)
    aggregation: ['aggregate'],
    aggregator: ['aggregate'],
    agg: ['aggregate'],
    aggregateBy: ['aggregate'],
    summary: ['aggregate'],
    reduce: ['aggregate'],
    total: ['aggregate', 'center'],
    centre: ['center'],
    centerLabel: ['center'],
    innerRadiusRatio: ['innerRadius'],
    holeRadius: ['innerRadius', 'hole'],
    start: ['startAngle', 'start'],
    end: ['endAngle', 'end'],
    rotation: ['startAngle', 'rotate'],
    padAngle: ['barPadding', 'gap', 'padAngle'],
    padding: ['padding', 'barPadding'],
    layer: ['layers'],
    rings: ['layers'],
    // network / sankey / gantt / tree (premium)
    nodes: ['nodes'],
    edges: ['links', 'edges'],
    links: ['links', 'link'],
    linkColor: ['link.color', 'links.color'],
    nodeWidth: ['nodeWidth', 'node.width'],
    nodePadding: ['nodePadding', 'node.padding'],
    layout: ['layout', 'type'],
    algorithm: ['layout', 'type'],
    force: ['layout', 'type'],
    physics: ['layout'],
    dependencies: ['dependencies'],
    deps: ['dependencies'],
    tasks: ['=series'],
    milestone: ['milestones'],
    orient: ['orientation', 'direction'],
    direction: ['direction', 'orientation'],
    collapsed: ['collapsed', 'expandLevel']
  };

  /** exact template paths ('series[].datapoints') -> target (or { to, value: { old: new } }) */
  const PATH_ALIASES = {
    'legend.enabled': 'legend.show',
    'legend.display': 'legend.show',
    'legend.visible': 'legend.show',
    'legend.align': {
      to: 'legend.horizontalAlign'
    },
    'legend.layout': 'legend.position',
    'legend.verticalAlign': 'legend.position',
    'legend.orient': 'legend.position',
    'legend.top': 'legend.position',
    'legend.bottom': 'legend.position',
    'legend.labels.color': 'legend.labels.colors',
    'legend.textStyle': 'legend.labels',
    'legend.itemStyle': 'legend.labels',
    'tooltip.show': 'tooltip.enabled',
    'tooltip.display': 'tooltip.enabled',
    'tooltip.visible': 'tooltip.enabled',
    'tooltip.trigger': 'tooltip.shared',
    'tooltip.mode': 'tooltip.shared',
    'tooltip.formatter': 'tooltip.y.formatter',
    'tooltip.valueFormatter': 'tooltip.y.formatter',
    'tooltip.valueSuffix': 'tooltip.y.formatter',
    'tooltip.pointFormat': 'tooltip.y.formatter',
    'tooltip.headerFormat': 'tooltip.x.formatter',
    'tooltip.backgroundColor': 'tooltip.theme',
    'tooltip.crosshairs': 'xaxis.crosshairs',
    'tooltip.split': 'tooltip.shared',
    'dataLabels.show': 'dataLabels.enabled',
    'dataLabels.display': 'dataLabels.enabled',
    'dataLabels.color': 'dataLabels.style.colors',
    'dataLabels.colors': 'dataLabels.style.colors',
    'dataLabels.fontSize': 'dataLabels.style.fontSize',
    'dataLabels.format': 'dataLabels.formatter',
    'dataLabels.position': 'plotOptions.bar.dataLabels.position',
    'markers.enabled': 'markers.size',
    'markers.radius': 'markers.size',
    'markers.symbol': 'markers.shape',
    'markers.color': 'markers.colors',
    'markers.fillColor': 'markers.colors',
    'markers.lineColor': 'markers.strokeColors',
    'markers.lineWidth': 'markers.strokeWidth',
    'stroke.color': 'stroke.colors',
    'stroke.smooth': 'stroke.curve',
    'stroke.style': 'stroke.dashArray',
    'stroke.dash': 'stroke.dashArray',
    'stroke.dashStyle': 'stroke.dashArray',
    'stroke.lineWidth': 'stroke.width',
    'stroke.thickness': 'stroke.width',
    'fill.color': 'fill.colors',
    'fill.alpha': 'fill.opacity',
    'grid.color': 'grid.borderColor',
    'grid.lineColor': 'grid.borderColor',
    'grid.dashArray': 'grid.strokeDashArray',
    'grid.borderDash': 'grid.strokeDashArray',
    'grid.left': 'grid.padding.left',
    'grid.right': 'grid.padding.right',
    'grid.top': 'grid.padding.top',
    'grid.bottom': 'grid.padding.bottom',
    'grid.containLabel': 'grid.padding',
    'grid.horizontal': 'grid.yaxis.lines.show',
    'grid.vertical': 'grid.xaxis.lines.show',
    'title.align': 'title.align',
    'title.left': 'title.align',
    'title.textStyle': 'title.style',
    'title.font': 'title.style',
    'title.color': 'title.style.color',
    'title.fontSize': 'title.style.fontSize',
    'title.display': 'title.text',
    'title.subtext': 'subtitle.text',
    'subtitle.color': 'subtitle.style.color',
    'xaxis.data': 'xaxis.categories',
    'xaxis.labels.rotate': 'xaxis.labels.rotate',
    'xaxis.title.display': 'xaxis.title.text',
    'xaxis.label': 'xaxis.title.text',
    'xaxis.name': 'xaxis.title.text',
    'xaxis.ticks': 'xaxis.tickAmount',
    'xaxis.gridLines': 'grid.xaxis.lines',
    'xaxis.reversed': 'yaxis.reversed',
    'xaxis.timeFormat': 'xaxis.labels.format',
    'xaxis.dateFormat': 'xaxis.labels.format',
    'xaxis.format': 'xaxis.labels.format',
    'xaxis.time': 'xaxis.type',
    'xaxis.scale': 'xaxis.type',
    'xaxis.show': 'xaxis.labels.show',
    'xaxis.visible': 'xaxis.labels.show',
    'xaxis.display': 'xaxis.labels.show',
    'xaxis.enabled': 'xaxis.labels.show',
    'xaxis.interval': 'xaxis.stepSize',
    'yaxis.label': 'yaxis.title.text',
    'yaxis.name': 'yaxis.title.text',
    'yaxis.ticks': 'yaxis.tickAmount',
    'yaxis.beginAtZero': {
      to: 'yaxis.min',
      value: {
        true: 0
      }
    },
    'xaxis.beginAtZero': {
      to: 'xaxis.min',
      value: {
        true: 0
      }
    },
    'yaxis.format': 'yaxis.labels.formatter',
    'yaxis.formatter': 'yaxis.labels.formatter',
    'yaxis.type': 'yaxis.logarithmic',
    'yaxis.scale': 'yaxis.logarithmic',
    'yaxis.log': 'yaxis.logarithmic',
    'yaxis.right': 'yaxis.opposite',
    'yaxis.position': 'yaxis.opposite',
    'yaxis.visible': 'yaxis.show',
    'yaxis.display': 'yaxis.show',
    'yaxis.enabled': 'yaxis.show',
    'yaxis.inverse': 'yaxis.reversed',
    'yaxis.interval': 'yaxis.stepSize',
    'yaxis.gridLines': 'grid.yaxis.lines',
    'chart.zoomType': 'chart.zoom.type',
    'chart.zoomable': 'chart.zoom.enabled',
    'chart.panning': 'chart.toolbar.tools.pan',
    'chart.backgroundColor': 'chart.background',
    'chart.bgColor': 'chart.background',
    'chart.color': 'chart.foreColor',
    'chart.textColor': 'chart.foreColor',
    'chart.font': 'chart.fontFamily',
    'chart.animation': 'chart.animations',
    'chart.animate': 'chart.animations',
    'chart.stacking': 'chart.stacked',
    'chart.stack': 'chart.stacked',
    'chart.inverted': 'plotOptions.bar.horizontal',
    'chart.horizontal': 'plotOptions.bar.horizontal',
    'chart.theme': 'theme.mode',
    'chart.darkMode': 'theme.mode',
    'chart.mode': 'theme.mode',
    'chart.palette': 'theme.palette',
    'chart.colors': 'colors',
    'chart.title': 'title.text',
    'chart.subtitle': 'subtitle.text',
    'chart.legend': 'legend',
    'chart.tooltip': 'tooltip',
    'chart.series': 'series',
    'chart.data': 'series',
    'chart.renderer': 'chart.renderer',
    'chart.license': 'chart.licenseKey',
    'chart.licence': 'chart.licenseKey',
    'chart.key': 'chart.licenseKey',
    'chart.lang': 'chart.defaultLocale',
    'chart.locale': 'chart.defaultLocale',
    'chart.language': 'chart.defaultLocale',
    'chart.responsive': 'chart.redrawOnParentResize',
    'chart.description': 'chart.accessibility.description',
    'chart.ariaLabel': 'chart.accessibility.description',
    'chart.exporting': 'chart.toolbar.export',
    'chart.export': 'chart.toolbar.export',
    'chart.download': 'chart.toolbar.tools.download',
    'chart.toolbar.enabled': 'chart.toolbar.show',
    'chart.toolbar.display': 'chart.toolbar.show',
    'chart.zoom.enable': 'chart.zoom.enabled',
    'chart.zoom.show': 'chart.zoom.enabled',
    'chart.zoom.mode': 'chart.zoom.type',
    'chart.zoom.axis': 'chart.zoom.type',
    'chart.animations.duration': 'chart.animations.speed',
    'chart.animations.enable': 'chart.animations.enabled',
    'chart.animations.show': 'chart.animations.enabled',
    'chart.animations.easing': 'chart.animations.enabled',
    'chart.events.onClick': 'chart.events.click',
    'chart.events.onHover': 'chart.events.dataPointMouseEnter',
    'chart.events.pointClick': 'chart.events.dataPointSelection',
    'chart.events.load': 'chart.events.mounted',
    'chart.events.onLoad': 'chart.events.mounted',
    'chart.events.ready': 'chart.events.mounted',
    'chart.events.rendered': 'chart.events.animationEnd',
    'chart.events.legendItemClick': 'chart.events.legendClick',
    'chart.events.zoom': 'chart.events.zoomed',
    'chart.events.select': 'chart.events.selection',
    'series[].values': 'series[].data',
    'series[].points': 'series[].data',
    'series[].label': 'series[].name',
    'series[].title': 'series[].name',
    'series[].colour': 'series[].color',
    'series[].backgroundColor': 'series[].color',
    'series[].borderColor': 'series[].color',
    'series[].visible': 'series[].hidden',
    'series[].stack': 'series[].group',
    'series[].yAxisID': 'series[].group',
    'series[].yAxis': 'series[].group',
    'series[].chartType': 'series[].type',
    'series[].mode': 'series[].type',
    'plotOptions.bar.radius': 'plotOptions.bar.borderRadius',
    'plotOptions.bar.cornerRadius': 'plotOptions.bar.borderRadius',
    'plotOptions.bar.barWidth': 'plotOptions.bar.columnWidth',
    'plotOptions.bar.width': 'plotOptions.bar.columnWidth',
    'plotOptions.bar.thickness': 'plotOptions.bar.columnWidth',
    'plotOptions.bar.orientation': 'plotOptions.bar.horizontal',
    'plotOptions.bar.stacked': 'chart.stacked',
    'plotOptions.bar.colorByPoint': 'plotOptions.bar.distributed',
    'plotOptions.bar.varyColors': 'plotOptions.bar.distributed',
    'plotOptions.column': 'plotOptions.bar',
    'plotOptions.series': 'plotOptions.line',
    'plotOptions.donut': 'plotOptions.pie.donut',
    'plotOptions.doughnut': 'plotOptions.pie.donut',
    'plotOptions.pie.innerSize': 'plotOptions.pie.donut.size',
    'plotOptions.pie.holeSize': 'plotOptions.pie.donut.size',
    'plotOptions.pie.cutout': 'plotOptions.pie.donut.size',
    'plotOptions.pie.startAngle': 'plotOptions.pie.startAngle',
    'plotOptions.pie.rotation': 'plotOptions.pie.startAngle',
    'plotOptions.radialColumn.aggregation': 'plotOptions.radialColumn.aggregate',
    'plotOptions.radialColumn.innerRadiusRatio': 'plotOptions.radialColumn.innerRadius',
    'plotOptions.radialColumn.padding': 'plotOptions.radialColumn.barPadding',
    'plotOptions.radialColumn.rings': 'plotOptions.radialColumn.layers',
    'plotOptions.radialColumn.centre': 'plotOptions.radialColumn.center',
    'plotOptions.radialColumn.total': 'plotOptions.radialColumn.aggregate',
    'plotOptions.radialColumn.summary': 'plotOptions.radialColumn.aggregate',
    'plotOptions.radialColumn.crossfilter': 'plotOptions.radialColumn.link',
    'plotOptions.radialColumn.linked': 'plotOptions.radialColumn.link',
    'plotOptions.network.links': 'plotOptions.network.edges',
    'plotOptions.network.connections': 'plotOptions.network.edges',
    'plotOptions.network.algorithm': 'plotOptions.network.layout',
    'plotOptions.network.physics': 'plotOptions.network.layout',
    'plotOptions.network.force': 'plotOptions.network.layout',
    'plotOptions.network.facets': 'plotOptions.network.facet',
    'plotOptions.sankey.links': 'plotOptions.sankey.link',
    'plotOptions.sankey.edges': 'plotOptions.sankey.link',
    'plotOptions.sankey.flows': 'plotOptions.sankey.link',
    'plotOptions.gantt.deps': 'plotOptions.gantt.dependencies',
    'plotOptions.gantt.links': 'plotOptions.gantt.dependencies',
    'plotOptions.gantt.criticalPathEnabled': 'plotOptions.gantt.criticalPath.show',
    'plotOptions.gantt.showCriticalPath': 'plotOptions.gantt.criticalPath.show',
    'plotOptions.heatmap.colors': 'plotOptions.heatmap.colorScale',
    'plotOptions.heatmap.colorRange': 'plotOptions.heatmap.colorScale.ranges',
    'plotOptions.heatmap.ranges': 'plotOptions.heatmap.colorScale.ranges',
    'plotOptions.heatmap.min': 'plotOptions.heatmap.colorScale.min',
    'plotOptions.heatmap.max': 'plotOptions.heatmap.colorScale.max',
    'plotOptions.treemap.colorByPoint': 'plotOptions.treemap.distributed',
    'plotOptions.radialBar.total': 'plotOptions.radialBar.dataLabels.total',
    'plotOptions.radialBar.hollowSize': 'plotOptions.radialBar.hollow.size',
    'plotOptions.radialBar.innerRadius': 'plotOptions.radialBar.hollow.size',
    'responsive[].maxWidth': 'responsive[].breakpoint',
    'responsive[].breakPoint': 'responsive[].breakpoint',
    'responsive[].width': 'responsive[].breakpoint',
    'responsive[].condition': 'responsive[].breakpoint',
    'responsive[].chartOptions': 'responsive[].options',
    'responsive[].rules': 'responsive[].options',
    'scales.x': 'xaxis',
    'scales.y': 'yaxis',
    'scales.xAxes': 'xaxis',
    'scales.yAxes': 'yaxis',
    'plugins.legend': 'legend',
    'plugins.title': 'title',
    'plugins.subtitle': 'subtitle',
    'plugins.tooltip': 'tooltip',
    'plugins.datalabels': 'dataLabels',
    'plugins.zoom': 'chart.zoom',
    'plugins.annotation': 'annotations',
    'interaction.mode': 'tooltip.shared',
    'interaction.intersect': 'tooltip.intersect',
    'elements.line': 'stroke',
    'elements.point': 'markers',
    'elements.bar': 'plotOptions.bar',
    'elements.arc': 'plotOptions.pie',
    'layout.padding': 'grid.padding',
    'textStyle.fontFamily': 'chart.fontFamily',
    'textStyle.color': 'chart.foreColor',
    'textStyle.fontSize': 'dataLabels.style.fontSize',
    'layout.title': 'title.text',
    'layout.xaxis': 'xaxis',
    'layout.yaxis': 'yaxis',
    'layout.showlegend': 'legend.show',
    'layout.height': 'chart.height',
    'layout.width': 'chart.width',
    'colorAxis': 'plotOptions.heatmap.colorScale',
    'visualMap': 'plotOptions.heatmap.colorScale',
    'yAxis': 'yaxis',
    'xAxis': 'xaxis',
    'credits': 'chart.toolbar',
    'exporting': 'chart.toolbar.export',
    'toolbox': 'chart.toolbar',
    'animation': 'chart.animations',
    'animations': 'chart.animations',
    'height': 'chart.height',
    'width': 'chart.width',
    'type': 'chart.type',
    'chartType': 'chart.type',
    'stacked': 'chart.stacked',
    'zoom': 'chart.zoom',
    'toolbar': 'chart.toolbar',
    'events': 'chart.events',
    'background': 'chart.background',
    'backgroundColor': 'chart.background',
    'fontFamily': 'chart.fontFamily',
    'locale': 'chart.defaultLocale',
    'locales': 'chart.locales',
    'licenseKey': 'chart.licenseKey',
    'license': 'chart.licenseKey',
    'accessibility': 'chart.accessibility',
    'a11y': 'chart.accessibility',
    'sparkline': 'chart.sparkline',
    'categories': 'xaxis.categories',
    'datasets': 'series',
    'data': 'series',
    'palette': 'theme.palette',
    'darkMode': 'theme.mode',
    'mode': 'theme.mode',
    'subtitles': 'subtitle',
    'caption': 'subtitle',
    'axis': 'xaxis',
    'gridLines': 'grid',
    'dataZoom': 'chart.zoom',
    'brush': 'chart.brush',
    'group': 'chart.group',
    'id': 'chart.id',
    'link': 'chart.link',
    'history': 'chart.history',
    'orient': 'chart.orient',
    'renderer': 'chart.renderer',
    'narrative': 'wcc.narrative',
    'tasks': 'series',
    'nodes': 'series',
    'links': 'series',
    'edges': 'series',
    'aggregate': 'plotOptions.radialColumn.aggregate'
  };

  /** options of older ApexCharts releases (before 4.7) that are no longer read */
  const LEGACY = {
    'plotOptions.bar.endingShape': {
      to: 'plotOptions.bar.borderRadius',
      note: 'endingShape was replaced by borderRadius (+ borderRadiusApplication).',
      value: {
        rounded: 4,
        flat: 0,
        arrow: 0
      }
    },
    'plotOptions.bar.startingShape': {
      to: 'plotOptions.bar.borderRadiusApplication',
      note: 'startingShape was replaced by borderRadiusApplication.',
      value: {
        rounded: 'around',
        flat: 'end'
      }
    },
    'plotOptions.bar.rangeBarGroupRows': {
      to: 'plotOptions.bar.rangeBarGroupRows'
    },
    'plotOptions.pie.size': {
      to: 'plotOptions.pie.customScale',
      note: 'pie.size was replaced by customScale.'
    },
    'plotOptions.radialBar.size': {
      to: 'plotOptions.radialBar.hollow.size',
      note: 'radialBar.size is not read; the hollow size sets the ring width.'
    },
    'chart.toolbar.autoSelected': {
      to: 'chart.toolbar.autoSelected'
    },
    'tooltip.followCursor': {
      to: 'tooltip.followCursor'
    },
    'xaxis.labels.formatter': {
      to: 'xaxis.labels.formatter'
    },
    'legend.containerMargin': {
      to: 'legend.itemMargin',
      note: 'containerMargin was replaced by itemMargin.'
    },
    'legend.markers.radius': {
      to: 'legend.markers.shape',
      note: 'legend marker radius was replaced by markers.shape.'
    },
    'markers.radius': {
      to: 'markers.size',
      note: 'marker radius was replaced by markers.size.'
    },
    'theme.mode.dark': {
      to: 'theme.mode'
    }
  };
  // entries that point to themselves exist in the current schema: drop them so only removed keys stay
  Object.keys(LEGACY).forEach(k => LEGACY[k].to === k && delete LEGACY[k]);

  /** wrong enum values: '<template path>=<value>' or '*=<value>' -> allowed value */
  const VALUE_ALIASES = {
    'chart.type=column': 'bar',
    'chart.type=columns': 'bar',
    'chart.type=bars': 'bar',
    'chart.type=horizontalBar': 'bar',
    'chart.type=lines': 'line',
    'chart.type=spline': 'line',
    'chart.type=areaspline': 'area',
    'chart.type=doughnut': 'donut',
    'chart.type=ring': 'donut',
    'chart.type=polar': 'polarArea',
    'chart.type=polararea': 'polarArea',
    'chart.type=point': 'scatter',
    'chart.type=points': 'scatter',
    'chart.type=dot': 'scatter',
    'chart.type=boxplot': 'boxPlot',
    'chart.type=box': 'boxPlot',
    'chart.type=ohlc': 'candlestick',
    'chart.type=candle': 'candlestick',
    'chart.type=gauge': 'gauge',
    'chart.type=solidgauge': 'radialBar',
    'chart.type=radial': 'radialBar',
    'chart.type=spider': 'radar',
    'chart.type=graph': 'network',
    'chart.type=force': 'network',
    'chart.type=forceDirected': 'network',
    'chart.type=alluvial': 'sankey',
    'chart.type=dependencywheel': 'chord',
    'chart.type=timeline': 'rangeBar',
    'chart.type=xrange': 'rangeBar',
    'chart.type=choropleth': 'map',
    'chart.type=geo': 'map',
    'chart.type=mekko': 'marimekko',
    'chart.type=variwide': 'marimekko',
    'chart.type=treegraph': 'tree',
    'chart.type=dendrogram': 'tree',
    'chart.type=orgchart': 'tree',
    'chart.type=organization': 'tree',
    'chart.type=sunBurst': 'sunburst',
    'chart.type=nightingale': 'polarArea',
    'chart.type=roseChart': 'polarArea',
    'chart.type=radialColumns': 'radialColumn',
    'chart.type=radialcolumn': 'radialColumn',
    'chart.type=circularBar': 'radialColumn',
    'chart.type=radialStackedBar': 'radialColumn',
    'chart.type=stream': 'streamgraph',
    'chart.type=themeRiver': 'streamgraph',
    'chart.type=heatMap': 'heatmap',
    'chart.type=calendarHeatmap': 'calendar',
    'chart.type=race': 'barRace',
    'chart.type=barrace': 'barRace',
    'chart.type=bullet': 'bar',
    'chart.type=stock': 'stock',
    'chart.type=stockChart': 'stock',
    'stroke.curve=spline': 'smooth',
    'stroke.curve=monotone': 'monotoneCubic',
    'stroke.curve=monotoneX': 'monotoneCubic',
    'stroke.curve=basis': 'smooth',
    'stroke.curve=cardinal': 'smooth',
    'stroke.curve=linear': 'straight',
    'stroke.curve=step': 'stepline',
    'stroke.curve=steps': 'stepline',
    'stroke.curve=stepped': 'stepline',
    'stroke.curve=hv': 'stepline',
    'xaxis.type=time': 'datetime',
    'xaxis.type=timeseries': 'datetime',
    'xaxis.type=date': 'datetime',
    'xaxis.type=linear': 'numeric',
    'xaxis.type=value': 'numeric',
    'xaxis.type=category': 'category',
    'xaxis.type=categorical': 'category',
    'xaxis.type=ordinal': 'category',
    'legend.position=top-right': 'top',
    'legend.position=topRight': 'top',
    'legend.position=below': 'bottom',
    'legend.position=above': 'top',
    'legend.position=none': 'bottom',
    'legend.horizontalAlign=centre': 'center',
    'legend.horizontalAlign=middle': 'center',
    'title.align=centre': 'center',
    'title.align=middle': 'center',
    'subtitle.align=middle': 'center',
    'theme.mode=night': 'dark',
    'theme.mode=black': 'dark',
    'theme.mode=white': 'light',
    'theme.mode=day': 'light',
    'fill.type=linear': 'gradient',
    'fill.type=linearGradient': 'gradient',
    'fill.type=color': 'solid',
    'fill.type=hatch': 'pattern',
    'markers.shape=diamond': 'diamond',
    'markers.shape=rect': 'square',
    'markers.shape=rectangle': 'square',
    'markers.shape=dot': 'circle',
    'markers.shape=point': 'circle',
    'markers.shape=tri': 'triangle',
    'markers.shape=plus': 'plus',
    'markers.shape=x': 'cross',
    'chart.zoom.type=x-axis': 'x',
    'chart.zoom.type=horizontal': 'x',
    'chart.zoom.type=vertical': 'y',
    'chart.zoom.type=both': 'xy',
    'chart.stackType=percent': '100%',
    'chart.stackType=percentage': '100%',
    'chart.stackType=100': '100%',
    'chart.stackType=expand': '100%',
    'chart.stackType=normal': 'normal',
    'chart.stackType=stacked': 'normal',
    'plotOptions.radialColumn.aggregate=average': 'mean',
    'plotOptions.radialColumn.aggregate=avg': 'mean',
    'plotOptions.radialColumn.aggregate=total': 'sum',
    'plotOptions.radialColumn.aggregate=maximum': 'max',
    'plotOptions.radialColumn.aggregate=minimum': 'min',
    'plotOptions.radialColumn.aggregate=median': 'mean',
    'plotOptions.radialColumn.aggregate=p95': 'max',
    'plotOptions.radialColumn.aggregate=off': 'none',
    'plotOptions.radialColumn.aggregate=false': 'none',
    'plotOptions.bar.dataLabels.position=inside': 'center',
    'plotOptions.bar.dataLabels.position=outside': 'top',
    'plotOptions.bar.dataLabels.position=end': 'top',
    'plotOptions.bar.dataLabels.position=start': 'bottom',
    '*=centre': 'center',
    '*=middle': 'center',
    '*=average': 'mean',
    '*=avg': 'mean',
    '*=none': 'none'
  };

  /** extra explanation for a type mismatch at a template path */
  const TYPE_HINTS = {
    responsive: 'responsive is a list of breakpoints: [{ breakpoint: 480, options: { ... } }]. Charts follow their container width by default (chart.width "100%", chart.redrawOnParentResize).',
    colors: 'colors is a list of CSS colours: ["#2563eb", "#16a34a"].',
    'chart.animations': 'chart.animations is an object: { enabled: false } turns animations off.',
    'chart.zoom': 'chart.zoom is an object: { enabled: true, type: "x" }.',
    'chart.toolbar': 'chart.toolbar is an object: { show: false } hides it.',
    'chart.stacked': 'chart.stacked is a boolean; chart.stackType: "100%" stacks to 100 %.',
    'legend.position': 'legend.position is "top", "right", "bottom" or "left"; hide the legend with legend.show: false.',
    'stroke.curve': 'stroke.curve is a curve name ("smooth", "straight", "stepline", "monotoneCubic") or a list of them per series.',
    'xaxis.categories': 'xaxis.categories is a list of labels: ["Jan", "Feb", ...].',
    'yaxis.min': 'yaxis.min is a number (or a function (min) => number).',
    'yaxis.max': 'yaxis.max is a number (or a function (max) => number).',
    'title': 'title is an object: { text: "Revenue" }.',
    'subtitle': 'subtitle is an object: { text: "2026" }.',
    'tooltip': 'tooltip is an object: { enabled: false } turns tooltips off.',
    'legend': 'legend is an object: { show: false } hides it.',
    'dataLabels': 'dataLabels is an object: { enabled: true }.',
    'markers': 'markers is an object: { size: 4 }.',
    'grid': 'grid is an object: { show: false } hides it.',
    'theme': 'theme is an object: { mode: "dark" }.',
    'series': 'series is a list: [{ name: "Sales", data: [1, 2, 3] }] (pie/donut/radialBar: [44, 55, 13]).',
    'series[].data': 'series[].data is a list of numbers, [x, y] pairs or { x, y } points.',
    'labels': 'labels is a list of strings: ["Apples", "Pears"].',
    'plotOptions.radialColumn.aggregate': 'aggregate is "sum", "mean", "max", "min" or "none": sum only counts and amounts; max/min for latencies and percentiles, mean for rates and scores.'
  };

  /*
   * West Coast Charts - option validator (west-coast-charts/agent/validate).
   *
   * validate(options, opts) walks an options object against the generated
   * schema (src/agent/schema.compact.json = dist/schema/wcc-options.schema.json
   * without docs) and returns structured issues an agent or a CLI can act on:
   *   { kind, severity, path, pointer, message, hint, suggestion, alternatives, fix, exitCode }
   * Pure: no DOM, no core import; the plugin wrapper (./index.js) adds
   * WestCoastCharts.validate and the chart.validate check.
   * Error catalog: docs/errors.md.
   * Copyright (c) 2026 West Coast Software - MIT License
   */
  const EXIT = {
    ok: 0,
    internal: 1,
    usage: 2,
    notFound: 3,
    license: 4,
    conflict: 5,
    confirmation: 6
  };
  const KINDS = ['unknown_option', 'type_mismatch', 'invalid_value', 'deprecated', 'license_required'];
  const LICENSE_URL = 'https://westcoastcharts.dev/pricing#trial';
  const PREMIUM_TYPES = SCHEMA['x-wcc-premium-types'] || [];

  // ------------------------------------------------------------------ schema helpers
  let schema = SCHEMA;
  const res = n => {
    let guard = 0;
    while (n && n.$ref && guard++ < 20) n = schema.$defs[n.$ref.slice(8)];
    return n || {};
  };
  const jsType = v => {
    if (v === null) return 'null';
    if (Array.isArray(v)) return 'array';
    if (v instanceof Date) return 'Date';
    const t = typeof v;
    if (t === 'object' && typeof v.nodeType === 'number') return 'element';
    return t;
  };

  /** does v fit the schema node at this level (no recursion into children) */
  function fits(s, v) {
    s = res(s);
    if (s.anyOf) return s.anyOf.some(b => fits(b, v));
    if (s.allOf) return s.allOf.every(b => fits(b, v));
    if ('const' in s) return v === s.const;
    if (s.enum) return s.enum.indexOf(v) > -1;
    const x = s['x-wcc-type'];
    if (x) {
      if (x === 'function') return typeof v === 'function';
      if (x === 'Date') return v instanceof Date;
      if (x === 'undefined') return v === undefined;
      return v !== null && (typeof v === 'object' || typeof v === 'function');
    }
    const t = jsType(v);
    switch (s.type) {
      case undefined:
        return true;
      case 'number':
        return t === 'number';
      case 'object':
        return t === 'object' || s['x-wcc-callable'] && t === 'function';
      default:
        return s.type === t;
    }
  }
  function describeType(s, depth) {
    s = res(s);
    if (s.anyOf) {
      const seen = [];
      s.anyOf.forEach(b => {
        const d = describeType(b, (depth || 0) + 1);
        if (seen.indexOf(d) < 0) seen.push(d);
      });
      return seen.join(' | ');
    }
    if ('const' in s) return JSON.stringify(s.const);
    if (s.enum) return s.enum.map(e => JSON.stringify(e)).join(' | ');
    if (s['x-wcc-type']) return s['x-wcc-type'];
    if (s.type === 'array') return depth > 1 ? 'array' : describeType(s.items || {}, 2) + '[]';
    return s.type || 'any';
  }

  /** properties of an object schema, merging allOf parts and object branches of anyOf */
  function propsOf(s) {
    s = res(s);
    const out = {
      props: {},
      open: false,
      extra: null
    };
    const add = n => {
      n = res(n);
      if (n.allOf) return n.allOf.forEach(add);
      if (n.anyOf) return n.anyOf.forEach(b => (res(b).type === 'object' || res(b).allOf) && add(b));
      if (n.type !== 'object') return;
      const p = n.properties || {};
      for (const k in p) if (!out.props[k]) out.props[k] = p[k];
      if (n.additionalProperties === true || n.additionalProperties === undefined) out.open = true;else if (n.additionalProperties && typeof n.additionalProperties === 'object') {
        if (!Object.keys(n.additionalProperties).length) out.open = true;else out.extra = n.additionalProperties;
      }
    };
    add(s);
    return out;
  }

  // ------------------------------------------------------------------ string distance
  const norm = k => String(k).toLowerCase().replace(/[-_\s.]/g, '');
  function dist(a, b) {
    // optimal string alignment (Damerau-Levenshtein with adjacent transpositions)
    const m = a.length,
      n = b.length;
    if (!m) return n;
    if (!n) return m;
    let p2 = null,
      p = [],
      c;
    for (let j = 0; j <= n; j++) p[j] = j;
    for (let i = 1; i <= m; i++) {
      c = [i];
      for (let j = 1; j <= n; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        let v = Math.min(p[j] + 1, c[j - 1] + 1, p[j - 1] + cost);
        if (p2 && i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) v = Math.min(v, p2[j - 2] + 1);
        c[j] = v;
      }
      p2 = p;
      p = c;
    }
    return p[n];
  }
  const words = k => String(k).replace(/([a-z0-9])([A-Z])/g, '$1 $2').toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
  /** 0 (same) .. 1+ (unrelated) */
  function keyScore(a, b) {
    const x = norm(a),
      y = norm(b);
    if (x === y) return 0;
    const d = dist(x, y) / Math.max(x.length, y.length);
    let pre = 0;
    while (pre < x.length && x[pre] === y[pre]) pre++;
    let s = d;
    if (pre >= 4 && pre >= Math.min(x.length, y.length) - 1) s = Math.min(s, 0.25); // aggregation ~ aggregate, colorScale ~ color
    if (x.length >= 4 && (y.indexOf(x) > -1 || x.indexOf(y) > -1) && Math.min(x.length, y.length) >= 4) s = Math.min(s, 0.32);
    const wa = words(a),
      wb = words(b);
    if (wa.length > 1 || wb.length > 1) {
      const same = wa.filter(w => wb.indexOf(w) > -1).length;
      if (same && same === Math.min(wa.length, wb.length) && wa.length === wb.length) s = Math.min(s, 0.1); // labelShow ~ showLabel
    }
    return s;
  }
  const close = (a, b) => {
    const s = keyScore(a, b);
    const len = Math.max(norm(a).length, norm(b).length);
    return s <= (len <= 4 ? 0.26 : len <= 7 ? 0.34 : 0.4);
  };

  // ------------------------------------------------------------------ global key index
  let INDEX = null; // norm key -> [{ path: ['plotOptions','bar','borderRadius'], s }]
  function buildIndex() {
    INDEX = Object.create(null);
    const visit = (s, path, refs) => {
      if (path.length > 9) return;
      s = s || {};
      if (s.$ref) {
        if (refs.indexOf(s.$ref) > -1) return;
        refs = refs.concat(s.$ref);
        s = res(s);
      }
      if (s.anyOf) return s.anyOf.forEach(b => visit(b, path, refs));
      if (s.allOf) return s.allOf.forEach(b => visit(b, path, refs));
      if (s.type === 'array') {
        if (s.items) visit(s.items, path.concat('[]'), refs);
        return;
      }
      if (s.type !== 'object' || !s.properties) return;
      for (const k in s.properties) {
        const p = path.concat(k);
        const nk = norm(k);
        (INDEX[nk] = INDEX[nk] || []).push({
          path: p,
          s: s.properties[k]
        });
        visit(s.properties[k], p, refs);
      }
    };
    visit(schema, [], []);
  }

  /** schema node at a dotted template path ('plotOptions.bar.borderRadius', 'series[].data') */
  function nodeAt(path) {
    let s = schema;
    const parts = path.replace(/\[\d*\]/g, '.[]').split('.').filter(Boolean);
    for (let i = 0; i < parts.length; i++) {
      const k = parts[i];
      s = res(s);
      if (k === '[]') {
        const arr = s.anyOf ? s.anyOf.map(res).find(b => b.type === 'array') : s;
        if (!arr || arr.type !== 'array') return null;
        s = arr.items || {};
        continue;
      }
      const {
        props,
        extra
      } = propsOf(s);
      if (props[k]) s = props[k];else if (extra) s = extra;else return null;
    }
    return s;
  }

  // ------------------------------------------------------------------ issues
  const fmt = parts => parts.reduce((acc, k) => typeof k === 'number' ? acc + '[' + k + ']' : acc ? acc + '.' + k : String(k), '');
  const ptr = parts => '/' + parts.map(k => String(k).replace(/~/g, '~0').replace(/\//g, '~1')).join('/');
  const tmpl = parts => fmt(parts).replace(/\[\d+\]/g, '[]');

  /** a template path (series[].x) with the concrete indices of the user's path where the prefixes agree */
  function concrete(templ, userParts) {
    const t = templ.split('.').reduce((acc, seg) => {
      seg.split(/(?=\[\])/).forEach(x => acc.push(x === '[]' ? '[]' : x.replace('[]', '')));
      return acc;
    }, []).filter(Boolean);
    const out = [];
    for (let i = 0; i < t.length; i++) {
      if (t[i] === '[]') out.push(typeof userParts[i] === 'number' ? userParts[i] : 0);else out.push(t[i]);
    }
    return fmt(out);
  }
  function Ctx(options, opts) {
    this.root = options;
    this.opts = opts;
    this.issues = [];
    this.max = opts.maxIssues || 200;
    const ch = options && options.chart;
    this.type = ch && typeof ch.type === 'string' ? ch.type : null;
  }
  Ctx.prototype.add = function (issue) {
    if (this.issues.length >= this.max) return;
    issue.severity = issue.severity || 'error';
    issue.exitCode = issue.severity !== 'error' ? EXIT.ok : issue.kind === 'license_required' ? EXIT.license : EXIT.usage;
    issue.alternatives = issue.alternatives || [];
    if (!('suggestion' in issue)) issue.suggestion = null;
    if (!('fix' in issue)) issue.fix = null;
    if (!issue.hint) issue.hint = null;
    this.issues.push(issue);
  };

  // ------------------------------------------------------------------ suggestions for an unknown key
  function suggestKey(ctx, parts, key, value, parentSchema) {
    const parentT = tmpl(parts);
    const fullT = parentT ? parentT + '.' + key : key;
    const cands = []; // { path, score, why }
    const push = (path, score, why, val) => {
      if (!path) return;
      const n = nodeAt(path);
      if (!n) return;
      if (arguments.length < 4) val = value;
      // values that do not fit the target get a penalty (legend.display: true -> legend.show fits)
      const base = score;
      if (val !== undefined && !fits(n, val) && !(val && typeof val === 'object')) score += 0.35;
      const prev = cands.find(c => c.path === path);
      if (prev) prev.score = Math.min(prev.score, score), prev.base = Math.min(prev.base, base);else cands.push({
        path,
        score,
        base,
        why
      });
    };
    const {
      props
    } = propsOf(parentSchema);
    const sib = Object.keys(props);
    const absolute = t => concrete(t, parts.concat(key));

    // 1. path aliases ('legend.enabled' -> 'legend.show', 'scales.x' -> 'xaxis') and legacy keys
    const pa = PATH_ALIASES[fullT] || LEGACY[fullT];
    if (pa) {
      const tr = pa.value && value !== undefined && String(value) in pa.value ? pa.value[String(value)] : value;
      push(absolute(pa.to || pa), 0.01, 'alias', tr);
    }
    // a foreign container (plugins: { legend }, layout: { padding }, elements: { point }): its children tell
    if (!pa && value && typeof value === 'object' && !Array.isArray(value)) {
      Object.keys(value).forEach((sub, i) => {
        const ca = PATH_ALIASES[fullT + '.' + sub];
        if (ca) push(absolute(ca.to || ca), 0.015 + i * 0.001, 'alias', null);
      });
    }
    // 2. sibling, same name in another casing / separator
    sib.forEach(k => norm(k) === norm(key) && push(absolute(parentT ? parentT + '.' + k : k), 0.02, 'case'))
    // 3. key aliases, relative to the parent ('enabled' -> 'show') or absolute ('=chart.zoom')
  ;
    (KEY_ALIASES[key] || KEY_ALIASES[norm(key)] || []).forEach((a, i) => {
      const target = a.charAt(0) === '=' ? a.slice(1) : parentT ? parentT + '.' + a : a;
      if (a.charAt(0) === '=' || sib.indexOf(a.split('.')[0]) > -1) push(absolute(target), 0.05 + i * 0.01, 'alias');
    });
    // 4. siblings by spelling
    sib.forEach(k => {
      if (close(key, k)) push(absolute(parentT ? parentT + '.' + k : k), 0.1 + keyScore(key, k), 'spelling');
    });
    // 5. the same (or nearly the same) key elsewhere: a misplaced option
    if (!INDEX) buildIndex();
    const nk = norm(key);
    const hits = (INDEX[nk] || []).slice();
    if (!hits.length && nk.length >= 5) {
      for (const k in INDEX) if (close(nk, k)) INDEX[k].forEach(h => hits.push(Object.assign({
        fuzzy: keyScore(nk, k)
      }, h)));
    }
    const typeBranch = ctx.type ? 'plotOptions.' + (ctx.type === 'boxPlot' ? 'boxPlot' : ctx.type) : null;
    hits.forEach(h => {
      const p = fmt(h.path).replace(/\.\[\]/g, '[]');
      let common = 0;
      while (common < parts.length && common < h.path.length && tmpl([parts[common]]) === tmpl([h.path[common]]).replace(/^\[\]$/, '[]')) common++;
      let score = 0.6 + (h.fuzzy || 0) + h.path.length * 0.02 - common * 0.05;
      if (typeBranch && p.indexOf(typeBranch + '.') === 0) score = h.fuzzy ? score - 0.25 : 0.12 + h.path.length * 0.01;else if (h.path[0] === 'plotOptions' && typeBranch && p.indexOf(typeBranch) !== 0) score += 0.15;
      push(absolute(p), score, 'moved');
    });
    cands.sort((a, b) => a.score - b.score);
    return cands;
  }

  // ------------------------------------------------------------------ walking
  function walk(ctx, v, s, parts) {
    if (v === undefined) return;
    s = res(s);
    if (s.deprecated) {
      ctx.add({
        kind: 'deprecated',
        severity: 'warning',
        path: fmt(parts),
        pointer: ptr(parts),
        message: `${fmt(parts)} is deprecated.` + (s['x-wcc-deprecated'] ? ' ' + s['x-wcc-deprecated'] : '')
      });
    }
    if (s.allOf) {
      // intersections: check the shape once against the merged properties
      if (v && typeof v === 'object' && !Array.isArray(v)) return object(ctx, v, s, parts);
      return s.allOf.forEach(b => walk(ctx, v, b, parts));
    }
    if (s.anyOf) return anyOf(ctx, v, s, parts);
    if (!fits(s, v)) return mismatch(ctx, v, s, parts);
    if (s.type === 'object' && v && typeof v === 'object') return object(ctx, v, s, parts);
    if (s.type === 'array' && Array.isArray(v)) return array(ctx, v, s, parts);
    if (typeof v === 'number' && !isFinite(v) && s.type === 'number') {
      ctx.add({
        kind: 'invalid_value',
        path: fmt(parts),
        pointer: ptr(parts),
        message: `${fmt(parts)} is ${v}; a finite number is expected.`,
        hint: 'Use a finite number (or null for a gap).'
      });
    }
  }
  function anyOf(ctx, v, s, parts) {
    const branches = s.anyOf.map(res);
    const ok = branches.filter(b => fits(b, v));
    if (!ok.length) return mismatch(ctx, v, s, parts);
    if (ok.length === 1) return walk(ctx, v, ok[0], parts);
    // several fit: an object or array -> the branch with the fewest issues
    if (v && typeof v === 'object') {
      let best = null;
      for (let i = 0; i < ok.length; i++) {
        const trial = new Ctx(ctx.root, ctx.opts);
        trial.type = ctx.type;
        trial.max = 50;
        walk(trial, v, ok[i], parts);
        const err = trial.issues.filter(x => x.severity === 'error').length * 10 + trial.issues.length;
        if (!best || err < best.err) best = {
          err,
          issues: trial.issues
        };
        if (!err) break;
      }
      best.issues.forEach(x => ctx.issues.length < ctx.max && ctx.issues.push(x));
    }
  }
  function array(ctx, v, s, parts) {
    if (s.prefixItems) {
      v.forEach((x, i) => walk(ctx, x, s.prefixItems[i] || s.items || {}, parts.concat(i)));
      return;
    }
    if (!s.items) return;
    const n = Math.min(v.length, 2000);
    const before = ctx.issues.length;
    for (let i = 0; i < n; i++) {
      walk(ctx, v[i], s.items, parts.concat(i));
      // one broken data array: report the first few elements only
      if (ctx.issues.length - before >= 5) break;
    }
  }
  function object(ctx, v, s, parts) {
    const {
      props,
      open,
      extra
    } = propsOf(s);
    const keys = Object.keys(v);
    for (let i = 0; i < keys.length; i++) {
      const k = keys[i];
      const sub = parts.concat(k);
      if (props[k]) {
        walk(ctx, v[k], props[k], sub);
        if (!parts.length && k === 'plotOptions') license(ctx, v[k]);
        continue;
      }
      if (extra) {
        walk(ctx, v[k], extra, sub);
        continue;
      }
      unknown(ctx, v, k, s, parts, open);
    }
    if (!parts.length) {
      const ch = v.chart;
      if (ch && PREMIUM_TYPES.indexOf(ch.type) > -1) licenseFor(ctx, ['chart', 'type'], ch.type);
    }
  }
  function unknown(ctx, obj, k, s, parts, open) {
    const val = obj[k];
    const cands = suggestKey(ctx, parts, k, val, s);
    const where = fmt(parts);
    const path = fmt(parts.concat(k));
    const legacy = LEGACY[tmpl(parts.concat(k))];
    // open objects (index signatures: series items, wcc, drilldown): only near misses are reported
    if (open) {
      // a key that exists under the same name elsewhere is a move, not a typo; open objects may carry it
      const leaf = q => String(q).replace(/\[\d+\]/g, '').split('.').pop();
      const near = cands.filter(c => c.why !== 'moved' && c.base < 0.5 && leaf(c.path) !== k);
      if (!near.length) return;
      cands.length = 0;
      near.forEach(c => cands.push(c));
    }
    const best = cands[0];
    const issue = {
      kind: legacy ? 'deprecated' : 'unknown_option',
      severity: open ? 'warning' : 'error',
      path,
      pointer: ptr(parts.concat(k)),
      message: legacy ? `${path} is an option of older ApexCharts versions and has no effect here.` : `Unknown option "${k}"${where ? ' in ' + where : ' at the top level'}.`,
      suggestion: best ? best.path : null,
      alternatives: cands.slice(1, 4).map(c => c.path)
    };
    if (best) {
      issue.hint = (legacy && legacy.note ? legacy.note + ' ' : '') + `Did you mean ${best.path}?`;
      const n = nodeAt(best.path);
      const tr = legacy && legacy.value || (PATH_ALIASES[tmpl(parts.concat(k))] || {}).value;
      if (tr && typeof tr === 'object' && val in tr) {
        issue.fix = {
          op: 'rename',
          from: path,
          to: best.path,
          value: tr[val]
        };
        issue.hint += ` (value ${JSON.stringify(tr[val])})`;
      } else if (n && (fits(n, val) || val && typeof val === 'object')) issue.fix = {
        op: 'rename',
        from: path,
        to: best.path
      };else if (n) issue.hint += ` It takes ${describeType(n)}.`;
    } else {
      const {
        props
      } = propsOf(s);
      const names = Object.keys(props);
      issue.hint = names.length ? `Known options${where ? ' of ' + where : ''}: ${names.slice(0, 40).join(', ')}${names.length > 40 ? ', ...' : ''}.` : null;
      issue.fix = {
        op: 'remove',
        path
      };
    }
    ctx.add(issue);
  }
  function mismatch(ctx, v, s, parts) {
    const path = fmt(parts);
    const t = jsType(v);
    const branches = s.anyOf ? s.anyOf.map(res) : [s];
    // same JS type but not an allowed value -> invalid_value with the closest allowed value
    const values = [];
    branches.forEach(b => {
      if ('const' in b) values.push(b.const);
      if (b.enum) b.enum.forEach(e => values.push(e));
    });
    const sameType = branches.some(b => 'const' in b && typeof b.const === t || b.enum && typeof b.enum[0] === t);
    const t1 = tmpl(parts);
    if (sameType && values.length) {
      const va = VALUE_ALIASES[t1 + '=' + v] || VALUE_ALIASES['*=' + v];
      let best = null;
      if (va !== undefined && values.indexOf(va) > -1) best = va;
      if (best === null && t === 'string') {
        let bs = 9;
        values.forEach(x => {
          if (typeof x !== 'string') return;
          const sc = keyScore(v, x);
          if (sc < bs && (sc <= 0.4 || norm(v) === norm(x))) bs = sc, best = x;
        });
      }
      const list = values.map(x => JSON.stringify(x)).join(', ');
      ctx.add({
        kind: 'invalid_value',
        path,
        pointer: ptr(parts),
        message: `${path} is ${JSON.stringify(v)}; allowed: ${list}.`,
        hint: best !== null ? `Did you mean ${JSON.stringify(best)}?` : `Use one of ${list}.`,
        suggestion: best,
        fix: best !== null ? {
          op: 'set',
          path,
          value: best
        } : null,
        alternatives: values.filter(x => x !== best).slice(0, 3)
      });
      if (parts.length === 2 && parts[0] === 'chart' && parts[1] === 'type' && PREMIUM_TYPES.indexOf(best) > -1) licenseFor(ctx, parts, best);
      return;
    }
    const expected = describeType(s);
    const issue = {
      kind: 'type_mismatch',
      path,
      pointer: ptr(parts),
      message: `${path} is ${t === 'object' ? 'an object' : t === 'array' ? 'an array' : 'a ' + t}; expected ${expected}.`
    };
    const th = TYPE_HINTS[t1];
    if (th) issue.hint = th;
    // obvious coercions
    const wants = ty => branches.some(b => b.type === ty);
    if (t === 'string' && wants('number') && v.trim() !== '' && isFinite(+v)) issue.fix = {
      op: 'set',
      path,
      value: +v
    };else if (t === 'string' && wants('boolean') && (v === 'true' || v === 'false')) issue.fix = {
      op: 'set',
      path,
      value: v === 'true'
    };else if (t === 'number' && wants('string')) issue.fix = {
      op: 'set',
      path,
      value: String(v)
    };else if (t !== 'array' && wants('array')) {
      const arr = branches.find(b => b.type === 'array');
      if (fits(arr.items || {}, v)) issue.fix = {
        op: 'set',
        path,
        value: [v]
      };
    } else if (t === 'boolean' && branches.some(b => b.type === 'object')) {
      const ps = branches.map(b => propsOf(b).props).find(p => p.show || p.enabled);
      if (ps) {
        const key = ps.enabled ? 'enabled' : 'show';
        issue.fix = {
          op: 'set',
          path,
          value: {
            [key]: v
          }
        };
        issue.hint = issue.hint || `Use { ${key}: ${v} }.`;
      }
    }
    if (!issue.hint && issue.fix) issue.hint = `Use ${JSON.stringify(issue.fix.value)}.`;
    if (issue.fix) issue.suggestion = issue.fix.value;
    ctx.add(issue);
  }

  // ------------------------------------------------------------------ licence
  function license(ctx, po) {
    if (!po || typeof po !== 'object') return;
    PREMIUM_TYPES.forEach(t => {
      if (po[t] && typeof po[t] === 'object' && Object.keys(po[t]).length && (!ctx.type || ctx.type !== t)) licenseFor(ctx, ['plotOptions', t], t, true);
    });
  }
  function licenseFor(ctx, parts, type, soft) {
    if (ctx.opts.premium !== false) return;
    if (ctx.licensed && ctx.licensed[type]) return;
    (ctx.licensed = ctx.licensed || {})[type] = 1;
    ctx.add({
      kind: 'license_required',
      severity: soft ? 'warning' : 'error',
      path: fmt(parts),
      pointer: ptr(parts),
      message: `"${type}" is a premium chart type (west-coast-charts/premium, commercial licence).`,
      hint: `Install west-coast-charts/premium and set chart.licenseKey; a 30-day trial key: ${LICENSE_URL}`,
      suggestion: LICENSE_URL
    });
  }

  // ------------------------------------------------------------------ public
  /**
   * validate(options, { premium?, maxIssues?, schema? })
   *   premium: true = premium is available, false = it is not (license_required issues),
   *            undefined = do not check the licence
   * -> { ok, errors, warnings, exitCode, schemaVersion, issues }
   */
  function validate(options, opts) {
    opts = opts || {};
    if (opts.schema && opts.schema !== schema) {
      schema = opts.schema;
      INDEX = null;
    }
    const ctx = new Ctx(options || {}, opts);
    if (options === null || typeof options !== 'object' || Array.isArray(options)) {
      ctx.add({
        kind: 'type_mismatch',
        path: '',
        pointer: '',
        message: 'The options must be an object.',
        hint: 'new WestCoastCharts(el, { chart: { type: "line" }, series: [...] })'
      });
    } else {
      try {
        walk(ctx, options, schema, []);
      } catch (e) {
        return {
          ok: false,
          errors: 1,
          warnings: 0,
          exitCode: EXIT.internal,
          schemaVersion: schema['x-wcc-version'],
          issues: [],
          error: String(e && e.message || e)
        };
      }
    }
    const errors = ctx.issues.filter(i => i.severity === 'error').length;
    return {
      ok: errors === 0,
      errors,
      warnings: ctx.issues.length - errors,
      exitCode: exitCodeOf(ctx.issues),
      schemaVersion: schema['x-wcc-version'],
      issues: ctx.issues
    };
  }

  /** the CLI exit code of a list of issues: 4 (licence) before 2 (schema/usage) before 0 */
  function exitCodeOf(issues) {
    if (issues && !Array.isArray(issues)) issues = issues.issues;
    let code = EXIT.ok;
    (issues || []).forEach(i => {
      if (i.exitCode === EXIT.license) code = EXIT.license;else if (i.exitCode === EXIT.usage && code !== EXIT.license) code = EXIT.usage;
    });
    return code;
  }

  /** apply the fixes of the issues to a deep copy of options (agents: validate -> applyFixes -> validate) */
  function applyFixes(options, issues) {
    const out = JSON.parse(JSON.stringify(options, (k, v) => typeof v === 'function' ? undefined : v));
    const keep = [];
    // functions are dropped by the JSON copy: put them back
    const restore = (src, dst) => {
      if (!src || typeof src !== 'object' || !dst) return;
      Object.keys(src).forEach(k => {
        if (typeof src[k] === 'function') dst[k] = src[k];else restore(src[k], dst[k]);
      });
    };
    restore(options, out);
    const split = p => p.replace(/\[(\d+)\]/g, '.$1').split('.').filter(Boolean).map(x => /^\d+$/.test(x) ? +x : x);
    const get = (o, ps) => ps.reduce((a, k) => a == null ? a : a[k], o);
    const set = (o, ps, val) => {
      let a = o;
      for (let i = 0; i < ps.length - 1; i++) {
        if (a[ps[i]] == null || typeof a[ps[i]] !== 'object') a[ps[i]] = typeof ps[i + 1] === 'number' ? [] : {};
        a = a[ps[i]];
      }
      a[ps[ps.length - 1]] = val;
    };
    const del = (o, ps) => {
      const parent = get(o, ps.slice(0, -1));
      if (parent && typeof parent === 'object') delete parent[ps[ps.length - 1]];
    };
    (issues || []).forEach(i => {
      const f = i.fix;
      if (!f) return keep.push(i);
      if (f.op === 'set') set(out, split(f.path), f.value);else if (f.op === 'remove') del(out, split(f.path));else if (f.op === 'rename') {
        const from = split(f.from);
        const val = 'value' in f ? f.value : get(out, from);
        del(out, from);
        const to = split(f.to);
        const cur = get(out, to);
        set(out, to, cur && typeof cur === 'object' && val && typeof val === 'object' && !Array.isArray(val) ? Object.assign({}, cur, val) : val);
      }
    });
    return out;
  }

  /** the compact schema node of a path ('plotOptions.radialColumn.aggregate'), or null */
  function schemaAt(path) {
    return nodeAt(path);
  }

  /*
   * West Coast Charts - validator plugin (west-coast-charts/agent/validate).
   *   import validatePlugin, { validate } from 'west-coast-charts/agent/validate'
   *   WestCoastCharts.use(validatePlugin)          // or <script src="dist/agent/validate.js"> after the core
   *   WestCoastCharts.validate(options)            // static, same result as validate()
   *   new WestCoastCharts(el, { chart: { validate: 'warn' | 'error' | 'off' }, ... })
   * 'warn' (default once installed): one console.warn per chart with every issue;
   * 'error': also console.error, and render() rejects with an Error carrying .issues;
   * updateOptions() objects are checked the same way.
   * The core does not ship any of this: without the module nothing is checked.
   * Copyright (c) 2026 West Coast Software - MIT License
   */
  const PREMIUM = 'west-coast-charts/premium';
  let lib = null;
  const premiumOf = WCC => !!(WCC && WCC._wccPlugins && WCC._wccPlugins.some(p => p && p.name === PREMIUM));

  /** validate() with the licence state of the page's library (premium installed or not) */
  function validateHere(options, opts) {
    const o = Object.assign({}, opts);
    if (!('premium' in o) && lib) o.premium = premiumOf(lib);
    return validate(options, o);
  }
  function format(result, title) {
    const lines = result.issues.map(i => `  ${i.severity === 'error' ? '✖' : '⚠'} ${i.kind} ${i.path || '(options)'}: ${i.message}${i.hint ? ' ' + i.hint : ''}`);
    return `${title || 'WestCoastCharts options'}: ${result.errors} error(s), ${result.warnings} warning(s)\n${lines.join('\n')}`;
  }
  function mode(ctx, opts) {
    const ch = opts && opts.chart || ctx.opts && ctx.opts.chart || {};
    const m = ch.validate || lib && lib.validateMode || 'warn';
    return m === 'error' || m === 'off' ? m : 'warn';
  }
  function check(ctx, options, title) {
    const m = mode(ctx, options === ctx.opts ? null : ctx.opts);
    if (m === 'off' || !options || typeof options !== 'object') return null;
    const r = validateHere(options);
    if (!r.issues.length) return r;
    const id = ctx.opts && ctx.opts.chart && ctx.opts.chart.id || ctx.el && ctx.el.id || '';
    const text = format(r, (title || 'WestCoastCharts options') + (id ? ` (#${id})` : ''));
    if (typeof console !== 'undefined') {
      if (m === 'error' && r.errors) console.error(text);else console.warn(text);
    }
    if (m === 'error' && r.errors) {
      const err = new Error(text);
      err.code = 'WCC_INVALID_OPTIONS';
      err.issues = r.issues;
      err.exitCode = r.exitCode;
      ctx._wccValidation = err;
      // render() rejects; the chart is not drawn with options known to be wrong
      ctx.render = () => Promise.reject(err);
    }
    return r;
  }
  const plugin = {
    name: 'west-coast-charts/agent/validate',
    install(WCC, hook) {
      // Fail before registering any handlers/statics or retaining the library.
      // Older cores validate their already-normalized options at init instead.
      if (!hook.core || hook.core.validationInput !== 1) {
        throw new Error('WestCoastCharts validator needs the original-input validation protocol. Update Core and agent/validate together to matching releases.');
      }
      lib = WCC;
      hook.static('validate', validateHere);
      hook.static('applyFixes', applyFixes);
      if (!('validateMode' in WCC)) hook.static('validateMode', 'warn');
      hook.on('validateInput', (ctx, input) => check(ctx, input));
      hook.on('beforeUpdate', (ctx, ch) => {
        if (ch && ch.kind === 'options') check(ctx, ch.value, 'WestCoastCharts updateOptions()');
      });
    }
  };

  /*
   * west-coast-charts/agent/validate as a side-effect / script-tag entry:
   * installs itself into the core on the page (or waits for it).
   * Copyright (c) 2026 West Coast Software - MIT License
   */
  autoInstall(plugin);
  plugin.validate = validate;
  plugin.exitCodeOf = exitCodeOf;
  plugin.applyFixes = applyFixes;
  plugin.schemaAt = schemaAt;
  plugin.format = format;
  plugin.EXIT = EXIT;
  plugin.KINDS = KINDS;
  plugin.LICENSE_URL = LICENSE_URL;

  return plugin;

}));
