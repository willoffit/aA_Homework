export const fetchSearchGiphys = function(searchTerm) {
  const YOUR_GIPHY_API_KEY = 'xdm0dKRRO3LUJcS0RtaqM4NOjeUphkCX';
  return $.ajax({
    method: "GET",
    url: `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${YOUR_GIPHY_API_KEY}&limit=2`
  });
}