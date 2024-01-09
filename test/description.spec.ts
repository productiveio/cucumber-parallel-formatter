import 'should'

import { run } from './exec'

describe('Description', () => {
  it('logs feature descriptions', async () => {
    const result = await run('description.feature')
    result.should.startWith(
      'Feature: Description # test/features/description.feature:1\n' +
        '\n' +
        '  **I like**\n' +
        '  To describe\n' +
        '  My _features_\n' +
        '\n'
    )
  })

  it('does not log scenario descriptions', async () => {
    const result = await run('description.feature')
    result.should.containEql(
      '  [-id-] Scenario: Description scenario # test/features/description.feature:7\n' +
        '    [-id-] When noop\n' +
        '    [-id-] Then noop\n' +
        '\n' +
        '  [-id-] Scenario Outline: Description scenario outline # test/features/description.feature:14\n' +
        '    [-id-] When noop "bar"\n' +
        '    [-id-] Then noop\n' +
        '\n' +
        '  [-id-] Scenario Outline: Description scenario outline # test/features/description.feature:14\n' +
        '    [-id-] When noop "baz"\n' +
        '    [-id-] Then noop'
    )
  })
})
