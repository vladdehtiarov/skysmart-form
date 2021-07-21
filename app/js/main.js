// dropdown

const selectDeff = document.getElementById('chYears');
const selectOption = document.querySelectorAll('.select-option');

selectDeff.addEventListener('click', () => {
    selectDeff.classList.toggle('active');
    selectOption.forEach(i => {
        i.classList.toggle('active');
    });
});

selectOption[0].addEventListener('click', function() {
    selectDeff.value = '7-12 лет';
    this.classList.toggle('active');
    selectOption[1].classList.toggle('active');
    selectDeff.classList.toggle('active');

});

selectOption[1].addEventListener('click', function() {
    selectDeff.value = '13-17 лет';
    this.classList.toggle('active');
    selectOption[0].classList.toggle('active')
    selectDeff.classList.toggle('active');

});


selectDeff.addEventListener('click', () => {
    selectDeff.classList.toggle('select-active');
});

// text area
const textarea = document.querySelectorAll('.textarea');
const textareaStory = document.querySelector('.textarea-story');

textarea.forEach(i => {
    char(i, 200);
});

char(textareaStory, 2500);

function char(parent, maxSize) {
    const ch = parent.querySelector('div');
    const t = parent.querySelector('textarea');

    t.addEventListener('input', () => {
       ch.innerText = `${t.value.length}/${maxSize}`;
    });
}

//File uploader

const upMenu = document.querySelector('.uppload-menu');

const upVideo =document.getElementById('upp-video');
const upImage =document.getElementById('upp-image');
const upStory =document.getElementById('upp-story');

const upVideoWrapp =document.getElementById('uppVideoWrapp');
const upImageWrapp =document.getElementById('uppImageWrapp');
const upStoryWrapp =document.getElementById('uppStoryWrapp');

 upMenu.addEventListener('click', (e) => {
        for(let i = 0; i < upMenu.children.length; i++) {
            upMenu.children[i].classList.remove('active-upp');
        }
        e.target.classList.add('active-upp');

     if (upVideo.classList.contains('active-upp')) {
         upVideoWrapp.style.display = 'block';
         upImageWrapp.style.display = 'none';
         upStoryWrapp.style.display = 'none';

     } else if (upImage.classList.contains('active-upp')) {
         upImageWrapp.style.display = 'block';
         upVideoWrapp.style.display = 'none';
         upStoryWrapp.style.display = 'none';

     } else if (upStory.classList.contains('active-upp')) {
         upStoryWrapp.style.display = 'block';
         upVideoWrapp.style.display = 'none';
         upImageWrapp.style.display = 'none';
     }
 });


// Go to nex page and form validate

let validateForm = function (element, options) {
    new window.JustValidate(element, {
        rules: options,
        // Start if valid
        submitHandler: function (form) {
            //Go to page next if valid
            document.location.href = "next.html";
        }
    });
};

validateForm('.form',
    {
                email: {required:true, email: true},
                name: {required: true},
                fullName: {required: true},
                chYears: {required: true},
                superPower: {required: true},
                whatStopping: {required: true},
                favorLess: {required: true},
                uppVideo: {required: true},
                uppImage: {required: true},
                uppStoryArea: {required: true},
                linkPost: {required: true},
                persomalData: {required: true},
                rules: {required: true}
            });


const upFile = document.getElementById('file');
const upFileText = document.getElementById('uppImageArea');

upFile.onchange = function() {
    let fileName = this.files.item(0).name;
    // console.dir(this.files.item(0).name);
    upFileText.value = fileName;
};



