<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__contact">
        <div class="footer__contact-item">
          <div class="footer__contact-title">Телефон</div>
          <div class="footer__contact-info">123-45-67</div>
        </div>
        <div class="footer__contact-item">
          <div class="footer__contact-title">Электронная почта</div>
          <div class="footer__contact-info">email@gmail.com</div>
        </div>
      </div>
      <div class="footer__social">
        <div class="footer__social-link"><Twitter /></div>
        <div class="footer__social-link"><Facebook /></div>
        <div class="footer__social-link"><Vk /></div>
        <div class="footer__social-link"><Inst /></div>
      </div>
      <div class="footer__form">
        <form action="">
          <div class="input-container">
            <input class="input-main" type="text" name="name" id="name" placeholder="Ваше имя" />
          </div>
          <div class="input-container">
            <input
              class="input-main"
              type="text"
              name="phone"
              id="phone"
              placeholder="Ваш телефон"
            />
          </div>
          <div class="input-container">
            <button type="submit" class="button">Записаться</button>
          </div>
          <div class="input-container">
            <div class="footer__form-text">Наш менеджер свяжется с вами в течении дня</div>
          </div>
        </form>
      </div>
    </div>
  </footer>
</template>

<script>
import Twitter from "../assets/icon/twitter.svg";
import Facebook from "../assets/icon/facebook.svg";
import Inst from "../assets/icon/inst.svg";
import Vk from "../assets/icon/vk.svg";
export default {
  name: "LayoutFooter",
  components: {
    Twitter,
    Facebook,
    Inst,
    Vk,
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background: $mainBackgroundColor;

  &__container {
    padding: 115px 203px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr;
  }

  &__contact {
    grid-column: 1/2;
    grid-row: 1/3;
  }

  &__social {
    grid-column: 2/3;
    grid-row: 1/3;
  }

  &__form {
    grid-column: 3/5;
    grid-row: 1/3;
  }

  &__contact-item {
    padding-bottom: 35px;
  }

  &__contact-title {
    text-shadow: 0 2px 4px #435fdd;
    font-size: $g-big-title-size;
    color: $g-color-blue;
    padding-bottom: 5px;
  }

  &__contact-info {
    text-shadow: 0 2px 4px black;
    font-size: $g-font-second-size;
    color: $mainTextColor;
  }

  &__social {
    display: flex;
    flex-wrap: wrap;
    padding: 0 20px;
  }

  &__social-link {
    width: 50%;
  }

  &__form {
    form {
      display: flex;
      flex-wrap: wrap;
    }
  }

  .input-container {
    width: 50%;
  }

  .input-main {
    border: none;
    padding: 16px 35px;
    border-radius: 37px;
    outline: none !important;
    width: 225px;
    margin-bottom: 55px;
    font-size: $g-font-second-size;
  }

  .button {
    border: none;
    background: $mainColor;
    border-radius: 37px;
    width: 225px;
    text-align: center;
    padding: 16px 0;
    color: $g-color-white;
    font-size: $g-font-second-size;
  }

  &__form-text {
    font-size: $g-font-second-size;
    color: $mainTextColor;
  }
}

@media (max-width: $break-xl) {
  .footer {
    &__container {
      padding: 68px 113px;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1.2fr 2fr;
    }

    &__contact {
      grid-column: 1/2;
      grid-row: 1/3;
    }

    &__social {
      grid-column: 2/4;
      grid-row: 1/2;
    }

    &__form {
      grid-column: 2/4;
      grid-row: 2/3;
    }

    &__social-link {
      width: auto;
      padding-right: 45px;
    }
  }
}

@media (max-width: $break-md) {
  .footer {
    &__container {
      padding: 116px 52px;
      display: flex;
      flex-direction: column;
    }

    &__social {
      order: -1;
      padding: 0;
      justify-content: center;
    }

    &__social-link {
      width: auto;
      padding-right: 45px;
    }

    &__contact {
      display: flex;
      justify-content: center;
      padding-top: 45px;
    }

    &__contact-item:nth-child(2) {
      order: -1;
      padding-right: 50px;
    }

    &__form {
      form {
        flex-direction: column;
      }
    }

    .input-container {
      width: 100%;
    }

    .input-main {
      width: 100%;
      margin: 10px 0 25px;
    }

    .input-container:nth-child(3) {
      order: 1;
    }

    .button {
      margin-top: 30px;
    }

    &__form-text {
      width: 60%;
    }
  }
}

@media (max-width: $break-sm) {
  .footer {
    &__social {
      justify-content: space-between;
    }

    &__social-link {
      width: auto;
      padding-right: 0;
    }

    &__form-text {
      width: 80%;
    }
  }
}

@media (max-width: 400px) {
  .footer {
    &__container {
      padding: 50px 20px;
    }
    &__social {
      justify-content: space-between;
    }

    &__social-link {
      padding-right: 0;
    }

    &__contact {
      flex-direction: column;
    }
  }
}
</style>
