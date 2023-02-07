function LeaveReq(){
    return `
    <section>
    <div class="leave-main-container">
      <div class=" leave-main-container-title">
        Leave Request
      </div>
      <div class=" leave-main-container-title-border"></div>
      <div class="leave-details-container">
        <input class="box1" type="text" placeholder="Your Name" />
        <input class="box1" type="text" placeholder="Department" />
        <input class="box1" type="text" placeholder="From Date" />
        <input class="box1" type="text" placeholder="To Date" />
       <div class="swipediv">
        <div class="swipediv-imgdiv"><img src="../Assets/arrow (1).svg" alt=""></div>
        <div class="swipediv-btndiv">swipe</div>
       </div>
       <div class="leave-dropdown-div">
            <select class="leave-dropdown">
              <option value="">Privileged Leave</option>
              <option value="">Casual Leave</option>
              <!-- <option value="">Privileged Leave</option> -->
              <option value="">Sick Leave</option>
              <option value="">Unpaid Leave</option>
            </select>
          
       </div>
        <input class="leave-bottom-box1" type="text" placeholder="Reason for Leave ( Optional )" />
        <input class="leave-bottom-box1-add-img" type="file" placeholder="add image" />
                
      </div>
      <div class="leave-button-div"><button class="leave-button">Submit Request</button></div>
    </div>
  </section>
    `

}

export {LeaveReq}