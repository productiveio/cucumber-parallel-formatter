import 'should'

import { run } from './exec'

describe('Rule', () => {
  it('logs rules', async () => {
    const expectedOutput =
      'Feature: Rule # test/features/rule.feature:1\n\
\n\
  [-id-] Scenario: No rule top scenario # test/features/rule.feature:3\n\
    [-id-] Given noop\n\
\n\
  Rule: first rule\n\
\n\
    [-id-] Scenario: Rule 1 scenario # test/features/rule.feature:8\n\
      [-id-] Given noop\n\
\n\
  Rule: second rule\n\
\n\
    [-id-] Scenario: Rule 2 scenario # test/features/rule.feature:13\n\
      [-id-] Given noop\n'
    const result = await run('rule.feature')
    result.should.startWith(expectedOutput)
  })

  it('logs background steps in rules', async () => {
    const expectedOutput =
      'Feature: Rule background # test/features/rule-background.feature:1\n\
\n\
  Rule: the rule\n\
\n\
    [-id-] Scenario: Rule 1 scenario # test/features/rule-background.feature:8\n\
      [-id-] Given noop\n\
      [-id-] Given noop\n'
    const result = await run('rule-background.feature')
    result.should.startWith(expectedOutput)
  })

  it('offsets the scenario indentation', async () => {
    const result = await run('rule*.feature')
    result.should.startWith(
      'Feature: Rule background # test/features/rule-background.feature:1\n\
\n\
  Rule: the rule\n\
\n\
    [-id-] Scenario: Rule 1 scenario # test/features/rule-background.feature:8\n\
      [-id-] Given noop\n\
      [-id-] Given noop\n\
\n\
Feature: Rule'
    )
  })
})
