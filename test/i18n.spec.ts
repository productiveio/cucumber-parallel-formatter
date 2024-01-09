import 'should'

import { run } from './exec'

describe('Internationalization', () => {
  it('logs French', async () => {
    const result = await run('fr.feature', {
      name: ['Nom du Scénario'],
    })
    result.should.startWith(
      'Fonctionnalité: Nom de la Fonctionnalité # test/features/fr.feature:2\n' +
        '\n' +
        '  [-id-] Scénario: Nom du Scénario # test/features/fr.feature:4\n' +
        '    [-id-] Quand noop\n' +
        '    [-id-] Alors noop\n'
    )
  })

  it('logs Russian', async () => {
    const result = await run('ru.feature', { name: ['Сценарий name'] })
    result.should.startWith(
      'Функция: Функция Name # test/features/ru.feature:2\n' +
        '\n' +
        '  [-id-] Сценарий: Сценарий name # test/features/ru.feature:4\n' +
        '    [-id-] Когда noop\n' +
        '    [-id-] Тогда noop\n'
    )
  })
})
