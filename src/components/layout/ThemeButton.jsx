import React, { useEffect, useState } from 'react'

export const ThemeButton = () => {

    const [theme, setTheme] = useState(null)

    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark').matches) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }, [])

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    const handleThemeSwitched = () => {
        // console.log('Turn Dark')
        setTheme(theme === 'dark' ? 'light' : 'dark');
        
    }

    return (
        <button
            className='bg-gray-900 dark:bg-sky-400 p-1  rounded-full'
            onClick={handleThemeSwitched}
        >
            {theme === 'light' ? '🌒' : '☀️'}
        </button>
    )
}
