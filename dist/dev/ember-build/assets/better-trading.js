'use strict';



;define("better-trading/app", ["exports", "better-trading/resolver", "ember-load-initializers", "better-trading/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  // Initialize the extension root container
  const extensionContainer = document.createElement('div');
  extensionContainer.id = 'better-trading-container'; // Check if the trading app is present (ie. not in maintenance)

  if (document.querySelector('#trade')) {
    document.body.classList.add('bt-body');
    const isCollapsed = Boolean(window.localStorage.getItem('bt-side-panel-collapsed'));
    if (isCollapsed) document.body.classList.add('bt-is-collapsed');
  } else {
    extensionContainer.style.display = 'none';
  }

  document.body.appendChild(extensionContainer);
  const {
    modulePrefix,
    podModulePrefix
  } = _environment.default;
  const App = Ember.Application.extend({
    rootElement: extensionContainer,
    modulePrefix,
    podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, modulePrefix);
  var _default = App;
  _exports.default = _default;
});

;define("better-trading/cldrs/en", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "en",
    "pluralRuleFunction": function (n, ord) {
      var s = String(n).split("."),
          v0 = !s[1],
          t0 = Number(s[0]) == n,
          n10 = t0 && s[0].slice(-1),
          n100 = t0 && s[0].slice(-2);
      if (ord) return n10 == 1 && n100 != 11 ? "one" : n10 == 2 && n100 != 12 ? "two" : n10 == 3 && n100 != 13 ? "few" : "other";
      return n == 1 && v0 ? "one" : "other";
    },
    "fields": {
      "year": {
        "displayName": "year",
        "relative": {
          "0": "this year",
          "1": "next year",
          "-1": "last year"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} year",
            "other": "in {0} years"
          },
          "past": {
            "one": "{0} year ago",
            "other": "{0} years ago"
          }
        }
      },
      "year-short": {
        "displayName": "yr.",
        "relative": {
          "0": "this yr.",
          "1": "next yr.",
          "-1": "last yr."
        },
        "relativeTime": {
          "future": {
            "one": "in {0} yr.",
            "other": "in {0} yr."
          },
          "past": {
            "one": "{0} yr. ago",
            "other": "{0} yr. ago"
          }
        }
      },
      "month": {
        "displayName": "month",
        "relative": {
          "0": "this month",
          "1": "next month",
          "-1": "last month"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} month",
            "other": "in {0} months"
          },
          "past": {
            "one": "{0} month ago",
            "other": "{0} months ago"
          }
        }
      },
      "month-short": {
        "displayName": "mo.",
        "relative": {
          "0": "this mo.",
          "1": "next mo.",
          "-1": "last mo."
        },
        "relativeTime": {
          "future": {
            "one": "in {0} mo.",
            "other": "in {0} mo."
          },
          "past": {
            "one": "{0} mo. ago",
            "other": "{0} mo. ago"
          }
        }
      },
      "day": {
        "displayName": "day",
        "relative": {
          "0": "today",
          "1": "tomorrow",
          "-1": "yesterday"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} day",
            "other": "in {0} days"
          },
          "past": {
            "one": "{0} day ago",
            "other": "{0} days ago"
          }
        }
      },
      "day-short": {
        "displayName": "day",
        "relative": {
          "0": "today",
          "1": "tomorrow",
          "-1": "yesterday"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} day",
            "other": "in {0} days"
          },
          "past": {
            "one": "{0} day ago",
            "other": "{0} days ago"
          }
        }
      },
      "hour": {
        "displayName": "hour",
        "relative": {
          "0": "this hour"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} hour",
            "other": "in {0} hours"
          },
          "past": {
            "one": "{0} hour ago",
            "other": "{0} hours ago"
          }
        }
      },
      "hour-short": {
        "displayName": "hr.",
        "relative": {
          "0": "this hour"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} hr.",
            "other": "in {0} hr."
          },
          "past": {
            "one": "{0} hr. ago",
            "other": "{0} hr. ago"
          }
        }
      },
      "minute": {
        "displayName": "minute",
        "relative": {
          "0": "this minute"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} minute",
            "other": "in {0} minutes"
          },
          "past": {
            "one": "{0} minute ago",
            "other": "{0} minutes ago"
          }
        }
      },
      "minute-short": {
        "displayName": "min.",
        "relative": {
          "0": "this minute"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} min.",
            "other": "in {0} min."
          },
          "past": {
            "one": "{0} min. ago",
            "other": "{0} min. ago"
          }
        }
      },
      "second": {
        "displayName": "second",
        "relative": {
          "0": "now"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} second",
            "other": "in {0} seconds"
          },
          "past": {
            "one": "{0} second ago",
            "other": "{0} seconds ago"
          }
        }
      },
      "second-short": {
        "displayName": "sec.",
        "relative": {
          "0": "now"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} sec.",
            "other": "in {0} sec."
          },
          "past": {
            "one": "{0} sec. ago",
            "other": "{0} sec. ago"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "one": ["0 thousand", 1],
          "other": ["0 thousand", 1]
        }], [10000, {
          "one": ["00 thousand", 2],
          "other": ["00 thousand", 2]
        }], [100000, {
          "one": ["000 thousand", 3],
          "other": ["000 thousand", 3]
        }], [1000000, {
          "one": ["0 million", 1],
          "other": ["0 million", 1]
        }], [10000000, {
          "one": ["00 million", 2],
          "other": ["00 million", 2]
        }], [100000000, {
          "one": ["000 million", 3],
          "other": ["000 million", 3]
        }], [1000000000, {
          "one": ["0 billion", 1],
          "other": ["0 billion", 1]
        }], [10000000000, {
          "one": ["00 billion", 2],
          "other": ["00 billion", 2]
        }], [100000000000, {
          "one": ["000 billion", 3],
          "other": ["000 billion", 3]
        }], [1000000000000, {
          "one": ["0 trillion", 1],
          "other": ["0 trillion", 1]
        }], [10000000000000, {
          "one": ["00 trillion", 2],
          "other": ["00 trillion", 2]
        }], [100000000000000, {
          "one": ["000 trillion", 3],
          "other": ["000 trillion", 3]
        }]],
        "short": [[1000, {
          "one": ["0K", 1],
          "other": ["0K", 1]
        }], [10000, {
          "one": ["00K", 2],
          "other": ["00K", 2]
        }], [100000, {
          "one": ["000K", 3],
          "other": ["000K", 3]
        }], [1000000, {
          "one": ["0M", 1],
          "other": ["0M", 1]
        }], [10000000, {
          "one": ["00M", 2],
          "other": ["00M", 2]
        }], [100000000, {
          "one": ["000M", 3],
          "other": ["000M", 3]
        }], [1000000000, {
          "one": ["0B", 1],
          "other": ["0B", 1]
        }], [10000000000, {
          "one": ["00B", 2],
          "other": ["00B", 2]
        }], [100000000000, {
          "one": ["000B", 3],
          "other": ["000B", 3]
        }], [1000000000000, {
          "one": ["0T", 1],
          "other": ["0T", 1]
        }], [10000000000000, {
          "one": ["00T", 2],
          "other": ["00T", 2]
        }], [100000000000000, {
          "one": ["000T", 3],
          "other": ["000T", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});

;define("better-trading/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});

;define("better-trading/components/ember-modal-dialog-positioned-container", ["exports", "ember-modal-dialog/components/positioned-container"], function (_exports, _positionedContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _positionedContainer.default;
    }
  });
});

;define("better-trading/components/ember-modal-dialog/-basic-dialog", ["exports", "ember-modal-dialog/components/basic-dialog"], function (_exports, _basicDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _basicDialog.default;
    }
  });
});

;define("better-trading/components/ember-modal-dialog/-in-place-dialog", ["exports", "ember-modal-dialog/components/in-place-dialog"], function (_exports, _inPlaceDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _inPlaceDialog.default;
    }
  });
});

;define("better-trading/components/ember-modal-dialog/-liquid-dialog", ["exports", "ember-modal-dialog/components/liquid-dialog"], function (_exports, _liquidDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidDialog.default;
    }
  });
});

;define("better-trading/components/ember-modal-dialog/-liquid-tether-dialog", ["exports", "ember-modal-dialog/components/liquid-tether-dialog"], function (_exports, _liquidTetherDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidTetherDialog.default;
    }
  });
});

;define("better-trading/components/ember-modal-dialog/-tether-dialog", ["exports", "ember-modal-dialog/components/tether-dialog"], function (_exports, _tetherDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _tetherDialog.default;
    }
  });
});

;define("better-trading/components/ember-wormhole", ["exports", "ember-wormhole/components/ember-wormhole"], function (_exports, _emberWormhole) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberWormhole.default;
    }
  });
});

;define("better-trading/components/fa-icon", ["exports", "@fortawesome/ember-fontawesome/components/fa-icon"], function (_exports, _faIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _faIcon.default;
    }
  });
});

;define("better-trading/components/flash-message", ["exports", "ember-cli-flash/components/flash-message"], function (_exports, _flashMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _flashMessage.default;
    }
  });
});

;define("better-trading/components/markdown-to-html", ["exports", "ember-cli-showdown/components/markdown-to-html"], function (_exports, _markdownToHtml) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _markdownToHtml.default;
    }
  });
});

;define("better-trading/components/modal-dialog", ["exports", "ember-modal-dialog/components/modal-dialog"], function (_exports, _modalDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _modalDialog.default;
    }
  });
});

;define("better-trading/components/sortable-group", ["exports", "ember-sortable/components/sortable-group"], function (_exports, _sortableGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _sortableGroup.default;
  _exports.default = _default;
});

;define("better-trading/components/sortable-handle", ["exports", "ember-sortable/components/sortable-handle"], function (_exports, _sortableHandle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _sortableHandle.default;
  _exports.default = _default;
});

;define("better-trading/components/sortable-item", ["exports", "ember-sortable/components/sortable-item"], function (_exports, _sortableItem) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _sortableItem.default;
  _exports.default = _default;
});

;define("better-trading/config/environment.d", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = config;
  /**
   * Type declarations for
   *    import config from './config/environment'
   *
   * For now these need to be managed by the developer
   * since different ember addons can materialize new entries.
   */

  _exports.default = _default;
});

;define("better-trading/flash/object", ["exports", "ember-cli-flash/flash/object"], function (_exports, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _object.default;
    }
  });
});

;define("better-trading/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(_exports, "and", {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});

;define("better-trading/helpers/cancel-all", ["exports", "ember-concurrency/helpers/cancel-all"], function (_exports, _cancelAll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});

;define("better-trading/helpers/eq", ["exports", "ember-truth-helpers/helpers/equal"], function (_exports, _equal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(_exports, "equal", {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});

;define("better-trading/helpers/format-date", ["exports", "ember-intl/helpers/format-date"], function (_exports, _formatDate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _formatDate.default;
    }
  });
});

;define("better-trading/helpers/format-message", ["exports", "ember-intl/helpers/format-message"], function (_exports, _formatMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _formatMessage.default;
    }
  });
});

;define("better-trading/helpers/format-number", ["exports", "ember-intl/helpers/format-number"], function (_exports, _formatNumber) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _formatNumber.default;
    }
  });
});

;define("better-trading/helpers/format-relative", ["exports", "ember-intl/helpers/format-relative"], function (_exports, _formatRelative) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _formatRelative.default;
    }
  });
});

;define("better-trading/helpers/format-time", ["exports", "ember-intl/helpers/format-time"], function (_exports, _formatTime) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _formatTime.default;
    }
  });
});

;define("better-trading/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(_exports, "gt", {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});

;define("better-trading/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(_exports, "gte", {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});

;define("better-trading/helpers/html-safe", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.htmlSafeHelper = void 0;

  const htmlSafeHelper = ([rawHtml]) => {
    return Ember.String.htmlSafe(rawHtml);
  };

  _exports.htmlSafeHelper = htmlSafeHelper;

  var _default = Ember.Helper.helper(htmlSafeHelper);

  _exports.default = _default;
});

;define("better-trading/helpers/ignore-children", ["exports", "ember-ignore-children-helper/helpers/ignore-children"], function (_exports, _ignoreChildren) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ignoreChildren.default;
    }
  });
  Object.defineProperty(_exports, "ignoreChildren", {
    enumerable: true,
    get: function () {
      return _ignoreChildren.ignoreChildren;
    }
  });
});

;define("better-trading/helpers/image-resource-url", ["exports", "better-trading/config/environment", "better-trading/utilities/extension-api"], function (_exports, _environment, _extensionApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.imageResourceUrl = void 0;

  // Config
  // Utilities
  const imageResourceUrl = ([path]) => {
    return (0, _extensionApi.extensionApi)().runtime.getURL(`${_environment.default.APP.imageResourcePrefix}/${path}`);
  };

  _exports.imageResourceUrl = imageResourceUrl;

  var _default = Ember.Helper.helper(imageResourceUrl);

  _exports.default = _default;
});

;define("better-trading/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(_exports, "isArray", {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});

;define("better-trading/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
});

;define("better-trading/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(_exports, "isEqual", {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});

;define("better-trading/helpers/local-class", ["exports", "ember-css-modules/helpers/local-class"], function (_exports, _localClass) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _localClass.default;
    }
  });
  Object.defineProperty(_exports, "localClass", {
    enumerable: true,
    get: function () {
      return _localClass.localClass;
    }
  });
});

;define("better-trading/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(_exports, "lt", {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});

;define("better-trading/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(_exports, "lte", {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});

;define("better-trading/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-equal"], function (_exports, _notEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(_exports, "notEq", {
    enumerable: true,
    get: function () {
      return _notEqual.notEq;
    }
  });
});

;define("better-trading/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(_exports, "not", {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});

;define("better-trading/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(_exports, "or", {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});

;define("better-trading/helpers/perform", ["exports", "ember-concurrency/helpers/perform"], function (_exports, _perform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});

;define("better-trading/helpers/safe-styles", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.safeStyles = void 0;

  const safeStyles = ([styles]) => {
    const styleRules = Object.keys(styles).map(attribute => {
      return `${attribute}: ${styles[attribute]};`;
    });
    return Ember.String.htmlSafe(styleRules.join(''));
  };

  _exports.safeStyles = safeStyles;

  var _default = Ember.Helper.helper(safeStyles);

  _exports.default = _default;
});

;define("better-trading/helpers/t", ["exports", "ember-intl/helpers/t"], function (_exports, _t) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _t.default;
    }
  });
});

;define("better-trading/helpers/task", ["exports", "ember-concurrency/helpers/task"], function (_exports, _task) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});

;define("better-trading/helpers/trade-url", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let TradeUrl = (_dec = Ember.inject.service('trade-location'), (_class = (_temp = class TradeUrl extends Ember.Helper {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "tradeLocation", _descriptor, this);
    }

    compute([{
      version,
      type,
      slug
    }], {
      suffix,
      league
    }) {
      const tradeUrl = this.tradeLocation.getTradeUrl(version, type, slug, league);
      if (!suffix) return tradeUrl;
      return tradeUrl + suffix;
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "tradeLocation", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = TradeUrl;
});

;define("better-trading/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(_exports, "xor", {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});

;define("better-trading/initializers/add-modals-container", ["exports", "ember-modal-dialog/initializers/add-modals-container"], function (_exports, _addModalsContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'add-modals-container',
    initialize: _addModalsContainer.default
  };
  _exports.default = _default;
});

;define("better-trading/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});

;define("better-trading/initializers/ember-concurrency", ["exports", "ember-concurrency/initializers/ember-concurrency"], function (_exports, _emberConcurrency) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
});

;define("better-trading/initializers/flash-messages", ["exports", "better-trading/config/environment", "ember-cli-flash/utils/flash-message-options"], function (_exports, _environment, _flashMessageOptions) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  /* eslint-disable ember/new-module-imports */
  const INJECTION_FACTORIES_DEPRECATION_MESSAGE = '[ember-cli-flash] Future versions of ember-cli-flash will no longer inject the service automatically. Instead, you should explicitly inject it into your Route, Controller or Component with `Ember.inject.service`.';

  function initialize() {
    const application = arguments[1] || arguments[0];
    const {
      flashMessageDefaults
    } = _environment.default || {};
    const {
      injectionFactories
    } = flashMessageDefaults || [];
    const options = (0, _flashMessageOptions.default)(flashMessageDefaults);
    const shouldShowDeprecation = !(injectionFactories && injectionFactories.length);
    (true && !(shouldShowDeprecation) && Ember.deprecate(INJECTION_FACTORIES_DEPRECATION_MESSAGE, shouldShowDeprecation, {
      id: 'ember-cli-flash.deprecate-injection-factories',
      until: '2.0.0'
    }));
    options.injectionFactories.forEach(factory => {
      application.inject(factory, 'flashMessages', 'service:flash-messages');
    });
  }

  var _default = {
    name: 'flash-messages',
    initialize
  };
  _exports.default = _default;
});

;define("better-trading/instance-initializers/item-results-enhancers", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.initialize = void 0;

  /* global require */
  const initialize = appInstance => {
    const itemResultsEnhanceService = appInstance.lookup('service:item-results/enhance'); // TypeScript thinks that `require` is `NodeRequire`
    // We need to ignore it to access `entries` on it.
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore

    Object.keys(require.entries).filter(moduleName => moduleName.startsWith('better-trading/services/item-results/enhancers/')).map(moduleName => moduleName.replace('better-trading/services/', '')).forEach(moduleName => {
      itemResultsEnhanceService.registerEnhancerService(appInstance.lookup(`service:${moduleName}`));
    });
  };

  _exports.initialize = initialize;
  var _default = {
    initialize
  };
  _exports.default = _default;
});

;define("better-trading/modifiers/did-insert", ["exports", "@ember/render-modifiers/modifiers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
});

;define("better-trading/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
});

;define("better-trading/modifiers/on-window-focus", ["exports", "ember-modifier"], function (_exports, _emberModifier) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // Vendor
  var _default = (0, _emberModifier.modifier)((_element, [handler]) => {
    window.addEventListener('focus', handler);
    return () => {
      window.removeEventListener('focus', handler);
    };
  });

  _exports.default = _default;
});

;define("better-trading/modifiers/sortable-group", ["exports", "ember-sortable/modifiers/sortable-group"], function (_exports, _sortableGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sortableGroup.default;
    }
  });
});

;define("better-trading/modifiers/sortable-handle", ["exports", "ember-sortable/modifiers/sortable-handle"], function (_exports, _sortableHandle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sortableHandle.default;
    }
  });
});

;define("better-trading/modifiers/sortable-item", ["exports", "ember-sortable/modifiers/sortable-item"], function (_exports, _sortableItem) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sortableItem.default;
    }
  });
});

;define("better-trading/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
});

;define("better-trading/pods/about/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "9H8y3yKY",
    "block": "{\"symbols\":[],\"statements\":[[5,\"page/about\",[],[[],[]]],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "better-trading/pods/about/template.hbs"
    }
  });

  _exports.default = _default;
});

;define("better-trading/pods/application/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  // Constants
  const DEFAULT_LOCALE = 'en';
  let ApplicationRoute = (_dec = Ember.inject.service('bookmarks'), _dec2 = Ember.inject.service('intl'), _dec3 = Ember.inject.service('item-results'), _dec4 = Ember.inject.service('storage'), _dec5 = Ember.inject.service('trade-location'), _dec6 = Ember.inject.service('page-title'), (_class = (_temp = class ApplicationRoute extends Ember.Route {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "bookmarks", _descriptor, this);

      _initializerDefineProperty(this, "intl", _descriptor2, this);

      _initializerDefineProperty(this, "itemResults", _descriptor3, this);

      _initializerDefineProperty(this, "storage", _descriptor4, this);

      _initializerDefineProperty(this, "tradeLocation", _descriptor5, this);

      _initializerDefineProperty(this, "pageTitle", _descriptor6, this);
    }

    async beforeModel() {
      this.intl.setLocale(DEFAULT_LOCALE);
      await this.itemResults.initialize();
      this.tradeLocation.initialize();
      await this.storage.initialize();
      await this.pageTitle.initialize();
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "bookmarks", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "intl", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "itemResults", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "storage", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "tradeLocation", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "pageTitle", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ApplicationRoute;
});

;define("better-trading/pods/application/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "3z0fvd4L",
    "block": "{\"symbols\":[],\"statements\":[[5,\"changelog-banner\",[],[[],[]]],[0,\"\\n\\n\"],[5,\"header\",[],[[],[]]],[0,\"\\n\\n\"],[1,[22,\"outlet\"],false],[0,\"\\n\\n\"],[7,\"div\",true],[10,\"id\",\"contextual-menu-items\"],[8],[9],[0,\"\\n\\n\"],[5,\"flash-messages\",[],[[\"@flashMessages\"],[[23,0,[\"flashMessages\",\"queue\"]]]]],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "better-trading/pods/application/template.hbs"
    }
  });

  _exports.default = _default;
});

;define("better-trading/pods/components/alert-message/component", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // Vendor
  class AlertMessage extends _component.default {
    get icon() {
      if (this.args.type === 'success') return 'check-circle';
      return 'exclamation-circle';
    }

  }

  _exports.default = AlertMessage;
});

;define("better-trading/pods/components/alert-message/styles", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "alert-message": "_alert-message_1ub9xp",
    "is-alert": "_is-alert_1ub9xp",
    "is-warning": "_is-warning_1ub9xp",
    "is-success": "_is-success_1ub9xp",
    "icon": "_icon_1ub9xp"
  };
  _exports.default = _default;
});

;define("better-trading/pods/components/alert-message/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "UJbwdtaX",
    "block": "{\"symbols\":[\"@type\",\"&attrs\",\"@message\"],\"statements\":[[7,\"div\",false],[12,\"class\",[29,[[28,\"local-class\",[[28,\"concat\",[\"alert-message is-\",[23,1,[]]],null]],[[\"from\"],[\"better-trading/pods/components/alert-message/styles\"]]]]]],[13,2],[8],[0,\"\\n  \"],[5,\"fa-icon\",[[12,\"class\",[29,[[28,\"local-class\",[\"icon\"],[[\"from\"],[\"better-trading/pods/components/alert-message/styles\"]]]]]]],[[\"@icon\"],[[23,0,[\"icon\"]]]]],[0,\"\\n\\n  \"],[1,[28,\"html-safe\",[[23,3,[]]],null],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "better-trading/pods/components/alert-message/template.hbs"
    }
  });

  _exports.default = _default;
});

;define("better-trading/pods/components/bookmark-folder-icon/component", ["exports", "@glimmer/component", "better-trading/types/bookmarks"], function (_exports, _component, _bookmarks) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // Vendor
  // Types
  class BookmarkFolderIcon extends _component.default {
    get iconPath() {
      return `bookmark-folder/${this.args.icon}.png`;
    }

    get iconIsItem() {
      const itemIcons = [...Object.values(_bookmarks.BookmarksFolderPoE1ItemIcon), ...Object.values(_bookmarks.BookmarksFolderPoE2ItemIcon)];
      return itemIcons.includes(this.args.icon);
    }

  }

  _exports.default = BookmarkFolderIcon;
});

;define("better-trading/pods/components/bookmark-folder-icon/styles", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "bookmark-folder-icon": "_bookmark-folder-icon_1r6f6n",
    "is-item": "_is-item_1r6f6n",
    "is-ascendancy": "_is-ascendancy_1r6f6n"
  };
  _exports.default = _default;
});

;define("better-trading/pods/components/bookmark-folder-icon/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "fBsIAKw4",
    "block": "{\"symbols\":[\"@icon\",\"&attrs\"],\"statements\":[[7,\"img\",false],[12,\"class\",[29,[[28,\"local-class\",[[28,\"concat\",[\"bookmark-folder-icon \",[28,\"if\",[[23,0,[\"iconIsItem\"]],\"is-item\",\"is-ascendancy\"],null]],null]],[[\"from\"],[\"better-trading/pods/components/bookmark-folder-icon/styles\"]]]]]],[12,\"src\",[28,\"image-resource-url\",[[23,0,[\"iconPath\"]]],null]],[12,\"alt\",[23,1,[]]],[13,2],[8],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "better-trading/pods/components/bookmark-folder-icon/template.hbs"
    }
  });

  _exports.default = _default;
});

;define("better-trading/pods/components/button/component", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  let Button = (_dec = Ember._action, (_class = class Button extends _component.default {
    handleClick() {
      if (!this.args.onClick) return;
      this.args.onClick();
    }

    get fileAccept() {
      return this.args.fileAccept || '*';
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "handleClick", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "handleClick"), _class.prototype)), _class));
  _exports.default = Button;
});

;define("better-trading/pods/components/button/content/component", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // Vendor
  class ButtonContent extends _component.default {
    get iconPrefix() {
      if (!this.args.icon) return;
      if (['github', 'discord'].includes(this.args.icon)) return 'fab';
      return 'fas';
    }

  }

  _exports.default = ButtonContent;
});

;define("better-trading/pods/components/button/content/styles", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "label": "_label_utph8e",
    "with-icon": "_with-icon_utph8e"
  };
  _exports.default = _default;
});

;define("better-trading/pods/components/button/content/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "O6dtKhra",
    "block": "{\"symbols\":[\"@icon\",\"@label\"],\"statements\":[[4,\"if\",[[23,1,[]]],null,{\"statements\":[[0,\"  \"],[5,\"fa-icon\",[[12,\"class\",[29,[[28,\"local-class\",[\"icon\"],[[\"from\"],[\"better-trading/pods/components/button/content/styles\"]]]]]]],[[\"@icon\",\"@prefix\"],[[23,1,[]],[23,0,[\"iconPrefix\"]]]]],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[23,2,[]]],null,{\"statements\":[[0,\"  \"],[7,\"span\",true],[11,\"class\",[29,[[28,\"local-class\",[[28,\"concat\",[\"label \",[28,\"if\",[[23,1,[]],\"with-icon\"],null]],null]],[[\"from\"],[\"better-trading/pods/components/button/content/styles\"]]]]]],[8],[0,\"\\n    \"],[1,[23,2,[]],false],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "better-trading/pods/components/button/content/template.hbs"
    }
  });

  _exports.default = _default;
});

;define("better-trading/pods/components/button/styles", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "button": "_button_6591tk",
    "is-blue": "_is-blue_6591tk",
    "is-gold": "_is-gold_6591tk",
    "is-red": "_is-red_6591tk",
    "file-input": "_file-input_6591tk"
  };
  _exports.default = _default;
});

;define("better-trading/pods/components/button/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "AXxOJuzz",
    "block": "{\"symbols\":[\"@theme\",\"&attrs\",\"@label\",\"@icon\",\"@onFileChange\",\"@href\"],\"statements\":[[4,\"if\",[[23,6,[]]],null,{\"statements\":[[0,\"  \"],[7,\"a\",false],[12,\"class\",[29,[[28,\"local-class\",[[28,\"concat\",[\"button is-\",[23,1,[]]],null]],[[\"from\"],[\"better-trading/pods/components/button/styles\"]]]]]],[12,\"href\",[23,6,[]]],[12,\"target\",\"_blank\"],[12,\"rel\",\"noopener\"],[13,2],[8],[0,\"\\n    \"],[5,\"button/content\",[],[[\"@label\",\"@icon\"],[[23,3,[]],[23,4,[]]]]],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,5,[]]],null,{\"statements\":[[0,\"  \"],[7,\"label\",false],[12,\"class\",[29,[[28,\"local-class\",[[28,\"concat\",[\"button is-\",[23,1,[]]],null]],[[\"from\"],[\"better-trading/pods/components/button/styles\"]]]]]],[13,2],[8],[0,\"\\n    \"],[7,\"input\",false],[12,\"class\",[29,[[28,\"local-class\",[\"file-input\"],[[\"from\"],[\"better-trading/pods/components/button/styles\"]]]]]],[12,\"accept\",[23,0,[\"fileAccept\"]]],[12,\"type\",\"file\"],[3,\"on\",[\"change\",[23,5,[]]]],[8],[9],[0,\"\\n\\n    \"],[5,\"button/content\",[],[[\"@label\",\"@icon\"],[[23,3,[]],[23,4,[]]]]],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[7,\"button\",false],[12,\"class\",[29,[[28,\"local-class\",[[28,\"concat\",[\"button is-\",[23,1,[]]],null]],[[\"from\"],[\"better-trading/pods/components/button/styles\"]]]]]],[13,2],[3,\"on\",[\"click\",[28,\"fn\",[[23,0,[\"handleClick\"]]],null]]],[8],[0,\"\\n    \"],[5,\"button/content\",[],[[\"@label\",\"@icon\"],[[23,3,[]],[23,4,[]]]]],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]}]],\"hasEval\":false}",
    "meta": {
      "moduleName": "better-trading/pods/components/button/template.hbs"
    }
  });

  _exports.default = _default;
});

