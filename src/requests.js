const apiBaseURL = 'http://localhost:3000/bookmarks'

export const getBookmarks = async () => {
  const res = await fetch(apiBaseURL)
  return res.json()
}

export const getBookmark = async (id) => {
  const res = await fetch(`apiBaseURL/${id}`)
  return res.json()
}

export const createBookmark = async (bookmark) => {
  const { title } = bookmark
  const res = await fetch(apiBaseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title })
  })
  return res.json()
}

export const updateBookmark = async (bookmark) => {
  const { _id, title } = bookmark
  const res = await fetch(`${apiBaseURL}/${_id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title }),
  })
  if (res.ok) {
    return res.json()
  } else {
    return { error: 'Failed to update bookmark' }
  }
}

export const deleteBookmark = async (id) => {
  const res = await fetch(`${apiBaseURL}/${id}`, {
    method: 'DELETE',
  })
  // the API does not return any JSON data for DELETE requests
  return res
}
