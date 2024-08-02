import React, { useEffect, useRef, useState } from 'react'
import Select from 'react-select'
import { mapStore } from '../store/mapStore'
import { createCornersAddress } from '../utils/createCornersAddress'
import { useProcessAddresses } from '../hooks/useProcessAddresses'
export function StreetCheckPanel() {
  const { processAddresses } = useProcessAddresses()
  const { streetsFromBounds, addReactSelectStreet, addressMarker } = mapStore()
  const [options, setOptions] = useState([])
  useEffect(() => {
    const options = []
    if (streetsFromBounds) {
      streetsFromBounds.forEach((street) => {
        options.push({ value: street, label: street })
      })
    }
    setOptions(options)
  }, [streetsFromBounds])

  const customStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles
      //   borderColor: state.isFocused ? 'grey' : 'red'
    }),
    valueContainer: (baseStyles, state) => ({
      ...baseStyles
      //   backgroundColor: state.isFocused ? 'blue' : 'red'
    }),
    indicators: (baseStyles, state) => ({
      ...baseStyles
      //   backgroundColor: state.isFocused ? 'yellow' : 'gray'
    }),
    menu: (baseStyles, state) => ({
      ...baseStyles,
      zIndex: 9999
      //   maxHeight: 150
      //   backgroundColor: state.isFocused ? 'blue' : 'red'
    }),
    menuList: (baseStyles, state) => ({
      ...baseStyles
      //   backgroundColor: state.isFocused ? 'green' : 'red'
    }),
    option: (baseStyles, state) => ({
      ...baseStyles
      //   backgroundColor: state.isFocused ? 'yellow' : 'red'
    })
  }
  const handleStreet1 = (e) => {
    // console.log(e);
    // setReactSelectStreets(select1.current.state.value)
  }
  const handleStreet2 = (e) => {
    // console.log(e);
    // setReactSelectStreets(select1.current.state.value)
  }
  const handleCheckStreets = () => {
    let [higerAddress, lowerAddress] = createCornersAddress(addressMarker)
    processAddresses([higerAddress, lowerAddress])
  }
  return (
    <div className='w-full flex flex-col gap-3'>
      <Select onChange={handleStreet1} id='react-select' options={options} styles={customStyles} menuPlacement='top' />
      <Select onChange={handleStreet2} id='react-select' options={options} styles={customStyles} menuPlacement='top' />
      <button
        type='button'
        onClick={handleCheckStreets}
        className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>
        Comprobar resultados
      </button>
    </div>
  )
}
