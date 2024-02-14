
const signUpHeading = document.getElementById('signUp');
const loginHeading = document.getElementById('loginHeading');
const loginbutton = document.getElementById('login-button');
const signUpbutton = document.getElementById('signUp-button');
const captureimageform = document.getElementById('cameradiv');
const captureimagebutton = document.getElementById('capture-image-button');
const uploadedImage = document.getElementById('UploadedImage');
const retake = document.getElementById('retake-image-button');
const continueButton = document.getElementById('continue-image-button')
const container = document.querySelector('.container');
const navContainer = document.getElementById('navContainer');
const registrationSuccessImage = document.getElementById('registrationImage')
const restartButton =document.getElementById('restart-button')

restartButton.addEventListener('click',restart);

const signUpForm = document.getElementById('signUpForm');
const loginForm = document.getElementById('loginForm');

//initially hiding the regidtraion successfull image
registrationSuccessImage.style.display = 'none'

// Initially hide the login form
loginbutton.style.display = 'none';
loginForm.style.display = 'none';
loginHeading.style.color = 'gray';

//initially hide the the image page
captureimageform.style.display = 'none';
captureimagebutton.style.display = 'none';



//initially hide capture image and retake and continue button
uploadedImage.style.display = 'none';
retake.style.display = 'none';
continueButton.style.display = 'none';

//initially hiding the last page navcotainer
navContainer.style.display = 'none';

function openSignupForm(){
    signUpForm.style.display = 'block';
     // Reset styles for sign-up heading
     signUpHeading.style.color = 'black';
    signUpHeading.style.fontWeight = 'dark';
    loginHeading.style.color = 'gray';
    signUpbutton.style.display = 'block'; // Hide the sign-up 
}

function closeSignUpform(){
    signUpForm.style.display = 'none';
     // Reset styles for sign-up heading
     signUpHeading.style.color = 'gray';
    signUpHeading.style.fontWeight = 'normal';
    signUpbutton.style.display = 'none'; // Hide the sign-up form
    loginHeading.style.color = 'gray';
   }

loginHeading.addEventListener('click', openLoginForm)
// Show the login form

function openLoginForm() {
    closeSignUpform()// Hide the sign-up form
    loginForm.style.display = 'block';
    loginbutton.style.display = 'block';
    // Update styles for login heading
    loginHeading.style.color = 'black';
    loginHeading.style.fontWeight = 'bold';
}

function closeLoginForm(){
    loginbutton.style.display = 'none';
    loginForm.style.display = 'none';

}
loginbutton.addEventListener('click', openCaptureImageform);
// making hide the login form
function openCaptureImageform() {
    closeLoginForm()
   //and then opem=ning the page
    captureimageform.style.display = 'block';
    captureimagebutton.style.display = 'block';

}
function closeCaptureImageForm(){
    captureimageform.style.display = 'none';
    captureimagebutton.style.display = 'none';
}
captureimagebutton.addEventListener('click', openUploadImageForm)
function openUploadImageForm() {
    closeCaptureImageForm()

    uploadedImage.style.display = 'block';
    retake.style.display = 'block';
    continueButton.style.display = 'block';
}
retake.addEventListener('click', retakeButtonClicked);
function retakeButtonClicked() {
    captureimageform.style.display = 'block';
    captureimagebutton.style.display = 'block';
        closeUploadImage()
 
}
function closeUploadImage(){
    uploadedImage.style.display = 'none';
    retake.style.display = 'none';
    continueButton.style.display = 'none';
}
function openUploadImage(){
    uploadedImage.style.display = 'block';
    retake.style.display = 'block';
    continueButton.style.display = 'block';
}

function closeContainer(){
    container.style.display = 'none';

}


continueButton.addEventListener('click', continueButtonClicked);
function continueButtonClicked() {

    openNavContainer();
}
function openNavContainer()
{
    container.style.display='none';
    navContainer.style.display='flex';
}
function opencontainer(){
    openSignupForm()
}
function  closeNavContainer(){
      if(navContainer.style.display='flex')
         {
            navContainer.style.display='none';
         container.style.display='flex';
     }
}



// Add event listener to the Signup button
signUpbutton.addEventListener('click', signUpbuttonClicked)

function signUpbuttonClicked() {
    // Hide the form and show the registration success image
    container.style.opacity = '0.2';
    registrationSuccessImage.style.display = 'block';

    setTimeout(() => {
        registrationSuccessImage.style.display = 'none';
        container.style.opacity = '1'; // Restore opacity
        // Show the login form
        openLoginForm()

    }, 2000); // 2000 milliseconds = 2 seconds
}
    function restart()
    {
        openSignupForm()
        closeCaptureImageForm()
        closeLoginForm()
        closeUploadImage()
        closeNavContainer()
    }

// Get the back button element
const backButton = document.getElementById('backButton');

// Add event listener to the back button
backButton.addEventListener('click', backButtonClicked);

// Define the function to handle the back action
function backButtonClicked() {
    // Check the current state to determine the appropriate action
    if (captureimageform.style.display === 'block') {
        // If the capture image form is visible, go back to the login form
        closeCaptureImageForm();
        openLoginForm();
    } else if (loginForm.style.display === 'block') {
        // If the login form is visible, go back to the sign-up form
        closeLoginForm();
        openSignupForm();
    } else if (uploadedImage.style.display === 'block') {
        // If the navigation container is visible, go back to the main container
        retakeButtonClicked();
    }
}