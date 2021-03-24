import {ExcelComponent} from '@core/ExcelComponent';
import {needToResize} from './table.function';
import {resizeHandler} from './table.resize';
import {createTable} from './table.template';
/* import {$} from '@core/dom' */

export class Table extends ExcelComponent {
  static className = 'table'

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown'],
    })
  }

  toHTML() {
    return createTable()
  }

  onMousedown(event) {
    if (needToResize(event)) {
      resizeHandler(this.$root, event)
    }
  }
}
