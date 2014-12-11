// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms

// Helper function to display JavaScript value on HTML page.
function showResponse(response) {
    var result1 = response["items"][0]["id"]["videoId"];
    var result2 = response["items"][1]["id"]["videoId"];
    var responseString = JSON.stringify(result1, '', 2);
    var responseString2 = JSON.stringify(result2, '', 2);
    $scope.response = responseString; 
}

// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    // This API key is intended for use only in this lesson.
    // See http://goo.gl/PdPA1 to get a key for your own applications.
    gapi.client.setApiKey('AIzaSyAWbK6ch75w9C0QwSkbaOHNgAgZNGqW3VU');
}

function search(champ) {
    // Use the JavaScript client library to create a search.list() API call.
    var request = gapi.client.youtube.search.list({
        part: 'id',
        maxResults: 2,
        type: "video",
        q: champ + " spotlight"
    });
    
    // Send the request to the API server,
    // and invoke onSearchRepsonse() with the response.
    return request;
}

// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
    showResponse(response);
}
