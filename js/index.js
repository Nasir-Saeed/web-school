console.log("Hello World")


function myfunct() {
    document.getElementById('LevelOfEducation').style.display = 'none';
    document.getElementById('AgeRange').style.display = 'none';
    document.getElementById('AdmissionCriteria').style.display = 'none';
    document.getElementById('AdmissionJourney').style.display = 'none';
    document.getElementById('FeeDetails').style.display = 'none';
}
myfunct();

// Table Contents Id's
let LevelOfEducation = document.getElementById("LevelOfEducation");
let AgeRange = document.getElementById("AgeRange");
let AdmissionCriteria = document.getElementById("AdmissionCriteria");
let AdmissionJourney = document.getElementById("AdmissionJourney");
let FeeDetails = document.getElementById("FeeDetails");


// Buttons Id's
let clickBtn1 = document.getElementById("clickBtn1");
let clickBtn2 = document.getElementById("clickBtn2");
let clickBtn3 = document.getElementById("clickBtn3");
let clickBtn4 = document.getElementById("clickBtn4");
let clickBtn5 = document.getElementById("clickBtn5");



// add Event Listener on Level Of Education Button
clickBtn1.addEventListener('click', () => {
    document.getElementById('LevelOfEducation').style.display = 'block';
    document.getElementById('AgeRange').style.display = 'none';
    document.getElementById('AdmissionCriteria').style.display = 'none';
    document.getElementById('AdmissionJourney').style.display = 'none';
    document.getElementById('FeeDetails').style.display = 'none';
})

// add Event Listener on Age Range Button
clickBtn2.addEventListener('click', () => {
    document.getElementById('LevelOfEducation').style.display = 'none';
    document.getElementById('AgeRange').style.display = 'block';
    document.getElementById('AdmissionCriteria').style.display = 'none';
    document.getElementById('AdmissionJourney').style.display = 'none';
    document.getElementById('FeeDetails').style.display = 'none';
})

// add Event Listener on Admission Criteria Button
clickBtn3.addEventListener('click', () => {
    document.getElementById('LevelOfEducation').style.display = 'none';
    document.getElementById('AgeRange').style.display = 'none';
    document.getElementById('AdmissionCriteria').style.display = 'block';
    document.getElementById('AdmissionJourney').style.display = 'none';
    document.getElementById('FeeDetails').style.display = 'none';
})

// add Event Listener on Admission Journey Button
clickBtn4.addEventListener('click', () => {
    document.getElementById('LevelOfEducation').style.display = 'none';
    document.getElementById('AgeRange').style.display = 'none';
    document.getElementById('AdmissionCriteria').style.display = 'none';
    document.getElementById('AdmissionJourney').style.display = 'block';
    document.getElementById('FeeDetails').style.display = 'none';
})

// add Event Listener on Admission Journey Button
clickBtn5.addEventListener('click', () => {
    document.getElementById('LevelOfEducation').style.display = 'none';
    document.getElementById('AgeRange').style.display = 'none';
    document.getElementById('AdmissionCriteria').style.display = 'none';
    document.getElementById('AdmissionJourney').style.display = 'none';
    document.getElementById('FeeDetails').style.display = 'block';
})
