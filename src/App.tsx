import { useState } from 'react'
import type { CSSProperties } from 'react'
import Button from './components/Button'
import './App.css'

const pageColors = ['#e8f3ff', '#fce8ef', '#e7f7ee', '#f3f4f6']
const textColors = ['#19324d', '#642d45', '#22543d', '#202536']
const buttonColors = ['#087e8b', '#e05d5d', '#7357d8', '#252a3a']

function nextColor(current: string, palette: string[]) {
  const nextIndex = (palette.indexOf(current) + 1) % palette.length
  return palette[nextIndex]
}

function App() {
  const [pageColor, setPageColor] = useState('#f3f4f6')
  const [textColor, setTextColor] = useState('#202536')
  const [buttonColor, setButtonColor] = useState('#252a3a')

  const buttonStyle: CSSProperties = { backgroundColor: buttonColor }

  return (
    <main className="app" style={{ backgroundColor: pageColor, color: textColor }}>
      <section className="color-panel" aria-labelledby="page-title">
        <p className="eyebrow">React · TypeScript · props</p>
        <h1 id="page-title">Кольори під контролем</h1>
        <p className="description">
          Натискайте кнопки, щоб змінювати фон сторінки, колір тексту або самої
          кнопки.
        </p>

        <div className="control-list">
          <div className="control-row">
            <div className="control-label">
              <strong>Колір сторінки</strong>
              <span>Змінює фон усієї сторінки</span>
            </div>
            <Button
              text="Змінити фон"
              type="button"
              onClick={() => setPageColor((color) => nextColor(color, pageColors))}
              style={buttonStyle}
            />
          </div>

          <div className="control-row">
            <div className="control-label">
              <strong>Колір тексту</strong>
              <span>Оновлює колір тексту сторінки</span>
            </div>
            <Button
              text="Змінити текст"
              type="button"
              onClick={() => setTextColor((color) => nextColor(color, textColors))}
              style={buttonStyle}
            />
          </div>

          <div className="control-row">
            <div className="control-label">
              <strong>Колір кнопок</strong>
              <span>Змінює колір усіх трьох кнопок</span>
            </div>
            <Button
              text="Змінити кнопки"
              type="button"
              onClick={() => setButtonColor((color) => nextColor(color, buttonColors))}
              style={buttonStyle}
            />
          </div>
        </div>

        <p className="color-value" aria-live="polite">
          Поточні кольори — фон: {pageColor} · текст: {textColor} · кнопки:{' '}
          {buttonColor}
        </p>
      </section>
    </main>
  )
}

export default App