const https = require('http');

// Test the MCP server
const testMcpServer = async () => {
  const postData = JSON.stringify({
    method: 'tools/call',
    params: {
      name: 'search_binal_knowledge',
      arguments: {
        query: 'tell me about yourself'
      }
    }
  });

  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/api/mcp',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    }
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          resolve(result);
        } catch (e) {
          resolve(data);
        }
      });
    });

    req.on('error', (e) => {
      reject(e);
    });

    req.write(postData);
    req.end();
  });
};

// Run the test
testMcpServer()
  .then((result) => {
    console.log('MCP Server Response:');
    console.log(JSON.stringify(result, null, 2));
  })
  .catch((error) => {
    console.error('Error testing MCP server:', error);
  });