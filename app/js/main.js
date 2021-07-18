// dropdown

const selectDeff = document.querySelector('.select-deff');
const select = selectDeff.parentNode;


selectDeff.addEventListener('click', () => {
    select.classList.toggle('select-active');
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


// Go to nex page

const sendForm = document.getElementById('send-form');

sendForm.addEventListener('click', (e) => {
    e.preventDefault();
    document.location.href = "next.html";
});