;define("better-trading/pods/components/changelog-banner/component", ["exports", "@glimmer/component", "better-trading/config/environment"], function (_exports, _component, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _descriptor, _descriptor2, _descriptor3, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  // Constants
  const DISMISSED_CHANGELOG_STORAGE_KEY = 'dismissed-changelog';
  let ChangelogBanner = (_dec = Ember.inject.service('storage'), _dec2 = Ember._tracked, _dec3 = Ember._tracked, _dec4 = Ember._action, _dec5 = Ember._action, (_class = (_temp = class ChangelogBanner extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "storage", _descriptor, this);

      _initializerDefineProperty(this, "isDismissed", _descriptor2, this);

      _initializerDefineProperty(this, "modalChangelogIsVisible", _descriptor3, this);
    }

    get currentVersion() {
      return _environment.default.APP.version;
    }

    get currentChangelog() {
      return _environment.default.APP.changelog;
    }

    get bannerIsVisible() {
      if (this.isDismissed) return false;
      if (!this.currentChangelog) return false;
      const dismissedChangelog = this.storage.getLocalValue(DISMISSED_CHANGELOG_STORAGE_KEY);
      if (dismissedChangelog && dismissedChangelog === this.currentChangelog.slug) return false;
      return true;
    }

    openChangelog() {
      this.modalChangelogIsVisible = true;
    }

    dismiss() {
      if (!this.currentChangelog) return;
      this.storage.setLocalValue(DISMISSED_CHANGELOG_STORAGE_KEY, this.currentChangelog.slug);
      this.isDismissed = true;
      this.modalChangelogIsVisible = false;
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "storage", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "isDismissed", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "modalChangelogIsVisible", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "openChangelog", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "openChangelog"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "dismiss", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "dismiss"), _class.prototype)), _class));
  _exports.default = ChangelogBanner;
});

;define("better-trading/pods/components/changelog-banner/styles", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "changelog-banner": "_changelog-banner_km9n85",
    "dismiss-button": "_dismiss-button_km9n85"
  };
  _exports.default = _default;
});

;define("better-trading/pods/components/changelog-banner/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "TRrAcpxj",
    "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[23,0,[\"bannerIsVisible\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"changelog-banner\"],[[\"from\"],[\"better-trading/pods/components/changelog-banner/styles\"]]]]]],[8],[0,\"\\n    \"],[1,[28,\"t\",[\"components.changelog-banner.notice\"],[[\"version\"],[[23,0,[\"currentVersion\"]]]]],false],[0,\"\\n\\n    \"],[5,\"button\",[[12,\"type\",\"button\"]],[[\"@theme\",\"@label\",\"@onClick\",\"@icon\"],[\"blue\",[28,\"t\",[\"components.changelog-banner.modal-button\"],null],[28,\"fn\",[[23,0,[\"openChangelog\"]]],null],\"info-circle\"]]],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[23,0,[\"modalChangelogIsVisible\"]]],null,{\"statements\":[[0,\"  \"],[5,\"modal\",[],[[\"@title\",\"@onClose\"],[[28,\"t\",[\"components.changelog-banner.modal-title\"],[[\"version\"],[[23,0,[\"currentVersion\"]]]]],[28,\"fn\",[[23,0,[\"dismiss\"]]],null]]],{\"statements\":[[0,\"\\n    \"],[5,\"markdown-changelog\",[],[[\"@markdown\"],[[23,0,[\"currentChangelog\",\"markdown\"]]]]],[0,\"\\n\\n    \"],[5,\"button\",[[12,\"class\",[29,[[28,\"local-class\",[\"dismiss-button\"],[[\"from\"],[\"better-trading/pods/components/changelog-banner/styles\"]]]]]],[12,\"type\",\"button\"]],[[\"@theme\",\"@label\",\"@onClick\",\"@icon\"],[\"gold\",[28,\"t\",[\"components.changelog-banner.dismiss-button\"],null],[28,\"fn\",[[23,0,[\"dismiss\"]]],null],\"times\"]]],[0,\"\\n  \"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "better-trading/pods/components/changelog-banner/template.hbs"
    }
  });

  _exports.default = _default;
});

;define("better-trading/pods/components/clipboard-textarea/component", ["exports", "@glimmer/component", "better-trading/utilities/copy-to-clipboard"], function (_exports, _component, _copyToClipboard) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ClipboardTextarea = (_dec = Ember.inject.service('intl'), _dec2 = Ember._tracked, _dec3 = Ember._action, _dec4 = Ember._action, (_class = (_temp = class ClipboardTextarea extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "intl", _descriptor, this);

      _initializerDefineProperty(this, "hasCopied", _descriptor2, this);
    }

    get copyButtonLabel() {
      if (this.hasCopied) return this.intl.t('components.clipboard-textarea.button-copied');
      return this.intl.t('components.clipboard-textarea.button');
    }

    selectAll(event) {
      event.target.select();
    }

    copyToClipboard() {
      (0, _copyToClipboard.copyToClipboard)(this.args.value);
      this.hasCopied = true;
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "intl", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "hasCopied", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "selectAll", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "selectAll"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "copyToClipboard", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "copyToClipboard"), _class.prototype)), _class));
  _exports.default = ClipboardTextarea;
});

;define("better-trading/pods/components/clipboard-textarea/styles", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "textarea-wrapper": "_textarea-wrapper_1gng1q",
    "textarea": "_textarea_1gng1q",
    "clipboard-button": "_clipboard-button_1gng1q"
  };
  _exports.default = _default;
});

;define("better-trading/pods/components/clipboard-textarea/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Yyi0EMhf",
    "block": "{\"symbols\":[\"@value\",\"&attrs\"],\"statements\":[[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"textarea-wrapper\"],[[\"from\"],[\"better-trading/pods/components/clipboard-textarea/styles\"]]]]]],[8],[0,\"\\n  \"],[7,\"textarea\",false],[12,\"class\",[29,[[28,\"local-class\",[\"textarea\"],[[\"from\"],[\"better-trading/pods/components/clipboard-textarea/styles\"]]]]]],[12,\"readonly\",\"\"],[12,\"value\",[23,1,[]]],[13,2],[3,\"on\",[\"focus\",[28,\"fn\",[[23,0,[\"selectAll\"]]],null]]],[8],[9],[0,\"\\n  \"],[5,\"button\",[[12,\"class\",[29,[[28,\"local-class\",[\"clipboard-button\"],[[\"from\"],[\"better-trading/pods/components/clipboard-textarea/styles\"]]]]]],[12,\"type\",\"button\"]],[[\"@theme\",\"@label\",\"@onClick\",\"@icon\"],[\"gold\",[23,0,[\"copyButtonLabel\"]],[28,\"fn\",[[23,0,[\"copyToClipboard\"]]],null],\"clipboard\"]]],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "better-trading/pods/components/clipboard-textarea/template.hbs"
    }
  });

  _exports.default = _default;
});

;define("better-trading/pods/components/contextual-menu/component", ["exports", "@glimmer/component", "ember-concurrency-decorators", "ember-concurrency"], function (_exports, _component, _emberConcurrencyDecorators, _emberConcurrency) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _descriptor, _descriptor2, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  // Constants
  const HIDE_DEBOUNCE_DELAY_IN_MILLISECONDS = 500;
  let ContextualMenu = (_dec = Ember._tracked, _dec2 = Ember._tracked, _dec3 = Ember._action, _dec4 = Ember._action, _dec5 = Ember._action, _dec6 = Ember._action, _dec7 = Ember._action, (_class = (_temp = class ContextualMenu extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "itemsDivElement", _descriptor, this);

      _initializerDefineProperty(this, "displayPosition", _descriptor2, this);
    }

    get itemsAreVisible() {
      return Boolean(this.displayPosition);
    }

    get positionStyles() {
      if (!this.displayPosition || !this.itemsDivElement) return {};
      const viewportHeight = window.innerHeight;
      const itemsHeight = this.itemsDivElement.clientHeight;
      let top = this.displayPosition.y;
      top -= Math.max(itemsHeight + top - viewportHeight, 0);
      return {
        top: `${top}px`,
        left: `${this.displayPosition.x}px`
      };
    }

    *debouncedHideItemsTask() {
      yield (0, _emberConcurrency.timeout)(HIDE_DEBOUNCE_DELAY_IN_MILLISECONDS);
      this.hideItems();
    }

    showItems(event) {
      this.displayPosition = {
        y: event.clientY,
        x: event.clientX
      };
    }

    hideItems() {
      this.displayPosition = null;
    }

    cancelDebouncedHideItemsTask() {
      this.debouncedHideItemsTask.cancelAll();
    }

    registerItemsElement(itemsElement) {
      this.itemsDivElement = itemsElement;
    }

    unregisterItemsElement() {
      this.itemsDivElement = null;
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "itemsDivElement", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "displayPosition", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "debouncedHideItemsTask", [_emberConcurrencyDecorators.restartableTask], Object.getOwnPropertyDescriptor(_class.prototype, "debouncedHideItemsTask"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "showItems", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "showItems"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "hideItems", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "hideItems"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "cancelDebouncedHideItemsTask", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "cancelDebouncedHideItemsTask"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "registerItemsElement", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "registerItemsElement"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "unregisterItemsElement", [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, "unregisterItemsElement"), _class.prototype)), _class));
  _exports.default = ContextualMenu;
});

;define("better-trading/pods/components/contextual-menu/item/component", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  let ContextualMenuItem = (_dec = Ember._action, (_class = class ContextualMenuItem extends _component.default {
    async dispatchAction() {
      if (typeof this.args.onClick === 'function') {
        await this.args.onClick();
      }

      this.args.didClick();
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "dispatchAction", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "dispatchAction"), _class.prototype)), _class));
  _exports.default = ContextualMenuItem;
});

;define("better-trading/pods/components/contextual-menu/item/styles", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "item": "_item_12mzp7"
  };
  _exports.default = _default;
});

;define("better-trading/pods/components/contextual-menu/item/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "6m0HV1bn",
    "block": "{\"symbols\":[\"@label\",\"@href\"],\"statements\":[[4,\"if\",[[23,2,[]]],null,{\"statements\":[[0,\"  \"],[7,\"a\",false],[12,\"class\",[29,[[28,\"local-class\",[\"item\"],[[\"from\"],[\"better-trading/pods/components/contextual-menu/item/styles\"]]]]]],[12,\"href\",[23,2,[]]],[3,\"on\",[\"click\",[28,\"fn\",[[23,0,[\"dispatchAction\"]]],null]]],[8],[0,\"\\n    \"],[1,[23,1,[]],false],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[7,\"button\",false],[12,\"class\",[29,[[28,\"local-class\",[\"item\"],[[\"from\"],[\"better-trading/pods/components/contextual-menu/item/styles\"]]]]]],[12,\"type\",\"button\"],[3,\"on\",[\"click\",[28,\"fn\",[[23,0,[\"dispatchAction\"]]],null]]],[8],[0,\"\\n    \"],[1,[23,1,[]],false],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}",
    "meta": {
      "moduleName": "better-trading/pods/components/contextual-menu/item/template.hbs"
    }
  });

  _exports.default = _default;
});

;define("better-trading/pods/components/contextual-menu/styles", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "contextual-menu": "_contextual-menu_hyexxz",
    "contextual-menu-items": "_contextual-menu-items_hyexxz"
  };
  _exports.default = _default;
});

;define("better-trading/pods/components/contextual-menu/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "OMdfyZDH",
    "block": "{\"symbols\":[\"&default\",\"&attrs\"],\"statements\":[[7,\"div\",false],[12,\"class\",[29,[[28,\"local-class\",[\"contextual-menu\"],[[\"from\"],[\"better-trading/pods/components/contextual-menu/styles\"]]]]]],[13,2],[3,\"on\",[\"click\",[28,\"fn\",[[23,0,[\"showItems\"]]],null]]],[8],[0,\"\\n  \"],[5,\"fa-icon\",[],[[\"@icon\"],[\"ellipsis-h\"]]],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[4,\"if\",[[23,0,[\"itemsAreVisible\"]]],null,{\"statements\":[[0,\"  \"],[5,\"ember-wormhole\",[],[[\"@to\"],[\"contextual-menu-items\"]],{\"statements\":[[0,\"\\n    \"],[7,\"div\",false],[12,\"class\",[29,[[28,\"local-class\",[\"contextual-menu-items\"],[[\"from\"],[\"better-trading/pods/components/contextual-menu/styles\"]]]]]],[12,\"style\",[28,\"safe-styles\",[[23,0,[\"positionStyles\"]]],null]],[3,\"did-insert\",[[28,\"fn\",[[23,0,[\"registerItemsElement\"]]],null]]],[3,\"will-destroy\",[[28,\"fn\",[[23,0,[\"unregisterItemsElement\"]]],null]]],[3,\"on\",[\"mouseleave\",[28,\"perform\",[[23,0,[\"debouncedHideItemsTask\"]]],null]]],[3,\"on\",[\"mouseenter\",[28,\"fn\",[[23,0,[\"cancelDebouncedHideItemsTask\"]]],null]]],[8],[0,\"\\n      \"],[14,1,[[28,\"component\",[\"contextual-menu/item\"],[[\"didClick\"],[[28,\"fn\",[[23,0,[\"hideItems\"]]],null]]]]]],[0,\"\\n    \"],[9],[0,\"\\n  \"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "better-trading/pods/components/contextual-menu/template.hbs"
    }
  });

  _exports.default = _default;
});

;define("better-trading/pods/components/flash-messages/component", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  let FlashMessages = (_dec = Ember._action, (_class = class FlashMessages extends _component.default {
    dismissFlashMessage(flashMessage) {
      flashMessage.exitMessage();
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "dismissFlashMessage", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "dismissFlashMessage"), _class.prototype)), _class));
  _exports.default = FlashMessages;
});

;define("better-trading/pods/components/flash-messages/styles", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "flash-messages": "_flash-messages_1b043m",
    "message-wrapper": "_message-wrapper_1b043m",
    "is-exiting": "_is-exiting_1b043m",
    "message": "_message_1b043m"
  };
  _exports.default = _default;
});

;define("better-trading/pods/components/flash-messages/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "2cH/XJQt",
    "block": "{\"symbols\":[\"flash\",\"@flashMessages\"],\"statements\":[[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"flash-messages\"],[[\"from\"],[\"better-trading/pods/components/flash-messages/styles\"]]]]]],[8],[0,\"\\n\"],[4,\"each\",[[23,2,[]]],null,{\"statements\":[[0,\"    \"],[7,\"div\",false],[12,\"class\",[29,[[28,\"local-class\",[[28,\"concat\",[\"message-wrapper \",[28,\"if\",[[23,1,[\"exiting\"]],\"is-exiting\"],null]],null]],[[\"from\"],[\"better-trading/pods/components/flash-messages/styles\"]]]]]],[3,\"on\",[\"click\",[28,\"fn\",[[23,0,[\"dismissFlashMessage\"]],[23,1,[]]],null]]],[8],[0,\"\\n      \"],[5,\"alert-message\",[[12,\"class\",[29,[[28,\"local-class\",[\"message\"],[[\"from\"],[\"better-trading/pods/components/flash-messages/styles\"]]]]]]],[[\"@message\",\"@type\"],[[23,1,[\"message\"]],[23,1,[\"type\"]]]]],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "better-trading/pods/components/flash-messages/template.hbs"
    }
  });

  _exports.default = _default;
});

;define("better-trading/pods/components/form/checkbox/component", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  let FormCheckbox = (_dec = Ember._action, (_class = class FormCheckbox extends _component.default {
    toggleValue() {
      this.args.onChange(!this.args.value);
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "toggleValue", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "toggleValue"), _class.prototype)), _class));
  _exports.default = FormCheckbox;
});

;define("better-trading/pods/components/form/checkbox/styles", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "wrapper": "_wrapper_31csv8",
    "indicator": "_indicator_31csv8",
    "is-active": "_is-active_31csv8",
    "label": "_label_31csv8"
  };
  _exports.default = _default;
});

;define("better-trading/pods/components/form/checkbox/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "5u8/CT3q",
    "block": "{\"symbols\":[\"&attrs\",\"@value\",\"@label\"],\"statements\":[[7,\"label\",false],[12,\"class\",[29,[[28,\"local-class\",[\"wrapper\"],[[\"from\"],[\"better-trading/pods/components/form/checkbox/styles\"]]]]]],[13,1],[3,\"on\",[\"click\",[28,\"fn\",[[23,0,[\"toggleValue\"]]],null]]],[8],[0,\"\\n  \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[[28,\"concat\",[\"indicator \",[28,\"if\",[[23,2,[]],\"is-active\"],null]],null]],[[\"from\"],[\"better-trading/pods/components/form/checkbox/styles\"]]]]]],[8],[9],[0,\"\\n\\n  \"],[7,\"span\",true],[11,\"class\",[29,[[28,\"local-class\",[\"label\"],[[\"from\"],[\"better-trading/pods/components/form/checkbox/styles\"]]]]]],[8],[0,\"\\n    \"],[1,[23,3,[]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "better-trading/pods/components/form/checkbox/template.hbs"
    }
  });

  _exports.default = _default;
});

;define("better-trading/pods/components/form/container/component", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  let FormContainer = (_dec = Ember._action, (_class = class FormContainer extends _component.default {
    get canSubmit() {
      if (this.args.canSubmit === undefined) return true;
      return this.args.canSubmit;
    }

    handleSubmit(event) {
      event.preventDefault();
      if (!this.canSubmit) return;
      this.args.submitTask.perform(this.args.entity);
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "handleSubmit", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "handleSubmit"), _class.prototype)), _class));
  _exports.default = FormContainer;
});

;define("better-trading/pods/components/form/container/styles", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "form-container": "_form-container_jsn6mo",
    "is-disabled": "_is-disabled_jsn6mo"
  };
  _exports.default = _default;
});

;define("better-trading/pods/components/form/container/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "uva+dWx6",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[7,\"form\",false],[12,\"class\",[29,[[28,\"local-class\",[[28,\"concat\",[\"form-container \",[28,\"unless\",[[23,0,[\"canSubmit\"]],\"is-disabled\"],null]],null]],[[\"from\"],[\"better-trading/pods/components/form/container/styles\"]]]]]],[3,\"on\",[\"submit\",[28,\"fn\",[[23,0,[\"handleSubmit\"]]],null]]],[8],[0,\"\\n  \"],[14,1],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "better-trading/pods/components/form/container/template.hbs"
    }
  });

  _exports.default = _default;
});

;define("better-trading/pods/components/form/field/component", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // Vendor
  class FormField extends _component.default {}

  _exports.default = FormField;
});

;define("better-trading/pods/components/form/field/styles", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "form-field": "_form-field_1nq1fz",
    "label": "_label_1nq1fz",
    "helper": "_helper_1nq1fz"
  };
  _exports.default = _default;
});

;define("better-trading/pods/components/form/field/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "GM1ZaoOL",
    "block": "{\"symbols\":[\"@helper\",\"@label\",\"&default\"],\"statements\":[[7,\"label\",true],[11,\"class\",[29,[[28,\"local-class\",[\"form-field\"],[[\"from\"],[\"better-trading/pods/components/form/field/styles\"]]]]]],[8],[0,\"\\n  \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"label\"],[[\"from\"],[\"better-trading/pods/components/form/field/styles\"]]]]]],[8],[0,\"\\n    \"],[1,[23,2,[]],false],[0,\"\\n  \"],[9],[0,\"\\n\\n  \"],[14,3],[0,\"\\n\\n\"],[4,\"if\",[[23,1,[]]],null,{\"statements\":[[0,\"    \"],[7,\"p\",true],[11,\"class\",[29,[[28,\"local-class\",[\"helper\"],[[\"from\"],[\"better-trading/pods/components/form/field/styles\"]]]]]],[8],[0,\"\\n      \"],[1,[23,1,[]],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "better-trading/pods/components/form/field/template.hbs"
    }
  });

  _exports.default = _default;
});

;define("better-trading/pods/components/form/input/component", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  let FormInput = (_dec = Ember._action, _dec2 = Ember._action, (_class = class FormInput extends _component.default {
    handleInput(event) {
      this.args.onChange(event.target.value);
    }

    autofocusInput(input) {
      if (!this.args.autofocus) return;
      input.focus();
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "handleInput", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "handleInput"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "autofocusInput", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "autofocusInput"), _class.prototype)), _class));
  _exports.default = FormInput;
});

;define("better-trading/pods/components/form/input/styles", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "input": "_input_1ryhfa"
  };
  _exports.default = _default;
});

;define("better-trading/pods/components/form/input/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "x57ZAeJn",
    "block": "{\"symbols\":[\"@label\",\"@value\",\"&attrs\"],\"statements\":[[5,\"form/field\",[],[[\"@label\"],[[23,1,[]]]],{\"statements\":[[0,\"\\n  \"],[7,\"input\",false],[12,\"class\",[29,[[28,\"local-class\",[\"input\"],[[\"from\"],[\"better-trading/pods/components/form/input/styles\"]]]]]],[12,\"value\",[23,2,[]]],[13,3],[12,\"type\",\"text\"],[3,\"did-insert\",[[28,\"fn\",[[23,0,[\"autofocusInput\"]]],null]]],[3,\"on\",[\"input\",[28,\"fn\",[[23,0,[\"handleInput\"]]],null]]],[8],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "better-trading/pods/components/form/input/template.hbs"
    }
  });

  _exports.default = _default;
});

;define("better-trading/pods/components/header/component", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _descriptor, _descriptor2, _descriptor3, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  // Constants
  const COLLAPSED_STORAGE_KEY = 'side-panel-collapsed';
  let Header = (_dec = Ember.inject.service('router'), _dec2 = Ember.inject.service('storage'), _dec3 = Ember._tracked, _dec4 = Ember._action, _dec5 = Ember._action, (_class = (_temp = class Header extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "router", _descriptor, this);

      _initializerDefineProperty(this, "storage", _descriptor2, this);

      _initializerDefineProperty(this, "expandButtonIsVisible", _descriptor3, this);
    }

    get isOnRootRoute() {
      return this.router.currentRouteName === 'root';
    }

    collapse() {
      this.storage.setLocalValue(COLLAPSED_STORAGE_KEY, 'true');
      document.body.classList.add('bt-is-collapsed');
      this.expandButtonIsVisible = true;
    }

    expand() {
      this.storage.deleteLocalValue(COLLAPSED_STORAGE_KEY);
      document.body.classList.remove('bt-is-collapsed');
      this.expandButtonIsVisible = false;
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "storage", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "expandButtonIsVisible", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return Boolean(this.storage.getLocalValue(COLLAPSED_STORAGE_KEY));
    }
  }), _applyDecoratedDescriptor(_class.prototype, "collapse", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "collapse"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "expand", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "expand"), _class.prototype)), _class));
  _exports.default = Header;
});

;define("better-trading/pods/components/header/styles", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "container": "_container_15q544",
    "brand": "_brand_15q544",
    "logo": "_logo_15q544",
    "title": "_title_15q544",
    "header-button": "_header-button_15q544",
    "expand-button": "_expand-button_15q544",
    "expand-button-icon": "_expand-button-icon_15q544",
    "is-visible": "_is-visible_15q544"
  };
  _exports.default = _default;
});

;define("better-trading/pods/components/header/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "2+y/ptm4",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"container\"],[[\"from\"],[\"better-trading/pods/components/header/styles\"]]]]]],[8],[0,\"\\n  \"],[7,\"button\",false],[12,\"class\",[29,[[28,\"local-class\",[\"header-button\"],[[\"from\"],[\"better-trading/pods/components/header/styles\"]]]]]],[12,\"type\",\"button\"],[3,\"on\",[\"click\",[28,\"fn\",[[23,0,[\"collapse\"]]],null]]],[8],[0,\"\\n    \"],[5,\"fa-icon\",[],[[\"@icon\"],[\"angle-right\"]]],[0,\"\\n  \"],[9],[0,\"\\n\\n  \"],[5,\"link-to\",[[12,\"class\",[29,[[28,\"local-class\",[\"brand\"],[[\"from\"],[\"better-trading/pods/components/header/styles\"]]]]]]],[[\"@route\"],[\"root\"]],{\"statements\":[[0,\"\\n    \"],[7,\"img\",true],[11,\"class\",[29,[[28,\"local-class\",[\"logo\"],[[\"from\"],[\"better-trading/pods/components/header/styles\"]]]]]],[11,\"src\",[28,\"image-resource-url\",[\"logo.png\"],null]],[8],[9],[0,\"\\n\\n    \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"title\"],[[\"from\"],[\"better-trading/pods/components/header/styles\"]]]]]],[8],[0,\"\\n      \"],[1,[28,\"t\",[\"general.title\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n  \"]],\"parameters\":[]}],[0,\"\\n\\n  \"],[5,\"link-to\",[[12,\"class\",[29,[[28,\"local-class\",[\"header-button\"],[[\"from\"],[\"better-trading/pods/components/header/styles\"]]]]]]],[[\"@route\"],[[28,\"if\",[[23,0,[\"isOnRootRoute\"]],\"about\",\"root\"],null]]],{\"statements\":[[0,\"\\n    \"],[5,\"fa-icon\",[],[[\"@icon\",\"@fixedWidth\"],[[28,\"if\",[[23,0,[\"isOnRootRoute\"]],\"info-circle\",\"times\"],null],true]]],[0,\"\\n  \"]],\"parameters\":[]}],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"button\",false],[12,\"class\",[29,[[28,\"local-class\",[[28,\"concat\",[\"expand-button \",[28,\"if\",[[23,0,[\"expandButtonIsVisible\"]],\"is-visible\"],null]],null]],[[\"from\"],[\"better-trading/pods/components/header/styles\"]]]]]],[12,\"type\",\"button\"],[3,\"on\",[\"click\",[28,\"fn\",[[23,0,[\"expand\"]]],null]]],[8],[0,\"\\n  \"],[5,\"fa-icon\",[[12,\"class\",[29,[[28,\"local-class\",[\"expand-button-icon\"],[[\"from\"],[\"better-trading/pods/components/header/styles\"]]]]]]],[[\"@icon\"],[\"angle-left\"]]],[0,\"\\n\\n  \"],[7,\"img\",true],[11,\"class\",[29,[[28,\"local-class\",[\"logo\"],[[\"from\"],[\"better-trading/pods/components/header/styles\"]]]]]],[11,\"src\",[28,\"image-resource-url\",[\"logo.png\"],null]],[8],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "better-trading/pods/components/header/template.hbs"
    }
  });

  _exports.default = _default;
});

;define("better-trading/pods/components/loading-container/component", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // Vendor
  class LoadingContainer extends _component.default {}

  _exports.default = LoadingContainer;
});

;define("better-trading/pods/components/loading-container/styles", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "loader": "_loader_ydd8aq",
    "delayed-fade-in-keyframes": "_delayed-fade-in-keyframes_ydd8aq",
    "is-small": "_is-small_ydd8aq",
    "is-large": "_is-large_ydd8aq",
    "loader-container": "_loader-container_ydd8aq"
  };
  _exports.default = _default;
});

;define("better-trading/pods/components/loading-container/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "MBhV2xW4",
    "block": "{\"symbols\":[\"&default\",\"@size\",\"&attrs\",\"@task\"],\"statements\":[[7,\"div\",false],[13,3],[3,\"did-insert\",[[28,\"perform\",[[23,4,[]]],null]]],[8],[0,\"\\n\"],[4,\"if\",[[23,4,[\"isRunning\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[[28,\"concat\",[\"loader is-\",[23,2,[]]],null]],[[\"from\"],[\"better-trading/pods/components/loading-container/styles\"]]]]]],[8],[0,\"\\n      \"],[5,\"fa-icon\",[[12,\"class\",[29,[[28,\"local-class\",[\"loader\"],[[\"from\"],[\"better-trading/pods/components/loading-container/styles\"]]]]]]],[[\"@icon\",\"@spin\"],[\"circle-notch\",true]]],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"loader-container\"],[[\"from\"],[\"better-trading/pods/components/loading-container/styles\"]]]]]],[8],[0,\"\\n      \"],[14,1],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "better-trading/pods/components/loading-container/template.hbs"
    }
  });

  _exports.default = _default;
});

;define("better-trading/pods/components/markdown-changelog/component", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // Vendor
  class MarkdownChangelog extends _component.default {}

  _exports.default = MarkdownChangelog;
});

;define("better-trading/pods/components/markdown-changelog/styles", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "markdown-changelog": "_markdown-changelog_1vb1cf"
  };
  _exports.default = _default;
});

;define("better-trading/pods/components/markdown-changelog/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ronvSIp0",
    "block": "{\"symbols\":[\"&attrs\",\"@markdown\"],\"statements\":[[7,\"div\",false],[12,\"class\",[29,[[28,\"local-class\",[\"markdown-changelog\"],[[\"from\"],[\"better-trading/pods/components/markdown-changelog/styles\"]]]]]],[13,1],[8],[0,\"\\n  \"],[1,[28,\"markdown-to-html\",[[23,2,[]]],null],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "better-trading/pods/components/markdown-changelog/template.hbs"
    }
  });

  _exports.default = _default;
});

;define("better-trading/pods/components/modal/component", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  let Modal = (_dec = Ember._action, _dec2 = Ember._action, (_class = class Modal extends _component.default {
    bindEscapeKey() {
      document.body.addEventListener('keyup', this.handleKeyup.bind(this));
    }

    unbindEscapeKey() {
      document.body.removeEventListener('keyup', this.handleKeyup.bind(this));
    }

    handleKeyup(event) {
      if (event.key !== 'Escape') return;
      this.args.onClose();
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "bindEscapeKey", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "bindEscapeKey"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "unbindEscapeKey", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "unbindEscapeKey"), _class.prototype)), _class));
  _exports.default = Modal;
});

