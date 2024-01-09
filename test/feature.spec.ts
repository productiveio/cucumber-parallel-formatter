import 'should'

import { run } from './exec'

describe('Feature', () => {
  it('logs feature names and inserts new lines between scenarios and features', async () => {
    const result = await run('*.feature', { name: ['Feature \\d'] })
    result.should.startWith(
      'Feature: The Feature # test/features/feature.feature:1\n' +
        '\n' +
        '  [-id-] Scenario: Feature 1 # test/features/feature.feature:7\n' +
        '    [-id-] When noop\n' +
        '    [-id-] Then noop\n' +
        '\n' +
        'Feature: Feature # test/features/feature2.feature:1\n' +
        '\n' +
        '  [-id-] Scenario: Feature 2 # test/features/feature2.feature:3\n' +
        '    [-id-] When noop\n' +
        '    [-id-] Then noop\n' +
        '\n' +
        '  [-id-] Scenario: Feature 3 # test/features/feature2.feature:7\n' +
        '    [-id-] When noop\n' +
        '    [-id-] Then noop\n'
    )
  })
})
