export var getToken;

(async () => {
    var rawResponse = await fetch("https://caminho-da-api/auth",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                consumer_key: "97qw8e4qwedqwe84qw9e74qw98e7qwe8qw7eq",
                consumer_secret: "bd4b7sd7c4b54s87gf7b74g7g45s87v7g744",
                code: "bsd4d4w7rf4a56asd54f74fe87qws5cgh7t87sd485w4",
            }),
        }
    );

    var content = await rawResponse.json();
    var contentToken = content.access_token;
    getToken = contentToken;

    console.log(getToken)
    console.log(codigo.value)
})();