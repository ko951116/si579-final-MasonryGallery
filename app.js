var grid = document.querySelector('.grid');

var msnry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true,
});
    
imagesLoaded(grid).on('progress', function() {
    msnry.layout();
});


// const myGrid = document.querySelector('.my-grid');

// var myMsnry = new Masonry(myGrid, {
//     itemSelector: '.grid-item',
//     columnWidth: '.grid-sizer',
//     percentPosition: true,
// });
    
// imagesLoaded(grid).on('progress', function() {
//     myMsnry.layout();
// });

const grayBtn = document.querySelector('#grayBtn');
const colorBtn = document.querySelector('#colorBtn');
const blurBtn = document.querySelector('#blurBtn')

const submitBtn = document.querySelector('#submit');
const controlSelect1 = document.querySelector('#exampleFormControlSelect1');
const controlSelect2 = document.querySelector('#exampleFormControlSelect2');
const input = document.querySelector('#inputText');
const addBtn = document.querySelector('#addPic');
const saveBtn = document.querySelector('#saveBtn');


const imgUrl = document.querySelector('#img');
const imgUrl2 = document.querySelector('#img2');
const imgUrl3 = document.querySelector('#img3');
const imgUrl4 = document.querySelector('#img4');
const imgUrl5 = document.querySelector('#img5');
const imgUrl6 = document.querySelector('#img6');
const imgUrl7 = document.querySelector('#img7');
const imgUrl8 = document.querySelector('#img8');
const imgUrl9 = document.querySelector('#img9');
const imgUrl10 = document.querySelector('#img10');
const imgUrl11 = document.querySelector('#img11');
const imgUrl12 = document.querySelector('#img12');
const imgUrl13 = document.querySelector('#img13');
const imgUrl14 = document.querySelector('#img14');
const imgUrl15 = document.querySelector('#img15');
const imgUrl16 = document.querySelector('#img16');
const imgUrl17 = document.querySelector('#img17');
const imgUrl18 = document.querySelector('#img18');
const imgUrl19 = document.querySelector('#img19');
const imgUrl20 = document.querySelector('#img20');
const imgUrl21 = document.querySelector('#img21');



grayBtn.addEventListener('click', () => {
    imgUrl.src = "https://picsum.photos/200/300?grayscale";
    imgUrl2.src = "https://picsum.photos/230/200?grayscale";
    imgUrl3.src = "https://picsum.photos/200/400?grayscale";
    imgUrl4.src = "https://picsum.photos/200/220?grayscale";
    imgUrl5.src = "https://picsum.photos/210/300?grayscale";
    imgUrl6.src = "https://picsum.photos/200/310?grayscale";
    imgUrl7.src = "https://picsum.photos/302/400?grayscale";
    imgUrl8.src = "https://picsum.photos/140/300?grayscale";
    imgUrl9.src = "https://picsum.photos/200/200?grayscale";
    imgUrl10.src = "https://picsum.photos/200/140?grayscale";
    imgUrl11.src = "https://picsum.photos/240/200?grayscale";
    imgUrl12.src = "https://picsum.photos/200/330?grayscale";
    imgUrl13.src = "https://picsum.photos/185/300?grayscale";
    imgUrl14.src = "https://picsum.photos/221/400?grayscale";
    imgUrl15.src = "https://picsum.photos/200/120?grayscale";
    imgUrl16.src = "https://picsum.photos/240/300?grayscale";
    imgUrl17.src = "https://picsum.photos/229/320?grayscale";
    imgUrl18.src = "https://picsum.photos/200/140?grayscale";
    imgUrl19.src = "https://picsum.photos/190/300?grayscale";
    imgUrl20.src = "https://picsum.photos/180/300?grayscale";
    imgUrl21.src = "https://picsum.photos/200/420?grayscale";
    
    imagesLoaded(grid).on('progress', function() {
        msnry.layout();
    });
});

colorBtn.addEventListener('click', () => {
    imgUrl.src = "https://picsum.photos/200/300";
    imgUrl2.src = "https://picsum.photos/200/200";
    imgUrl3.src = "https://picsum.photos/200/400";
    imgUrl4.src = "https://picsum.photos/225/220";
    imgUrl5.src = "https://picsum.photos/250/300";
    imgUrl6.src = "https://picsum.photos/200/350";
    imgUrl7.src = "https://picsum.photos/300/400";
    imgUrl8.src = "https://picsum.photos/300/300";
    imgUrl9.src = "https://picsum.photos/200/200";
    imgUrl10.src = "https://picsum.photos/200/140";
    imgUrl11.src = "https://picsum.photos/240/200";
    imgUrl12.src = "https://picsum.photos/200/330";
    imgUrl13.src = "https://picsum.photos/200/190";
    imgUrl14.src = "https://picsum.photos/230/400";
    imgUrl15.src = "https://picsum.photos/200/120";
    imgUrl16.src = "https://picsum.photos/330/300";
    imgUrl17.src = "https://picsum.photos/250/320";
    imgUrl18.src = "https://picsum.photos/200/160";
    imgUrl19.src = "https://picsum.photos/210/300";
    imgUrl20.src = "https://picsum.photos/200/300";
    imagesLoaded(grid).on('progress', function() {
        msnry.layout();
    });
});

