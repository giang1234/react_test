export const CONFIG_APP = {
    PUBLIC_URL: process.env.REACT_APP_API_ROOT_URL,
    API_URL: process.env.REACT_APP_API_BASE_URL,
    CURRENT_STATE_APP: process.env.REACT_APP_STATE,
}

export const LANGS = [
    {
        value: 'vi',
        name: 'common.vietnamese'
    },
    {
        value: 'en',
        name: 'common.english'
    }
]

export const STATE_APP = {
    MAINTAIN: 'maintain',
    RUNNING: 'running',
}