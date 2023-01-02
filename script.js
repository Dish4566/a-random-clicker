function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x !== "Dishika") {
      alert("no");
      return false;
    }
  }