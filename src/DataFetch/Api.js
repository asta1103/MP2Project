const Api = async (url = '', optionObj = null, errMsg = null) => {
    try {
      const response = await fetch(url, optionObj);
  
      if (!response.ok) {
        console.error(`Error accessing the webservice API: ${response.status} - ${response.statusText}`);
        throw new Error(`Error accessing the webservice API: ${response.status} - ${response.statusText}`);
      }
  
      const data = await response.json();
  
      if (typeof data === 'object') {
        return data;
      } else {
        console.error('Unexpected response format:', data);
        throw new Error('Unexpected response format');
      }
    } catch (err) {
      console.error('Error during API call:', err.message);
      throw err; // rethrow the error to let the calling code handle it
    }
  };
  
  export default Api;
  