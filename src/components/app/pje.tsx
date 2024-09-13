import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
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

  function handleAccessCourt(event: React.MouseEvent<HTMLAnchorElement>) {
    if (!stateID || !courtURL) {
      event.preventDefault() // Impede a navegação se os selects não estiverem preenchidos.

      toast.error('Ops! Ação não permitida.', {
        description: 'Por favor, selecione um estado e tribunal.',
      })
    }
  }

  return (
    <motion.div
      className="relative flex flex-col items-center gap-6"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.9 }}
    >
      <div className="flex flex-col items-center gap-4 lg:flex-row">
        <Controller
          name="stateID"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select
              onValueChange={(state) => {
                onChange(state)
                handleStateChange(state)
              }}
              value={value}
            >
              <SelectTrigger className="w-[20.62rem] lg:w-[17.5rem]">
                <SelectValue placeholder="Selecione um estado" />
              </SelectTrigger>
              <SelectContent>
                {sortStatesAlphabetically(dataStates).map((states) => {
                  return (
                    <SelectGroup key={states.id}>
                      <SelectItem value={states.id} className="font-medium">
                        {states.name}
                      </SelectItem>
                    </SelectGroup>
                  )
                })}
              </SelectContent>
            </Select>
          )}
        />

        <Controller
          name="courtURL"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select onValueChange={onChange} value={value} disabled={!stateID}>
              <SelectTrigger className="w-[20.62rem] lg:w-[17.5rem]">
                <SelectValue placeholder="Selecione um tribunal" />
              </SelectTrigger>
              <SelectContent>
                {courts.map((court) => (
                  <SelectGroup key={court.url}>
                    <SelectItem value={court.url} className="font-medium">
                      {court.name}
                    </SelectItem>
                  </SelectGroup>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <a
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full"
        onClick={handleAccessCourt}
        href={courtURL}
      >
        <Button type="button" className="w-full py-[18px] font-bold">
          Ir para tribunal
          <ExternalLink className="ml-2 h-5 w-5" />
        </Button>
      </a>
    </motion.div>
  )
}
