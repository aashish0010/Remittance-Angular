import {
  NgxEchartsDirective
} from "./chunk-SIY2OY4I.js";
import {
  SeoService
} from "./chunk-6TDC4W4Q.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-ZQKQC2T6.js";
import {
  NotificationService
} from "./chunk-3AICMGEY.js";
import "./chunk-TLG473HR.js";
import {
  ApiService
} from "./chunk-JPFLOAIK.js";
import {
  AuthStateService
} from "./chunk-LDWTK5YJ.js";
import "./chunk-R63TWOS6.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-WBW3ZP3W.js";
import {
  ChangeDetectorRef,
  Component,
  Directive,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  KeyValueDiffers,
  OutputEmitterRef,
  TemplateRef,
  Type,
  ViewContainerRef,
  computed,
  effect,
  inject,
  reflectComponentType,
  runInInjectionContext,
  setClassMetadata,
  signal,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-EU7HC72Q.js";
import {
  __objRest,
  __restKey,
  __spreadProps,
  __spreadValues
} from "./chunk-S5KMCARS.js";

// node_modules/@tanstack/table-core/build/lib/index.mjs
function createColumnHelper() {
  return {
    accessor: (accessor, column) => {
      return typeof accessor === "function" ? __spreadProps(__spreadValues({}, column), {
        accessorFn: accessor
      }) : __spreadProps(__spreadValues({}, column), {
        accessorKey: accessor
      });
    },
    display: (column) => column,
    group: (column) => column
  };
}
function functionalUpdate(updater, input) {
  return typeof updater === "function" ? updater(input) : updater;
}
function makeStateUpdater(key, instance) {
  return (updater) => {
    instance.setState((old) => {
      return __spreadProps(__spreadValues({}, old), {
        [key]: functionalUpdate(updater, old[key])
      });
    });
  };
}
function isFunction(d) {
  return d instanceof Function;
}
function isNumberArray(d) {
  return Array.isArray(d) && d.every((val) => typeof val === "number");
}
function flattenBy(arr, getChildren) {
  const flat = [];
  const recurse = (subArr) => {
    subArr.forEach((item) => {
      flat.push(item);
      const children = getChildren(item);
      if (children != null && children.length) {
        recurse(children);
      }
    });
  };
  recurse(arr);
  return flat;
}
function memo(getDeps, fn, opts) {
  let deps = [];
  let result;
  return (depArgs) => {
    let depTime;
    if (opts.key && opts.debug) depTime = Date.now();
    const newDeps = getDeps(depArgs);
    const depsChanged = newDeps.length !== deps.length || newDeps.some((dep, index) => deps[index] !== dep);
    if (!depsChanged) {
      return result;
    }
    deps = newDeps;
    let resultTime;
    if (opts.key && opts.debug) resultTime = Date.now();
    result = fn(...newDeps);
    opts == null || opts.onChange == null || opts.onChange(result);
    if (opts.key && opts.debug) {
      if (opts != null && opts.debug()) {
        const depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
        const resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
        const resultFpsPercentage = resultEndTime / 16;
        const pad = (str, num) => {
          str = String(str);
          while (str.length < num) {
            str = " " + str;
          }
          return str;
        };
        console.info(`%c\u23F1 ${pad(resultEndTime, 5)} /${pad(depEndTime, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * resultFpsPercentage, 120))}deg 100% 31%);`, opts == null ? void 0 : opts.key);
      }
    }
    return result;
  };
}
function getMemoOptions(tableOptions, debugLevel, key, onChange) {
  return {
    debug: () => {
      var _tableOptions$debugAl;
      return (_tableOptions$debugAl = tableOptions == null ? void 0 : tableOptions.debugAll) != null ? _tableOptions$debugAl : tableOptions[debugLevel];
    },
    key,
    onChange
  };
}
function createCell(table, row, column, columnId) {
  const getRenderValue = () => {
    var _cell$getValue;
    return (_cell$getValue = cell.getValue()) != null ? _cell$getValue : table.options.renderFallbackValue;
  };
  const cell = {
    id: `${row.id}_${column.id}`,
    row,
    column,
    getValue: () => row.getValue(columnId),
    renderValue: getRenderValue,
    getContext: memo(() => [table, column, row, cell], (table2, column2, row2, cell2) => ({
      table: table2,
      column: column2,
      row: row2,
      cell: cell2,
      getValue: cell2.getValue,
      renderValue: cell2.renderValue
    }), getMemoOptions(table.options, "debugCells", "cell.getContext"))
  };
  table._features.forEach((feature) => {
    feature.createCell == null || feature.createCell(cell, column, row, table);
  }, {});
  return cell;
}
function createColumn(table, columnDef, depth, parent) {
  var _ref, _resolvedColumnDef$id;
  const defaultColumn = table._getDefaultColumnDef();
  const resolvedColumnDef = __spreadValues(__spreadValues({}, defaultColumn), columnDef);
  const accessorKey = resolvedColumnDef.accessorKey;
  let id = (_ref = (_resolvedColumnDef$id = resolvedColumnDef.id) != null ? _resolvedColumnDef$id : accessorKey ? typeof String.prototype.replaceAll === "function" ? accessorKey.replaceAll(".", "_") : accessorKey.replace(/\./g, "_") : void 0) != null ? _ref : typeof resolvedColumnDef.header === "string" ? resolvedColumnDef.header : void 0;
  let accessorFn;
  if (resolvedColumnDef.accessorFn) {
    accessorFn = resolvedColumnDef.accessorFn;
  } else if (accessorKey) {
    if (accessorKey.includes(".")) {
      accessorFn = (originalRow) => {
        let result = originalRow;
        for (const key of accessorKey.split(".")) {
          var _result;
          result = (_result = result) == null ? void 0 : _result[key];
          if (result === void 0) {
            console.warn(`"${key}" in deeply nested key "${accessorKey}" returned undefined.`);
          }
        }
        return result;
      };
    } else {
      accessorFn = (originalRow) => originalRow[resolvedColumnDef.accessorKey];
    }
  }
  if (!id) {
    if (true) {
      throw new Error(resolvedColumnDef.accessorFn ? `Columns require an id when using an accessorFn` : `Columns require an id when using a non-string header`);
    }
    throw new Error();
  }
  let column = {
    id: `${String(id)}`,
    accessorFn,
    parent,
    depth,
    columnDef: resolvedColumnDef,
    columns: [],
    getFlatColumns: memo(() => [true], () => {
      var _column$columns;
      return [column, ...(_column$columns = column.columns) == null ? void 0 : _column$columns.flatMap((d) => d.getFlatColumns())];
    }, getMemoOptions(table.options, "debugColumns", "column.getFlatColumns")),
    getLeafColumns: memo(() => [table._getOrderColumnsFn()], (orderColumns2) => {
      var _column$columns2;
      if ((_column$columns2 = column.columns) != null && _column$columns2.length) {
        let leafColumns = column.columns.flatMap((column2) => column2.getLeafColumns());
        return orderColumns2(leafColumns);
      }
      return [column];
    }, getMemoOptions(table.options, "debugColumns", "column.getLeafColumns"))
  };
  for (const feature of table._features) {
    feature.createColumn == null || feature.createColumn(column, table);
  }
  return column;
}
var debug = "debugHeaders";
function createHeader(table, column, options) {
  var _options$id;
  const id = (_options$id = options.id) != null ? _options$id : column.id;
  let header = {
    id,
    column,
    index: options.index,
    isPlaceholder: !!options.isPlaceholder,
    placeholderId: options.placeholderId,
    depth: options.depth,
    subHeaders: [],
    colSpan: 0,
    rowSpan: 0,
    headerGroup: null,
    getLeafHeaders: () => {
      const leafHeaders = [];
      const recurseHeader = (h) => {
        if (h.subHeaders && h.subHeaders.length) {
          h.subHeaders.map(recurseHeader);
        }
        leafHeaders.push(h);
      };
      recurseHeader(header);
      return leafHeaders;
    },
    getContext: () => ({
      table,
      header,
      column
    })
  };
  table._features.forEach((feature) => {
    feature.createHeader == null || feature.createHeader(header, table);
  });
  return header;
}
var Headers = {
  createTable: (table) => {
    table.getHeaderGroups = memo(() => [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.left, table.getState().columnPinning.right], (allColumns, leafColumns, left, right) => {
      var _left$map$filter, _right$map$filter;
      const leftColumns = (_left$map$filter = left == null ? void 0 : left.map((columnId) => leafColumns.find((d) => d.id === columnId)).filter(Boolean)) != null ? _left$map$filter : [];
      const rightColumns = (_right$map$filter = right == null ? void 0 : right.map((columnId) => leafColumns.find((d) => d.id === columnId)).filter(Boolean)) != null ? _right$map$filter : [];
      const centerColumns = leafColumns.filter((column) => !(left != null && left.includes(column.id)) && !(right != null && right.includes(column.id)));
      const headerGroups = buildHeaderGroups(allColumns, [...leftColumns, ...centerColumns, ...rightColumns], table);
      return headerGroups;
    }, getMemoOptions(table.options, debug, "getHeaderGroups"));
    table.getCenterHeaderGroups = memo(() => [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.left, table.getState().columnPinning.right], (allColumns, leafColumns, left, right) => {
      leafColumns = leafColumns.filter((column) => !(left != null && left.includes(column.id)) && !(right != null && right.includes(column.id)));
      return buildHeaderGroups(allColumns, leafColumns, table, "center");
    }, getMemoOptions(table.options, debug, "getCenterHeaderGroups"));
    table.getLeftHeaderGroups = memo(() => [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.left], (allColumns, leafColumns, left) => {
      var _left$map$filter2;
      const orderedLeafColumns = (_left$map$filter2 = left == null ? void 0 : left.map((columnId) => leafColumns.find((d) => d.id === columnId)).filter(Boolean)) != null ? _left$map$filter2 : [];
      return buildHeaderGroups(allColumns, orderedLeafColumns, table, "left");
    }, getMemoOptions(table.options, debug, "getLeftHeaderGroups"));
    table.getRightHeaderGroups = memo(() => [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.right], (allColumns, leafColumns, right) => {
      var _right$map$filter2;
      const orderedLeafColumns = (_right$map$filter2 = right == null ? void 0 : right.map((columnId) => leafColumns.find((d) => d.id === columnId)).filter(Boolean)) != null ? _right$map$filter2 : [];
      return buildHeaderGroups(allColumns, orderedLeafColumns, table, "right");
    }, getMemoOptions(table.options, debug, "getRightHeaderGroups"));
    table.getFooterGroups = memo(() => [table.getHeaderGroups()], (headerGroups) => {
      return [...headerGroups].reverse();
    }, getMemoOptions(table.options, debug, "getFooterGroups"));
    table.getLeftFooterGroups = memo(() => [table.getLeftHeaderGroups()], (headerGroups) => {
      return [...headerGroups].reverse();
    }, getMemoOptions(table.options, debug, "getLeftFooterGroups"));
    table.getCenterFooterGroups = memo(() => [table.getCenterHeaderGroups()], (headerGroups) => {
      return [...headerGroups].reverse();
    }, getMemoOptions(table.options, debug, "getCenterFooterGroups"));
    table.getRightFooterGroups = memo(() => [table.getRightHeaderGroups()], (headerGroups) => {
      return [...headerGroups].reverse();
    }, getMemoOptions(table.options, debug, "getRightFooterGroups"));
    table.getFlatHeaders = memo(() => [table.getHeaderGroups()], (headerGroups) => {
      return headerGroups.map((headerGroup) => {
        return headerGroup.headers;
      }).flat();
    }, getMemoOptions(table.options, debug, "getFlatHeaders"));
    table.getLeftFlatHeaders = memo(() => [table.getLeftHeaderGroups()], (left) => {
      return left.map((headerGroup) => {
        return headerGroup.headers;
      }).flat();
    }, getMemoOptions(table.options, debug, "getLeftFlatHeaders"));
    table.getCenterFlatHeaders = memo(() => [table.getCenterHeaderGroups()], (left) => {
      return left.map((headerGroup) => {
        return headerGroup.headers;
      }).flat();
    }, getMemoOptions(table.options, debug, "getCenterFlatHeaders"));
    table.getRightFlatHeaders = memo(() => [table.getRightHeaderGroups()], (left) => {
      return left.map((headerGroup) => {
        return headerGroup.headers;
      }).flat();
    }, getMemoOptions(table.options, debug, "getRightFlatHeaders"));
    table.getCenterLeafHeaders = memo(() => [table.getCenterFlatHeaders()], (flatHeaders) => {
      return flatHeaders.filter((header) => {
        var _header$subHeaders;
        return !((_header$subHeaders = header.subHeaders) != null && _header$subHeaders.length);
      });
    }, getMemoOptions(table.options, debug, "getCenterLeafHeaders"));
    table.getLeftLeafHeaders = memo(() => [table.getLeftFlatHeaders()], (flatHeaders) => {
      return flatHeaders.filter((header) => {
        var _header$subHeaders2;
        return !((_header$subHeaders2 = header.subHeaders) != null && _header$subHeaders2.length);
      });
    }, getMemoOptions(table.options, debug, "getLeftLeafHeaders"));
    table.getRightLeafHeaders = memo(() => [table.getRightFlatHeaders()], (flatHeaders) => {
      return flatHeaders.filter((header) => {
        var _header$subHeaders3;
        return !((_header$subHeaders3 = header.subHeaders) != null && _header$subHeaders3.length);
      });
    }, getMemoOptions(table.options, debug, "getRightLeafHeaders"));
    table.getLeafHeaders = memo(() => [table.getLeftHeaderGroups(), table.getCenterHeaderGroups(), table.getRightHeaderGroups()], (left, center, right) => {
      var _left$0$headers, _left$, _center$0$headers, _center$, _right$0$headers, _right$;
      return [...(_left$0$headers = (_left$ = left[0]) == null ? void 0 : _left$.headers) != null ? _left$0$headers : [], ...(_center$0$headers = (_center$ = center[0]) == null ? void 0 : _center$.headers) != null ? _center$0$headers : [], ...(_right$0$headers = (_right$ = right[0]) == null ? void 0 : _right$.headers) != null ? _right$0$headers : []].map((header) => {
        return header.getLeafHeaders();
      }).flat();
    }, getMemoOptions(table.options, debug, "getLeafHeaders"));
  }
};
function buildHeaderGroups(allColumns, columnsToGroup, table, headerFamily) {
  var _headerGroups$0$heade, _headerGroups$;
  let maxDepth = 0;
  const findMaxDepth = function(columns, depth) {
    if (depth === void 0) {
      depth = 1;
    }
    maxDepth = Math.max(maxDepth, depth);
    columns.filter((column) => column.getIsVisible()).forEach((column) => {
      var _column$columns;
      if ((_column$columns = column.columns) != null && _column$columns.length) {
        findMaxDepth(column.columns, depth + 1);
      }
    }, 0);
  };
  findMaxDepth(allColumns);
  let headerGroups = [];
  const createHeaderGroup = (headersToGroup, depth) => {
    const headerGroup = {
      depth,
      id: [headerFamily, `${depth}`].filter(Boolean).join("_"),
      headers: []
    };
    const pendingParentHeaders = [];
    headersToGroup.forEach((headerToGroup) => {
      const latestPendingParentHeader = [...pendingParentHeaders].reverse()[0];
      const isLeafHeader = headerToGroup.column.depth === headerGroup.depth;
      let column;
      let isPlaceholder = false;
      if (isLeafHeader && headerToGroup.column.parent) {
        column = headerToGroup.column.parent;
      } else {
        column = headerToGroup.column;
        isPlaceholder = true;
      }
      if (latestPendingParentHeader && (latestPendingParentHeader == null ? void 0 : latestPendingParentHeader.column) === column) {
        latestPendingParentHeader.subHeaders.push(headerToGroup);
      } else {
        const header = createHeader(table, column, {
          id: [headerFamily, depth, column.id, headerToGroup == null ? void 0 : headerToGroup.id].filter(Boolean).join("_"),
          isPlaceholder,
          placeholderId: isPlaceholder ? `${pendingParentHeaders.filter((d) => d.column === column).length}` : void 0,
          depth,
          index: pendingParentHeaders.length
        });
        header.subHeaders.push(headerToGroup);
        pendingParentHeaders.push(header);
      }
      headerGroup.headers.push(headerToGroup);
      headerToGroup.headerGroup = headerGroup;
    });
    headerGroups.push(headerGroup);
    if (depth > 0) {
      createHeaderGroup(pendingParentHeaders, depth - 1);
    }
  };
  const bottomHeaders = columnsToGroup.map((column, index) => createHeader(table, column, {
    depth: maxDepth,
    index
  }));
  createHeaderGroup(bottomHeaders, maxDepth - 1);
  headerGroups.reverse();
  const recurseHeadersForSpans = (headers) => {
    const filteredHeaders = headers.filter((header) => header.column.getIsVisible());
    return filteredHeaders.map((header) => {
      let colSpan = 0;
      let rowSpan = 0;
      let childRowSpans = [0];
      if (header.subHeaders && header.subHeaders.length) {
        childRowSpans = [];
        recurseHeadersForSpans(header.subHeaders).forEach((_ref) => {
          let {
            colSpan: childColSpan,
            rowSpan: childRowSpan
          } = _ref;
          colSpan += childColSpan;
          childRowSpans.push(childRowSpan);
        });
      } else {
        colSpan = 1;
      }
      const minChildRowSpan = Math.min(...childRowSpans);
      rowSpan = rowSpan + minChildRowSpan;
      header.colSpan = colSpan;
      header.rowSpan = rowSpan;
      return {
        colSpan,
        rowSpan
      };
    });
  };
  recurseHeadersForSpans((_headerGroups$0$heade = (_headerGroups$ = headerGroups[0]) == null ? void 0 : _headerGroups$.headers) != null ? _headerGroups$0$heade : []);
  return headerGroups;
}
var createRow = (table, id, original, rowIndex, depth, subRows, parentId) => {
  let row = {
    id,
    index: rowIndex,
    original,
    depth,
    parentId,
    _valuesCache: {},
    _uniqueValuesCache: {},
    getValue: (columnId) => {
      if (row._valuesCache.hasOwnProperty(columnId)) {
        return row._valuesCache[columnId];
      }
      const column = table.getColumn(columnId);
      if (!(column != null && column.accessorFn)) {
        return void 0;
      }
      row._valuesCache[columnId] = column.accessorFn(row.original, rowIndex);
      return row._valuesCache[columnId];
    },
    getUniqueValues: (columnId) => {
      if (row._uniqueValuesCache.hasOwnProperty(columnId)) {
        return row._uniqueValuesCache[columnId];
      }
      const column = table.getColumn(columnId);
      if (!(column != null && column.accessorFn)) {
        return void 0;
      }
      if (!column.columnDef.getUniqueValues) {
        row._uniqueValuesCache[columnId] = [row.getValue(columnId)];
        return row._uniqueValuesCache[columnId];
      }
      row._uniqueValuesCache[columnId] = column.columnDef.getUniqueValues(row.original, rowIndex);
      return row._uniqueValuesCache[columnId];
    },
    renderValue: (columnId) => {
      var _row$getValue;
      return (_row$getValue = row.getValue(columnId)) != null ? _row$getValue : table.options.renderFallbackValue;
    },
    subRows: subRows != null ? subRows : [],
    getLeafRows: () => flattenBy(row.subRows, (d) => d.subRows),
    getParentRow: () => row.parentId ? table.getRow(row.parentId, true) : void 0,
    getParentRows: () => {
      let parentRows = [];
      let currentRow = row;
      while (true) {
        const parentRow = currentRow.getParentRow();
        if (!parentRow) break;
        parentRows.push(parentRow);
        currentRow = parentRow;
      }
      return parentRows.reverse();
    },
    getAllCells: memo(() => [table.getAllLeafColumns()], (leafColumns) => {
      return leafColumns.map((column) => {
        return createCell(table, row, column, column.id);
      });
    }, getMemoOptions(table.options, "debugRows", "getAllCells")),
    _getAllCellsByColumnId: memo(() => [row.getAllCells()], (allCells) => {
      return allCells.reduce((acc, cell) => {
        acc[cell.column.id] = cell;
        return acc;
      }, {});
    }, getMemoOptions(table.options, "debugRows", "getAllCellsByColumnId"))
  };
  for (let i = 0; i < table._features.length; i++) {
    const feature = table._features[i];
    feature == null || feature.createRow == null || feature.createRow(row, table);
  }
  return row;
};
var ColumnFaceting = {
  createColumn: (column, table) => {
    column._getFacetedRowModel = table.options.getFacetedRowModel && table.options.getFacetedRowModel(table, column.id);
    column.getFacetedRowModel = () => {
      if (!column._getFacetedRowModel) {
        return table.getPreFilteredRowModel();
      }
      return column._getFacetedRowModel();
    };
    column._getFacetedUniqueValues = table.options.getFacetedUniqueValues && table.options.getFacetedUniqueValues(table, column.id);
    column.getFacetedUniqueValues = () => {
      if (!column._getFacetedUniqueValues) {
        return /* @__PURE__ */ new Map();
      }
      return column._getFacetedUniqueValues();
    };
    column._getFacetedMinMaxValues = table.options.getFacetedMinMaxValues && table.options.getFacetedMinMaxValues(table, column.id);
    column.getFacetedMinMaxValues = () => {
      if (!column._getFacetedMinMaxValues) {
        return void 0;
      }
      return column._getFacetedMinMaxValues();
    };
  }
};
var includesString = (row, columnId, filterValue) => {
  var _filterValue$toString, _row$getValue;
  const search = filterValue == null || (_filterValue$toString = filterValue.toString()) == null ? void 0 : _filterValue$toString.toLowerCase();
  return Boolean((_row$getValue = row.getValue(columnId)) == null || (_row$getValue = _row$getValue.toString()) == null || (_row$getValue = _row$getValue.toLowerCase()) == null ? void 0 : _row$getValue.includes(search));
};
includesString.autoRemove = (val) => testFalsey(val);
var includesStringSensitive = (row, columnId, filterValue) => {
  var _row$getValue2;
  return Boolean((_row$getValue2 = row.getValue(columnId)) == null || (_row$getValue2 = _row$getValue2.toString()) == null ? void 0 : _row$getValue2.includes(filterValue));
};
includesStringSensitive.autoRemove = (val) => testFalsey(val);
var equalsString = (row, columnId, filterValue) => {
  var _row$getValue3;
  return ((_row$getValue3 = row.getValue(columnId)) == null || (_row$getValue3 = _row$getValue3.toString()) == null ? void 0 : _row$getValue3.toLowerCase()) === (filterValue == null ? void 0 : filterValue.toLowerCase());
};
equalsString.autoRemove = (val) => testFalsey(val);
var arrIncludes = (row, columnId, filterValue) => {
  var _row$getValue4;
  return (_row$getValue4 = row.getValue(columnId)) == null ? void 0 : _row$getValue4.includes(filterValue);
};
arrIncludes.autoRemove = (val) => testFalsey(val);
var arrIncludesAll = (row, columnId, filterValue) => {
  return !filterValue.some((val) => {
    var _row$getValue5;
    return !((_row$getValue5 = row.getValue(columnId)) != null && _row$getValue5.includes(val));
  });
};
arrIncludesAll.autoRemove = (val) => testFalsey(val) || !(val != null && val.length);
var arrIncludesSome = (row, columnId, filterValue) => {
  return filterValue.some((val) => {
    var _row$getValue6;
    return (_row$getValue6 = row.getValue(columnId)) == null ? void 0 : _row$getValue6.includes(val);
  });
};
arrIncludesSome.autoRemove = (val) => testFalsey(val) || !(val != null && val.length);
var equals = (row, columnId, filterValue) => {
  return row.getValue(columnId) === filterValue;
};
equals.autoRemove = (val) => testFalsey(val);
var weakEquals = (row, columnId, filterValue) => {
  return row.getValue(columnId) == filterValue;
};
weakEquals.autoRemove = (val) => testFalsey(val);
var inNumberRange = (row, columnId, filterValue) => {
  let [min2, max2] = filterValue;
  const rowValue = row.getValue(columnId);
  return rowValue >= min2 && rowValue <= max2;
};
inNumberRange.resolveFilterValue = (val) => {
  let [unsafeMin, unsafeMax] = val;
  let parsedMin = typeof unsafeMin !== "number" ? parseFloat(unsafeMin) : unsafeMin;
  let parsedMax = typeof unsafeMax !== "number" ? parseFloat(unsafeMax) : unsafeMax;
  let min2 = unsafeMin === null || Number.isNaN(parsedMin) ? -Infinity : parsedMin;
  let max2 = unsafeMax === null || Number.isNaN(parsedMax) ? Infinity : parsedMax;
  if (min2 > max2) {
    const temp = min2;
    min2 = max2;
    max2 = temp;
  }
  return [min2, max2];
};
inNumberRange.autoRemove = (val) => testFalsey(val) || testFalsey(val[0]) && testFalsey(val[1]);
var filterFns = {
  includesString,
  includesStringSensitive,
  equalsString,
  arrIncludes,
  arrIncludesAll,
  arrIncludesSome,
  equals,
  weakEquals,
  inNumberRange
};
function testFalsey(val) {
  return val === void 0 || val === null || val === "";
}
var ColumnFiltering = {
  getDefaultColumnDef: () => {
    return {
      filterFn: "auto"
    };
  },
  getInitialState: (state) => {
    return __spreadValues({
      columnFilters: []
    }, state);
  },
  getDefaultOptions: (table) => {
    return {
      onColumnFiltersChange: makeStateUpdater("columnFilters", table),
      filterFromLeafRows: false,
      maxLeafRowFilterDepth: 100
    };
  },
  createColumn: (column, table) => {
    column.getAutoFilterFn = () => {
      const firstRow = table.getCoreRowModel().flatRows[0];
      const value = firstRow == null ? void 0 : firstRow.getValue(column.id);
      if (typeof value === "string") {
        return filterFns.includesString;
      }
      if (typeof value === "number") {
        return filterFns.inNumberRange;
      }
      if (typeof value === "boolean") {
        return filterFns.equals;
      }
      if (value !== null && typeof value === "object") {
        return filterFns.equals;
      }
      if (Array.isArray(value)) {
        return filterFns.arrIncludes;
      }
      return filterFns.weakEquals;
    };
    column.getFilterFn = () => {
      var _table$options$filter, _table$options$filter2;
      return isFunction(column.columnDef.filterFn) ? column.columnDef.filterFn : column.columnDef.filterFn === "auto" ? column.getAutoFilterFn() : (
        // @ts-ignore
        (_table$options$filter = (_table$options$filter2 = table.options.filterFns) == null ? void 0 : _table$options$filter2[column.columnDef.filterFn]) != null ? _table$options$filter : filterFns[column.columnDef.filterFn]
      );
    };
    column.getCanFilter = () => {
      var _column$columnDef$ena, _table$options$enable, _table$options$enable2;
      return ((_column$columnDef$ena = column.columnDef.enableColumnFilter) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableColumnFilters) != null ? _table$options$enable : true) && ((_table$options$enable2 = table.options.enableFilters) != null ? _table$options$enable2 : true) && !!column.accessorFn;
    };
    column.getIsFiltered = () => column.getFilterIndex() > -1;
    column.getFilterValue = () => {
      var _table$getState$colum;
      return (_table$getState$colum = table.getState().columnFilters) == null || (_table$getState$colum = _table$getState$colum.find((d) => d.id === column.id)) == null ? void 0 : _table$getState$colum.value;
    };
    column.getFilterIndex = () => {
      var _table$getState$colum2, _table$getState$colum3;
      return (_table$getState$colum2 = (_table$getState$colum3 = table.getState().columnFilters) == null ? void 0 : _table$getState$colum3.findIndex((d) => d.id === column.id)) != null ? _table$getState$colum2 : -1;
    };
    column.setFilterValue = (value) => {
      table.setColumnFilters((old) => {
        const filterFn = column.getFilterFn();
        const previousFilter = old == null ? void 0 : old.find((d) => d.id === column.id);
        const newFilter = functionalUpdate(value, previousFilter ? previousFilter.value : void 0);
        if (shouldAutoRemoveFilter(filterFn, newFilter, column)) {
          var _old$filter;
          return (_old$filter = old == null ? void 0 : old.filter((d) => d.id !== column.id)) != null ? _old$filter : [];
        }
        const newFilterObj = {
          id: column.id,
          value: newFilter
        };
        if (previousFilter) {
          var _old$map;
          return (_old$map = old == null ? void 0 : old.map((d) => {
            if (d.id === column.id) {
              return newFilterObj;
            }
            return d;
          })) != null ? _old$map : [];
        }
        if (old != null && old.length) {
          return [...old, newFilterObj];
        }
        return [newFilterObj];
      });
    };
  },
  createRow: (row, _table) => {
    row.columnFilters = {};
    row.columnFiltersMeta = {};
  },
  createTable: (table) => {
    table.setColumnFilters = (updater) => {
      const leafColumns = table.getAllLeafColumns();
      const updateFn = (old) => {
        var _functionalUpdate;
        return (_functionalUpdate = functionalUpdate(updater, old)) == null ? void 0 : _functionalUpdate.filter((filter) => {
          const column = leafColumns.find((d) => d.id === filter.id);
          if (column) {
            const filterFn = column.getFilterFn();
            if (shouldAutoRemoveFilter(filterFn, filter.value, column)) {
              return false;
            }
          }
          return true;
        });
      };
      table.options.onColumnFiltersChange == null || table.options.onColumnFiltersChange(updateFn);
    };
    table.resetColumnFilters = (defaultState) => {
      var _table$initialState$c, _table$initialState;
      table.setColumnFilters(defaultState ? [] : (_table$initialState$c = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.columnFilters) != null ? _table$initialState$c : []);
    };
    table.getPreFilteredRowModel = () => table.getCoreRowModel();
    table.getFilteredRowModel = () => {
      if (!table._getFilteredRowModel && table.options.getFilteredRowModel) {
        table._getFilteredRowModel = table.options.getFilteredRowModel(table);
      }
      if (table.options.manualFiltering || !table._getFilteredRowModel) {
        return table.getPreFilteredRowModel();
      }
      return table._getFilteredRowModel();
    };
  }
};
function shouldAutoRemoveFilter(filterFn, value, column) {
  return (filterFn && filterFn.autoRemove ? filterFn.autoRemove(value, column) : false) || typeof value === "undefined" || typeof value === "string" && !value;
}
var sum = (columnId, _leafRows, childRows) => {
  return childRows.reduce((sum2, next) => {
    const nextValue = next.getValue(columnId);
    return sum2 + (typeof nextValue === "number" ? nextValue : 0);
  }, 0);
};
var min = (columnId, _leafRows, childRows) => {
  let min2;
  childRows.forEach((row) => {
    const value = row.getValue(columnId);
    if (value != null && (min2 > value || min2 === void 0 && value >= value)) {
      min2 = value;
    }
  });
  return min2;
};
var max = (columnId, _leafRows, childRows) => {
  let max2;
  childRows.forEach((row) => {
    const value = row.getValue(columnId);
    if (value != null && (max2 < value || max2 === void 0 && value >= value)) {
      max2 = value;
    }
  });
  return max2;
};
var extent = (columnId, _leafRows, childRows) => {
  let min2;
  let max2;
  childRows.forEach((row) => {
    const value = row.getValue(columnId);
    if (value != null) {
      if (min2 === void 0) {
        if (value >= value) min2 = max2 = value;
      } else {
        if (min2 > value) min2 = value;
        if (max2 < value) max2 = value;
      }
    }
  });
  return [min2, max2];
};
var mean = (columnId, leafRows) => {
  let count2 = 0;
  let sum2 = 0;
  leafRows.forEach((row) => {
    let value = row.getValue(columnId);
    if (value != null && (value = +value) >= value) {
      ++count2, sum2 += value;
    }
  });
  if (count2) return sum2 / count2;
  return;
};
var median = (columnId, leafRows) => {
  if (!leafRows.length) {
    return;
  }
  const values = leafRows.map((row) => row.getValue(columnId));
  if (!isNumberArray(values)) {
    return;
  }
  if (values.length === 1) {
    return values[0];
  }
  const mid = Math.floor(values.length / 2);
  const nums = values.sort((a, b) => a - b);
  return values.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};