;define("better-trading/pods/components/modal/styles", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "container": "_container_15kcql",
    "header": "_header_15kcql",
    "header-title": "_header-title_15kcql",
    "header-title-logo": "_header-title-logo_15kcql",
    "header-close": "_header-close_15kcql"
  };
  _exports.default = _default;
});

;define("better-trading/pods/components/modal/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "YihEPDRG",
    "block": "{\"symbols\":[\"@onClose\",\"&attrs\",\"@title\",\"&default\"],\"statements\":[[5,\"modal-dialog\",[],[[\"@translucentOverlay\",\"@targetAttachment\",\"@onClose\"],[true,\"center\",[28,\"fn\",[[23,1,[]]],null]]],{\"statements\":[[0,\"\\n  \"],[7,\"div\",false],[12,\"class\",[29,[[28,\"local-class\",[\"container\"],[[\"from\"],[\"better-trading/pods/components/modal/styles\"]]]]]],[13,2],[3,\"did-insert\",[[28,\"fn\",[[23,0,[\"bindEscapeKey\"]]],null]]],[3,\"will-destroy\",[[28,\"fn\",[[23,0,[\"unbindEscapeKey\"]]],null]]],[8],[0,\"\\n    \"],[7,\"header\",true],[11,\"class\",[29,[[28,\"local-class\",[\"header\"],[[\"from\"],[\"better-trading/pods/components/modal/styles\"]]]]]],[8],[0,\"\\n      \"],[7,\"h1\",true],[11,\"class\",[29,[[28,\"local-class\",[\"header-title\"],[[\"from\"],[\"better-trading/pods/components/modal/styles\"]]]]]],[8],[0,\"\\n        \"],[7,\"img\",true],[11,\"class\",[29,[[28,\"local-class\",[\"header-title-logo\"],[[\"from\"],[\"better-trading/pods/components/modal/styles\"]]]]]],[11,\"src\",[28,\"image-resource-url\",[\"logo.png\"],null]],[8],[9],[0,\"\\n\\n        \"],[1,[23,3,[]],false],[0,\"\\n      \"],[9],[0,\"\\n\\n      \"],[7,\"button\",false],[12,\"class\",[29,[[28,\"local-class\",[\"header-close\"],[[\"from\"],[\"better-trading/pods/components/modal/styles\"]]]]]],[12,\"type\",\"button\"],[3,\"on\",[\"click\",[28,\"fn\",[[23,1,[]]],null]]],[8],[0,\"\\n        \"],[5,\"fa-icon\",[],[[\"@icon\"],[\"times\"]]],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"body\"],[[\"from\"],[\"better-trading/pods/components/modal/styles\"]]]]]],[8],[0,\"\\n      \"],[14,4],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "better-trading/pods/components/modal/template.hbs"
    }
  });

  _exports.default = _default;
});

;define("better-trading/pods/components/page/about/component", ["exports", "@glimmer/component", "better-trading/config/environment"], function (_exports, _component, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let PageAbout = (_dec = Ember.inject.service('item-results'), _dec2 = Ember._action, (_class = (_temp = class PageAbout extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "itemResults", _descriptor, this);

      _defineProperty(this, "appVersion", _environment.default.APP.version);

      _defineProperty(this, "githubUrl", _environment.default.APP.githubUrl);

      _defineProperty(this, "discordUrl", _environment.default.APP.discordUrl);

      _defineProperty(this, "chaosRecipeOverlayUrl", _environment.default.APP.chaosRecipeOverlayUrl);

      _defineProperty(this, "currentChangelog", _environment.default.APP.changelog);
    }

    get enhancers() {
      return this.itemResults.getEnhancerSlugs().map(slug => ({
        slug,
        isEnabled: !this.itemResults.disabledEnhancerSlugs.includes(slug || ''),
        translationKey: `page.about.enhancers.${slug}`
      }));
    }

    toggleDisabledEnhancerSlug(slug, isEnabled) {
      let updatedDisabledEnhancerSlugs = [...this.itemResults.disabledEnhancerSlugs];

      if (isEnabled) {
        updatedDisabledEnhancerSlugs = updatedDisabledEnhancerSlugs.filter(disabledSlug => disabledSlug !== slug);
      } else {
        updatedDisabledEnhancerSlugs.push(slug);
      }

      this.itemResults.setDisabledEnhancerSlugs(updatedDisabledEnhancerSlugs);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "itemResults", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "toggleDisabledEnhancerSlug", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "toggleDisabledEnhancerSlug"), _class.prototype)), _class));
  _exports.default = PageAbout;
});

;define("better-trading/pods/components/page/about/styles", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "sections": "_sections_tqiv6n",
    "section": "_section_tqiv6n",
    "section-title": "_section-title_tqiv6n",
    "section-description": "_section-description_tqiv6n",
    "section-preview": "_section-preview_tqiv6n",
    "disclaimer": "_disclaimer_tqiv6n",
    "version": "_version_tqiv6n",
    "enhancer-checkbox": "_enhancer-checkbox_tqiv6n"
  };
  _exports.default = _default;
});

;define("better-trading/pods/components/page/about/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "box5FNmg",
    "block": "{\"symbols\":[\"enhancer\"],\"statements\":[[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"sections\"],[[\"from\"],[\"better-trading/pods/components/page/about/styles\"]]]]]],[8],[0,\"\\n\"],[4,\"if\",[[23,0,[\"currentChangelog\"]]],null,{\"statements\":[[0,\"    \"],[7,\"section\",true],[11,\"class\",[29,[[28,\"local-class\",[\"section\"],[[\"from\"],[\"better-trading/pods/components/page/about/styles\"]]]]]],[8],[0,\"\\n      \"],[5,\"markdown-changelog\",[],[[\"@markdown\"],[[23,0,[\"currentChangelog\",\"markdown\"]]]]],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[7,\"section\",true],[11,\"class\",[29,[[28,\"local-class\",[\"section\"],[[\"from\"],[\"better-trading/pods/components/page/about/styles\"]]]]]],[8],[0,\"\\n    \"],[7,\"h1\",true],[11,\"class\",[29,[[28,\"local-class\",[\"section-title\"],[[\"from\"],[\"better-trading/pods/components/page/about/styles\"]]]]]],[8],[0,\"\\n      \"],[1,[28,\"t\",[\"page.about.enhancers.title\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n\\n\"],[4,\"each\",[[23,0,[\"enhancers\"]]],null,{\"statements\":[[0,\"      \"],[5,\"form/checkbox\",[[12,\"class\",[29,[[28,\"local-class\",[\"enhancer-checkbox\"],[[\"from\"],[\"better-trading/pods/components/page/about/styles\"]]]]]]],[[\"@value\",\"@label\",\"@onChange\"],[[23,1,[\"isEnabled\"]],[28,\"t\",[[23,1,[\"translationKey\"]]],null],[28,\"fn\",[[23,0,[\"toggleDisabledEnhancerSlug\"]],[23,1,[\"slug\"]]],null]]]],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[9],[0,\"\\n\\n  \"],[7,\"section\",true],[11,\"class\",[29,[[28,\"local-class\",[\"section\"],[[\"from\"],[\"better-trading/pods/components/page/about/styles\"]]]]]],[8],[0,\"\\n    \"],[7,\"h1\",true],[11,\"class\",[29,[[28,\"local-class\",[\"section-title\"],[[\"from\"],[\"better-trading/pods/components/page/about/styles\"]]]]]],[8],[0,\"\\n      \"],[1,[28,\"t\",[\"page.about.github.title\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[7,\"p\",true],[11,\"class\",[29,[[28,\"local-class\",[\"section-description\"],[[\"from\"],[\"better-trading/pods/components/page/about/styles\"]]]]]],[8],[0,\"\\n      \"],[1,[28,\"t\",[\"page.about.github.description\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[5,\"button\",[],[[\"@href\",\"@theme\",\"@icon\",\"@label\"],[[23,0,[\"githubUrl\"]],\"blue\",\"github\",[28,\"t\",[\"page.about.github.button\"],null]]]],[0,\"\\n  \"],[9],[0,\"\\n\\n  \"],[7,\"section\",true],[11,\"class\",[29,[[28,\"local-class\",[\"section\"],[[\"from\"],[\"better-trading/pods/components/page/about/styles\"]]]]]],[8],[0,\"\\n    \"],[7,\"h1\",true],[11,\"class\",[29,[[28,\"local-class\",[\"section-title\"],[[\"from\"],[\"better-trading/pods/components/page/about/styles\"]]]]]],[8],[0,\"\\n      \"],[1,[28,\"t\",[\"page.about.credits.title\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[7,\"p\",true],[11,\"class\",[29,[[28,\"local-class\",[\"section-description\"],[[\"from\"],[\"better-trading/pods/components/page/about/styles\"]]]]]],[8],[0,\"\\n      \"],[1,[28,\"t\",[\"page.about.credits.description\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"p\",true],[11,\"class\",[29,[[28,\"local-class\",[\"disclaimer\"],[[\"from\"],[\"better-trading/pods/components/page/about/styles\"]]]]]],[8],[0,\"\\n  \"],[1,[28,\"t\",[\"page.about.disclaimer\"],null],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"p\",true],[11,\"class\",[29,[[28,\"local-class\",[\"version\"],[[\"from\"],[\"better-trading/pods/components/page/about/styles\"]]]]]],[8],[0,\"\\n  \"],[1,[23,0,[\"appVersion\"]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "better-trading/pods/components/page/about/template.hbs"
    }
  });

  _exports.default = _default;
});

;define("better-trading/pods/components/page/bookmarks/backup/component", ["exports", "@glimmer/component", "ember-concurrency-decorators"], function (_exports, _component, _emberConcurrencyDecorators) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2, _descriptor3, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let Backup = (_dec = Ember.inject.service('bookmarks'), _dec2 = Ember.inject.service('flash-messages'), _dec3 = Ember.inject.service('intl'), _dec4 = Ember._action, (_class = (_temp = class Backup extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "bookmarks", _descriptor, this);

      _initializerDefineProperty(this, "flashMessages", _descriptor2, this);

      _initializerDefineProperty(this, "intl", _descriptor3, this);
    }

    *generateBackupTask() {
      const dataString = yield this.bookmarks.generateBackupDataString();
      const linkFakeElement = document.createElement('a');
      const blob = new Blob([dataString], {
        type: 'text/plain'
      });
      linkFakeElement.download = 'poe-better-trading-backup.txt';
      linkFakeElement.href = window.URL.createObjectURL(blob);
      linkFakeElement.click();
    }

    *restoreBackupTask([dataString]) {
      const restoreWasSuccessful = yield this.bookmarks.restoreFromDataString(dataString);

      if (!restoreWasSuccessful) {
        this.flashMessages.alert(this.intl.t('page.bookmarks.backup.restore-error-flash'));
      }
    }

    backupFileChange(event) {
      const inputElement = event.target;
      if (!inputElement.files) return;
      const fileReader = new FileReader();

      fileReader.onload = () => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.restoreBackupTask.perform([fileReader.result]);
      };

      fileReader.readAsText(inputElement.files[0]);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "bookmarks", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "flashMessages", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "intl", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "generateBackupTask", [_emberConcurrencyDecorators.dropTask], Object.getOwnPropertyDescriptor(_class.prototype, "generateBackupTask"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "restoreBackupTask", [_emberConcurrencyDecorators.dropTask], Object.getOwnPropertyDescriptor(_class.prototype, "restoreBackupTask"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "backupFileChange", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "backupFileChange"), _class.prototype)), _class));
  _exports.default = Backup;
});

;define("better-trading/pods/components/page/bookmarks/backup/styles", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "backup": "_backup_32mn6k",
    "title": "_title_32mn6k",
    "action": "_action_32mn6k"
  };
  _exports.default = _default;
});

;define("better-trading/pods/components/page/bookmarks/backup/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "hKJ4z+Dw",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"backup\"],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/backup/styles\"]]]]]],[8],[0,\"\\n  \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"title\"],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/backup/styles\"]]]]]],[8],[0,\"\\n    \"],[1,[28,\"t\",[\"page.bookmarks.backup.title\"],null],false],[0,\"\\n  \"],[9],[0,\"\\n\\n  \"],[5,\"button\",[[12,\"class\",[29,[[28,\"local-class\",[\"action\"],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/backup/styles\"]]]]]]],[[\"@onClick\",\"@theme\",\"@icon\",\"@label\"],[[28,\"perform\",[[23,0,[\"generateBackupTask\"]]],null],\"blue\",\"file-export\",[28,\"t\",[\"page.bookmarks.backup.generate-button\"],null]]]],[0,\"\\n\\n  \"],[5,\"button\",[[12,\"class\",[29,[[28,\"local-class\",[\"action\"],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/backup/styles\"]]]]]]],[[\"@onFileChange\",\"@theme\",\"@fileAccept\",\"@icon\",\"@label\"],[[28,\"fn\",[[23,0,[\"backupFileChange\"]]],null],\"blue\",\"text/plain\",\"file-import\",[28,\"t\",[\"page.bookmarks.backup.restore-button\"],null]]]],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "better-trading/pods/components/page/bookmarks/backup/template.hbs"
    }
  });

  _exports.default = _default;
});

;define("better-trading/pods/components/page/bookmarks/component", ["exports", "@glimmer/component", "ember-concurrency-decorators"], function (_exports, _component, _emberConcurrencyDecorators) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  // Constants
  const FOLDERS_WARNING_THRESHOLD = 10;
  let PageBookmarks = (_dec = Ember.inject.service('bookmarks'), _dec2 = Ember.inject.service('flash-messages'), _dec3 = Ember.inject.service('intl'), _dec4 = Ember.inject.service('trade-location'), _dec5 = Ember._tracked, _dec6 = Ember._tracked, _dec7 = Ember._tracked, _dec8 = Ember._tracked, _dec9 = Ember._tracked, _dec10 = Ember._tracked, _dec11 = Ember._action, _dec12 = Ember._action, _dec13 = Ember._action, _dec14 = Ember._action, _dec15 = Ember._action, _dec16 = Ember._action, _dec17 = Ember._action, _dec18 = Ember._action, (_class = (_temp = class PageBookmarks extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "bookmarks", _descriptor, this);

      _initializerDefineProperty(this, "flashMessages", _descriptor2, this);

      _initializerDefineProperty(this, "intl", _descriptor3, this);

      _initializerDefineProperty(this, "tradeLocation", _descriptor4, this);

      _initializerDefineProperty(this, "stagedFolder", _descriptor5, this);

      _initializerDefineProperty(this, "folders", _descriptor6, this);

      _initializerDefineProperty(this, "newFolderId", _descriptor7, this);

      _initializerDefineProperty(this, "expandedFolderIds", _descriptor8, this);

      _initializerDefineProperty(this, "isImportingFolder", _descriptor9, this);

      _initializerDefineProperty(this, "isShowingArchivedFolders", _descriptor10, this);
    }

    get applicableFolders() {
      return this.folders.filter(({
        version
      }) => version === this.tradeLocation.version);
    }

    get olderVersionFolders() {
      return this.folders.filter(({
        version
      }) => version < this.tradeLocation.version);
    }

    get newerVersionFolders() {
      return this.folders.filter(({
        version
      }) => version > this.tradeLocation.version);
    }

    get displayedFolders() {
      return this.isShowingArchivedFolders ? this.archivedFolders : this.activeFolders;
    }

    get activeFolders() {
      return this.applicableFolders.filter(({
        archivedAt
      }) => !Boolean(archivedAt));
    }

    get archivedFolders() {
      return this.applicableFolders.filter(({
        archivedAt
      }) => Boolean(archivedAt));
    }

    get hasArchivedFolders() {
      return this.applicableFolders.some(({
        archivedAt
      }) => Boolean(archivedAt));
    }

    get hasActiveFolders() {
      return this.applicableFolders.some(({
        archivedAt
      }) => !Boolean(archivedAt));
    }

    get foldersWarningIsVisible() {
      if (this.isShowingArchivedFolders) return false;
      return this.displayedFolders.length >= FOLDERS_WARNING_THRESHOLD;
    }

    *initialFetchFoldersTask() {
      this.folders = yield this.bookmarks.fetchFolders();
    }

    *refetchFoldersTask() {
      this.folders = yield this.bookmarks.fetchFolders();
    }

    *deleteFolderTask(deletingFolder) {
      try {
        yield this.bookmarks.deleteFolder(deletingFolder);
        this.folders = yield this.bookmarks.fetchFolders();
        this.flashMessages.success(this.intl.t('page.bookmarks.delete-folder-success-flash', {
          title: deletingFolder.title
        }));
      } catch (_error) {
        this.flashMessages.alert(this.intl.t('general.generic-alert-flash'));
      }
    }

    *toggleFolderArchiveTask(folder) {
      yield this.bookmarks.toggleFolderArchive(folder);
      this.folders = yield this.bookmarks.fetchFolders();
      this.isShowingArchivedFolders = this.isShowingArchivedFolders && this.hasArchivedFolders;
    }

    *reorderFoldersTask(reorderedDisplayedFolders) {
      this.folders = this.bookmarks.partiallyReorderFolders(this.folders, reorderedDisplayedFolders);
      yield this.bookmarks.persistFolders(this.folders);
    }

    *persistFolderTask(folder) {
      try {
        const isNewlyCreated = !folder.id;
        const folderId = yield this.bookmarks.persistFolder(folder);
        if (isNewlyCreated) this.toggleFolderExpansion(folderId);
        this.folders = yield this.bookmarks.fetchFolders();
        const successTranslationKey = isNewlyCreated ? 'page.bookmarks.create-folder-success-flash' : 'page.bookmarks.update-folder-success-flash';
        this.flashMessages.success(this.intl.t(successTranslationKey, {
          title: folder.title
        }));
      } catch (_error) {
        this.flashMessages.alert(this.intl.t('general.generic-alert-flash'));
      } finally {
        this.stagedFolder = null;
      }
    }

    *persistImportedFolderTask({
      folder,
      trades
    }) {
      try {
        const folderId = yield this.bookmarks.persistFolder(folder);
        yield this.bookmarks.persistTrades(trades, folderId);
        this.toggleFolderExpansion(folderId);
        this.folders = yield this.bookmarks.fetchFolders();
        this.flashMessages.success(this.intl.t('page.bookmarks.import-folder-success-flash', {
          title: folder.title
        }));
      } catch (_error) {
        this.flashMessages.alert(this.intl.t('general.generic-alert-flash'));
      } finally {
        this.isImportingFolder = false;
      }
    }

    toggleArchiveDisplay() {
      this.isShowingArchivedFolders = !this.isShowingArchivedFolders;
    }

    createFolder() {
      this.stagedFolder = this.bookmarks.initializeFolderStruct(this.tradeLocation.version);
    }

    stageFolder(folder) {
      this.stagedFolder = folder;
    }

    unstageFolder() {
      this.stagedFolder = null;
    }

    toggleFolderExpansion(folderId) {
      this.expandedFolderIds = this.bookmarks.toggleFolderExpansion(this.expandedFolderIds, folderId);
    }

    collapseAllFolders() {
      this.expandedFolderIds = this.bookmarks.collapseAllFolders();
    }

    importFolder() {
      this.isImportingFolder = true;
    }

    cancelImportFolder() {
      this.isImportingFolder = false;
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "bookmarks", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "flashMessages", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "intl", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "tradeLocation", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "stagedFolder", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "folders", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "newFolderId", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "expandedFolderIds", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return this.bookmarks.getExpandedFolderIds();
    }
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "isImportingFolder", [_dec9], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "isShowingArchivedFolders", [_dec10], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "initialFetchFoldersTask", [_emberConcurrencyDecorators.dropTask], Object.getOwnPropertyDescriptor(_class.prototype, "initialFetchFoldersTask"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "refetchFoldersTask", [_emberConcurrencyDecorators.restartableTask], Object.getOwnPropertyDescriptor(_class.prototype, "refetchFoldersTask"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "deleteFolderTask", [_emberConcurrencyDecorators.dropTask], Object.getOwnPropertyDescriptor(_class.prototype, "deleteFolderTask"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toggleFolderArchiveTask", [_emberConcurrencyDecorators.dropTask], Object.getOwnPropertyDescriptor(_class.prototype, "toggleFolderArchiveTask"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "reorderFoldersTask", [_emberConcurrencyDecorators.dropTask], Object.getOwnPropertyDescriptor(_class.prototype, "reorderFoldersTask"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "persistFolderTask", [_emberConcurrencyDecorators.dropTask], Object.getOwnPropertyDescriptor(_class.prototype, "persistFolderTask"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "persistImportedFolderTask", [_emberConcurrencyDecorators.dropTask], Object.getOwnPropertyDescriptor(_class.prototype, "persistImportedFolderTask"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toggleArchiveDisplay", [_dec11], Object.getOwnPropertyDescriptor(_class.prototype, "toggleArchiveDisplay"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "createFolder", [_dec12], Object.getOwnPropertyDescriptor(_class.prototype, "createFolder"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "stageFolder", [_dec13], Object.getOwnPropertyDescriptor(_class.prototype, "stageFolder"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "unstageFolder", [_dec14], Object.getOwnPropertyDescriptor(_class.prototype, "unstageFolder"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toggleFolderExpansion", [_dec15], Object.getOwnPropertyDescriptor(_class.prototype, "toggleFolderExpansion"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "collapseAllFolders", [_dec16], Object.getOwnPropertyDescriptor(_class.prototype, "collapseAllFolders"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "importFolder", [_dec17], Object.getOwnPropertyDescriptor(_class.prototype, "importFolder"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "cancelImportFolder", [_dec18], Object.getOwnPropertyDescriptor(_class.prototype, "cancelImportFolder"), _class.prototype)), _class));
  _exports.default = PageBookmarks;
});

;define("better-trading/pods/components/page/bookmarks/folder-edition/component", ["exports", "@glimmer/component", "better-trading/types/bookmarks"], function (_exports, _component, _bookmarks) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _descriptor, _descriptor2, _descriptor3, _temp;

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const POE1_ASCENDANCY_ICONS = [_bookmarks.BookmarksFolderAscendancyDuelistIcon, _bookmarks.BookmarksFolderAscendancyShadowIcon, _bookmarks.BookmarksFolderAscendancyMarauderIcon, _bookmarks.BookmarksFolderAscendancyWitchIcon, _bookmarks.BookmarksFolderAscendancyRangerIcon, _bookmarks.BookmarksFolderAscendancyTemplarIcon, _bookmarks.BookmarksFolderAscendancyScionIcon];
  const POE2_ASCENDANCY_ICONS = [_bookmarks.BookmarksFolderAscendancyPoE2WarriorIcon, _bookmarks.BookmarksFolderAscendancyPoE2SorceressIcon, _bookmarks.BookmarksFolderAscendancyPoE2RangerIcon, _bookmarks.BookmarksFolderAscendancyPoE2HuntressIcon, _bookmarks.BookmarksFolderAscendancyPoE2MonkIcon, _bookmarks.BookmarksFolderAscendancyPoE2MercenaryIcon, _bookmarks.BookmarksFolderAscendancyPoE2WitchIcon];
  let BookmarksFolderEdition = (_dec = Ember.inject.service('bookmarks'), _dec2 = Ember.inject.service('trade-location'), _dec3 = Ember._tracked, _dec4 = Ember._action, _dec5 = Ember._action, (_class = (_temp = class BookmarksFolderEdition extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "bookmarks", _descriptor, this);

      _initializerDefineProperty(this, "tradeLocation", _descriptor2, this);

      _initializerDefineProperty(this, "folder", _descriptor3, this);
    }

    get iconAscendancyOptions() {
      const icons = this.tradeLocation.version === '2' ? POE2_ASCENDANCY_ICONS : POE1_ASCENDANCY_ICONS;
      return icons.map(iconGroupEnum => {
        return Object.values(iconGroupEnum).map(this.iconOptionFromIcon);
      });
    }

    get iconItemOptions() {
      const icons = this.tradeLocation.version === '2' ? _bookmarks.BookmarksFolderPoE2ItemIcon : _bookmarks.BookmarksFolderPoE1ItemIcon;
      return Object.values(icons).map(this.iconOptionFromIcon);
    }

    get canSubmit() {
      return Boolean(this.folder.title);
    }

    changeTitle(title) {
      this.folder = _extends({}, this.folder, {
        title
      });
    }

    toggleIcon(icon) {
      this.folder = _extends({}, this.folder, {
        icon: icon !== this.folder.icon ? icon : null
      });
    }

    iconOptionFromIcon(icon) {
      return {
        value: icon,
        imagePath: `bookmark-folder/${icon}.png`
      };
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "bookmarks", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "tradeLocation", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "folder", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return this.args.folder;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "changeTitle", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "changeTitle"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toggleIcon", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "toggleIcon"), _class.prototype)), _class));
  _exports.default = BookmarksFolderEdition;
});

;define("better-trading/pods/components/page/bookmarks/folder-edition/styles", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "icon-options": "_icon-options_1fr2n7",
    "with-ascendancies": "_with-ascendancies_1fr2n7",
    "with-items": "_with-items_1fr2n7",
    "icon-option": "_icon-option_1fr2n7",
    "is-selected": "_is-selected_1fr2n7",
    "icon-option-image": "_icon-option-image_1fr2n7"
  };
  _exports.default = _default;
});

;define("better-trading/pods/components/page/bookmarks/folder-edition/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "6TLu+HZT",
    "block": "{\"symbols\":[\"ascendancyOptions\",\"ascendancyOption\",\"itemOption\",\"@onCancel\",\"@submitTask\"],\"statements\":[[5,\"modal\",[],[[\"@title\",\"@onClose\"],[[28,\"t\",[\"page.bookmarks.folder-edition.modal-title\"],null],[28,\"fn\",[[23,4,[]]],null]]],{\"statements\":[[0,\"\\n  \"],[5,\"form/container\",[],[[\"@submitTask\",\"@entity\",\"@canSubmit\"],[[23,5,[]],[23,0,[\"folder\"]],[23,0,[\"canSubmit\"]]]],{\"statements\":[[0,\"\\n    \"],[5,\"form/input\",[],[[\"@label\",\"@value\",\"@autofocus\",\"@onChange\"],[[28,\"t\",[\"page.bookmarks.folder-edition.title-label\"],null],[23,0,[\"folder\",\"title\"]],true,[28,\"fn\",[[23,0,[\"changeTitle\"]]],null]]]],[0,\"\\n\\n    \"],[5,\"form/field\",[],[[\"@label\"],[[28,\"t\",[\"page.bookmarks.folder-edition.icon-label\"],null]]],{\"statements\":[[0,\"\\n      \"],[7,\"ul\",true],[11,\"class\",[29,[[28,\"local-class\",[\"icon-options with-items\"],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/folder-edition/styles\"]]]]]],[8],[0,\"\\n\"],[4,\"each\",[[23,0,[\"iconItemOptions\"]]],null,{\"statements\":[[0,\"          \"],[7,\"li\",false],[12,\"class\",[29,[[28,\"local-class\",[[28,\"concat\",[\"icon-option \",[28,\"if\",[[28,\"eq\",[[23,3,[\"value\"]],[23,0,[\"folder\",\"icon\"]]],null],\"is-selected\"],null]],null]],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/folder-edition/styles\"]]]]]],[3,\"on\",[\"click\",[28,\"fn\",[[23,0,[\"toggleIcon\"]],[23,3,[\"value\"]]],null]]],[8],[0,\"\\n            \"],[7,\"img\",true],[11,\"class\",[29,[[28,\"local-class\",[\"icon-option-image\"],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/folder-edition/styles\"]]]]]],[11,\"src\",[28,\"image-resource-url\",[[23,3,[\"imagePath\"]]],null]],[11,\"alt\",[23,3,[\"value\"]]],[8],[9],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"      \"],[9],[0,\"\\n\\n      \"],[7,\"ul\",true],[11,\"class\",[29,[[28,\"local-class\",[\"icon-options with-ascendancies\"],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/folder-edition/styles\"]]]]]],[8],[0,\"\\n\"],[4,\"each\",[[23,0,[\"iconAscendancyOptions\"]]],null,{\"statements\":[[0,\"          \"],[7,\"li\",true],[8],[0,\"\\n            \"],[7,\"ul\",true],[11,\"class\",[29,[[28,\"local-class\",[\"icon-options\"],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/folder-edition/styles\"]]]]]],[8],[0,\"\\n\"],[4,\"each\",[[23,1,[]]],null,{\"statements\":[[0,\"                \"],[7,\"li\",false],[12,\"class\",[29,[[28,\"local-class\",[[28,\"concat\",[\"icon-option \",[28,\"if\",[[28,\"eq\",[[23,2,[\"value\"]],[23,0,[\"folder\",\"icon\"]]],null],\"is-selected\"],null]],null]],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/folder-edition/styles\"]]]]]],[3,\"on\",[\"click\",[28,\"fn\",[[23,0,[\"toggleIcon\"]],[23,2,[\"value\"]]],null]]],[8],[0,\"\\n                  \"],[7,\"img\",true],[11,\"class\",[29,[[28,\"local-class\",[\"icon-option-image\"],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/folder-edition/styles\"]]]]]],[11,\"src\",[28,\"image-resource-url\",[[23,2,[\"imagePath\"]]],null]],[11,\"alt\",[23,2,[\"value\"]]],[8],[9],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"      \"],[9],[0,\"\\n    \"]],\"parameters\":[]}],[0,\"\\n\\n    \"],[5,\"button\",[[12,\"type\",\"submit\"]],[[\"@theme\",\"@label\",\"@icon\"],[\"gold\",[28,\"t\",[\"page.bookmarks.folder-edition.save\"],null],\"save\"]]],[0,\"\\n  \"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "better-trading/pods/components/page/bookmarks/folder-edition/template.hbs"
    }
  });

  _exports.default = _default;
});

;define("better-trading/pods/components/page/bookmarks/folder-import/component", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let FolderImport = (_dec = Ember.inject.service('bookmarks'), _dec2 = Ember._tracked, _dec3 = Ember._tracked, _dec4 = Ember._tracked, _dec5 = Ember._action, (_class = (_temp = class FolderImport extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "bookmarks", _descriptor, this);

      _initializerDefineProperty(this, "stagedFolder", _descriptor2, this);

      _initializerDefineProperty(this, "stagedTrades", _descriptor3, this);

      _initializerDefineProperty(this, "isInvalid", _descriptor4, this);
    }

    get canSubmit() {
      return Boolean(this.stagedFolder);
    }

    get submitEntity() {
      return {
        folder: this.stagedFolder,
        trades: this.stagedTrades
      };
    }

    handleInput(input) {
      const result = this.bookmarks.deserializeFolder(input);

      if (result) {
        const [folder, trades] = result;
        this.isInvalid = false;
        this.stagedFolder = folder;
        this.stagedTrades = trades;
      } else {
        this.isInvalid = true;
        this.stagedFolder = null;
        this.stagedTrades = [];
      }
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "bookmarks", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "stagedFolder", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "stagedTrades", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "isInvalid", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "handleInput", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "handleInput"), _class.prototype)), _class));
  _exports.default = FolderImport;
});

