
export function saveTerm (term) {
    console.log('hit: ',term)
  return {
    type: 'SAVE_TERM',
    term
  }
}