var unique = (columnId, leafRows) => {
  return Array.from(new Set(leafRows.map((d) => d.getValue(columnId))).values());
};
var uniqueCount = (columnId, leafRows) => {
  return new Set(leafRows.map((d) => d.getValue(columnId))).size;
};
var count = (_columnId, leafRows) => {
  return leafRows.length;
};
var aggregationFns = {
  sum,
  min,
  max,
  extent,
  mean,
  median,
  unique,
  uniqueCount,
  count
};
var ColumnGrouping = {
  getDefaultColumnDef: () => {
    return {
      aggregatedCell: (props) => {
        var _toString, _props$getValue;
        return (_toString = (_props$getValue = props.getValue()) == null || _props$getValue.toString == null ? void 0 : _props$getValue.toString()) != null ? _toString : null;
      },
      aggregationFn: "auto"
    };
  },
  getInitialState: (state) => {
    return __spreadValues({
      grouping: []
    }, state);
  },
  getDefaultOptions: (table) => {
    return {
      onGroupingChange: makeStateUpdater("grouping", table),
      groupedColumnMode: "reorder"
    };
  },
  createColumn: (column, table) => {
    column.toggleGrouping = () => {
      table.setGrouping((old) => {
        if (old != null && old.includes(column.id)) {
          return old.filter((d) => d !== column.id);
        }
        return [...old != null ? old : [], column.id];
      });
    };
    column.getCanGroup = () => {
      var _column$columnDef$ena, _table$options$enable;
      return ((_column$columnDef$ena = column.columnDef.enableGrouping) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableGrouping) != null ? _table$options$enable : true) && (!!column.accessorFn || !!column.columnDef.getGroupingValue);
    };
    column.getIsGrouped = () => {
      var _table$getState$group;
      return (_table$getState$group = table.getState().grouping) == null ? void 0 : _table$getState$group.includes(column.id);
    };
    column.getGroupedIndex = () => {
      var _table$getState$group2;
      return (_table$getState$group2 = table.getState().grouping) == null ? void 0 : _table$getState$group2.indexOf(column.id);
    };
    column.getToggleGroupingHandler = () => {
      const canGroup = column.getCanGroup();
      return () => {
        if (!canGroup) return;
        column.toggleGrouping();
      };
    };
    column.getAutoAggregationFn = () => {
      const firstRow = table.getCoreRowModel().flatRows[0];
      const value = firstRow == null ? void 0 : firstRow.getValue(column.id);
      if (typeof value === "number") {
        return aggregationFns.sum;
      }
      if (Object.prototype.toString.call(value) === "[object Date]") {
        return aggregationFns.extent;
      }
    };
    column.getAggregationFn = () => {
      var _table$options$aggreg, _table$options$aggreg2;
      if (!column) {
        throw new Error();
      }
      return isFunction(column.columnDef.aggregationFn) ? column.columnDef.aggregationFn : column.columnDef.aggregationFn === "auto" ? column.getAutoAggregationFn() : (_table$options$aggreg = (_table$options$aggreg2 = table.options.aggregationFns) == null ? void 0 : _table$options$aggreg2[column.columnDef.aggregationFn]) != null ? _table$options$aggreg : aggregationFns[column.columnDef.aggregationFn];
    };
  },
  createTable: (table) => {
    table.setGrouping = (updater) => table.options.onGroupingChange == null ? void 0 : table.options.onGroupingChange(updater);
    table.resetGrouping = (defaultState) => {
      var _table$initialState$g, _table$initialState;
      table.setGrouping(defaultState ? [] : (_table$initialState$g = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.grouping) != null ? _table$initialState$g : []);
    };
    table.getPreGroupedRowModel = () => table.getFilteredRowModel();
    table.getGroupedRowModel = () => {
      if (!table._getGroupedRowModel && table.options.getGroupedRowModel) {
        table._getGroupedRowModel = table.options.getGroupedRowModel(table);
      }
      if (table.options.manualGrouping || !table._getGroupedRowModel) {
        return table.getPreGroupedRowModel();
      }
      return table._getGroupedRowModel();
    };
  },
  createRow: (row, table) => {
    row.getIsGrouped = () => !!row.groupingColumnId;
    row.getGroupingValue = (columnId) => {
      if (row._groupingValuesCache.hasOwnProperty(columnId)) {
        return row._groupingValuesCache[columnId];
      }
      const column = table.getColumn(columnId);
      if (!(column != null && column.columnDef.getGroupingValue)) {
        return row.getValue(columnId);
      }
      row._groupingValuesCache[columnId] = column.columnDef.getGroupingValue(row.original);
      return row._groupingValuesCache[columnId];
    };
    row._groupingValuesCache = {};
  },
  createCell: (cell, column, row, table) => {
    cell.getIsGrouped = () => column.getIsGrouped() && column.id === row.groupingColumnId;
    cell.getIsPlaceholder = () => !cell.getIsGrouped() && column.getIsGrouped();
    cell.getIsAggregated = () => {
      var _row$subRows;
      return !cell.getIsGrouped() && !cell.getIsPlaceholder() && !!((_row$subRows = row.subRows) != null && _row$subRows.length);
    };
  }
};
function orderColumns(leafColumns, grouping, groupedColumnMode) {
  if (!(grouping != null && grouping.length) || !groupedColumnMode) {
    return leafColumns;
  }
  const nonGroupingColumns = leafColumns.filter((col) => !grouping.includes(col.id));
  if (groupedColumnMode === "remove") {
    return nonGroupingColumns;
  }
  const groupingColumns = grouping.map((g) => leafColumns.find((col) => col.id === g)).filter(Boolean);
  return [...groupingColumns, ...nonGroupingColumns];
}
var ColumnOrdering = {
  getInitialState: (state) => {
    return __spreadValues({
      columnOrder: []
    }, state);
  },
  getDefaultOptions: (table) => {
    return {
      onColumnOrderChange: makeStateUpdater("columnOrder", table)
    };
  },
  createColumn: (column, table) => {
    column.getIndex = memo((position) => [_getVisibleLeafColumns(table, position)], (columns) => columns.findIndex((d) => d.id === column.id), getMemoOptions(table.options, "debugColumns", "getIndex"));
    column.getIsFirstColumn = (position) => {
      var _columns$;
      const columns = _getVisibleLeafColumns(table, position);
      return ((_columns$ = columns[0]) == null ? void 0 : _columns$.id) === column.id;
    };
    column.getIsLastColumn = (position) => {
      var _columns;
      const columns = _getVisibleLeafColumns(table, position);
      return ((_columns = columns[columns.length - 1]) == null ? void 0 : _columns.id) === column.id;
    };
  },
  createTable: (table) => {
    table.setColumnOrder = (updater) => table.options.onColumnOrderChange == null ? void 0 : table.options.onColumnOrderChange(updater);
    table.resetColumnOrder = (defaultState) => {
      var _table$initialState$c;
      table.setColumnOrder(defaultState ? [] : (_table$initialState$c = table.initialState.columnOrder) != null ? _table$initialState$c : []);
    };
    table._getOrderColumnsFn = memo(() => [table.getState().columnOrder, table.getState().grouping, table.options.groupedColumnMode], (columnOrder, grouping, groupedColumnMode) => (columns) => {
      let orderedColumns = [];
      if (!(columnOrder != null && columnOrder.length)) {
        orderedColumns = columns;
      } else {
        const columnOrderCopy = [...columnOrder];
        const columnsCopy = [...columns];
        while (columnsCopy.length && columnOrderCopy.length) {
          const targetColumnId = columnOrderCopy.shift();
          const foundIndex = columnsCopy.findIndex((d) => d.id === targetColumnId);
          if (foundIndex > -1) {
            orderedColumns.push(columnsCopy.splice(foundIndex, 1)[0]);
          }
        }
        orderedColumns = [...orderedColumns, ...columnsCopy];
      }
      return orderColumns(orderedColumns, grouping, groupedColumnMode);
    }, getMemoOptions(table.options, "debugTable", "_getOrderColumnsFn"));
  }
};
var getDefaultColumnPinningState = () => ({
  left: [],
  right: []
});
var ColumnPinning = {
  getInitialState: (state) => {
    return __spreadValues({
      columnPinning: getDefaultColumnPinningState()
    }, state);
  },
  getDefaultOptions: (table) => {
    return {
      onColumnPinningChange: makeStateUpdater("columnPinning", table)
    };
  },
  createColumn: (column, table) => {
    column.pin = (position) => {
      const columnIds = column.getLeafColumns().map((d) => d.id).filter(Boolean);
      table.setColumnPinning((old) => {
        var _old$left3, _old$right3;
        if (position === "right") {
          var _old$left, _old$right;
          return {
            left: ((_old$left = old == null ? void 0 : old.left) != null ? _old$left : []).filter((d) => !(columnIds != null && columnIds.includes(d))),
            right: [...((_old$right = old == null ? void 0 : old.right) != null ? _old$right : []).filter((d) => !(columnIds != null && columnIds.includes(d))), ...columnIds]
          };
        }
        if (position === "left") {
          var _old$left2, _old$right2;
          return {
            left: [...((_old$left2 = old == null ? void 0 : old.left) != null ? _old$left2 : []).filter((d) => !(columnIds != null && columnIds.includes(d))), ...columnIds],
            right: ((_old$right2 = old == null ? void 0 : old.right) != null ? _old$right2 : []).filter((d) => !(columnIds != null && columnIds.includes(d)))
          };
        }
        return {
          left: ((_old$left3 = old == null ? void 0 : old.left) != null ? _old$left3 : []).filter((d) => !(columnIds != null && columnIds.includes(d))),
          right: ((_old$right3 = old == null ? void 0 : old.right) != null ? _old$right3 : []).filter((d) => !(columnIds != null && columnIds.includes(d)))
        };
      });
    };
    column.getCanPin = () => {
      const leafColumns = column.getLeafColumns();
      return leafColumns.some((d) => {
        var _d$columnDef$enablePi, _ref, _table$options$enable;
        return ((_d$columnDef$enablePi = d.columnDef.enablePinning) != null ? _d$columnDef$enablePi : true) && ((_ref = (_table$options$enable = table.options.enableColumnPinning) != null ? _table$options$enable : table.options.enablePinning) != null ? _ref : true);
      });
    };
    column.getIsPinned = () => {
      const leafColumnIds = column.getLeafColumns().map((d) => d.id);
      const {
        left,
        right
      } = table.getState().columnPinning;
      const isLeft = leafColumnIds.some((d) => left == null ? void 0 : left.includes(d));
      const isRight = leafColumnIds.some((d) => right == null ? void 0 : right.includes(d));
      return isLeft ? "left" : isRight ? "right" : false;
    };
    column.getPinnedIndex = () => {
      var _table$getState$colum, _table$getState$colum2;
      const position = column.getIsPinned();
      return position ? (_table$getState$colum = (_table$getState$colum2 = table.getState().columnPinning) == null || (_table$getState$colum2 = _table$getState$colum2[position]) == null ? void 0 : _table$getState$colum2.indexOf(column.id)) != null ? _table$getState$colum : -1 : 0;
    };
  },
  createRow: (row, table) => {
    row.getCenterVisibleCells = memo(() => [row._getAllVisibleCells(), table.getState().columnPinning.left, table.getState().columnPinning.right], (allCells, left, right) => {
      const leftAndRight = [...left != null ? left : [], ...right != null ? right : []];
      return allCells.filter((d) => !leftAndRight.includes(d.column.id));
    }, getMemoOptions(table.options, "debugRows", "getCenterVisibleCells"));
    row.getLeftVisibleCells = memo(() => [row._getAllVisibleCells(), table.getState().columnPinning.left], (allCells, left) => {
      const cells = (left != null ? left : []).map((columnId) => allCells.find((cell) => cell.column.id === columnId)).filter(Boolean).map((d) => __spreadProps(__spreadValues({}, d), {
        position: "left"
      }));
      return cells;
    }, getMemoOptions(table.options, "debugRows", "getLeftVisibleCells"));
    row.getRightVisibleCells = memo(() => [row._getAllVisibleCells(), table.getState().columnPinning.right], (allCells, right) => {
      const cells = (right != null ? right : []).map((columnId) => allCells.find((cell) => cell.column.id === columnId)).filter(Boolean).map((d) => __spreadProps(__spreadValues({}, d), {
        position: "right"
      }));
      return cells;
    }, getMemoOptions(table.options, "debugRows", "getRightVisibleCells"));
  },
  createTable: (table) => {
    table.setColumnPinning = (updater) => table.options.onColumnPinningChange == null ? void 0 : table.options.onColumnPinningChange(updater);
    table.resetColumnPinning = (defaultState) => {
      var _table$initialState$c, _table$initialState;
      return table.setColumnPinning(defaultState ? getDefaultColumnPinningState() : (_table$initialState$c = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.columnPinning) != null ? _table$initialState$c : getDefaultColumnPinningState());
    };
    table.getIsSomeColumnsPinned = (position) => {
      var _pinningState$positio;
      const pinningState = table.getState().columnPinning;
      if (!position) {
        var _pinningState$left, _pinningState$right;
        return Boolean(((_pinningState$left = pinningState.left) == null ? void 0 : _pinningState$left.length) || ((_pinningState$right = pinningState.right) == null ? void 0 : _pinningState$right.length));
      }
      return Boolean((_pinningState$positio = pinningState[position]) == null ? void 0 : _pinningState$positio.length);
    };
    table.getLeftLeafColumns = memo(() => [table.getAllLeafColumns(), table.getState().columnPinning.left], (allColumns, left) => {
      return (left != null ? left : []).map((columnId) => allColumns.find((column) => column.id === columnId)).filter(Boolean);
    }, getMemoOptions(table.options, "debugColumns", "getLeftLeafColumns"));
    table.getRightLeafColumns = memo(() => [table.getAllLeafColumns(), table.getState().columnPinning.right], (allColumns, right) => {
      return (right != null ? right : []).map((columnId) => allColumns.find((column) => column.id === columnId)).filter(Boolean);
    }, getMemoOptions(table.options, "debugColumns", "getRightLeafColumns"));
    table.getCenterLeafColumns = memo(() => [table.getAllLeafColumns(), table.getState().columnPinning.left, table.getState().columnPinning.right], (allColumns, left, right) => {
      const leftAndRight = [...left != null ? left : [], ...right != null ? right : []];
      return allColumns.filter((d) => !leftAndRight.includes(d.id));
    }, getMemoOptions(table.options, "debugColumns", "getCenterLeafColumns"));
  }
};
function safelyAccessDocument(_document) {
  return _document || (typeof document !== "undefined" ? document : null);
}
var defaultColumnSizing = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
};
var getDefaultColumnSizingInfoState = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: false,
  columnSizingStart: []
});
var ColumnSizing = {
  getDefaultColumnDef: () => {
    return defaultColumnSizing;
  },
  getInitialState: (state) => {
    return __spreadValues({
      columnSizing: {},
      columnSizingInfo: getDefaultColumnSizingInfoState()
    }, state);
  },
  getDefaultOptions: (table) => {
    return {
      columnResizeMode: "onEnd",
      columnResizeDirection: "ltr",
      onColumnSizingChange: makeStateUpdater("columnSizing", table),
      onColumnSizingInfoChange: makeStateUpdater("columnSizingInfo", table)
    };
  },
  createColumn: (column, table) => {
    column.getSize = () => {
      var _column$columnDef$min, _ref, _column$columnDef$max;
      const columnSize = table.getState().columnSizing[column.id];
      return Math.min(Math.max((_column$columnDef$min = column.columnDef.minSize) != null ? _column$columnDef$min : defaultColumnSizing.minSize, (_ref = columnSize != null ? columnSize : column.columnDef.size) != null ? _ref : defaultColumnSizing.size), (_column$columnDef$max = column.columnDef.maxSize) != null ? _column$columnDef$max : defaultColumnSizing.maxSize);
    };
    column.getStart = memo((position) => [position, _getVisibleLeafColumns(table, position), table.getState().columnSizing], (position, columns) => columns.slice(0, column.getIndex(position)).reduce((sum2, column2) => sum2 + column2.getSize(), 0), getMemoOptions(table.options, "debugColumns", "getStart"));
    column.getAfter = memo((position) => [position, _getVisibleLeafColumns(table, position), table.getState().columnSizing], (position, columns) => columns.slice(column.getIndex(position) + 1).reduce((sum2, column2) => sum2 + column2.getSize(), 0), getMemoOptions(table.options, "debugColumns", "getAfter"));
    column.resetSize = () => {
      table.setColumnSizing((_ref2) => {
        var _a;
        let _b = _ref2, {
          [_a = column.id]: _
        } = _b, rest = __objRest(_b, [
          __restKey(_a)
        ]);
        return rest;
      });
    };
    column.getCanResize = () => {
      var _column$columnDef$ena, _table$options$enable;
      return ((_column$columnDef$ena = column.columnDef.enableResizing) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableColumnResizing) != null ? _table$options$enable : true);
    };
    column.getIsResizing = () => {
      return table.getState().columnSizingInfo.isResizingColumn === column.id;
    };
  },
  createHeader: (header, table) => {
    header.getSize = () => {
      let sum2 = 0;
      const recurse = (header2) => {
        if (header2.subHeaders.length) {
          header2.subHeaders.forEach(recurse);
        } else {
          var _header$column$getSiz;
          sum2 += (_header$column$getSiz = header2.column.getSize()) != null ? _header$column$getSiz : 0;
        }
      };
      recurse(header);
      return sum2;
    };
    header.getStart = () => {
      if (header.index > 0) {
        const prevSiblingHeader = header.headerGroup.headers[header.index - 1];
        return prevSiblingHeader.getStart() + prevSiblingHeader.getSize();
      }
      return 0;
    };
    header.getResizeHandler = (_contextDocument) => {
      const column = table.getColumn(header.column.id);
      const canResize = column == null ? void 0 : column.getCanResize();
      return (e) => {
        if (!column || !canResize) {
          return;
        }
        e.persist == null || e.persist();
        if (isTouchStartEvent(e)) {
          if (e.touches && e.touches.length > 1) {
            return;
          }
        }
        const startSize = header.getSize();
        const columnSizingStart = header ? header.getLeafHeaders().map((d) => [d.column.id, d.column.getSize()]) : [[column.id, column.getSize()]];
        const clientX = isTouchStartEvent(e) ? Math.round(e.touches[0].clientX) : e.clientX;
        const newColumnSizing = {};
        const updateOffset = (eventType, clientXPos) => {
          if (typeof clientXPos !== "number") {
            return;
          }
          table.setColumnSizingInfo((old) => {
            var _old$startOffset, _old$startSize;
            const deltaDirection = table.options.columnResizeDirection === "rtl" ? -1 : 1;
            const deltaOffset = (clientXPos - ((_old$startOffset = old == null ? void 0 : old.startOffset) != null ? _old$startOffset : 0)) * deltaDirection;
            const deltaPercentage = Math.max(deltaOffset / ((_old$startSize = old == null ? void 0 : old.startSize) != null ? _old$startSize : 0), -0.999999);
            old.columnSizingStart.forEach((_ref3) => {
              let [columnId, headerSize] = _ref3;
              newColumnSizing[columnId] = Math.round(Math.max(headerSize + headerSize * deltaPercentage, 0) * 100) / 100;
            });
            return __spreadProps(__spreadValues({}, old), {
              deltaOffset,
              deltaPercentage
            });
          });
          if (table.options.columnResizeMode === "onChange" || eventType === "end") {
            table.setColumnSizing((old) => __spreadValues(__spreadValues({}, old), newColumnSizing));
          }
        };
        const onMove = (clientXPos) => updateOffset("move", clientXPos);
        const onEnd = (clientXPos) => {
          updateOffset("end", clientXPos);
          table.setColumnSizingInfo((old) => __spreadProps(__spreadValues({}, old), {
            isResizingColumn: false,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        };
        const contextDocument = safelyAccessDocument(_contextDocument);
        const mouseEvents = {
          moveHandler: (e2) => onMove(e2.clientX),
          upHandler: (e2) => {
            contextDocument == null || contextDocument.removeEventListener("mousemove", mouseEvents.moveHandler);
            contextDocument == null || contextDocument.removeEventListener("mouseup", mouseEvents.upHandler);
            onEnd(e2.clientX);
          }
        };
        const touchEvents = {
          moveHandler: (e2) => {
            if (e2.cancelable) {
              e2.preventDefault();
              e2.stopPropagation();
            }
            onMove(e2.touches[0].clientX);
            return false;
          },
          upHandler: (e2) => {
            var _e$touches$;
            contextDocument == null || contextDocument.removeEventListener("touchmove", touchEvents.moveHandler);
            contextDocument == null || contextDocument.removeEventListener("touchend", touchEvents.upHandler);
            if (e2.cancelable) {
              e2.preventDefault();
              e2.stopPropagation();
            }
            onEnd((_e$touches$ = e2.touches[0]) == null ? void 0 : _e$touches$.clientX);
          }
        };
        const passiveIfSupported = passiveEventSupported() ? {
          passive: false
        } : false;
        if (isTouchStartEvent(e)) {
          contextDocument == null || contextDocument.addEventListener("touchmove", touchEvents.moveHandler, passiveIfSupported);
          contextDocument == null || contextDocument.addEventListener("touchend", touchEvents.upHandler, passiveIfSupported);
        } else {
          contextDocument == null || contextDocument.addEventListener("mousemove", mouseEvents.moveHandler, passiveIfSupported);
          contextDocument == null || contextDocument.addEventListener("mouseup", mouseEvents.upHandler, passiveIfSupported);
        }
        table.setColumnSizingInfo((old) => __spreadProps(__spreadValues({}, old), {
          startOffset: clientX,
          startSize,
          deltaOffset: 0,
          deltaPercentage: 0,
          columnSizingStart,
          isResizingColumn: column.id
        }));
      };
    };
  },
  createTable: (table) => {
    table.setColumnSizing = (updater) => table.options.onColumnSizingChange == null ? void 0 : table.options.onColumnSizingChange(updater);
    table.setColumnSizingInfo = (updater) => table.options.onColumnSizingInfoChange == null ? void 0 : table.options.onColumnSizingInfoChange(updater);
    table.resetColumnSizing = (defaultState) => {
      var _table$initialState$c;
      table.setColumnSizing(defaultState ? {} : (_table$initialState$c = table.initialState.columnSizing) != null ? _table$initialState$c : {});
    };
    table.resetHeaderSizeInfo = (defaultState) => {
      var _table$initialState$c2;
      table.setColumnSizingInfo(defaultState ? getDefaultColumnSizingInfoState() : (_table$initialState$c2 = table.initialState.columnSizingInfo) != null ? _table$initialState$c2 : getDefaultColumnSizingInfoState());
    };
    table.getTotalSize = () => {
      var _table$getHeaderGroup, _table$getHeaderGroup2;
      return (_table$getHeaderGroup = (_table$getHeaderGroup2 = table.getHeaderGroups()[0]) == null ? void 0 : _table$getHeaderGroup2.headers.reduce((sum2, header) => {
        return sum2 + header.getSize();
      }, 0)) != null ? _table$getHeaderGroup : 0;
    };
    table.getLeftTotalSize = () => {
      var _table$getLeftHeaderG, _table$getLeftHeaderG2;
      return (_table$getLeftHeaderG = (_table$getLeftHeaderG2 = table.getLeftHeaderGroups()[0]) == null ? void 0 : _table$getLeftHeaderG2.headers.reduce((sum2, header) => {
        return sum2 + header.getSize();
      }, 0)) != null ? _table$getLeftHeaderG : 0;
    };
    table.getCenterTotalSize = () => {
      var _table$getCenterHeade, _table$getCenterHeade2;
      return (_table$getCenterHeade = (_table$getCenterHeade2 = table.getCenterHeaderGroups()[0]) == null ? void 0 : _table$getCenterHeade2.headers.reduce((sum2, header) => {
        return sum2 + header.getSize();
      }, 0)) != null ? _table$getCenterHeade : 0;
    };
    table.getRightTotalSize = () => {
      var _table$getRightHeader, _table$getRightHeader2;
      return (_table$getRightHeader = (_table$getRightHeader2 = table.getRightHeaderGroups()[0]) == null ? void 0 : _table$getRightHeader2.headers.reduce((sum2, header) => {
        return sum2 + header.getSize();
      }, 0)) != null ? _table$getRightHeader : 0;
    };
  }
};
var passiveSupported = null;
function passiveEventSupported() {
  if (typeof passiveSupported === "boolean") return passiveSupported;
  let supported = false;
  try {
    const options = {
      get passive() {
        supported = true;
        return false;
      }
    };
    const noop = () => {
    };
    window.addEventListener("test", noop, options);
    window.removeEventListener("test", noop);
  } catch (err) {
    supported = false;
  }
  passiveSupported = supported;
  return passiveSupported;
}
function isTouchStartEvent(e) {
  return e.type === "touchstart";
}
var ColumnVisibility = {
  getInitialState: (state) => {
    return __spreadValues({
      columnVisibility: {}
    }, state);
  },
  getDefaultOptions: (table) => {
    return {
      onColumnVisibilityChange: makeStateUpdater("columnVisibility", table)
    };
  },
  createColumn: (column, table) => {
    column.toggleVisibility = (value) => {
      if (column.getCanHide()) {
        table.setColumnVisibility((old) => __spreadProps(__spreadValues({}, old), {
          [column.id]: value != null ? value : !column.getIsVisible()
        }));
      }
    };
    column.getIsVisible = () => {
      var _ref, _table$getState$colum;
      const childColumns = column.columns;
      return (_ref = childColumns.length ? childColumns.some((c) => c.getIsVisible()) : (_table$getState$colum = table.getState().columnVisibility) == null ? void 0 : _table$getState$colum[column.id]) != null ? _ref : true;
    };
    column.getCanHide = () => {
      var _column$columnDef$ena, _table$options$enable;
      return ((_column$columnDef$ena = column.columnDef.enableHiding) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableHiding) != null ? _table$options$enable : true);
    };
    column.getToggleVisibilityHandler = () => {
      return (e) => {
        column.toggleVisibility == null || column.toggleVisibility(e.target.checked);
      };
    };
  },
  createRow: (row, table) => {
    row._getAllVisibleCells = memo(() => [row.getAllCells(), table.getState().columnVisibility], (cells) => {
      return cells.filter((cell) => cell.column.getIsVisible());
    }, getMemoOptions(table.options, "debugRows", "_getAllVisibleCells"));
    row.getVisibleCells = memo(() => [row.getLeftVisibleCells(), row.getCenterVisibleCells(), row.getRightVisibleCells()], (left, center, right) => [...left, ...center, ...right], getMemoOptions(table.options, "debugRows", "getVisibleCells"));
  },
  createTable: (table) => {
    const makeVisibleColumnsMethod = (key, getColumns) => {
      return memo(() => [getColumns(), getColumns().filter((d) => d.getIsVisible()).map((d) => d.id).join("_")], (columns) => {
        return columns.filter((d) => d.getIsVisible == null ? void 0 : d.getIsVisible());
      }, getMemoOptions(table.options, "debugColumns", key));
    };
    table.getVisibleFlatColumns = makeVisibleColumnsMethod("getVisibleFlatColumns", () => table.getAllFlatColumns());
    table.getVisibleLeafColumns = makeVisibleColumnsMethod("getVisibleLeafColumns", () => table.getAllLeafColumns());
    table.getLeftVisibleLeafColumns = makeVisibleColumnsMethod("getLeftVisibleLeafColumns", () => table.getLeftLeafColumns());
    table.getRightVisibleLeafColumns = makeVisibleColumnsMethod("getRightVisibleLeafColumns", () => table.getRightLeafColumns());
    table.getCenterVisibleLeafColumns = makeVisibleColumnsMethod("getCenterVisibleLeafColumns", () => table.getCenterLeafColumns());
    table.setColumnVisibility = (updater) => table.options.onColumnVisibilityChange == null ? void 0 : table.options.onColumnVisibilityChange(updater);
    table.resetColumnVisibility = (defaultState) => {
      var _table$initialState$c;
      table.setColumnVisibility(defaultState ? {} : (_table$initialState$c = table.initialState.columnVisibility) != null ? _table$initialState$c : {});
    };
    table.toggleAllColumnsVisible = (value) => {
      var _value;
      value = (_value = value) != null ? _value : !table.getIsAllColumnsVisible();
      table.setColumnVisibility(table.getAllLeafColumns().reduce((obj, column) => __spreadProps(__spreadValues({}, obj), {
        [column.id]: !value ? !(column.getCanHide != null && column.getCanHide()) : value
      }), {}));
    };
    table.getIsAllColumnsVisible = () => !table.getAllLeafColumns().some((column) => !(column.getIsVisible != null && column.getIsVisible()));
    table.getIsSomeColumnsVisible = () => table.getAllLeafColumns().some((column) => column.getIsVisible == null ? void 0 : column.getIsVisible());
    table.getToggleAllColumnsVisibilityHandler = () => {
      return (e) => {
        var _target;
        table.toggleAllColumnsVisible((_target = e.target) == null ? void 0 : _target.checked);
      };
    };
  }
};
function _getVisibleLeafColumns(table, position) {
  return !position ? table.getVisibleLeafColumns() : position === "center" ? table.getCenterVisibleLeafColumns() : position === "left" ? table.getLeftVisibleLeafColumns() : table.getRightVisibleLeafColumns();
}
var GlobalFaceting = {
  createTable: (table) => {
    table._getGlobalFacetedRowModel = table.options.getFacetedRowModel && table.options.getFacetedRowModel(table, "__global__");
    table.getGlobalFacetedRowModel = () => {
      if (table.options.manualFiltering || !table._getGlobalFacetedRowModel) {
        return table.getPreFilteredRowModel();
      }
      return table._getGlobalFacetedRowModel();
    };
    table._getGlobalFacetedUniqueValues = table.options.getFacetedUniqueValues && table.options.getFacetedUniqueValues(table, "__global__");
    table.getGlobalFacetedUniqueValues = () => {
      if (!table._getGlobalFacetedUniqueValues) {
        return /* @__PURE__ */ new Map();
      }
      return table._getGlobalFacetedUniqueValues();
    };
    table._getGlobalFacetedMinMaxValues = table.options.getFacetedMinMaxValues && table.options.getFacetedMinMaxValues(table, "__global__");
    table.getGlobalFacetedMinMaxValues = () => {
      if (!table._getGlobalFacetedMinMaxValues) {
        return;
      }
      return table._getGlobalFacetedMinMaxValues();
    };
  }
};
var GlobalFiltering = {
  getInitialState: (state) => {
    return __spreadValues({
      globalFilter: void 0
    }, state);
  },
  getDefaultOptions: (table) => {
    return {
      onGlobalFilterChange: makeStateUpdater("globalFilter", table),
      globalFilterFn: "auto",
      getColumnCanGlobalFilter: (column) => {
        var _table$getCoreRowMode;
        const value = (_table$getCoreRowMode = table.getCoreRowModel().flatRows[0]) == null || (_table$getCoreRowMode = _table$getCoreRowMode._getAllCellsByColumnId()[column.id]) == null ? void 0 : _table$getCoreRowMode.getValue();
        return typeof value === "string" || typeof value === "number";
      }
    };
  },
  createColumn: (column, table) => {
    column.getCanGlobalFilter = () => {
      var _column$columnDef$ena, _table$options$enable, _table$options$enable2, _table$options$getCol;
      return ((_column$columnDef$ena = column.columnDef.enableGlobalFilter) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableGlobalFilter) != null ? _table$options$enable : true) && ((_table$options$enable2 = table.options.enableFilters) != null ? _table$options$enable2 : true) && ((_table$options$getCol = table.options.getColumnCanGlobalFilter == null ? void 0 : table.options.getColumnCanGlobalFilter(column)) != null ? _table$options$getCol : true) && !!column.accessorFn;
    };
  },
  createTable: (table) => {
    table.getGlobalAutoFilterFn = () => {
      return filterFns.includesString;
    };
    table.getGlobalFilterFn = () => {
      var _table$options$filter, _table$options$filter2;
      const {
        globalFilterFn
      } = table.options;
      return isFunction(globalFilterFn) ? globalFilterFn : globalFilterFn === "auto" ? table.getGlobalAutoFilterFn() : (_table$options$filter = (_table$options$filter2 = table.options.filterFns) == null ? void 0 : _table$options$filter2[globalFilterFn]) != null ? _table$options$filter : filterFns[globalFilterFn];
    };
    table.setGlobalFilter = (updater) => {
      table.options.onGlobalFilterChange == null || table.options.onGlobalFilterChange(updater);
    };
    table.resetGlobalFilter = (defaultState) => {
      table.setGlobalFilter(defaultState ? void 0 : table.initialState.globalFilter);
    };
  }
};
var RowExpanding = {
  getInitialState: (state) => {
    return __spreadValues({
      expanded: {}
    }, state);
  },
  getDefaultOptions: (table) => {
    return {
      onExpandedChange: makeStateUpdater("expanded", table),
      paginateExpandedRows: true
    };
  },
  createTable: (table) => {
    let registered = false;
    let queued = false;
    table._autoResetExpanded = () => {
      var _ref, _table$options$autoRe;
      if (!registered) {
        table._queue(() => {
          registered = true;
        });
        return;
      }
      if ((_ref = (_table$options$autoRe = table.options.autoResetAll) != null ? _table$options$autoRe : table.options.autoResetExpanded) != null ? _ref : !table.options.manualExpanding) {
        if (queued) return;
        queued = true;
        table._queue(() => {
          table.resetExpanded();
          queued = false;
        });
      }
    };
    table.setExpanded = (updater) => table.options.onExpandedChange == null ? void 0 : table.options.onExpandedChange(updater);
    table.toggleAllRowsExpanded = (expanded) => {
      if (expanded != null ? expanded : !table.getIsAllRowsExpanded()) {
        table.setExpanded(true);
      } else {
        table.setExpanded({});
      }
    };
    table.resetExpanded = (defaultState) => {
      var _table$initialState$e, _table$initialState;
      table.setExpanded(defaultState ? {} : (_table$initialState$e = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.expanded) != null ? _table$initialState$e : {});
    };
    table.getCanSomeRowsExpand = () => {
      return table.getPrePaginationRowModel().flatRows.some((row) => row.getCanExpand());
    };
    table.getToggleAllRowsExpandedHandler = () => {
      return (e) => {
        e.persist == null || e.persist();
        table.toggleAllRowsExpanded();
      };
    };
    table.getIsSomeRowsExpanded = () => {
      const expanded = table.getState().expanded;
      return expanded === true || Object.values(expanded).some(Boolean);
    };
    table.getIsAllRowsExpanded = () => {
      const expanded = table.getState().expanded;
      if (typeof expanded === "boolean") {
        return expanded === true;
      }
      if (!Object.keys(expanded).length) {
        return false;
      }
      if (table.getRowModel().flatRows.some((row) => !row.getIsExpanded())) {
        return false;
      }
      return true;
    };
    table.getExpandedDepth = () => {
      let maxDepth = 0;
      const rowIds = table.getState().expanded === true ? Object.keys(table.getRowModel().rowsById) : Object.keys(table.getState().expanded);
      rowIds.forEach((id) => {
        const splitId = id.split(".");
        maxDepth = Math.max(maxDepth, splitId.length);
      });
      return maxDepth;
    };
    table.getPreExpandedRowModel = () => table.getSortedRowModel();
    table.getExpandedRowModel = () => {
      if (!table._getExpandedRowModel && table.options.getExpandedRowModel) {
        table._getExpandedRowModel = table.options.getExpandedRowModel(table);
      }
      if (table.options.manualExpanding || !table._getExpandedRowModel) {
        return table.getPreExpandedRowModel();
      }
      return table._getExpandedRowModel();
    };
  },
  createRow: (row, table) => {
    row.toggleExpanded = (expanded) => {
      table.setExpanded((old) => {
        var _a;
        var _expanded;
        const exists = old === true ? true : !!(old != null && old[row.id]);
        let oldExpanded = {};
        if (old === true) {
          Object.keys(table.getRowModel().rowsById).forEach((rowId) => {
            oldExpanded[rowId] = true;
          });
        } else {
          oldExpanded = old;
        }
        expanded = (_expanded = expanded) != null ? _expanded : !exists;
        if (!exists && expanded) {
          return __spreadProps(__spreadValues({}, oldExpanded), {
            [row.id]: true
          });
        }
        if (exists && !expanded) {
          const _b = oldExpanded, {
            [_a = row.id]: _
          } = _b, rest = __objRest(_b, [
            __restKey(_a)
          ]);
          return rest;
        }
        return old;
      });
    };
    row.getIsExpanded = () => {
      var _table$options$getIsR;
      const expanded = table.getState().expanded;
      return !!((_table$options$getIsR = table.options.getIsRowExpanded == null ? void 0 : table.options.getIsRowExpanded(row)) != null ? _table$options$getIsR : expanded === true || (expanded == null ? void 0 : expanded[row.id]));
    };
    row.getCanExpand = () => {
      var _table$options$getRow, _table$options$enable, _row$subRows;
      return (_table$options$getRow = table.options.getRowCanExpand == null ? void 0 : table.options.getRowCanExpand(row)) != null ? _table$options$getRow : ((_table$options$enable = table.options.enableExpanding) != null ? _table$options$enable : true) && !!((_row$subRows = row.subRows) != null && _row$subRows.length);
    };
    row.getIsAllParentsExpanded = () => {
      let isFullyExpanded = true;
      let currentRow = row;
      while (isFullyExpanded && currentRow.parentId) {
        currentRow = table.getRow(currentRow.parentId, true);
        isFullyExpanded = currentRow.getIsExpanded();
      }
      return isFullyExpanded;
    };
    row.getToggleExpandedHandler = () => {
      const canExpand = row.getCanExpand();
      return () => {
        if (!canExpand) return;
        row.toggleExpanded();
      };
    };
  }
};
var defaultPageIndex = 0;
var defaultPageSize = 10;
var getDefaultPaginationState = () => ({
  pageIndex: defaultPageIndex,
  pageSize: defaultPageSize
});
var RowPagination = {
  getInitialState: (state) => {
    return __spreadProps(__spreadValues({}, state), {
      pagination: __spreadValues(__spreadValues({}, getDefaultPaginationState()), state == null ? void 0 : state.pagination)
    });
  },
  getDefaultOptions: (table) => {
    return {
      onPaginationChange: makeStateUpdater("pagination", table)
    };
  },
  createTable: (table) => {
    let registered = false;
    let queued = false;
    table._autoResetPageIndex = () => {
      var _ref, _table$options$autoRe;
      if (!registered) {
        table._queue(() => {
          registered = true;
        });
        return;
      }
      if ((_ref = (_table$options$autoRe = table.options.autoResetAll) != null ? _table$options$autoRe : table.options.autoResetPageIndex) != null ? _ref : !table.options.manualPagination) {
        if (queued) return;
        queued = true;
        table._queue(() => {
          table.resetPageIndex();
          queued = false;
        });
      }
    };
    table.setPagination = (updater) => {
      const safeUpdater = (old) => {
        let newState = functionalUpdate(updater, old);
        return newState;
      };
      return table.options.onPaginationChange == null ? void 0 : table.options.onPaginationChange(safeUpdater);
    };
    table.resetPagination = (defaultState) => {
      var _table$initialState$p;
      table.setPagination(defaultState ? getDefaultPaginationState() : (_table$initialState$p = table.initialState.pagination) != null ? _table$initialState$p : getDefaultPaginationState());
    };
    table.setPageIndex = (updater) => {
      table.setPagination((old) => {
        let pageIndex = functionalUpdate(updater, old.pageIndex);
        const maxPageIndex = typeof table.options.pageCount === "undefined" || table.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : table.options.pageCount - 1;
        pageIndex = Math.max(0, Math.min(pageIndex, maxPageIndex));
        return __spreadProps(__spreadValues({}, old), {
          pageIndex
        });
      });
    };
    table.resetPageIndex = (defaultState) => {
      var _table$initialState$p2, _table$initialState;
      table.setPageIndex(defaultState ? defaultPageIndex : (_table$initialState$p2 = (_table$initialState = table.initialState) == null || (_table$initialState = _table$initialState.pagination) == null ? void 0 : _table$initialState.pageIndex) != null ? _table$initialState$p2 : defaultPageIndex);
    };
    table.resetPageSize = (defaultState) => {
      var _table$initialState$p3, _table$initialState2;
      table.setPageSize(defaultState ? defaultPageSize : (_table$initialState$p3 = (_table$initialState2 = table.initialState) == null || (_table$initialState2 = _table$initialState2.pagination) == null ? void 0 : _table$initialState2.pageSize) != null ? _table$initialState$p3 : defaultPageSize);
    };
    table.setPageSize = (updater) => {
      table.setPagination((old) => {
        const pageSize = Math.max(1, functionalUpdate(updater, old.pageSize));
        const topRowIndex = old.pageSize * old.pageIndex;
        const pageIndex = Math.floor(topRowIndex / pageSize);
        return __spreadProps(__spreadValues({}, old), {
          pageIndex,
          pageSize
        });
      });
    };
    table.setPageCount = (updater) => table.setPagination((old) => {
      var _table$options$pageCo;
      let newPageCount = functionalUpdate(updater, (_table$options$pageCo = table.options.pageCount) != null ? _table$options$pageCo : -1);
      if (typeof newPageCount === "number") {
        newPageCount = Math.max(-1, newPageCount);
      }
      return __spreadProps(__spreadValues({}, old), {
        pageCount: newPageCount
      });
    });
    table.getPageOptions = memo(() => [table.getPageCount()], (pageCount) => {
      let pageOptions = [];
      if (pageCount && pageCount > 0) {
        pageOptions = [...new Array(pageCount)].fill(null).map((_, i) => i);
      }
      return pageOptions;
    }, getMemoOptions(table.options, "debugTable", "getPageOptions"));
    table.getCanPreviousPage = () => table.getState().pagination.pageIndex > 0;
    table.getCanNextPage = () => {
      const {
        pageIndex
      } = table.getState().pagination;
      const pageCount = table.getPageCount();
      if (pageCount === -1) {
        return true;
      }
      if (pageCount === 0) {
        return false;
      }
      return pageIndex < pageCount - 1;
    };
    table.previousPage = () => {
      return table.setPageIndex((old) => old - 1);
    };
    table.nextPage = () => {
      return table.setPageIndex((old) => {
        return old + 1;
      });
    };
    table.firstPage = () => {
      return table.setPageIndex(0);
    };
    table.lastPage = () => {
      return table.setPageIndex(table.getPageCount() - 1);
    };
    table.getPrePaginationRowModel = () => table.getExpandedRowModel();
    table.getPaginationRowModel = () => {
      if (!table._getPaginationRowModel && table.options.getPaginationRowModel) {
        table._getPaginationRowModel = table.options.getPaginationRowModel(table);
      }
      if (table.options.manualPagination || !table._getPaginationRowModel) {
        return table.getPrePaginationRowModel();
      }
      return table._getPaginationRowModel();
    };
    table.getPageCount = () => {
      var _table$options$pageCo2;
      return (_table$options$pageCo2 = table.options.pageCount) != null ? _table$options$pageCo2 : Math.ceil(table.getRowCount() / table.getState().pagination.pageSize);
    };
    table.getRowCount = () => {
      var _table$options$rowCou;
      return (_table$options$rowCou = table.options.rowCount) != null ? _table$options$rowCou : table.getPrePaginationRowModel().rows.length;
    };
  }
};
var getDefaultRowPinningState = () => ({
  top: [],
  bottom: []
});
var RowPinning = {
  getInitialState: (state) => {
    return __spreadValues({
      rowPinning: getDefaultRowPinningState()
    }, state);
  },
  getDefaultOptions: (table) => {
    return {
      onRowPinningChange: makeStateUpdater("rowPinning", table)
    };
  },
  createRow: (row, table) => {
    row.pin = (position, includeLeafRows, includeParentRows) => {
      const leafRowIds = includeLeafRows ? row.getLeafRows().map((_ref) => {
        let {
          id
        } = _ref;
        return id;
      }) : [];
      const parentRowIds = includeParentRows ? row.getParentRows().map((_ref2) => {
        let {
          id
        } = _ref2;
        return id;
      }) : [];
      const rowIds = /* @__PURE__ */ new Set([...parentRowIds, row.id, ...leafRowIds]);
      table.setRowPinning((old) => {
        var _old$top3, _old$bottom3;
        if (position === "bottom") {
          var _old$top, _old$bottom;
          return {
            top: ((_old$top = old == null ? void 0 : old.top) != null ? _old$top : []).filter((d) => !(rowIds != null && rowIds.has(d))),
            bottom: [...((_old$bottom = old == null ? void 0 : old.bottom) != null ? _old$bottom : []).filter((d) => !(rowIds != null && rowIds.has(d))), ...Array.from(rowIds)]
          };
        }
        if (position === "top") {
          var _old$top2, _old$bottom2;
          return {
            top: [...((_old$top2 = old == null ? void 0 : old.top) != null ? _old$top2 : []).filter((d) => !(rowIds != null && rowIds.has(d))), ...Array.from(rowIds)],
            bottom: ((_old$bottom2 = old == null ? void 0 : old.bottom) != null ? _old$bottom2 : []).filter((d) => !(rowIds != null && rowIds.has(d)))
          };
        }
        return {
          top: ((_old$top3 = old == null ? void 0 : old.top) != null ? _old$top3 : []).filter((d) => !(rowIds != null && rowIds.has(d))),
          bottom: ((_old$bottom3 = old == null ? void 0 : old.bottom) != null ? _old$bottom3 : []).filter((d) => !(rowIds != null && rowIds.has(d)))
        };
      });
    };
    row.getCanPin = () => {
      var _ref3;
      const {
        enableRowPinning,
        enablePinning
      } = table.options;
      if (typeof enableRowPinning === "function") {
        return enableRowPinning(row);
      }
      return (_ref3 = enableRowPinning != null ? enableRowPinning : enablePinning) != null ? _ref3 : true;
    };
    row.getIsPinned = () => {
      const rowIds = [row.id];
      const {
        top,
        bottom
      } = table.getState().rowPinning;
      const isTop = rowIds.some((d) => top == null ? void 0 : top.includes(d));
      const isBottom = rowIds.some((d) => bottom == null ? void 0 : bottom.includes(d));
      return isTop ? "top" : isBottom ? "bottom" : false;
    };
    row.getPinnedIndex = () => {
      var _ref4, _visiblePinnedRowIds$;
      const position = row.getIsPinned();
      if (!position) return -1;
      const visiblePinnedRowIds = (_ref4 = position === "top" ? table.getTopRows() : table.getBottomRows()) == null ? void 0 : _ref4.map((_ref5) => {
        let {
          id
        } = _ref5;
        return id;
      });
      return (_visiblePinnedRowIds$ = visiblePinnedRowIds == null ? void 0 : visiblePinnedRowIds.indexOf(row.id)) != null ? _visiblePinnedRowIds$ : -1;
    };
  },
  createTable: (table) => {
    table.setRowPinning = (updater) => table.options.onRowPinningChange == null ? void 0 : table.options.onRowPinningChange(updater);
    table.resetRowPinning = (defaultState) => {
      var _table$initialState$r, _table$initialState;
      return table.setRowPinning(defaultState ? getDefaultRowPinningState() : (_table$initialState$r = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.rowPinning) != null ? _table$initialState$r : getDefaultRowPinningState());
    };
    table.getIsSomeRowsPinned = (position) => {
      var _pinningState$positio;
      const pinningState = table.getState().rowPinning;
      if (!position) {
        var _pinningState$top, _pinningState$bottom;
        return Boolean(((_pinningState$top = pinningState.top) == null ? void 0 : _pinningState$top.length) || ((_pinningState$bottom = pinningState.bottom) == null ? void 0 : _pinningState$bottom.length));
      }
      return Boolean((_pinningState$positio = pinningState[position]) == null ? void 0 : _pinningState$positio.length);
    };
    table._getPinnedRows = (visibleRows, pinnedRowIds, position) => {
      var _table$options$keepPi;
      const rows = ((_table$options$keepPi = table.options.keepPinnedRows) != null ? _table$options$keepPi : true) ? (
        //get all rows that are pinned even if they would not be otherwise visible
        //account for expanded parent rows, but not pagination or filtering
        (pinnedRowIds != null ? pinnedRowIds : []).map((rowId) => {
          const row = table.getRow(rowId, true);
          return row.getIsAllParentsExpanded() ? row : null;
        })
      ) : (
        //else get only visible rows that are pinned
        (pinnedRowIds != null ? pinnedRowIds : []).map((rowId) => visibleRows.find((row) => row.id === rowId))
      );
      return rows.filter(Boolean).map((d) => __spreadProps(__spreadValues({}, d), {
        position
      }));
    };
    table.getTopRows = memo(() => [table.getRowModel().rows, table.getState().rowPinning.top], (allRows, topPinnedRowIds) => table._getPinnedRows(allRows, topPinnedRowIds, "top"), getMemoOptions(table.options, "debugRows", "getTopRows"));
    table.getBottomRows = memo(() => [table.getRowModel().rows, table.getState().rowPinning.bottom], (allRows, bottomPinnedRowIds) => table._getPinnedRows(allRows, bottomPinnedRowIds, "bottom"), getMemoOptions(table.options, "debugRows", "getBottomRows"));
    table.getCenterRows = memo(() => [table.getRowModel().rows, table.getState().rowPinning.top, table.getState().rowPinning.bottom], (allRows, top, bottom) => {
      const topAndBottom = /* @__PURE__ */ new Set([...top != null ? top : [], ...bottom != null ? bottom : []]);
      return allRows.filter((d) => !topAndBottom.has(d.id));
    }, getMemoOptions(table.options, "debugRows", "getCenterRows"));
  }
};
var RowSelection = {
  getInitialState: (state) => {
    return __spreadValues({
      rowSelection: {}
    }, state);
  },
  getDefaultOptions: (table) => {
    return {
      onRowSelectionChange: makeStateUpdater("rowSelection", table),
      enableRowSelection: true,
      enableMultiRowSelection: true,
      enableSubRowSelection: true
      // enableGroupingRowSelection: false,
      // isAdditiveSelectEvent: (e: unknown) => !!e.metaKey,
      // isInclusiveSelectEvent: (e: unknown) => !!e.shiftKey,
    };
  },
  createTable: (table) => {
    table.setRowSelection = (updater) => table.options.onRowSelectionChange == null ? void 0 : table.options.onRowSelectionChange(updater);
    table.resetRowSelection = (defaultState) => {
      var _table$initialState$r;
      return table.setRowSelection(defaultState ? {} : (_table$initialState$r = table.initialState.rowSelection) != null ? _table$initialState$r : {});
    };
    table.toggleAllRowsSelected = (value) => {
      table.setRowSelection((old) => {
        value = typeof value !== "undefined" ? value : !table.getIsAllRowsSelected();
        const rowSelection = __spreadValues({}, old);
        const preGroupedFlatRows = table.getPreGroupedRowModel().flatRows;
        if (value) {
          preGroupedFlatRows.forEach((row) => {
            if (!row.getCanSelect()) {
              return;
            }
            rowSelection[row.id] = true;
          });
        } else {
          preGroupedFlatRows.forEach((row) => {
            delete rowSelection[row.id];
          });
        }
        return rowSelection;
      });
    };
    table.toggleAllPageRowsSelected = (value) => table.setRowSelection((old) => {
      const resolvedValue = typeof value !== "undefined" ? value : !table.getIsAllPageRowsSelected();
      const rowSelection = __spreadValues({}, old);
      table.getRowModel().rows.forEach((row) => {
        mutateRowIsSelected(rowSelection, row.id, resolvedValue, true, table);
      });
      return rowSelection;
    });
    table.getPreSelectedRowModel = () => table.getCoreRowModel();
    table.getSelectedRowModel = memo(() => [table.getState().rowSelection, table.getCoreRowModel()], (rowSelection, rowModel) => {
      if (!Object.keys(rowSelection).length) {
        return {
          rows: [],
          flatRows: [],
          rowsById: {}
        };
      }
      return selectRowsFn(table, rowModel);
    }, getMemoOptions(table.options, "debugTable", "getSelectedRowModel"));
    table.getFilteredSelectedRowModel = memo(() => [table.getState().rowSelection, table.getFilteredRowModel()], (rowSelection, rowModel) => {
      if (!Object.keys(rowSelection).length) {
        return {
          rows: [],
          flatRows: [],
          rowsById: {}
        };
      }
      return selectRowsFn(table, rowModel);
    }, getMemoOptions(table.options, "debugTable", "getFilteredSelectedRowModel"));
    table.getGroupedSelectedRowModel = memo(() => [table.getState().rowSelection, table.getSortedRowModel()], (rowSelection, rowModel) => {
      if (!Object.keys(rowSelection).length) {
        return {
          rows: [],
          flatRows: [],
          rowsById: {}
        };
      }
      return selectRowsFn(table, rowModel);
    }, getMemoOptions(table.options, "debugTable", "getGroupedSelectedRowModel"));
    table.getIsAllRowsSelected = () => {
      const preGroupedFlatRows = table.getFilteredRowModel().flatRows;
      const {
        rowSelection
      } = table.getState();
      let isAllRowsSelected = Boolean(preGroupedFlatRows.length && Object.keys(rowSelection).length);
      if (isAllRowsSelected) {
        if (preGroupedFlatRows.some((row) => row.getCanSelect() && !rowSelection[row.id])) {
          isAllRowsSelected = false;
        }
      }
      return isAllRowsSelected;
    };
    table.getIsAllPageRowsSelected = () => {
      const paginationFlatRows = table.getPaginationRowModel().flatRows.filter((row) => row.getCanSelect());
      const {
        rowSelection
      } = table.getState();
      let isAllPageRowsSelected = !!paginationFlatRows.length;
      if (isAllPageRowsSelected && paginationFlatRows.some((row) => !rowSelection[row.id])) {
        isAllPageRowsSelected = false;
      }
      return isAllPageRowsSelected;
    };
    table.getIsSomeRowsSelected = () => {
      var _table$getState$rowSe;
      const totalSelected = Object.keys((_table$getState$rowSe = table.getState().rowSelection) != null ? _table$getState$rowSe : {}).length;
      return totalSelected > 0 && totalSelected < table.getFilteredRowModel().flatRows.length;
    };
    table.getIsSomePageRowsSelected = () => {
      const paginationFlatRows = table.getPaginationRowModel().flatRows;
      return table.getIsAllPageRowsSelected() ? false : paginationFlatRows.filter((row) => row.getCanSelect()).some((d) => d.getIsSelected() || d.getIsSomeSelected());
    };
    table.getToggleAllRowsSelectedHandler = () => {
      return (e) => {
        table.toggleAllRowsSelected(e.target.checked);
      };
    };
    table.getToggleAllPageRowsSelectedHandler = () => {
      return (e) => {
        table.toggleAllPageRowsSelected(e.target.checked);
      };
    };
  },
  createRow: (row, table) => {
    row.toggleSelected = (value, opts) => {
      const isSelected = row.getIsSelected();
      table.setRowSelection((old) => {
        var _opts$selectChildren;
        value = typeof value !== "undefined" ? value : !isSelected;
        if (row.getCanSelect() && isSelected === value) {
          return old;
        }
        const selectedRowIds = __spreadValues({}, old);
        mutateRowIsSelected(selectedRowIds, row.id, value, (_opts$selectChildren = opts == null ? void 0 : opts.selectChildren) != null ? _opts$selectChildren : true, table);
        return selectedRowIds;
      });
    };
    row.getIsSelected = () => {
      const {
        rowSelection
      } = table.getState();
      return isRowSelected(row, rowSelection);
    };
    row.getIsSomeSelected = () => {
      const {
        rowSelection
      } = table.getState();
      return isSubRowSelected(row, rowSelection) === "some";
    };
    row.getIsAllSubRowsSelected = () => {
      const {
        rowSelection
      } = table.getState();
      return isSubRowSelected(row, rowSelection) === "all";
    };
    row.getCanSelect = () => {
      var _table$options$enable;
      if (typeof table.options.enableRowSelection === "function") {
        return table.options.enableRowSelection(row);
      }
      return (_table$options$enable = table.options.enableRowSelection) != null ? _table$options$enable : true;
    };
    row.getCanSelectSubRows = () => {
      var _table$options$enable2;
      if (typeof table.options.enableSubRowSelection === "function") {
        return table.options.enableSubRowSelection(row);
      }
      return (_table$options$enable2 = table.options.enableSubRowSelection) != null ? _table$options$enable2 : true;
    };
    row.getCanMultiSelect = () => {
      var _table$options$enable3;
      if (typeof table.options.enableMultiRowSelection === "function") {
        return table.options.enableMultiRowSelection(row);
      }
      return (_table$options$enable3 = table.options.enableMultiRowSelection) != null ? _table$options$enable3 : true;
    };
    row.getToggleSelectedHandler = () => {
      const canSelect = row.getCanSelect();
      return (e) => {
        var _target;
        if (!canSelect) return;
        row.toggleSelected((_target = e.target) == null ? void 0 : _target.checked);
      };
    };
  }
};
var mutateRowIsSelected = (selectedRowIds, id, value, includeChildren, table) => {
  var _row$subRows;
  const row = table.getRow(id, true);
  if (value) {
    if (!row.getCanMultiSelect()) {
      Object.keys(selectedRowIds).forEach((key) => delete selectedRowIds[key]);
    }
    if (row.getCanSelect()) {
      selectedRowIds[id] = true;
    }
  } else {
    delete selectedRowIds[id];
  }
  if (includeChildren && (_row$subRows = row.subRows) != null && _row$subRows.length && row.getCanSelectSubRows()) {
    row.subRows.forEach((row2) => mutateRowIsSelected(selectedRowIds, row2.id, value, includeChildren, table));
  }
};
function selectRowsFn(table, rowModel) {
  const rowSelection = table.getState().rowSelection;
  const newSelectedFlatRows = [];
  const newSelectedRowsById = {};
  const recurseRows = function(rows, depth) {
    return rows.map((row) => {
      var _row$subRows2;
      const isSelected = isRowSelected(row, rowSelection);
      if (isSelected) {
        newSelectedFlatRows.push(row);
        newSelectedRowsById[row.id] = row;
      }
      if ((_row$subRows2 = row.subRows) != null && _row$subRows2.length) {
        row = __spreadProps(__spreadValues({}, row), {
          subRows: recurseRows(row.subRows)
        });
      }
      if (isSelected) {
        return row;
      }
    }).filter(Boolean);
  };
  return {
    rows: recurseRows(rowModel.rows),
    flatRows: newSelectedFlatRows,
    rowsById: newSelectedRowsById
  };
}
function isRowSelected(row, selection) {
  var _selection$row$id;
  return (_selection$row$id = selection[row.id]) != null ? _selection$row$id : false;
}
function isSubRowSelected(row, selection, table) {
  var _row$subRows3;
  if (!((_row$subRows3 = row.subRows) != null && _row$subRows3.length)) return false;
  let allChildrenSelected = true;
  let someSelected = false;
  row.subRows.forEach((subRow) => {
    if (someSelected && !allChildrenSelected) {
      return;
    }
    if (subRow.getCanSelect()) {
      if (isRowSelected(subRow, selection)) {
        someSelected = true;
      } else {
        allChildrenSelected = false;
      }
    }
    if (subRow.subRows && subRow.subRows.length) {
      const subRowChildrenSelected = isSubRowSelected(subRow, selection);
      if (subRowChildrenSelected === "all") {
        someSelected = true;
      } else if (subRowChildrenSelected === "some") {
        someSelected = true;
        allChildrenSelected = false;
      } else {
        allChildrenSelected = false;
      }
    }
  });
  return allChildrenSelected ? "all" : someSelected ? "some" : false;
}
var reSplitAlphaNumeric = /([0-9]+)/gm;
var alphanumeric = (rowA, rowB, columnId) => {
  return compareAlphanumeric(toString(rowA.getValue(columnId)).toLowerCase(), toString(rowB.getValue(columnId)).toLowerCase());
};
var alphanumericCaseSensitive = (rowA, rowB, columnId) => {
  return compareAlphanumeric(toString(rowA.getValue(columnId)), toString(rowB.getValue(columnId)));
};
var text = (rowA, rowB, columnId) => {
  return compareBasic(toString(rowA.getValue(columnId)).toLowerCase(), toString(rowB.getValue(columnId)).toLowerCase());
};
var textCaseSensitive = (rowA, rowB, columnId) => {
  return compareBasic(toString(rowA.getValue(columnId)), toString(rowB.getValue(columnId)));
};
var datetime = (rowA, rowB, columnId) => {
  const a = rowA.getValue(columnId);
  const b = rowB.getValue(columnId);
  return a > b ? 1 : a < b ? -1 : 0;
};
var basic = (rowA, rowB, columnId) => {
  return compareBasic(rowA.getValue(columnId), rowB.getValue(columnId));
};
function compareBasic(a, b) {
  return a === b ? 0 : a > b ? 1 : -1;
}
function toString(a) {
  if (typeof a === "number") {
    if (isNaN(a) || a === Infinity || a === -Infinity) {
      return "";
    }
    return String(a);
  }
  if (typeof a === "string") {
    return a;
  }
  return "";
}
function compareAlphanumeric(aStr, bStr) {
  const a = aStr.split(reSplitAlphaNumeric).filter(Boolean);
  const b = bStr.split(reSplitAlphaNumeric).filter(Boolean);
  while (a.length && b.length) {
    const aa = a.shift();
    const bb = b.shift();
    const an = parseInt(aa, 10);
    const bn = parseInt(bb, 10);
    const combo = [an, bn].sort();
    if (isNaN(combo[0])) {
      if (aa > bb) {
        return 1;
      }
      if (bb > aa) {
        return -1;
      }
      continue;
    }
    if (isNaN(combo[1])) {
      return isNaN(an) ? -1 : 1;
    }
    if (an > bn) {
      return 1;
    }
    if (bn > an) {
      return -1;
    }
  }
  return a.length - b.length;
}
var sortingFns = {
  alphanumeric,
  alphanumericCaseSensitive,
  text,
  textCaseSensitive,
  datetime,
  basic
};
var RowSorting = {
  getInitialState: (state) => {
    return __spreadValues({
      sorting: []
    }, state);
  },
  getDefaultColumnDef: () => {
    return {
      sortingFn: "auto",
      sortUndefined: 1
    };
  },
  getDefaultOptions: (table) => {
    return {
      onSortingChange: makeStateUpdater("sorting", table),
      isMultiSortEvent: (e) => {
        return e.shiftKey;
      }
    };
  },
  createColumn: (column, table) => {
    column.getAutoSortingFn = () => {
      const firstRows = table.getFilteredRowModel().flatRows.slice(10);
      let isString = false;
      for (const row of firstRows) {
        const value = row == null ? void 0 : row.getValue(column.id);
        if (Object.prototype.toString.call(value) === "[object Date]") {
          return sortingFns.datetime;
        }
        if (typeof value === "string") {
          isString = true;
          if (value.split(reSplitAlphaNumeric).length > 1) {
            return sortingFns.alphanumeric;
          }
        }
      }
      if (isString) {
        return sortingFns.text;
      }
      return sortingFns.basic;
    };
    column.getAutoSortDir = () => {
      const firstRow = table.getFilteredRowModel().flatRows[0];
      const value = firstRow == null ? void 0 : firstRow.getValue(column.id);
      if (typeof value === "string") {
        return "asc";
      }
      return "desc";
    };
    column.getSortingFn = () => {
      var _table$options$sortin, _table$options$sortin2;
      if (!column) {
        throw new Error();
      }
      return isFunction(column.columnDef.sortingFn) ? column.columnDef.sortingFn : column.columnDef.sortingFn === "auto" ? column.getAutoSortingFn() : (_table$options$sortin = (_table$options$sortin2 = table.options.sortingFns) == null ? void 0 : _table$options$sortin2[column.columnDef.sortingFn]) != null ? _table$options$sortin : sortingFns[column.columnDef.sortingFn];
    };
    column.toggleSorting = (desc, multi) => {
      const nextSortingOrder = column.getNextSortingOrder();
      const hasManualValue = typeof desc !== "undefined" && desc !== null;
      table.setSorting((old) => {
        const existingSorting = old == null ? void 0 : old.find((d) => d.id === column.id);
        const existingIndex = old == null ? void 0 : old.findIndex((d) => d.id === column.id);
        let newSorting = [];
        let sortAction;
        let nextDesc = hasManualValue ? desc : nextSortingOrder === "desc";
        if (old != null && old.length && column.getCanMultiSort() && multi) {
          if (existingSorting) {
            sortAction = "toggle";
          } else {
            sortAction = "add";
          }
        } else {
          if (old != null && old.length && existingIndex !== old.length - 1) {
            sortAction = "replace";
          } else if (existingSorting) {
            sortAction = "toggle";
          } else {
            sortAction = "replace";
          }
        }
        if (sortAction === "toggle") {
          if (!hasManualValue) {
            if (!nextSortingOrder) {
              sortAction = "remove";
            }
          }
        }
        if (sortAction === "add") {
          var _table$options$maxMul;
          newSorting = [...old, {
            id: column.id,
            desc: nextDesc
          }];
          newSorting.splice(0, newSorting.length - ((_table$options$maxMul = table.options.maxMultiSortColCount) != null ? _table$options$maxMul : Number.MAX_SAFE_INTEGER));
        } else if (sortAction === "toggle") {
          newSorting = old.map((d) => {
            if (d.id === column.id) {
              return __spreadProps(__spreadValues({}, d), {
                desc: nextDesc
              });
            }
            return d;
          });
        } else if (sortAction === "remove") {
          newSorting = old.filter((d) => d.id !== column.id);
        } else {
          newSorting = [{
            id: column.id,
            desc: nextDesc
          }];
        }
        return newSorting;
      });
    };
    column.getFirstSortDir = () => {
      var _ref, _column$columnDef$sor;
      const sortDescFirst = (_ref = (_column$columnDef$sor = column.columnDef.sortDescFirst) != null ? _column$columnDef$sor : table.options.sortDescFirst) != null ? _ref : column.getAutoSortDir() === "desc";
      return sortDescFirst ? "desc" : "asc";
    };
    column.getNextSortingOrder = (multi) => {
      var _table$options$enable, _table$options$enable2;
      const firstSortDirection = column.getFirstSortDir();
      const isSorted = column.getIsSorted();
      if (!isSorted) {
        return firstSortDirection;
      }
      if (isSorted !== firstSortDirection && ((_table$options$enable = table.options.enableSortingRemoval) != null ? _table$options$enable : true) && // If enableSortRemove, enable in general
      (multi ? (_table$options$enable2 = table.options.enableMultiRemove) != null ? _table$options$enable2 : true : true)) {
        return false;
      }
      return isSorted === "desc" ? "asc" : "desc";
    };
    column.getCanSort = () => {
      var _column$columnDef$ena, _table$options$enable3;
      return ((_column$columnDef$ena = column.columnDef.enableSorting) != null ? _column$columnDef$ena : true) && ((_table$options$enable3 = table.options.enableSorting) != null ? _table$options$enable3 : true) && !!column.accessorFn;
    };
    column.getCanMultiSort = () => {
      var _ref2, _column$columnDef$ena2;
      return (_ref2 = (_column$columnDef$ena2 = column.columnDef.enableMultiSort) != null ? _column$columnDef$ena2 : table.options.enableMultiSort) != null ? _ref2 : !!column.accessorFn;
    };
    column.getIsSorted = () => {
      var _table$getState$sorti;
      const columnSort = (_table$getState$sorti = table.getState().sorting) == null ? void 0 : _table$getState$sorti.find((d) => d.id === column.id);
      return !columnSort ? false : columnSort.desc ? "desc" : "asc";
    };
    column.getSortIndex = () => {
      var _table$getState$sorti2, _table$getState$sorti3;
      return (_table$getState$sorti2 = (_table$getState$sorti3 = table.getState().sorting) == null ? void 0 : _table$getState$sorti3.findIndex((d) => d.id === column.id)) != null ? _table$getState$sorti2 : -1;
    };
    column.clearSorting = () => {
      table.setSorting((old) => old != null && old.length ? old.filter((d) => d.id !== column.id) : []);
    };
    column.getToggleSortingHandler = () => {
      const canSort = column.getCanSort();
      return (e) => {
        if (!canSort) return;
        e.persist == null || e.persist();
        column.toggleSorting == null || column.toggleSorting(void 0, column.getCanMultiSort() ? table.options.isMultiSortEvent == null ? void 0 : table.options.isMultiSortEvent(e) : false);
      };
    };
  },
  createTable: (table) => {
    table.setSorting = (updater) => table.options.onSortingChange == null ? void 0 : table.options.onSortingChange(updater);
    table.resetSorting = (defaultState) => {
      var _table$initialState$s, _table$initialState;
      table.setSorting(defaultState ? [] : (_table$initialState$s = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.sorting) != null ? _table$initialState$s : []);
    };
    table.getPreSortedRowModel = () => table.getGroupedRowModel();
    table.getSortedRowModel = () => {
      if (!table._getSortedRowModel && table.options.getSortedRowModel) {
        table._getSortedRowModel = table.options.getSortedRowModel(table);
      }
      if (table.options.manualSorting || !table._getSortedRowModel) {
        return table.getPreSortedRowModel();
      }
      return table._getSortedRowModel();
    };
  }
};
var builtInFeatures = [
  Headers,
  ColumnVisibility,
  ColumnOrdering,
  ColumnPinning,
  ColumnFaceting,
  ColumnFiltering,
  GlobalFaceting,
  //depends on ColumnFaceting
  GlobalFiltering,
  //depends on ColumnFiltering
  RowSorting,
  ColumnGrouping,
  //depends on RowSorting
  RowExpanding,
  RowPagination,
  RowPinning,
  RowSelection,
  ColumnSizing
];
function createTable(options) {
  var _options$_features, _options$initialState;
  if (options.debugAll || options.debugTable) {
    console.info("Creating Table Instance...");
  }
  const _features = [...builtInFeatures, ...(_options$_features = options._features) != null ? _options$_features : []];
  let table = {
    _features
  };
  const defaultOptions = table._features.reduce((obj, feature) => {
    return Object.assign(obj, feature.getDefaultOptions == null ? void 0 : feature.getDefaultOptions(table));
  }, {});
  const mergeOptions = (options2) => {
    if (table.options.mergeOptions) {
      return table.options.mergeOptions(defaultOptions, options2);
    }
    return __spreadValues(__spreadValues({}, defaultOptions), options2);
  };
  const coreInitialState = {};
  let initialState = __spreadValues(__spreadValues({}, coreInitialState), (_options$initialState = options.initialState) != null ? _options$initialState : {});
  table._features.forEach((feature) => {
    var _feature$getInitialSt;
    initialState = (_feature$getInitialSt = feature.getInitialState == null ? void 0 : feature.getInitialState(initialState)) != null ? _feature$getInitialSt : initialState;
  });
  const queued = [];
  let queuedTimeout = false;
  const coreInstance = {
    _features,
    options: __spreadValues(__spreadValues({}, defaultOptions), options),
    initialState,
    _queue: (cb) => {
      queued.push(cb);
      if (!queuedTimeout) {
        queuedTimeout = true;
        Promise.resolve().then(() => {
          while (queued.length) {
            queued.shift()();
          }
          queuedTimeout = false;
        }).catch((error) => setTimeout(() => {
          throw error;
        }));
      }
    },
    reset: () => {
      table.setState(table.initialState);
    },
    setOptions: (updater) => {
      const newOptions = functionalUpdate(updater, table.options);
      table.options = mergeOptions(newOptions);
    },
    getState: () => {
      return table.options.state;
    },
    setState: (updater) => {
      table.options.onStateChange == null || table.options.onStateChange(updater);
    },
    _getRowId: (row, index, parent) => {
      var _table$options$getRow;
      return (_table$options$getRow = table.options.getRowId == null ? void 0 : table.options.getRowId(row, index, parent)) != null ? _table$options$getRow : `${parent ? [parent.id, index].join(".") : index}`;
    },
    getCoreRowModel: () => {
      if (!table._getCoreRowModel) {
        table._getCoreRowModel = table.options.getCoreRowModel(table);
      }
      return table._getCoreRowModel();
    },
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => {
      return table.getPaginationRowModel();
    },
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (id, searchAll) => {
      let row = (searchAll ? table.getPrePaginationRowModel() : table.getRowModel()).rowsById[id];
      if (!row) {
        row = table.getCoreRowModel().rowsById[id];
        if (!row) {
          if (true) {
            throw new Error(`getRow could not find row with ID: ${id}`);
          }
          throw new Error();
        }
      }
      return row;
    },
    _getDefaultColumnDef: memo(() => [table.options.defaultColumn], (defaultColumn) => {
      var _defaultColumn;
      defaultColumn = (_defaultColumn = defaultColumn) != null ? _defaultColumn : {};
      return __spreadValues(__spreadValues({
        header: (props) => {
          const resolvedColumnDef = props.header.column.columnDef;
          if (resolvedColumnDef.accessorKey) {
            return resolvedColumnDef.accessorKey;
          }
          if (resolvedColumnDef.accessorFn) {
            return resolvedColumnDef.id;
          }
          return null;
        },
        // footer: props => props.header.column.id,
        cell: (props) => {
          var _props$renderValue$to, _props$renderValue;
          return (_props$renderValue$to = (_props$renderValue = props.renderValue()) == null || _props$renderValue.toString == null ? void 0 : _props$renderValue.toString()) != null ? _props$renderValue$to : null;
        }
      }, table._features.reduce((obj, feature) => {
        return Object.assign(obj, feature.getDefaultColumnDef == null ? void 0 : feature.getDefaultColumnDef());
      }, {})), defaultColumn);
    }, getMemoOptions(options, "debugColumns", "_getDefaultColumnDef")),
    _getColumnDefs: () => table.options.columns,
    getAllColumns: memo(() => [table._getColumnDefs()], (columnDefs) => {
      const recurseColumns = function(columnDefs2, parent, depth) {
        if (depth === void 0) {
          depth = 0;
        }
        return columnDefs2.map((columnDef) => {
          const column = createColumn(table, columnDef, depth, parent);
          const groupingColumnDef = columnDef;
          column.columns = groupingColumnDef.columns ? recurseColumns(groupingColumnDef.columns, column, depth + 1) : [];
          return column;
        });
      };
      return recurseColumns(columnDefs);
    }, getMemoOptions(options, "debugColumns", "getAllColumns")),
    getAllFlatColumns: memo(() => [table.getAllColumns()], (allColumns) => {
      return allColumns.flatMap((column) => {
        return column.getFlatColumns();
      });
    }, getMemoOptions(options, "debugColumns", "getAllFlatColumns")),
    _getAllFlatColumnsById: memo(() => [table.getAllFlatColumns()], (flatColumns) => {
      return flatColumns.reduce((acc, column) => {
        acc[column.id] = column;
        return acc;
      }, {});
    }, getMemoOptions(options, "debugColumns", "getAllFlatColumnsById")),
    getAllLeafColumns: memo(() => [table.getAllColumns(), table._getOrderColumnsFn()], (allColumns, orderColumns2) => {
      let leafColumns = allColumns.flatMap((column) => column.getLeafColumns());
      return orderColumns2(leafColumns);
    }, getMemoOptions(options, "debugColumns", "getAllLeafColumns")),
    getColumn: (columnId) => {
      const column = table._getAllFlatColumnsById()[columnId];
      if (!column) {
        console.error(`[Table] Column with id '${columnId}' does not exist.`);
      }
      return column;
    }
  };
  Object.assign(table, coreInstance);
  for (let index = 0; index < table._features.length; index++) {
    const feature = table._features[index];
    feature == null || feature.createTable == null || feature.createTable(table);
  }
  return table;
}
function getCoreRowModel() {
  return (table) => memo(() => [table.options.data], (data) => {
    const rowModel = {
      rows: [],
      flatRows: [],
      rowsById: {}
    };
    const accessRows = function(originalRows, depth, parentRow) {
      if (depth === void 0) {
        depth = 0;
      }
      const rows = [];
      for (let i = 0; i < originalRows.length; i++) {
        const row = createRow(table, table._getRowId(originalRows[i], i, parentRow), originalRows[i], i, depth, void 0, parentRow == null ? void 0 : parentRow.id);
        rowModel.flatRows.push(row);
        rowModel.rowsById[row.id] = row;
        rows.push(row);
        if (table.options.getSubRows) {
          var _row$originalSubRows;
          row.originalSubRows = table.options.getSubRows(originalRows[i], i);
          if ((_row$originalSubRows = row.originalSubRows) != null && _row$originalSubRows.length) {
            row.subRows = accessRows(row.originalSubRows, depth + 1, row);
          }
        }
      }
      return rows;
    };
    rowModel.rows = accessRows(data);
    return rowModel;
  }, getMemoOptions(table.options, "debugTable", "getRowModel", () => table._autoResetPageIndex()));
}
function getSortedRowModel() {
  return (table) => memo(() => [table.getState().sorting, table.getPreSortedRowModel()], (sorting, rowModel) => {
    if (!rowModel.rows.length || !(sorting != null && sorting.length)) {
      return rowModel;
    }
    const sortingState = table.getState().sorting;
    const sortedFlatRows = [];
    const availableSorting = sortingState.filter((sort) => {
      var _table$getColumn;
      return (_table$getColumn = table.getColumn(sort.id)) == null ? void 0 : _table$getColumn.getCanSort();
    });
    const columnInfoById = {};
    availableSorting.forEach((sortEntry) => {
      const column = table.getColumn(sortEntry.id);
      if (!column) return;
      columnInfoById[sortEntry.id] = {
        sortUndefined: column.columnDef.sortUndefined,
        invertSorting: column.columnDef.invertSorting,
        sortingFn: column.getSortingFn()
      };
    });
    const sortData = (rows) => {
      const sortedData = rows.map((row) => __spreadValues({}, row));
      sortedData.sort((rowA, rowB) => {
        for (let i = 0; i < availableSorting.length; i += 1) {
          var _sortEntry$desc;
          const sortEntry = availableSorting[i];
          const columnInfo = columnInfoById[sortEntry.id];
          const sortUndefined = columnInfo.sortUndefined;
          const isDesc = (_sortEntry$desc = sortEntry == null ? void 0 : sortEntry.desc) != null ? _sortEntry$desc : false;
          let sortInt = 0;
          if (sortUndefined) {
            const aValue = rowA.getValue(sortEntry.id);
            const bValue = rowB.getValue(sortEntry.id);
            const aUndefined = aValue === void 0;
            const bUndefined = bValue === void 0;
            if (aUndefined || bUndefined) {
              if (sortUndefined === "first") return aUndefined ? -1 : 1;
              if (sortUndefined === "last") return aUndefined ? 1 : -1;
              sortInt = aUndefined && bUndefined ? 0 : aUndefined ? sortUndefined : -sortUndefined;
            }
          }
          if (sortInt === 0) {
            sortInt = columnInfo.sortingFn(rowA, rowB, sortEntry.id);
          }
          if (sortInt !== 0) {
            if (isDesc) {
              sortInt *= -1;
            }
            if (columnInfo.invertSorting) {
              sortInt *= -1;
            }
            return sortInt;
          }
        }
        return rowA.index - rowB.index;
      });
      sortedData.forEach((row) => {
        var _row$subRows;
        sortedFlatRows.push(row);
        if ((_row$subRows = row.subRows) != null && _row$subRows.length) {
          row.subRows = sortData(row.subRows);
        }
      });
      return sortedData;
    };
    return {
      rows: sortData(rowModel.rows),
      flatRows: sortedFlatRows,
      rowsById: rowModel.rowsById
    };
  }, getMemoOptions(table.options, "debugTable", "getSortedRowModel", () => table._autoResetPageIndex()));
}

