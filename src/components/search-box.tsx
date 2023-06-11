import React, { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setIsSearchBoxOpen, setSearchTerm, clearSearch } from '../store/campaigns-slice'
import { SearchIcon, CloseIcon } from '../images'
import { IState } from '../store'

export const SearchBox: FC = () => {
  const { isSearchBoxOpen, searchTerm } = useSelector((state: IState) => state.campaigns)

  const dispatch = useDispatch()

  const baseStyle = 'flex justify-between border-2 mr-8 h-16 rounded-md w-300 border-grey-100'
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
          className='absolute h-48 px-8 mb-8 cursor-pointer right-4 top-10'
          onClick={openSearchBox}
        >
          <SearchIcon />
        </div>}
      {isSearchBoxOpen &&
        <div className={searchBoxStyle}>
          <div className='relative flex items-center w-full'>
            <input
              className='pl-4 text-3xl bg-grey-0 outline-0 text-grey-100'
              onChange={changeHandler}
              value={searchTerm}
            />
            <div
              className='absolute flex items-center px-8 cursor-pointer -right-4'
              onClick={closeSearchBox}
            >
              <CloseIcon isDefaultColor={false} />
            </div>
          </div>
        </div>}
    </>
  )
}
