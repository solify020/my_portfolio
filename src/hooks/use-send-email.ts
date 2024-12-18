import type { ChangeEvent } from 'react'
import type { FormType } from 'src/types'
import { useState } from 'react'
import { usePostEmailMutation } from 'src/app'
import { toast } from 'react-toastify'
import { useForm, SubmitHandler } from 'react-hook-form'

const INITIAL_STATE: FormType = {
  from: '',
  nameSender: '',
  text: '',
}

type Props = {
  fn: () => void
  successMessage: string
  infoMessage: string
}

export const useSendEmail = ({ successMessage, infoMessage, fn }: Props) => {
  const [sendEmail, { isLoading }] = usePostEmailMutation()
  const [isSendFormError, setIsSendError] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting, isValid },
    clearErrors,
  } = useForm<FormType>({ mode: 'onBlur', defaultValues: INITIAL_STATE })

  const handleChange =
    (field: keyof FormType) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = e.target as HTMLInputElement | HTMLTextAreaElement
      setValue(field, value)
      clearErrors(field)
    }

  const onSubmit: SubmitHandler<FormType> = async (data: FormType) => {
    try {
      await sendEmail(data).unwrap()
      toast.success(successMessage)
      fn()
    } catch {
      setIsSendError(true)
      toast.info(infoMessage)
    }
  }

  const isDisabledButton = isSubmitting || !isValid

  return {
    register,
    handleSubmit,
    handleChange,
    errors,
    isLoading,
    isDisabledButton,
    isSendFormError,
    onSubmit,
  }
}
