import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  static className = 'formula'

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click'],
    })
  }

  toHTML() {
    return `
      <div class="excel__formula formula">
        <div class="formula__info">
            fx
        </div>
        <div class="formula__input" contenteditable spellcheck="false">
        </div>
      </div>
    
    `
  }

  onInput(event) {
    console.log(this.$root)
    console.log('Formula onInput', event.target.textContent.trim())
  }

  onClick() {
    console.log('click')
  }
}