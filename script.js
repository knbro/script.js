function translateSubtitles() {
  var originalSubtitles = document.getElementById("originalSubtitles").value;

  // Replace 'YOUR_TRANSLATION_API_KEY' with your actual translation API key
  var apiKey = 'YOUR_TRANSLATION_API_KEY';
  var targetLanguage = 'fr'; // Change to your desired target language code

  var url = 'https://translation.googleapis.com/language/translate/v2?key=' + apiKey;
  
  $.ajax({
    url: url,
    type: 'POST',
    dataType: 'json',
    data: {
      q: originalSubtitles,
      target: targetLanguage
    },
    success: function(response) {
      var translatedSubtitles = response.data.translations[0].translatedText;
      document.getElementById("translatedSubtitles").value = translatedSubtitles;
    },
    error: function(error) {
      console.log('Translation failed. Error:', error);
    }
  });
}
