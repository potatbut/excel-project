import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from './table.template';

export class Table extends ExcelComponent {
  static className = 'table'

  toHTML() {
    return createTable()
  }
}

/* `
      <div class="row">

        <div class="row-info"></div>

        <div class="row-data">
            <div class="column">A</div>
            <div class="column">B</div>
            <div class="column">C</div>
        </div>

      </div>

      <div class="row">

          <div class="row-info">1</div>

          <div class="row-data">
              <div class="cell" contenteditable>fdg g</div>
              <div class="cell" contenteditable>1dffg</div>
              <div class="cell" contenteditable>dfgg</div>
          </div>

      </div>

      <div class="row">

          <div class="row-info">2</div>

          <div class="row-data">
              <div class="cell selected">fdg g</div>
              <div class="cell">1dffg</div>
              <div class="cell">dfgg</div>
          </div>

      </div>
    ` */