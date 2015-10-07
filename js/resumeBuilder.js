/*
JSON Objects for the Online Resume

I decided to restructure this file because I don't want to search this entire
document to update a section. The goal is to place the more-frequently updated
sections towards the top of the document.

*/

//******************************************************************************
// adding additional files to the 'index.html' file:
//******************************************************************************
var myCSSsheet = '<link href="css/newStyle.css" rel="stylesheet">';
var bootstrapCSS = '<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">';
var bootstrapCSStheme = '<link href="bootstrap/css/bootstrap-theme.min.css" rel="stylesheet">';
var bootstrapFonts = '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">';
var bootstrapJS = '<script src="bootstrap/js/bootstrap.min.js" rel="stylesheet"></script>';
var theFooter = '<footer></footer>';


$(bootstrapCSS).appendTo( $("head") );
$(bootstrapCSStheme).appendTo( $("head") );
$(bootstrapFonts).appendTo( $("head") );
$(myCSSsheet).appendTo( $("head") );
$(theFooter).appendTo( $("html") );
$(bootstrapJS).appendTo( $("footer") );

//******************************************************************************
// filling in the most-frequently updated sections:
//******************************************************************************
var contacts = {
 mobile: "832-507-6677",
 email: "desiree.s.wilson@gmail.com",
 github: "https://github.com/DesireeWilson",
 twitter: "https://twitter.com/YuzuhaDW",
 linkedin: "https://www.linkedin.com/in/wilsondesiree",
 location: "San Antonio",
 fonts: ["fa fa-twitter-square", "fa fa-github-square", "fa fa-linkedin-square"]
};

var majors = ["Biology", "Biomedical Sciences"];
var schools = [
 {/*University of Texas Health Science Center at San Antonio Info:*/
 name: "University of Texas Health Science Center at San Antonio",
 location: "San Antonio, Texas",
 degree: "Doctorate of Philosophy",
 major: majors[1],
 dates: "2011-current",
 url: "http://www.uthscsa.edu/",
 nickname: "uthscsa_school",
 images: "images/uthscsa-logo2.png"
 },
 {/*University of Houston-Downtown Info:*/
 name: "University of Houston-Downtown",
 location: "Houston, Texas",
 degree: "Bachelors of Science",
 major: majors[0],
 dates: "2006-2007",
 url: "https://www.uhd.edu/Pages/home.aspx",
 nickname: "uhd_school",
 images: "images/uhd-logo2.jpg"
 },
 {/*San Jacinto College North Campus Info:*/
 name: "San Jacinto College North Campus",
 location: "Houston, Texas",
 degree: "transferred",
 major: majors[0],
 dates: 2007,
 url: "http://www.sanjac.edu/",
 nickname: "sanjac_school",
 images: "images/sanjac-logo2.png"
 } 
];

var onlineCourses = [
 [/*Udacity Courses:*/
 {/*Front-End Web Development Nanodegree*/
 title: "Front-End Web Development Nanodegree",
 school: "Udacity",
 date: 2015,
 url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
 nickname: "fend_udacity"
 },
 {/*Intro to Descriptive Statistics*/
 title: "Intro to Descriptive Statistics",
 school: "Udacity",
 date: 2015,
 url: "https://www.udacity.com/course/intro-to-descriptive-statistics--ud827",
 nickname: "introStats_udacity"
 },
 {/*How to Use Git and GitHub*/
 title: "How to Use Git and GitHub",
 school: "Udacity",
 date: 2015,
 url: "https://www.udacity.com/course/how-to-use-git-and-github--ud775",
 nickname: "github_udacity"
 }
 ]
];


