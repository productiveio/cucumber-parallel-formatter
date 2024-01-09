import 'should'

import { run } from './exec'

describe('Background', () => {
  it('does not log backgrounds', async () => {
    const result = await run('background.feature')
    result.should.startWith(
      'Feature: Background # test/features/background.feature:1\n' +
        '\n' +
        '  [-id-] Scenario: Background scenario # test/features/background.feature:6\n' +
        '    [-id-] Given noop\n' +
        '    [-id-] When noop\n' +
        '    [-id-] Then noop\n' +
        '\n' +
        '  [-id-] Scenario Outline: Background scenario outline # test/features/background.feature:10\n' +
        '    [-id-] Given noop\n' +
        '    [-id-] When noop "bar"\n' +
        '    [-id-] Then noop\n' +
        '\n' +
        '  [-id-] Scenario Outline: Background scenario outline # test/features/background.feature:10\n' +
        '    [-id-] Given noop\n' +
        '    [-id-] When noop "baz"\n' +
        '    [-id-] Then noop'
    )
  })
})
