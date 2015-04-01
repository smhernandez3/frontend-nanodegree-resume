
var bio = {
	"name": "Samuel Hernandez",
	"role": "Web Developer",
	"contacts": [
			{
			"mobile": "666-666-6666",
			"email": "samuel3hz@gmail.com",
			"twitter": "@smhz",
			"github": "smhernandez3",
			}
		],
	"welcomeMessage": "Trying to make a dollar out of what makes sense",
	"skills": ["JavaScript", "CSS", "HTML", "Photoshop", "Illustrator", "Final Cut Pro"]
};
var work = {
	"jobs": [
	{
		"employer": "Hack Reactor",
		"title": "Operations Associate",
		"location": "San Francsico",
		"dates": "2014",
		"description": "Worked with staff, instructors and students to maintain and improve IT related problems such as computer malfunction, network problems and audio systems.  Hack Reactor is an intensive 12-week boot camp that teaches students computer programming"
	},
	{
		"employer": "Luvocracy",
		"title": "Data Entry & Collection Associate",
		"location": "San Francsico",
		"dates": "2013",
		"description": "Responsible for editing and verifying product information from users.  Users submit product recommendations, which are then reviewed prior to publication on the website.  Editing product recommendations requires fixing broken links, uploading correct images, researching product prices, fixing taxonomy errors, filtering out spam, inserting correct product options and more"
	}]
};
var projects = {
	"projects": [
	{
		"title": "Portfolio Project",
		"dates": "March 2015",
		"description": "This website displays all the projects I have worked on for Udacity's online Nano Degree course.",
		"image": ["all_thumb.jpg", "all_thumb.jpg", "all_thumb.jpg"]
	}]
};
var education = {
	"school": [
	{
		"name": "University of San Francisco",
		"location": "San Francisco",
		"degree": "BA",
		"when": "2006-2010",
		"major": "Media Studies"
	},
	{
		"name": "Udacity",
		"location": "online",
		"degree": "Nano Degree",
		"when": "March 2015 - September 2015",
		"major": "Front-End Web Development"
	}]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

for(var i in bio.contacts){
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[i].mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts[i].email);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts[i].twitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts[i].github);
	var all = formattedMobile + formattedEmail + formattedTwitter + formattedGithub;
	$("#topContacts").append(all);
}
var formattedPic = HTMLbioPic.replace("%data%", "Square_resume_pic.jpg");
$("#header").append(formattedPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);


$("#header").append(HTMLskillsStart);
for(var i in bio.skills){
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
	$("#skills").append(formattedSkill);
}


for(var i in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedJob = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
	var formattedDates = HTMLprojectDates.replace("%data%", work.jobs[i].dates);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
	var formattedJOB_Title = formattedJob + formattedTitle + formattedDates + formattedLocation + formattedDescription;
	$(".work-entry:last").append(formattedJOB_Title);
}
  
function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);

projects.display = function(){
	for(var i in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		var all = formattedTitle + formattedDates + formattedDescription;
		$(".project-entry:last").append(all);

		if (projects.projects[i].image.length > 0) {
			for (var j in projects.projects[i].image){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].image[j]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};
projects.display();

for(var i in education.school){
	$("#education").append(HTMLschoolStart);
	var formattedschoolName = HTMLschoolName.replace("%data%", education.school[i].name);
	var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.school[i].degree);
	var form_da = HTMLschoolDates.replace("%data%", education.school[i].when);
	var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.school[i].location);
	var formattedMagor = HTMLschoolMajor.replace("%data%", education.school[i].major);
	var all = formattedschoolName + formattedschoolDegree + form_da + formattedschoolLocation + formattedMagor;
	$(".education-entry:last").append(all);
}


