// node_modules/@tanstack/angular-table/build/lib/fesm2022/tanstack-angular-table.mjs
function lazyInit(initializer) {
  let object = null;
  const initializeObject = () => {
    if (!object) {
      object = untracked(() => initializer());
    }
  };
  queueMicrotask(() => initializeObject());
  const table = () => {
  };
  return new Proxy(table, {
    apply(target, thisArg, argArray) {
      initializeObject();
      if (typeof object === "function") {
        return Reflect.apply(object, thisArg, argArray);
      }
      return Reflect.apply(target, thisArg, argArray);
    },
    get(_, prop, receiver) {
      initializeObject();
      return Reflect.get(object, prop, receiver);
    },
    has(_, prop) {
      initializeObject();
      return Reflect.has(object, prop);
    },
    ownKeys() {
      initializeObject();
      return Reflect.ownKeys(object);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: true,
        configurable: true
      };
    }
  });
}
function proxifyTable(tableSignal) {
  const internalState = tableSignal;
  return new Proxy(internalState, {
    apply() {
      return tableSignal();
    },
    get(target, property) {
      if (target[property]) {
        return target[property];
      }
      const table = untracked(tableSignal);
      if (property.startsWith("get") && !property.endsWith("Handler")) {
        const maybeFn = table[property];
        if (typeof maybeFn === "function") {
          Object.defineProperty(target, property, {
            value: toComputed(tableSignal, maybeFn),
            configurable: true,
            enumerable: true
          });
          return target[property];
        }
      }
      return target[property] = table[property];
    },
    has(_, prop) {
      return !!untracked(tableSignal)[prop];
    },
    ownKeys() {
      return Reflect.ownKeys(untracked(tableSignal));
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: true,
        configurable: true
      };
    }
  });
}
function toComputed(signal2, fn) {
  const hasArgs = fn.length > 0;
  if (!hasArgs) {
    return computed(() => {
      void signal2();
      return fn();
    });
  }
  const computedCache = {};
  return (...argsArray) => {
    const serializedArgs = serializeArgs(...argsArray);
    if (computedCache.hasOwnProperty(serializedArgs)) {
      return computedCache[serializedArgs]?.();
    }
    const computedSignal = computed(() => {
      void signal2();
      return fn(...argsArray);
    });
    computedCache[serializedArgs] = computedSignal;
    return computedSignal();
  };
}
function serializeArgs(...args) {
  return JSON.stringify(args);
}
var FlexRenderComponentProps = new InjectionToken("[@tanstack/angular-table] Flex render component context props");
var FlexRenderFlags;
(function(FlexRenderFlags2) {
  FlexRenderFlags2[FlexRenderFlags2["ViewFirstRender"] = 1] = "ViewFirstRender";
  FlexRenderFlags2[FlexRenderFlags2["Pristine"] = 2] = "Pristine";
  FlexRenderFlags2[FlexRenderFlags2["ContentChanged"] = 4] = "ContentChanged";
  FlexRenderFlags2[FlexRenderFlags2["PropsReferenceChanged"] = 8] = "PropsReferenceChanged";
  FlexRenderFlags2[FlexRenderFlags2["DirtyCheck"] = 16] = "DirtyCheck";
  FlexRenderFlags2[FlexRenderFlags2["DirtySignal"] = 32] = "DirtySignal";
  FlexRenderFlags2[FlexRenderFlags2["RenderEffectChecked"] = 64] = "RenderEffectChecked";
})(FlexRenderFlags || (FlexRenderFlags = {}));
function flexRenderComponent(component, ...options) {
  const {
    inputs,
    injector,
    outputs
  } = options?.[0] ?? {};
  return new FlexRenderComponent(component, inputs, injector, outputs);
}
var FlexRenderComponent = class {
  component;
  inputs;
  injector;
  outputs;
  mirror;
  allowedInputNames = [];
  allowedOutputNames = [];
  constructor(component, inputs, injector, outputs) {
    this.component = component;
    this.inputs = inputs;
    this.injector = injector;
    this.outputs = outputs;
    const mirror = reflectComponentType(component);
    if (!mirror) {
      throw new Error(`[@tanstack-table/angular] The provided symbol is not a component`);
    }
    this.mirror = mirror;
    for (const input of this.mirror.inputs) {
      this.allowedInputNames.push(input.propName);
    }
    for (const output of this.mirror.outputs) {
      this.allowedOutputNames.push(output.propName);
    }
  }
};
var FlexRenderComponentFactory = class _FlexRenderComponentFactory {
  #viewContainerRef = inject(ViewContainerRef);
  createComponent(flexRenderComponent2, componentInjector) {
    const componentRef = this.#viewContainerRef.createComponent(flexRenderComponent2.component, {
      injector: componentInjector
    });
    const view = new FlexRenderComponentRef(componentRef, flexRenderComponent2, componentInjector);
    const {
      inputs,
      outputs
    } = flexRenderComponent2;
    if (inputs) view.setInputs(inputs);
    if (outputs) view.setOutputs(outputs);
    return view;
  }
  static \u0275fac = function FlexRenderComponentFactory_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FlexRenderComponentFactory)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _FlexRenderComponentFactory,
    factory: _FlexRenderComponentFactory.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlexRenderComponentFactory, [{
    type: Injectable
  }], null, null);
})();
var FlexRenderComponentRef = class {
  componentRef;
  componentInjector;
  #keyValueDiffersFactory;
  #componentData;
  #inputValueDiffer;
  #outputRegistry;
  constructor(componentRef, componentData, componentInjector) {
    this.componentRef = componentRef;
    this.componentInjector = componentInjector;
    this.#componentData = componentData;
    this.#keyValueDiffersFactory = componentInjector.get(KeyValueDiffers);
    this.#outputRegistry = new FlexRenderComponentOutputManager(this.#keyValueDiffersFactory, this.outputs);
    this.#inputValueDiffer = this.#keyValueDiffersFactory.find(this.inputs).create();
    this.#inputValueDiffer.diff(this.inputs);
    this.componentRef.onDestroy(() => this.#outputRegistry.unsubscribeAll());
  }
  get component() {
    return this.#componentData.component;
  }
  get inputs() {
    return this.#componentData.inputs ?? {};
  }
  get outputs() {
    return this.#componentData.outputs ?? {};
  }
  /**
   * Get component input and output diff by the given item
   */
  diff(item) {
    return {
      inputDiff: this.#inputValueDiffer.diff(item.inputs ?? {}),
      outputDiff: this.#outputRegistry.diff(item.outputs ?? {})
    };
  }
  /**
   *
   * @param compare Whether the current ref component instance is the same as the given one
   */
  eqType(compare) {
    return compare.component === this.component;
  }
  /**
   * Tries to update current component refs input by the new given content component.
   */
  update(content) {
    const eq = this.eqType(content);
    if (!eq) return;
    const {
      inputDiff,
      outputDiff
    } = this.diff(content);
    if (inputDiff) {
      inputDiff.forEachAddedItem((item) => this.setInput(item.key, item.currentValue));
      inputDiff.forEachChangedItem((item) => this.setInput(item.key, item.currentValue));
      inputDiff.forEachRemovedItem((item) => this.setInput(item.key, void 0));
    }
    if (outputDiff) {
      outputDiff.forEachAddedItem((item) => {
        this.setOutput(item.key, item.currentValue);
      });
      outputDiff.forEachChangedItem((item) => {
        if (item.currentValue) {
          this.#outputRegistry.setListener(item.key, item.currentValue);
        } else {
          this.#outputRegistry.unsubscribe(item.key);
        }
      });
      outputDiff.forEachRemovedItem((item) => {
        this.#outputRegistry.unsubscribe(item.key);
      });
    }
    this.#componentData = content;
  }
  markAsDirty() {
    this.componentRef.injector.get(ChangeDetectorRef).markForCheck();
  }
  setInputs(inputs) {
    for (const prop in inputs) {
      this.setInput(prop, inputs[prop]);
    }
  }
  setInput(key, value) {
    if (this.#componentData.allowedInputNames.includes(key)) {
      this.componentRef.setInput(key, value);
    }
  }
  setOutputs(outputs) {
    this.#outputRegistry.unsubscribeAll();
    for (const prop in outputs) {
      this.setOutput(prop, outputs[prop]);
    }
  }
  setOutput(outputName, emit) {
    if (!this.#componentData.allowedOutputNames.includes(outputName)) return;
    if (!emit) {
      this.#outputRegistry.unsubscribe(outputName);
      return;
    }
    const hasListener = this.#outputRegistry.hasListener(outputName);
    this.#outputRegistry.setListener(outputName, emit);
    if (hasListener) {
      return;
    }
    const instance = this.componentRef.instance;
    const output = instance[outputName];
    if (output && output instanceof OutputEmitterRef) {
      output.subscribe((value) => {
        this.#outputRegistry.getListener(outputName)?.(value);
      });
    }
  }
};
var FlexRenderComponentOutputManager = class {
  #outputSubscribers = {};
  #outputListeners = {};
  #valueDiffer;
  constructor(keyValueDiffers, initialOutputs) {
    this.#valueDiffer = keyValueDiffers.find(initialOutputs).create();
    if (initialOutputs) {
      this.#valueDiffer.diff(initialOutputs);
    }
  }
  hasListener(outputName) {
    return outputName in this.#outputListeners;
  }
  setListener(outputName, callback) {
    this.#outputListeners[outputName] = callback;
  }
  getListener(outputName) {
    return this.#outputListeners[outputName];
  }
  unsubscribeAll() {
    for (const prop in this.#outputSubscribers) {
      this.unsubscribe(prop);
    }
  }
  unsubscribe(outputName) {
    if (outputName in this.#outputSubscribers) {
      this.#outputSubscribers[outputName]?.unsubscribe();
      delete this.#outputSubscribers[outputName];
      delete this.#outputListeners[outputName];
    }
  }
  diff(outputs) {
    return this.#valueDiffer.diff(outputs ?? {});
  }
};
function mapToFlexRenderTypedContent(content) {
  if (content === null || content === void 0) {
    return {
      kind: "null"
    };
  }
  if (typeof content === "string" || typeof content === "number") {
    return {
      kind: "primitive",
      content
    };
  }
  if (content instanceof FlexRenderComponent) {
    return {
      kind: "flexRenderComponent",
      content
    };
  } else if (content instanceof TemplateRef) {
    return {
      kind: "templateRef",
      content
    };
  } else if (content instanceof Type) {
    return {
      kind: "component",
      content
    };
  } else {
    return {
      kind: "primitive",
      content
    };
  }
}
var FlexRenderView = class {
  view;
  #previousContent;
  #content;
  constructor(initialContent, view) {
    this.#content = initialContent;
    this.view = view;
  }
  get previousContent() {
    return this.#previousContent ?? {
      kind: "null"
    };
  }
  get content() {
    return this.#content;
  }
  set content(content) {
    this.#previousContent = this.#content;
    this.#content = content;
  }
};
var FlexRenderTemplateView = class extends FlexRenderView {
  constructor(initialContent, view) {
    super(initialContent, view);
  }
  updateProps(props) {
    this.view.markForCheck();
  }
  dirtyCheck() {
  }
  onDestroy(callback) {
    this.view.onDestroy(callback);
  }
};
var FlexRenderComponentView = class extends FlexRenderView {
  constructor(initialContent, view) {
    super(initialContent, view);
  }
  updateProps(props) {
    switch (this.content.kind) {
      case "component": {
        this.view.setInputs(props);
        break;
      }
      case "flexRenderComponent": {
        break;
      }
    }
  }
  dirtyCheck() {
    switch (this.content.kind) {
      case "component": {
        this.view.markAsDirty();
        break;
      }
      case "flexRenderComponent": {
        if (this.view.eqType(this.content.content)) {
          this.view.update(this.content.content);
        }
        this.view.markAsDirty();
        break;
      }
    }
  }
  onDestroy(callback) {
    this.view.componentRef.onDestroy(callback);
  }
};
var FlexRenderDirective = class _FlexRenderDirective {
  viewContainerRef;
  templateRef;
  #flexRenderComponentFactory = inject(FlexRenderComponentFactory);
  #changeDetectorRef = inject(ChangeDetectorRef);
  content = void 0;
  props = {};
  injector = inject(Injector);
  renderFlags = FlexRenderFlags.ViewFirstRender;
  renderView = null;
  #latestContent = () => {
    const {
      content,
      props
    } = this;
    return typeof content !== "function" ? content : runInInjectionContext(this.injector, () => content(props));
  };
  #getContentValue = memo(() => [this.#latestContent(), this.props, this.content], (latestContent) => {
    return mapToFlexRenderTypedContent(latestContent);
  }, {
    key: "flexRenderContentValue",
    debug: () => false
  });
  constructor(viewContainerRef, templateRef) {
    this.viewContainerRef = viewContainerRef;
    this.templateRef = templateRef;
  }
  ngOnChanges(changes) {
    if (changes["props"]) {
      this.renderFlags |= FlexRenderFlags.PropsReferenceChanged;
    }
    if (changes["content"]) {
      this.renderFlags |= FlexRenderFlags.ContentChanged | FlexRenderFlags.ViewFirstRender;
      this.update();
    }
  }
  ngDoCheck() {
    if (this.renderFlags & FlexRenderFlags.ViewFirstRender) {
      this.renderFlags &= ~FlexRenderFlags.ViewFirstRender;
      return;
    }
    this.renderFlags |= FlexRenderFlags.DirtyCheck;
    const latestContent = this.#getContentValue();
    if (latestContent.kind === "null" || !this.renderView) {
      this.renderFlags |= FlexRenderFlags.ContentChanged;
    } else {
      this.renderView.content = latestContent;
      const {
        kind: previousKind
      } = this.renderView.previousContent;
      if (latestContent.kind !== previousKind) {
        this.renderFlags |= FlexRenderFlags.ContentChanged;
      }
    }
    this.update();
  }
  update() {
    if (this.renderFlags & (FlexRenderFlags.ContentChanged | FlexRenderFlags.ViewFirstRender)) {
      this.render();
      return;
    }
    if (this.renderFlags & FlexRenderFlags.PropsReferenceChanged) {
      if (this.renderView) this.renderView.updateProps(this.props);
      this.renderFlags &= ~FlexRenderFlags.PropsReferenceChanged;
    }
    if (this.renderFlags & (FlexRenderFlags.DirtyCheck | FlexRenderFlags.DirtySignal)) {
      if (this.renderView) this.renderView.dirtyCheck();
      this.renderFlags &= ~(FlexRenderFlags.DirtyCheck | FlexRenderFlags.DirtySignal);
    }
  }
  #currentEffectRef = null;
  render() {
    if (this.#shouldRecreateEntireView() && this.#currentEffectRef) {
      this.#currentEffectRef.destroy();
      this.#currentEffectRef = null;
      this.renderFlags &= ~FlexRenderFlags.RenderEffectChecked;
    }
    this.viewContainerRef.clear();
    this.renderFlags = FlexRenderFlags.Pristine | this.renderFlags & FlexRenderFlags.ViewFirstRender | this.renderFlags & FlexRenderFlags.RenderEffectChecked;
    const resolvedContent = this.#getContentValue();
    if (resolvedContent.kind === "null") {
      this.renderView = null;
    } else {
      this.renderView = this.#renderViewByContent(resolvedContent);
    }
    if (!this.#currentEffectRef && typeof this.content === "function") {
      this.#currentEffectRef = effect(() => {
        this.#latestContent();
        if (!(this.renderFlags & FlexRenderFlags.RenderEffectChecked)) {
          this.renderFlags |= FlexRenderFlags.RenderEffectChecked;
          return;
        }
        this.renderFlags |= FlexRenderFlags.DirtySignal;
        this.#changeDetectorRef.markForCheck();
      }, {
        injector: this.viewContainerRef.injector
      });
    }
  }
  #shouldRecreateEntireView() {
    return this.renderFlags & FlexRenderFlags.ContentChanged & FlexRenderFlags.ViewFirstRender;
  }
  #renderViewByContent(content) {
    if (content.kind === "primitive") {
      return this.#renderStringContent(content);
    } else if (content.kind === "templateRef") {
      return this.#renderTemplateRefContent(content);
    } else if (content.kind === "flexRenderComponent") {
      return this.#renderComponent(content);
    } else if (content.kind === "component") {
      return this.#renderCustomComponent(content);
    } else {
      return null;
    }
  }
  #renderStringContent(template) {
    const context = () => {
      return typeof this.content === "string" || typeof this.content === "number" ? this.content : this.content?.(this.props);
    };
    const ref = this.viewContainerRef.createEmbeddedView(this.templateRef, {
      get $implicit() {
        return context();
      }
    });
    return new FlexRenderTemplateView(template, ref);
  }
  #renderTemplateRefContent(template) {
    const latestContext = () => this.props;
    const view = this.viewContainerRef.createEmbeddedView(template.content, {
      get $implicit() {
        return latestContext();
      }
    });
    return new FlexRenderTemplateView(template, view);
  }
  #renderComponent(flexRenderComponent2) {
    const {
      inputs,
      outputs,
      injector
    } = flexRenderComponent2.content;
    const getContext = () => this.props;
    const proxy = new Proxy(this.props, {
      get: (_, key) => getContext()[key]
    });
    const componentInjector = Injector.create({
      parent: injector ?? this.injector,
      providers: [{
        provide: FlexRenderComponentProps,
        useValue: proxy
      }]
    });
    const view = this.#flexRenderComponentFactory.createComponent(flexRenderComponent2.content, componentInjector);
    return new FlexRenderComponentView(flexRenderComponent2, view);
  }
  #renderCustomComponent(component) {
    const view = this.#flexRenderComponentFactory.createComponent(flexRenderComponent(component.content, {
      inputs: this.props,
      injector: this.injector
    }), this.injector);
    return new FlexRenderComponentView(component, view);
  }
  static \u0275fac = function FlexRenderDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FlexRenderDirective)(\u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(TemplateRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FlexRenderDirective,
    selectors: [["", "flexRender", ""]],
    inputs: {
      content: [0, "flexRender", "content"],
      props: [0, "flexRenderProps", "props"],
      injector: [0, "flexRenderInjector", "injector"]
    },
    features: [\u0275\u0275ProvidersFeature([FlexRenderComponentFactory]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlexRenderDirective, [{
    type: Directive,
    args: [{
      selector: "[flexRender]",
      standalone: true,
      providers: [FlexRenderComponentFactory]
    }]
  }], () => [{
    type: ViewContainerRef,
    decorators: [{
      type: Inject,
      args: [ViewContainerRef]
    }]
  }, {
    type: TemplateRef,
    decorators: [{
      type: Inject,
      args: [TemplateRef]
    }]
  }], {
    content: [{
      type: Input,
      args: [{
        required: true,
        alias: "flexRender"
      }]
    }],
    props: [{
      type: Input,
      args: [{
        required: true,
        alias: "flexRenderProps"
      }]
    }],
    injector: [{
      type: Input,
      args: [{
        required: false,
        alias: "flexRenderInjector"
      }]
    }]
  });
})();
function createAngularTable(options) {
  return lazyInit(() => {
    const resolvedOptions = __spreadValues({
      state: {},
      onStateChange: () => {
      },
      renderFallbackValue: null
    }, options());
    const table = createTable(resolvedOptions);
    const state = signal(table.initialState);
    const updatedOptions = computed(() => {
      const tableState = state();
      const tableOptions = options();
      return __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, table.options), resolvedOptions), tableOptions), {
        state: __spreadValues(__spreadValues({}, tableState), tableOptions.state),
        onStateChange: (updater) => {
          const value = updater instanceof Function ? updater(tableState) : updater;
          state.set(value);
          resolvedOptions.onStateChange?.(updater);
        }
      });
    });
    const tableSignal = computed(() => {
      table.setOptions(updatedOptions());
      return table;
    }, {
      equal: () => false
    });
    return proxifyTable(tableSignal);
  });
}

