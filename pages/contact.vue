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
        <form @submit.prevent="submitForm">
          <h2>Send us message</h2>
          <div class="input-wrapper">
            <input type="text" v-model="name" required>
            <span>Full Name</span>
          </div>
          <div class="input-wrapper">
            <input type="email" v-model="email" required>
            <span>Email</span>
          </div>
          <div class="input-wrapper">
            <textarea required v-model="message"></textarea>
            <span>Type your message...</span>
          </div>
          <div class="input-wrapper">
            <div class="contact-btn-wrapper" @mouseenter="scrambleWordEffect(contactBtnText!)">
              <button class="contact-btn" type="submit">
                <span data-value="Send" ref="contact-btn-text">Send</span>
              </button>
            </div>
          </div>
        </form>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const contactBtnText = useTemplateRef('contact-btn-text')
const name = ref('')
const email = ref('')
const message = ref('')
const WEB3FORMS_ACCESS_KEY = "438b0ebd-b6d3-4842-9ecf-0fd724269021"

definePageMeta({
  auth: false
})

async function submitForm() {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      name: name.value,
      email: email.value,
      message: message.value,
    }),
  })
  const result = await response.json()
  if (result.success) {
    alert("Mail sent successfully")
    name.value = ''
    email.value = ''
    message.value = ''
  } else {
    alert("Failed to send mail: " + result.message)
  }
}
</script>

<style scoped lang="scss">

.container {
  font-size: 1.3rem;
  text-align: center;
  padding: 6rem 1.5rem 5rem 3rem; 
  color: var(--text);
  position: relative;
  min-height: calc(100vh - 3.2rem);
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;  
  flex-direction: column;
  background-image: url('../assets/img/page/contact-bg-dark.jpg');
  mask-image: linear-gradient(
    rgb(0 0 0 / 0.19),
    rgb(0 0 0 / 0.94),
    rgb(0 0 0 / 0.19)
  );
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
}

.container h1 {
  padding-top: 2.8rem;
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
  align-items: flex-start;
  margin-top: 4.8rem;
  margin-bottom: 0;
  max-width: 70em;
  text-align: center;
}

.contact-container .contact-info {
  width: 55%;
  display: flex;
  flex-direction: column;
  // padding: 0rem 15rem 5rem 0rem;
}

.contact-container .contact-info .box {
  position: relative;
  padding: 0.2rem 0;
  display: flex;
}

.contact-form {
  color: var(--text);
  width: 40%;
  
}

.contact-form h2 {
  font-size: 2em; 
  color: #ffffff;
  font-weight: 700;
}

.contact-form .input-wrapper {
  position: relative;
  width: 100%;
  margin-top: 2.4rem;

}

.contact-form .input-wrapper input,
.contact-form .input-wrapper textarea {
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

.contact-form .input-wrapper span {
  position: absolute;
  left: 0;
  padding: 5px 0;
  font-size: 1em;
  margin: 10px 0;
  pointer-events: none;
  transition: all 0.3s;
  color:#ffffff;
}

.contact-form .input-wrapper input:focus ~ span,
.contact-form .input-wrapper input:valid ~ span,
.contact-form .input-wrapper textarea:focus ~ span,
.contact-form .input-wrapper textarea:valid ~ span {
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

.contact-btn-wrapper {
  width: 16rem;
  height: 4rem;
  border-radius: 2rem;
  justify-self: center;
  margin-top: 2rem;
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
  border-radius: 2rem;
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

@media only screen and (max-width: 800px) {
  .contact-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .contact-info {
    width: 100%;
    margin-bottom: 2rem;
  }

  .contact-form {
    width: 90%;
    padding: 1rem;
  }

  .contact-form h2 {
    font-size: 1.4em;
  }

  .contact-form .input-wrapper input,
  .contact-form .input-wrapper textarea {
    font-size: 1rem;
  }

  .contact-btn-wrapper {
    width: 100%;
    height: auto;
  }

  .contact-btn {
    font-size: 1.2em;
    padding: 0.8rem;
  }

  .container h1 {
    font-size: 1.8rem;
  }

  .container p {
    font-size: 1rem;
  }
}

@media only screen and (max-width: 500px) {
  .container {
    padding: 1rem;
  }

  .contact-form {
    width: 100%;
    padding: 0.5rem;
  }

  .contact-btn {
    font-size: 1rem;
  }

  .contact-form h2 {
    font-size: 1.2em;
  }

  .contact-form .input-wrapper input,
  .contact-form .input-wrapper textarea {
    font-size: 0.9rem;
  }
}
</style>