const API_URL = ''

export const getLoginCredentials = async(emailId,password) => {
    console.log("in getoginCreds")
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
        let response = await fetch(API_URL, options);
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
        let response = await fetch(API_URL, options);
        let json = await response.json();
        console.log('Regestered new user', json);
            return json;
    } catch(err) {
        console.error('Error while regestring new user.', err);
    }
    return null;
}