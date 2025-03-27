// Basic serverless function for API Keymaster

exports.handler = async (event, context) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers
    };
  }

  // Simple response for now - will be expanded with full functionality later
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      message: "API Keymaster is running!",
      status: "success",
      info: "This is a simple demo of the API Keymaster serverless function."
    })
  };
};
