let captchaKey;
const reCaptchaIsReady = () => window && !!window.grecaptcha;

function execute(action, handleVerify) {
  window.grecaptcha.ready(() => {
    window.grecaptcha.execute(captchaKey, { action }).then(handleVerify);
  });
}

/**
 * Requests a new token associated to the action AND the client.
 *
 * @param {String} action
 *  The action the user is going to do in the page/section
 * @param {(token) => void} handleVerify
 *  The callback with the new token.
 */
export default function reCaptcha(action, handleVerify) {
  const handleCheckState = setInterval(() => {
    if (reCaptchaIsReady()) {
      execute(action, handleVerify);
      clearInterval(handleCheckState);
    }
  }, 100);
}

/**
 * Please, save your key in an environmental variable
 * instead of pasting it in the code, since can vary between
 * development and production environments.
 *
 * @param {String} key The recaptcha v3 client side key
 * @return {void}
 */
export const loadReCaptcha = key => {
  const script = document.createElement('script');

  captchaKey = key;
  script.src = `https://www.google.com/recaptcha/api.js?render=${key}`;
  script.async = true;
  script.defer = true;

  document.body.appendChild(script);
};
