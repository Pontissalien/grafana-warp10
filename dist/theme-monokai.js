'use strict';

System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      window.ace.define('ace/theme/monokai', ['require', 'exports', 'module', 'ace/lib/dom'], function (require, exports, module) {
        exports.isDark = true;
        exports.cssClass = 'ace-monokai';
        exports.cssText = '.ace-monokai .ace_gutter {\nbackground: #2F3129;\ncolor: #8F908A\n}\n.ace-monokai .ace_print-margin {\nwidth: 1px;\nbackground: #555651\n}\n.ace-monokai {\nbackground-color: #272822;\ncolor: #F8F8F2\n}\n.ace-monokai .ace_cursor {\ncolor: #F8F8F0\n}\n.ace-monokai .ace_marker-layer .ace_selection {\nbackground: #49483E\n}\n.ace-monokai.ace_multiselect .ace_selection.ace_start {\nbox-shadow: 0 0 3px 0px #272822;\n}\n.ace-monokai .ace_marker-layer .ace_step {\nbackground: rgb(102, 82, 0)\n}\n.ace-monokai .ace_marker-layer .ace_bracket {\nmargin: -1px 0 0 -1px;\nborder: 1px solid #49483E\n}\n.ace-monokai .ace_marker-layer .ace_active-line {\nbackground: #202020\n}\n.ace-monokai .ace_gutter-active-line {\nbackground-color: #272727\n}\n.ace-monokai .ace_marker-layer .ace_selected-word {\nborder: 1px solid #49483E\n}\n.ace-monokai .ace_invisible {\ncolor: #52524d\n}\n.ace-monokai .ace_entity.ace_name.ace_tag,\n.ace-monokai .ace_keyword,\n.ace-monokai .ace_meta.ace_tag,\n.ace-monokai .ace_storage {\ncolor: #F92672\n}\n.ace-monokai .ace_punctuation,\n.ace-monokai .ace_punctuation.ace_tag {\ncolor: #fff\n}\n.ace-monokai .ace_constant.ace_character,\n.ace-monokai .ace_constant.ace_language,\n.ace-monokai .ace_constant.ace_numeric,\n.ace-monokai .ace_constant.ace_other {\ncolor: #AE81FF\n}\n.ace-monokai .ace_invalid {\ncolor: #F8F8F0;\nbackground-color: #F92672\n}\n.ace-monokai .ace_invalid.ace_deprecated {\ncolor: #F8F8F0;\nbackground-color: #AE81FF\n}\n.ace-monokai .ace_support.ace_constant,\n.ace-monokai .ace_support.ace_function {\ncolor: #66D9EF\n}\n.ace-monokai .ace_fold {\nbackground-color: #A6E22E;\nborder-color: #F8F8F2\n}\n.ace-monokai .ace_storage.ace_type,\n.ace-monokai .ace_support.ace_class,\n.ace-monokai .ace_support.ace_type {\nfont-style: italic;\ncolor: #66D9EF\n}\n.ace-monokai .ace_entity.ace_name.ace_function,\n.ace-monokai .ace_entity.ace_other,\n.ace-monokai .ace_entity.ace_other.ace_attribute-name,\n.ace-monokai .ace_variable {\ncolor: #A6E22E\n}\n.ace-monokai .ace_variable.ace_parameter {\nfont-style: italic;\ncolor: #FD971F\n}\n.ace-monokai .ace_string {\ncolor: #E6DB74\n}\n.ace-monokai .ace_comment {\ncolor: #75715E\n}\n.ace-monokai .ace_indent-guide {\nbackground: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y\n}';

        var dom = require('../lib/dom');
        dom.importCssString(exports.cssText, exports.cssClass);
      });
    }
  };
});
//# sourceMappingURL=theme-monokai.js.map
