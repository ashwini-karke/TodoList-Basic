
var clicks1 = 0;
var clicks2 = 0;
var dclicks1=0;
var dclicks2=0;
var cnt = 0;
var lCnt=0;
var uCnt=0;
var pcnt=0
var dom=0;
let flag=0;
let domArray=[]
// var LikeCnt=document.getElementById("lbtn0").innerHTML;
// var UnlikeCnt=document.getElementById("dbtn0").innerHTML;


let arr = []

  window.addEventListener("load", function () {
    
  });
function createContainer(txt)
{
    const data = {
        like:0,
        dislike:0,
        text:"",
        index:0,
      }
      
      var outer2 = document.createElement('li')
      outer2.setAttribute("class", "outer2");
  
      var buttonField = document.createElement('div')
      buttonField.setAttribute("class", "button-field2");
      buttonField.setAttribute("id", `btn-field${cnt}`);
  
      var buttonLike = document.createElement("button")
      buttonLike.setAttribute("id", `lbtn${cnt}`);
      buttonLike.setAttribute("class","glyphicon glyphicon-thumbs-up like-btn")
      buttonLike.innerHTML=0
      
  
      var buttonUnlike = document.createElement('button')
      buttonUnlike.setAttribute("id", `dbtn${cnt}`);
      buttonUnlike.setAttribute("class","glyphicon glyphicon-thumbs-down unlike-btn")
      buttonUnlike.innerHTML=0
      
  
      var message = document.createElement('div')
      message.setAttribute("class", "dynamic-msg");
  
      var p = document.createElement('p')
      p.setAttribute("id", `list${cnt}`);
      p.innerHTML=txt
          const paginatedList=document.getElementById("paginated-list")
          paginatedList.appendChild(outer2)
          outer2.appendChild(buttonField)
          buttonField.appendChild(buttonLike)
          buttonField.appendChild(buttonUnlike)
          outer2.appendChild(message)
          message.appendChild(p)
          buttonLike.innerHTML=lCnt
          buttonUnlike.innerHTML=uCnt
  
          data.like=lCnt
          data.dislike=uCnt
          data.text=txt
          data.index=cnt
          console.log(data,arr)
          arr.push(data)
          console.log(arr)
        
    // }
    
    

}  
window.addEventListener("load", function () {
  const data = {
    like:5,
    dislike:3,
    text:"",
    index:0,
  }
var txt = "This is an existing topic returned from the server (mocked)";

var outer2 = document.createElement('li')
outer2.setAttribute("class", "outer2");

var buttonField = document.createElement('div')
buttonField.setAttribute("class", "button-field2");
buttonField.setAttribute("id", `btn-field${cnt}`);

var buttonLike = document.createElement("button")
buttonLike.setAttribute("id", `lbtn${cnt}`);
buttonLike.setAttribute("class","glyphicon glyphicon-thumbs-up like-btn")
buttonLike.innerHTML=0


var buttonUnlike = document.createElement('button')
buttonUnlike.setAttribute("id", `dbtn${cnt}`);
buttonUnlike.setAttribute("class","glyphicon glyphicon-thumbs-down unlike-btn")
buttonUnlike.innerHTML=0


var message = document.createElement('div')
message.setAttribute("class", "dynamic-msg");

var p = document.createElement('p')
p.setAttribute("id", `list${cnt}`);
p.innerHTML=txt

    const paginatedList=document.getElementById("paginated-list")
    paginatedList.appendChild(outer2)
    outer2.appendChild(buttonField)
    buttonField.appendChild(buttonLike)
    buttonField.appendChild(buttonUnlike)
    outer2.appendChild(message)
    message.appendChild(p)
    buttonLike.innerHTML=5
    buttonUnlike.innerHTML=3

    data.like=5
    data.dislike=3
    data.text=txt
    data.index=cnt
    console.log(data,arr)
    arr.push(data)
    console.log(arr)

    buttonLike.addEventListener("click",lhandler)
    buttonUnlike.addEventListener("click",dhandler)
    
});

function addItem() {
  var txt = document.getElementById('txt-input').value;
  if(txt=="")
  {
    alert("Invalid Entry")
    element=document.getElementById("txt-input")
    element.style.borderColor="red"
  }
  else
  {
    var txt = document.getElementById('txt-input').value;
    cnt = cnt+1; 
      createContainer(txt)

    document.getElementById('txt-input').value=null
    document.getElementById('txt-input').placeholder="Enter a new topic title"
    buttonLike=document.getElementById(`lbtn${cnt}`)
    buttonUnlike=document.getElementById(`dbtn${cnt}`)
    buttonLike.addEventListener("click",lhandler)
    buttonUnlike.addEventListener("click",dhandler)
     
    if(cnt>4)
    {
      document.getElementsByClassName("pagination-container")[0].style.display="flex"; 
    }

    pagination()
  }
    
  
}



function lhandler(e)
{
    let clickId=e.target.id.slice(4, 5)
    console.log(clickId)
    if((document.getElementById(`lbtn${clickId}`).innerHTML==0 && 
    document.getElementById(`dbtn${clickId}`).innerHTML==0)  ||
    (document.getElementById(`lbtn${clickId}`).innerHTML==5 && 
    document.getElementById(`dbtn${clickId}`).innerHTML==3 ))
    {
        arr[clickId].like=arr[clickId].like + 1
    }
  
    else if((document.getElementById(`lbtn${clickId}`).innerHTML==1 && 
    document.getElementById(`dbtn${clickId}`).innerHTML==0) || 
    ((document.getElementById(`lbtn${clickId}`).innerHTML==6 && 
    document.getElementById(`dbtn${clickId}`).innerHTML==3)))
    {
        arr[clickId].like=arr[clickId].like - 1
    }

    else if((document.getElementById(`lbtn${clickId}`).innerHTML==0 && 
    document.getElementById(`dbtn${clickId}`).innerHTML==1||
    document.getElementById(`lbtn${clickId}`).innerHTML==5 && 
    document.getElementById(`dbtn${clickId}`).innerHTML==4))
    {
        arr[clickId].like=arr[clickId].like + 1
        arr[clickId].dislike=arr[clickId].dislike - 1
    }
    arr.sort((a, b) => {
        return a.like - b.like;
    });
    arr.reverse()
    console.log(arr)
    sorting()            
}


