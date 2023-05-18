<template>
      <form :action="FORM_ENDPOINT" @submit="handleSubmit" method="POST" class="contact-form">
        <div>
          <input type="text" placeholder="Your name" name="name" required />
        </div>

        <div>
          <input type="email" placeholder="Email" name="email" required />
        </div>

        <div>
          <input type="phone" placeholder="Phone" name="phone" required />
        </div>

        <div>
          <textarea placeholder="Your message" name="message" required />
        </div>

        <div>
          <button type="submit">Send a message</button>
        </div>
      </form>

      <div v-if="submitted">
        <strong>Thank you!</strong>
        <p>We'll be in touch soon.</p>
      </div>
  </template>

  <script>
  export default {
    name: "App",
    data: () => ({
      submitted: false,
      FORM_ENDPOINT: "https://public.herotofu.com/v1/3c70fe50-f56a-11ed-9eca-1f15a141e038",
    }),

    methods: {
      handleSubmit() {
        setTimeout(() => {
          this.submitted = true;
        }, 100);
      },
    },
  };
  </script>

  <style>

    .contact-form {
      width: 100%   ;
      margin: 0 auto;
    }

    .contact-form label {
      display: block;
      margin-top: 10px;
    }

    .contact-form input,
    .contact-form textarea {
      width: 100%;
      padding: 20px;
      margin-bottom: 20px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-family: 'Montserrat' sans-serif;
      font-size: 1.2rem;
    }

    .contact-form button {
      display: block;
      width: 100%;
      margin-top: 10px;
      padding: 10px;
      background-color: #4caf50;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .contact-form button:hover {
      background-color: #45a049;
    }

  </style>