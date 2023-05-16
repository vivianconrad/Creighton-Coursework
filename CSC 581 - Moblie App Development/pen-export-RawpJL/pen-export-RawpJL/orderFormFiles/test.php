<!doctype html>

<html>

<head>
    <title> Apply for Corsano Academy! </title>
    <script src="test.js"></script>
    <link href="corsano.css" type="text/css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com"> 
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
    <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200;0,300;0,400;0,700;1,200;1,300;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet">
    </head>
  
<body>
<section class="main">
    <div class="questions">
    <form method="post" action="submitApplication.php" autocomplete="on">
    <h1>Corsano Academy Family Information Form</h1>
    
    <div class="questionsSubsection" id="Opening">
        <p>Thank you for your interest in Omaha's newest private school. We're a school promoting education that is: project-based, cross-curricular, differentiated, and Christ-centered. We are a school that practices socio-emotional development in order to nurture healthy and happy children. Healthy food and daily movement are integral to our children's success. Our location is TBD, but hoping to be near 132nd and Millard Avenue.</p>
        <p>Please complete the form below to be added to the open enrollment email. </p>
    </div>
    
    <div class="questionsSubsection" id="numKids">
        <div id="numStudents">
            <h3>Number of School-Age Children:</h3>
            <input type = "text" id ="numChildren" name = "numKids" placeholder = "Choose" list = "Kids" required>
                        <datalist id = "Kids">
                            <option value = "1">
                            <option value = "2">
                            <option value = "3"> 
                            <option value = "4"> 
                        </datalist>
        </div>
    </div>
    
    <div class="questionsSubsection" id="studentInfo"> 
        <div id="studentInfoNotes">
            <h2>Student Information</h2>
            <p>Please Note: There is room for each family to enter up to 4 students' information. One student is required. Skip additional questions as necessary.</p>
        </div>
    </div>
    
    <div class="questionsSubsection" id="student1">
        <h3>Student #1</h3>
        <div id="s1FName">
            <p>Student First Name:</p>
            <input type="text" id="student1FName" name="student1FName" required>
        </div>
        <div id="s1LName">
            <p>Student Last Name:</p>
            <input type="text" id="student1LName" name="student1LName" required>
        </div>
        <div id="s1DB">
            <p>Student Name:</p>
            <input type="date" id="student1DB" name="student1DB" required>
        </div>
        <div id="s1Gender">
            <p>Student Gender:</p>
            <input type = "text" id ="student1Gender" name = "student1Gender" placeholder = "Choose" list = "1Gender" required>
                <datalist id = "1Gender">
                    <option value = "Male">
                    <option value = "Female">
                </datalist>
        </div>
        <div id="s1Entering">
            <p>Student Entering Year:</p>
            <input type = "text" id ="student1Entering" name = "student1Entering" placeholder = "Choose" list = "1Entering" required>
                <datalist id = "1Entering">
                    <option value = "2022-23">
                    <option value = "2023-24">
                </datalist>
        </div>
        <div id="s1Grade">
            <p>Student Grade:</p>
            <input type = "text" id ="student1Grade" name = "student1Grade" placeholder = "Choose" list = "1Grade" required>
                <datalist id = "1Grade">
                    <option value = "Pre-K">
                    <option value = "Kindergarten">
                    <option value = "1st">
                    <option value = "2nd">
                    <option value = "3rd">
                    <option value = "4th">
                    <option value = "5th">
                    <option value = "6th">
                    <option value = "7th">
                    <option value = "8th">
                </datalist>
        </div>
    </div>
    
    <div class="questionsSubsection" id="student2">
        <h3>Student #2</h3>
        <div id="s2FName">
            <p>Student First Name:</p>
            <input type="text" id="student2FName" name="student2FName">
        </div>
        <div id="s2LName">
            <p>Student Last Name:</p>
            <input type="text" id="student2LName" name="student2LName">
        </div>
        <div id="s2DB">
            <p>Student Name:</p>
            <input type="date" id="student2DB" name="student2DB">
        </div>
        <div id="s2Gender">
            <p>Student Gender:</p>
            <input type = "text" id ="student2Gender" name = "student2Gender" placeholder = "Choose" list = "2Gender">
                <datalist id = "2Gender">
                    <option value = "Male">
                    <option value = "Female">
                </datalist>
        </div>
        <div id="s2Entering">
            <p>Student Entering Year:</p>
            <input type = "text" id ="student2Entering" name = "student2Entering" placeholder = "Choose" list = "2Entering">
                <datalist id = "2Entering">
                    <option value = "2022-23">
                    <option value = "2023-24">
                </datalist>
        </div>
        <div id="s2Grade">
            <p>Student Grade:</p>
            <input type = "text" id ="student2Grade" name = "student2Grade" placeholder = "Choose" list = "2Grade">
                <datalist id = "2Grade">
                    <option value = "Pre-K">
                    <option value = "Kindergarten">
                    <option value = "1st">
                    <option value = "2nd">
                    <option value = "3rd">
                    <option value = "4th">
                    <option value = "5th">
                    <option value = "6th">
                    <option value = "7th">
                    <option value = "8th">
                </datalist>
        </div>
    </div>
    
    <div class="questionsSubsection" id="student3">
        <h3>Student #3</h3>
        <div id="s3FName">
            <p>Student First Name:</p>
            <input type="text" id="student3FName" name="student3FName">
        </div>
        <div id="s3LName">
            <p>Student Last Name:</p>
            <input type="text" id="student3LName" name="student3LName">
        </div>
        <div id="s3DB">
            <p>Student Name:</p>
            <input type="date" id="student3DB" name="student3DB">
        </div>
        <div id="s3Gender">
            <p>Student Gender:</p>
            <input type = "text" id ="student3Gender" name = "student3Gender" placeholder = "Choose" list = "3Gender">
                <datalist id = "3Gender">
                    <option value = "Male">
                    <option value = "Female">
                </datalist>
        </div>
        <div id="s3Entering">
            <p>Student Entering Year:</p>
            <input type = "text" id ="student3Entering" name = "student3Entering" placeholder = "Choose" list = "3Entering">
                <datalist id = "3Entering">
                    <option value = "2022-23">
                    <option value = "2023-24">
                </datalist>
        </div>
        <div id="s3Grade">
            <p>Student Grade:</p>
            <input type = "text" id ="student3Grade" name = "student3Grade" placeholder = "Choose" list = "3Grade">
                <datalist id = "3Grade">
                    <option value = "Pre-K">
                    <option value = "Kindergarten">
                    <option value = "1st">
                    <option value = "2nd">
                    <option value = "3rd">
                    <option value = "4th">
                    <option value = "5th">
                    <option value = "6th">
                    <option value = "7th">
                    <option value = "8th">
                </datalist>
        </div>
    </div>
    
    <div class="questionsSubsection" id="student4">
        <h3>Student #4</h3>
        <div id="s4FName">
            <p>Student First Name:</p>
            <input type="text" id="student4FName" name="student4FName">
        </div>
        <div id="s4LName">
            <p>Student Last Name:</p>
            <input type="text" id="student4LName" name="student4LName">
        </div>
        <div id="s4DB">
            <p>Student Name:</p>
            <input type="date" id="student4DB" name="student4DB">
        </div>
        <div id="s4Gender">
            <p>Student Gender:</p>
            <input type = "text" id ="student4Gender" name = "student4Gender" placeholder = "Choose" list = "4Gender">
                <datalist id = "4Gender">
                    <option value = "Male">
                    <option value = "Female">
                </datalist>
        </div>
        <div id="s4Entering">
            <p>Student Entering Year:</p>
            <input type = "text" id ="student4Entering" name = "student4Entering" placeholder = "Choose" list = "4Entering">
                <datalist id = "4Entering">
                    <option value = "2022-23">
                    <option value = "2023-24">
                </datalist>
        </div>
        <div id="s4Grade">
            <p>Student Grade:</p>
            <input type = "text" id ="student4Grade" name = "student4Grade" placeholder = "Choose" list = "4Grade">
                <datalist id = "4Grade">
                    <option value = "Pre-K">
                    <option value = "Kindergarten">
                    <option value = "1st">
                    <option value = "2nd">
                    <option value = "3rd">
                    <option value = "4th">
                    <option value = "5th">
                    <option value = "6th">
                    <option value = "7th">
                    <option value = "8th">
                </datalist>
        </div>
    </div>
    
    <div class="questionsSubsection" id="pg">
        <h2>Parent/Guardian Information</h2>
        <div id="parentFName">
            <p>Parent/Guardian First Name:</p>
            <input type="text" id="pgFName" name="pgFName" required>
        </div>
        <div id="parentLName">
            <p>Parent/Guardian Last Name:</p>
            <input type="text" id="pgLName" name="pgLName" required>
        </div>
        <div id="parentEmail">
            <p>Parent/Guardian Email:</p>
            <input type="email" id="pgEmail" name="pgEmail" required>
        </div>
        <div id="parentTel">
            <p>Parent/Guardian Phone: </p>
            <input type="tel" id="pgTel" name="pgTel" patten="[0-9]{3}-[0-9]{3}-[0-9]{4}" maxlength=12>
        </div>
        <div id="parentAdddress">
            <p>Address: </p>
            <input type="text" id="pgAddress" name="pgAddress" required>
        </div>
        <div id="parentCity">
            <p>City: </p>
            <input type="text" id="pgCity" name="pgCity" required>
        </div>
        <div id="parentState">
            <p>State: </p>
            <input type="text" id="pgState" name="pgState" required>
        </div>
        <div id="parentZip">
            <p>City: </p>
            <input type="text" id="pgZip" name="pgZip" required>
        </div>
        <div id="religPref">
            <h3>Family Religious Preference</h3>
            <input type = "text" id ="religiousPref" name = "religiousPref" placeholder = "Choose" list = "rPref" required>
                <datalist id = "rPref">
                    <option value = "Catholic">
                    <option value = "Christian">
                    <option value = "Jewish">
                    <option value = "Muslim">
                    <option value = "Hindu">
                    <option value = "Other">
                    <option value = "No religious affiliation">
                </datalist>
        </div>
        <div id="nutrition">
            <h3>Nutrition Preferences (Check all that Apply)</h3>
            <input type="checkbox" id="none" name="nutritPref[]" value="None">
                <label for="none">None</label>
            <input type="checkbox" id="veg" name="nutritPref[]" value="Vegetarian">
                <label for="veg">Vegetarian</label>
            <input type="checkbox" id="vegan" name="nutritPref[]" value="Vegan">
                <label for="vegan">Vegan</label>
            <input type="checkbox" id="dFree" name="nutritPref[]" value="DairyFree">
                <label for="dFree">Dairy Free</label>
            <input type="checkbox" id="rSF" name="nutritPref[]" value="refSugFree">
                <label for="rSF">Refined Sugar Free</label>
            <input type="checkbox" id="gFree" name="nutritPref[]" value="glutenFree">
                <label for="gFree">Gluten Free</label>
            <input type="checkbox" id="kosher" name="nutritPref[]" value="Kosher">
                <label for="kosher">Kosher</label>
        </div>
        <div id="nutAllergy">
           <h3>Nut Allergy Verification</h3>
           <p>We will occasionally serve nuts as part of school lunch. Please verify your child can safely attend this school with nuts present.</p>
           <input type = "text" id ="nA" name = "nA" placeholder = "Choose" list = "nut" required>
                <datalist id = "nut">
                    <option value = "My child has NO nut allergy.">
                    <option value = "My child has a nut allergy,  but he/she can still attend with nuts present.">
                    <option value = "My child has a nut allergy, and it would be unsafe for him/her.">
                </datalist>
        </div>
        <div id="howHear">
            <h3>How did You Hear about This School?</h3>
            <input type = "text" id ="hear" name = "hear" placeholder = "Choose" list = "how" required>
                <datalist id = "how">
                    <option value = "Millard Parent Group">
                    <option value = "Fans of St. Damian Group">
                    <option value = "Facebook Posts">
                    <option value = "Quelle Health Instagram">
                    <option value = "Word of mouth">
                </datalist>
        </div>
        <div id="posHelp">
            <h3>Check any of the following for which you have time and talent to share:</h3>
            <input type="checkbox" id="fund" name="possibleHelp[]" value="Fundraising">
                <label for="fund">Fundraising</label>
            <input type="checkbox" id="market" name="possibleHelp[]" value="Marketing">
                <label for="market">Marketing</label>
            <input type="checkbox" id="curric" name="possibleHelp[]" value="Curriculum">
                <label for="curric">Curriculum</label>
            <input type="checkbox" id="bod" name="possibleHelp[]" value="boardOD">
                <label for="bod">Board of Directors</label>
            <input type="checkbox" id="teachStaff" name="possibleHelp[]" value="TeacherStaff">
                <label for="teachStaff">Teacher and Staff Hiring</label>
            <input type="checkbox" id="health" name="possibleHelp[]" value="Health">
                <label for="health">Health and Wellness</label>
            <input type="checkbox" id="nutritLunch" name="possibleHelp[]" value="NutritLunch">
                <label for="nutritLunch">Nutrition - Lunch Program</label>
            <input type="checkbox" id="faith" name="possibleHelp[]" value="Faith">
                <label for="faith">Faith Development</label>
            <input type="checkbox" id="rE" name="possibleHelp[]" value="realEstate">
                <label for="rE">Real Estate</label>
            <input type="checkbox" id="arch" name="possibleHelp[]" value="Arch">
                <label for="arch">Architecture and/or Interior Design</label>
        </div>
        <div id="help">
            <h3>Would you like to volunteer for any of the selected committees above?</h3>
            <input type = "text" id ="ynHelp" name = "ynHelp" placeholder = "Choose" list = "YNH" required>
                <datalist id = "YNH">
                    <option value = "Yes">
                    <option value = "No">
                    <option value = "Maybe">
                </datalist>
        </div>
        
    </div>
    
    <div class="questionsSubsection" id="submit">
       <input type="submit" id="submitButton" name="submitButton" required>
       <p>Have Questions? Contact (Insert Email Here)</p>
    </div>
    </form>

    </div>
    </section>
    </body>
</html>