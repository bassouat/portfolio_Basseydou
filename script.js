// NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  const scrollTop =
    window.pageTOffset || this.document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-50px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

// TYPED
var typed = new Typed(".typed", {
  strings: [
    "Bonjour à tous et à toutes, moi c'est Basseydou.",
    "Je suis développeur java angular depuis des années. En effet je me suis lancé dans le domaine de l'informatique et du digital suite à mon appétence pour le code et de ma veille technologique<br>Je m'intéresse à tout ce qui est nouvelle technologie en java, javascript et même en IA.<br>Je souhaite donc vous faire part de mes connaissances, mes atouts, mes expériences ainsi que mes projets développés au cours desquels j'ai pu apprendre, me forger et monter en compétences.",
  ],
  typeSpeed: 35,
});

// COMPTEUR LIVE
let compteur = 0;

$(window).scroll(function () {
  const top = $(".counter").offset().top - window.innerHeight;

  if (compteur == 0 && $(window).scrollTop() > top) {
    $(".counter-value").each(function () {
      let $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 10000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
    });
    compteur = 1;
  }
});

//AOS
AOS.init();
