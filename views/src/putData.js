export async function putData(url, userData) {
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  
    if (!response.ok) {
      const message = `An error has occurred: ${response.statusText}`;
      throw new Error(message);
    }
  
    return response.json();
  }
  