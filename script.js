function translateSubtitles() {
  var originalSubtitles = document.getElementById("originalSubtitles").value;

  // Replace 'YOUR_TRANSLATION_API_KEY' with your actual translation API key
  var apiKey = '4bf7a543a18542a480b1814729f3e423';
  var targetLanguage = 'ml'; // Change to your desired target language code

  var url = 'https://southeastasia.api.cognitive.microsofttranslator.com/translate?api-version=3.0
' + apiKey;
  
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
