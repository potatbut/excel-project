import {ExcelComponent} from '@core/ExcelComponent';
import {resizeHandler, shouldResize} from './table.resize';
import {createTable} from './table.template';

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
    if (shouldResize) {
      resizeHandler(this.$root, event)
    }
  }
}