;define("better-trading/pods/components/page/bookmarks/folder-import/styles", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "import-preview": "_import-preview_nc9ies",
    "import-preview-title": "_import-preview-title_nc9ies"
  };
  _exports.default = _default;
});

;define("better-trading/pods/components/page/bookmarks/folder-import/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "4pLn8Q8r",
    "block": "{\"symbols\":[\"@onCancel\",\"@submitTask\"],\"statements\":[[5,\"modal\",[],[[\"@title\",\"@onClose\"],[[28,\"t\",[\"page.bookmarks.folder-import.modal-title\"],null],[28,\"fn\",[[23,1,[]]],null]]],{\"statements\":[[0,\"\\n  \"],[5,\"form/container\",[],[[\"@submitTask\",\"@entity\",\"@canSubmit\"],[[23,2,[]],[23,0,[\"submitEntity\"]],[23,0,[\"canSubmit\"]]]],{\"statements\":[[0,\"\\n    \"],[5,\"form/input\",[],[[\"@label\",\"@autofocus\",\"@onChange\"],[[28,\"t\",[\"page.bookmarks.folder-import.import-code.label\"],null],true,[28,\"fn\",[[23,0,[\"handleInput\"]]],null]]]],[0,\"\\n\\n\"],[4,\"if\",[[23,0,[\"stagedFolder\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"import-preview\"],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/folder-import/styles\"]]]]]],[8],[0,\"\\n\"],[4,\"if\",[[23,0,[\"stagedFolder\",\"icon\"]]],null,{\"statements\":[[0,\"          \"],[5,\"bookmark-folder-icon\",[],[[\"@icon\"],[[23,0,[\"stagedFolder\",\"icon\"]]]]],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n        \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"import-preview-title\"],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/folder-import/styles\"]]]]]],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"page.bookmarks.folder-import.preview\"],[[\"name\",\"tradesCount\"],[[23,0,[\"stagedFolder\",\"title\"]],[23,0,[\"stagedTrades\",\"length\"]]]]],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,0,[\"isInvalid\"]]],null,{\"statements\":[[0,\"      \"],[5,\"alert-message\",[],[[\"@message\",\"@type\"],[[28,\"t\",[\"page.bookmarks.folder-import.invalid-code\"],null],\"alert\"]]],[0,\"\\n    \"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"\\n    \"],[5,\"button\",[[12,\"type\",\"submit\"]],[[\"@theme\",\"@label\",\"@icon\"],[\"gold\",[28,\"t\",[\"page.bookmarks.folder-import.save\"],null],\"save\"]]],[0,\"\\n  \"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "better-trading/pods/components/page/bookmarks/folder-import/template.hbs"
    }
  });

  _exports.default = _default;
});

;define("better-trading/pods/components/page/bookmarks/folder/component", ["exports", "@glimmer/component", "ember-concurrency-decorators", "better-trading/utilities/copy-to-clipboard"], function (_exports, _component, _emberConcurrencyDecorators, _copyToClipboard) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _temp;

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let BookmarksFolder = (_dec = Ember.inject.service('trade-location'), _dec2 = Ember.inject.service('bookmarks'), _dec3 = Ember.inject.service('search-panel'), _dec4 = Ember.inject.service('flash-messages'), _dec5 = Ember.inject.service('intl'), _dec6 = Ember._tracked, _dec7 = Ember._tracked, _dec8 = Ember._tracked, _dec9 = Ember._tracked, _dec10 = Ember._tracked, _dec11 = Ember._tracked, _dec12 = Ember._action, _dec13 = Ember._action, _dec14 = Ember._action, _dec15 = Ember._action, _dec16 = Ember._action, _dec17 = Ember._action, _dec18 = Ember._action, _dec19 = Ember._action, _dec20 = Ember._action, _dec21 = Ember._action, _dec22 = Ember._action, _dec23 = Ember._action, _dec24 = Ember._action, (_class = (_temp = class BookmarksFolder extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "tradeLocation", _descriptor, this);

      _initializerDefineProperty(this, "bookmarks", _descriptor2, this);

      _initializerDefineProperty(this, "searchPanel", _descriptor3, this);

      _initializerDefineProperty(this, "flashMessages", _descriptor4, this);

      _initializerDefineProperty(this, "intl", _descriptor5, this);

      _initializerDefineProperty(this, "currentLeague", _descriptor6, this);

      _initializerDefineProperty(this, "stagedTrade", _descriptor7, this);

      _initializerDefineProperty(this, "stagedDeletingTrade", _descriptor8, this);

      _initializerDefineProperty(this, "isReorderingTrades", _descriptor9, this);

      _initializerDefineProperty(this, "trades", _descriptor10, this);

      _initializerDefineProperty(this, "isExporting", _descriptor11, this);
    }

    get folderId() {
      return this.args.folder.id;
    }

    get isExpanded() {
      return !this.isArchived && this.args.expandedFolderIds.includes(this.args.folder.id);
    }

    get isArchived() {
      return Boolean(this.args.folder.archivedAt);
    }

    *initialLoadTradesTask() {
      this.trades = yield this.bookmarks.fetchTradesByFolderId(this.args.folder.id);
    }

    *deleteTradeTask(deletingTrade) {
      try {
        yield this.bookmarks.deleteTrade(deletingTrade, this.folderId);
        this.trades = yield this.bookmarks.fetchTradesByFolderId(this.args.folder.id);
        this.flashMessages.success(this.intl.t('page.bookmarks.folder.delete-trade-success-flash', {
          title: deletingTrade.title
        }));
      } catch (_error) {
        this.flashMessages.alert(this.intl.t('general.generic-alert-flash'));
      } finally {
        this.stagedDeletingTrade = null;
      }
    }

    *reorderTradesTask(reorderedTrades) {
      this.trades = reorderedTrades;
      yield this.bookmarks.persistTrades(this.trades, this.folderId);
    }

    *persistTradeTask(trade) {
      try {
        const isNewlyCreated = !trade.id;
        yield this.bookmarks.persistTrade(trade, this.folderId);
        this.trades = yield this.bookmarks.fetchTradesByFolderId(this.args.folder.id);
        const successTranslationKey = isNewlyCreated ? 'page.bookmarks.folder.create-trade-success-flash' : 'page.bookmarks.folder.update-trade-success-flash';
        this.flashMessages.success(this.intl.t(successTranslationKey, {
          title: trade.title
        }));
      } catch (_error) {
        this.flashMessages.alert(this.intl.t('general.generic-alert-flash'));
      } finally {
        this.stagedTrade = null;
      }
    }

    *updateTradeLocationTask(trade) {
      if (!this.tradeLocation.slug || !this.tradeLocation.type) return;

      try {
        yield this.bookmarks.persistTrade(_extends({}, trade, {
          location: {
            slug: this.tradeLocation.slug,
            type: this.tradeLocation.type,
            version: this.tradeLocation.version
          }
        }), this.folderId);
        this.trades = yield this.bookmarks.fetchTradesByFolderId(this.args.folder.id);
        this.flashMessages.success(this.intl.t('page.bookmarks.folder.persist-trade-location-success-flash', {
          title: trade.title
        }));
      } catch (_error) {
        this.flashMessages.alert(this.intl.t('general.generic-alert-flash'));
      } finally {
        this.stagedTrade = null;
      }
    }

    *toggleTradeCompletionTask(trade) {
      yield this.bookmarks.toggleTradeCompletion(trade, this.folderId);
      this.trades = yield this.bookmarks.fetchTradesByFolderId(this.args.folder.id);
    }

    unstageTrade() {
      this.stagedTrade = null;
    }

    createTrade() {
      if (!this.tradeLocation.slug || !this.tradeLocation.type) return;
      const initializedTrade = this.bookmarks.initializeTradeStructFrom({
        slug: this.tradeLocation.slug,
        type: this.tradeLocation.type,
        version: this.tradeLocation.version
      });
      this.stagedTrade = _extends({}, initializedTrade, {
        title: this.searchPanel.recommendTitle()
      });
    }

    editTrade(trade) {
      this.stagedTrade = trade;
    }

    deleteTrade(trade) {
      this.stagedDeletingTrade = trade;
    }

    cancelTradeDeletion() {
      this.stagedDeletingTrade = null;
    }

    editFolder() {
      this.args.onEdit();
    }

    startTradesReordering() {
      this.isReorderingTrades = true;
    }

    stopTradesReordering() {
      this.isReorderingTrades = false;
    }

    exportFolder() {
      this.isExporting = true;
    }

    cancelExportFolder() {
      this.isExporting = false;
    }

    watchLeagueChange() {
      this.tradeLocation.on('change', this, this.handleTradeLocationChange);
    }

    teardownLeagueChange() {
      this.tradeLocation.off('change', this, this.handleTradeLocationChange);
    }

    copyToClipboard(trade) {
      if (!this.currentLeague) return;
      const tradeUrl = this.tradeLocation.getTradeUrl(trade.location.version, trade.location.type, trade.location.slug, this.currentLeague);
      (0, _copyToClipboard.copyToClipboard)(tradeUrl);
      this.flashMessages.success(this.intl.t('page.bookmarks.folder.copy-trade-to-clipboard-success-flash', {
        title: trade.title
      }));
    }

    handleTradeLocationChange({
      newTradeLocation
    }) {
      if (!newTradeLocation.league) return;
      if (newTradeLocation.league === this.currentLeague) return;
      this.currentLeague = newTradeLocation.league;
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "tradeLocation", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "bookmarks", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "searchPanel", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "flashMessages", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "intl", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "currentLeague", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return this.tradeLocation.league;
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "stagedTrade", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "stagedDeletingTrade", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "isReorderingTrades", [_dec9], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "trades", [_dec10], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "isExporting", [_dec11], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "initialLoadTradesTask", [_emberConcurrencyDecorators.dropTask], Object.getOwnPropertyDescriptor(_class.prototype, "initialLoadTradesTask"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "deleteTradeTask", [_emberConcurrencyDecorators.dropTask], Object.getOwnPropertyDescriptor(_class.prototype, "deleteTradeTask"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "reorderTradesTask", [_emberConcurrencyDecorators.dropTask], Object.getOwnPropertyDescriptor(_class.prototype, "reorderTradesTask"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "persistTradeTask", [_emberConcurrencyDecorators.dropTask], Object.getOwnPropertyDescriptor(_class.prototype, "persistTradeTask"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateTradeLocationTask", [_emberConcurrencyDecorators.dropTask], Object.getOwnPropertyDescriptor(_class.prototype, "updateTradeLocationTask"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toggleTradeCompletionTask", [_emberConcurrencyDecorators.dropTask], Object.getOwnPropertyDescriptor(_class.prototype, "toggleTradeCompletionTask"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "unstageTrade", [_dec12], Object.getOwnPropertyDescriptor(_class.prototype, "unstageTrade"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "createTrade", [_dec13], Object.getOwnPropertyDescriptor(_class.prototype, "createTrade"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "editTrade", [_dec14], Object.getOwnPropertyDescriptor(_class.prototype, "editTrade"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "deleteTrade", [_dec15], Object.getOwnPropertyDescriptor(_class.prototype, "deleteTrade"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "cancelTradeDeletion", [_dec16], Object.getOwnPropertyDescriptor(_class.prototype, "cancelTradeDeletion"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "editFolder", [_dec17], Object.getOwnPropertyDescriptor(_class.prototype, "editFolder"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "startTradesReordering", [_dec18], Object.getOwnPropertyDescriptor(_class.prototype, "startTradesReordering"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "stopTradesReordering", [_dec19], Object.getOwnPropertyDescriptor(_class.prototype, "stopTradesReordering"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "exportFolder", [_dec20], Object.getOwnPropertyDescriptor(_class.prototype, "exportFolder"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "cancelExportFolder", [_dec21], Object.getOwnPropertyDescriptor(_class.prototype, "cancelExportFolder"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "watchLeagueChange", [_dec22], Object.getOwnPropertyDescriptor(_class.prototype, "watchLeagueChange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "teardownLeagueChange", [_dec23], Object.getOwnPropertyDescriptor(_class.prototype, "teardownLeagueChange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "copyToClipboard", [_dec24], Object.getOwnPropertyDescriptor(_class.prototype, "copyToClipboard"), _class.prototype)), _class));
  _exports.default = BookmarksFolder;
});

;define("better-trading/pods/components/page/bookmarks/folder/folder-export/component", ["exports", "@glimmer/component", "ember-concurrency-decorators"], function (_exports, _component, _emberConcurrencyDecorators) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor, _descriptor2, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  // Constants
  const PREVIEW_BASE_URL = 'https://exile.center/bookmarks-preview'; // const PREVIEW_URL_MAX_LENGTH = 7500;

  let FolderExport = (_dec = Ember.inject.service('bookmarks'), _dec2 = Ember._tracked, (_class = (_temp = class FolderExport extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "bookmarks", _descriptor, this);

      _initializerDefineProperty(this, "serializedFolder", _descriptor2, this);
    }

    get previewUrl() {
      return `${PREVIEW_BASE_URL}?b64=${this.serializedFolder}`;
    }

    get canPreview() {
      return false; // Feature disabled until the page actually exists
      // return this.previewUrl.length < PREVIEW_URL_MAX_LENGTH;
    }

    get embedCode() {
      const iframeAttributes = [`title="${this.args.folder.title}"`, 'width="350"', 'height="500"', `src="${this.previewUrl}"`];
      return `<iframe ${iframeAttributes.join(' ')}></iframe>`;
    }

    *serializeFolderTask() {
      const folder = this.args.folder;
      const trades = yield this.bookmarks.fetchTradesByFolderId(folder.id);
      this.serializedFolder = this.bookmarks.serializeFolder(folder, trades);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "bookmarks", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "serializedFolder", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _applyDecoratedDescriptor(_class.prototype, "serializeFolderTask", [_emberConcurrencyDecorators.dropTask], Object.getOwnPropertyDescriptor(_class.prototype, "serializeFolderTask"), _class.prototype)), _class));
  _exports.default = FolderExport;
});

;define("better-trading/pods/components/page/bookmarks/folder/folder-export/styles", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "folder-export-container": "_folder-export-container_13t85e"
  };
  _exports.default = _default;
});

;define("better-trading/pods/components/page/bookmarks/folder/folder-export/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "hFfSwEQ7",
    "block": "{\"symbols\":[\"@onCancel\"],\"statements\":[[5,\"modal\",[],[[\"@title\",\"@onClose\"],[[28,\"t\",[\"page.bookmarks.folder.folder-export.modal-title\"],null],[28,\"fn\",[[23,1,[]]],null]]],{\"statements\":[[0,\"\\n  \"],[5,\"loading-container\",[],[[\"@task\",\"@size\"],[[23,0,[\"serializeFolderTask\"]],\"large\"]],{\"statements\":[[0,\"\\n    \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"folder-export-container\"],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/folder/folder-export/styles\"]]]]]],[8],[0,\"\\n\"],[4,\"if\",[[23,0,[\"canPreview\"]]],null,{\"statements\":[[0,\"        \"],[5,\"form/field\",[],[[\"@label\"],[[28,\"t\",[\"page.bookmarks.folder.folder-export.preview-url\"],null]]],{\"statements\":[[0,\"\\n          \"],[5,\"button\",[[12,\"target\",\"_blank\"],[12,\"rel\",\"noreferrer noopener\"]],[[\"@href\",\"@theme\",\"@icon\",\"@label\"],[[23,0,[\"previewUrl\"]],\"blue\",\"link\",[28,\"t\",[\"page.bookmarks.folder.folder-export.preview-url-button\"],null]]]],[0,\"\\n        \"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n      \"],[5,\"form/field\",[],[[\"@label\",\"@helper\"],[[28,\"t\",[\"page.bookmarks.folder.folder-export.export-code\"],null],[28,\"t\",[\"page.bookmarks.folder.folder-export.export-code-helper\"],null]]],{\"statements\":[[0,\"\\n        \"],[5,\"clipboard-textarea\",[],[[\"@value\"],[[23,0,[\"serializedFolder\"]]]]],[0,\"\\n      \"]],\"parameters\":[]}],[0,\"\\n\\n\"],[4,\"if\",[[23,0,[\"canPreview\"]]],null,{\"statements\":[[0,\"        \"],[5,\"form/field\",[],[[\"@label\",\"@helper\"],[[28,\"t\",[\"page.bookmarks.folder.folder-export.embed-code\"],null],[28,\"t\",[\"page.bookmarks.folder.folder-export.embed-code-helper\"],null]]],{\"statements\":[[0,\"\\n          \"],[5,\"clipboard-textarea\",[],[[\"@value\"],[[23,0,[\"embedCode\"]]]]],[0,\"\\n        \"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n      \"],[5,\"button\",[[12,\"type\",\"button\"]],[[\"@theme\",\"@label\",\"@onClick\"],[\"blue\",[28,\"t\",[\"page.bookmarks.folder.folder-export.close\"],null],[28,\"fn\",[[23,1,[]]],null]]]],[0,\"\\n    \"],[9],[0,\"\\n  \"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "better-trading/pods/components/page/bookmarks/folder/folder-export/template.hbs"
    }
  });

  _exports.default = _default;
});

;define("better-trading/pods/components/page/bookmarks/folder/styles", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "folder": "_folder_h2dup0",
    "is-expanded": "_is-expanded_h2dup0",
    "expansion-indicator": "_expansion-indicator_h2dup0",
    "is-archived": "_is-archived_h2dup0",
    "expansion-wrapper": "_expansion-wrapper_h2dup0",
    "header": "_header_h2dup0",
    "header-icon": "_header-icon_h2dup0",
    "header-label": "_header-label_h2dup0",
    "header-actions": "_header-actions_h2dup0",
    "header-action": "_header-action_h2dup0",
    "trades": "_trades_h2dup0",
    "is-reordering": "_is-reordering_h2dup0",
    "trade": "_trade_h2dup0",
    "trade-link": "_trade-link_h2dup0",
    "trade-link-completed": "_trade-link-completed_h2dup0",
    "trade-actions": "_trade-actions_h2dup0",
    "trade-action": "_trade-action_h2dup0",
    "folder-actions": "_folder-actions_h2dup0",
    "folder-actions-new-trade": "_folder-actions-new-trade_h2dup0"
  };
  _exports.default = _default;
});

;define("better-trading/pods/components/page/bookmarks/folder/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "eYkM7g4s",
    "block": "{\"symbols\":[\"group\",\"trade\",\"dragItem\",\"MenuItem\",\"MenuItem\",\"@folder\",\"@onDelete\",\"&attrs\",\"@onExpansionToggle\",\"@onArchiveToggle\",\"@dragHandle\"],\"statements\":[[7,\"div\",false],[12,\"class\",[29,[[28,\"local-class\",[[28,\"concat\",[\"folder \",[28,\"if\",[[23,0,[\"isExpanded\"]],\"is-expanded\"],null],\" \",[28,\"if\",[[23,0,[\"isArchived\"]],\"is-archived\"],null]],null]],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/folder/styles\"]]]]]],[13,8],[8],[0,\"\\n  \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"header\"],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/folder/styles\"]]]]]],[8],[0,\"\\n    \"],[7,\"div\",false],[12,\"class\",[29,[[28,\"local-class\",[\"expansion-wrapper\"],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/folder/styles\"]]]]]],[3,\"on\",[\"click\",[28,\"fn\",[[23,9,[]]],null]]],[8],[0,\"\\n\"],[4,\"if\",[[23,6,[\"icon\"]]],null,{\"statements\":[[0,\"        \"],[5,\"bookmark-folder-icon\",[[12,\"class\",[29,[[28,\"local-class\",[\"header-icon\"],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/folder/styles\"]]]]]]],[[\"@icon\"],[[23,6,[\"icon\"]]]]],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n      \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"header-label\"],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/folder/styles\"]]]]]],[8],[0,\"\\n        \"],[1,[23,6,[\"title\"]],false],[0,\"\\n      \"],[9],[0,\"\\n\\n\"],[4,\"unless\",[[23,0,[\"isArchived\"]]],null,{\"statements\":[[0,\"        \"],[5,\"fa-icon\",[[12,\"class\",[29,[[28,\"local-class\",[\"expansion-indicator\"],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/folder/styles\"]]]]]]],[[\"@icon\"],[\"chevron-down\"]]],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n\\n    \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"header-actions\"],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/folder/styles\"]]]]]],[8],[0,\"\\n      \"],[5,\"contextual-menu\",[[12,\"class\",[29,[[28,\"local-class\",[\"header-action\"],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/folder/styles\"]]]]]]],[[],[]],{\"statements\":[[0,\"\\n\"],[4,\"unless\",[[23,0,[\"isArchived\"]]],null,{\"statements\":[[0,\"          \"],[6,[23,5,[]],[],[[\"@label\",\"@onClick\"],[[28,\"t\",[\"page.bookmarks.folder.edit-folder\"],null],[28,\"fn\",[[23,0,[\"editFolder\"]]],null]]]],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n        \"],[6,[23,5,[]],[],[[\"@label\",\"@onClick\"],[[28,\"t\",[[28,\"if\",[[23,0,[\"isArchived\"]],\"page.bookmarks.folder.restore-folder\",\"page.bookmarks.folder.archive-folder\"],null]],null],[28,\"fn\",[[23,10,[]]],null]]]],[0,\"\\n\\n\"],[4,\"if\",[[23,0,[\"isArchived\"]]],null,{\"statements\":[[0,\"          \"],[6,[23,5,[]],[],[[\"@label\",\"@onClick\"],[[28,\"t\",[\"page.bookmarks.folder.delete-folder\"],null],[28,\"fn\",[[23,7,[]]],null]]]],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n        \"],[6,[23,5,[]],[],[[\"@label\",\"@onClick\"],[[28,\"t\",[\"page.bookmarks.folder.export-folder\"],null],[28,\"fn\",[[23,0,[\"exportFolder\"]]],null]]]],[0,\"\\n      \"]],\"parameters\":[5]}],[0,\"\\n\\n\"],[4,\"component\",[[23,11,[]]],[[\"tagName\",\"type\",\"class\"],[\"button\",\"button\",[28,\"concat\",[[28,\"local-class\",[\"header-action\"],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/folder/styles\"]]]],null]]],{\"statements\":[[0,\"        \"],[5,\"fa-icon\",[],[[\"@icon\"],[\"sort\"]]],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\\n\"],[4,\"if\",[[23,0,[\"isExpanded\"]]],null,{\"statements\":[[0,\"    \"],[5,\"loading-container\",[],[[\"@task\",\"@size\"],[[23,0,[\"initialLoadTradesTask\"]],\"small\"]],{\"statements\":[[0,\"\\n      \"],[5,\"sortable-group\",[[12,\"class\",[29,[[28,\"local-class\",[[28,\"concat\",[\"trades \",[28,\"if\",[[23,0,[\"isReorderingTrades\"]],\"is-reordering\"],null]],null]],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/folder/styles\"]]]]]],[3,\"did-insert\",[[28,\"fn\",[[23,0,[\"watchLeagueChange\"]]],null]]],[3,\"will-destroy\",[[28,\"fn\",[[23,0,[\"teardownLeagueChange\"]]],null]]]],[[\"@tagName\",\"@model\",\"@onChange\"],[\"ul\",[23,0,[\"trades\"]],[28,\"perform\",[[23,0,[\"reorderTradesTask\"]]],null]]],{\"statements\":[[0,\"\\n\"],[4,\"each\",[[23,0,[\"trades\"]]],[[\"key\"],[\"id\"]],{\"statements\":[[4,\"component\",[[23,1,[\"item\"]]],[[\"tagName\",\"model\",\"onDragStart\",\"onDragStop\",\"class\"],[\"li\",[23,2,[]],[28,\"fn\",[[23,0,[\"startTradesReordering\"]]],null],[28,\"fn\",[[23,0,[\"stopTradesReordering\"]]],null],[28,\"concat\",[[28,\"local-class\",[\"trade\"],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/folder/styles\"]]]],null]]],{\"statements\":[[0,\"            \"],[7,\"a\",true],[11,\"class\",[29,[[28,\"local-class\",[\"trade-link\"],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/folder/styles\"]]]]]],[11,\"href\",[28,\"trade-url\",[[23,2,[\"location\"]]],[[\"league\"],[[23,0,[\"currentLeague\"]]]]]],[8],[0,\"\\n\"],[4,\"if\",[[23,2,[\"completedAt\"]]],null,{\"statements\":[[0,\"                \"],[7,\"span\",true],[11,\"class\",[29,[[28,\"local-class\",[\"trade-link-completed\"],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/folder/styles\"]]]]]],[8],[0,\"\\n                  \"],[5,\"fa-icon\",[],[[\"@icon\"],[\"check\"]]],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n              \"],[1,[23,2,[\"title\"]],false],[0,\"\\n            \"],[9],[0,\"\\n\\n            \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"trade-actions\"],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/folder/styles\"]]]]]],[8],[0,\"\\n              \"],[5,\"contextual-menu\",[[12,\"class\",[29,[[28,\"local-class\",[\"trade-action\"],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/folder/styles\"]]]]]]],[[],[]],{\"statements\":[[0,\"\\n                \"],[6,[23,4,[]],[],[[\"@label\",\"@onClick\"],[[28,\"t\",[\"page.bookmarks.folder.copy-trade-to-clipboard\"],null],[28,\"fn\",[[23,0,[\"copyToClipboard\"]],[23,2,[]]],null]]]],[0,\"\\n\"],[4,\"if\",[[28,\"eq\",[[23,2,[\"location\",\"type\"]],\"search\"],null]],null,{\"statements\":[[0,\"                  \"],[6,[23,4,[]],[],[[\"@href\",\"@label\"],[[28,\"trade-url\",[[23,2,[\"location\"]]],[[\"league\",\"suffix\"],[[23,0,[\"currentLeague\"]],\"/live\"]]],[28,\"t\",[\"page.bookmarks.folder.open-live-trade\"],null]]]],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                \"],[6,[23,4,[]],[],[[\"@label\",\"@onClick\"],[[28,\"t\",[\"page.bookmarks.folder.update-trade-location\"],null],[28,\"perform\",[[23,0,[\"updateTradeLocationTask\"]],[23,2,[]]],null]]]],[0,\"\\n                \"],[6,[23,4,[]],[],[[\"@label\",\"@onClick\"],[[28,\"if\",[[23,2,[\"completedAt\"]],[28,\"t\",[\"page.bookmarks.folder.uncomplete-trade\"],null],[28,\"t\",[\"page.bookmarks.folder.complete-trade\"],null]],null],[28,\"perform\",[[23,0,[\"toggleTradeCompletionTask\"]],[23,2,[]]],null]]]],[0,\"\\n                \"],[6,[23,4,[]],[],[[\"@label\",\"@onClick\"],[[28,\"t\",[\"page.bookmarks.folder.edit-trade\"],null],[28,\"fn\",[[23,0,[\"editTrade\"]],[23,2,[]]],null]]]],[0,\"\\n                \"],[6,[23,4,[]],[],[[\"@label\",\"@onClick\"],[[28,\"t\",[\"page.bookmarks.folder.delete-trade\"],null],[28,\"fn\",[[23,0,[\"deleteTrade\"]],[23,2,[]]],null]]]],[0,\"\\n              \"]],\"parameters\":[4]}],[0,\"\\n\\n\"],[4,\"component\",[[23,3,[\"handle\"]]],[[\"tagName\",\"type\",\"class\"],[\"button\",\"button\",[28,\"concat\",[[28,\"local-class\",[\"trade-action\"],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/folder/styles\"]]]],null]]],{\"statements\":[[0,\"                \"],[5,\"fa-icon\",[],[[\"@icon\"],[\"sort\"]]],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[9],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"      \"]],\"parameters\":[1]}],[0,\"\\n\\n      \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"folder-actions\"],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/folder/styles\"]]]]]],[8],[0,\"\\n        \"],[5,\"button\",[[12,\"class\",[29,[[28,\"local-class\",[\"folder-actions-new-trade\"],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/folder/styles\"]]]]]],[12,\"type\",\"button\"]],[[\"@theme\",\"@label\",\"@onClick\"],[\"gold\",[28,\"t\",[\"page.bookmarks.folder.create-trade\"],null],[28,\"fn\",[[23,0,[\"createTrade\"]]],null]]]],[0,\"\\n      \"],[9],[0,\"\\n    \"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[]},null],[9],[0,\"\\n\\n\"],[4,\"if\",[[23,0,[\"stagedTrade\"]]],null,{\"statements\":[[0,\"  \"],[5,\"page/bookmarks/folder/trade-edition\",[],[[\"@trade\",\"@folderId\",\"@onCancel\",\"@submitTask\"],[[23,0,[\"stagedTrade\"]],[23,6,[\"id\"]],[28,\"fn\",[[23,0,[\"unstageTrade\"]]],null],[23,0,[\"persistTradeTask\"]]]]],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[23,0,[\"stagedDeletingTrade\"]]],null,{\"statements\":[[0,\"  \"],[5,\"page/bookmarks/folder/trade-deletion\",[],[[\"@trade\",\"@onCancel\",\"@submitTask\"],[[23,0,[\"stagedDeletingTrade\"]],[28,\"fn\",[[23,0,[\"cancelTradeDeletion\"]]],null],[23,0,[\"deleteTradeTask\"]]]]],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[23,0,[\"isExporting\"]]],null,{\"statements\":[[0,\"  \"],[5,\"page/bookmarks/folder/folder-export\",[],[[\"@folder\",\"@onCancel\"],[[23,6,[]],[28,\"fn\",[[23,0,[\"cancelExportFolder\"]]],null]]]],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "better-trading/pods/components/page/bookmarks/folder/template.hbs"
    }
  });

  _exports.default = _default;
});