var skills = ["biomedical research", "data analysis", "R", "Unix/Linux", "Shell Scripting", "Java", "Python", "JavaScript", "HTML", "CSS"];
var jobs = [
 {/*most recent job*/
 employer: "University of Texas Health Science Center at San Antonio",
 title: "Graduate Research Student",
 location: "San Antonio, Texas",
 dates: "2011 - current",
 description: "During my graduate studies, I gained skills in " +
 "analyzing human genome data. The my thesis project's " +
 "focus is to discover biomarkers associated with "+
 "prostate cancer progression using DNA methylation, " +
 "gene expression and single nucleotide polymorphisms " +
 "(SNPs).",
 nickname: "uthscsa_job",
 url: "http://www.uthscsa.edu/",
 images: "images/uthscsa-logo2.png"
 },
 {/*2nd-most recent job*/
 employer: "University of Texas MD Anderson",
 title: "Undergraduate research student",
 location: "Houston, Texas",
 dates: "2009 - 2011",
 description: "Here's is where I had the pleasure of gaining a " +
 "myriad of wetlab techniques under the watchful " +
 "eyes of Drs. Hesham Amin, Ping Shi and Deeksha " +
 "Vishwamitra. I learned how to isolate DNA and RNA; " +
 "performed protein extractions, Western blots, "+
 "immunoprecipitation and basic cell culture techniques.",
 nickname: "mdanderson_job",
 url: "http://www.mdanderson.org/",
 images: "images/mdanderson-logo2.png"
 },
 {/*3rd-most recent job*/
 employer: "University of Houston-Downtown",
 title: "Summer Undergraduate Research Student",
 location: "Houston, Texas",
 dates: "2008",
 description: "With Dr. Miang Jiang's guidance, we were able to " +
 "create a film/sensor that catalyzes hydrazine, " +
 "a component in fuel used to launch space aircrafts, " +
 "more efficiently. Additionally, this same film also " +
 "catalyzes hydrogen peroxide, a main compound in " +
 "fuel-cells.",
 nickname: "uhd_job",
 url: "https://www.uhd.edu/Pages/home.aspx",
 images: "images/uhd-logo2.jpg"
 }
];


var projects = [
 {/*first project*/
 title: "Validation of copy number variants associated with " +
 "prostate cancer risk and prognosis",
 dates: 2014,
 description: "Reproducibility is a huge problem in biological " +
 "research. The aim of this study was to validate " +
 "eight copy number variations previously reported " +
 "to be associated with prostate cancer aggressiveness." +
 "In our independent sample cohort, only one of the " +
 "eight loci was associated with prostate cancer " +
 "aggression.",
 images: "images/paper1-small_small.jpg",
 url: "http://www.ncbi.nlm.nih.gov/pmc/articles/PMC4105226/",
 nickname: "project1"
 },
 {/*second project*/
 title: "MicroRNA 96 is a post-transcriptional suppressor of " +
 "anaplastic lymphoma kinase expression",
 dates: 2012,
 description: "In this " +
 "project, we discovered that micro RNA-96 expression " +
 "donw-regulates the oncogene protein Anaplastic " +
 "Lymphoma Kinase (ALK) in lymphoma cell lines, " +
 "leading to decreased cell migration and proliferation.",
 images: "images/paper2-small_small.jpg",
 url: "http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3349824/",
 nickname: "project2"
 },
 {/*third project*/
 title: "Expression and effects of inhibition of type I " +
 "insulin-like growth factor receptor tyrosine kinase in "+
 "mantle cell lymphoma",
 dates: 2011,
 description: "For this " +
 "project, we wanted to discover if decreasing IGF-1R " +
 "signalling leads to decreases cell viabiliy and " +
 "migration in lymphoma cell lines. It is common and " +
 "expected that cancer cells have utilize multiple " +
 "cellular pathways to ensure their survival. " ,
 images: "images/paper3-small_small.jpg",
 url: "http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3105649/",
 nickname: "project3"
 }
];

