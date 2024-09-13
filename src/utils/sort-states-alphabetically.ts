import { States } from './data-states'

export function sortStatesAlphabetically(states: States[]) {
  return states.sort((a, b) => a.name.localeCompare(b.name))
}
