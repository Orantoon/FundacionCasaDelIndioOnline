export async function deleteData(url) {
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const message = `An error has occurred: ${response.statusText}`;
    throw new Error(message);
  }

  if (response.status === 204) {
    return {};
  }

  return response.json();
}
