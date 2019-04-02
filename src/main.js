class MainClass {
    constructor() {
        this.server = 'https://send-it-kibet.herokuapp.com/api/v2/'
    }

    get serverName() {
        return this.server
    }

    request_headers(header_method, header_body = "") {
        let myHeaders = new Headers();
        let my_headers = {
            method: header_method,
            headers: myHeaders,
            mode: 'cors',
            cache: 'default'
        };

        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NTQxODk5MzUsIm5iZiI6MTU1NDE4OTkzNSwianRpIjoiYjJjNmJjMDEtYjkyMy00NDYyLTlhZTgtZjI2YWQ0YjNjNzY0IiwiZXhwIjoxNTU0MjMzMTM1LCJpZGVudGl0eSI6Im1uc3dhbGVoQGdtYWlsLmNvbSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.c1aYroqROPN_ktdUGgA706K5RHZdZ5JWCt8g4HHAg50');

        if (header_method == "POST") {
            my_headers.body = JSON.stringify(header_body)
        }

        return my_headers
    }
}

export default MainClass