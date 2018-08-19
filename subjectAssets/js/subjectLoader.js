///////////// Load Content Functions //////////////////
//Refresh DOM Main
function refreshDOM(name){
    var subject = eval(name);
    removeClass(SubSectionDiv, 'p-0');
    loadSubject(subject);
}
//Section padding Fix
var SubSectionDiv = document.querySelector('.gen-subject-page');
// Variables
var HMDiv     = document.getElementById('handout'),
    courseDiv = document.querySelector('.subject-info'),
    slideDiv  = document.querySelector('.CourseSlides'),
    notesDiv  = document.querySelector('.CourseNotes'),
    tutsDiv   = document.querySelector('.TutSheets'),
    labDiv    = document.querySelector('.labManual'),
    papersDiv = document.querySelector('.prevPapers'),
    booksDiv  = document.querySelector('.CourseBooks');

var HMCards    = document.getElementById('HandoutMarksCard'),
    slideCards = document.getElementById('slideCards'),
    noteCards  = document.getElementById('noteCards'),
    tutCards   = document.getElementById('sheetCards'),
    labCards   = document.getElementById('labCards'),
    paperCards = document.getElementById('paperCards'),
    bookCards  = document.getElementById('bookCards');
    
var HMTemplate    = document.getElementById('HM_template').innerHTML,
    infoTemplate  = document.getElementById('info_template').innerHTML,
    slideTemplate = document.getElementById('slide_cards').innerHTML,
    noteTemplate  = document.getElementById('note_cards').innerHTML,
    tutTemplate   = document.getElementById('sheet_cards').innerHTML,
    labTemplate   = document.getElementById('lab_cards').innerHTML,
    paperTemplate = document.getElementById('paper_cards').innerHTML;
    bookTemplate  = document.getElementById('book_cards').innerHTML;

//Heart Of myAmigo - Subject Loader
function loadSubject(subject){
    var subjectLand = document.querySelector('.subContainer').style.display = 'none';
    // ShowDivs if Present in Subject
    if('name'  in subject){ showDiv(courseDiv, courseDiv,  infoTemplate,  subject); }
    if('marks' in subject){ showDiv(HMDiv,     HMCards,    HMTemplate,    subject); }
    if('slide' in subject){ showDiv(slideDiv,  slideCards, slideTemplate, subject); }
    if('note'  in subject){ showDiv(notesDiv,  noteCards,  noteTemplate,  subject); }
    if('sheet' in subject){ showDiv(tutsDiv,   tutCards,   tutTemplate,   subject); }
    if('lab'   in subject){ showDiv(labDiv,    labCards,   labTemplate,   subject); }
    if('paper' in subject){ showDiv(papersDiv, paperCards, paperTemplate, subject); }
    if('book'  in subject){ showDiv(booksDiv,  bookCards,  bookTemplate,  subject); }
    
    // HideDivs if !present in Subject
    if(!('name'  in subject)){ hideDiv(courseDiv); }
    if(!('marks' in subject)){ hideDiv(HMDiv ); }
    if(!('slide' in subject)){ hideDiv(slideDiv ); }
    if(!('note'  in subject)){ hideDiv(notesDiv ); }
    if(!('sheet' in subject)){ hideDiv(tutsDiv  ); }
    if(!('lab'   in subject)){ hideDiv(labDiv   ); }
    if(!('paper' in subject)){ hideDiv(papersDiv); }
    if(!('book'  in subject)){ hideDiv(booksDiv ); }
}

// Show & Hide Div functions with MustacheRender
function showDiv(div, cards, template, subject){
    if(div.classList.contains('d-none')){
        div.classList.remove('d-none');
    }
    cards.innerHTML = Mustache.render(template, subject);
}
function hideDiv(div){
    if(!(div.classList.contains('d-none'))){
        div.classList.add('d-none');
    }
}

function addClass(div, className){
    if(!(div.classList.contains(className))){
        div.classList.add(className);
    }
}
function removeClass(div, className){
    if(div.classList.contains(className)){
        div.classList.remove(className);
    }
}