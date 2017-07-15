import test from 'ava'
import * as babel from 'babel-core'
import plugin from './src'

const transform = input => babel.transform(input, { plugins: [plugin] })

test('it works', t => {
  t.is(
    transform(`import styles from './index.styl'\nif (styles) console.log(styles)`).code,
    `import styles from './index.css';\nif (styles) console.log(styles);`
  )

  t.is(
    transform(`import 'bootstrap-stylus/bootstrap/buttons.styl';`).code,
    `import 'bootstrap-stylus/bootstrap/buttons.css';`
  )
})
