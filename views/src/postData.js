export async function postData(url, userData) {
    const response = await fetch(url, {
      method: 'POST',
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
  