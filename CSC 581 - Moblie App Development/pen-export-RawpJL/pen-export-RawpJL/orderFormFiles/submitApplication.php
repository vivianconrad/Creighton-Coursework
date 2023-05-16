<!doctype html>

<?php
 include("caDB.inc");
?>
<html>

<head>
    <title> Application Submission! </title>
    <link href="corsano.css" type="text/css">
    <link rel="preconnect" href="https://fonts.googleapis.com"> 
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
    <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200;0,300;0,400;0,700;1,200;1,300;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet">
    </head>
  
<body>

<section class="main">
    <h1>Corsano Academy Family Information Form</h1>
    
    <p id="thankYou"> Thank you for your information form! Your form will be processed by the faculty of Corsano Academy. An email will be sent to you about the application!</p>

</section>
        
        
<?php 
function insertDataToDB()
{
    /*----------Connect to Database----------*/
    $dataBase = caDB();
 /*------------------------------------------------------------------------------------------------------*/   
    /*----------Formatting for pgInfo Database----------*/
    $inputpgINSERT = "INSERT INTO pgInfo(fName,lName,email,tel,address,city,state,zip,howHear,canHelp,ynHelp)";
    
    
    $inputpgSTART = "VALUES('";
    /*----------All  Inserted  Info for Parent/Guardian----------*/
    $inputpgFName = mysqli_real_escape_string($dataBase, $_POST['pgFName'])."','";
    $inputpgLName = mysqli_real_escape_string($dataBase, $_POST['pgLName'])."','";
    $inputpgEmail = mysqli_real_escape_string($dataBase, $_POST['pgEmail'])."','";
    $inputpgTel = mysqli_real_escape_string($dataBase, $_POST['pgTel'])."','";
    $inputpgAddress = mysqli_real_escape_string($dataBase, $_POST['pgAddress'])."','";
    $inputpgCity = mysqli_real_escape_string($dataBase, $_POST['pgCity'])."','";
    $inputpgState = mysqli_real_escape_string($dataBase, $_POST['pgState'])."','";
    $inputpgZip = mysqli_real_escape_string($dataBase, $_POST['pgZip'])."','";
    $inputhear = mysqli_real_escape_string($dataBase, $_POST['hear'])."','";
    
    
    
        $posHelp = $_GET['possibleHelp'];
        $_POST['getpossibleHelp'] = implode(",", $posHelp);
    $inputpossibleHelp = mysqli_real_escape_string($dataBase, $_POST['getpossibleHelp'])."','";
    $inputynHelp = mysqli_real_escape_string($dataBase, $_POST['ynHelp']);
    
    $inputpgEND = "');";
    
    /*----------Concatinate INSERT Segemnts----------*/
    $queryPG = $inputpgINSERT.$inputpgSTART.$inputpgFName.$inputpgLName.$inputpgEmail.$inputpgTel.$inputpgAddress.$inputpgCity.$inputpgState.$inputpgZip.$inputhear.$inputpossibleHelp.$inputynHelp.$inputpgEND;

    /*----------Push INSERT to childrenInfo----------*/
    $resultChildren = mysqli_query($dataBase, $queryPG) or die('Query failed: ' . mysqli_error($dataBase));
    

/*------------------------------------------------------------------------------------------------------*/
    /*----------Formatting for childrenInfo Database----------*/
    $inputchildrenINSERT = "INSERT INTO childrenInfo(numChildren,s1FN,s1LN,s1DB,s1GEN,s1EY,s1GRA,s2FN,s2LN,s2DB,s2GEN,s2EY,s2GRA,s3FN,s3LN,s3DB,s3GEN,s3EY,s3GRA,s4FN,s4LN,s4DB,s4GEN,s4EY,s4GRA)";
    
    
    $inputchildrenSTART = "VALUES('";
    /*----------All  Inserted  Info for Number of Children----------*/
    $inputnumC = mysqli_real_escape_string($dataBase, $_POST['numKids'])."','";

    /*----------All  Inserted  Info for Child 1----------*/
    $inputs1FN = mysqli_real_escape_string($dataBase, $_POST['student1FName'])."','";
    $inputs1LN = mysqli_real_escape_string($dataBase, $_POST['student1LName'])."','";
    $inputs1DB = mysqli_real_escape_string($dataBase, $_POST['student1DB'])."','";
    $inputs1GEN = mysqli_real_escape_string($dataBase, $_POST['student1Gender'])."','";
    $inputs1EY = mysqli_real_escape_string($dataBase, $_POST['student1Entering'])."','";
    $inputs1GRA = mysqli_real_escape_string($dataBase, $_POST['student1Grade'])."','";

    /*----------All  Inserted  Info for Child 2----------*/
    $inputs2FN = mysqli_real_escape_string($dataBase, $_POST['student2FName'])."','";
    $inputs2LN = mysqli_real_escape_string($dataBase, $_POST['student2LName'])."','";
    $inputs2DB = mysqli_real_escape_string($dataBase, $_POST['student2DB'])."','";
    $inputs2GEN = mysqli_real_escape_string($dataBase, $_POST['student2Gender'])."','";
    $inputs2EY = mysqli_real_escape_string($dataBase, $_POST['student2Entering'])."','";
    $inputs2GRA = mysqli_real_escape_string($dataBase, $_POST['student2Grade'])."','";

    /*----------All  Inserted  Info for Child 3----------*/
    $inputs3FN = mysqli_real_escape_string($dataBase, $_POST['student3FName'])."','";
    $inputs3LN = mysqli_real_escape_string($dataBase, $_POST['student3LName'])."','";
    $inputs3DB = mysqli_real_escape_string($dataBase, $_POST['student3DB'])."','";
    $inputs3GEN = mysqli_real_escape_string($dataBase, $_POST['student3Gender'])."','";
    $inputs3EY = mysqli_real_escape_string($dataBase, $_POST['student3Entering'])."','";
    $inputs3GRA = mysqli_real_escape_string($dataBase, $_POST['student3Grade'])."','";

    /*----------All  Inserted  Info for Child 4----------*/
    $inputs4FN = mysqli_real_escape_string($dataBase, $_POST['student4FName'])."','";
    $inputs4LN = mysqli_real_escape_string($dataBase, $_POST['student4LName'])."','";
    $inputs4DB = mysqli_real_escape_string($dataBase, $_POST['student4DB'])."','";
    $inputs4GEN = mysqli_real_escape_string($dataBase, $_POST['student4Gender'])."','";
    $inputs4EY = mysqli_real_escape_string($dataBase, $_POST['student4Entering'])."','";
    $inputs4GRA = mysqli_real_escape_string($dataBase, $_POST['student4Grade']);

    $inputchildrenEND = "');";

    /*----------Concatinate INSERT Segemnts----------*/
    $queryChildren = $inputchildrenINSERT.$inputchildrenSTART.$inputnumC.$inputs1FN.$inputs1LN.$inputs1DB.$inputs1GEN.$inputs1EY.$inputs1GRA.$inputs2FN.$inputs2LN.$inputs2DB.$inputs2GEN.$inputs2EY.$inputs2GRA.$inputs3FN.$inputs3LN.$inputs3DB.$inputs3GEN.$inputs3EY.$inputs3GRA.$inputs4FN.$inputs4LN.$inputs4DB.$inputs4GEN.$inputs4EY.$inputs4GRA.$inputchildrenEND;

    /*----------Push INSERT to childrenInfo----------*/
    $resultChildren = mysqli_query($dataBase, $queryChildren) or die('Query failed: ' . mysqli_error($dataBase));


 /*------------------------------------------------------------------------------------------------------*/   
    /*----------Formatting for familyInfo Database----------*/
    $inputfamilyINSERT = "INSERT INTO familyInfo(fLN,religPref,nutritPref,nutAlPref)";
    
    $inputfamilySTART = "VALUES('";
    
    $inputfLName = mysqli_real_escape_string($dataBase, $_POST['pgLName'])."','";
    $inputreligiousPref = mysqli_real_escape_string($dataBase, $_POST['religiousPref'])."','";
    
    
    
        $nPref = $_GET['nutritPref'];
        $_POST['getnutritPref'] = implode(",", $nPref);
    $inputnutritPref = mysqli_real_escape_string($dataBase, $_POST['getnutritPref'])."','";
    
    $inputnA = mysqli_real_escape_string($dataBase, $_POST['nA']);
    
    $inputfamilyEND = "');";
    
    $queryFamily = $inputfamilyINSERT.$inputfamilySTART.$inputfLName.$inputreligiousPref.$inputnutritPref.$inputnA.$inputfamilyEND;
    
    $resultFamily = mysqli_query($dataBase, $queryFamily) or die('Query failed: ' . mysqli_error($dataBase));
    
    
    mysql_close($dataBase);
}


insertDataToDB();


?>
</body>


</html>
       

       