//******************************************************************************
//the four sections of the resume:
var Bio = {
 name: "Desiree Wilson",
 role: "Front-End Web Developer",
 contacts,
 welcomeMessage: "Irasshaimase!",
 skills,
 bioPic: "https://avatars3.githubusercontent.com/u/12715285?v=3&s=460",
 display: function(){ 
 /* variables for contact and bio info */
 var HTMLPicAndSkills = '<div class="PicAndSkills"></div>';
 var HTMLbioPicMsg = '<div class="bioPicMsg"></div>';
 var HTMLwelcomeMsg = '<p class="welcome-message">%data%</p>';
 var formattedWorkLocation = HTMLworkLocation.replace("%data%", Work.jobs[0].location);
 var formattedName = HTMLheaderName.replace("%data%", Bio.name);
 var formattedRole = HTMLheaderRole.replace("%data%", Bio.role);

 var formattedContact = HTMLcontactGeneric.replace("%contact%", "Contact Me!").replace("%data%",'');
 var formattedMobile = HTMLmobile.replace("%data%", Bio.contacts.mobile);
 var formattedEmail = HTMLemail.replace("%data%", Bio.contacts.email);
 var formattedTwitter = HTMLtwitter.replace("%data%", Bio.contacts.twitter);
 var formattedGithub = HTMLgithub.replace("%data%", Bio.contacts.github);

 var formattedLocation = HTMLlocation.replace("%data%", Bio.contacts.location);
 var formattedBioPic = HTMLbioPic.replace("%data%", Bio.bioPic);
 var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", Bio.welcomeMessage);
 
 /* variables for the let's connect section: */
 var HTMLtwitterLC = '<li class="flex-item"><span class="white-text">%data%</span></li>';
 var HTMLtwitterURL = '<a href="%data%"></a>';
 var HTMLtwitterFont = '<i class="%data%"></i>'; 
 var HTMLgithubLC = '<li class="flex-item"><span class="white-text">%data%</span></li>';
 var HTMLgithubURL = '<a href="%data%"></a>';
 var HTMLgithubFont = '<i class="%data%"></i>';
 var HTMLlinkedinLC = '<li class="flex-item"><span class="white-text">%data%</span></li>';
 var HTMLlinkedinFont = '<i class="%data%"></i>';
 var HTMLlinkedinURL = '<a href="%data%"></a>'; 

 
 /* appending variables for contact and bio info to 'index.html' */ 
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 $("#header").append(HTMLPicAndSkills);
 $(".PicAndSkills").append(HTMLbioPicMsg);
 $(".bioPicMsg").append(formattedWelcomeMsg);
 $(".bioPicMsg").append(formattedBioPic); 
 $("#topContacts").append(formattedMobile);
 $("#topContacts").append(formattedEmail);
 $("#topContacts").append(formattedLocation); 
 $(".PicAndSkills").append(HTMLskillsStart);
 
 
 for(i = 0; i < Bio.skills.length; i++){
 var formattedSkills = HTMLskills.replace("%data%", Bio.skills[i]);
 $("#skills").append(formattedSkills);
 
 }
 
 /* appending variables for the let's connect section to the footer */
 var formattedTwitterLC = HTMLtwitterLC.replace("%data%", "Twitter"); 
 var formattedTwitterLC = $(formattedTwitterLC).attr("id", "twitter"); 
 var formattedTwitterURL = HTMLtwitterURL.replace("%data%", contacts.twitter); 
 var formattedTwitterURL = $(formattedTwitterURL).attr("id", "twitter-url");
 var formattedTwitterFont = HTMLtwitterFont.replace("%data%", contacts.fonts[0]);
 var formattedTwitterFont = $(formattedTwitterFont).attr("id", "twitter-font"); 
 var formattedGithubLC = HTMLgithubLC.replace("%data%", "Github");
 var formattedGithubLC = $(formattedGithubLC).attr("id", "github");
 var formattedGithubURL = HTMLgithubURL.replace("%data%", contacts.github); 
 var formattedGithubURL = $(formattedGithubURL).attr("id", "github-url");
 var formattedGithubFont = HTMLgithubFont.replace("%data%", contacts.fonts[1]);
 var formattedGithubFont = $(formattedGithubFont).attr("id","github-font");
 var formattedLinkedInLC = HTMLlinkedinLC.replace("%data%", "LinkedIn"); 
 var formattedLinkedInLC = $(formattedLinkedInLC).attr("id", "linkedin"); 
 var formattedLinkedInURL = HTMLlinkedinURL.replace("%data%", contacts.linkedin); 
 var formattedLinkedInURL = $(formattedLinkedInURL).attr("id", "linkedin-url");
 var formattedLinkedInFont = HTMLlinkedinFont.replace("%data%", contacts.fonts[2]);
 var formattedLinkedInFont = $(formattedLinkedInFont).attr("id", "linkedin-font"); 
 
 $("#footerContacts").append(formattedTwitterLC);
 $("#twitter").append(formattedTwitterURL);
 $("#twitter-url").append(formattedTwitterFont);
 $("#footerContacts").append(formattedGithubLC);
 formattedGithubLC.append(formattedGithubURL);
 formattedGithubURL.append(formattedGithubFont);
 $("#footerContacts").append(formattedLinkedInLC);
 formattedLinkedInLC.append(formattedLinkedInURL);
 formattedLinkedInURL.append(formattedLinkedInFont);
 
 }
};

