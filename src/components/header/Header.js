import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
  static className = 'header'

  toHTML() {
    return `
      <input type="text" class="header__title-input" value="Новая таблица">
      <div class="header__buttons">

        <div class="header__button">
          <span class="material-icons md-48">
            delete_sweep
          </span>
        </div>

        <div class="header__button">
          <span class="material-icons">
            cancel_presentation
            </span>
        </div>

      </div>
          `
  }
}
