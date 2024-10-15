import { motion } from 'framer-motion'
import { ChevronsUpDown, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { type Courts, dataStates } from '@/utils/data-states'
import { sortStatesAlphabetically } from '@/utils/sort-states-alphabetically'

import { Button } from '../ui/button'

interface PjeFormData {
  stateID: string
  courtURL: string
}

export function PJE() {
  const { control, setValue, watch } = useForm<PjeFormData>()
  const [courts, setCourts] = useState<Courts[]>([])

  const stateID = watch('stateID')
  const courtURL = watch('courtURL')

  async function handleStateChange(selectedStateID: string) {
    const selectedState = dataStates.find(
      (state) => state.id === selectedStateID,
    )

    if (selectedState) {
      setCourts(selectedState.courts)
    }

    // Limpar seleção de tribunal ao mudar de estado e define o novo estado no input.
    setValue('courtURL', '')
    setValue('stateID', selectedStateID)
  }

  function handleAccessCourt(event: React.MouseEvent<HTMLButtonElement>) {
    if (!stateID || !courtURL) {
      event.preventDefault() // Impede a navegação se os selects não estiverem preenchidos.

      toast.error('Ops! Ação não permitida.', {
        description: 'Por favor, selecione um estado e tribunal.',
      })
      return
    }

    // Navegação segura para o tribunal selecionado
    window.open(courtURL, '_blank', 'noopener,noreferrer')
  }

  return (
    <motion.div
      className="relative flex flex-col items-center gap-6"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.9 }}
    >
      <div className="flex flex-col items-center gap-4 lg:flex-row">
        <Controller
          name="stateID"
          control={control}
          render={({ field: { onChange, value } }) => (
            <div className="relative w-[20.62rem] lg:w-[17.5rem]">
              <select
                className="appearance-none flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border bg-background text-foreground px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                value={value || ''}
                onChange={(e) => {
                  onChange(e.target.value)
                  handleStateChange(e.target.value)
                }}
              >
                <option value="" disabled>
                  Selecione um estado
                </option>
                {sortStatesAlphabetically(dataStates).map((state) => (
                  <option
                    key={state.sigla}
                    value={state.id}
                    className="font-medium"
                  >
                    {state.name}
                  </option>
                ))}
              </select>
              <span className="absolute right-3 top-2.5 pointer-events-none">
                <ChevronsUpDown className="h-3 w-3 opacity-50" />
              </span>
            </div>
          )}
        />

        <Controller
          name="courtURL"
          control={control}
          render={({ field: { onChange, value } }) => (
            <div className="relative w-[20.62rem] lg:w-[17.5rem]">
              <select
                className="appearance-none flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border bg-background text-foreground px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                value={value || ''}
                onChange={(e) => {
                  onChange(e.target.value)
                }}
              >
                <option value="" disabled>
                  Selecione um tribunal
                </option>
                {courts.map((court) => (
                  <option
                    key={court.id}
                    value={court.url}
                    className="font-medium"
                  >
                    {court.name}
                  </option>
                ))}
              </select>
              <span className="absolute right-3 top-2.5 pointer-events-none">
                <ChevronsUpDown className="h-3 w-3 opacity-50" />
              </span>
            </div>
          )}
        />
      </div>

      <Button
        type="button"
        className="inline-flex w-full py-[18px] font-bold"
        onClick={handleAccessCourt}
        // disabled={!stateID || !courtURL}
      >
        Ir para tribunal
        <ExternalLink className="ml-2 h-5 w-5" />
      </Button>
    </motion.div>
  )
}