// src/app/pages/admin/dashboard/admin-dashboard.component.ts
var _c0 = () => [1, 2, 3, 4];
var _c1 = () => [1, 2, 3, 4, 5, 6];
var _c2 = () => [1, 2, 3];
var _c3 = () => [1, 2, 3, 4, 5];
var _c4 = () => ["55%", "70%", "40%", "85%", "60%", "75%"];
var _c5 = () => ["8rem", "6rem", "7rem"];
var _c6 = () => ({ status: "Failed" });
var _c7 = () => ({ status: "OnHold" });
var _c8 = () => ({ status: "Pending" });
var _c9 = () => ({ status: "Processing" });
var _c10 = () => ({ status: "Completed" });
var _c11 = () => ({ status: "Cancelled" });
var _c12 = (a0) => ["/admin/transactions", a0];
var _forTrack0 = ($index, $item) => $item.id;
function AdminDashboardComponent_ng_container_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "div", 34);
    \u0275\u0275element(3, "div", 35)(4, "div", 36)(5, "div", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "div", 38);
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_ng_container_11_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 39);
  }
  if (rf & 2) {
    const i_r1 = ctx.$implicit;
    \u0275\u0275styleProp("height", \u0275\u0275pureFunction0(2, _c4)[i_r1 - 1]);
  }
}
function AdminDashboardComponent_ng_container_11_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275element(1, "div", 41)(2, "div", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", \u0275\u0275pureFunction0(2, _c5)[i_r2 - 1]);
  }
}
function AdminDashboardComponent_ng_container_11_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275element(1, "div", 44)(2, "div", 45)(3, "div", 46);
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_ng_container_11_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "div", 44)(2, "div", 48);
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_ng_container_11_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 49);
  }
}
function AdminDashboardComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 8);
    \u0275\u0275template(2, AdminDashboardComponent_ng_container_11_div_2_Template, 7, 0, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10)(4, "div", 11);
    \u0275\u0275element(5, "div", 12);
    \u0275\u0275elementStart(6, "div", 13);
    \u0275\u0275template(7, AdminDashboardComponent_ng_container_11_div_7_Template, 1, 3, "div", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 11);
    \u0275\u0275element(9, "div", 15);
    \u0275\u0275elementStart(10, "div", 16)(11, "div", 17);
    \u0275\u0275element(12, "div", 18)(13, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 20);
    \u0275\u0275template(15, AdminDashboardComponent_ng_container_11_div_15_Template, 3, 3, "div", 21);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 22)(17, "div", 23);
    \u0275\u0275element(18, "div", 24);
    \u0275\u0275template(19, AdminDashboardComponent_ng_container_11_div_19_Template, 4, 0, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 26)(21, "div", 11);
    \u0275\u0275element(22, "div", 27);
    \u0275\u0275template(23, AdminDashboardComponent_ng_container_11_div_23_Template, 3, 0, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 11);
    \u0275\u0275element(25, "div", 29);
    \u0275\u0275elementStart(26, "div", 30);
    \u0275\u0275template(27, AdminDashboardComponent_ng_container_11_div_27_Template, 1, 0, "div", 31);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(6, _c0));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(7, _c1));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(8, _c2));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(9, _c3));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(10, _c2));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(11, _c2));
  }
}
function AdminDashboardComponent_ng_container_12_p_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 135);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.dashboard.pendingAgents, " pending approval ");
  }
}
function AdminDashboardComponent_ng_container_12_p_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 136);
    \u0275\u0275text(1, " No pending approvals ");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_ng_container_12_p_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 137);
    \u0275\u0275text(1, "Requires attention");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_ng_container_12_p_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 136);
    \u0275\u0275text(1, "All clear");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_ng_container_12_div_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 138)(1, "div", 139)(2, "div", 140);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 58);
    \u0275\u0275element(4, "path", 72);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 141)(6, "p", 142);
    \u0275\u0275text(7, "Requires Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 143);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "a", 144);
    \u0275\u0275text(11, " Review Now ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate2(" ", ctx_r2.dashboard.failedTransactions, " failed \xB7 ", ctx_r2.dashboard.onHoldTransactions, " on hold ");
    \u0275\u0275advance();
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(3, _c6));
  }
}
function AdminDashboardComponent_ng_container_12_div_136_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 145)(1, "div", 146);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 147);
    \u0275\u0275element(3, "path", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p", 148);
    \u0275\u0275text(5, "No transactions yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 149);
    \u0275\u0275text(7, "Recent activity will appear here");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_ng_container_12_div_137_For_4_For_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const headerText_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", headerText_r6, " ");
  }
}
function AdminDashboardComponent_ng_container_12_div_137_For_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 156);
    \u0275\u0275listener("click", function AdminDashboardComponent_ng_container_12_div_137_For_4_For_2_Template_th_click_0_listener($event) {
      let tmp_23_0;
      const header_r5 = \u0275\u0275restoreView(_r4).$implicit;
      return \u0275\u0275resetView((tmp_23_0 = header_r5.column.getToggleSortingHandler()) == null ? null : tmp_23_0($event));
    });
    \u0275\u0275elementStart(1, "div", 157);
    \u0275\u0275template(2, AdminDashboardComponent_ng_container_12_div_137_For_4_For_2_ng_container_2_Template, 2, 1, "ng-container", 158);
    \u0275\u0275elementStart(3, "span", 159);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const header_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("flexRender", header_r5.column.columnDef.header)("flexRenderProps", header_r5.getContext());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getSortIcon(header_r5.column.id));
  }
}
function AdminDashboardComponent_ng_container_12_div_137_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 152);
    \u0275\u0275repeaterCreate(1, AdminDashboardComponent_ng_container_12_div_137_For_4_For_2_Template, 5, 3, "th", 155, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const headerGroup_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(headerGroup_r7.headers);
  }
}
function AdminDashboardComponent_ng_container_12_div_137_For_7_For_2_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cellValue_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cellValue_r8);
  }
}
function AdminDashboardComponent_ng_container_12_div_137_For_7_For_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 161);
    \u0275\u0275template(2, AdminDashboardComponent_ng_container_12_div_137_For_7_For_2_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 158);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cell_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("flexRender", cell_r9.column.columnDef.cell)("flexRenderProps", cell_r9.getContext());
  }
}
function AdminDashboardComponent_ng_container_12_div_137_For_7_For_2_ng_container_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cellValue_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cellValue_r10);
  }
}
function AdminDashboardComponent_ng_container_12_div_137_For_7_For_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 162);
    \u0275\u0275element(2, "span", 163);
    \u0275\u0275template(3, AdminDashboardComponent_ng_container_12_div_137_For_7_For_2_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 158);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cell_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.getStatusClass("" + cell_r9.getValue()));
    \u0275\u0275advance(2);
    \u0275\u0275property("flexRender", cell_r9.column.columnDef.cell)("flexRenderProps", cell_r9.getContext());
  }
}
function AdminDashboardComponent_ng_container_12_div_137_For_7_For_2_ng_container_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cellValue_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cellValue_r11);
  }
}
function AdminDashboardComponent_ng_container_12_div_137_For_7_For_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 164);
    \u0275\u0275template(2, AdminDashboardComponent_ng_container_12_div_137_For_7_For_2_ng_container_3_ng_container_2_Template, 2, 1, "ng-container", 158);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cell_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("flexRender", cell_r9.column.columnDef.cell)("flexRenderProps", cell_r9.getContext());
  }
}
function AdminDashboardComponent_ng_container_12_div_137_For_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 160);
    \u0275\u0275template(1, AdminDashboardComponent_ng_container_12_div_137_For_7_For_2_ng_container_1_Template, 3, 2, "ng-container", 7)(2, AdminDashboardComponent_ng_container_12_div_137_For_7_For_2_ng_container_2_Template, 4, 3, "ng-container", 7)(3, AdminDashboardComponent_ng_container_12_div_137_For_7_For_2_ng_container_3_Template, 3, 2, "ng-container", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cell_r9.column.id === "referenceNumber");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cell_r9.column.id === "status");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cell_r9.column.id !== "referenceNumber" && cell_r9.column.id !== "status");
  }
}
function AdminDashboardComponent_ng_container_12_div_137_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 154);
    \u0275\u0275repeaterCreate(1, AdminDashboardComponent_ng_container_12_div_137_For_7_For_2_Template, 4, 3, "td", 160, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r12 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c12, row_r12.original.referenceNumber));
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r12.getVisibleCells());
  }
}
function AdminDashboardComponent_ng_container_12_div_137_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 150)(1, "table", 151)(2, "thead");
    \u0275\u0275repeaterCreate(3, AdminDashboardComponent_ng_container_12_div_137_For_4_Template, 3, 0, "tr", 152, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "tbody", 153);
    \u0275\u0275repeaterCreate(6, AdminDashboardComponent_ng_container_12_div_137_For_7_Template, 3, 3, "tr", 154, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.table.getHeaderGroups());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.table.getRowModel().rows);
  }
}
function AdminDashboardComponent_ng_container_12_div_145_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 165);
    \u0275\u0275text(1, " No active rates configured. ");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_ng_container_12_div_146_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 168)(1, "div", 157)(2, "span", 169);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 170);
    \u0275\u0275element(5, "path", 171);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span", 169);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 172);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const rate_r13 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(rate_r13.sourceCurrency);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(rate_r13.destinationCurrency);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 3, rate_r13.rate, "1.2-4"), " ");
  }
}
function AdminDashboardComponent_ng_container_12_div_146_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 166);
    \u0275\u0275template(1, AdminDashboardComponent_ng_container_12_div_146_div_1_Template, 11, 6, "div", 167);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.dashboard.activeExchangeRates);
  }
}
function AdminDashboardComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 50)(2, "a", 51)(3, "div", 52)(4, "div", 53)(5, "p", 54);
    \u0275\u0275text(6, "Total Transactions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 55);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 56);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 57);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 58);
    \u0275\u0275element(14, "path", 6);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "a", 59)(16, "div", 52)(17, "div", 53)(18, "p", 54);
    \u0275\u0275text(19, "Service Charge Revenue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 60);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 56);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 61);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 58);
    \u0275\u0275element(26, "path", 62);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "a", 63)(28, "div", 52)(29, "div", 53)(30, "p", 54);
    \u0275\u0275text(31, "Active Agents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p", 55);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, AdminDashboardComponent_ng_container_12_p_34_Template, 2, 1, "p", 64)(35, AdminDashboardComponent_ng_container_12_p_35_Template, 2, 0, "p", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 66);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(37, "svg", 58);
    \u0275\u0275element(38, "path", 67);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(39, "a", 68)(40, "div", 52)(41, "div", 53)(42, "p", 54);
    \u0275\u0275text(43, "Compliance Alerts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "p", 69);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275template(46, AdminDashboardComponent_ng_container_12_p_46_Template, 2, 0, "p", 70)(47, AdminDashboardComponent_ng_container_12_p_47_Template, 2, 0, "p", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 71);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(49, "svg", 58);
    \u0275\u0275element(50, "path", 72);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(51, "div", 73)(52, "div", 74)(53, "p", 75);
    \u0275\u0275text(54, "Total Volume");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "p", 76);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 74)(58, "p", 75);
    \u0275\u0275text(59, "Customers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "p", 76);
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 74)(64, "p", 75);
    \u0275\u0275text(65, "Active Corridors");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "p", 76);
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 74)(69, "p", 75);
    \u0275\u0275text(70, "This Month Volume");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "p", 76);
    \u0275\u0275text(72);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(73, AdminDashboardComponent_ng_container_12_div_73_Template, 12, 4, "div", 77);
    \u0275\u0275elementStart(74, "div", 78)(75, "h3", 79);
    \u0275\u0275text(76, "Transaction Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "div", 80)(78, "a", 81)(79, "span", 82);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "span", 83);
    \u0275\u0275text(82, "Failed");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "a", 84)(84, "span", 85);
    \u0275\u0275text(85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "span", 86);
    \u0275\u0275text(87, "On Hold");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "a", 87)(89, "span", 88);
    \u0275\u0275text(90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "span", 89);
    \u0275\u0275text(92, "Pending");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "a", 90)(94, "span", 91);
    \u0275\u0275text(95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "span", 92);
    \u0275\u0275text(97, "Processing");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "a", 93)(99, "span", 94);
    \u0275\u0275text(100);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "span", 95);
    \u0275\u0275text(102, "Completed");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(103, "a", 96)(104, "span", 97);
    \u0275\u0275text(105);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "span", 98);
    \u0275\u0275text(107, "Cancelled");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(108, "div", 99)(109, "div", 100)(110, "div", 101)(111, "div")(112, "h3", 102);
    \u0275\u0275text(113, "Transaction Volume");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "p", 103);
    \u0275\u0275text(115, "Last 6 months");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(116, "a", 104);
    \u0275\u0275text(117, "Full Report \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(118, "div", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "div", 100)(120, "div", 101)(121, "div")(122, "h3", 102);
    \u0275\u0275text(123, "Revenue Breakdown");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "p", 103);
    \u0275\u0275text(125, "By revenue stream");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(126, "a", 106);
    \u0275\u0275text(127, "Full Report \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(128, "div", 105);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(129, "div", 107)(130, "div", 108)(131, "div", 109)(132, "h3", 110);
    \u0275\u0275text(133, "Recent Transactions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "a", 111);
    \u0275\u0275text(135, " View all \u2192 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(136, AdminDashboardComponent_ng_container_12_div_136_Template, 8, 0, "div", 112)(137, AdminDashboardComponent_ng_container_12_div_137_Template, 8, 0, "div", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(138, "div", 26)(139, "div", 114)(140, "div", 115)(141, "h3", 110);
    \u0275\u0275text(142, "Exchange Rates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(143, "a", 116);
    \u0275\u0275text(144, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(145, AdminDashboardComponent_ng_container_12_div_145_Template, 2, 0, "div", 117)(146, AdminDashboardComponent_ng_container_12_div_146_Template, 2, 1, "div", 118);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(147, "div", 119)(148, "h3", 79);
    \u0275\u0275text(149, "Quick Actions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(150, "div", 30)(151, "a", 120)(152, "div", 121);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(153, "svg", 5);
    \u0275\u0275element(154, "path", 122);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(155, "span");
    \u0275\u0275text(156, "Update Rates");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(157, "svg", 123);
    \u0275\u0275element(158, "path", 124);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(159, "a", 125)(160, "div", 126);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(161, "svg", 5);
    \u0275\u0275element(162, "path", 127);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(163, "span");
    \u0275\u0275text(164, "Add Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(165, "svg", 128);
    \u0275\u0275element(166, "path", 124);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(167, "a", 129)(168, "div", 130);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(169, "svg", 5);
    \u0275\u0275element(170, "path", 131);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(171, "span");
    \u0275\u0275text(172, "View Alerts");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(173, "svg", 128);
    \u0275\u0275element(174, "path", 124);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(175, "a", 132)(176, "div", 133);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(177, "svg", 5);
    \u0275\u0275element(178, "path", 134);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(179, "span");
    \u0275\u0275text(180, "Configure Routing");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(181, "svg", 128);
    \u0275\u0275element(182, "path", 124);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 37, ctx_r2.dashboard.totalTransactions));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.monthChangeClass(ctx_r2.dashboard.transactionsThisMonth, ctx_r2.dashboard.transactionsLastMonth));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.monthChangeText(ctx_r2.dashboard.transactionsThisMonth, ctx_r2.dashboard.transactionsLastMonth), " this month ");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r2.formatCurrency(ctx_r2.dashboard.totalCommissionRevenue));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.monthChangeClass(ctx_r2.dashboard.commissionThisMonth, ctx_r2.dashboard.commissionLastMonth));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.monthChangeText(ctx_r2.dashboard.commissionThisMonth, ctx_r2.dashboard.commissionLastMonth), " this month ");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r2.dashboard.activeAgents);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.dashboard.pendingAgents > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.dashboard.pendingAgents === 0);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngClass", ctx_r2.dashboard.unresolvedAlerts > 0 ? "text-danger-600 dark:text-danger-400" : "text-surface-900 dark:text-white");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.dashboard.unresolvedAlerts, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.dashboard.unresolvedAlerts > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.dashboard.unresolvedAlerts === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.dashboard.unresolvedAlerts > 0 ? "bg-danger-50 dark:bg-danger-500/15 ring-danger-200 dark:ring-danger-500/30 text-danger-600 dark:text-danger-400" : "bg-success-50 dark:bg-success-500/15 ring-success-200 dark:ring-success-500/30 text-success-600 dark:text-success-400");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.formatCurrency(ctx_r2.dashboard.totalVolume));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(62, 39, ctx_r2.dashboard.totalCustomers));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.dashboard.activeCorridors);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatCurrency(ctx_r2.dashboard.volumeThisMonth));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.dashboard.failedTransactions > 0 || ctx_r2.dashboard.onHoldTransactions > 0);
    \u0275\u0275advance(5);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(41, _c6));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.dashboard.failedTransactions);
    \u0275\u0275advance(3);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(42, _c7));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.dashboard.onHoldTransactions);
    \u0275\u0275advance(3);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(43, _c8));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.dashboard.pendingTransactions);
    \u0275\u0275advance(3);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(44, _c9));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.dashboard.processingTransactions);
    \u0275\u0275advance(3);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(45, _c10));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.dashboard.completedTransactions);
    \u0275\u0275advance(3);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(46, _c11));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.dashboard.cancelledTransactions);
    \u0275\u0275advance(13);
    \u0275\u0275property("options", ctx_r2.volumeChartOptions);
    \u0275\u0275advance(10);
    \u0275\u0275property("options", ctx_r2.revenueChartOptions);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r2.dashboard.recentTransactions.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.dashboard.recentTransactions.length > 0);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r2.dashboard.activeExchangeRates.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.dashboard.activeExchangeRates.length > 0);
  }
}
var txnColumnHelper = createColumnHelper();
var AdminDashboardComponent = class _AdminDashboardComponent {
  constructor(api, auth, notify, seo) {
    this.api = api;
    this.auth = auth;
    this.notify = notify;
    this.seo = seo;
    this.dashboard = null;
    this.loading = true;
    this.sorting = [];
    this.columns = [
      txnColumnHelper.accessor("referenceNumber", {
        header: "Reference",
        cell: (info) => info.getValue()
      }),
      txnColumnHelper.accessor("senderName", {
        header: "Sender",
        cell: (info) => info.getValue()
      }),
      txnColumnHelper.accessor("receiverName", {
        header: "Receiver",
        cell: (info) => info.getValue()
      }),
      txnColumnHelper.accessor("sendAmount", {
        header: "Amount",
        cell: (info) => {
          const row = info.row.original;
          return `${info.getValue().toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${row.sendCurrency}`;
        }
      }),
      txnColumnHelper.accessor("status", {
        header: "Status",
        cell: (info) => info.getValue()
      }),
      txnColumnHelper.accessor("createdAt", {
        header: "Date",
        cell: (info) => {
          const d = new Date(info.getValue());
          return d.toLocaleDateString("en-US", { month: "short", day: "2-digit" }) + ", " + d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false });
        }
      })
    ];
    this.table = createAngularTable(() => ({
      data: this.dashboard?.recentTransactions ?? [],
      columns: this.columns,
      state: {
        sorting: this.sorting
      },
      onSortingChange: (updaterOrValue) => {
        this.sorting = typeof updaterOrValue === "function" ? updaterOrValue(this.sorting) : updaterOrValue;
      },
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel()
    }));
    this.volumeChartOptions = {};
    this.revenueChartOptions = {};
    this.transactionColumns = [
      "referenceNumber",
      "senderName",
      "receiverName",
      "amount",
      "status",
      "createdAt"
    ];
    this.rateColumns = ["currencyPair", "rate"];
  }
  ngOnInit() {
    this.seo.setPage("Dashboard", "Monitor transaction volumes, manage agents, and oversee compliance from the RemitAdmin dashboard.");
    this.auth.loadFromSession();
    this.loadDashboard();
  }
  loadDashboard() {
    this.loading = true;
    this.api.getDashboard().subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.dashboard = res.data;
          this.buildCharts();
        } else {
          this.notify.error(res?.message || "Failed to load dashboard data.");
        }
        this.loading = false;
      },
      error: (err) => {
        this.notify.error("Error loading dashboard.");
        this.loading = false;
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Charts
  // ---------------------------------------------------------------------------
  get isDark() {
    return document.documentElement.classList.contains("dark");
  }
  buildCharts() {
    if (!this.dashboard)
      return;
    const dark = this.isDark;
    const axisLabelColor = dark ? "#64748b" : "#94a3b8";
    const gridLineColor = dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)";
    const axisLineColor = dark ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.10)";
    const tooltipBg = dark ? "rgba(15,23,42,0.92)" : "rgba(255,255,255,0.96)";
    const tooltipText = dark ? "#e2e8f0" : "#1e293b";
    const tooltipBorder = dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
    const legendText = dark ? "#64748b" : "#94a3b8";
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const currentMonth = (/* @__PURE__ */ new Date()).getMonth();
    const monthlyVolumes = [];
    const monthlyTransactions = [];
    const avgMonthlyVolume = this.dashboard.totalVolume / Math.max(1, 12);
    const avgMonthlyTxn = this.dashboard.totalTransactions / Math.max(1, 12);
    for (let i = 0; i < 6; i++) {
      const monthIdx = (currentMonth - 5 + i + 12) % 12;
      const factor = 0.7 + Math.random() * 0.6;
      monthlyVolumes.push(Math.round(avgMonthlyVolume * factor));
      monthlyTransactions.push(Math.round(avgMonthlyTxn * factor));
    }
    monthlyVolumes[5] = this.dashboard.volumeThisMonth;
    monthlyTransactions[5] = this.dashboard.transactionsThisMonth;
    monthlyTransactions[4] = this.dashboard.transactionsLastMonth;
    const last6Months = Array.from({ length: 6 }, (_, i) => {
      const idx = (currentMonth - 5 + i + 12) % 12;
      return months[idx];
    });
    this.volumeChartOptions = {
      backgroundColor: "transparent",
      tooltip: {
        trigger: "axis",
        backgroundColor: tooltipBg,
        borderColor: tooltipBorder,
        textStyle: { color: tooltipText, fontSize: 12 },
        extraCssText: "box-shadow: 0 4px 12px rgba(0,0,0,0.15); border-radius: 10px;"
      },
      grid: { top: 40, right: 16, bottom: 30, left: 60, containLabel: false },
      xAxis: {
        type: "category",
        data: last6Months,
        axisLine: { lineStyle: { color: axisLineColor } },
        axisTick: { show: false },
        axisLabel: { color: axisLabelColor, fontSize: 11 }
      },
      yAxis: {
        type: "value",
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          color: axisLabelColor,
          fontSize: 11,
          formatter: (val) => {
            if (val >= 1e6)
              return "$" + (val / 1e6).toFixed(1) + "M";
            if (val >= 1e3)
              return "$" + (val / 1e3).toFixed(0) + "K";
            return "$" + val;
          }
        },
        splitLine: { lineStyle: { color: gridLineColor, type: "dashed" } }
      },
      series: [
        {
          name: "Volume",
          type: "bar",
          data: monthlyVolumes,
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "#3b82f6" },
                { offset: 1, color: "#2563eb" }
              ]
            },
            borderRadius: [4, 4, 0, 0]
          },
          barWidth: "50%"
        },
        {
          name: "Transactions",
          type: "line",
          data: monthlyTransactions,
          yAxisIndex: 0,
          smooth: true,
          lineStyle: { color: "#16a34a", width: 2 },
          itemStyle: { color: "#16a34a" },
          symbol: "circle",
          symbolSize: 6
        }
      ]
    };
    const commissionRevenue = this.dashboard.totalCommissionRevenue;
    const totalVolume = this.dashboard.totalVolume;
    const estimatedFxRevenue = totalVolume * 5e-3;
    const estimatedOtherRevenue = commissionRevenue * 0.1;
    this.revenueChartOptions = {
      backgroundColor: "transparent",
      tooltip: {
        trigger: "item",
        backgroundColor: tooltipBg,
        borderColor: tooltipBorder,
        textStyle: { color: tooltipText, fontSize: 12 },
        extraCssText: "box-shadow: 0 4px 12px rgba(0,0,0,0.15); border-radius: 10px;",
        formatter: (params) => {
          return `${params.name}: $${params.value.toLocaleString()} (${params.percent}%)`;
        }
      },
      legend: {
        orient: "vertical",
        right: 10,
        top: "center",
        textStyle: { color: legendText, fontSize: 11 }
      },
      series: [
        {
          name: "Revenue",
          type: "pie",
          radius: ["45%", "75%"],
          center: ["35%", "50%"],
          avoidLabelOverlap: false,
          label: { show: false },
          emphasis: {
            label: { show: true, fontSize: 14, fontWeight: "bold" }
          },
          data: [
            { value: Math.round(commissionRevenue), name: "Service Charges", itemStyle: { color: "#2563eb" } },
            { value: Math.round(estimatedFxRevenue), name: "FX Margin", itemStyle: { color: "#16a34a" } },
            { value: Math.round(estimatedOtherRevenue), name: "Other Fees", itemStyle: { color: "#d97706" } }
          ]
        }
      ]
    };
  }
  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------
  getGreeting() {
    const hour = (/* @__PURE__ */ new Date()).getHours();
    if (hour < 12)
      return "Good morning";
    if (hour < 17)
      return "Good afternoon";
    return "Good evening";
  }
  formatCurrency(amount) {
    if (amount >= 1e6)
      return "$" + (amount / 1e6).toFixed(1) + "M";
    if (amount >= 1e3)
      return "$" + (amount / 1e3).toFixed(1) + "K";
    return "$" + amount.toFixed(2);
  }
  monthChangeText(current, previous) {
    if (previous === 0)
      return current > 0 ? "+100%" : "0%";
    const pct = (current - previous) / previous * 100;
    return pct >= 0 ? `+${pct.toFixed(1)}%` : `${pct.toFixed(1)}%`;
  }
  monthChangeClass(current, previous) {
    return current >= previous ? "text-success-600" : "text-danger-600";
  }
  getStatusClass(status) {
    switch (status) {
      case "Completed":
        return "bg-success-100 text-success-700";
      case "Pending":
        return "bg-warning-100 text-warning-700";
      case "Processing":
      case "Approved":
        return "bg-brand-100 text-brand-700";
      case "OnHold":
        return "bg-surface-200 text-surface-700";
      case "PendingApproval":
        return "bg-orange-100 text-orange-700";
      case "Failed":
        return "bg-danger-100 text-danger-700";
      case "Cancelled":
        return "bg-surface-100 text-surface-500";
      default:
        return "bg-surface-100 text-surface-500";
    }
  }
  getStatusBreakdownClass(status) {
    switch (status) {
      case "Pending":
        return "bg-warning-500 text-white";
      case "Processing":
        return "bg-brand-500 text-white";
      case "Completed":
        return "bg-success-500 text-white";
      case "OnHold":
        return "bg-surface-500 text-white";
      case "PendingApproval":
        return "bg-orange-500 text-white";
      case "Failed":
        return "bg-danger-500 text-white";
      case "Cancelled":
        return "bg-surface-400 text-white";
      default:
        return "bg-surface-400 text-white";
    }
  }
  getSortIcon(columnId) {
    const sort = this.sorting.find((s) => s.id === columnId);
    if (!sort)
      return "\u2195";
    return sort.desc ? "\u2193" : "\u2191";
  }
  static {
    this.\u0275fac = function AdminDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminDashboardComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(SeoService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["app-admin-dashboard"]], decls: 13, vars: 3, consts: [[1, "space-y-6"], [1, "flex", "items-center", "justify-between"], [1, "text-2xl", "font-bold", "tracking-tight", "text-surface-900", "dark:text-surface-50"], [1, "mt-0.5", "text-sm", "text-surface-500", "dark:text-surface-400"], ["routerLink", "/admin/transactions", 1, "inline-flex", "items-center", "gap-2", "px-4", "py-2", "rounded-xl", "bg-brand-600", "hover:bg-brand-700", "text-white", "text-sm", "font-semibold", "shadow-sm", "transition-all", "duration-150", "active:scale-95"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z"], [4, "ngIf"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "xl:grid-cols-4", "gap-4"], ["class", "rounded-2xl border border-surface-100 dark:border-surface-700 bg-white dark:bg-surface-800 p-5 shadow-sm animate-pulse", 4, "ngFor", "ngForOf"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-6"], [1, "rounded-2xl", "border", "border-surface-100", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-6", "shadow-sm", "animate-pulse"], [1, "h-4", "w-48", "rounded-full", "bg-surface-100", "dark:bg-surface-700/50", "mb-6"], [1, "flex", "items-end", "gap-3", "h-44", "px-1"], ["class", "flex-1 rounded-t-md bg-surface-100 dark:bg-surface-700/50", 3, "height", 4, "ngFor", "ngForOf"], [1, "h-4", "w-40", "rounded-full", "bg-surface-100", "dark:bg-surface-700/50", "mb-6"], [1, "flex", "items-center", "gap-8"], [1, "relative", "flex-shrink-0", "w-36", "h-36"], [1, "w-36", "h-36", "rounded-full", "bg-surface-100", "dark:bg-surface-700/50"], [1, "absolute", "inset-0", "m-auto", "w-[84px]", "h-[84px]", "rounded-full", "bg-white", "dark:bg-surface-800"], [1, "flex-1", "space-y-3.5"], ["class", "flex items-center gap-2", 4, "ngFor", "ngForOf"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6"], [1, "lg:col-span-2", "rounded-2xl", "border", "border-surface-100", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-6", "shadow-sm", "animate-pulse"], [1, "h-4", "w-44", "rounded-full", "bg-surface-100", "dark:bg-surface-700/50", "mb-5"], ["class", "flex gap-4 py-3.5 border-b border-surface-50 dark:border-surface-700", 4, "ngFor", "ngForOf"], [1, "space-y-5"], [1, "h-4", "w-40", "rounded-full", "bg-surface-100", "dark:bg-surface-700/50", "mb-5"], ["class", "flex items-center justify-between py-3 border-b border-surface-50 dark:border-surface-700", 4, "ngFor", "ngForOf"], [1, "h-4", "w-32", "rounded-full", "bg-surface-100", "dark:bg-surface-700/50", "mb-4"], [1, "space-y-2"], ["class", "h-10 w-full rounded-xl bg-surface-100 dark:bg-surface-700/50", 4, "ngFor", "ngForOf"], [1, "rounded-2xl", "border", "border-surface-100", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-5", "shadow-sm", "animate-pulse"], [1, "flex", "items-start", "justify-between"], [1, "space-y-3", "flex-1"], [1, "h-3", "w-28", "rounded-full", "bg-surface-100", "dark:bg-surface-700/50"], [1, "h-8", "w-24", "rounded-lg", "bg-surface-100", "dark:bg-surface-700/50"], [1, "h-2.5", "w-20", "rounded-full", "bg-surface-100", "dark:bg-surface-700/50"], [1, "h-11", "w-11", "rounded-xl", "bg-surface-100", "dark:bg-surface-700/50", "flex-shrink-0"], [1, "flex-1", "rounded-t-md", "bg-surface-100", "dark:bg-surface-700/50"], [1, "flex", "items-center", "gap-2"], [1, "h-3", "w-3", "rounded-sm", "bg-surface-100", "dark:bg-surface-700/50", "flex-shrink-0"], [1, "h-3", "rounded-full", "bg-surface-100", "dark:bg-surface-700/50"], [1, "flex", "gap-4", "py-3.5", "border-b", "border-surface-50", "dark:border-surface-700"], [1, "h-3", "w-20", "rounded-full", "bg-surface-100", "dark:bg-surface-700/50"], [1, "h-3", "w-24", "rounded-full", "bg-surface-100", "dark:bg-surface-700/50"], [1, "h-3", "w-16", "rounded-full", "bg-surface-100", "dark:bg-surface-700/50", "ml-auto"], [1, "flex", "items-center", "justify-between", "py-3", "border-b", "border-surface-50", "dark:border-surface-700"], [1, "h-3", "w-12", "rounded-full", "bg-surface-100", "dark:bg-surface-700/50"], [1, "h-10", "w-full", "rounded-xl", "bg-surface-100", "dark:bg-surface-700/50"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "xl:grid-cols-4", "gap-4", "animate-fade-in"], ["routerLink", "/admin/transactions", 1, "group", "rounded-2xl", "bg-white", "dark:bg-surface-800", "border", "border-surface-100", "dark:border-surface-700", "p-5", "shadow-sm", "hover:shadow-md", "dark:hover:border-surface-600", "transition-all", "duration-200", "hover:-translate-y-0.5", "no-underline"], [1, "flex", "items-start", "justify-between", "gap-3"], [1, "space-y-1", "min-w-0"], [1, "text-xs", "font-bold", "uppercase", "tracking-wider", "text-surface-400", "dark:text-surface-500"], [1, "text-2xl", "font-bold", "tabular-nums", "text-surface-900", "dark:text-white"], [1, "text-xs", "font-medium", "truncate", 3, "ngClass"], [1, "flex", "h-11", "w-11", "items-center", "justify-center", "rounded-xl", "bg-brand-50", "dark:bg-brand-500/15", "ring-1", "ring-brand-200", "dark:ring-brand-500/30", "text-brand-600", "dark:text-brand-400", "flex-shrink-0", "group-hover:scale-110", "transition-transform", "duration-200"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.75", "viewBox", "0 0 24 24", 1, "h-5", "w-5"], ["routerLink", "/admin/reports/commissions", 1, "group", "rounded-2xl", "bg-white", "dark:bg-surface-800", "border", "border-surface-100", "dark:border-surface-700", "p-5", "shadow-sm", "hover:shadow-md", "dark:hover:border-surface-600", "transition-all", "duration-200", "hover:-translate-y-0.5", "no-underline"], [1, "text-2xl", "font-bold", "tabular-nums", "text-success-600", "dark:text-success-400"], [1, "flex", "h-11", "w-11", "items-center", "justify-center", "rounded-xl", "bg-success-50", "dark:bg-success-500/15", "ring-1", "ring-success-200", "dark:ring-success-500/30", "text-success-600", "dark:text-success-400", "flex-shrink-0", "group-hover:scale-110", "transition-transform", "duration-200"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"], ["routerLink", "/admin/agents", 1, "group", "rounded-2xl", "bg-white", "dark:bg-surface-800", "border", "border-surface-100", "dark:border-surface-700", "p-5", "shadow-sm", "hover:shadow-md", "dark:hover:border-surface-600", "transition-all", "duration-200", "hover:-translate-y-0.5", "no-underline"], ["class", "text-xs font-medium text-warning-600 dark:text-warning-400 truncate", 4, "ngIf"], ["class", "text-xs font-medium text-success-600 dark:text-success-400", 4, "ngIf"], [1, "flex", "h-11", "w-11", "items-center", "justify-center", "rounded-xl", "bg-warning-50", "dark:bg-warning-500/15", "ring-1", "ring-warning-200", "dark:ring-warning-500/30", "text-warning-600", "dark:text-warning-400", "flex-shrink-0", "group-hover:scale-110", "transition-transform", "duration-200"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"], ["routerLink", "/admin/compliance", 1, "group", "rounded-2xl", "bg-white", "dark:bg-surface-800", "border", "border-surface-100", "dark:border-surface-700", "p-5", "shadow-sm", "hover:shadow-md", "dark:hover:border-surface-600", "transition-all", "duration-200", "hover:-translate-y-0.5", "no-underline"], [1, "text-2xl", "font-bold", "tabular-nums", 3, "ngClass"], ["class", "text-xs font-medium text-danger-600 dark:text-danger-400", 4, "ngIf"], [1, "flex", "h-11", "w-11", "items-center", "justify-center", "rounded-xl", "flex-shrink-0", "group-hover:scale-110", "transition-transform", "duration-200", "ring-1", 3, "ngClass"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"], [1, "grid", "grid-cols-2", "sm:grid-cols-4", "gap-4", "animate-fade-in"], [1, "rounded-xl", "bg-white", "dark:bg-surface-800", "border", "border-surface-100", "dark:border-surface-700/80", "px-4", "py-3.5"], [1, "text-[10px]", "font-bold", "uppercase", "tracking-widest", "text-surface-400", "dark:text-surface-500", "mb-1"], [1, "text-base", "font-bold", "tabular-nums", "text-surface-800", "dark:text-white"], ["class", "rounded-2xl border border-danger-200 dark:border-danger-700/70 bg-danger-50 dark:bg-danger-950/70 p-4 animate-fade-in", 4, "ngIf"], [1, "rounded-2xl", "border", "border-surface-100", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-5", "shadow-sm", "animate-fade-in"], [1, "text-xs", "font-bold", "uppercase", "tracking-wider", "text-surface-400", "dark:text-surface-500", "mb-3"], [1, "grid", "grid-cols-3", "sm:grid-cols-6", "gap-2"], ["routerLink", "/admin/transactions", 1, "group", "flex", "flex-col", "items-center", "gap-1.5", "p-3", "rounded-xl", "border", "transition-all", "duration-150", "cursor-pointer", "no-underline", "border-danger-200", "bg-danger-50", "hover:bg-danger-100", "dark:border-danger-700/60", "dark:bg-danger-950/60", "dark:hover:bg-danger-900/70", 3, "queryParams"], [1, "text-xl", "font-bold", "tabular-nums", "text-danger-600", "dark:text-danger-300"], [1, "text-[11px]", "font-semibold", "text-danger-600", "dark:text-danger-400"], ["routerLink", "/admin/transactions", 1, "group", "flex", "flex-col", "items-center", "gap-1.5", "p-3", "rounded-xl", "border", "transition-all", "duration-150", "cursor-pointer", "no-underline", "border-warning-200", "bg-warning-50", "hover:bg-warning-100", "dark:border-warning-700/60", "dark:bg-warning-950/60", "dark:hover:bg-warning-900/70", 3, "queryParams"], [1, "text-xl", "font-bold", "tabular-nums", "text-warning-600", "dark:text-warning-300"], [1, "text-[11px]", "font-semibold", "text-warning-600", "dark:text-warning-400"], ["routerLink", "/admin/transactions", 1, "group", "flex", "flex-col", "items-center", "gap-1.5", "p-3", "rounded-xl", "border", "transition-all", "duration-150", "cursor-pointer", "no-underline", "border-warning-100", "bg-warning-50/60", "hover:bg-warning-100", "dark:border-warning-800/40", "dark:bg-warning-950/30", "dark:hover:bg-warning-900/40", 3, "queryParams"], [1, "text-xl", "font-bold", "tabular-nums", "text-warning-600", "dark:text-warning-400"], [1, "text-[11px]", "font-semibold", "text-warning-600", "dark:text-warning-500"], ["routerLink", "/admin/transactions", 1, "group", "flex", "flex-col", "items-center", "gap-1.5", "p-3", "rounded-xl", "border", "transition-all", "duration-150", "cursor-pointer", "no-underline", "border-brand-200", "bg-brand-50", "hover:bg-brand-100", "dark:border-brand-700/60", "dark:bg-brand-950/60", "dark:hover:bg-brand-900/70", 3, "queryParams"], [1, "text-xl", "font-bold", "tabular-nums", "text-brand-600", "dark:text-brand-300"], [1, "text-[11px]", "font-semibold", "text-brand-600", "dark:text-brand-400"], ["routerLink", "/admin/transactions", 1, "group", "flex", "flex-col", "items-center", "gap-1.5", "p-3", "rounded-xl", "border", "transition-all", "duration-150", "cursor-pointer", "no-underline", "border-success-200", "bg-success-50", "hover:bg-success-100", "dark:border-success-700/60", "dark:bg-success-950/60", "dark:hover:bg-success-900/70", 3, "queryParams"], [1, "text-xl", "font-bold", "tabular-nums", "text-success-600", "dark:text-success-300"], [1, "text-[11px]", "font-semibold", "text-success-600", "dark:text-success-400"], ["routerLink", "/admin/transactions", 1, "group", "flex", "flex-col", "items-center", "gap-1.5", "p-3", "rounded-xl", "border", "transition-all", "duration-150", "cursor-pointer", "no-underline", "border-surface-200", "bg-surface-50", "hover:bg-surface-100", "dark:border-surface-600/50", "dark:bg-surface-700/30", "dark:hover:bg-surface-700/50", 3, "queryParams"], [1, "text-xl", "font-bold", "tabular-nums", "text-surface-500", "dark:text-surface-300"], [1, "text-[11px]", "font-semibold", "text-surface-500", "dark:text-surface-400"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-6", "animate-fade-in"], [1, "rounded-2xl", "border", "border-surface-100", "dark:border-surface-700/80", "bg-white", "dark:bg-surface-800", "p-6"], [1, "flex", "items-center", "justify-between", "mb-5"], [1, "text-sm", "font-bold", "text-surface-800", "dark:text-white"], [1, "text-xs", "text-surface-400", "dark:text-surface-500", "mt-0.5"], ["routerLink", "/admin/reports/transactions", 1, "text-xs", "font-semibold", "text-brand-600", "dark:text-brand-400", "hover:text-brand-700", "dark:hover:text-brand-300", "transition-colors", "no-underline"], ["echarts", "", 1, "w-full", "h-56", 3, "options"], ["routerLink", "/admin/reports/revenue", 1, "text-xs", "font-semibold", "text-brand-600", "dark:text-brand-400", "hover:text-brand-700", "dark:hover:text-brand-300", "transition-colors", "no-underline"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6", "animate-slide-up"], [1, "lg:col-span-2", "rounded-2xl", "border", "border-surface-100", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "shadow-sm", "overflow-hidden"], [1, "flex", "items-center", "justify-between", "px-6", "py-4", "border-b", "border-surface-100", "dark:border-surface-700"], [1, "text-sm", "font-bold", "uppercase", "tracking-wider", "text-surface-400", "dark:text-surface-500"], ["routerLink", "/admin/transactions", 1, "text-xs", "font-semibold", "text-brand-600", "dark:text-brand-400", "hover:text-brand-700", "dark:hover:text-brand-300", "transition-colors"], ["class", "flex flex-col items-center justify-center py-14 px-6 text-center", 4, "ngIf"], ["class", "overflow-x-auto", 4, "ngIf"], [1, "rounded-2xl", "border", "border-surface-100", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "shadow-sm", "overflow-hidden"], [1, "flex", "items-center", "justify-between", "px-5", "py-4", "border-b", "border-surface-100", "dark:border-surface-700"], ["routerLink", "/admin/rates", 1, "text-xs", "font-semibold", "text-brand-600", "dark:text-brand-400", "hover:text-brand-700", "dark:hover:text-brand-300", "transition-colors"], ["class", "px-5 py-6 text-sm text-surface-500 dark:text-surface-400 text-center", 4, "ngIf"], ["class", "divide-y divide-surface-50 dark:divide-surface-700/40", 4, "ngIf"], [1, "rounded-2xl", "border", "border-surface-100", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-5", "shadow-sm"], ["routerLink", "/admin/rates", 1, "flex", "items-center", "gap-3", "px-4", "py-3", "rounded-xl", "text-sm", "font-semibold", "text-white", "bg-brand-600", "hover:bg-brand-700", "active:scale-[0.98]", "transition-all", "duration-150", "no-underline", "shadow-sm"], [1, "flex", "h-7", "w-7", "items-center", "justify-center", "rounded-lg", "bg-white/20", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "h-4", "w-4", "ml-auto", "opacity-70", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m8.25 4.5 7.5 7.5-7.5 7.5"], ["routerLink", "/admin/agents", 1, "flex", "items-center", "gap-3", "px-4", "py-3", "rounded-xl", "text-sm", "font-semibold", "text-surface-700", "dark:text-surface-200", "bg-surface-50", "dark:bg-surface-700/40", "hover:bg-surface-100", "dark:hover:bg-surface-700/70", "active:scale-[0.98]", "transition-all", "duration-150", "no-underline", "border", "border-transparent", "dark:border-surface-700/50"], [1, "flex", "h-7", "w-7", "items-center", "justify-center", "rounded-lg", "bg-warning-100", "dark:bg-warning-900/30", "text-warning-600", "dark:text-warning-400", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "h-4", "w-4", "ml-auto", "opacity-40", "shrink-0"], ["routerLink", "/admin/compliance", 1, "flex", "items-center", "gap-3", "px-4", "py-3", "rounded-xl", "text-sm", "font-semibold", "text-danger-700", "dark:text-danger-400", "bg-danger-50", "dark:bg-danger-900/20", "hover:bg-danger-100", "dark:hover:bg-danger-900/30", "active:scale-[0.98]", "transition-all", "duration-150", "no-underline"], [1, "flex", "h-7", "w-7", "items-center", "justify-center", "rounded-lg", "bg-danger-100", "dark:bg-danger-800/40", "text-danger-600", "dark:text-danger-400", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"], ["routerLink", "/admin/routing", 1, "flex", "items-center", "gap-3", "px-4", "py-3", "rounded-xl", "text-sm", "font-semibold", "text-surface-700", "dark:text-surface-200", "bg-surface-50", "dark:bg-surface-700/40", "hover:bg-surface-100", "dark:hover:bg-surface-700/70", "active:scale-[0.98]", "transition-all", "duration-150", "no-underline", "border", "border-transparent", "dark:border-surface-700/50"], [1, "flex", "h-7", "w-7", "items-center", "justify-center", "rounded-lg", "bg-brand-100", "dark:bg-brand-900/30", "text-brand-600", "dark:text-brand-400", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"], [1, "text-xs", "font-medium", "text-warning-600", "dark:text-warning-400", "truncate"], [1, "text-xs", "font-medium", "text-success-600", "dark:text-success-400"], [1, "text-xs", "font-medium", "text-danger-600", "dark:text-danger-400"], [1, "rounded-2xl", "border", "border-danger-200", "dark:border-danger-700/70", "bg-danger-50", "dark:bg-danger-950/70", "p-4", "animate-fade-in"], [1, "flex", "items-center", "gap-3"], [1, "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-xl", "bg-danger-100", "dark:bg-danger-500/20", "ring-1", "ring-danger-200", "dark:ring-danger-500/30", "text-danger-600", "dark:text-danger-400", "flex-shrink-0"], [1, "flex-1"], [1, "text-sm", "font-bold", "text-danger-800", "dark:text-danger-200"], [1, "text-xs", "text-danger-600", "dark:text-danger-400", "mt-0.5"], ["routerLink", "/admin/transactions", 1, "px-3", "py-1.5", "rounded-lg", "bg-danger-600", "hover:bg-danger-500", "active:scale-95", "text-white", "text-xs", "font-semibold", "transition-all", "duration-150", "no-underline", "shadow-sm", 3, "queryParams"], [1, "flex", "flex-col", "items-center", "justify-center", "py-14", "px-6", "text-center"], [1, "flex", "h-14", "w-14", "items-center", "justify-center", "rounded-2xl", "bg-surface-100", "dark:bg-surface-700/50", "mb-4"], ["fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 1, "h-7", "w-7", "text-surface-400"], [1, "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300"], [1, "text-xs", "text-surface-400", "dark:text-surface-500", "mt-1"], [1, "overflow-x-auto"], [1, "w-full", "text-sm"], [1, "bg-surface-50/70", "dark:bg-surface-900/60"], [1, "divide-y", "divide-surface-50", "dark:divide-surface-700/50"], [1, "hover:bg-surface-50/70", "dark:hover:bg-surface-750/60", "transition-colors", "duration-100", "cursor-pointer", 3, "routerLink"], ["scope", "col", 1, "px-4", "py-3", "text-left", "text-[11px]", "font-bold", "uppercase", "tracking-wider", "text-surface-400", "dark:text-surface-500", "cursor-pointer", "select-none", "hover:text-surface-600", "dark:hover:text-surface-300", "transition-colors"], ["scope", "col", 1, "px-4", "py-3", "text-left", "text-[11px]", "font-bold", "uppercase", "tracking-wider", "text-surface-400", "dark:text-surface-500", "cursor-pointer", "select-none", "hover:text-surface-600", "dark:hover:text-surface-300", "transition-colors", 3, "click"], [1, "flex", "items-center", "gap-1.5"], [4, "flexRender", "flexRenderProps"], [1, "text-surface-400", "dark:text-surface-500", "text-2xs"], [1, "px-4", "py-3", "whitespace-nowrap"], [1, "font-mono", "text-xs", "font-medium", "text-surface-600", "dark:text-surface-400", "bg-surface-100", "dark:bg-surface-700/60", "px-2", "py-0.5", "rounded-md"], [1, "inline-flex", "items-center", "gap-1.5", "px-2.5", "py-1", "rounded-full", "text-xs", "font-semibold", 3, "ngClass"], [1, "h-1.5", "w-1.5", "rounded-full", "bg-current", "opacity-80"], [1, "text-surface-700", "dark:text-surface-300"], [1, "px-5", "py-6", "text-sm", "text-surface-500", "dark:text-surface-400", "text-center"], [1, "divide-y", "divide-surface-50", "dark:divide-surface-700/40"], ["class", "flex items-center justify-between px-5 py-3 hover:bg-surface-50/70 dark:hover:bg-surface-700/40 transition-colors", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between", "px-5", "py-3", "hover:bg-surface-50/70", "dark:hover:bg-surface-700/40", "transition-colors"], [1, "text-sm", "font-semibold", "text-surface-700", "dark:text-surface-300"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-3.5", "h-3.5", "text-surface-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"], [1, "text-sm", "font-bold", "tabular-nums", "text-success-600", "dark:text-success-400", "font-mono"]], template: function AdminDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
        \u0275\u0275text(4, "Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "a", 4);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(8, "svg", 5);
        \u0275\u0275element(9, "path", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " View Transactions ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(11, AdminDashboardComponent_ng_container_11_Template, 28, 12, "ng-container", 7)(12, AdminDashboardComponent_ng_container_12_Template, 183, 47, "ng-container", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", ctx.getGreeting(), "! Here's your operational overview.");
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.dashboard);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgForOf,
      NgIf,
      DecimalPipe,
      RouterModule,
      RouterLink,
      NgxEchartsDirective,
      FlexRenderDirective
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.no-underline[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-admin-dashboard", standalone: true, imports: [
      CommonModule,
      RouterModule,
      NgxEchartsDirective,
      FlexRenderDirective,
      DecimalPipe,
      DatePipe
    ], template: `<!-- Admin Dashboard -->
<div class="space-y-6">

  <!-- Page Header -->
  <div class="flex items-center justify-between">
    <div>
      <h2 class="text-2xl font-bold tracking-tight text-surface-900 dark:text-surface-50">Dashboard</h2>
      <p class="mt-0.5 text-sm text-surface-500 dark:text-surface-400">{{ getGreeting() }}! Here's your operational overview.</p>
    </div>
    <a routerLink="/admin/transactions"
       class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold shadow-sm transition-all duration-150 active:scale-95">
      <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z"/>
      </svg>
      View Transactions
    </a>
  </div>

  <!-- Loading Skeleton -->
  <ng-container *ngIf="loading">

    <!-- Primary Stat Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      <div *ngFor="let i of [1,2,3,4]"
           class="rounded-2xl border border-surface-100 dark:border-surface-700 bg-white dark:bg-surface-800 p-5 shadow-sm animate-pulse">
        <div class="flex items-start justify-between">
          <div class="space-y-3 flex-1">
            <div class="h-3 w-28 rounded-full bg-surface-100 dark:bg-surface-700/50"></div>
            <div class="h-8 w-24 rounded-lg bg-surface-100 dark:bg-surface-700/50"></div>
            <div class="h-2.5 w-20 rounded-full bg-surface-100 dark:bg-surface-700/50"></div>
          </div>
          <div class="h-11 w-11 rounded-xl bg-surface-100 dark:bg-surface-700/50 flex-shrink-0"></div>
        </div>
      </div>
    </div>

    <!-- Charts Row Skeleton -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="rounded-2xl border border-surface-100 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-sm animate-pulse">
        <div class="h-4 w-48 rounded-full bg-surface-100 dark:bg-surface-700/50 mb-6"></div>
        <div class="flex items-end gap-3 h-44 px-1">
          <div *ngFor="let i of [1,2,3,4,5,6]" class="flex-1 rounded-t-md bg-surface-100 dark:bg-surface-700/50"
               [style.height]="['55%','70%','40%','85%','60%','75%'][i-1]"></div>
        </div>
      </div>
      <div class="rounded-2xl border border-surface-100 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-sm animate-pulse">
        <div class="h-4 w-40 rounded-full bg-surface-100 dark:bg-surface-700/50 mb-6"></div>
        <div class="flex items-center gap-8">
          <div class="relative flex-shrink-0 w-36 h-36">
            <div class="w-36 h-36 rounded-full bg-surface-100 dark:bg-surface-700/50"></div>
            <div class="absolute inset-0 m-auto w-[84px] h-[84px] rounded-full bg-white dark:bg-surface-800"></div>
          </div>
          <div class="flex-1 space-y-3.5">
            <div *ngFor="let i of [1,2,3]" class="flex items-center gap-2">
              <div class="h-3 w-3 rounded-sm bg-surface-100 dark:bg-surface-700/50 flex-shrink-0"></div>
              <div class="h-3 rounded-full bg-surface-100 dark:bg-surface-700/50" [style.width]="['8rem','6rem','7rem'][i-1]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Row Skeleton -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2 rounded-2xl border border-surface-100 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-sm animate-pulse">
        <div class="h-4 w-44 rounded-full bg-surface-100 dark:bg-surface-700/50 mb-5"></div>
        <div *ngFor="let i of [1,2,3,4,5]" class="flex gap-4 py-3.5 border-b border-surface-50 dark:border-surface-700">
          <div class="h-3 w-20 rounded-full bg-surface-100 dark:bg-surface-700/50"></div>
          <div class="h-3 w-24 rounded-full bg-surface-100 dark:bg-surface-700/50"></div>
          <div class="h-3 w-16 rounded-full bg-surface-100 dark:bg-surface-700/50 ml-auto"></div>
        </div>
      </div>
      <div class="space-y-5">
        <div class="rounded-2xl border border-surface-100 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-sm animate-pulse">
          <div class="h-4 w-40 rounded-full bg-surface-100 dark:bg-surface-700/50 mb-5"></div>
          <div *ngFor="let i of [1,2,3]" class="flex items-center justify-between py-3 border-b border-surface-50 dark:border-surface-700">
            <div class="h-3 w-20 rounded-full bg-surface-100 dark:bg-surface-700/50"></div>
            <div class="h-3 w-12 rounded-full bg-surface-100 dark:bg-surface-700/50"></div>
          </div>
        </div>
        <div class="rounded-2xl border border-surface-100 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-sm animate-pulse">
          <div class="h-4 w-32 rounded-full bg-surface-100 dark:bg-surface-700/50 mb-4"></div>
          <div class="space-y-2">
            <div *ngFor="let i of [1,2,3]" class="h-10 w-full rounded-xl bg-surface-100 dark:bg-surface-700/50"></div>
          </div>
        </div>
      </div>
    </div>

  </ng-container>

  <ng-container *ngIf="!loading && dashboard">

    <!-- \u2500\u2500 Primary KPI Cards \u2500\u2500 -->
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 animate-fade-in">

      <!-- Total Transactions -->
      <a routerLink="/admin/transactions"
         class="group rounded-2xl bg-white dark:bg-surface-800 border border-surface-100 dark:border-surface-700 p-5
                shadow-sm hover:shadow-md dark:hover:border-surface-600 transition-all duration-200 hover:-translate-y-0.5 no-underline">
        <div class="flex items-start justify-between gap-3">
          <div class="space-y-1 min-w-0">
            <p class="text-xs font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500">Total Transactions</p>
            <p class="text-2xl font-bold tabular-nums text-surface-900 dark:text-white">{{ dashboard.totalTransactions | number }}</p>
            <p class="text-xs font-medium truncate"
               [ngClass]="monthChangeClass(dashboard.transactionsThisMonth, dashboard.transactionsLastMonth)">
              {{ monthChangeText(dashboard.transactionsThisMonth, dashboard.transactionsLastMonth) }} this month
            </p>
          </div>
          <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-500/15 ring-1 ring-brand-200 dark:ring-brand-500/30 text-brand-600 dark:text-brand-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z"/>
            </svg>
          </div>
        </div>
      </a>

      <!-- Service Charge Revenue -->
      <a routerLink="/admin/reports/commissions"
         class="group rounded-2xl bg-white dark:bg-surface-800 border border-surface-100 dark:border-surface-700 p-5
                shadow-sm hover:shadow-md dark:hover:border-surface-600 transition-all duration-200 hover:-translate-y-0.5 no-underline">
        <div class="flex items-start justify-between gap-3">
          <div class="space-y-1 min-w-0">
            <p class="text-xs font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500">Service Charge Revenue</p>
            <p class="text-2xl font-bold tabular-nums text-success-600 dark:text-success-400">{{ formatCurrency(dashboard.totalCommissionRevenue) }}</p>
            <p class="text-xs font-medium truncate"
               [ngClass]="monthChangeClass(dashboard.commissionThisMonth, dashboard.commissionLastMonth)">
              {{ monthChangeText(dashboard.commissionThisMonth, dashboard.commissionLastMonth) }} this month
            </p>
          </div>
          <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-success-50 dark:bg-success-500/15 ring-1 ring-success-200 dark:ring-success-500/30 text-success-600 dark:text-success-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"/>
            </svg>
          </div>
        </div>
      </a>

      <!-- Active Agents -->
      <a routerLink="/admin/agents"
         class="group rounded-2xl bg-white dark:bg-surface-800 border border-surface-100 dark:border-surface-700 p-5
                shadow-sm hover:shadow-md dark:hover:border-surface-600 transition-all duration-200 hover:-translate-y-0.5 no-underline">
        <div class="flex items-start justify-between gap-3">
          <div class="space-y-1 min-w-0">
            <p class="text-xs font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500">Active Agents</p>
            <p class="text-2xl font-bold tabular-nums text-surface-900 dark:text-white">{{ dashboard.activeAgents }}</p>
            <p *ngIf="dashboard.pendingAgents > 0" class="text-xs font-medium text-warning-600 dark:text-warning-400 truncate">
              {{ dashboard.pendingAgents }} pending approval
            </p>
            <p *ngIf="dashboard.pendingAgents === 0" class="text-xs font-medium text-success-600 dark:text-success-400">
              No pending approvals
            </p>
          </div>
          <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-warning-50 dark:bg-warning-500/15 ring-1 ring-warning-200 dark:ring-warning-500/30 text-warning-600 dark:text-warning-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"/>
            </svg>
          </div>
        </div>
      </a>

      <!-- Compliance Alerts -->
      <a routerLink="/admin/compliance"
         class="group rounded-2xl bg-white dark:bg-surface-800 border border-surface-100 dark:border-surface-700 p-5
                shadow-sm hover:shadow-md dark:hover:border-surface-600 transition-all duration-200 hover:-translate-y-0.5 no-underline">
        <div class="flex items-start justify-between gap-3">
          <div class="space-y-1 min-w-0">
            <p class="text-xs font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500">Compliance Alerts</p>
            <p class="text-2xl font-bold tabular-nums"
               [ngClass]="dashboard.unresolvedAlerts > 0 ? 'text-danger-600 dark:text-danger-400' : 'text-surface-900 dark:text-white'">
              {{ dashboard.unresolvedAlerts }}
            </p>
            <p *ngIf="dashboard.unresolvedAlerts > 0" class="text-xs font-medium text-danger-600 dark:text-danger-400">Requires attention</p>
            <p *ngIf="dashboard.unresolvedAlerts === 0" class="text-xs font-medium text-success-600 dark:text-success-400">All clear</p>
          </div>
          <div class="flex h-11 w-11 items-center justify-center rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200 ring-1"
               [ngClass]="dashboard.unresolvedAlerts > 0
                 ? 'bg-danger-50 dark:bg-danger-500/15 ring-danger-200 dark:ring-danger-500/30 text-danger-600 dark:text-danger-400'
                 : 'bg-success-50 dark:bg-success-500/15 ring-success-200 dark:ring-success-500/30 text-success-600 dark:text-success-400'">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"/>
            </svg>
          </div>
        </div>
      </a>
    </div>

    <!-- \u2500\u2500 Secondary Metrics Strip \u2500\u2500 -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fade-in">
      <div class="rounded-xl bg-white dark:bg-surface-800 border border-surface-100 dark:border-surface-700/80 px-4 py-3.5">
        <p class="text-[10px] font-bold uppercase tracking-widest text-surface-400 dark:text-surface-500 mb-1">Total Volume</p>
        <p class="text-base font-bold tabular-nums text-surface-800 dark:text-white">{{ formatCurrency(dashboard.totalVolume) }}</p>
      </div>
      <div class="rounded-xl bg-white dark:bg-surface-800 border border-surface-100 dark:border-surface-700/80 px-4 py-3.5">
        <p class="text-[10px] font-bold uppercase tracking-widest text-surface-400 dark:text-surface-500 mb-1">Customers</p>
        <p class="text-base font-bold tabular-nums text-surface-800 dark:text-white">{{ dashboard.totalCustomers | number }}</p>
      </div>
      <div class="rounded-xl bg-white dark:bg-surface-800 border border-surface-100 dark:border-surface-700/80 px-4 py-3.5">
        <p class="text-[10px] font-bold uppercase tracking-widest text-surface-400 dark:text-surface-500 mb-1">Active Corridors</p>
        <p class="text-base font-bold tabular-nums text-surface-800 dark:text-white">{{ dashboard.activeCorridors }}</p>
      </div>
      <div class="rounded-xl bg-white dark:bg-surface-800 border border-surface-100 dark:border-surface-700/80 px-4 py-3.5">
        <p class="text-[10px] font-bold uppercase tracking-widest text-surface-400 dark:text-surface-500 mb-1">This Month Volume</p>
        <p class="text-base font-bold tabular-nums text-surface-800 dark:text-white">{{ formatCurrency(dashboard.volumeThisMonth) }}</p>
      </div>
    </div>

    <!-- \u2500\u2500 Requires Action Banner \u2500\u2500 -->
    <div *ngIf="dashboard.failedTransactions > 0 || dashboard.onHoldTransactions > 0"
         class="rounded-2xl border border-danger-200 dark:border-danger-700/70 bg-danger-50 dark:bg-danger-950/70 p-4 animate-fade-in">
      <div class="flex items-center gap-3">
        <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-danger-100 dark:bg-danger-500/20 ring-1 ring-danger-200 dark:ring-danger-500/30 text-danger-600 dark:text-danger-400 flex-shrink-0">
          <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"/>
          </svg>
        </div>
        <div class="flex-1">
          <p class="text-sm font-bold text-danger-800 dark:text-danger-200">Requires Action</p>
          <p class="text-xs text-danger-600 dark:text-danger-400 mt-0.5">
            {{ dashboard.failedTransactions }} failed &middot; {{ dashboard.onHoldTransactions }} on hold
          </p>
        </div>
        <a routerLink="/admin/transactions" [queryParams]="{status: 'Failed'}"
           class="px-3 py-1.5 rounded-lg bg-danger-600 hover:bg-danger-500 active:scale-95 text-white text-xs font-semibold transition-all duration-150 no-underline shadow-sm">
          Review Now
        </a>
      </div>
    </div>

    <!-- \u2500\u2500 Transaction Status Overview \u2500\u2500 -->
    <div class="rounded-2xl border border-surface-100 dark:border-surface-700 bg-white dark:bg-surface-800 p-5 shadow-sm animate-fade-in">
      <h3 class="text-xs font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500 mb-3">Transaction Status</h3>
      <div class="grid grid-cols-3 sm:grid-cols-6 gap-2">

        <!-- Failed -->
        <a routerLink="/admin/transactions" [queryParams]="{status: 'Failed'}"
           class="group flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all duration-150 cursor-pointer no-underline
                  border-danger-200 bg-danger-50 hover:bg-danger-100
                  dark:border-danger-700/60 dark:bg-danger-950/60 dark:hover:bg-danger-900/70">
          <span class="text-xl font-bold tabular-nums text-danger-600 dark:text-danger-300">{{ dashboard.failedTransactions }}</span>
          <span class="text-[11px] font-semibold text-danger-600 dark:text-danger-400">Failed</span>
        </a>

        <!-- On Hold -->
        <a routerLink="/admin/transactions" [queryParams]="{status: 'OnHold'}"
           class="group flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all duration-150 cursor-pointer no-underline
                  border-warning-200 bg-warning-50 hover:bg-warning-100
                  dark:border-warning-700/60 dark:bg-warning-950/60 dark:hover:bg-warning-900/70">
          <span class="text-xl font-bold tabular-nums text-warning-600 dark:text-warning-300">{{ dashboard.onHoldTransactions }}</span>
          <span class="text-[11px] font-semibold text-warning-600 dark:text-warning-400">On Hold</span>
        </a>

        <!-- Pending -->
        <a routerLink="/admin/transactions" [queryParams]="{status: 'Pending'}"
           class="group flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all duration-150 cursor-pointer no-underline
                  border-warning-100 bg-warning-50/60 hover:bg-warning-100
                  dark:border-warning-800/40 dark:bg-warning-950/30 dark:hover:bg-warning-900/40">
          <span class="text-xl font-bold tabular-nums text-warning-600 dark:text-warning-400">{{ dashboard.pendingTransactions }}</span>
          <span class="text-[11px] font-semibold text-warning-600 dark:text-warning-500">Pending</span>
        </a>

        <!-- Processing -->
        <a routerLink="/admin/transactions" [queryParams]="{status: 'Processing'}"
           class="group flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all duration-150 cursor-pointer no-underline
                  border-brand-200 bg-brand-50 hover:bg-brand-100
                  dark:border-brand-700/60 dark:bg-brand-950/60 dark:hover:bg-brand-900/70">
          <span class="text-xl font-bold tabular-nums text-brand-600 dark:text-brand-300">{{ dashboard.processingTransactions }}</span>
          <span class="text-[11px] font-semibold text-brand-600 dark:text-brand-400">Processing</span>
        </a>

        <!-- Completed -->
        <a routerLink="/admin/transactions" [queryParams]="{status: 'Completed'}"
           class="group flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all duration-150 cursor-pointer no-underline
                  border-success-200 bg-success-50 hover:bg-success-100
                  dark:border-success-700/60 dark:bg-success-950/60 dark:hover:bg-success-900/70">
          <span class="text-xl font-bold tabular-nums text-success-600 dark:text-success-300">{{ dashboard.completedTransactions }}</span>
          <span class="text-[11px] font-semibold text-success-600 dark:text-success-400">Completed</span>
        </a>

        <!-- Cancelled -->
        <a routerLink="/admin/transactions" [queryParams]="{status: 'Cancelled'}"
           class="group flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all duration-150 cursor-pointer no-underline
                  border-surface-200 bg-surface-50 hover:bg-surface-100
                  dark:border-surface-600/50 dark:bg-surface-700/30 dark:hover:bg-surface-700/50">
          <span class="text-xl font-bold tabular-nums text-surface-500 dark:text-surface-300">{{ dashboard.cancelledTransactions }}</span>
          <span class="text-[11px] font-semibold text-surface-500 dark:text-surface-400">Cancelled</span>
        </a>

      </div>
    </div>

    <!-- \u2500\u2500 Charts Section \u2500\u2500 -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in">
      <div class="rounded-2xl border border-surface-100 dark:border-surface-700/80 bg-white dark:bg-surface-800 p-6">
        <div class="flex items-center justify-between mb-5">
          <div>
            <h3 class="text-sm font-bold text-surface-800 dark:text-white">Transaction Volume</h3>
            <p class="text-xs text-surface-400 dark:text-surface-500 mt-0.5">Last 6 months</p>
          </div>
          <a routerLink="/admin/reports/transactions" class="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors no-underline">Full Report \u2192</a>
        </div>
        <div echarts [options]="volumeChartOptions" class="w-full h-56"></div>
      </div>
      <div class="rounded-2xl border border-surface-100 dark:border-surface-700/80 bg-white dark:bg-surface-800 p-6">
        <div class="flex items-center justify-between mb-5">
          <div>
            <h3 class="text-sm font-bold text-surface-800 dark:text-white">Revenue Breakdown</h3>
            <p class="text-xs text-surface-400 dark:text-surface-500 mt-0.5">By revenue stream</p>
          </div>
          <a routerLink="/admin/reports/revenue" class="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors no-underline">Full Report \u2192</a>
        </div>
        <div echarts [options]="revenueChartOptions" class="w-full h-56"></div>
      </div>
    </div>

    <!-- \u2500\u2500 Bottom Grid: Transactions + Right Column \u2500\u2500 -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-slide-up">

      <!-- Recent Transactions (2/3) -->
      <div class="lg:col-span-2 rounded-2xl border border-surface-100 dark:border-surface-700 bg-white dark:bg-surface-800 shadow-sm overflow-hidden">
        <div class="flex items-center justify-between px-6 py-4 border-b border-surface-100 dark:border-surface-700">
          <h3 class="text-sm font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500">Recent Transactions</h3>
          <a routerLink="/admin/transactions" class="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors">
            View all \u2192
          </a>
        </div>

        <div *ngIf="dashboard.recentTransactions.length === 0"
             class="flex flex-col items-center justify-center py-14 px-6 text-center">
          <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-100 dark:bg-surface-700/50 mb-4">
            <svg class="h-7 w-7 text-surface-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z"/>
            </svg>
          </div>
          <p class="text-sm font-medium text-surface-700 dark:text-surface-300">No transactions yet</p>
          <p class="text-xs text-surface-400 dark:text-surface-500 mt-1">Recent activity will appear here</p>
        </div>

        <div *ngIf="dashboard.recentTransactions.length > 0" class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              @for (headerGroup of table.getHeaderGroups(); track headerGroup.id) {
                <tr class="bg-surface-50/70 dark:bg-surface-900/60">
                  @for (header of headerGroup.headers; track header.id) {
                    <th scope="col"
                        class="px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500 cursor-pointer select-none hover:text-surface-600 dark:hover:text-surface-300 transition-colors"
                        (click)="header.column.getToggleSortingHandler()?.($event)">
                      <div class="flex items-center gap-1.5">
                        <ng-container *flexRender="header.column.columnDef.header; props: header.getContext(); let headerText">
                          {{ headerText }}
                        </ng-container>
                        <span class="text-surface-400 dark:text-surface-500 text-2xs">{{ getSortIcon(header.column.id) }}</span>
                      </div>
                    </th>
                  }
                </tr>
              }
            </thead>
            <tbody class="divide-y divide-surface-50 dark:divide-surface-700/50">
              @for (row of table.getRowModel().rows; track row.id) {
                <tr class="hover:bg-surface-50/70 dark:hover:bg-surface-750/60 transition-colors duration-100 cursor-pointer"
                    [routerLink]="['/admin/transactions', row.original.referenceNumber]">
                  @for (cell of row.getVisibleCells(); track cell.id) {
                    <td class="px-4 py-3 whitespace-nowrap">
                      <!-- Reference Number -->
                      <ng-container *ngIf="cell.column.id === 'referenceNumber'">
                        <span class="font-mono text-xs font-medium text-surface-600 dark:text-surface-400 bg-surface-100 dark:bg-surface-700/60 px-2 py-0.5 rounded-md">
                          <ng-container *flexRender="cell.column.columnDef.cell; props: cell.getContext(); let cellValue">{{ cellValue }}</ng-container>
                        </span>
                      </ng-container>
                      <!-- Status -->
                      <ng-container *ngIf="cell.column.id === 'status'">
                        <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
                              [ngClass]="getStatusClass('' + cell.getValue())">
                          <span class="h-1.5 w-1.5 rounded-full bg-current opacity-80"></span>
                          <ng-container *flexRender="cell.column.columnDef.cell; props: cell.getContext(); let cellValue">{{ cellValue }}</ng-container>
                        </span>
                      </ng-container>
                      <!-- Default cells -->
                      <ng-container *ngIf="cell.column.id !== 'referenceNumber' && cell.column.id !== 'status'">
                        <span class="text-surface-700 dark:text-surface-300">
                          <ng-container *flexRender="cell.column.columnDef.cell; props: cell.getContext(); let cellValue">{{ cellValue }}</ng-container>
                        </span>
                      </ng-container>
                    </td>
                  }
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>

      <!-- Right Column (1/3) -->
      <div class="space-y-5">

        <!-- Active Exchange Rates -->
        <div class="rounded-2xl border border-surface-100 dark:border-surface-700 bg-white dark:bg-surface-800 shadow-sm overflow-hidden">
          <div class="flex items-center justify-between px-5 py-4 border-b border-surface-100 dark:border-surface-700">
            <h3 class="text-sm font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500">Exchange Rates</h3>
            <a routerLink="/admin/rates" class="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors">Edit</a>
          </div>

          <div *ngIf="dashboard.activeExchangeRates.length === 0"
               class="px-5 py-6 text-sm text-surface-500 dark:text-surface-400 text-center">
            No active rates configured.
          </div>

          <div *ngIf="dashboard.activeExchangeRates.length > 0"
               class="divide-y divide-surface-50 dark:divide-surface-700/40">
            <div *ngFor="let rate of dashboard.activeExchangeRates"
                 class="flex items-center justify-between px-5 py-3 hover:bg-surface-50/70 dark:hover:bg-surface-700/40 transition-colors">
              <div class="flex items-center gap-1.5">
                <span class="text-sm font-semibold text-surface-700 dark:text-surface-300">{{ rate.sourceCurrency }}</span>
                <svg class="w-3.5 h-3.5 text-surface-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
                </svg>
                <span class="text-sm font-semibold text-surface-700 dark:text-surface-300">{{ rate.destinationCurrency }}</span>
              </div>
              <span class="text-sm font-bold tabular-nums text-success-600 dark:text-success-400 font-mono">
                {{ rate.rate | number:'1.2-4' }}
              </span>
            </div>
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="rounded-2xl border border-surface-100 dark:border-surface-700 bg-white dark:bg-surface-800 p-5 shadow-sm">
          <h3 class="text-xs font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500 mb-3">Quick Actions</h3>
          <div class="space-y-2">
            <a routerLink="/admin/rates"
               class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold
                      text-white bg-brand-600 hover:bg-brand-700 active:scale-[0.98]
                      transition-all duration-150 no-underline shadow-sm">
              <div class="flex h-7 w-7 items-center justify-center rounded-lg bg-white/20 shrink-0">
                <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
              </div>
              <span>Update Rates</span>
              <svg class="h-4 w-4 ml-auto opacity-70 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
              </svg>
            </a>
            <a routerLink="/admin/agents"
               class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold
                      text-surface-700 dark:text-surface-200 bg-surface-50 dark:bg-surface-700/40
                      hover:bg-surface-100 dark:hover:bg-surface-700/70 active:scale-[0.98]
                      transition-all duration-150 no-underline border border-transparent dark:border-surface-700/50">
              <div class="flex h-7 w-7 items-center justify-center rounded-lg bg-warning-100 dark:bg-warning-900/30 text-warning-600 dark:text-warning-400 shrink-0">
                <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"/>
                </svg>
              </div>
              <span>Add Agent</span>
              <svg class="h-4 w-4 ml-auto opacity-40 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
              </svg>
            </a>
            <a routerLink="/admin/compliance"
               class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold
                      text-danger-700 dark:text-danger-400 bg-danger-50 dark:bg-danger-900/20
                      hover:bg-danger-100 dark:hover:bg-danger-900/30 active:scale-[0.98]
                      transition-all duration-150 no-underline">
              <div class="flex h-7 w-7 items-center justify-center rounded-lg bg-danger-100 dark:bg-danger-800/40 text-danger-600 dark:text-danger-400 shrink-0">
                <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"/>
                </svg>
              </div>
              <span>View Alerts</span>
              <svg class="h-4 w-4 ml-auto opacity-40 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
              </svg>
            </a>
            <a routerLink="/admin/routing"
               class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold
                      text-surface-700 dark:text-surface-200 bg-surface-50 dark:bg-surface-700/40
                      hover:bg-surface-100 dark:hover:bg-surface-700/70 active:scale-[0.98]
                      transition-all duration-150 no-underline border border-transparent dark:border-surface-700/50">
              <div class="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 shrink-0">
                <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"/>
                </svg>
              </div>
              <span>Configure Routing</span>
              <svg class="h-4 w-4 ml-auto opacity-40 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </div>

  </ng-container>
</div>
`, styles: ["/* src/app/pages/admin/dashboard/admin-dashboard.component.scss */\n:host {\n  display: block;\n}\n:host a {\n  text-decoration: none;\n}\n.no-underline {\n  text-decoration: none;\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: NotificationService }, { type: SeoService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src/app/pages/admin/dashboard/admin-dashboard.component.ts", lineNumber: 42 });
})();
export {
  AdminDashboardComponent
};
/*! Bundled license information:

@tanstack/table-core/build/lib/index.mjs:
  (**
     * table-core
     *
     * Copyright (c) TanStack
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     *)
*/
//# sourceMappingURL=chunk-WDZVXPBU.js.map