function dhandler(e)
{
            
    let clickId=e.target.id.slice(4, 5)
    console.log(clickId)
    if((document.getElementById(`dbtn${clickId}`).innerHTML==0 && 
    document.getElementById(`lbtn${clickId}`).innerHTML==0)||
    (document.getElementById(`dbtn${clickId}`).innerHTML==3 && 
    document.getElementById(`lbtn${clickId}`).innerHTML==5))
    {
        arr[clickId].dislike= arr[clickId].dislike + 1 
    }

    else if((document.getElementById(`dbtn${clickId}`).innerHTML==0 && 
    document.getElementById(`lbtn${clickId}`).innerHTML==1)||
    (document.getElementById(`dbtn${clickId}`).innerHTML==3 && 
    document.getElementById(`lbtn${clickId}`).innerHTML==6))
    {
        arr[clickId].dislike= arr[clickId].dislike + 1  
        arr[clickId].like= arr[clickId].like - 1
    }
    else if((document.getElementById(`dbtn${clickId}`).innerHTML==1 && 
    document.getElementById(`lbtn${clickId}`).innerHTML==0)|| 
    (document.getElementById(`dbtn${clickId}`).innerHTML==4 && 
    document.getElementById(`lbtn${clickId}`).innerHTML==5))
    {
        arr[clickId].dislike= arr[clickId].dislike - 1 
    }
    arr.sort((a, b) => {
        return a.like - b.like;
    });
    arr.reverse()
    console.log(arr)
    sorting()
}

function sorting()
{
    for(i=0;i<arr.length;i++)
    {
        document.getElementById(`lbtn${i}`).innerHTML=arr[i].like
        document.getElementById(`dbtn${i}`).innerHTML=arr[i].dislike
        document.getElementById(`list${i}`).innerHTML=arr[i].text    
    }      
}




function pagination()
    {
      
      if(dom>0)
    {
      domArray.forEach(myFunction);
      function myFunction(item, index)
      {
        console.log(index+"  "+item)
        const element = document.getElementById(`dom${index}`);
        element.remove();
      }
      dom=0;
      }
      domArray=[]

      const paginationNumbers = document.getElementById("pagination-numbers");
  const paginatedList = document.getElementById("paginated-list");
  const listItems = paginatedList.querySelectorAll("li");
  const nextButton = document.getElementById("next-button");
  const prevButton = document.getElementById("prev-button");


  
    var paginationLimit = 5;
  
  
  const pageCount = Math.ceil(listItems.length / paginationLimit);
  let currentPage = 1;

  const disableButton = (button) => {
    button.classList.add("disabled");
    button.style.cursor="not-allowed"
    button.setAttribute("disabled", true);
  };

  const enableButton = (button) => {
    button.classList.remove("disabled");
    button.style.cursor="pointer"
    button.style.color="#337ab7;"
    button.removeAttribute("disabled");
  };

  const handlePageButtonsStatus = () => {
    if (currentPage === 1) {
      disableButton(prevButton);
    } else {
      enableButton(prevButton);
    }

    if (pageCount === currentPage) {
      disableButton(nextButton);
    } else {
      enableButton(nextButton);
    }
  };

  const handleActivePageNumber = () => {

    document.querySelectorAll(".pagination-number").forEach((button) => {
      button.classList.remove("active");
      const pageIndex = Number(button.getAttribute("page-index"));
      if (pageIndex == currentPage) {
        button.classList.add("active");
      }
    });
  };

  const appendPageNumber = (index) => {
    const pageNumber = document.createElement("button");
    pageNumber.id=`dom${dom}`
    pageNumber.className = "pagination-number";
    pageNumber.innerHTML = index;
    pageNumber.setAttribute("page-index", index);
    pageNumber.setAttribute("aria-label", "Page " + index);

    paginationNumbers.appendChild(pageNumber);
    domArray.push(dom)
    dom+=1;
    console.log("add dom")
  };

  const getPaginationNumbers = () => {
    for (let i = 1; i <= pageCount; i++) {
      console.log("pageCount")
      console.log(pageCount)
      appendPageNumber(i);
    }
  };

  const setCurrentPage = (pageNum) => {
    currentPage = pageNum;

    handleActivePageNumber();
    handlePageButtonsStatus();
    
    const prevRange = (pageNum - 1) * paginationLimit;
    const currRange = pageNum * paginationLimit;

    listItems.forEach((item, index) => {
      item.classList.add("hidden");
      if (index >= prevRange && index < currRange) {
        item.classList.remove("hidden");
      }
    });
  };

  getPaginationNumbers();
    setCurrentPage(1);

    prevButton.addEventListener("click", () => {
      setCurrentPage(currentPage - 1);
    });

    nextButton.addEventListener("click", () => {
      setCurrentPage(currentPage + 1);
    });

    document.querySelectorAll(".pagination-number").forEach((button) => {
      const pageIndex = Number(button.getAttribute("page-index"));

      if (pageIndex) {
        button.addEventListener("click", () => {
          setCurrentPage(pageIndex);
        });
      }
    });
    flag=1;
  }


var input = document.getElementById("txt-input");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("submit-button").click();
  }
});