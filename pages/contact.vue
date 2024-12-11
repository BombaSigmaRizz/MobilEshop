<template>
  <section class="contact">
  <div class="content">
    <h1>Contact Us</h1>
    <p>Support in choosing the right product, including additional services<br> and information about the most interesting actions.</p>
  </div>
  <div class="container">
    <div class="contactInfo">
      <div class="box">
        <Icon class ="icon" name="line-md:map-marker-twotone" size="1.5rem"/>
          <div class="text">
            <h3>Adress</h3>
            <p>4833 Nancy Street,<br>Durham, NC (North Carolina),<br>27703</p>
          </div>
        </div>
        <div class="box">
          <Icon class="icon" name="line-md:phone-twotone" size="1.5rem"/>
            <div class="text">
              <h3>Phone</h3>
              <p>919-641-5892</p>
            </div>
          </div>
          <div class="box">
            <Icon class="icon" name="line-md:email-alt-twotone" size="1.5rem"/>
            <div class="text">
              <h3>Email</h3>
              <p>MobileEshop@garner.com</p>
            </div>
          </div>
        </div>
      </div>
      </section>  
    <div class="contactForm">
      <form>
        <h2>Send message</h2>
        <div class="inputBox">
          <input type="text" name="" required="required">
          <span>Full Name</span>
         </div>
         <div class="inputBox">
          <input type="text" name="" required="required">
          <span>Email</span>
         </div>
         <div class="inputBox">
          <textarea required="required"></textarea>
          <span>Type your message...</span>
         </div>
         <div class="inputBox">
          <input type="submit" name="" value="Send">
         </div>
      </form>
    </div>


</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

.contact {
  font-size: 23px;
  text-align: center;
  margin: 3rem;
  padding: 5rem;
  color: var(--light1);
  position: relative;
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;  
  flex-direction: column;
  background-image: url(assets\fotecky\backG.webp);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;

  
}

.contact .content {
  max-width: 60rem;
  text-align: center;
}


.container {
  color: var(--light1);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  
}

.container .contactInfo {
  width: 50%;
  display: flex;
  flex-direction: column;
}

.container .contactInfo .box{
  position: relative;
  padding: 0.2rem 0;
  display: flex;

}

.container .contactInfo .box .text h3{
  font-weight: 500;
  color: rgb(255, 0, 0);
}
.contactForm {
  color: var(--bg0);
  width: 40%;
  padding: 40px;
  background: #fff;

}

.contactForm h2{
  font-size: 30px; 
  color: #333;
  font-weight: 500;
}

.contactForm .inputBox{
  position: relative;
  width: 100%;
  margin-top: 10px;
}

.contactForm .inputBox input,
.contactForm .inputBox textarea{
  width: 100%;
  padding: 5px 0;
  font-size: 16px;
  margin: 10px 0;
  border: none;
  border-bottom: 2px solid #333;
  outline: none;
  resize: none;
}

.contactForm .inputBox span{
  position: absolute;
  left: 0;
  padding: 5px 0;
  font-size: 16px;
  margin: 10px 0;
  pointer-events: none;
  transition: 0.5s;
  color:#666;
}

.contactForm .inputBox input:focus ~ span,
.contactForm .inputBox input:valid ~ span,
.contactForm .inputBox textarea:focus ~ span,
.contactForm .inputBox textarea:valid ~ span{
  color: #e91e63;
  font-size: 12px;
  transform: translateY(-20px);
}
</style>