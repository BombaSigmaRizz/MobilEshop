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
              <p>4833 Nancy Street,<br>Durham, NC (North Carolina),<br>27703</p><br>
            </div>
        </div>
        <div class="box">
          <Icon class="icon" name="line-md:phone-twotone" size="1.5rem"/>
          <div class="text">
            <h3>Phone</h3>
            <p>919-641-5892</p><br>
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
        <form ref="form">
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
            <div class="contact-btn-wrapper" @click="submit()" @mouseenter="scrambleWordEffect(contactBtnText!)">
              <NuxtLink class="contact-btn">
                <span data-value="Send" ref="contact-btn-text">Send</span>
              </NuxtLink>
            </div>
          </div>
        </form>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
const contactBtnText = useTemplateRef('contact-btn-text')
const form = useTemplateRef('form')

function submit() {
  form.value!.submit()
}
</script>

<style scoped lang="scss">

.container {
  font-size: 1.3rem;
  text-align: center;
  padding: 0rem 1.5rem 5rem 3rem;
  color: var(--light1);
  position: relative;
  min-height: 10vh;
  height: calc(100vh - 8.2rem);
  display: flex;
  justify-content: center;
  align-items: center;  
  flex-direction: column;
  background-image: url('../assets/img/contact-bg-dark.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
}

.container h1 {
  padding-top: 4rem;
  font-weight: 600;

}

.container .contact-container .contact-info .box .text h3 {
  padding-left: 1rem;
  font-weight: 700;

}

.container p {
  padding: 1rem;
  text-align: left;

}

.box {
  text-align: left;
}

.contact-container {
  color: #ffffff;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4.8rem;
  max-width: 70em;
  text-align: center;
}

.contact-container .contact-info {
  width: 55%;
  display: flex;
  flex-direction: column;
  padding: 0rem 15rem 5rem 0rem;
}

.contact-container .contact-info .box {
  position: relative;
  padding: 0.2rem 0;
  display: flex;
}

.contact-form {
  color: var(--light1);
  width: 40%;
  
}

.contact-form h2 {
  font-size: 2em; 
  color: #ffffff;
  font-weight: 700;
}

.contact-form .input-box {
  position: relative;
  width: 100%;
  margin-top: 2.4rem;

}

.contact-form .input-box input,
.contact-form .input-box textarea {
  width: 100%;
  padding: 5px 0;
  font-size: 1.3rem;
  margin: 10px 0;
  border: none;
  border-bottom: 2px solid var(--border-highlight);
  outline: none;
  resize: none;
  background: transparent;
  color: #ffffff;
}

.contact-form .input-box span {
  position: absolute;
  left: 0;
  padding: 5px 0;
  font-size: 1em;
  margin: 10px 0;
  pointer-events: none;
  transition: 0.5s;
  color:#ffffff;
}

.contact-form .input-box input:focus ~ span,
.contact-form .input-box input:valid ~ span,
.contact-form .input-box textarea:focus ~ span,
.contact-form .input-box textarea:valid ~ span {
  color: var(--border-light);
  font-size: 0.7em;
  transform: translateY(-20px);
}



.container > .text p {
  text-align: center;
}

.icon {
  color: var(--border-highlight);
}

@media only screen and (max-width: 800px) {
    .contact-container {
      flex-direction: column;
    }
    .contact-form {
      order: 1;
    }
    .contact-info {
      order: 2;
    }
}

.contact-btn-wrapper {
  width: 16rem;
  height: 4rem;
  border-radius: 2rem;
  justify-self: center;
}

.contact-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  width: 100%;
  height: 100%;
  outline: 2px solid var(--border-highlight);
  border-radius: 1rem;
  background: radial-gradient(circle, var(--border-light) 50%, transparent 100%);
  background-size: 0 0;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  font-size: 1.5em;
  border: none;
  cursor: pointer;
  transition: all 0.4s ease;
  gap: 1rem;

  &:hover {
    // background: var(--border);
    box-shadow: 0px 0px 20px 2px var(--border-highlight);
    background-size: 200% 200%;
    outline: 1px solid rgba(255, 255, 255, 0);
  }
}

.contact-btn span {
    position: static !important; 
  }
</style>