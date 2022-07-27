<template>
  <footer class="footer">
    <div class="container">
      <div class="socials">
        <a href="https://www.facebook.com/zReader-103298028407156" target="_blank">
          <!-- <img src="../assets/facebook.svg" alt="Facebook" /> -->
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/zreader.app/" target="_blank">
          <!-- <img src="../assets/instagram.svg" alt="Instagram" /> -->
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.youtube.com/channel/UCKrm7dV1AYte8oTRuTH4T-g" target="_blank">
          <!-- <img src="../assets/youtube.svg" alt="Youtube" /> -->
          <i class="fa-brands fa-youtube"></i>
        </a>
      </div>
      <div class="sponsors">
        <img src="../../assets/logo_finep.png" alt="Logo Finep">
        <img src="../../assets/logo_fapesb.png" alt="Logo fapesb">
        <img src="../../assets/logo_estadobahia.png" alt="Logo Estado da Bahia">
      </div>
      <div class="developed">
        <span>Desenvolvido com <i class="fab fas fa-heart"></i> pela <a href="https://tecnosystemej.com.br"
            target="_blank">Tecno
            System</a> </span>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "FooterHome",
};
</script>
<style>
.footer {
  width: 100%;
  height: 18rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-color);
}

.container {
  width: 100%;
  padding: 0 3rem;
  display: flex;

  align-items: center;
  justify-content: space-between;
}

.socials {
  font-size: 4rem;
  gap: .5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--secondary-color);
}

.socials a {
  color: var(--secondary-color);

}

.sponsors {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

}

.sponsors img {
  width: 20rem;
  height: 10.8rem;
}

.developed {
  font-weight: 300;
  color: var(--secondary-color);
}

.developed i {
  color: var(--secondary-color);
  transform: translateY(0px);
  animation: float 5s ease-in-out infinite;
}

.developed a {
  cursor: pointer;
  color: var(--secondary-color);
  font-style: italic;
  transition: all .3s ease;
}

.developed a:hover {
  color: #fffc;
}

@keyframes float {
  0% {
    transform: translateY(0rem);
  }

  50% {
    transform: translateY(-1.2rem);
  }

  100% {
    transform: translateY(0rem);
  }
}
</style>