;define("better-trading/pods/components/page/bookmarks/folder/trade-deletion/component", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // Vendor
  class TradeDeletion extends _component.default {}

  _exports.default = TradeDeletion;
});

;define("better-trading/pods/components/page/bookmarks/folder/trade-deletion/styles", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "confirmation": "_confirmation_1tnakd",
    "actions": "_actions_1tnakd"
  };
  _exports.default = _default;
});

;define("better-trading/pods/components/page/bookmarks/folder/trade-deletion/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "fmTRmwN1",
    "block": "{\"symbols\":[\"@onCancel\",\"@trade\",\"@submitTask\"],\"statements\":[[5,\"modal\",[],[[\"@title\",\"@onClose\"],[[28,\"t\",[\"page.bookmarks.folder.trade-deletion.modal-title\"],null],[28,\"fn\",[[23,1,[]]],null]]],{\"statements\":[[0,\"\\n  \"],[7,\"p\",true],[11,\"class\",[29,[[28,\"local-class\",[\"confirmation\"],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/folder/trade-deletion/styles\"]]]]]],[8],[0,\"\\n    \"],[1,[28,\"html-safe\",[[28,\"t\",[\"page.bookmarks.folder.trade-deletion.confirmation\"],[[\"name\"],[[23,2,[\"title\"]]]]]],null],false],[0,\"\\n  \"],[9],[0,\"\\n\\n  \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"actions\"],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/folder/trade-deletion/styles\"]]]]]],[8],[0,\"\\n    \"],[5,\"button\",[[12,\"type\",\"button\"]],[[\"@theme\",\"@label\",\"@onClick\",\"@icon\"],[\"red\",[28,\"t\",[\"page.bookmarks.folder.trade-deletion.delete\"],null],[28,\"perform\",[[23,3,[]],[23,2,[]]],null],\"trash-alt\"]]],[0,\"\\n\\n    \"],[5,\"button\",[[12,\"type\",\"button\"]],[[\"@theme\",\"@label\",\"@onClick\"],[\"blue\",[28,\"t\",[\"page.bookmarks.folder.trade-deletion.cancel\"],null],[28,\"fn\",[[23,1,[]]],null]]]],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "better-trading/pods/components/page/bookmarks/folder/trade-deletion/template.hbs"
    }
  });

  _exports.default = _default;
});

;define("better-trading/pods/components/page/bookmarks/folder/trade-edition/component", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2, _temp;

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let TradeEdition = (_dec = Ember.inject.service('bookmarks'), _dec2 = Ember._tracked, _dec3 = Ember._action, (_class = (_temp = class TradeEdition extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "bookmarks", _descriptor, this);

      _initializerDefineProperty(this, "trade", _descriptor2, this);
    }

    get canSubmit() {
      return Boolean(this.trade.title);
    }

    changeTitle(title) {
      this.trade = _extends({}, this.trade, {
        title
      });
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "bookmarks", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "trade", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return this.args.trade;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "changeTitle", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "changeTitle"), _class.prototype)), _class));
  _exports.default = TradeEdition;
});

;define("better-trading/pods/components/page/bookmarks/folder/trade-edition/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "zGgyoHiT",
    "block": "{\"symbols\":[\"@onCancel\",\"@submitTask\"],\"statements\":[[5,\"modal\",[],[[\"@title\",\"@onClose\"],[[28,\"t\",[\"page.bookmarks.folder.trade-edition.modal-title\"],null],[28,\"fn\",[[23,1,[]]],null]]],{\"statements\":[[0,\"\\n  \"],[5,\"form/container\",[],[[\"@submitTask\",\"@entity\",\"@canSubmit\"],[[23,2,[]],[23,0,[\"trade\"]],[23,0,[\"canSubmit\"]]]],{\"statements\":[[0,\"\\n    \"],[5,\"form/input\",[],[[\"@label\",\"@value\",\"@autofocus\",\"@onChange\"],[[28,\"t\",[\"page.bookmarks.folder.trade-edition.title-label\"],null],[23,0,[\"trade\",\"title\"]],true,[28,\"fn\",[[23,0,[\"changeTitle\"]]],null]]]],[0,\"\\n\\n    \"],[5,\"button\",[[12,\"type\",\"submit\"]],[[\"@theme\",\"@label\",\"@icon\"],[\"gold\",[28,\"t\",[\"page.bookmarks.folder.trade-edition.save\"],null],\"save\"]]],[0,\"\\n  \"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "better-trading/pods/components/page/bookmarks/folder/trade-edition/template.hbs"
    }
  });

  _exports.default = _default;
});

;define("better-trading/pods/components/page/bookmarks/styles", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "create-folder-button": "_create-folder-button_lgq3wd",
    "header-actions": "_header-actions_lgq3wd",
    "folders-wrapper": "_folders-wrapper_lgq3wd",
    "folder-wrapper": "_folder-wrapper_lgq3wd",
    "folder": "_folder_lgq3wd",
    "actions": "_actions_lgq3wd",
    "folders-warning": "_folders-warning_lgq3wd"
  };
  _exports.default = _default;
});

;define("better-trading/pods/components/page/bookmarks/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "MGOA0soN",
    "block": "{\"symbols\":[\"group\",\"folder\",\"dragItem\"],\"statements\":[[5,\"loading-container\",[[3,\"on-window-focus\",[[28,\"perform\",[[23,0,[\"refetchFoldersTask\"]]],null]]]],[[\"@task\",\"@size\"],[[23,0,[\"initialFetchFoldersTask\"]],\"large\"]],{\"statements\":[[0,\"\\n  \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"header-actions\"],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/styles\"]]]]]],[8],[0,\"\\n\"],[4,\"if\",[[28,\"and\",[[23,0,[\"hasActiveFolders\"]],[28,\"not\",[[23,0,[\"isShowingArchivedFolders\"]]],null]],null]],null,{\"statements\":[[0,\"      \"],[5,\"button\",[[12,\"type\",\"button\"]],[[\"@theme\",\"@label\",\"@icon\",\"@onClick\"],[\"gold\",[28,\"t\",[\"page.bookmarks.collapse-all\"],null],\"compress-alt\",[28,\"fn\",[[23,0,[\"collapseAllFolders\"]]],null]]]],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[23,0,[\"hasArchivedFolders\"]]],null,{\"statements\":[[0,\"      \"],[5,\"button\",[[12,\"type\",\"button\"]],[[\"@theme\",\"@label\",\"@icon\",\"@onClick\"],[\"gold\",[28,\"t\",[[28,\"if\",[[23,0,[\"isShowingArchivedFolders\"]],\"page.bookmarks.show-unarchived-folders\",\"page.bookmarks.show-archived-folders\"],null]],null],[28,\"if\",[[23,0,[\"isShowingArchivedFolders\"]],\"undo\",\"archive\"],null],[28,\"fn\",[[23,0,[\"toggleArchiveDisplay\"]]],null]]]],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\\n  \"],[5,\"sortable-group\",[[12,\"class\",[29,[[28,\"local-class\",[\"folders-wrapper\"],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/styles\"]]]]]]],[[\"@tagName\",\"@model\",\"@onChange\"],[\"div\",[23,0,[\"displayedFolders\"]],[28,\"perform\",[[23,0,[\"reorderFoldersTask\"]]],null]]],{\"statements\":[[0,\"\\n\"],[4,\"each\",[[23,0,[\"displayedFolders\"]]],[[\"key\"],[\"id\"]],{\"statements\":[[4,\"component\",[[23,1,[\"item\"]]],[[\"tagName\",\"model\",\"class\"],[\"div\",[23,2,[]],[28,\"concat\",[[28,\"local-class\",[\"folder-wrapper\"],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/styles\"]]]],null]]],{\"statements\":[[0,\"        \"],[5,\"page/bookmarks/folder\",[[12,\"class\",[29,[[28,\"local-class\",[\"folder\"],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/styles\"]]]]]]],[[\"@folder\",\"@dragHandle\",\"@expandedFolderIds\",\"@onEdit\",\"@onDelete\",\"@onExpansionToggle\",\"@onArchiveToggle\"],[[23,2,[]],[23,3,[\"handle\"]],[23,0,[\"expandedFolderIds\"]],[28,\"fn\",[[23,0,[\"stageFolder\"]],[23,2,[]]],null],[28,\"perform\",[[23,0,[\"deleteFolderTask\"]],[23,2,[]]],null],[28,\"fn\",[[23,0,[\"toggleFolderExpansion\"]],[23,2,[\"id\"]]],null],[28,\"perform\",[[23,0,[\"toggleFolderArchiveTask\"]],[23,2,[]]],null]]]],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"  \"]],\"parameters\":[1]}],[0,\"\\n\\n\"],[4,\"unless\",[[23,0,[\"isShowingArchivedFolders\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"actions\"],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/styles\"]]]]]],[8],[0,\"\\n      \"],[5,\"button\",[[12,\"class\",[29,[[28,\"local-class\",[\"create-folder-button\"],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/styles\"]]]]]],[12,\"type\",\"button\"]],[[\"@theme\",\"@label\",\"@icon\",\"@onClick\"],[\"gold\",[28,\"t\",[\"page.bookmarks.create-folder\"],null],\"folder-plus\",[28,\"fn\",[[23,0,[\"createFolder\"]]],null]]]],[0,\"\\n\\n      \"],[5,\"button\",[[12,\"class\",[29,[[28,\"local-class\",[\"create-folder-button\"],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/styles\"]]]]]],[12,\"type\",\"button\"]],[[\"@theme\",\"@label\",\"@icon\",\"@onClick\"],[\"gold\",[28,\"t\",[\"page.bookmarks.import-folder\"],null],\"plus-square\",[28,\"fn\",[[23,0,[\"importFolder\"]]],null]]]],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[23,0,[\"foldersWarningIsVisible\"]]],null,{\"statements\":[[0,\"    \"],[5,\"alert-message\",[[12,\"class\",[29,[[28,\"local-class\",[\"folders-warning\"],[[\"from\"],[\"better-trading/pods/components/page/bookmarks/styles\"]]]]]]],[[\"@type\",\"@message\"],[\"warning\",[28,\"t\",[\"page.bookmarks.folders-warning\"],null]]]],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"\\n\\n\"],[5,\"page/bookmarks/backup\",[],[[],[]]],[0,\"\\n\\n\"],[4,\"if\",[[23,0,[\"stagedFolder\"]]],null,{\"statements\":[[0,\"  \"],[5,\"page/bookmarks/folder-edition\",[],[[\"@folder\",\"@onCancel\",\"@submitTask\"],[[23,0,[\"stagedFolder\"]],[28,\"fn\",[[23,0,[\"unstageFolder\"]]],null],[23,0,[\"persistFolderTask\"]]]]],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[23,0,[\"isImportingFolder\"]]],null,{\"statements\":[[0,\"  \"],[5,\"page/bookmarks/folder-import\",[],[[\"@onCancel\",\"@submitTask\"],[[28,\"fn\",[[23,0,[\"cancelImportFolder\"]]],null],[23,0,[\"persistImportedFolderTask\"]]]]],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "better-trading/pods/components/page/bookmarks/template.hbs"
    }
  });

  _exports.default = _default;
});

;define("better-trading/pods/components/page/history/component", ["exports", "@glimmer/component", "ember-concurrency-decorators"], function (_exports, _component, _emberConcurrencyDecorators) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let PageHistory = (_dec = Ember.inject.service('trade-location'), _dec2 = Ember.inject.service('flash-messages'), _dec3 = Ember.inject.service('intl'), _dec4 = Ember._tracked, _dec5 = Ember._action, _dec6 = Ember._action, (_class = (_temp = class PageHistory extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "tradeLocation", _descriptor, this);

      _initializerDefineProperty(this, "flashMessages", _descriptor2, this);

      _initializerDefineProperty(this, "intl", _descriptor3, this);

      _initializerDefineProperty(this, "historyEntries", _descriptor4, this);
    }

    *refetchHistoryTask() {
      this.historyEntries = yield this.tradeLocation.fetchHistoryEntries();
    }

    *initialFetchHistoryTask() {
      yield this.refetchHistoryTask.perform();
    }

    *clearHistoryTask() {
      try {
        this.historyEntries = [];
        yield this.tradeLocation.clearHistoryEntries();
        this.flashMessages.success(this.intl.t('page.history.clear-success-flash'));
      } catch (_error) {
        this.flashMessages.alert(this.intl.t('general.generic-alert-flash'));
      }
    }

    subscribeToLocationChange() {
      this.tradeLocation.on('change', this, this.handleTradeLocationChange);
    }

    unsubscribeToLocationChange() {
      this.tradeLocation.off('change', this, this.handleTradeLocationChange);
    }

    handleTradeLocationChange() {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this.refetchHistoryTask.perform();
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "tradeLocation", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "flashMessages", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "intl", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "historyEntries", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "refetchHistoryTask", [_emberConcurrencyDecorators.restartableTask], Object.getOwnPropertyDescriptor(_class.prototype, "refetchHistoryTask"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "initialFetchHistoryTask", [_emberConcurrencyDecorators.dropTask], Object.getOwnPropertyDescriptor(_class.prototype, "initialFetchHistoryTask"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "clearHistoryTask", [_emberConcurrencyDecorators.dropTask], Object.getOwnPropertyDescriptor(_class.prototype, "clearHistoryTask"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "subscribeToLocationChange", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "subscribeToLocationChange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "unsubscribeToLocationChange", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "unsubscribeToLocationChange"), _class.prototype)), _class));
  _exports.default = PageHistory;
});

;define("better-trading/pods/components/page/history/entry-link/component", ["exports", "@glimmer/component", "date-fns/formatDistance", "date-fns/locale/en-US"], function (_exports, _component, _formatDistance, _enUS) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // Vendor
  class EntryLink extends _component.default {
    get formattedCreatedAt() {
      // eslint-disable-next-line no-magic-numbers
      return (0, _formatDistance.default)(new Date(this.args.historyEntry.createdAt), new Date(), {
        addSuffix: true,
        includeSeconds: true,
        locale: _enUS.default
      });
    }

    get formattedSlug() {
      return [this.args.historyEntry.type, this.args.historyEntry.league, this.args.historyEntry.slug].join('/');
    }

  }

  _exports.default = EntryLink;
});

;define("better-trading/pods/components/page/history/entry-link/styles", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "entry-link": "_entry-link_1qiolx",
    "title": "_title_1qiolx",
    "details": "_details_1qiolx",
    "slug": "_slug_1qiolx"
  };
  _exports.default = _default;
});

;define("better-trading/pods/components/page/history/entry-link/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "JgEOvy4+",
    "block": "{\"symbols\":[\"@historyEntry\"],\"statements\":[[7,\"a\",true],[11,\"class\",[29,[[28,\"local-class\",[\"entry-link\"],[[\"from\"],[\"better-trading/pods/components/page/history/entry-link/styles\"]]]]]],[11,\"href\",[28,\"trade-url\",[[23,1,[]]],[[\"league\"],[[23,1,[\"league\"]]]]]],[8],[0,\"\\n  \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"title\"],[[\"from\"],[\"better-trading/pods/components/page/history/entry-link/styles\"]]]]]],[8],[0,\"\\n    \"],[1,[23,1,[\"title\"]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"details\"],[[\"from\"],[\"better-trading/pods/components/page/history/entry-link/styles\"]]]]]],[8],[0,\"\\n    \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"slug\"],[[\"from\"],[\"better-trading/pods/components/page/history/entry-link/styles\"]]]]]],[8],[0,\"\\n      \"],[1,[23,0,[\"formattedSlug\"]],false],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[8],[0,\"\\n      \"],[1,[23,0,[\"formattedCreatedAt\"]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "better-trading/pods/components/page/history/entry-link/template.hbs"
    }
  });

  _exports.default = _default;
});

;define("better-trading/pods/components/page/history/styles", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "clear-button": "_clear-button_i0ezn4"
  };
  _exports.default = _default;
});

;define("better-trading/pods/components/page/history/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "uzSXIFmM",
    "block": "{\"symbols\":[\"historyEntry\"],\"statements\":[[5,\"loading-container\",[[3,\"did-insert\",[[28,\"fn\",[[23,0,[\"subscribeToLocationChange\"]]],null]]],[3,\"will-destroy\",[[28,\"fn\",[[23,0,[\"unsubscribeToLocationChange\"]]],null]]],[3,\"on-window-focus\",[[28,\"perform\",[[23,0,[\"refetchHistoryTask\"]]],null]]]],[[\"@task\",\"@size\"],[[23,0,[\"initialFetchHistoryTask\"]],\"large\"]],{\"statements\":[[0,\"\\n\"],[4,\"if\",[[23,0,[\"historyEntries\"]]],null,{\"statements\":[[4,\"each\",[[23,0,[\"historyEntries\"]]],null,{\"statements\":[[0,\"      \"],[5,\"page/history/entry-link\",[],[[\"@historyEntry\"],[[23,1,[]]]]],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n    \"],[5,\"button\",[[12,\"class\",[29,[[28,\"local-class\",[\"clear-button\"],[[\"from\"],[\"better-trading/pods/components/page/history/styles\"]]]]]],[12,\"type\",\"button\"]],[[\"@theme\",\"@label\",\"@onClick\",\"@icon\"],[\"gold\",[28,\"t\",[\"page.history.clear\"],null],[28,\"perform\",[[23,0,[\"clearHistoryTask\"]]],null],\"times\"]]],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[5,\"alert-message\",[],[[\"@message\",\"@type\"],[[28,\"t\",[\"page.history.empty\"],null],\"warning\"]]],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "better-trading/pods/components/page/history/template.hbs"
    }
  });

  _exports.default = _default;
});

;define("better-trading/pods/components/page/pinned-items/component", ["exports", "@glimmer/component", "ember-concurrency-decorators", "ember-concurrency"], function (_exports, _component, _emberConcurrencyDecorators, _emberConcurrency) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  // Constants
  const SCROLL_ANIMATION_DURATION_IN_MILLISECONDS = 2000;
  const SCROLL_ANIMATION_DELAY_IN_MILLISECONDS = 250;
  let PagePinnedItems = (_dec = Ember.inject.service('item-results'), _dec2 = Ember.inject.service('flash-messages'), _dec3 = Ember.inject.service('intl'), _dec4 = Ember._tracked, _dec5 = Ember._action, _dec6 = Ember._action, _dec7 = Ember._action, _dec8 = Ember._action, _dec9 = Ember._action, (_class = (_temp = class PagePinnedItems extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "itemResults", _descriptor, this);

      _initializerDefineProperty(this, "flashMessages", _descriptor2, this);

      _initializerDefineProperty(this, "intl", _descriptor3, this);

      _initializerDefineProperty(this, "pinnedItems", _descriptor4, this);
    }

    get sortedPinnedItems() {
      return this.pinnedItems.sort((pinnedItemA, pinnedItemB) => new Date(pinnedItemA.pinnedAt).getTime() - new Date(pinnedItemB.pinnedAt).getTime());
    }

    *scrollToItemTask(itemId) {
      const itemElement = window.document.querySelector(`div.row[data-id="${itemId}"]`);

      if (!itemElement) {
        return this.flashMessages.alert(this.intl.t('general.generic-alert-flash'));
      }

      itemElement.scrollIntoView({
        block: 'center'
      });
      yield (0, _emberConcurrency.timeout)(SCROLL_ANIMATION_DELAY_IN_MILLISECONDS);
      itemElement.classList.add('bt-pinned-glow');
      yield (0, _emberConcurrency.timeout)(SCROLL_ANIMATION_DURATION_IN_MILLISECONDS);
      itemElement.classList.remove('bt-pinned-glow');
    }

    subscribeToPinnedItemsChange() {
      this.itemResults.on('pinned-items-change', this, this.getPinnedItems);
    }

    unsubscribeFromPinnedItemsChange() {
      this.itemResults.off('pinned-items-change', this, this.getPinnedItems);
    }

    clearPinnedItems() {
      this.itemResults.clearPinnedItems();
    }

    getPinnedItems() {
      this.pinnedItems = this.itemResults.getPinnedItems();
    }

    unpinItem(itemId) {
      this.itemResults.unpinItemById(itemId);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "itemResults", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "flashMessages", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "intl", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "pinnedItems", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "scrollToItemTask", [_emberConcurrencyDecorators.task], Object.getOwnPropertyDescriptor(_class.prototype, "scrollToItemTask"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "subscribeToPinnedItemsChange", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "subscribeToPinnedItemsChange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "unsubscribeFromPinnedItemsChange", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "unsubscribeFromPinnedItemsChange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "clearPinnedItems", [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, "clearPinnedItems"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getPinnedItems", [_dec8], Object.getOwnPropertyDescriptor(_class.prototype, "getPinnedItems"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "unpinItem", [_dec9], Object.getOwnPropertyDescriptor(_class.prototype, "unpinItem"), _class.prototype)), _class));
  _exports.default = PagePinnedItems;
});

;define("better-trading/pods/components/page/pinned-items/styles", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "pinned-items": "_pinned-items_1j85ks",
    "item-wrapper": "_item-wrapper_1j85ks",
    "item-actions": "_item-actions_1j85ks",
    "item-scroll": "_item-scroll_1j85ks",
    "rendered-item-wrapper": "_rendered-item-wrapper_1j85ks"
  };
  _exports.default = _default;
});

;define("better-trading/pods/components/page/pinned-items/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "QEdaGQPG",
    "block": "{\"symbols\":[\"pinnedItem\"],\"statements\":[[7,\"div\",false],[12,\"class\",[29,[[28,\"local-class\",[\"pinned-items\"],[[\"from\"],[\"better-trading/pods/components/page/pinned-items/styles\"]]]]]],[3,\"did-insert\",[[28,\"fn\",[[23,0,[\"subscribeToPinnedItemsChange\"]]],null]]],[3,\"did-insert\",[[28,\"fn\",[[23,0,[\"getPinnedItems\"]]],null]]],[3,\"will-destroy\",[[28,\"fn\",[[23,0,[\"unsubscribeFromPinnedItemsChange\"]]],null]]],[8],[0,\"\\n\"],[4,\"if\",[[23,0,[\"sortedPinnedItems\"]]],null,{\"statements\":[[4,\"each\",[[23,0,[\"sortedPinnedItems\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"item-wrapper\"],[[\"from\"],[\"better-trading/pods/components/page/pinned-items/styles\"]]]]]],[8],[0,\"\\n        \"],[1,[23,1,[\"detailsElement\"]],false],[0,\"\\n\\n        \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"rendered-item-wrapper\"],[[\"from\"],[\"better-trading/pods/components/page/pinned-items/styles\"]]]]]],[8],[0,\"\\n          \"],[1,[23,1,[\"renderedItemElement\"]],false],[0,\"\\n        \"],[9],[0,\"\\n\\n        \"],[1,[23,1,[\"pricingElement\"]],false],[0,\"\\n\\n        \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"item-actions\"],[[\"from\"],[\"better-trading/pods/components/page/pinned-items/styles\"]]]]]],[8],[0,\"\\n          \"],[5,\"button\",[[12,\"class\",[29,[[28,\"local-class\",[\"item-scroll\"],[[\"from\"],[\"better-trading/pods/components/page/pinned-items/styles\"]]]]]],[12,\"type\",\"button\"]],[[\"@theme\",\"@label\",\"@onClick\"],[\"blue\",[28,\"t\",[\"page.pinned-items.scroll-to-item\"],null],[28,\"perform\",[[23,0,[\"scrollToItemTask\"]],[23,1,[\"id\"]]],null]]]],[0,\"\\n\\n          \"],[5,\"button\",[[12,\"type\",\"button\"]],[[\"@theme\",\"@label\",\"@onClick\"],[\"blue\",[28,\"t\",[\"page.pinned-items.unpin-item\"],null],[28,\"fn\",[[23,0,[\"unpinItem\"]],[23,1,[\"id\"]]],null]]]],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n    \"],[5,\"button\",[[12,\"type\",\"button\"]],[[\"@theme\",\"@label\",\"@onClick\",\"@icon\"],[\"gold\",[28,\"t\",[\"page.pinned-items.clear\"],null],[28,\"fn\",[[23,0,[\"clearPinnedItems\"]]],null],\"times\"]]],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[5,\"alert-message\",[],[[\"@message\",\"@type\"],[[28,\"t\",[\"page.pinned-items.empty\"],null],\"warning\"]]],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n  \"],[5,\"alert-message\",[],[[\"@message\",\"@type\"],[[28,\"t\",[\"page.pinned-items.warning\"],null],\"warning\"]]],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "better-trading/pods/components/page/pinned-items/template.hbs"
    }
  });

  _exports.default = _default;
});

;define("better-trading/pods/components/root-page-menu/component", ["exports", "@glimmer/component", "better-trading/pods/root/controller"], function (_exports, _component, _controller) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let RootPageMenu = (_dec = Ember.inject.service('intl'), (_class = (_temp = class RootPageMenu extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "intl", _descriptor, this);
    }

    get menuItems() {
      return [{
        page: _controller.RootPage.BOOKMARKS,
        icon: 'folder-open',
        label: this.intl.t('components.root-page-menu.bookmarks'),
        isActive: _controller.RootPage.BOOKMARKS === this.args.currentPage
      }, {
        page: _controller.RootPage.PINNED_ITEMS,
        icon: 'thumbtack',
        label: this.intl.t('components.root-page-menu.pinned-items'),
        isActive: _controller.RootPage.PINNED_ITEMS === this.args.currentPage
      }, {
        page: _controller.RootPage.HISTORY,
        icon: 'history',
        label: this.intl.t('components.root-page-menu.history'),
        isActive: _controller.RootPage.HISTORY === this.args.currentPage
      }];
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "intl", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = RootPageMenu;
});

;define("better-trading/pods/components/root-page-menu/styles", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "root-page-menu": "_root-page-menu_74sh9k",
    "menu-item": "_menu-item_74sh9k",
    "is-active": "_is-active_74sh9k",
    "menu-item-icon": "_menu-item-icon_74sh9k"
  };
  _exports.default = _default;
});

;define("better-trading/pods/components/root-page-menu/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "IWM6AIF4",
    "block": "{\"symbols\":[\"menuItem\",\"@onChange\"],\"statements\":[[7,\"ul\",true],[11,\"class\",[29,[[28,\"local-class\",[\"root-page-menu\"],[[\"from\"],[\"better-trading/pods/components/root-page-menu/styles\"]]]]]],[8],[0,\"\\n\"],[4,\"each\",[[23,0,[\"menuItems\"]]],null,{\"statements\":[[0,\"    \"],[7,\"li\",false],[12,\"class\",[29,[[28,\"local-class\",[[28,\"concat\",[\"menu-item \",[28,\"if\",[[23,1,[\"isActive\"]],\"is-active\"],null]],null]],[[\"from\"],[\"better-trading/pods/components/root-page-menu/styles\"]]]]]],[3,\"on\",[\"click\",[28,\"fn\",[[23,2,[]],[23,1,[\"page\"]]],null]]],[8],[0,\"\\n      \"],[5,\"fa-icon\",[[12,\"class\",[29,[[28,\"local-class\",[\"menu-item-icon\"],[[\"from\"],[\"better-trading/pods/components/root-page-menu/styles\"]]]]]]],[[\"@icon\"],[[23,1,[\"icon\"]]]]],[0,\"\\n\\n      \"],[1,[23,1,[\"label\"]],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "better-trading/pods/components/root-page-menu/template.hbs"
    }
  });

  _exports.default = _default;
});

