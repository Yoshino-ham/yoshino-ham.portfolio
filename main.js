// テキストの動きを設定
gsap.fromTo(
    ".article-first",1,
    {
        x: 100,
        opacity: 0,
    },
    {
        x: 0,
        opacity: 1,
        display: "block",
        scrollTrigger: {
            trigger: ".article-first",
            start: "top center",
            toggleActions: "play reverse play reverse",
        }
        
    }


);

gsap.fromTo(
    ".article-second",1,
    {
        x: 100,
        opacity: 0,
    },
    {
        x: 0,
        opacity: 1,
        display: "block",
        scrollTrigger: {
            trigger: ".article-second",
            start: "top center",
            toggleActions: "play reverse play reverse",
        }
    }

);

gsap.fromTo(
    ".article-third",1,
    {
        x: 100,
        opacity: 0,
    },
    {
        x: 0,
        opacity: 1,
        display: "block",
        scrollTrigger: {
            trigger: ".article-third",
            start: "top center",
            toggleActions: "play reverse play reverse",
        }
    }

);



