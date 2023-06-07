import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { setIsFilterPortalOpen } from '../../store/ui-slice'
import { Portal } from '..'

export const FilterPortal: FC = () => {
  const dispatch = useDispatch()

  const close = (): void => {
    dispatch(setIsFilterPortalOpen(false))
  }

  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
  // }

  // const submitHanlder = (event: React.SyntheticEvent): void => {
  // }

  return (
    <Portal close={close} />
  )
}