;define("better-trading/pods/root/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.RootPage = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _descriptor, _descriptor2, _descriptor3, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  // Constants
  const CURRENT_PAGE_KEY = 'current-page';
  let RootPage;
  _exports.RootPage = RootPage;

  (function (RootPage) {
    RootPage["BOOKMARKS"] = "bookmarks";
    RootPage["HISTORY"] = "history";
    RootPage["PINNED_ITEMS"] = "pinned-items";
  })(RootPage || (_exports.RootPage = RootPage = {}));

  let RootController = (_dec = Ember.inject.service('storage'), _dec2 = Ember.inject.service('item-results'), _dec3 = Ember._tracked, _dec4 = Ember._action, _dec5 = Ember._action, _dec6 = Ember._action, (_class = (_temp = class RootController extends Ember.Controller {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "storage", _descriptor, this);

      _initializerDefineProperty(this, "itemResults", _descriptor2, this);

      _initializerDefineProperty(this, "currentPage", _descriptor3, this);
    }

    get currentPageComponentName() {
      return `page/${this.currentPage}`;
    }

    changeCurrentPage(page) {
      this.storage.setLocalValue(CURRENT_PAGE_KEY, page);
      this.currentPage = page;
    }

    subscribeToPinnedItemsChange() {
      this.itemResults.on('pinned-items-change', this, this.navigateToPinnedItems);
    }

    unsubscribeFromPinnedItemsChange() {
      this.itemResults.off('pinned-items-change', this, this.navigateToPinnedItems);
    }

    navigateToPinnedItems() {
      this.changeCurrentPage(RootPage.PINNED_ITEMS);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "storage", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "itemResults", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "currentPage", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return this.storage.getLocalValue(CURRENT_PAGE_KEY) || RootPage.BOOKMARKS;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "changeCurrentPage", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "changeCurrentPage"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "subscribeToPinnedItemsChange", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "subscribeToPinnedItemsChange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "unsubscribeFromPinnedItemsChange", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "unsubscribeFromPinnedItemsChange"), _class.prototype)), _class));
  _exports.default = RootController;
});

;define("better-trading/pods/root/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "N5tOASIK",
    "block": "{\"symbols\":[],\"statements\":[[5,\"root-page-menu\",[],[[\"@currentPage\",\"@onChange\"],[[23,0,[\"currentPage\"]],[28,\"fn\",[[23,0,[\"changeCurrentPage\"]]],null]]]],[0,\"\\n\\n\"],[7,\"div\",false],[3,\"did-insert\",[[28,\"fn\",[[23,0,[\"subscribeToPinnedItemsChange\"]]],null]]],[3,\"will-destroy\",[[28,\"fn\",[[23,0,[\"unsubscribeFromPinnedItemsChange\"]]],null]]],[8],[0,\"\\n  \"],[1,[28,\"component\",[[23,0,[\"currentPageComponentName\"]]],null],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "better-trading/pods/root/template.hbs"
    }
  });

  _exports.default = _default;
});

;define("better-trading/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberResolver.default;
    }
  });
});

;define("better-trading/router", ["exports", "better-trading/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  Router.map(function () {
    this.route('root', {
      path: '/'
    });
    this.route('about');
  });
  var _default = Router;
  _exports.default = _default;
});

;define("better-trading/services/bookmarks", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let Bookmarks = (_dec = Ember.inject.service('bookmarks/storage'), _dec2 = Ember.inject.service('bookmarks/state'), _dec3 = Ember.inject.service('bookmarks/export'), _dec4 = Ember.inject.service('bookmarks/backup'), (_class = (_temp = class Bookmarks extends Ember.Service.extend(Ember.Evented) {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "bookmarksStorage", _descriptor, this);

      _initializerDefineProperty(this, "bookmarksState", _descriptor2, this);

      _initializerDefineProperty(this, "bookmarksExport", _descriptor3, this);

      _initializerDefineProperty(this, "bookmarksBackup", _descriptor4, this);
    }

    async fetchFolders() {
      return this.bookmarksStorage.fetchFolders();
    }

    async fetchTradesByFolderId(folderId) {
      return this.bookmarksStorage.fetchTradesByFolderId(folderId);
    }

    async fetchTradeByLocation(location) {
      const folders = await this.fetchFolders();
      const foldersWithTrades = await Promise.all(folders.map(async folder => _extends({}, folder, {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        trades: await this.fetchTradesByFolderId(folder.id)
      })));
      let matches = foldersWithTrades.map(folderWithTrades => _extends({}, folderWithTrades, {
        trades: folderWithTrades.trades.filter(trade => trade.location.version === location.version && trade.location.slug === location.slug && trade.location.type === location.type)
      })).filter(f => f.trades.length > 0);
      if (matches.length === 0) return null;
      const unarchivedMatches = matches.filter(m => !m.archivedAt);
      if (unarchivedMatches.length > 0) matches = unarchivedMatches;
      const matchingTrades = matches.flatMap(m => m.trades); // Sort alphabetically by title. "by title" is an arbitrary choice, we just want some
      // consistent sort order to make sure the result stays consistent between repeated calls
      //
      // eslint-disable-next-line no-nested-ternary

      matchingTrades.sort((a, b) => a.title < b.title ? -1 : a.title > b.title ? 1 : 0);
      return matchingTrades[0];
    }

    async persistFolder(bookmarkFolder, options) {
      const newId = await this.bookmarksStorage.persistFolder(bookmarkFolder, options);
      this.trigger('change');
      return newId;
    }

    async persistFolders(bookmarkFolders) {
      await this.bookmarksStorage.persistFolders(bookmarkFolders);
      this.trigger('change');
    }

    async persistTrade(bookmarkTrade, folderId) {
      const newId = await this.bookmarksStorage.persistTrade(bookmarkTrade, folderId);
      this.trigger('change');
      return newId;
    }

    async persistTrades(bookmarkTrades, folderId) {
      const newId = await this.bookmarksStorage.persistTrades(bookmarkTrades, folderId);
      this.trigger('change');
      return newId;
    }

    async deleteTrade(deletingTrade, folderId) {
      if (!deletingTrade.id) return;
      await this.bookmarksStorage.deleteTrade(deletingTrade.id, folderId);
      this.trigger('change');
    }

    async deleteFolder(deletingFolder) {
      if (!deletingFolder.id) return;
      await this.bookmarksStorage.deleteFolder(deletingFolder.id);
      this.trigger('change');
    }

    async toggleTradeCompletion(trade, folderId) {
      return this.persistTrade(_extends({}, trade, {
        completedAt: trade.completedAt ? null : new Date().toUTCString()
      }), folderId);
    }

    async toggleFolderArchive(folder) {
      return this.persistFolder(_extends({}, folder, {
        archivedAt: folder.archivedAt ? null : new Date().toUTCString()
      }), {
        moveToEnd: true
      });
    } // This function reorders the `reorderedFolders` within `allFolders` relative to
    // one another without affecting the relative order of non-reordered folders.
    //
    // Does *not* persist the changes.
    //
    // Precondition: `reorderedFolders` must be a subset of `allFolders`.


    partiallyReorderFolders(allFolders, reorderedFolders) {
      const reorderedSet = new Set(reorderedFolders);
      const result = [...allFolders];
      let reorderedIndex = 0;

      for (let i = 0; i < allFolders.length; i++) {
        if (reorderedSet.has(allFolders[i])) {
          result[i] = reorderedFolders[reorderedIndex];
          reorderedIndex++;
        }
      }

      if (reorderedIndex !== reorderedFolders.length) {
        throw new Error('partiallyReorderFolders precondition violated: reorderedFolders was not a subset of allFolders');
      }

      return result;
    }

    initializeFolderStruct(version) {
      return {
        version,
        icon: null,
        title: '',
        archivedAt: null
      };
    }

    initializeTradeStructFrom(location) {
      return {
        location,
        title: '',
        completedAt: null
      };
    }

    toggleFolderExpansion(expandedFolderIds, bookmarkFolderId) {
      return this.bookmarksState.toggleFolderExpansion(expandedFolderIds, bookmarkFolderId);
    }

    getExpandedFolderIds() {
      return this.bookmarksState.getExpandedFolderIds();
    }

    collapseAllFolders() {
      return this.bookmarksState.collapseAllFolderIds();
    }

    serializeFolder(folder, trades) {
      return this.bookmarksExport.serialize(folder, trades);
    }

    deserializeFolder(serializedFolder) {
      return this.bookmarksExport.deserialize(serializedFolder);
    }

    async generateBackupDataString() {
      return this.bookmarksBackup.generateBackupDataString();
    }

    async restoreFromDataString(dataString) {
      return this.bookmarksBackup.restoreFromDataString(dataString);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "bookmarksStorage", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "bookmarksState", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "bookmarksExport", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "bookmarksBackup", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = Bookmarks;
});

;define("better-trading/services/bookmarks/backup", ["exports", "better-trading/utilities/async-loop"], function (_exports, _asyncLoop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  // Constants
  const SECTION_DELIMITER = '\n--------------------\n';
  const LINE_DELIMITER = '\n';
  let Backup = (_dec = Ember.inject.service('bookmarks'), (_class = (_temp = class Backup extends Ember.Service {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "bookmarks", _descriptor, this);
    }

    async generateBackupDataString() {
      const activeFolderStrings = [];
      const archivedFolderStrings = [];
      const folders = await this.bookmarks.fetchFolders();
      await (0, _asyncLoop.asyncLoop)(folders, async folder => {
        if (!folder.id) return;
        const trades = await this.bookmarks.fetchTradesByFolderId(folder.id);
        const serializedFolder = this.bookmarks.serializeFolder(folder, trades);
        (folder.archivedAt ? archivedFolderStrings : activeFolderStrings).push(serializedFolder);
      });
      return [activeFolderStrings.join(LINE_DELIMITER), archivedFolderStrings.join(LINE_DELIMITER)].join(SECTION_DELIMITER);
    }

    async restoreFromDataString(stringData) {
      try {
        const [activeSection, archivedSection] = stringData.split(SECTION_DELIMITER);
        const activeFolderStrings = activeSection.split(LINE_DELIMITER).filter(Boolean);
        const archivedFolderStrings = archivedSection.split(LINE_DELIMITER).filter(Boolean);
        const restoredActiveFoldersCount = await this.restoreFolders(activeFolderStrings);
        const restoredArchivedFoldersCount = await this.restoreFolders(archivedFolderStrings, {
          archivedAt: new Date().toUTCString()
        });
        return restoredActiveFoldersCount + restoredArchivedFoldersCount > 0;
      } catch (e) {
        return false;
      }
    }

    async restoreFolders(folderStrings, folderOverrides = {}) {
      let restoredFoldersCount = 0;
      await (0, _asyncLoop.asyncLoop)(folderStrings, async folderString => {
        const deserializedData = this.bookmarks.deserializeFolder(folderString);
        if (!deserializedData) return;
        const [folder, trades] = deserializedData;
        const folderId = await this.bookmarks.persistFolder(_extends({}, folder, folderOverrides));
        await this.bookmarks.persistTrades(trades, folderId);
        restoredFoldersCount++;
      });
      return restoredFoldersCount;
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "bookmarks", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = Backup;
});

;define("better-trading/services/bookmarks/export", ["exports", "js-base64"], function (_exports, _jsBase) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* eslint-disable no-magic-numbers */
  // Vendor
  class Export extends Ember.Service {
    serialize(folder, trades) {
      const payload = {
        icn: folder.icon,
        tit: folder.title,
        ver: folder.version,
        trs: trades.map(trade => ({
          tit: trade.title,
          loc: `${trade.location.version}:${trade.location.type}:${trade.location.slug}`
        }))
      };
      return `3:${_jsBase.Base64.encode(JSON.stringify(payload))}`;
    }

    parseExportVersion(exportString) {
      if (exportString.startsWith('2:')) {
        return 2;
      } else if (exportString.startsWith('3:')) {
        return 3;
      } else {
        // v1 export string with no version prefix
        return 1;
      }
    }

    jsonFromExportString(version, exportString) {
      if (version >= 2) {
        // can include unicode emoji/etc
        return _jsBase.Base64.decode(exportString.slice(2));
      } else {
        // v1 export string with no version prefix, breaks for non-Latin1
        return atob(exportString);
      }
    }

    deserialize(serializedFolder) {
      try {
        const exportVersion = this.parseExportVersion(serializedFolder);
        const potentialPayload = JSON.parse(this.jsonFromExportString(exportVersion, serializedFolder));
        const folder = {
          version: '1',
          icon: potentialPayload.icn,
          title: potentialPayload.tit,
          archivedAt: null
        };

        if (exportVersion >= 3) {
          folder.version = potentialPayload.ver;
        }

        const trades = potentialPayload.trs.map(trade => {
          let version, type, slug;

          if (exportVersion >= 3) {
            [version, type, slug] = trade.loc.split(':');
          } else {
            version = '1';
            [type, slug] = trade.loc.split(':');
          }

          return {
            title: trade.tit,
            completedAt: null,
            location: {
              version: version,
              type,
              slug
            }
          };
        });
        return [folder, trades];
      } catch (e) {
        return null;
      }
    }

  }

  _exports.default = Export;
});

;define("better-trading/services/bookmarks/state", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let BookmarksState = (_dec = Ember.inject.service('storage'), (_class = (_temp = class BookmarksState extends Ember.Service {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "storage", _descriptor, this);
    }

    toggleFolderExpansion(expandedFolderIds, bookmarkFolderId) {
      const expandedFolderIdsCopy = [...expandedFolderIds];
      const bookmarkFolderIdIndex = expandedFolderIdsCopy.indexOf(bookmarkFolderId);

      if (bookmarkFolderIdIndex > -1) {
        expandedFolderIdsCopy.splice(bookmarkFolderIdIndex, 1);
      } else {
        expandedFolderIdsCopy.push(bookmarkFolderId);
      }

      return this.persistExpandedFolderIds(expandedFolderIdsCopy);
    }

    getExpandedFolderIds() {
      const rawIds = this.storage.getLocalValue('bookmark-folders-expansion');
      if (!rawIds) return [];
      return rawIds.split(',');
    }

    collapseAllFolderIds() {
      return this.persistExpandedFolderIds([]);
    }

    persistExpandedFolderIds(expandedFolderIds) {
      this.storage.setLocalValue('bookmark-folders-expansion', expandedFolderIds.join(','));
      return expandedFolderIds;
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "storage", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = BookmarksState;
});

;define("better-trading/services/bookmarks/storage", ["exports", "better-trading/utilities/unique-id"], function (_exports, _uniqueId) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor, _descriptor2, _temp;

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  // Constants
  const FOLDERS_KEY = 'bookmark-folders';
  const TRADES_PREFIX_KEY = 'bookmark-trades';
  let BookmarksStorage = (_dec = Ember.inject.service('bookmarks'), _dec2 = Ember.inject.service('storage'), (_class = (_temp = class BookmarksStorage extends Ember.Service {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "bookmarks", _descriptor, this);

      _initializerDefineProperty(this, "storage", _descriptor2, this);
    }

    async fetchFolders() {
      const persistedFolders = await this.storage.getValue(FOLDERS_KEY);
      if (!persistedFolders) return [];
      return persistedFolders.map(f => this.migrateOldFolder(f));
    }

    async fetchTradesByFolderId(folderId) {
      const trades = await this.storage.getValue(`${TRADES_PREFIX_KEY}--${folderId}`);
      if (!trades) return [];
      return trades.map(t => this.migrateOldTrade(t));
    }

    async persistFolder(folderToPersist, options) {
      const folders = (await this.fetchFolders()) || [];
      let updatedFolders;
      let persistingId = folderToPersist.id;

      if (!persistingId) {
        persistingId = (0, _uniqueId.uniqueId)();
        updatedFolders = [...folders, _extends({}, folderToPersist, {
          id: persistingId
        })];
      } else {
        updatedFolders = folders.map(folder => {
          if (folder.id !== folderToPersist.id) return folder;
          return _extends({}, folder, folderToPersist);
        });

        if (options?.moveToEnd) {
          updatedFolders = [...updatedFolders.filter(f => f.id !== folderToPersist.id), ...updatedFolders.filter(f => f.id === folderToPersist.id)];
        }
      }

      await this.persistFolders(updatedFolders);
      return persistingId;
    }

    async persistTrade(tradeToPersist, folderId) {
      const trades = await this.fetchTradesByFolderId(folderId);
      let updatedTrades;
      let persistingId = tradeToPersist.id;

      if (!tradeToPersist.id) {
        persistingId = (0, _uniqueId.uniqueId)();
        updatedTrades = [...trades, _extends({}, tradeToPersist, {
          id: persistingId
        })];
      } else {
        updatedTrades = trades.map(trade => {
          if (trade.id !== tradeToPersist.id) return trade;
          return _extends({}, trade, tradeToPersist);
        });
      }

      await this.persistTrades(updatedTrades, folderId);
      return persistingId;
    }

    async persistTrades(bookmarkTrades, folderId) {
      const safeBookmarkTrades = bookmarkTrades.map(bookmarkTrade => _extends({}, bookmarkTrade, {
        id: bookmarkTrade.id || (0, _uniqueId.uniqueId)()
      }));
      return this.storage.setValue(`${TRADES_PREFIX_KEY}--${folderId}`, safeBookmarkTrades);
    }

    async persistFolders(bookmarkFolders) {
      return this.storage.setValue(FOLDERS_KEY, bookmarkFolders);
    }

    async deleteFolder(folderId) {
      const folders = await this.fetchFolders();
      const updatedFolders = folders.filter(folder => {
        return folder.id !== folderId;
      });
      await this.persistFolders(updatedFolders);
      return this.storage.deleteValue(`${TRADES_PREFIX_KEY}--${folderId}`);
    }

    async deleteTrade(tradeId, folderId) {
      const trades = await this.fetchTradesByFolderId(folderId);
      const updatedTrades = trades.filter(trade => {
        return trade.id !== tradeId;
      });
      return this.persistTrades(updatedTrades, folderId);
    }

    migrateOldTrade(trade) {
      if (!trade.location.version) {
        trade.location.version = '1';
      }

      return trade;
    }

    migrateOldFolder(folder) {
      const baseFolder = this.bookmarks.initializeFolderStruct(folder.version ?? '1');
      return _extends({}, baseFolder, folder);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "bookmarks", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "storage", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = BookmarksStorage;
});

;define("better-trading/services/extension-background", ["exports", "better-trading/utilities/extension-api"], function (_exports, _extensionApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // Utilities
  class ExtensionBackground extends Ember.Service {
    // eslint-disable-next-line @typescript-eslint/require-await
    async fetchPoeNinjaResource(resource) {
      return new Promise((resolve, reject) => {
        (0, _extensionApi.extensionApi)().runtime.sendMessage({
          query: 'poe-ninja',
          resource
        }, payload => {
          return payload ? resolve(payload) : reject(null);
        });
      });
    }

  }

  _exports.default = ExtensionBackground;
});

;define("better-trading/services/flash-messages", ["exports", "ember-cli-flash/services/flash-messages"], function (_exports, _flashMessages) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _flashMessages.default;
    }
  });
});

;define("better-trading/services/intl", ["exports", "ember-intl/services/intl"], function (_exports, _intl) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _intl.default;
    }
  });
});

;define("better-trading/services/item-results", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  // Constants
  const DISABLED_ENHANCERS_STORAGE_KEY = 'disabled-enhancers';
  let ItemResults = (_dec = Ember.inject.service('storage'), _dec2 = Ember.inject.service('item-results/enhance'), _dec3 = Ember.inject.service('item-results/item-element'), _dec4 = Ember.inject.service('item-results/enhancers/pinnable'), _dec5 = Ember._tracked, (_class = (_temp = class ItemResults extends Ember.Service.extend(Ember.Evented) {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "storage", _descriptor, this);

      _initializerDefineProperty(this, "enhance", _descriptor2, this);

      _initializerDefineProperty(this, "itemElement", _descriptor3, this);

      _initializerDefineProperty(this, "pinnableEnhancer", _descriptor4, this);

      _initializerDefineProperty(this, "disabledEnhancerSlugs", _descriptor5, this);
    }

    async initialize() {
      await this.enhance.initialize();
    }

    getEnhancerSlugs() {
      return this.enhance.getEnhancerSlugs();
    }

    setDisabledEnhancerSlugs(disabledEnhancerSlugs) {
      this.storage.setLocalValue(DISABLED_ENHANCERS_STORAGE_KEY, disabledEnhancerSlugs.join(','));
      this.disabledEnhancerSlugs = disabledEnhancerSlugs;
    }

    clearPinnedItems() {
      return this.pinnableEnhancer.clear();
    }

    unpinItemById(itemId) {
      return this.pinnableEnhancer.unpinItemById(itemId);
    }

    getPinnedItems() {
      return this.pinnableEnhancer.getPinnedItems();
    }

    parseItemElement(itemElement) {
      return this.itemElement.parseElement(itemElement);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "storage", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "enhance", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "itemElement", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "pinnableEnhancer", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "disabledEnhancerSlugs", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return (this.storage.getLocalValue(DISABLED_ENHANCERS_STORAGE_KEY) || '').split(',').filter(Boolean);
    }
  })), _class));
  _exports.default = ItemResults;
});

;define("better-trading/services/item-results/enhance", ["exports", "ember-concurrency-decorators", "ember-window-mock", "better-trading/utilities/async-loop"], function (_exports, _emberConcurrencyDecorators, _emberWindowMock, _asyncLoop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ItemResultsEnhance = (_dec = Ember.inject.service('item-results'), (_class = (_temp = class ItemResultsEnhance extends Ember.Service {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "itemResults", _descriptor, this);

      _defineProperty(this, "resultsObserver", void 0);

      _defineProperty(this, "enhancerServices", []);
    }

    *enhanceTask() {
      const itemElementsCount = _emberWindowMock.default.document.querySelectorAll('.resultset > div.row').length;

      const unenhancedElements = Array.prototype.slice.call(_emberWindowMock.default.document.querySelectorAll('.resultset > div.row[data-id]:not([bt-enhanced])'));

      if (unenhancedElements.length) {
        yield this.enhanceItems(unenhancedElements);
      } else if (itemElementsCount === 0) {
        yield this.clearEnhancedItems();
      }
    }

    getEnhancerSlugs() {
      return this.enhancerServices.map(enhancerService => enhancerService.slug || '').filter(Boolean);
    }

    async initialize() {
      const tradeAppElement = _emberWindowMock.default.document.getElementById('trade');

      if (!tradeAppElement || !tradeAppElement.parentElement) return;
      this.resultsObserver = new MutationObserver(() => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.enhanceTask.perform();
      });
      this.resultsObserver.observe(tradeAppElement.parentElement, {
        childList: true,
        subtree: true
      });
      await (0, _asyncLoop.asyncLoop)(this.enhancerServices, enhancer => enhancer.initialize && enhancer.initialize());
    }

    registerEnhancerService(enhancerService) {
      this.enhancerServices.push(enhancerService);
    }

    async enhanceItems(unenhancedElements) {
      if (unenhancedElements.length === 0) return;
      if (unenhancedElements[0].classList.contains('exchange')) return;
      await (0, _asyncLoop.asyncLoop)(this.enhancerServices, enhancer => {
        if (enhancer.slug && this.itemResults.disabledEnhancerSlugs.includes(enhancer.slug)) return;
        if (!enhancer.prepare) return;
        return enhancer.prepare();
      });
      await (0, _asyncLoop.asyncLoop)(unenhancedElements, async unenhancedElement => {
        const parsedItem = this.itemResults.parseItemElement(unenhancedElement);
        await (0, _asyncLoop.asyncLoop)(this.enhancerServices, enhancer => {
          if (enhancer.slug && this.itemResults.disabledEnhancerSlugs.includes(enhancer.slug)) return;
          return enhancer.enhance(unenhancedElement, parsedItem);
        });
        unenhancedElement.toggleAttribute('bt-enhanced', true);
      });
    }

    async clearEnhancedItems() {
      await (0, _asyncLoop.asyncLoop)(this.enhancerServices, enhancer => enhancer.clear && enhancer.clear());
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "itemResults", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "enhanceTask", [_emberConcurrencyDecorators.enqueueTask], Object.getOwnPropertyDescriptor(_class.prototype, "enhanceTask"), _class.prototype)), _class));
  _exports.default = ItemResultsEnhance;
});

