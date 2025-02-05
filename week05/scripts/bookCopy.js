const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const li = document.querySelector('li')
const deleteButton = document.createElement('button');

//check
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter)
    
});


//check
button.addEventListener('click', () =>{
    if (input.value !==''){
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value == '';
        input.focus();
    }
})

function displayList(item){
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.texContent = item;
    deleteButton.texContent = '❌';
    deleteButton.classList.add('delete')
    li.append(deleteButton);
    li.append(li);
    deleteButton.addEventListener('click', function(){
        list.removeChild(li);
        deleteChapter(li.texContent);
        input.focus();
    });
    console.log('Hello, I am trying to understand (:')
}


function setChapterList(){
    localStorage.setItem('myBOMList', JSON.stringify(chaptersArray));
}

function getChapterList(){
    return JSON.parse(localStorage.getItem('myBOMList'));
}

function deleteChapter(chapter){
    chapter = chapter.slice(0,chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

li. textContent = input.value;

deleteButton.textContent = '❌';

li.append(deleteButton);
li.append(li);






deleteButton.addEventListener('click', function(){
    list.removeChild(li);
    input.focus();
});

input.value = '';
input.focus();


