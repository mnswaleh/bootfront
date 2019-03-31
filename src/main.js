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
        myHeaders.append("Authorization", 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NTQxMDI2OTEsIm5iZiI6MTU1NDEwMjY5MSwianRpIjoiNmE0NzFlNWMtOTIwMy00MDllLWFkY2YtYTJmMjQyMGRhZWZlIiwiZXhwIjoxNTU0MTQ1ODkxLCJpZGVudGl0eSI6Im1uc3dhbGVoQGdtYWlsLmNvbSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.hZ7ChYMw1C4m__Z0-budLbrurhM2RJFBQrLBh8zp0gM');

        if (header_method == "POST") {
            my_headers.body = JSON.stringify(header_body)
        }

        return my_headers
    }
}

export default MainClass