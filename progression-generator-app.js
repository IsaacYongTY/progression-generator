// For debugging
      // Change spaceChar to 'K' for better visibility of space
      let spaceChar = '\xa0'
           // spaceChar = 'K'
         
// Initialization
const key = {}
let chords = {}
isHalfBar = false

let standardFullBarSpace = 18
let standardHalfBarSpace = 14

document.querySelector('#prog-choice-1').addEventListener('click', function(e) {
   isHalfBar = false
   document.querySelector('#spacing').value = standardFullBarSpace
})

document.querySelector('#prog-choice-2').addEventListener('click', function(e) {
   isHalfBar = true
   document.querySelector('#spacing').value = standardHalfBarSpace
})

document.querySelector('#prog-common-progression').addEventListener('change', function (e) {
   document.getElementById('prog-text').value = e.target.value
})

document.querySelector('#prog-form').addEventListener('submit', function (e) {
   
   e.preventDefault()
   // Debugging

       //console.log(e.target.elements.inputSection.value)
      // console.log(e.target.elements.inputKey.value)
      // console.log(e.target.elements.inputProgression.value)

   let result = ''

   keyLibrary (e.target.elements.inputKey.value)
   progressionNumOnly = removeSuffix(e.target.elements.inputProgression.value)
   chords = assignChordsToProg(progressionNumOnly)

   if (isHalfBar === false) {
      result = fullBarProg(e.target.elements.inputSection.value, 
                                       progressionNumOnly, 
                                       e.target.elements.inputSpacing.value,
                                       chords
   )}  else {
      result = halfBarProg(e.target.elements.inputSection.value, 
                                       progressionNumOnly, 
                                       e.target.elements.inputSpacing.value,
                                       chords
   )}
   
   document.getElementById('outputResult').value += result
   document.getElementById('prog-section').value = ''
})


document.querySelector('#clear').addEventListener('click', function (e) {
   document.getElementById('outputResult').value = ''
})

document.querySelector('#copy').addEventListener('click', function (e) {
   document.execCommand('copy') = document.getElementById('outputResult').value 
})







// Test Area
  //console.log(progressionGenerator('Verse 1','Db','4236112'))

