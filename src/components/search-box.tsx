import React, { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setIsSearchBoxOpen, setSearchTerm, clearSearch } from '../store/ui-slice'
import { SearchIcon, CloseIcon } from '../images'
import { IState } from '../store'

export const SearchBox: FC = () => {
  const { isSearchBoxOpen, searchTerm } = useSelector((state: IState) => state.ui)

  const dispatch = useDispatch()

  const baseStyle = 'absolute flex justify-between border-2 rounded-md w-300 top-40 right-8 border-grey-100'
  const animationStyle = isSearchBoxOpen ? 'animate-searchBox' : ''
  const searchBoxStyle = `${baseStyle} ${animationStyle}`

  const openSearchBox = (): void => {
    dispatch(setIsSearchBoxOpen(true))
  }

  const closeSearchBox = (): void => {
    dispatch(setIsSearchBoxOpen(false))
    dispatch(clearSearch())
  }

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target

    dispatch(setSearchTerm(value))
  }

  return (
    <>
      {!isSearchBoxOpen &&
        <div
          className='absolute h-20 px-4 cursor-pointer right-8 top-44'
          onClick={openSearchBox}
        >
          <SearchIcon />
        </div>}
      {isSearchBoxOpen &&
        <div className={searchBoxStyle}>
          <div className='relative flex items-center w-full'>
            <input
              className='h-20 pl-4 text-3xl bg-grey-0 outline-0 text-grey-100'
              onChange={changeHandler}
              value={searchTerm}
            />
            <div
              className='absolute right-0 flex items-center px-4 cursor-pointer'
              onClick={closeSearchBox}
            >
              <CloseIcon isDefaultColor={false} />
            </div>
          </div>
        </div>}
    </>
  )
}
