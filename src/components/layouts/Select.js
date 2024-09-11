import React, { useState } from 'react'

const Select = ({onChange, selectName, selectTitle, selectOptions }) => {

    return (
        <>
            <label htmlFor={selectName} className="text-sm font-medium text-gray-900 text-text uppercase whitespace-nowrap">{selectTitle}</label>
            <select onChange={onChange} id={selectName} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-text capitalize">
                {selectOptions && selectOptions.map((selectOption, index) => {
                    return <option key={index} value={selectOption}>{selectOption}</option>
                })}
            </select>
        </>
    )
}

export default Select