var Education = {
 schools,
 onlineCourses,
 display: function(){
 var HTMLschoolStartFlex = '<div class="education-entry-flex" id="schoolFlex"></div>';
 var newHTMLschoolStart = '<div class="education-entry" id="data"></div>';
 $(HTMLschoolStartFlex).appendTo( $("#education") );
 
 for(i = 0; i < schools.length;i++){ 
 var formattedSchoolStart = newHTMLschoolStart.replace("data", schools[i].nickname);
 var schoolPic = $('<img>').attr("src", schools[i].images);
 var theID = "#data"; 
 var formattedTheID = theID.replace("data" , $(formattedSchoolStart).attr("id"));
 var formattedSchoolName = HTMLschoolName.replace("%data%", schools[i].name);
 var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", schools[i].degree);
 var formattedSchoolNameDegree = formattedSchoolName.concat(formattedSchoolDegree);
 var formattedSchoolNameDegree = formattedSchoolNameDegree.replace("#", schools[i].url);
 var formattedSchooDates = HTMLschoolDates.replace("%data%",schools[i].dates);
 var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", schools[i].location);
 var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", schools[i].major);
 
 $(formattedSchoolStart).appendTo( $("#schoolFlex") );
 $(schoolPic).appendTo( $(formattedTheID) );
 $(formattedSchoolNameDegree).appendTo( $(formattedTheID) );
 $(formattedSchooDates).appendTo( $(formattedTheID) );
 $(formattedSchoolLocation).appendTo( $(formattedTheID) );
 $(formattedSchoolMajor).appendTo( $(formattedTheID) );
 };
 
 var HTMLonlineCourseStartFlex = '<div class="onlineCourse-entry-flex" id="onlineFlex"></div>';
 var HTMLonlineCourseStart = '<div class= "onlineCourse-entry" id="data"></div>';
 $(HTMLonlineClasses).appendTo( $("#education") );
 $(HTMLonlineCourseStartFlex).appendTo( $("#education") );
 
 for(i = 0; i < onlineCourses[0].length;i++){ 
 var theID = "#data"; 
 var formattedOnlineCourseStart = $(HTMLonlineCourseStart).attr("id", onlineCourses[0][i].nickname);
 var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourses[0][i].title);
 var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourses[0][i].school); 
 var formattedOnlineTitleSchool = formattedOnlineTitle.concat(formattedOnlineSchool);
 var formattedOnlineTitleSchool = formattedOnlineTitleSchool.replace("#", onlineCourses[0][i].url);
 var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourses[0][i].date); 
 
 $(formattedOnlineCourseStart).appendTo( $("#onlineFlex") );
 $(formattedOnlineTitleSchool).appendTo( $(formattedOnlineCourseStart) );
 $(formattedOnlineDates).appendTo( $(formattedOnlineCourseStart) );
 $("<br>").appendTo( $(formattedOnlineCourseStart) );
 }; 

 }
};

var Work = {
 jobs,
 display: function(){
 var HTMLworkStartFlex = '<div class="work-entry-flex" id="workFlex"></div>';
 var newHTMLworkStart = '<div class="work-entry" id="data"></div>';
 $(HTMLworkStartFlex).appendTo( $("#workExperience") );
 
 for(i = 0; i < jobs.length; i++){ 
 var formattedWorkStart = newHTMLworkStart.replace("data", jobs[i].nickname);
 var workPic = $('<img>').attr("src", jobs[i].images);
 var theID = "#data";
 var formattedTheID = theID.replace("data" , $(formattedWorkStart).attr("id"));
 var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", jobs[i].employer);
 var formattedWorkTitle = HTMLworkTitle.replace("%data%", jobs[i].title);
 var formattedEmployerTitle = formattedWorkEmployer.concat(formattedWorkTitle);
 var formattedEmployerTitle = formattedEmployerTitle.replace("#", jobs[i].url);
 var formattedWorkDates = HTMLworkDates.replace("%data%", jobs[i].dates);
 var formattedWorkLocation = HTMLworkLocation.replace("%data%",jobs[i].location);
 var formatterWorkDescription = HTMLworkDescription.replace("%data%", jobs[i].description);
 
 $(formattedWorkStart).appendTo( $("#workFlex") );
 $(workPic).appendTo( $(formattedTheID) );
 $(formattedEmployerTitle).appendTo( $(formattedTheID) ); 
 $(formattedWorkDates).appendTo($(formattedTheID));
 $(formattedWorkLocation).appendTo($(formattedTheID));
 $(formatterWorkDescription).appendTo($(formattedTheID));
 }
 }
 
};

