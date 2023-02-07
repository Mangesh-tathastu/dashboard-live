function updateemployee (){
    return `
    <section>
    <!-- main container s -->
    <div class="addEmp-main-container">
  
      <div class="container-fluid addEmp-main-container-title">
       Edit Personal details
      </div>
      <div class="addEmp-main-container-title-border"></div>
      <div class="personal-details-container">
         <input class="box1" type="text" placeholder="title">
         <input class="box1" type="text" placeholder="first name">
         <input class="box1" type="text" placeholder="middle name">
         <input class="box1" type="text" placeholder="marital status">
         <input class="box1" type="text" placeholder="date of birth">
         <input class="box1" type="text" placeholder="full address">
         <input class="box1" type="text" placeholder="city">
         <input class="box1" type="text" placeholder="pin code">
         <input class="box1" type="text" placeholder="contact number">
         <input class="box1" type="text" placeholder="employee id">
         <input class="box1" type="text" placeholder="gaurdian name">
         <input class="box1" type="text" placeholder="gaurdian number">
      </div>
      <div class="container-fluid addEmp-main-container-title">
       Edit Emergency Contact Details
      </div>
      <div class="addEmp-main-container-title-border"></div>
      <div class="personal-details-container">
        <input class="box1" type="text" placeholder="Name 1">
         <input class="box1" type="text" placeholder="Relation">
         <input class="box1" type="text" placeholder="Contact number">
         <input class="box1" type="text" placeholder="Name 1">
         <input class="box1" type="text" placeholder="Relation">
         <input class="box1" type="text" placeholder="Contact number">
      </div>
      <div class="container-fluid addEmp-main-container-title">
        Office Use Only Change
      </div>
      <div class="addEmp-main-container-title-border"></div>
      <div class="personal-details-container">
        <input class="box1" type="text" placeholder="Designation/Date">
         <input class="box1" type="text" placeholder="Salary">
         <input class="box1" type="text" placeholder="Joining Date">
         <input class="box1" type="text" placeholder="Resigning Date">
         <input class="box1" type="text" placeholder="Reference">
         <input class="box1" type="text" placeholder="Time">
      </div>
      <div class="addemp-button-div"><button class="addemp-button">Update Employee</button></div>
    </div>
    <!-- main container e -->
  </section>
    `
}

export {updateemployee}