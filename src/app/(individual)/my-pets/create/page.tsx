'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '~/components/Button'
import { Text } from '~/components/Text'

const schema = z.object({
  name: z.string().min(1).max(50),
  type: z.string().min(1).max(50),
  breed: z.string().min(1).max(50),
  age: z.number().min(0).max(100),
  weight: z.number().min(0).max(100),
})

const CreatePetPage = () => {
  const methods = useForm({ resolver: zodResolver(schema) })
  const { errors } = methods.formState

  const handleSubmit = methods.handleSubmit((data) => console.log(data))

  return (
    <>
      <Text variant="display">Create a new pet</Text>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" {...methods.register('name')} />
          {errors.name && (
            <Text variant="label" size="small" fill="error">
              {errors.name?.message?.toString()}
            </Text>
          )}

          <label htmlFor="type">Type</label>
          <input id="type" type="text" {...methods.register('type')} />
          {errors.type && (
            <Text variant="label" size="small" fill="error">
              {errors.type?.message?.toString()}
            </Text>
          )}

          <label htmlFor="breed">Breed</label>
          <input id="breed" type="text" {...methods.register('breed')} />
          {errors.breed && (
            <Text variant="label" size="small" fill="error">
              {errors.breed?.message?.toString()}
            </Text>
          )}

          <label htmlFor="age">Age</label>
          <input id="age" type="number" {...methods.register('age')} />
          {errors.age && (
            <Text variant="label" size="small" fill="error">
              {errors.age?.message?.toString()}
            </Text>
          )}

          <label htmlFor="weight">Weight</label>
          <input id="weight" type="number" {...methods.register('weight')} />
          {errors.weight && (
            <Text variant="label" size="small" fill="error">
              {errors.weight?.message?.toString()}
            </Text>
          )}

          <Button type="submit">Create</Button>
        </form>
      </FormProvider>

      <style jsx>{`
        form {
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 1rem;
        }
      `}</style>
    </>
  )
}

export default CreatePetPage
