export function getCurrentDateInfo() {
  const currentDate = new Date()
  const day = currentDate.getDate().toString().padStart(2, '0')
  const month = currentDate.toLocaleString('pt-BR', { month: 'long' })
  const fullMonth = month.charAt(0).toUpperCase().concat(month.slice(1))
  const year = currentDate.getFullYear()

  return { day, fullMonth, year }
}
