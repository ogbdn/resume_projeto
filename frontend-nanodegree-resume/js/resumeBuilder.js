/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
	name: "Othon Nin",
	role: "Web Developer",
	contacts: {
		"mobile": 21967621020,
		"email": "othon.nin@gmail.com",
		"github": "ogbdn",
		"nomeDeUsuarioGitHub": "ogbdn",
		"location": "Rio de Janeiro"
	},
	welcomeMessage: "Welcome to my CV",
	skills: ["Simpatico", " Inteligente"],
	biopic: "images/fry.jpg",
	
};

bio.display = function(){

	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
	var formattedPicture = HTMLbioPic.replace('%data%', bio.biopic );
	var formattedWelcome = HTMLwelcomeMsg.replace('%data%',bio.welcomeMessage);
	var formattedMobile = HTMLmobile.replace('%data%',bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace('%data%',bio.contacts.email);
	var formattedMGitHub = HTMLgithub.replace('%data%',bio.contacts.nomeDeUsuarioGitHub);
	var formattedLocation = HTMLlocation.replace('%data%',bio.contacts.location);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedMGitHub);
	$("#topContacts").append(formattedLocation);
	$("#header").append(formattedPicture);
	$("#header").append(formattedWelcome);
	$("#header").append(HTMLskillsStart);

	for (i in bio.skills){

		var formattedSkills = HTMLskills.replace('%data%',bio.skills[i]);
		$("#skills").append(formattedSkills);

	};
	
};

bio.display();

var work = {
	"jobs": [
		{
			"employer": "BNDES",
			"title": "Vp-of-Operations",
			"location": "Rio de Janeiro",
			"dates": "Jan 2014 - current date",
			"description": "Lorem ipsum dolor sit amet, in est vero corpora efficiendi, ius prima augue alterum cu, ei est tation torquatos. Viris invenire usu no, ridens salutatus quaerendum duo at, eu fugit alterum dolores sit. Periculis prodesset dissentiunt id eum, aeque laudem ullamcorper per et. Wisi debet cotidieque sed at, harum aperiam adversarium mei ad."
		},

		{
			"employer": "Petrobras",
			"title": "Internship",
			"location": "Rio de Janeiro",
			"dates": "Jan 2007 - Dec 2008",
			"description": "Ut aeterno definiebas reprehendunt has, magna malis eos an, ei his laudem tacimates reprimique. Vix eu evertitur referrentur, discere adolescens id cum. In malis lobortis forensibus nam, vel delenit eleifend in. Id cum doming omnesque, sea et noster saperet, ius et noster splendide persequeris."
		}
	]

};

var formattedWordEmployer;
var formattedWorkTitle;
var formattedEmployerTitle;
var formattedWorkDates;
var formattedworkDescription;
var formattedWorkLocation;

function displayWork(){

	for (i in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	formattedWordEmployer = HTMLworkEmployer.replace('%data%',work["jobs"][i]["employer"]);
	formattedWorkTitle = HTMLworkTitle.replace('%data%', work["jobs"][i]["title"]);
	formattedEmployerTitle = formattedWordEmployer + formattedWorkTitle;
	formattedWorkDates = HTMLworkDates.replace('%data%', work["jobs"][i]["dates"]);
	formattedworkDescription = HTMLworkDescription.replace('%data%', work["jobs"][i]["description"]);
	formattedWorkLocation = HTMLworkLocation.replace('%data%', work["jobs"][i]["location"]);
	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedWorkDates);
	$(".work-entry:last").append(formattedWorkLocation);
	$(".work-entry:last").append(formattedworkDescription);
	}

}

displayWork();


var project = {
 	projects: [ 
			 	{
			 	"title": "Sample Project 1",
			 	"dates": 2016,
			 	"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			 	"images":"images/197x148.gif" 
			 	},
			 	{
			 	"title": "Sample Project 2",
			 	"dates": 2017,
			 	"description": "Assueverit neglegentur his no, eos nominavi imperdiet ex, his an lorem iriure insolens. Ex nemore feugiat erroribus pro. Quo alterum dolores persequeris ex.",
			 	"images":"images/197x148.gif" 
			 	},
 			]
 };


var formattedProjectTitle;
var formattedProjectDates;
var formattedProjectDescription;
var formattedProjectImage;

project.display = function(){

	for (i in project.projects){
		$("#projects").append(HTMLprojectStart);
		formattedProjectTitle = HTMLprojectTitle.replace('%data%', project["projects"][i]["title"]);
		formattedProjectDates = HTMLprojectDates.replace('%data%', project["projects"][i]["dates"]);
		formattedProjectDescription = HTMLprojectDescription.replace('%data%', project["projects"][i]["description"]);
		formattedProjectImage = HTMLprojectImage.replace('%data%', project["projects"][i]["images"]);
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDescription);
		$(".project-entry:last").append(formattedProjectImage);
		
	}
	
}

project.display();


var educations = {
	"schools": [
		{
			"name": "Nova Southeastern University",
			"location": "Fort Lauderdale FL",
			"degree": "Masters",
			"major": ["CS"],
			"dates": "2004",
			"url": 'http://www.nova.edu/'
		},
		{
			"name": "Eckend College",
			"location": "Saint Petersburg FL",
			"degree": "BA",
			"major": ["CS"],
			"dates": "2013",
			"url": 'https://www.eckerd.edu/'
		}
	],
	"onlineCourses":[
			{
		 	title: "JavaScript Crash Course",
          	school: "UDACITY",
           	dates: "2018",
          	url: "https://br.udacity.com/"
			}
		]
};

educations.display = function(){

	for (i in educations.schools){
		$("#education").append(HTMLschoolStart);
		formattedSchoolName = HTMLschoolName.replace('%data%', educations["schools"][i]["name"]);
		formattedSchoolDegree =  HTMLschoolDegree.replace('%data%', educations["schools"][i]["degree"]);
		formattedNameDegree = formattedSchoolName + formattedSchoolDegree;
		formattedSchoolDates = HTMLschoolDates.replace('%data%', educations["schools"][i]["dates"]);
		formattedSchoolLocation = HTMLschoolLocation.replace('%data%', educations["schools"][i]["location"]);
		$(".education-entry:last").append(formattedNameDegree);
		$('a:last').attr('href', educations.schools[i]["url"]);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		for (educationMajor in educations.schools[i]["major"]){
			formattedSchoolMajor = HTMLschoolMajor.replace('%data%', educations.schools[i]["major"][educationMajor]);
			$(".education-entry:last").append(formattedSchoolMajor);
		}



		
	}
	
}

educations.display();



function Locationizer(work_obj){
	var locations = [];
	for (i in work_obj.jobs){

		locations.push(work_obj.jobs[i].location);
	}
	
	return locations;

}

Locationizer(work);




$("#mapDiv").append(googleMap);

function initMap() {
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -22.9522017, lng: -43.237062},
          zoom: 12
        });
    }





