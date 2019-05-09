/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/*jshint esversion: 6*/

const app = (() => {
// 
  function getImageName(country) {
   // create and return a promise
   	country = country.toLowerCase(); // di gunakan untuk perubahan menjadi bentuk abjad 
		var promiseOfImageName = new Promise(function(resolve, reject) { //membuat promise baru jika diterima maka akan muncul country dengan gambar, jika ti tolak maka akan muncul reject atau di tolak
		setTimeout(function() {
			if (country === 'spain' || country === 'chile' || country === 'peru' || country === 'korea' || country === 'wakanda') { // jika di terima maka akan tampil bendera
				resolve(country + '.png');
			} else {
				reject(Error('Didn\'t receive a valid country name!')); // jika di reject maka tampilan tidak muncul bendera di karenakan data yang di inputkan tidak sesuai
			}
			}, 1000);
			});
		console.log(promiseOfImageName); // menampilkan log di console
			return promiseOfImageName;
  }

  function isSpain(country) {
  }
    
 // pada bagian ini ketika input error maka akan masuk ke perintah yang ada pada fungsi ini
  function flagChain(country) {
	 return getImageName(country)
	.catch(fallbackName)
	.then(fetchFlag)
	.then(processFlag)
	.then(appendFlag)
	.catch(logError);
   // menampilkan log error pada tampilan di web browser
  }

  function allFlags(promiseList) {

    // use promise.all

  }


  // call the allFlags function


  // use Promise.race


  /* Helper functions */

  function logSuccess(result) {
    console.log('Success!:\n' + result); // menampilkan hasil sukses dengan menampilkan bendera yang kita inputkan
  }

  function logError(err) {
    console.log('Oh no!:\n' + err);// mennampilkan hasil error
  }

  function returnFalse() {
    return false;
  }

  function fetchFlag(imageName) {
    return fetch('flags/' + imageName); // mengembalikan fetch + dengan nama image terseut
  }

  function processFlag(flagResponse) {
    if (!flagResponse.ok) {
      throw Error('Bad response for flag request!'); // secara implisit akan menolak
    }
    return flagResponse.blob(); // mengenmbalikan flagResponse.blob
  }

  function appendFlag(flagBlob) {
    const flagImage = document.createElement('img'); // konstanta pada flagimage yang dimana menampilkan element berupa img
    const flagDataURL = URL.createObjectURL(flagBlob); // setelah di tampilkan berupa img, kemudian memasukkan data url dengan variabel flagBlob
    flagImage.src = flagDataURL; // kemudian ditampilkan berupa data url gambar
    const imgContainer = document.getElementById('img-container');// menampilkan img kontainer
    imgContainer.appendChild(flagImage);
    imgContainer.style.visibility = 'visible';//kemudian img kontainer tadi akan di lihat dengan visible
  }

  function fallbackName() {
    return 'chile.png'; // fungsi untuk menampilkan chile.png
  }

  // Don't worry if you don't understand this, it's not part of Promises.
  // We are using the JavaScript Module Pattern to enable unit testing of
  // our functions.
  return {
    getImageName: (getImageName),
    flagChain: (flagChain),
    isSpain: (isSpain),
    fetchFlag: (fetchFlag),
    processFlag: (processFlag),
    appendFlag: (appendFlag),
    allFlags: (allFlags)
  };


})();
