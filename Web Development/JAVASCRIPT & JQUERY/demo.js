  function external1(){
    alert('hii i am viren')
  }

  function external2(){
      if(confirm('are you sure??'))
      {
          alert('yess');
      }
      else{
          alert('nooo');
      }
    }
    function external3(){
        var fname=prompt('enter your firstname');
        var lname=prompt('enter your lastname');
        alert(fname+" "+lname);
    }  
    function background(){
        document.body.style.background="Green";
    }
    function divbackground(){
        document.getElementById('d1').style.backgroundColor="Gray";
    }
    function divbackgrounddynamic(){
        document.getElementById("d1").style.backgroundColor=prompt("Enter your color for background");
    }
    function bodybackgrounddynamic(){
        document.body.style.background=prompt("enter your color for background");
    }
    function fromcolorpicker1(){
        document.body.style.backgroundColor=document.getElementById('e1').value;
    }
    function fromcolorpicker2(){
        document.getElementById('d1').style.backgroundColor=document.getElementById('e2').value;
    }

  