blurBtn.addEventListener('click', () => {
    imgUrl.src = "https://picsum.photos/200/300?blur";
    imgUrl2.src = "https://picsum.photos/200/200?blur";
    imgUrl3.src = "https://picsum.photos/200/400?blur";
    imgUrl4.src = "https://picsum.photos/200/220?blur";
    imgUrl5.src = "https://picsum.photos/250/300?blur";
    imgUrl6.src = "https://picsum.photos/200/350?blur";
    imgUrl7.src = "https://picsum.photos/300/400?blur";
    imgUrl8.src = "https://picsum.photos/190/300?blur";
    imgUrl9.src = "https://picsum.photos/200/200?blur";
    imgUrl10.src = "https://picsum.photos/200/140?blur";
    imgUrl11.src = "https://picsum.photos/240/200?blur";
    imgUrl12.src = "https://picsum.photos/200/330?blur";
    imgUrl13.src = "https://picsum.photos/200/190?blur";
    imgUrl14.src = "https://picsum.photos/230/400?blur";
    imgUrl15.src = "https://picsum.photos/200/120?blur";
    imgUrl16.src = "https://picsum.photos/190/300?blur";
    imgUrl17.src = "https://picsum.photos/200/300?blur";
    imgUrl18.src = "https://picsum.photos/200/160?blur";
    imgUrl19.src = "https://picsum.photos/200/300?blur";
    imgUrl20.src = "https://picsum.photos/200/300?blur";
    imagesLoaded(grid).on('progress', function() {
        msnry.layout();
    });
});


// addBtn.addEventListener('click', () => {
//     const gridBig = document.querySelector('#gridDisplay');
//     console.log('hi')
//     const newDiv = document.createElement('div');
//     const newImg = document.createElement('img');
//     newImg.src = "https://picsum.photos/200/300"

//     newDiv.appendChild(newImg);
//     newDiv.classList.add('grid-item', 'hover');

//     gridBig.append(newDiv);

// });

function closeImg() {
    document.querySelector(".img-window").remove();
}

function showImage() {
    const gridItem = grid.getElementsByClassName('grid-item');
    const overlay = grid.getElementsByClassName('overlay');

    for (let i = 0; i < gridItem.length; i++) {
        overlay[i].onclick = function() {
            // var current = this.previousElementSibling;
            console.log(this.parentElement.children[0])

            const viewImg = document.createElement('div');
            viewImg.classList.add('img-window');
    
            const newImg = document.createElement('img');
            newImg.setAttribute('src', this.parentElement.children[0].src);

            viewImg.appendChild(newImg);
            document.body.append(viewImg);

            viewImg.setAttribute("onclick", "closeImg()");
        }
    }
}

window.addEventListener("mousedown", showImage);


submitBtn.addEventListener('click', () => {
    // if (controlSelect1.textContent === 'Grayscale') {
    //     console.log('hieeeeefwefew')
        
    //     imgUrl.src = "https://picsum.photos/200/300?grayscale"

    // }

    if (input.value === '3') {
        // input.value = 'hi';

        console.log('hihhihii')
        msnry.columnWidth = '.grid-sizer3';
        msnry.itemSelector = '100px';

        console.log(msnry.columnWidth)
        msnry.layout();

        
    }

    if (input.value === 'gray') {
        imgUrl.src = "https://picsum.photos/200/300?grayscale";
        imgUrl2.src = "https://picsum.photos/100/200?grayscale"
        imgUrl3.src = "https://picsum.photos/200/400?grayscale"
        imgUrl4.src = "https://picsum.photos/200/220?grayscale"
        imgUrl5.src = "https://picsum.photos/110/300?grayscale"
        imgUrl6.src = "https://picsum.photos/200/302?grayscale";
        imgUrl7.src = "https://picsum.photos/302/400?grayscale"
        imgUrl8.src = "https://picsum.photos/140/300?grayscale"
        imgUrl9.src = "https://picsum.photos/200/200?grayscale"
        imgUrl10.src = "https://picsum.photos/200/140?grayscale"
        imgUrl11.src = "https://picsum.photos/240/200?grayscale";
        imgUrl12.src = "https://picsum.photos/200/330?grayscale";
        imgUrl13.src = "https://picsum.photos/200/300?grayscale";
        imgUrl14.src = "https://picsum.photos/230/400?grayscale";
        imgUrl15.src = "https://picsum.photos/200/120?grayscale";
        imgUrl16.src = "https://picsum.photos/200/300?grayscale";
        imgUrl17.src = "https://picsum.photos/200/300?grayscale";
        imgUrl18.src = "https://picsum.photos/200/120?grayscale";
        imgUrl19.src = "https://picsum.photos/200/300?grayscale";
        imgUrl20.src = "https://picsum.photos/200/300?grayscale";
        msnry.layout();

    }
});