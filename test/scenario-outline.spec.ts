import 'should'

import { run } from './exec'

describe('Scenario Outline', () => {
  it('logs scenario outlines', async () => {
    const result = await run('scenario-outline.feature', {
      name: ['Scenario outline'],
    })
    result.should.containEql(
      // TODO: use the example location when running a scenario outline
      'Feature: Scenario Outline # test/features/scenario-outline.feature:1\n' +
        '\n' +
        '  [-id-] Scenario Outline: Scenario outline # test/features/scenario-outline.feature:3\n' +
        '    [-id-] When noop "bar"\n' +
        '\n' +
        '  [-id-] Scenario Outline: Scenario outline # test/features/scenario-outline.feature:3\n' +
        '    [-id-] When noop "baz"'
    )
  })
})