;define("better-trading/services/item-results/enhancers/equivalent-pricings", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor, _descriptor2, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  // Constants
  const CHAOS_IMAGE_URL = 'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollRare.png';
  const CHAOS_ALT = 'chaos';
  const CHAOS_SLUG = 'chaos-orb';
  const NORMALIZED_CURRENCY_IMAGE_URL = 'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyModValues.png';
  const NORMALIZED_CURRENCY_ALT = 'divine';
  const NORMALIZED_CURRENCY_SLUG = 'divine-orb';
  const NORMALIZED_CURRENCY_EQUIVALENCE_THRESHOLD = 0.5;
  const EQUAL_HTML = '<span class="bt-equivalent-pricings-equals">=</span>';
  let EquivalentPricings = (_dec = Ember.inject.service('poe-ninja'), _dec2 = Ember.inject.service('trade-location'), (_class = (_temp = class EquivalentPricings extends Ember.Service {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "poeNinja", _descriptor, this);

      _initializerDefineProperty(this, "tradeLocation", _descriptor2, this);

      _defineProperty(this, "slug", 'equivalent-pricings');

      _defineProperty(this, "chaosRatios", void 0);
    }

    async prepare() {
      const currentLeague = this.tradeLocation.league;
      const supportedVersion = this.tradeLocation.version === '1';
      this.chaosRatios = supportedVersion && currentLeague ? await this.poeNinja.fetchChaosRatiosFor(currentLeague) : null;
    } // eslint-disable-next-line complexity


    enhance(itemElement, {
      price
    }) {
      if (!this.chaosRatios) return;
      const pricingContainerElement = itemElement.querySelector('.price');
      const currencyImageElement = itemElement.querySelector('[data-field="price"] .currency-image img');
      if (!pricingContainerElement || !currencyImageElement || !price.currencySlug || !price.value) return;
      const currencySlug = price.currencySlug;
      const currencyValue = price.value;
      const chaosValue = this.chaosRatios[currencySlug];
      const normalizedCurrencyValue = this.chaosRatios[NORMALIZED_CURRENCY_SLUG];

      if (chaosValue && currencyValue) {
        this.handleNonChaosPricedItem(pricingContainerElement, currencyImageElement, currencyValue, chaosValue);
      } else if (currencySlug === CHAOS_SLUG && normalizedCurrencyValue) {
        this.handleChaosPricedItem(pricingContainerElement, currencyValue, normalizedCurrencyValue);
      }
    }

    handleNonChaosPricedItem(pricingContainerElement, currencyImageElement, currencyValue, chaosValue) {
      const chaosEquivalentValue = Math.round(currencyValue * chaosValue);
      if (!chaosEquivalentValue) return;
      pricingContainerElement.append(this.renderChaosEquivalence(chaosEquivalentValue));
      const flooredCurrencyValue = Math.floor(currencyValue);
      if (flooredCurrencyValue === 0 || chaosValue < 1 || flooredCurrencyValue === currencyValue) return;
      const chaosFractionValue = Math.round((currencyValue - flooredCurrencyValue) * chaosValue);
      pricingContainerElement.append(this.renderChaosFraction(flooredCurrencyValue, currencyImageElement.src, currencyImageElement.alt, chaosFractionValue));
    }

    handleChaosPricedItem(pricingContainerElement, currencyValue, normalizedCurrencyValue) {
      if (currencyValue < NORMALIZED_CURRENCY_EQUIVALENCE_THRESHOLD * normalizedCurrencyValue) return; // eslint-disable-next-line no-magic-numbers

      const roundNormalizedCurrencyValue = Math.round(currencyValue / normalizedCurrencyValue * 10) / 10;
      pricingContainerElement.append(this.renderNormalizedCurrencyEquivalence(roundNormalizedCurrencyValue));
    }

    renderChaosEquivalence(chaosEquivalentValue) {
      const element = window.document.createElement('span');
      element.classList.add('bt-equivalent-pricings');
      element.classList.add('bt-equivalent-pricings-equivalent');
      element.innerHTML = `<span>${EQUAL_HTML}${chaosEquivalentValue}×<img src="${CHAOS_IMAGE_URL}" alt="${CHAOS_ALT}" /></span>`;
      return element;
    }

    renderChaosFraction(flooredCurrencyValue, currencyIconUrl, currencyIconAlt, chaosFractionValue) {
      const element = window.document.createElement('span');
      element.classList.add('bt-equivalent-pricings');
      element.classList.add('bt-equivalent-pricings-chaos-fraction');
      const flooredPart = `${flooredCurrencyValue}×<img src="${currencyIconUrl}" alt="${currencyIconAlt}" />`;
      const fractionPart = `+${chaosFractionValue}×<img src="${CHAOS_IMAGE_URL}" alt="${CHAOS_ALT}" />`;
      element.innerHTML = `<span>${EQUAL_HTML}${flooredPart}${fractionPart}</span>`;
      return element;
    }

    renderNormalizedCurrencyEquivalence(normalizedCurrencyValue) {
      const element = window.document.createElement('span');
      element.classList.add('bt-equivalent-pricings');
      element.classList.add('bt-equivalent-pricings-equivalent');
      element.innerHTML = `<span>${EQUAL_HTML}${normalizedCurrencyValue}×<img src="${NORMALIZED_CURRENCY_IMAGE_URL}" alt="${NORMALIZED_CURRENCY_ALT}" /></span>`;
      return element;
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "poeNinja", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "tradeLocation", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = EquivalentPricings;
});

;define("better-trading/services/item-results/enhancers/highlight-stat-filters", ["exports", "better-trading/utilities/escape-regex"], function (_exports, _escapeRegex) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  // Constants
  const MODS_SELECTOR = '.explicitMod,.pseudoMod,.implicitMod';
  let HighlightStatFilters = (_dec = Ember.inject.service('search-panel'), (_class = (_temp = class HighlightStatFilters extends Ember.Service {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "searchPanel", _descriptor, this);

      _defineProperty(this, "slug", 'highlight-stat-filters');

      _defineProperty(this, "statNeedles", void 0);
    }

    prepare() {
      const stats = this.searchPanel.getStats();
      this.statNeedles = stats.map(rawStat => {
        return new RegExp((0, _escapeRegex.escapeRegex)(rawStat).replace(/#/g, '[\\+\\-]?\\d+'), 'i');
      });
    }

    enhance(itemElement) {
      itemElement.querySelectorAll(MODS_SELECTOR).forEach(modElement => {
        const modText = modElement.textContent || '';
        if (!this.statNeedles.some(needle => needle.test(modText))) return;
        modElement.classList.add('bt-highlight-stat-filters');
      });
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "searchPanel", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = HighlightStatFilters;
});

;define("better-trading/services/item-results/enhancers/maximum-sockets", ["exports", "better-trading/types/item-results"], function (_exports, _itemResults) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor, _descriptor2, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  // Constants
  const ILVL_THRESHOLDS = [{
    maxSockets: 2,
    ilvl: 1
  }, {
    maxSockets: 3,
    ilvl: 24
  }, {
    maxSockets: 4,
    ilvl: 34
  }, {
    maxSockets: 5,
    ilvl: 49
  }];
  let MaximumSockets = (_dec = Ember.inject.service('intl'), _dec2 = Ember.inject.service('trade-location'), (_class = (_temp = class MaximumSockets extends Ember.Service {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "intl", _descriptor, this);

      _initializerDefineProperty(this, "tradeLocation", _descriptor2, this);

      _defineProperty(this, "slug", 'maximum-sockets');

      _defineProperty(this, "statNeedles", void 0);
    }

    // eslint-disable-next-line complexity
    enhance(itemElement, {
      socketsCount,
      type,
      ilvl
    }) {
      if (this.tradeLocation.version !== '1') return;
      const itemFrameElement = itemElement.querySelector('.itemRendered');
      if (!itemFrameElement || !ilvl || socketsCount === 0 || type !== _itemResults.ItemResultsType.ARMOR) return;
      const applicableThreshold = ILVL_THRESHOLDS.find(threshold => ilvl <= threshold.ilvl);
      if (!applicableThreshold) return;
      if (applicableThreshold.maxSockets <= socketsCount) return;
      itemFrameElement.prepend(this.renderWarning(applicableThreshold.maxSockets));
    }

    renderWarning(maximumSockets) {
      const warningElement = window.document.createElement('div');
      warningElement.textContent = this.intl.t('item-results.maximum-sockets.warning', {
        maximum: maximumSockets
      });
      warningElement.classList.add('bt-maximum-sockets');
      return warningElement;
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "intl", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "tradeLocation", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = MaximumSockets;
});

;define("better-trading/services/item-results/enhancers/pinnable", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2, _descriptor3, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let Pinnable = (_dec = Ember.inject.service('item-results'), _dec2 = Ember.inject.service('intl'), _dec3 = Ember.inject.service('flash-messages'), (_class = (_temp = class Pinnable extends Ember.Service {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "itemResults", _descriptor, this);

      _initializerDefineProperty(this, "intl", _descriptor2, this);

      _initializerDefineProperty(this, "flashMessages", _descriptor3, this);

      _defineProperty(this, "pinnedItems", {});
    }

    enhance(itemElement) {
      const detailsElement = itemElement.querySelector('.details .btns');
      if (!detailsElement) return;
      detailsElement.appendChild(this.renderPinButton());
    }

    getPinnedItems() {
      return Object.values(this.pinnedItems);
    }

    clear() {
      if (Object.keys(this.pinnedItems).length === 0) return;
      this.pinnedItems = {};
      this.hasChanged();
    }

    unpinItemById(itemId) {
      delete this.pinnedItems[itemId];
      this.hasChanged();
    } // eslint-disable-next-line complexity


    handlePinClick(event) {
      if (!event.target) return;
      const itemElement = event.target.closest('[bt-enhanced]');
      const itemId = itemElement.dataset.id;
      if (!itemElement || !itemId) return;

      if (this.pinnedItems[itemId]) {
        delete this.pinnedItems[itemId];
      } else {
        const pinnedItem = this.createPinnedItem(itemId, itemElement);

        if (pinnedItem) {
          this.pinnedItems[itemId] = pinnedItem;
        } else {
          this.flashMessages.alert(this.intl.t('general.generic-alert-flash'));
        }
      }

      this.hasChanged();
    }

    renderPinButton() {
      const element = window.document.createElement('button'); // standard button styles from pathofexile.com

      element.classList.add('btn');
      element.classList.add('btn-default'); // our style overrides

      element.classList.add('bt-pin-button');
      element.innerHTML = `
      <span class="bt-pin-button-unpinned">
        ${this.intl.t('item-results.pinnable.pin')}
      </span>
      <span class="bt-pin-button-pinned">
        ${this.intl.t('item-results.pinnable.unpin')}
      </span>
    `;
      element.addEventListener('click', this.handlePinClick.bind(this)); // for consistency with sibling button layouts/styling

      const wrapper = window.document.createElement('span');
      wrapper.appendChild(element);
      return wrapper;
    }

    createPinnedItem(id, result) {
      const detailsElement = result.querySelector('.middle');
      const renderedItemElement = result.querySelector('.itemRendered');
      const pricingElement = result.querySelector('.details .price');
      if (!detailsElement || !renderedItemElement || !pricingElement) return null;
      return {
        id,
        detailsElement: detailsElement.cloneNode(true),
        renderedItemElement: renderedItemElement.cloneNode(true),
        pricingElement: pricingElement.cloneNode(true),
        pinnedAt: new Date().toISOString()
      };
    }

    updatePinnedCSS() {
      const pinnedIds = Object.keys(this.pinnedItems);
      window.document.querySelectorAll('[bt-enhanced]').forEach(itemResult => {
        if (!itemResult.dataset.id) return;
        itemResult.classList.toggle('bt-pinned', pinnedIds.includes(itemResult.dataset.id));
      });
    }

    hasChanged() {
      this.updatePinnedCSS();
      this.itemResults.trigger('pinned-items-change');
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "itemResults", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "intl", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "flashMessages", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = Pinnable;
});

;define("better-trading/services/item-results/enhancers/regroup-similars", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let RegroupSimilars = (_dec = Ember.inject.service('intl'), (_class = (_temp = class RegroupSimilars extends Ember.Service {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "intl", _descriptor, this);

      _defineProperty(this, "slug", 'regroup-similars');
    }

    enhance(itemElement) {
      const currentHash = this.setItemHash(itemElement);
      const originalResult = this.findOriginalResult(itemElement, currentHash);
      if (originalResult.dataset.id === itemElement.dataset.id) return;
      const buttonState = this.updateToggleButtonFor(originalResult);
      itemElement.setAttribute('bt-regroup-state', buttonState);
    }

    findOriginalResult(result, currentHash) {
      const previousResult = result.previousElementSibling;
      if (!previousResult) return result;
      const previousHash = previousResult.getAttribute('bt-regroup-hash');
      if (previousHash !== currentHash) return result;
      return this.findOriginalResult(previousResult, currentHash);
    }

    setItemHash(result) {
      const seller = result.querySelector('.profile-link [href]')?.getAttribute('href')?.replace(/^\/account\/view-profile\//, '');
      const itemName = result.querySelector('.itemHeader')?.textContent?.replace(/superior/i, '');
      const price = result.querySelector('.price')?.textContent;
      const hash = btoa(encodeURIComponent([seller, itemName, price].filter(Boolean).join('').replace(/\s/g, '').toLowerCase()));
      result.setAttribute('bt-regroup-hash', hash);
      return hash;
    }

    injectToggleButton(result) {
      const button = document.createElement('button'); // standard button styles from pathofexile.com

      button.classList.add('btn');
      button.classList.add('btn-default'); // our style overrides

      button.classList.add('bt-group-button');
      button.dataset.state = 'hidden';
      button.addEventListener('click', this.handleToggleClick.bind(this)); // for consistency with sibling button layouts/styling

      const wrapper = window.document.createElement('span');
      wrapper.appendChild(button);
      const detailsElement = result.querySelector('.details .btns');
      detailsElement?.appendChild(button);
      return button;
    }

    updateToggleButtonFor(result) {
      let buttonElement = result.querySelector('.bt-group-button');

      if (!buttonElement) {
        buttonElement = this.injectToggleButton(result);
      }

      const currentCount = buttonElement.dataset.count;
      const newCount = currentCount ? parseInt(currentCount, 10) + 1 : 1;
      buttonElement.dataset.count = newCount.toString();
      buttonElement.innerText = this.intl.t('item-results.regroup-similars.button', {
        count: newCount
      });
      return buttonElement.dataset.state;
    }

    handleToggleClick(event) {
      const buttonElement = event.target;
      const resultElement = buttonElement.closest('[bt-enhanced]');
      const newState = buttonElement.dataset.state === 'hidden' ? 'visible' : 'hidden';
      buttonElement.dataset.state = newState;
      return this.toggleSimilarResult(resultElement, newState, resultElement.getAttribute('bt-regroup-hash'));
    }

    toggleSimilarResult(result, state, hash) {
      const nextResult = result.nextElementSibling;
      if (!nextResult || nextResult.getAttribute('bt-regroup-hash') !== hash) return;
      nextResult.setAttribute('bt-regroup-state', state);
      this.toggleSimilarResult(nextResult, state, hash);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "intl", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = RegroupSimilars;
});

;define("better-trading/services/item-results/item-element", ["exports", "better-trading/utilities/slugify", "better-trading/types/item-results"], function (_exports, _slugify, _itemResults) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // Utilities
  // Types
  class ItemElement extends Ember.Service {
    parseElement(itemElement) {
      return {
        price: {
          currencySlug: this.priceCurrencySlug(itemElement),
          value: this.priceCurrencyValue(itemElement)
        },
        socketsCount: this.socketsCount(itemElement),
        type: this.type(itemElement),
        ilvl: this.ilvl(itemElement),
        seller: {
          accountName: this.sellerAccountName(itemElement),
          characterName: this.sellerCharacterName(itemElement)
        }
      };
    }

    priceCurrencySlug(itemElement) {
      const currencyNameElement = itemElement.querySelector('[data-field="price"] .currency-text span');
      if (!currencyNameElement || !currencyNameElement.textContent) return null;
      return (0, _slugify.slugify)(currencyNameElement.textContent);
    }

    priceCurrencyValue(itemElement) {
      const currencyValueElement = itemElement.querySelector('[data-field="price"] > br + span');
      if (!currencyValueElement || !currencyValueElement.textContent) return null;
      return parseFloat(currencyValueElement.textContent);
    }

    socketsCount(itemElement) {
      return itemElement.querySelectorAll('.sockets .socket').length || 0;
    } // eslint-disable-next-line complexity


    type(itemElement) {
      const iconElement = itemElement.querySelector('.icon img');
      if (!iconElement) return _itemResults.ItemResultsType.UNKNOWN;
      const iconSrc = iconElement.src;
      if (/\/BodyArmours\//.test(iconSrc)) return _itemResults.ItemResultsType.ARMOR;
      if (/\/Helmets\//.test(iconSrc)) return _itemResults.ItemResultsType.HELMET;
      if (/\/Gloves\//.test(iconSrc)) return _itemResults.ItemResultsType.GLOVE;
      if (/\/Boots\//.test(iconSrc)) return _itemResults.ItemResultsType.BOOT;
      if (/\/Belts\//.test(iconSrc)) return _itemResults.ItemResultsType.BELT;
      if (/\/Amulets\//.test(iconSrc)) return _itemResults.ItemResultsType.AMULET;
      if (/\/Rings\//.test(iconSrc)) return _itemResults.ItemResultsType.RING;
      if (/\/Shields\//.test(iconSrc)) return _itemResults.ItemResultsType.SHIELD;
      if (/\/OneHandWeapons\//.test(iconSrc)) return _itemResults.ItemResultsType.ONE_HAND_WEAPON;
      if (/\/TwoHandWeapons\//.test(iconSrc)) return _itemResults.ItemResultsType.TWO_HAND_WEAPON;
      return _itemResults.ItemResultsType.UNKNOWN;
    }

    ilvl(itemElement) {
      const ilvlElement = itemElement.querySelector('.itemLevel');
      const ilvlMatch = ilvlElement?.textContent?.match(/(\d+)/);
      if (!ilvlMatch) return null;
      return parseInt(ilvlMatch[0], 10);
    }

    sellerAccountName(itemElement) {
      const pmButtonElement = itemElement.querySelector('a.pm-btn');
      if (!pmButtonElement) return null;
      const match = pmButtonElement.href.match(/compose\?to=(.+)$/);
      if (!match) return null;
      const [, accountName] = match;
      return accountName;
    }

    sellerCharacterName(itemElement) {
      const characterNameElement = itemElement.querySelector('.character-name');
      if (!characterNameElement) return null;
      const match = (characterNameElement?.textContent || '').match(/IGN: (.+)/);
      if (!match) return null;
      const [, characterName] = match;
      return characterName;
    }

  }

  _exports.default = ItemElement;
});

;define("better-trading/services/modal-dialog", ["exports", "better-trading/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function computedFromConfig(prop) {
    return Ember.computed(function () {
      return _environment.default['ember-modal-dialog'] && _environment.default['ember-modal-dialog'][prop];
    });
  }

  var _default = Ember.Service.extend({
    hasEmberTether: computedFromConfig('hasEmberTether'),
    hasLiquidWormhole: computedFromConfig('hasLiquidWormhole'),
    hasLiquidTether: computedFromConfig('hasLiquidTether'),
    destinationElementId: null // injected by initializer

  });

  _exports.default = _default;
});

;define("better-trading/services/page-title", ["exports", "lodash"], function (_exports, _lodash) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2, _descriptor3, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const TITLE_MUTATION_THROTTLE_SPACING_MS = 100;
  const WOOP_PREFIX_REGEX = /^\((\d+)\) /;
  let PageTitle = (_dec = Ember.inject.service('bookmarks'), _dec2 = Ember.inject.service('trade-location'), _dec3 = Ember.inject.service('search-panel'), (_class = (_temp = class PageTitle extends Ember.Service {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "bookmarks", _descriptor, this);

      _initializerDefineProperty(this, "tradeLocation", _descriptor2, this);

      _initializerDefineProperty(this, "searchPanel", _descriptor3, this);

      _defineProperty(this, "baseSiteTitle", '');

      _defineProperty(this, "lastWoopCount", null);

      _defineProperty(this, "title", null);

      _defineProperty(this, "titleMutationObserver", void 0);
    }

    async initialize() {
      const titleElement = document.querySelector('title');

      if (!titleElement) {
        return;
      }

      this.baseSiteTitle = document.title; // The observer is to counteract the trade site's native behavior of regularly
      // resetting the document title in response to various UI interactions.
      //
      // The throttling is to prevent infinite busy loops/sad tabs in the event that some
      // other extension/userscript happens to be trying to fight us to change the title.

      const throttledTitleMutationHandler = (0, _lodash.throttle)(() => this.onDocumentTitleMutation(), TITLE_MUTATION_THROTTLE_SPACING_MS, {
        leading: true,
        trailing: true
      });
      this.titleMutationObserver = new MutationObserver(throttledTitleMutationHandler);
      this.titleMutationObserver.observe(titleElement, {
        childList: true
      }); // It's okay for multiple floating recalculateTitle() promises to race each other

      this.bookmarks.on('change', () => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.recalculateTradeTitleSegment();
      });
      this.tradeLocation.on('change', () => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.recalculateTradeTitleSegment();
      });
      await this.recalculateTradeTitleSegment();
    }

    async recalculateTradeTitleSegment() {
      const currentLocation = this.tradeLocation.currentTradeLocation;
      const activeBookmark = await this.bookmarks.fetchTradeByLocation(currentLocation);
      let activeTradeTitle = '';
      if (activeBookmark) activeTradeTitle = activeBookmark.title;else if (currentLocation.type === 'search') activeTradeTitle = this.searchPanel.recommendTitle();
      const isLiveSegment = currentLocation.isLive ? '⚡ ' : '';
      const tradeTitleSegment = activeTradeTitle ? `${activeTradeTitle} - ` : '';
      this.title = `${isLiveSegment}${tradeTitleSegment}${this.baseSiteTitle}`;
      this.updateTitle();
    }

    updateTitle() {
      if (this.title === null) {
        return;
      }

      const woopPrefix = this.lastWoopCount !== null ? `(${this.lastWoopCount}) ` : '';
      const newTitle = woopPrefix + this.title;

      if (document.title !== newTitle) {
        document.title = newTitle;
      }
    } // null indicates "doesn't seem to have a woop count prefix"


    parseWoopCount(title) {
      const woopTitleMatch = WOOP_PREFIX_REGEX.exec(title);

      if (woopTitleMatch) {
        const parsedWoopCount = parseInt(woopTitleMatch[1], 10);
        return isNaN(parsedWoopCount) ? null : parsedWoopCount;
      }

      return null;
    }

    onDocumentTitleMutation() {
      this.lastWoopCount = this.parseWoopCount(document.title);
      this.updateTitle();
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "bookmarks", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "tradeLocation", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "searchPanel", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = PageTitle;
});

;define("better-trading/services/poe-ninja", ["exports", "better-trading/utilities/slugify", "better-trading/utilities/date-delta"], function (_exports, _slugify, _dateDelta) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor, _descriptor2, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  // Constants
  const CURRENCIES_RESOURCE_URI = '/data/currencyoverview?type=Currency';
  const RATIOS_CACHE_DURATION = 3600000; // 1 hour

  const RATIOS_CACHE_KEY = 'poe-ninja-chaos-ratios-cache';
  let PoeNinja = (_dec = Ember.inject.service('extension-background'), _dec2 = Ember.inject.service('storage'), (_class = (_temp = class PoeNinja extends Ember.Service {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "extensionBackground", _descriptor, this);

      _initializerDefineProperty(this, "storage", _descriptor2, this);
    }

    async fetchChaosRatiosFor(league) {
      const cachedRatios = await this.lookupCachedChaosRatiosFor(league);
      if (cachedRatios) return cachedRatios;
      const uri = `${CURRENCIES_RESOURCE_URI}&league=${league}`;
      const payload = await this.extensionBackground.fetchPoeNinjaResource(uri);
      const ratios = this.parseChaosRatios(payload);
      await this.cacheChaosRatiosFor(league, ratios);
      return ratios;
    }

    async lookupCachedChaosRatiosFor(league) {
      return this.storage.getValue(RATIOS_CACHE_KEY, league);
    }

    async cacheChaosRatiosFor(league, ratios) {
      return this.storage.setEphemeralValue(RATIOS_CACHE_KEY, ratios, (0, _dateDelta.dateDelta)(RATIOS_CACHE_DURATION), league);
    }

    parseChaosRatios(payload) {
      return payload.lines.reduce((acc, {
        currencyTypeName,
        chaosEquivalent
      }) => {
        acc[(0, _slugify.slugify)(currencyTypeName)] = chaosEquivalent;
        return acc;
      }, {});
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "extensionBackground", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "storage", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = PoeNinja;
});

;define("better-trading/services/search-panel", ["exports", "ember-window-mock"], function (_exports, _emberWindowMock) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  // Constants
  const NULL_RARITY = 'Any';
  const NULL_CATEGORY = 'Any'; // Selectors

  const SEARCH_INPUT_SELECTOR = '.search-panel .search-bar .search-left input';
  const CATEGORY_INPUT_SELECTOR = '.search-advanced-items .filter-group:nth-of-type(1) .filter-property:nth-of-type(1) input';
  const RARITY_INPUT_SELECTOR = '.search-advanced-items .filter-group:nth-of-type(1) .filter-property:nth-of-type(2) input';
  const STATS_SELECTOR = '.search-advanced-pane:last-child .filter-group-body .filter:not(.disabled) .filter-title';

  class SearchPanel extends Ember.Service {
    recommendTitle() {
      const name = this.getName();
      if (name) return name;
      const category = this.getCategory();
      const rarity = this.getRarity();
      if (!category) return '';
      if (!rarity) return category;
      return `${category} (${rarity})`;
    }

    getCategory() {
      return this._scrapeInputValue(CATEGORY_INPUT_SELECTOR, NULL_CATEGORY);
    }

    getName() {
      return this._scrapeInputValue(SEARCH_INPUT_SELECTOR);
    }

    getRarity() {
      return this._scrapeInputValue(RARITY_INPUT_SELECTOR, NULL_RARITY);
    }

    getStats() {
      const stats = [];

      _emberWindowMock.default.document.querySelectorAll(STATS_SELECTOR).forEach(item => {
        let stat = item.innerText;
        stat = stat.trim();
        stat = stat.toLowerCase();
        stat = stat.replace(/^pseudo /, '');
        stats.push(stat);
      });

      return stats;
    }

    _scrapeInputValue(selector, nullValue) {
      const input = _emberWindowMock.default.document.querySelector(selector);

      if (!input) return null;
      const value = input.value;
      if (!value) return null;
      if (nullValue && nullValue === value) return null;
      return value;
    }

  }

  _exports.default = SearchPanel;
});

;define("better-trading/services/storage", ["exports", "better-trading/utilities/extension-api", "ember-window-mock"], function (_exports, _extensionApi, _emberWindowMock) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  // Constants
  const PAST_LEAGUES = ['blight', 'metamorph', 'delirium'];

  class Storage extends Ember.Service {
    async initialize() {
      await this.cleanupPastLeagues();
    }

    setLocalValue(key, value, league = null) {
      _emberWindowMock.default.localStorage.setItem(`bt-${this.formatKey(key, league)}`, value);
    }

    getLocalValue(key, league = null) {
      return _emberWindowMock.default.localStorage.getItem(`bt-${this.formatKey(key, league)}`);
    }

    deleteLocalValue(key, league = null) {
      _emberWindowMock.default.localStorage.removeItem(`bt-${this.formatKey(key, league)}`);
    }

    async setValue(key, value, league = null) {
      return this.write(this.formatKey(key, league), {
        expiresAt: null,
        value
      });
    }

    async setEphemeralValue(key, value, expirationDate, league = null) {
      return this.write(this.formatKey(key, league), {
        expiresAt: expirationDate.toUTCString(),
        value
      });
    }

    async getValue(key, league = null) {
      const payload = await this.read(this.formatKey(key, league));
      if (!payload) return null;
      const {
        expiresAt,
        value
      } = payload;
      if (!expiresAt) return value;
      const expirationTimestamp = new Date(expiresAt).getTime();
      const currentTimestamp = new Date().getTime();
      if (currentTimestamp > expirationTimestamp) return null;
      return value;
    }

    async deleteValue(key, league = null) {
      return this.remove(this.formatKey(key, league));
    }

    formatKey(key, league) {
      let formattedKey = key;
      if (league) formattedKey += `--${league}`;
      return formattedKey.toLowerCase();
    }

    async cleanupPastLeagues() {
      const pastLeaguesRegex = new RegExp(`--(${PAST_LEAGUES.join('|')})$`);
      const storageKeys = await this.fetchAllKeys();
      await this.remove(storageKeys.filter(storageKey => pastLeaguesRegex.test(storageKey)));
    }

    async fetchAllKeys() {
      return new Promise((resolve, _reject) => {
        (0, _extensionApi.extensionApi)().storage.local.get(null, result => {
          resolve(Object.keys(result));
        });
      });
    }

    async read(key) {
      return new Promise((resolve, _reject) => {
        (0, _extensionApi.extensionApi)().storage.local.get([key], result => {
          if (result[key]) {
            resolve(result[key]);
          } else {
            resolve(null);
          }
        });
      });
    }

    async write(key, value) {
      return new Promise((resolve, _reject) => {
        (0, _extensionApi.extensionApi)().storage.local.set({
          [key]: value
        }, resolve);
      });
    }

    async remove(keys) {
      return new Promise((resolve, _reject) => {
        (0, _extensionApi.extensionApi)().storage.local.remove(keys, resolve);
      });
    }

  }

  _exports.default = Storage;
});

;define("better-trading/services/trade-location", ["exports", "ember-window-mock", "ember-concurrency-decorators", "ember-concurrency", "better-trading/config/environment"], function (_exports, _emberWindowMock, _emberConcurrencyDecorators, _emberConcurrency, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  // Constants
  const BASE_URL = 'https://www.pathofexile.com';
  let TradeLocation = (_dec = Ember.inject.service('trade-location/history'), (_class = (_temp = class TradeLocation extends Ember.Service.extend(Ember.Evented) {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "tradeLocationHistory", _descriptor, this);

      _defineProperty(this, "lastTradeLocation", this.currentTradeLocation);
    }

    get version() {
      return this.currentTradeLocation.version;
    }

    get type() {
      return this.currentTradeLocation.type;
    }

    get league() {
      return this.currentTradeLocation.league;
    }

    get slug() {
      return this.currentTradeLocation.slug;
    }

    get isLive() {
      return this.currentTradeLocation.isLive;
    }

    get currentTradeLocation() {
      return this.parseCurrentPath();
    }

    *locationPollingTask() {
      const currentTradeLocation = this.currentTradeLocation;

      if (!this.compareExactTradeLocations(this.lastTradeLocation, currentTradeLocation)) {
        const changeEvent = {
          oldTradeLocation: this.lastTradeLocation,
          newTradeLocation: currentTradeLocation
        };
        yield this.tradeLocationHistory.maybeLogTradeLocation(currentTradeLocation);
        this.trigger('change', changeEvent);
        this.lastTradeLocation = currentTradeLocation;
      }

      yield (0, _emberConcurrency.timeout)(_environment.default.APP.locationPollingIntervalInMilliseconds); // eslint-disable-next-line @typescript-eslint/no-floating-promises

      this.locationPollingTask.perform();
    }

    initialize() {
      _emberWindowMock.default.addEventListener('focus', this.startLocationPolling.bind(this));

      _emberWindowMock.default.addEventListener('blur', this.stopLocationPolling.bind(this));

      this.startLocationPolling();
    } // in non-PC realms, league should be of form "realm/LeagueName", eg "xbox/Legion"


    getTradeUrl(version, type, slug, league) {
      const basePath = version === '2' ? 'trade2' : 'trade';
      return [BASE_URL, basePath, type, league, slug].join('/');
    }

    compareTradeLocations(locationA, locationB) {
      return locationA.version === locationB.version && locationA.league === locationB.league && locationA.slug === locationB.slug && locationA.type === locationB.type;
    }

    compareExactTradeLocations(locationA, locationB) {
      return this.compareTradeLocations(locationA, locationB) && locationA.isLive === locationB.isLive;
    }

    async fetchHistoryEntries() {
      return this.tradeLocationHistory.fetchHistoryEntries();
    }

    async clearHistoryEntries() {
      return this.tradeLocationHistory.clearHistoryEntries();
    }

    parseVersion(tradePathPrefix) {
      return tradePathPrefix === 'trade2' ? '2' : '1';
    }

    parseCurrentPath() {
      const tradeRealms = ['xbox', 'sony', 'poe2'];

      const pathParts = _emberWindowMock.default.location.pathname.split('/').slice(1);

      let versionPart, type, league, slug, live;

      if (tradeRealms.includes(pathParts[2])) {
        let realm, leagueInRealm;
        [versionPart, type, realm, leagueInRealm, slug, live] = pathParts;
        league = `${realm}/${leagueInRealm}`;
      } else {
        [versionPart, type, league, slug, live] = pathParts;
      }

      return {
        version: this.parseVersion(versionPart),
        type: type || null,
        league: league || null,
        slug: slug || null,
        isLive: live === 'live'
      };
    }

    startLocationPolling() {
      if (!_emberWindowMock.default.document.hasFocus()) return; // eslint-disable-next-line @typescript-eslint/no-floating-promises

      this.locationPollingTask.perform();
    }

    stopLocationPolling() {
      this.locationPollingTask.cancelAll();
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "tradeLocationHistory", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "locationPollingTask", [_emberConcurrencyDecorators.restartableTask], Object.getOwnPropertyDescriptor(_class.prototype, "locationPollingTask"), _class.prototype)), _class));
  _exports.default = TradeLocation;
});

;define("better-trading/services/trade-location/history", ["exports", "better-trading/utilities/unique-id", "better-trading/config/environment"], function (_exports, _uniqueId, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2, _descriptor3, _temp;

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  // Constants
  const HISTORY_KEY = 'trade-history';
  let TradeLocationHistory = (_dec = Ember.inject.service('storage'), _dec2 = Ember.inject.service('trade-location'), _dec3 = Ember.inject.service('search-panel'), (_class = (_temp = class TradeLocationHistory extends Ember.Service {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "storage", _descriptor, this);

      _initializerDefineProperty(this, "tradeLocation", _descriptor2, this);

      _initializerDefineProperty(this, "searchPanel", _descriptor3, this);
    }

    // eslint-disable-next-line complexity
    async maybeLogTradeLocation(newTradeLocation) {
      if (!newTradeLocation.version || !newTradeLocation.league || !newTradeLocation.type || !newTradeLocation.slug) return;
      const historyEntries = await this.fetchHistoryEntries();
      const lastEntry = historyEntries[0];
      if (lastEntry && this.tradeLocation.compareTradeLocations(newTradeLocation, lastEntry)) return;
      historyEntries.unshift(_extends({}, newTradeLocation, {
        id: (0, _uniqueId.uniqueId)(),
        title: this.searchPanel.recommendTitle(),
        createdAt: new Date().toISOString()
      }));
      historyEntries.splice(_environment.default.APP.maximumHistoryLength);
      await this.storage.setValue(HISTORY_KEY, historyEntries);
    }

    migrateOldHistory(history) {
      if (!history.version) {
        history.version = '1';
      }

      return history;
    }

    async fetchHistoryEntries() {
      const history = await this.storage.getValue(HISTORY_KEY);
      if (!history) return [];
      return history.map(this.migrateOldHistory);
    }

    async clearHistoryEntries() {
      return this.storage.deleteValue(HISTORY_KEY);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "storage", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "tradeLocation", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "searchPanel", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = TradeLocationHistory;
});

;define("better-trading/translations/en", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "components": {
      "changelog-banner": {
        "dismiss-button": "Dismiss",
        "modal-button": "Changelog",
        "modal-title": "{version} changelog",
        "notice": "New version {version} is now installed."
      },
      "clipboard-textarea": {
        "button": "Copy to clipboard",
        "button-copied": "Copied"
      },
      "root-page-menu": {
        "bookmarks": "Bookmarks",
        "history": "History",
        "pinned-items": "Pinned items"
      }
    },
    "general": {
      "generic-alert-flash": "Oops! Something went wrong!",
      "title": "Better Trading"
    },
    "item-results": {
      "maximum-sockets": {
        "warning": "Max. {maximum} sockets"
      },
      "pinnable": {
        "pin": "Pin",
        "unpin": "Unpin"
      },
      "regroup-similars": {
        "button": "{count, plural, =0 {} =1 {1 similar result} other {# similar results}}"
      }
    },
    "page": {
      "about": {
        "credits": {
          "description": "Better Trading was originally created by <strong>InfaMc</strong> (<a href=\"https://github.com/pboutin\">@pboutin</a>) and is currently maintained by <strong>brosmike</strong> (<a href=\"https://github.com/dbjorge\">@dbjorge</a>).",
          "title": "Credits"
        },
        "disclaimer": "This extension is fan-made and not affiliated with Grinding Gear Games in any way.",
        "enhancers": {
          "equivalent-pricings": "Equivalent pricings (powered by poe.ninja)",
          "highlight-stat-filters": "Highlight searched mods",
          "maximum-sockets": "Warning for armors that cannot be 6-socketed",
          "regroup-similars": "Regroup similar results",
          "title": "Enabled item result enhancers"
        },
        "github": {
          "button": "View on GitHub",
          "description": "To contribute, report issues or simply browse the code.",
          "title": "On GitHub"
        }
      },
      "bookmarks": {
        "backup": {
          "generate-button": "Save file",
          "restore-button": "Restore from file",
          "restore-error-flash": "Backup restoration has failed.",
          "title": "Backup tools"
        },
        "collapse-all": "Collapse folders",
        "create-folder": "New folder",
        "create-folder-success-flash": "The folder \"{title}\" has been created.",
        "delete-folder-success-flash": "The folder \"{title}\" has been deleted.",
        "folder": {
          "archive-folder": "Archive",
          "complete-trade": "Mark as complete",
          "copy-trade-to-clipboard": "Copy URL to clipboard",
          "copy-trade-to-clipboard-success-flash": "Trade URL for \"{title}\" has been copied to the clipboard.",
          "create-trade": "Register current trade",
          "create-trade-success-flash": "The trade \"{title}\" has been created.",
          "delete-folder": "Delete",
          "delete-trade": "Delete",
          "delete-trade-success-flash": "The trade \"{title}\" has been deleted.",
          "edit-folder": "Edit",
          "edit-trade": "Edit",
          "export-folder": "Export/Share",
          "folder-deletion": {
            "cancel": "Cancel",
            "confirmation": "Delete the bookmarks folder <strong>{name}</strong> {tradesCount, plural, =0 {} =1 {and its <strong>single bookmark</strong> } other {and its <strong># bookmarks</strong> }}?",
            "delete": "Delete",
            "modal-title": "Confirm deletion"
          },
          "folder-export": {
            "close": "Close",
            "embed-code": "Embed code snippet",
            "embed-code-helper": "Code snippet that can be used to include the folder's preview into a website.",
            "export-code": "Export code",
            "export-code-helper": "This code can be used to restore a folder. It can be used for backup and sharing purposes.",
            "modal-title": "Bookmark folder export",
            "preview-url": "Preview page",
            "preview-url-button": "Open in a new tab"
          },
          "open-live-trade": "Live search",
          "persist-trade-location-success-flash": "The trade location for \"{title}\" has been updated.",
          "restore-folder": "Restore",
          "trade-deletion": {
            "cancel": "Cancel",
            "confirmation": "Delete the bookmark <strong>{name}</strong> ?",
            "delete": "Delete",
            "modal-title": "Confirm deletion"
          },
          "trade-edition": {
            "modal-title": "Bookmark trade",
            "save": "Save",
            "title-label": "Title"
          },
          "uncomplete-trade": "Unmark as complete",
          "update-trade-location": "Save active trade",
          "update-trade-success-flash": "The trade \"{title}\" has been updated."
        },
        "folder-edition": {
          "icon-label": "Icon",
          "modal-title": "Bookmark folder",
          "save": "Save",
          "title-label": "Title"
        },
        "folder-import": {
          "import-code": {
            "label": "Import code"
          },
          "invalid-code": "The entered code seems invalid, try another one.",
          "modal-title": "Import bookmark folder",
          "preview": "{name} {tradesCount, plural, =0 {} =1 {(1 bookmark)} other {(# bookmarks)}}",
          "save": "Save"
        },
        "folders-warning": "Having a lot of folders can slow down the website.<br>Backup unnecessary folders using the export feature, then delete them.",
        "import-folder": "Import folder",
        "import-folder-success-flash": "The folder \"{title}\" has been imported.",
        "show-archived-folders": "Show archive",
        "show-unarchived-folders": "Return to active folders",
        "update-folder-success-flash": "The folder \"{title}\" has been updated."
      },
      "history": {
        "clear": "Clear history",
        "clear-success-flash": "The search history has been cleared.",
        "empty": "The search history is currently empty."
      },
      "pinned-items": {
        "clear": "Clear pinned itmes",
        "empty": "Items can be pinned here by clicking the \"pin\" button near the \"whisper\" button.",
        "scroll-to-item": "Scroll to the item result",
        "unpin-item": "Unpin",
        "warning": "Items will remain pinned as long as they are within the current results. Changing the search or refreshing the results will reset the pins."
      }
    }
  };
  _exports.default = _default;
});

;define("better-trading/types/bookmarks", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.BookmarksFolderPoE2ItemIcon = _exports.BookmarksFolderPoE1ItemIcon = _exports.BookmarksFolderAscendancyPoE2HuntressIcon = _exports.BookmarksFolderAscendancyPoE2MonkIcon = _exports.BookmarksFolderAscendancyPoE2MercenaryIcon = _exports.BookmarksFolderAscendancyPoE2SorceressIcon = _exports.BookmarksFolderAscendancyPoE2RangerIcon = _exports.BookmarksFolderAscendancyPoE2WitchIcon = _exports.BookmarksFolderAscendancyPoE2WarriorIcon = _exports.BookmarksFolderAscendancyScionIcon = _exports.BookmarksFolderAscendancyTemplarIcon = _exports.BookmarksFolderAscendancyRangerIcon = _exports.BookmarksFolderAscendancyWitchIcon = _exports.BookmarksFolderAscendancyMarauderIcon = _exports.BookmarksFolderAscendancyShadowIcon = _exports.BookmarksFolderAscendancyDuelistIcon = void 0;
  let BookmarksFolderAscendancyDuelistIcon;
  _exports.BookmarksFolderAscendancyDuelistIcon = BookmarksFolderAscendancyDuelistIcon;

  (function (BookmarksFolderAscendancyDuelistIcon) {
    BookmarksFolderAscendancyDuelistIcon["SLAYER"] = "slayer";
    BookmarksFolderAscendancyDuelistIcon["GLADIATOR"] = "gladiator";
    BookmarksFolderAscendancyDuelistIcon["CHAMPION"] = "champion";
  })(BookmarksFolderAscendancyDuelistIcon || (_exports.BookmarksFolderAscendancyDuelistIcon = BookmarksFolderAscendancyDuelistIcon = {}));

  let BookmarksFolderAscendancyShadowIcon;
  _exports.BookmarksFolderAscendancyShadowIcon = BookmarksFolderAscendancyShadowIcon;

  (function (BookmarksFolderAscendancyShadowIcon) {
    BookmarksFolderAscendancyShadowIcon["ASSASSIN"] = "assassin";
    BookmarksFolderAscendancyShadowIcon["SABOTEUR"] = "saboteur";
    BookmarksFolderAscendancyShadowIcon["TRICKSTER"] = "trickster";
  })(BookmarksFolderAscendancyShadowIcon || (_exports.BookmarksFolderAscendancyShadowIcon = BookmarksFolderAscendancyShadowIcon = {}));

  let BookmarksFolderAscendancyMarauderIcon;
  _exports.BookmarksFolderAscendancyMarauderIcon = BookmarksFolderAscendancyMarauderIcon;

  (function (BookmarksFolderAscendancyMarauderIcon) {
    BookmarksFolderAscendancyMarauderIcon["JUGGERNAUT"] = "juggernaut";
    BookmarksFolderAscendancyMarauderIcon["BERSERKER"] = "berserker";
    BookmarksFolderAscendancyMarauderIcon["CHIEFTAIN"] = "chieftain";
  })(BookmarksFolderAscendancyMarauderIcon || (_exports.BookmarksFolderAscendancyMarauderIcon = BookmarksFolderAscendancyMarauderIcon = {}));

  let BookmarksFolderAscendancyWitchIcon;
  _exports.BookmarksFolderAscendancyWitchIcon = BookmarksFolderAscendancyWitchIcon;

  (function (BookmarksFolderAscendancyWitchIcon) {
    BookmarksFolderAscendancyWitchIcon["NECROMANCER"] = "necromancer";
    BookmarksFolderAscendancyWitchIcon["ELEMENTALIST"] = "elementalist";
    BookmarksFolderAscendancyWitchIcon["OCCULTIST"] = "occultist";
  })(BookmarksFolderAscendancyWitchIcon || (_exports.BookmarksFolderAscendancyWitchIcon = BookmarksFolderAscendancyWitchIcon = {}));

  let BookmarksFolderAscendancyRangerIcon;
  _exports.BookmarksFolderAscendancyRangerIcon = BookmarksFolderAscendancyRangerIcon;

  (function (BookmarksFolderAscendancyRangerIcon) {
    BookmarksFolderAscendancyRangerIcon["DEADEYE"] = "deadeye";
    BookmarksFolderAscendancyRangerIcon["RAIDER"] = "raider";
    BookmarksFolderAscendancyRangerIcon["PATHFINDER"] = "pathfinder";
  })(BookmarksFolderAscendancyRangerIcon || (_exports.BookmarksFolderAscendancyRangerIcon = BookmarksFolderAscendancyRangerIcon = {}));

  let BookmarksFolderAscendancyTemplarIcon;
  _exports.BookmarksFolderAscendancyTemplarIcon = BookmarksFolderAscendancyTemplarIcon;

  (function (BookmarksFolderAscendancyTemplarIcon) {
    BookmarksFolderAscendancyTemplarIcon["GUARDIAN"] = "guardian";
    BookmarksFolderAscendancyTemplarIcon["HIEROPHANT"] = "hierophant";
    BookmarksFolderAscendancyTemplarIcon["INQUISITOR"] = "inquisitor";
  })(BookmarksFolderAscendancyTemplarIcon || (_exports.BookmarksFolderAscendancyTemplarIcon = BookmarksFolderAscendancyTemplarIcon = {}));

  let BookmarksFolderAscendancyScionIcon;
  _exports.BookmarksFolderAscendancyScionIcon = BookmarksFolderAscendancyScionIcon;

  (function (BookmarksFolderAscendancyScionIcon) {
    BookmarksFolderAscendancyScionIcon["ASCENDANT"] = "ascendant";
  })(BookmarksFolderAscendancyScionIcon || (_exports.BookmarksFolderAscendancyScionIcon = BookmarksFolderAscendancyScionIcon = {}));

  let BookmarksFolderAscendancyPoE2WarriorIcon;
  _exports.BookmarksFolderAscendancyPoE2WarriorIcon = BookmarksFolderAscendancyPoE2WarriorIcon;

  (function (BookmarksFolderAscendancyPoE2WarriorIcon) {
    BookmarksFolderAscendancyPoE2WarriorIcon["TITAN"] = "poe2-titan";
    BookmarksFolderAscendancyPoE2WarriorIcon["WARBRINGER"] = "poe2-warbringer";
    BookmarksFolderAscendancyPoE2WarriorIcon["SMITH_OF_KITAVA"] = "poe2-smith-of-kitava";
  })(BookmarksFolderAscendancyPoE2WarriorIcon || (_exports.BookmarksFolderAscendancyPoE2WarriorIcon = BookmarksFolderAscendancyPoE2WarriorIcon = {}));

  let BookmarksFolderAscendancyPoE2WitchIcon;
  _exports.BookmarksFolderAscendancyPoE2WitchIcon = BookmarksFolderAscendancyPoE2WitchIcon;

  (function (BookmarksFolderAscendancyPoE2WitchIcon) {
    BookmarksFolderAscendancyPoE2WitchIcon["INFERNALIST"] = "poe2-infernalist";
    BookmarksFolderAscendancyPoE2WitchIcon["BLOOD_MAGE"] = "poe2-blood-mage";
    BookmarksFolderAscendancyPoE2WitchIcon["LICH"] = "poe2-lich";
  })(BookmarksFolderAscendancyPoE2WitchIcon || (_exports.BookmarksFolderAscendancyPoE2WitchIcon = BookmarksFolderAscendancyPoE2WitchIcon = {}));

  let BookmarksFolderAscendancyPoE2RangerIcon;
  _exports.BookmarksFolderAscendancyPoE2RangerIcon = BookmarksFolderAscendancyPoE2RangerIcon;

  (function (BookmarksFolderAscendancyPoE2RangerIcon) {
    BookmarksFolderAscendancyPoE2RangerIcon["DEADEYE"] = "poe2-deadeye";
    BookmarksFolderAscendancyPoE2RangerIcon["PATHFINDER"] = "poe2-pathfinder";
  })(BookmarksFolderAscendancyPoE2RangerIcon || (_exports.BookmarksFolderAscendancyPoE2RangerIcon = BookmarksFolderAscendancyPoE2RangerIcon = {}));

  let BookmarksFolderAscendancyPoE2SorceressIcon;
  _exports.BookmarksFolderAscendancyPoE2SorceressIcon = BookmarksFolderAscendancyPoE2SorceressIcon;

  (function (BookmarksFolderAscendancyPoE2SorceressIcon) {
    BookmarksFolderAscendancyPoE2SorceressIcon["CHRONOMANCER"] = "poe2-chronomancer";
    BookmarksFolderAscendancyPoE2SorceressIcon["STORMWEAVER"] = "poe2-stormweaver";
  })(BookmarksFolderAscendancyPoE2SorceressIcon || (_exports.BookmarksFolderAscendancyPoE2SorceressIcon = BookmarksFolderAscendancyPoE2SorceressIcon = {}));

  let BookmarksFolderAscendancyPoE2MercenaryIcon;
  _exports.BookmarksFolderAscendancyPoE2MercenaryIcon = BookmarksFolderAscendancyPoE2MercenaryIcon;

  (function (BookmarksFolderAscendancyPoE2MercenaryIcon) {
    BookmarksFolderAscendancyPoE2MercenaryIcon["WITCH_HUNTER"] = "poe2-witch-hunter";
    BookmarksFolderAscendancyPoE2MercenaryIcon["GEMLING_LEGIONNAIRE"] = "poe2-gemling-legionnaire";
    BookmarksFolderAscendancyPoE2MercenaryIcon["TACTICIAN"] = "poe2-tactician";
  })(BookmarksFolderAscendancyPoE2MercenaryIcon || (_exports.BookmarksFolderAscendancyPoE2MercenaryIcon = BookmarksFolderAscendancyPoE2MercenaryIcon = {}));

  let BookmarksFolderAscendancyPoE2MonkIcon;
  _exports.BookmarksFolderAscendancyPoE2MonkIcon = BookmarksFolderAscendancyPoE2MonkIcon;

  (function (BookmarksFolderAscendancyPoE2MonkIcon) {
    BookmarksFolderAscendancyPoE2MonkIcon["INVOKER"] = "poe2-invoker";
    BookmarksFolderAscendancyPoE2MonkIcon["ACOLYTE_OF_CHAYULA"] = "poe2-acolyte-of-chayula";
  })(BookmarksFolderAscendancyPoE2MonkIcon || (_exports.BookmarksFolderAscendancyPoE2MonkIcon = BookmarksFolderAscendancyPoE2MonkIcon = {}));

  let BookmarksFolderAscendancyPoE2HuntressIcon;
  _exports.BookmarksFolderAscendancyPoE2HuntressIcon = BookmarksFolderAscendancyPoE2HuntressIcon;

  (function (BookmarksFolderAscendancyPoE2HuntressIcon) {
    BookmarksFolderAscendancyPoE2HuntressIcon["RITUALIST"] = "poe2-ritualist";
    BookmarksFolderAscendancyPoE2HuntressIcon["AMAZON"] = "poe2-amazon";
  })(BookmarksFolderAscendancyPoE2HuntressIcon || (_exports.BookmarksFolderAscendancyPoE2HuntressIcon = BookmarksFolderAscendancyPoE2HuntressIcon = {}));

  let BookmarksFolderPoE1ItemIcon;
  _exports.BookmarksFolderPoE1ItemIcon = BookmarksFolderPoE1ItemIcon;

  (function (BookmarksFolderPoE1ItemIcon) {
    BookmarksFolderPoE1ItemIcon["ALCHEMY"] = "alchemy";
    BookmarksFolderPoE1ItemIcon["CHAOS"] = "chaos";
    BookmarksFolderPoE1ItemIcon["EXALT"] = "exalt";
    BookmarksFolderPoE1ItemIcon["DIVINE"] = "divine";
    BookmarksFolderPoE1ItemIcon["MIRROR"] = "mirror";
    BookmarksFolderPoE1ItemIcon["CARD"] = "card";
    BookmarksFolderPoE1ItemIcon["ESSENCE"] = "essence";
    BookmarksFolderPoE1ItemIcon["FOSSIL"] = "fossil";
    BookmarksFolderPoE1ItemIcon["MAP"] = "map";
    BookmarksFolderPoE1ItemIcon["SCARAB"] = "scarab";
  })(BookmarksFolderPoE1ItemIcon || (_exports.BookmarksFolderPoE1ItemIcon = BookmarksFolderPoE1ItemIcon = {}));

  let BookmarksFolderPoE2ItemIcon;
  _exports.BookmarksFolderPoE2ItemIcon = BookmarksFolderPoE2ItemIcon;

  (function (BookmarksFolderPoE2ItemIcon) {
    BookmarksFolderPoE2ItemIcon["ALCHEMY"] = "poe2-alchemy";
    BookmarksFolderPoE2ItemIcon["ANNUL"] = "poe2-annul";
    BookmarksFolderPoE2ItemIcon["ARTIFICER"] = "poe2-artificer";
    BookmarksFolderPoE2ItemIcon["AUGMENT"] = "poe2-augment";
    BookmarksFolderPoE2ItemIcon["CHANCE"] = "poe2-chance";
    BookmarksFolderPoE2ItemIcon["CHAOS"] = "poe2-chaos";
    BookmarksFolderPoE2ItemIcon["DIVINE"] = "poe2-divine";
    BookmarksFolderPoE2ItemIcon["ESSENCE"] = "poe2-essence";
    BookmarksFolderPoE2ItemIcon["EXALT"] = "poe2-exalt";
    BookmarksFolderPoE2ItemIcon["GEMCUTTER"] = "poe2-gemcutter";
    BookmarksFolderPoE2ItemIcon["GLASSBLOWER"] = "poe2-glassblower";
    BookmarksFolderPoE2ItemIcon["MIRROR"] = "poe2-mirror";
    BookmarksFolderPoE2ItemIcon["REGAL"] = "poe2-regal";
    BookmarksFolderPoE2ItemIcon["RUNE"] = "poe2-rune";
    BookmarksFolderPoE2ItemIcon["TRANSMUTE"] = "poe2-transmute";
    BookmarksFolderPoE2ItemIcon["VAAL"] = "poe2-vaal";
    BookmarksFolderPoE2ItemIcon["WAYSTONE"] = "poe2-waystone";
    BookmarksFolderPoE2ItemIcon["WISDOM"] = "poe2-wisdom";
  })(BookmarksFolderPoE2ItemIcon || (_exports.BookmarksFolderPoE2ItemIcon = BookmarksFolderPoE2ItemIcon = {}));
});

;define("better-trading/types/ember-concurrency", [], function () {
  "use strict";
});

;define("better-trading/types/item-results", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.ItemResultsType = void 0;
  let ItemResultsType;
  _exports.ItemResultsType = ItemResultsType;

  (function (ItemResultsType) {
    ItemResultsType["ARMOR"] = "armor";
    ItemResultsType["HELMET"] = "helmet";
    ItemResultsType["GLOVE"] = "glove";
    ItemResultsType["BOOT"] = "boot";
    ItemResultsType["BELT"] = "belt";
    ItemResultsType["AMULET"] = "amulet";
    ItemResultsType["RING"] = "ring";
    ItemResultsType["SHIELD"] = "shield";
    ItemResultsType["ONE_HAND_WEAPON"] = "one-hand-weapon";
    ItemResultsType["TWO_HAND_WEAPON"] = "two-hand-weapon";
    ItemResultsType["UNKNOWN"] = "unknown";
  })(ItemResultsType || (_exports.ItemResultsType = ItemResultsType = {}));
});

;define("better-trading/types/trade-location", [], function () {
  "use strict";
});

;define("better-trading/utilities/async-loop", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.asyncLoop = void 0;

  const asyncLoop = async (items, callback) => {
    for (const item of items) {
      await callback(item);
    }
  };

  _exports.asyncLoop = asyncLoop;
});

;define("better-trading/utilities/copy-to-clipboard", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.copyToClipboard = void 0;

  const copyToClipboard = text => {
    const dummyTextarea = window.document.createElement('textarea');
    dummyTextarea.value = text;
    dummyTextarea.style.opacity = '0';
    window.document.body.append(dummyTextarea);
    dummyTextarea.select();
    document.execCommand('copy');
    dummyTextarea.remove();
  };

  _exports.copyToClipboard = copyToClipboard;
});

;define("better-trading/utilities/date-delta", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.dateDelta = void 0;

  const dateDelta = deltaMs => {
    const currentTimestamp = new Date().getTime();
    return new Date(currentTimestamp + deltaMs);
  };

  _exports.dateDelta = dateDelta;
});

;define("better-trading/utilities/escape-regex", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.escapeRegex = void 0;

  // Source: https://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
  const escapeRegex = value => {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };

  _exports.escapeRegex = escapeRegex;
});

;define("better-trading/utilities/extension-api", ["exports", "better-trading/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.extensionApi = void 0;

  // Config
  const extensionApi = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    // eslint-disable-next-line no-undef
    return _environment.default.APP.browser === 'chrome' ? chrome : browser;
  };

  _exports.extensionApi = extensionApi;
});

;define("better-trading/utilities/slugify", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.slugify = void 0;

  const slugify = value => {
    return value.toLowerCase().replace(/ /g, '-').replace(/[^-\w]/g, '');
  };

  _exports.slugify = slugify;
});

;define("better-trading/utilities/unique-id", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.uniqueId = void 0;
  // Constants
  const RADIX = 36;

  const uniqueId = () => {
    return Math.random().toString(RADIX).substring(2) + Date.now().toString(RADIX);
  };

  _exports.uniqueId = uniqueId;
});

;define("better-trading/utils/intl/missing-message", ["exports", "ember-intl/utils/missing-message"], function (_exports, _missingMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _missingMessage.default;
    }
  });
});

;

;define('better-trading/config/environment', [], function() {
  
          var exports = {
            'default': {"modulePrefix":"better-trading","podModulePrefix":"better-trading/pods","environment":"development","locationType":"hash","rootURL":"/","EmberENV":{"LOG_VERSION":false,"EXTEND_PROTOTYPES":false,"FEATURES":{"EMBER_METAL_TRACKED_PROPERTIES":true},"_APPLICATION_TEMPLATE_WRAPPER":false,"_JQUERY_INTEGRATION":false,"_TEMPLATE_ONLY_GLIMMER_COMPONENTS":true},"APP":{"version":"1.9.4","changelog":{"markdown":"# Mercenaries Update 2\n\n## Bug fixes 🐛\n\n- Fixes bookmark drag-and-drop (thanks @keyos1 for debugging the issue!)\n- Adds missing PoE 2 ascendancy icons (Amazon, Lich, Ritualist, Smith of Kitava, Tactician)\n","slug":"1-9-2-mercenaries-2"},"imageResourcePrefix":"ember-build/assets/images","discordUrl":"http://discord.exile.center","tftDiscordUrl":"https://discord.gg/tftrove","githubUrl":"https://github.com/exile-center/better-trading","chaosRecipeOverlayUrl":"https://github.com/exile-center/chaos-recipe-overlay","browser":"chrome","locationPollingIntervalInMilliseconds":500,"maximumHistoryLength":50},"flashMessageDefaults":{"extendedTimeout":200,"timeout":4500,"types":["alert","success","warning"]},"fontawesome":{"icons":{"free-solid-svg-icons":["chevron-down","folder-plus","plus-square","save","trash-alt","check","times","info-circle","ellipsis-h","sort","compress-alt","angle-right","angle-left","link","clipboard","file-import","file-export","exclamation-circle","history","folder-open","circle-notch","check-circle","thumbtack","archive","undo"],"free-brands-svg-icons":["github","discord"]}},"contentSecurityPolicyHeader":"Content-Security-Policy-Report-Only","contentSecurityPolicy":{"default-src":["'none'"],"script-src":["'self'"],"font-src":["'self'"],"connect-src":["'self'"],"img-src":["'self'"],"style-src":["'self'"],"media-src":["'self'"]},"ember-modal-dialog":{},"ember-a11y-testing":{"componentOptions":{"turnAuditOff":true,"excludeAxeCore":true,"axeOptions":{"iframes":false,"reporter":"v2","resultTypes":["violations"],"rules":{"duplicate-id":{"enabled":false},"duplicate-id-active":{"enabled":false},"duplicate-id-aria":{"enabled":false}}}}}}
          };
          Object.defineProperty(exports, '__esModule', {value: true});
          return exports;
        
});

;
          if (!runningTests) {
            require("better-trading/app")["default"].create({"version":"1.9.4","changelog":{"markdown":"# Mercenaries Update 2\n\n## Bug fixes 🐛\n\n- Fixes bookmark drag-and-drop (thanks @keyos1 for debugging the issue!)\n- Adds missing PoE 2 ascendancy icons (Amazon, Lich, Ritualist, Smith of Kitava, Tactician)\n","slug":"1-9-2-mercenaries-2"},"imageResourcePrefix":"ember-build/assets/images","discordUrl":"http://discord.exile.center","tftDiscordUrl":"https://discord.gg/tftrove","githubUrl":"https://github.com/exile-center/better-trading","chaosRecipeOverlayUrl":"https://github.com/exile-center/chaos-recipe-overlay","browser":"chrome","locationPollingIntervalInMilliseconds":500,"maximumHistoryLength":50});
          }
        
//# sourceMappingURL=better-trading.map
