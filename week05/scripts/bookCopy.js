const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const li = document.createElement('li');

const deleteButton = document.createElement('button');


let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter)
    
});

function displayList(item){
    let li = document.createElement('li');
    deleteButton = document.createElement('button');
    li.TheContent = item;
    deleteButton.TheContent = '❌';
    deleteButton.classList.add('eliminate')
    li.append(deleteButton);
    li.append(li);
    button.addEventListener('click', function(){
        list.removeChild(li);
        deleteChapter(li.TheContent);
        input.focus();
    });
    console.log('Hello, I am trying to understand (:')
}


function ChapterList(){

    localStorage.setItem('myBOMList', JSON.stringify(chaptersArray));
}


function getChapterList(){

    return JSON.parse(localStorage.getItem('myBOMList'));

}

function deleteChapter(chapter){
    chapter = chapter.slice(0,chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    ChapterList();
}

li. textContent = input.value;

deleteButton.textContent = '❌';

li.append(deleteButton);
li.append(li);

button.addEventListener('click', function(){
    if (input.value !==''){
        displayList(input.value);
        chaptersArray.push(input.value);
        ChapterList();
        input.value == '';
        input.focus();
    }
})

deleteButton.addEventListener('click', function(){
    list.removeChild(li);
    input.focus();
});

input.value = '';
input.focus();


