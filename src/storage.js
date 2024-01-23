export const saveToLocalStorage = (key, value) => {
  try {
    const serializedState = JSON.stringify(value)
    localStorage.setItem(key, serializedState)
  } catch (error) {
    console.error("Set state error: ", error.message)
  }
}

export const loadFromLocalStorage = (key) => {
  try {
    const serializedState = localStorage.getItem(key)
    return serializedState === null ? undefined : JSON.parse(serializedState)
  } catch (error) {
    console.error("Get state error: ", error.message)
    return null
  }
}

export const removeFromLocalStorage = (key) => {
  localStorage.removeItem(key)
}

export const showLocalStorage = () => {
  const arrayLocalStorage = []
  for (var i = 0, len = localStorage.length; i < len; i++) {
    let key = localStorage.key(i)
    let value = loadFromLocalStorage(key)
    arrayLocalStorage.push(value)
  }
  return arrayLocalStorage
}

