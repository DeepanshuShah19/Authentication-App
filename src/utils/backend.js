export const getLoginCredentials = async(emailId,password) => {
    const requestBody = {
        'operationName': 'getLoginCred',
        'payload': {
            'emailID': emailId,
            'password': password,
        }
    };

    console.log('stringified request: ', JSON.stringify(requestBody));

    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
    };

    try {
        let response = await fetch(api_url, options);
        let json = await response.json();
        console.log('Retrieved login details, ', json);

        if(json.statusCode === 200) {
            return json.body;
        }
    } catch(err) {
        console.error('Error while retrieving login details.', err);
    }
    return null;
}

export const addNewUser = async(emailId,password,name,username) => {
    const requestBody = {
        'operationName': 'addNewUser',
        'payload': {
            'emailID': emailId,
            'password': password,
            'name': name,
            'username':username,
        }
    };

    console.log('stringified request: ', JSON.stringify(requestBody));

    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
    };

    try {
        let response = await fetch(MARINA_PAYMENTS_GATEWAY_BASEURL, options);
        let json = await response.json();
        console.log('Regestered new user', json);
        if(json.statusCode === 200 || json.statusCode === 400) {
            return json;
        }
    } catch(err) {
        console.error('Error while regestring new user.', err);
    }
    return null;
}