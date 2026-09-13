'use client'

import { motion } from 'framer-motion'
import { ChevronsUpDown, ExternalLink } from 'lucide-react'
import { useMemo, useState } from 'react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { dataStates } from '@/utils/data-states'
import { sortStatesAlphabetically } from '@/utils/sort-states-alphabetically'

interface SelectFieldProps {
  label: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  disabled?: boolean
  options: { value: string; label: string }[]
}

function SelectField({ label, placeholder, value, onChange, disabled = false, options }: SelectFieldProps) {
  return (
    <div className="relative w-[20.62rem] lg:w-70">
      <select
        aria-label={label}
        disabled={disabled}
        className="flex h-9 w-full appearance-none items-center justify-between whitespace-nowrap rounded-md border bg-background px-3 py-2 text-foreground text-sm shadow-xs ring-offset-background focus:outline-hidden focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        value={value}
        onChange={event => onChange(event.target.value)}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map(option => (
          <option key={option.value} value={option.value} className="font-medium">
            {option.label}
          </option>
        ))}
      </select>

      <span className="pointer-events-none absolute top-2.5 right-3">
        <ChevronsUpDown className="h-3 w-3 opacity-50" />
      </span>
    </div>
  )
}

export function PJE() {
  const [stateID, setStateID] = useState('')
  const [courtURL, setCourtURL] = useState('')

  const stateOptions = useMemo(
    () =>
      sortStatesAlphabetically(dataStates).map(state => ({
        value: state.id,
        label: state.name,
      })),
    []
  )

  const courtOptions = useMemo(() => {
    const selectedState = dataStates.find(state => state.id === stateID)

    return (selectedState?.courts ?? []).map(court => ({
      value: court.url,
      label: court.name,
    }))
  }, [stateID])

  function handleStateChange(selectedStateID: string) {
    setStateID(selectedStateID)
    // Limpa o tribunal: a lista muda junto com o estado.
    setCourtURL('')
  }

  function handleAccessCourt() {
    if (!stateID || !courtURL) {
      toast.error('Ops! Ação não permitida.', {
        description: 'Por favor, selecione um estado e tribunal.',
      })
      return
    }

    window.open(courtURL, '_blank', 'noopener,noreferrer')
  }

  return (
    <motion.div
      className="relative flex flex-col items-center gap-6"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }}
    >
      <div className="flex flex-col items-center gap-4 lg:flex-row">
        <SelectField
          label="Estado"
          placeholder="Selecione um estado"
          value={stateID}
          onChange={handleStateChange}
          options={stateOptions}
        />

        <SelectField
          label="Tribunal"
          placeholder="Selecione um tribunal"
          value={courtURL}
          onChange={setCourtURL}
          disabled={!stateID}
          options={courtOptions}
        />
      </div>

      <Button type="button" className="inline-flex w-full py-[18px] font-bold" onClick={handleAccessCourt}>
        Ir para tribunal
        <ExternalLink className="ml-2 h-5 w-5" />
      </Button>
    </motion.div>
  )
}