var Projects = {
 projects,
 display: function(){ 
 /* modal variables */
 var HTMLmodalFade = '<div class="modal fade" id="data" tabindex="-1" role="dialog" aria-hidden="true"></div>';
 var HTMLmodalDialog = '<div class="modal-dialog" id="data"></div>';
 var HTMLmodalContent = '<div class="modal-content" id="data"></div>'; 
 var HTMLmodalBody = '<div class="modal-body" id="data"></div>';
 var HTMLmodalIframe = '<iframe class="iframe" id="data"></iframe>'; 
 var HTMLmodalFooter = '<div class="modal-footer" id="data"></div>';
 var HTMLmodalButton = '<button type="button" class="btn btn-default" id="data" data-dismiss="modal">Close</button>';
 
 
 /* project variables */
 var HTMLprojectStartFlex = '<div class="project-entry-flex" id="projectFlex"></div>';
 var HTMLprojectStart = '<div class="project-entry" id="data"></div>';
 var HTMLprojectImage = '<img src="%data" data-toggle="modal" data-target="#%data1">';
 $(HTMLprojectStartFlex).appendTo( $("#projects") );
 
 for(i = 0; i < projects.length; i++){ 
 /* modal variables */
 var modalID = projects[i].nickname;
 var modalDialogID = projects[i].nickname.concat("-dialog");
 var modalContentID = projects[i].nickname.concat("-content");
 var modalBodyID = projects[i].nickname.concat("-body");
 var iframeID = projects[i].nickname.concat("-iframe");
 var modalFooterID = projects[i].nickname.concat("-footer");
 var buttonID = projects[i].nickname.concat("-button");
 var formattedModal = $(HTMLmodalFade).attr("id", projects[i].nickname);
 var formattedModalDialog = $(HTMLmodalDialog).attr("id", modalDialogID);
 var formattedModalContent = $(HTMLmodalContent).attr("id", modalContentID);
 var formattedModalBody = $(HTMLmodalBody).attr("id", modalBodyID);
 var formattedModalIframe = $(HTMLmodalIframe).attr("id", iframeID);
 var formattedModalIframe = $(formattedModalIframe).attr("src", projects[i].url);
 var formattedModalFooter = $(HTMLmodalFooter).attr("id", modalFooterID);
 var formattedModalButton = $(HTMLmodalButton).attr("id", buttonID);
 
 
 /* project variables */
 var formattedProjectStart = $(HTMLprojectStart).attr("id", projects[i].nickname.concat("-entry"));
 var formattedProjectImage = $(HTMLprojectImage).attr("id", projects[i].nickname.concat("-img"));
 var formattedProjectImage = $(formattedProjectImage).attr("data-target", "#".concat(modalID));
 var formattedProjectImage = $(formattedProjectImage).attr("src", projects[i].images); 
 var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects[i].title);
 var formattedProjectTitle = $(formattedProjectTitle).attr("href", projects[i].url); 
 var formattedProjectDates = HTMLprojectDates.replace("%data%", projects[i].dates); 
 var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects[i].description); 
 
 
 /* adding the project variables to the 'index.html' file */ 
 $(formattedProjectStart).appendTo( $("#projectFlex") );
 $(formattedProjectImage).appendTo( $( "#".concat($(formattedProjectStart).attr("id")) ) );
 $(formattedProjectTitle).appendTo( $( "#".concat($(formattedProjectStart).attr("id")) ) );
 $(formattedProjectDates).appendTo( $( "#".concat($(formattedProjectStart).attr("id")) ) );
 $(formattedProjectDescription).appendTo( $( "#".concat($(formattedProjectStart).attr("id")) ) );
 
 
 /* adding the modal variables to the 'index.html' file */ 
 $(formattedModal).appendTo( $("footer") );
 $(formattedModalDialog).appendTo( $("#".concat(modalID)) );
 
 $(formattedModalContent).appendTo( $("#".concat(modalDialogID)) );
 $(formattedModalBody).appendTo( $("#".concat(modalContentID)) );
 $(formattedModalIframe).appendTo( $("#".concat(modalBodyID)) );
 $(formattedModalFooter).appendTo( $("#".concat(modalBodyID)) );
 $(formattedModalButton).appendTo( $("#".concat(modalFooterID)) );
 
 
 
 } 

 }
};

/* displaying the sections of the resume:*/
Bio.display();
Projects.display();
Work.display();
Education.display();



var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>'; 
var iframeMap1 = '<iframe id="lived" src="map.html"></iframe>'; 
var iframeMap2 = '<iframe id="dream" src="map2.html"></iframe>';

$("#mapDiv").append(googleMap);
$("#map").append(iframeMap1);
$("#map").append(iframeMap2);


