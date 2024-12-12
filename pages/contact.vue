<template>
  <div class="container">
    <div class="text">
      <h1>Contact Us</h1>
      <p>Support in choosing the right product, including additional services<br> and information about the most interesting actions.</p>
    </div>

    <div class="contact-container">
      <div class="contact-info">
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

      <div class="contact-form">
        <form>
          <h2>Send us message</h2>
          <div class="input-box">
            <input type="text" name="" required>
            <span>Full Name</span>
          </div>
          <div class="input-box">
            <input type="text" name="" required>
            <span>Email</span>
          </div>
          <div class="input-box">
            <textarea required></textarea>
            <span>Type your message...</span>
          </div>
          <div class="input-box">
            <input type="submit" name="" value="Send">
          </div>
        </form>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

.container {
  font-size: 23px;
  text-align: center;
  padding: 0rem 5rem 5rem 5rem;
  color: var(--light1);
  position: relative;
  min-height: 10vh;
  height: calc(100vh - 8.2rem);
  display: flex;
  justify-content: center;
  align-items: center;  
  flex-direction: column;
  background-image: url('../assets/fotecky/contact-bg-dark.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
}

.container .contact-container {
  max-width: 600rem;
  text-align: center;
}

.container h1{
  padding-top: 10rem;

}

.container h3{
  padding-left: 1rem;

}

.container p{
  padding: 1rem;
  text-align: left;

}

.box{
  text-align: left;
}

.contact-container {
  color: #ffffff;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  
}

.contact-container .contact-info {
  width: 55%;
  display: flex;
  flex-direction: column;
  padding: 0rem 0rem 5rem 0rem;
}

.contact-container .contact-info .box{
  position: relative;
  padding: 0.2rem 0;
  display: flex;

}

.contact-container .contact-info .box .text h3{
  font-weight: 500;
  color: rgb(255, 0, 0);
}
.contact-form {
  color: var(--light1);
  width: 50%;
}

.contact-form h2{
  font-size: 30px; 
  color: #ffffff;
  font-weight: 500;
}

.contact-form .input-box{
  position: relative;
  width: 100%;
  margin-top: 10px;
}

.contact-form .input-box input,
.contact-form .input-box textarea{
  width: 100%;
  padding: 5px 0;
  font-size: 16px;
  margin: 10px 0;
  border: none;
  border-bottom: solid #ff0000;
  outline: none;
  resize: none;
  background: transparent;
  color: #ffffff;
}

.contact-form .input-box span{
  position: absolute;
  left: 0;
  padding: 5px 0;
  font-size: 16px;
  margin: 10px 0;
  pointer-events: none;
  transition: 0.5s;
  color:#ffffff;
}

.contact-form .input-box input:focus ~ span,
.contact-form .input-box input:valid ~ span,
.contact-form .input-box textarea:focus ~ span,
.contact-form .input-box textarea:valid ~ span{
  color: #e91e63;
  font-size: 12px;
  transform: translateY(-20px);
}

.contact-form .input-box input[type='submit']{
  color: red;
  border: none;
  font-size: 2rem;
}

</style>